import { Request, Response } from "express";
import {
	B2B_BAP_MOCKSERVER_URL,
	MOCKSERVER_ID,
	createAuthHeader,
	logger,
	redis,
} from "../../../lib/utils";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const initiateStatusController = async (
	req: Request,
	res: Response
) => {
	const { scenario, transactionId } = req.body;

	const transactionKeys = await redis.keys(`${transactionId}-*`);
	const ifTransactionExist = transactionKeys.filter((e) =>
		e.includes("on_confirm-to-server")
	);

	if (ifTransactionExist.length === 0) {
		return res.status(400).json({
			message: {
				ack: {
					status: "NACK",
				},
			},
			error: {
				message: "On confirm doesn't exist",
			},
		});
	}
	const transaction = await redis.mget(ifTransactionExist);
	const parsedTransaction = transaction.map((ele) => {
		return JSON.parse(ele as string);
	});

	// console.log("parsedTransaction:::: ", parsedTransaction[0]);
	return intializeRequest(req, res, parsedTransaction[0].request, scenario);
};

const intializeRequest = async (
	req: Request,
	res: Response,
	transaction: any,
	scenario: string
) => {
	const {
		context,
		message: {
			order: { provider, provider_location, ...order },
		},
	} = transaction;
	const { transaction_id } = context.transaction_id;
	const timestamp = new Date().toISOString();

	const status = {
		context: {
			...context,
			timestamp: new Date().toISOString(),
			action: "status",
			bap_id: MOCKSERVER_ID,
			bap_uri: B2B_BAP_MOCKSERVER_URL,
		},
		message: {
			"order_id": order.id
		}
	}

	const header = await createAuthHeader(status);
	try {
		await redis.set(
			`${transaction_id}-status-from-server`,
			JSON.stringify({ request: { ...status } })
		);
		await axios.post(`${context.bpp_uri}/status`, status, {
			headers: {
				"X-Gateway-Authorization": header,
				authorization: header,
			},
		});

		return res.json({
			message: {
				ack: {
					status: "ACK",
				},
			},
			transaction_id,
		});
	} catch (error) {
		// logger.error({ type: "response", message: error });
		// console.log("ERROR :::::::::::::", (error as any).response.data.error);

		return res.json({
			message: {
				ack: {
					status: "NACK",
				},
			},
			error: {
				// message: (error as any).message,
				message: "Error Occurred while pinging NP at BPP URI",
			},
		});
	}
};
