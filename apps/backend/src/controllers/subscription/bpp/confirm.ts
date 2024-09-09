import { NextFunction, Request, Response } from "express";
import { createAuthHeader, logger, MOCKSERVER_ID, redis, redisFetchFromServer, responseBuilder, send_nack, Stop, SUBSCRIPTION_BPP_MOCKSERVER_URL, TransactionType, updateFulfillments } from "../../../lib/utils";
import { ON_ACTION_KEY } from "../../../lib/utils/actionOnActionKeys";
import { ORDER_STATUS, PAYMENT_STATUS } from "../../../lib/utils/apiConstants";
import { ERROR_MESSAGES } from "../../../lib/utils/responseMessages";
import axios, { AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";
import { getRangeUsingDurationFrequency } from "../../../lib/utils/getISODuration";

export const confirmController = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
    confirmConsultationController(req, res, next);	} catch (error) {
		return next(error);
	}
};

export const confirmConsultationController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {
			context,
			message: { order },
		} = req.body;

		const on_init = await redisFetchFromServer(ON_ACTION_KEY.ON_INIT, context?.transaction_id);

		if (on_init && on_init?.error) {
			return send_nack(res, on_init?.error?.message?on_init?.error?.message:ERROR_MESSAGES.ON_INIT_DOES_NOT_EXISTED)
		}

		if (!on_init) {
			return send_nack(res, ERROR_MESSAGES.ON_INIT_DOES_NOT_EXISTED)
		}

		const { fulfillments } = order;

		const responseMessage = {
			order: {
				...order,
				status: ORDER_STATUS.ACCEPTED,
				fulfillments,
				provider: {
					...order.provider,
					rateable: true,
				},
        payments:[
          {
            ...order?.payments[0],
            status: PAYMENT_STATUS.PAID,
          },
        ],
			},
		};

		responseBuilder(
			res,
			next,
			context,
			responseMessage,
			`${req.body.context.bap_uri}${
				req.body.context.bap_uri.endsWith("/") ? ON_ACTION_KEY.ON_CONFIRM : `/${ON_ACTION_KEY.ON_CONFIRM}`
			}`,
			`${ON_ACTION_KEY.ON_CONFIRM}`,
			"subscription"
		);

    //get range for confirm calls
    const range = getRangeUsingDurationFrequency(fulfillments[0]?.stops[0]?.time?.duration,fulfillments[0]?.stops[0]?.time?.schedule?.frequency);
    responseMessage.order["ref_order_ids"] = [
      responseMessage.order.id
    ]
    responseMessage.order.id = uuidv4() // static ID for child process on_confirm
    responseMessage.order.status = "In-Progress" // static ID for child process on_confirm

    let i = 1;
    let interval = setInterval(() => {
      if(i >= range) {
        clearInterval(interval)
      }
			childOrderResponseBuilder(
				i,
				res,
				context,
				responseMessage,
				`${req.body.context.bap_uri}${
					req.body.context.bap_uri.endsWith("/") ? "on_confirm" : "/on_confirm"
				}`,
				"on_confirm"
			);

			childOrderResponseBuilder(
				i,
				res,
				context,
				responseMessage,
				`${req.body.context.bap_uri}${
					req.body.context.bap_uri.endsWith("/") ? "on_update" : "/on_update"
				}`,
				"on_update"
			);
      i++;
    }, 60000)
	} catch (error) {
		next(error);
	}
};


export const childOrderResponseBuilder = async (
	id: number,
	res: Response,
	reqContext: object,
	message: object,
	uri: string,
	action: string,
	error?: object | undefined
) => {
	let ts = new Date();
	ts.setSeconds(ts.getSeconds() + 1);
	const sandboxMode = res.getHeader("mode") === "sandbox";

		

	var async: { message: object; context?: object; error?: object } = {
		context: {},
		message,
	};
	const bppURI = SUBSCRIPTION_BPP_MOCKSERVER_URL;
	async = {
		...async,
		context: {
			...reqContext,
			bpp_id: MOCKSERVER_ID,
			bpp_uri: bppURI,
			timestamp: ts.toISOString(),
			action: action,
		},
	};

	if (error) {
		async = { ...async, error };
	}

	const header = await createAuthHeader(async);
	if (sandboxMode) {
		var log: TransactionType = {
			request: async,
		};


		try {
			const response = await axios.post(uri + "?mode=mock", async, {
				headers: {
					authorization: header,
				},
			});

			log.response = {
				timestamp: new Date().toISOString(),
				response: response.data,
			};

			await redis.set(
				`${(async.context! as any).transaction_id}-${action}-from-server-${id}`, // saving ID with on_confirm child process (duplicate keys are not allowed)
				JSON.stringify(log)
			);
			console.log(`>>>${(async.context! as any).transaction_id}-${action}-from-server-${id}`)
		} catch (error) {
			const response =
				error instanceof AxiosError
					? error?.response?.data
					: {
							message: {
								ack: {
									status: "NACK",
								},
							},
							error: {
								message: error,
							},
					  };
			log.response = {
				timestamp: new Date().toISOString(),
				response: response,
			};
			await redis.set(
				`${(async.context! as any).transaction_id}-${action}-from-server-${id}`,
				JSON.stringify(log)
			);

			if(error instanceof AxiosError && id === 0 && action === "on_confirm") {
				res.status(error.status || 500).json(error)
			}

			if(error instanceof AxiosError) {
				console.log(error.response?.data)
			}

			throw error;
		}

		logger.info({
			type: "response",
			action: action,
			transaction_id: (reqContext as any).transaction_id,
			message: { sync: { message: { ack: { status: "ACK" } } } },
		});

		console.log(`Subscription Child Process (action: ${action}) ${id} : `, {
			message: {
				ack: {
					status: "ACK",
				},
			},
		});
		return;
	} else {
		logger.info({
			type: "response",
			action: action,
			transaction_id: (reqContext as any).transaction_id,
			message: { sync: { message: { ack: { status: "ACK" } } } },
		});

		

		console.log(`Subscription Child Process (action: ${action}) ${id} : `, {
			sync: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			async,
		});
		return;
	}
};