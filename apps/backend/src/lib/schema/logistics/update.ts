import { DOMAIN, LOG_BPP_TERMS, TERMS, VERSION } from "./constants";

export const updateSchema = {
	$id: "updateSchema",
	type: "object",
	properties: {
		context: {
			type: "object",
			properties: {
				domain: {
					type: "string",
					enum: DOMAIN,
				},
				location: {
					type: "object",
					properties: {
						city: {
							type: "object",
							properties: {
								code: {
									type: "string",
								},
							},
							required: ["code"],
						},
						country: {
							type: "object",
							properties: {
								code: {
									type: "string",
								},
							},
							required: ["code"],
						},
					},
					required: ["city", "country"],
				},
				action: {
					type: "string",
				},
				version: {
					type: "string",
					const: VERSION,
				},
				bap_id: {
					type: "string",
				},
				bap_uri: {
					type: "string",
				},
				bpp_id: {
					type: "string",
				},
				bpp_uri: {
					type: "string",
				},
				transaction_id: {
					type: "string",
				},
				message_id: {
					type: "string",
				},
				timestamp: {
					type: "string",
				},
				ttl: {
					type: "string",
				},
			},
			required: [
				"domain",
				"location",
				"action",
				"version",
				"bap_id",
				"bap_uri",
				"bpp_id",
				"bpp_uri",
				"transaction_id",
				"message_id",
				"timestamp",
				"ttl",
			],
		},
		message: {
			type: "object",
			properties: {
				update_target: {
					type: "string",
				},
				order: {
					type: "object",
					properties: {
						id: {
							type: "string",
						},
						status: {
							type: "string",
							enum: ["Accepted"],
						},
						provider: {
							type: "object",
							properties: {
								id: {
									type: "string",
								},
								locations: {
									type: "array",
									items: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
										},
										required: ["id"],
									},
								},
							},
							required: ["id", "locations"],
						},
						items: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									fulfillment_ids: {
										type: "array",
										items: {
											type: "string",
										},
									},
									category_ids: {
										type: "array",
										items: {
											type: "string",
											enum:["P2P","P2H2P"]
										},
									},
									descriptor: {
										type: "object",
										properties: {
											code: {
												type: "string",
											},
										},
										required: ["code"],
									},
								},
								required: [
									"id",
									"fulfillment_ids",
									"category_ids",
									"descriptor",
								],
							},
						},
						fulfillments: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									type: {
										type: "string",
									},
									state: {
										type: "object",
										properties: {
											descriptor: {
												type: "object",
												properties: {
													code: {
														type: "string",
													},
												},
												required: ["code"],
											},
										},
										required: ["descriptor"],
									},
									tracking: {
										type: "boolean",
									},
									stops: {
										type: "array",
										items: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												parent_stop_id: {
													type: "string",
												},
												type: {
													type: "string",
												},
												instructions: {
													type: "object",
													properties: {
														code: {
															type: "string",
														},
														short_desc: {
															type: "string",
														},
														long_desc: {
															type: "string",
														},
														additional_desc: {
															type: "object",
															properties: {
																content_type: {
																	type: "string",
																},
																url: {
																	type: "string",
																},
															},
															required: ["content_type", "url"],
														},
													},
													required: [
														"code",
														"short_desc",
														"long_desc",
														"additional_desc",
													],
												},
												authorization: {
													type: "object",
													properties: {
														type: {
															type: "string",
														},
														token: {
															type: "string",
														},
														valid_from: {
															type: "string",
														},
														valid_to: {
															type: "string",
														},
													},
													required: ["type", "token", "valid_from", "valid_to"],
												},
											},
											required: [
												"id",
												"parent_stop_id",
												"type",
												"instructions",
												"authorization",
											],
										},
									},
									tags: {
										type: "array",
										items: {
											type: "object",
											properties: {
												descriptor: {
													type: "object",
													properties: {
														code: {
															type: "string",
															enum: ["Delivery_Terms"],
														},
													},
													required: ["code"],
												},
												list: {
													type: "array",
													items: {
														type: "object",
														properties: {
															descriptor: {
																type: "object",
																properties: {
																	code: {
																		type: "string",
																		enum: ["Ready_To_Ship","AWB_No","Eway_Bill_No"],
																	},
																},
																required: ["code"],
															},
															value: {
																type: "string",
															},
														},
														required: ["descriptor", "value"],
													},
												},
											},
											required: ["descriptor", "list"],
										},
									},
								},
								required: ["id", "type", "state", "tracking", "stops", "tags"],
							},
						},
						tags: {
							type: "array",
							items: {
								type: "object",
								properties: {
									descriptor: {
										type: "object",
										properties: {
											code: {
												type: "string",
												enum:TERMS,
											},
										},
										required: ["code"],
									},
									list: {
										type: "array",
										items: {
											type: "object",
											properties: {
												descriptor: {
													type: "object",
													properties: {
														code: {
															type: "string",
															enum: LOG_BPP_TERMS,
														},
													},
													required: ["code"],
												},
												value: {
													type: "string",
												},
											},
											required: ["descriptor", "value"],
										},
									},
								},
								required: ["descriptor", "list"],
							},
						},
						updated_at: {
							type: "string",
						},
					},
					required: [
						"id",
						"status",
						"provider",
						"items",
						"fulfillments",
						"tags",
						"updated_at",
					],
				},
			},
			required: ["update_target", "order"],
		},
	},
	required: ["context", "message"],
};
