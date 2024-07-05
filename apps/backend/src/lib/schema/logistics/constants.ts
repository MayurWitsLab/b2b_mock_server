export const VERSION = "2.0.0";

export const CONTEXT_DOMAIN = ["ONDC:LOG10", "ONDC:LOG11"];

export const MESSAGE_INTENT_CATEGORY_DESCRIPTOR_CODE = [
	"Surface_Delivery",
	"Air_Delivery",
	"Ocean_Delivery",
];

export const MESSAGE_INTENT_FULFILLMENTS_TYPE = ["Delivery", "Return"];

export const Delivery_Terms_Tags = ["Ready_To_Ship","AWB_No","RTO_Action","Incoterms", "Named_Place_Of_Delivery"];

export const PAYMENT_TERMS = ["Settlement_Details", "Collection_Details"];
export const PAYMENT_BPP_TERMS = [
	"Counterparty",
	"Mode",
	"Beneficiary_Name",
	"Bank_Account_No",
	"Ifsc_Code",
	"UPI_Address",
	"Amount",
	"Type",
];
 
export const FULFILLMENT_TYPES = ["Delivery","Return","RTO"];
export const DELIVERY_CATEGORIES=["Surface_Delivery","Air_Delivery","Ocean_Delivery"]
export const PROVIDER_TERMS = ["BPP_TERMS", "KYC"];
export const PROVIDER_TERMS_BPP = ["Static_Terms",
	"Static_Terms_New", "Effective_Date", "url", "required"]
export const TERMS = [
	"Package_Weight",
	"Package_Dimensions",
	"Package_Details",
	"Cold_Logistics",
	"BAP_Terms",
	"Diff_Proof",
];
export const LOG_BPP_TERMS = [
	"Accept_BPP_Terms",

	"Delay_Interest",
	"Court_Jurisdiction",
	"Mandatory_Arbitration",
	"Max_Liability_Cap",
	"Max_Liability",
	"Temp_Max",
	"Temp_Min",
	"Temp_Unit",
	"Temp_Control",
	"Package_Count",
	"Shipment_Value",
	"Stackable",
	"Dangerous_Goods",
	"Category",
	"Height",
	"Breadth",
	"Length",
	"Unit",
	"Value",
	"Package_Dimensions_Diff",
	"Counterparty",
];
