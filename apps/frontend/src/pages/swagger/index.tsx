import { Toolbar } from "@mui/material";
import "swagger-ui-react/swagger-ui.css";
import { SwaggerDownloadButton } from "../../components";
import b2bswaggerSpec from "openapi-specs/retail-b2b.json";
import serviceswaggerSpec from "openapi-specs/services.json";
import logisticsswaggerSpec from "../../../../../packages/openapi/openapi/logistics/build/swagger.json";
import { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import { useDomain } from "../../utils/hooks";

export const Swagger = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [swaggerSpec, setSwaggerSpec] = useState<any>(b2bswaggerSpec);
	const [fileName, setFileName] = useState("B2b.yaml");
	const { domain } = useDomain();

	useEffect(() => {
		let swaggerFile
		switch(domain){
			case "retail":
				swaggerFile=b2bswaggerSpec
				break;
			case "services":
				swaggerFile=serviceswaggerSpec
				break;
			case "logistics":
				swaggerFile=logisticsswaggerSpec
				break;
			case "Subscription":
				swaggerFile=serviceswaggerSpec
				break;
			default:
				swaggerFile=serviceswaggerSpec
				break;
		}
		const yamlFileName = domain === "retail" ? "b2b.yaml" : "services.yaml";
		setSwaggerSpec(swaggerFile);
		setFileName(yamlFileName);
	}, [domain]);

	return (
		<>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<SwaggerDownloadButton swaggerYaml={swaggerSpec} fileName={fileName} />
			</Toolbar>
			<SwaggerUI spec={swaggerSpec} />
		</>
	);
};
