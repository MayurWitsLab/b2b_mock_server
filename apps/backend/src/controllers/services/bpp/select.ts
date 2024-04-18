import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import {
	SERVICES_EXAMPLES_PATH,
	responseBuilder,
	quoteCreatorService,
	quoteCreatorServiceCustomized,
	checkIfCustomized,
} from "../../../lib/utils";
import path from "path";
import fs from "fs";
import YAML from "yaml";

export const selectController = (req: Request, res: Response) => {
	const { scenario } = req.query;
	switch (scenario) {
		// schedule_confirmed, schedule_rejected 
		case "schedule_confirmed":
			if (checkIfCustomized(req.body.message.order.items)) {
				return selectServiceCustomizationConfirmedController(req, res);
			}
			selectConsultationConfirmController(req, res);
			break;
		case "schedule_rejected ":
			selectConsultationRejectController(req, res);
			break;
		// case "service-confirmed":
		// 	selectServiceConfirmController(req, res);
		// 	break;
		// case "service-rejected":
		// 	selectServiceRejectController(req, res);
		// 	break;
		// case "nack":
		// 	selectNackController(req, res);
		// 	break;
		default:
			// res.status(404).json({
			// 	message: {
			// 		ack: {
			// 			status: "NACK",
			// 		},
			// 	},
			// 	error: {
			// 		message: "Invalid scenario",
			// 	},
			// });
			if (checkIfCustomized(req.body.message.order.items)) {
				return selectServiceCustomizationConfirmedController(req, res);
			}
			selectConsultationConfirmController(req, res);
			break;
	}
};

const selectConsultationConfirmController = (
	req: Request,
	res: Response
) => {
	const { context, message } = req.body;
	const { locations, ...provider } = message.order.provider;

	var responseMessage = {
		order: {
			provider,
			payments: message.order.payments.map(({ type }: { type: string }) => ({
				type,
				collected_by: "BAP",
			})),
			items: message.order.items.map(({ ...remaining }:
				{ location_ids: any; remaining: any; }) => ({ ...remaining, fulfillment_ids: [uuidv4()] })
			),
			fulfillments: message.order.fulfillments.map(({ id, stops, ...each }: any) => ({
				id,
				tracking: false,
				state: {
					descriptor: {
						code: "Serviceable"
					}
				},
				stops
			})),
			quote: quoteCreatorService(message.order.items),
		},
	};
	// const file = fs.readFileSync(
	// 	path.join(
	// 		SERVICES_EXAMPLES_PATH,
	// 		"on_select/on_select_consultation_confirmed.yaml"
	// 	)
	// );
	// const response = YAML.parse(file.toString());

	return responseBuilder(
		res,
		context,
		responseMessage,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_select" : "/on_select"
		}`,
		`on_select`,
		"services"
	);
};

const selectConsultationRejectController = (
	req: Request,
	res: Response
) => {
	const { context } = req.body;
	const file = fs.readFileSync(
		path.join(
			SERVICES_EXAMPLES_PATH,
			"on_select/on_select_consultation_rejected.yaml"
		)
	);
	const response = YAML.parse(file.toString());

	return responseBuilder(
		res,
		context,
		response.value.message,
		`${context.bap_uri}/on_select`,
		`on_select`,
		"services"
	);
};

const selectServiceCustomizationConfirmedController = (
	req: Request,
	res: Response
) => {
	const { context, message } = req.body;
	const { locations, ...provider } = message.order.provider;
	const { id: parent_item_id, location_ids, ...item } = message.order.items[0]

	const responseMessage = {
		order: {
			provider,
			payments: message.order.payments.map(({ type }: { type: string }) => ({
				type,
				collected_by: "BAP",
			})),
			items: [
				{ parent_item_id, location_ids, fulfilment_ids: [uuidv4()] },
				...message.order.items.slice(1).map(({ location_ids, ...remaining }:
					{ location_ids: any; remaining: any; }) => ({ ...remaining, fulfilment_ids: [uuidv4()] })
				)
			],
			fulfillments: message.order.fulfillments.map(({ stops, type, ...each }: any) => ({
				id: uuidv4(),
				type,
				tracking: false,
				state: {
					descriptor: {
						code: "Serviceable"
					}
				},
				stops
			})),
			quote: quoteCreatorServiceCustomized(message.order.items),
		},
	};

	return responseBuilder(
		res,
		context,
		responseMessage,
		`${context.bap_uri}/on_select`,
		`on_select`,
		"services"
	);
};

const selectServiceConfirmController = (req: Request, res: Response) => {
	const { context } = req.body;
	const file = fs.readFileSync(
		path.join(
			SERVICES_EXAMPLES_PATH,
			"on_select/on_select_service_confirmed.yaml"
		)
	);
	const response = YAML.parse(file.toString());

	return responseBuilder(
		res,
		context,
		response.value.message,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_select" : "/on_select"
		}`,
		`on_select`,
		"services"
	);
};

const selectServiceRejectController = (req: Request, res: Response) => {
	const { context } = req.body;
	const file = fs.readFileSync(
		path.join(
			SERVICES_EXAMPLES_PATH,
			"on_select/on_select_service_rejected.yaml"
		)
	);
	const response = YAML.parse(file.toString());

	return responseBuilder(
		res,
		context,
		response.value.message,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_select" : "/on_select"
		}`,
		`on_select`,
		"services"
	);
};

const selectNackController = (req: Request, res: Response) => {
	const { context } = req.body;
	const file = fs.readFileSync(
		path.join(
			SERVICES_EXAMPLES_PATH,
			"on_select/on_select_nack.yaml"
		)
	);
	const response = YAML.parse(file.toString());

	return responseBuilder(
		res,
		context,
		response.value.message,
		`${req.body.context.bap_uri}${req.body.context.bap_uri.endsWith("/") ? "on_select" : "/on_select"
		}`,
		`on_select`,
		"services"
	);
};
