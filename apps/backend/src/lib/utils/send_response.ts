import { NextFunction, Response } from "express";
import axios from "axios";
import { createAuthHeader, redis } from "./index";

interface headers {
	authorization: string;
	"X-Gateway-Authorization"?: string;
}

async function send_response(
	res: Response,
	next: NextFunction,
	res_obj: any,
	transaction_id: string,
	action: string,
	scenario: string = "",
	version: any = ""
) {
	try {
		const { context } = res_obj;

		const	bpp_uri = context.bpp_uri || res_obj.bpp_uri;

		// res_obj.context.bpp_uri = bpp_uri
		if (res_obj.bpp_uri) delete res_obj.bpp_uri;

		const header = await createAuthHeader(res_obj);
		// res_obj.bpp_uri = bpp_uri
		await redis.set(
			`${transaction_id}-${action}-from-server`,
			JSON.stringify({ request: { ...res_obj } })
		);

		const headers: headers = {
			authorization: header,
		};

		if (action === "search") {
			headers["X-Gateway-Authorization"] = header;
		}

		let uri: any;

		if (scenario && version) {
			uri = `${bpp_uri}/${action}${scenario ? `?scenario=${scenario}` : ""}${
				version ? `&version=${version}` : ""
			}`;
		}else if (version){
			uri = `${bpp_uri}/${action}${version ? `?version=${version}` : ""}`;
		}else{
			uri = `${bpp_uri}/${action}${scenario ? `?scenario=${scenario}` : ""}`;

		}
		const response = await axios.post(uri, res_obj, {
			headers: { ...headers },
		});
		
		await redis.set(
			`${transaction_id}-${action}-from-server`,
			JSON.stringify({
				request: { ...res_obj },
				response: {
					response: response.data,
					timestamp: new Date().toISOString(),
				},
			})
		);

		return res.status(200).json({
			message: {
				ack: {
					status: "ACK",
				},
			},
			transaction_id,
		});
	} catch (error) {
		next(error);
	}
}

function send_nack(res: Response, message: string) {
	return res.status(400).json({
		message: {
			ack: {
				status: "NACK",
			},
		},
		error: {
			message: message,
		},
	});
}

function send_ack(res: Response) {
	return res.json({
		message: {
			ack: {
				status: "ACK",
			},
		},
	});
}
export { send_response, send_nack, send_ack };
