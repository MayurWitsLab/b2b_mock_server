import { Router } from "express";
import { jsonSchemaValidator, redisRetriever, VersionType } from "../../../middlewares";
import { onSearchController } from "./onSearch";
import { onInitController } from "./onInit";
import { onSelectController } from "./onSelect";
import { onConfirmController } from "./onConfirm";
import { onStatusController } from "./onStatus";
import { onUpdateController } from "./onUpdate";
import { onCancelController } from "./onCancel";
import { redis } from "../../../lib/utils";
let version:VersionType
export const bapRouter = Router();

bapRouter.post(
	"/on_search",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_search", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_search" }),
	redisRetriever,
	onSearchController
);

bapRouter.post(
	"/on_init",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_init", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_init" }),
	redisRetriever,
	onInitController
);
bapRouter.post(
	"/on_select",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_select", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_select" }),
	redisRetriever,
	onSelectController
);

bapRouter.post(
	"/on_confirm",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_confirm", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_confirm" }),
	redisRetriever,
	onConfirmController
);

bapRouter.post(
	"/on_status",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_status", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_status" }),
	redisRetriever,
	onStatusController
);

bapRouter.post(
	"/on_update",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_update", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_update" }),
	redisRetriever,
	onUpdateController
);


bapRouter.post(
	"/on_cancel",
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
		
		jsonSchemaValidator({ domain: "retail", action: "on_cancel", VERSION: version });
		next()
	},
	// jsonSchemaValidator({ domain: "retail", action: "on_cancel" }),
	redisRetriever,
	onCancelController
)