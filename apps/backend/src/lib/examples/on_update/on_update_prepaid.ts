export const onUpdatePrepaid = {
  context: {
    domain: "ONDC:RET10",
    location: {
      city: {
        code: "std:080"
      },
      country: {
        code: "IND"
      }
    },
    action: "on_update",
    version: "2.0.2",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/grocery",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/grocery",
    transaction_id: "9568beb3-265a-4730-be4e-c00ba2e5e30a",
    message_id: "21d9d8b4-723b-44b4-a205-16626cbbfe4f",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "PT30S"
  },
  message: {
    order: {
      id: "O1",
      state: "Accepted",
      provider: {
        id: "P1"
      },
      items: [
        {
          id: "I1",
          quantity: {
            selected: {
              count: 200
            }
          }
        }
      ],
      payments: [
        {
          uri: "https://ondc.transaction.com/payment",
          tl_method: "http/get",
          params: {
            currency: "INR",
            transaction_id: "3937",
            amount: "53600"
          },
          status: "PAID",
          type: "PRE-FULFILLMENT",
          collected_by: "BPP",
          "@ondc/org/buyer_app_finder_fee_type": "percent",
          "@ondc/org/buyer_app_finder_fee_amount": "0",
          "@ondc/org/settlement_basis": "delivery",
          "@ondc/org/settlement_window": "P1D",
          "@ondc/org/withholding_amount": "10.00",
          "@ondc/org/settlement_details": [
            {
              settlement_counterparty: "buyer-app",
              settlement_phase: "finder-fee",
              settlement_type: "upi",
              upi_address: "gft@oksbi",
              settlement_bank_account_no: "XXXXXXXXXX",
              settlement_ifsc_code: "XXXXXXXXX",
              beneficiary_name: "xxxxx",
              bank_name: "xxxx",
              branch_name: "xxxx"
            }
          ]
        }
      ]
    }
  }
}