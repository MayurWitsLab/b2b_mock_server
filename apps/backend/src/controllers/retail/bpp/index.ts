import { Router } from "express";
import { searchController } from "./search";
import { initController } from "./init";
import { selectController } from "./select";
import { confirmController } from "./confirm";
import { statusController } from "./status";
import { updateController } from "./update";
import { jsonSchemaValidator, redisRetriever } from "../../../middlewares";
import { cancelController } from "./cancel";
import { logger, redis } from "../../../lib/utils";
import { VersionType } from "../../../middlewares";
export const bppRouter = Router();
let version: VersionType | undefined;
// let VERSION
bppRouter.post(
	"/search",
	async (req, res, next) => {
		try {
			const { context, message } = req.body;
			const buyerIdTag = message.intent.tags.find(
				(tag: any) => tag.descriptor.code === "buyer_id"
			);

			if (buyerIdTag) {
				const buyerIdNo = buyerIdTag.list.find(
					(item: any) => item.descriptor.code === "buyer_id_no"
				);

				if (buyerIdNo && buyerIdNo.value) {
					version = "b2b" as VersionType; // Type assertion
				} else {
					version = "b2c" as VersionType; // Type assertion
				}
			} else {
				version = "b2c" as VersionType; // Type assertion
			}
			if (
				context?.location?.city?.code?.toLowerCase() === "un:sin" ||
				context?.location?.city?.code?.toLowerCase() === "std:999"
			) {
				version = "b2c";
			}
		} catch (err) {
			logger.error("eerrr", err);
		}

		const validationResult = jsonSchemaValidator({
			domain: "retail",
			action: "search",
			VERSION: version, // version is now guaranteed to be a string
		});

		// Continue with the next middlewares or send a response
		next();
	},
	//  jsonSchemaValidator({ domain: "retail", action: "search" ,VERSION}),
	redisRetriever,
	searchController
);

bppRouter.post(
	"/init",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "init", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "init", VERSION: version }),
	redisRetriever,
	initController
);

bppRouter.post(
	"/select",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "select", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "select", VERSION: version }),
	redisRetriever,
	selectController
);

bppRouter.post(
	"/confirm",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "confirm", VERSION: version });
		next()
	},
	// jsonSchemaValidator({
	// 	domain: "retail",
	// 	action: "confirm",
	// 	VERSION: version,
	// }),
	redisRetriever,
	confirmController
);

bppRouter.post(
	"/update",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "update", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "update", VERSION: version }),
	redisRetriever,
	updateController
);

bppRouter.post(
	"/status",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "status", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "status", VERSION: version }),
	redisRetriever,
	statusController
);

bppRouter.post(
	"/cancel",
	async (req, res, next) => {
		const { context } = req.body; // Access context again
		let version: VersionType; // Define version locally

		const VERSION=await redis.keys(`${context.transaction_id}-version-*`)
		const parts = VERSION[0].split('-');
		const versionn = parts[parts.length - 1];
		if (context?.location?.city?.code?.toLowerCase() === "un:sin" || context?.location?.city?.code?.toLowerCase() === "std:999") {
			version = "b2c" as VersionType;
		} else {
			version = "b2b" as VersionType;
		}

		console.log(`version at on_select: ${version}`);
		
		jsonSchemaValidator({ domain: "retail", action: "cancel", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "cancel", VERSION: version }),
	redisRetriever,
	cancelController
);
