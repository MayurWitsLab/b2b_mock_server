export const onInitRejectRFQ = {
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
      action: "on_init",
      version: "2.0.1",
      bap_id: "buyerapp.com",
      bap_uri: "https://buyerapp.com/grocery",
      bpp_id: "sellerapp.com",
      bpp_uri: "https://sellerapp.com/grocery",
      transaction_id: "T1",
      message_id: "M1",
      timestamp: "2023-01-08T22:00:30.000Z",
      ttl: "PT30S"
    },
    message: {
      order: {
        provider: {
          id: "P1"
        },
        provider_location: {
          id: "L1"
        },
        items: [
          {
            id: "I1",
            fulfillment_ids: [
              "F1"
            ],
            quantity: {
              selected: {
                count: 200
              }
            },
            "add-ons": [
              {
                id: "78787723"
              }
            ],
            tags: [
              {
                descriptor: {
                  code: "BUYER_TERMS"
                },
                list: [
                  {
                    descriptor: {
                      code: "ITEM_REQ"
                    },
                    value: "free text on Item Customization"
                  },
                  {
                    descriptor: {
                      code: "PACKAGING_REQ"
                    },
                    value: "free text on packaging Customization"
                  }
                ]
              }
            ]
          }
        ],
        billing: {
          name: "ONDC buyer",
          address: "B005 aaspire heights, Jurong East, SGP, 680230",
          state: {
            name: "Jurong East"
          },
          city: {
            name: "Jurong East"
          },
          tax_id: "XXXXXXXXXXXXXXX",
          email: "nobody@nomail.com",
          phone: "9886098860"
        },
        fulfillments: [
          {
            id: "F1",
            type: "Delivery",
            tracking: false,
            stops: [
              {
                type: "end",
                location: {
                  gps: "1.3806217468119772, 103.74636438437074",
                  address: "My House #, My buildin",
                  city: {
                    name: "Jurong East"
                  },
                  country: {
                    code: "SGP"
                  },
                  area_code: "680230",
                  state: {
                    name: ""
                  }
                },
                contact: {
                  phone: "9886098860"
                }
              }
            ],
            tags: [
              {
                descriptor: {
                  code: "DELIVERY_TERMS"
                },
                list: [
                  {
                    descriptor: {
                      code: "INCOTERMS"
                    },
                    value: "CIF"
                  },
                  {
                    descriptor: {
                      code: "NAMED_PLACE_OF_DELIVERY"
                    },
                    value: "SGP"
                  }
                ]
              }
            ]
          }
        ],
        quote: {
          price: {
            currency: "INR",
            value: "53600"
          },
          breakup: [
            {
              "@ondc/org/item_id": "I1",
              "@ondc/org/item_quantity": {
                count: 200
              },
              title: "Dhara Mustard Oil",
              "@ondc/org/title_type": "item",
              price: {
                currency: "INR",
                value: "50000"
              },
              item: {
                price: {
                  currency: "INR",
                  value: "250"
                }
              }
            },
            {
              "@ondc/org/item_id": "F1",
              title: "Delivery charges",
              "@ondc/org/title_type": "delivery",
              price: {
                currency: "INR",
                value: "4000"
              }
            },
            {
              "@ondc/org/item_id": "F1",
              title: "Packing charges",
              "@ondc/org/title_type": "packing",
              price: {
                currency: "INR",
                value: "500"
              }
            },
            {
              "@ondc/org/item_id": "I1",
              title: "Tax",
              "@ondc/org/title_type": "tax",
              price: {
                currency: "INR",
                value: "0"
              }
            },
            {
              "@ondc/org/item_id": "I1",
              title: "Discount",
              "@ondc/org/title_type": "discount",
              price: {
                currency: "INR",
                value: "-1000"
              }
            },
            {
              "@ondc/org/item_id": "F1",
              title: "Convenience Fee",
              "@ondc/org/title_type": "misc",
              price: {
                currency: "INR",
                value: "100"
              }
            }
          ],
          ttl: "P1D"
        },
        payments: [
          {
            "@ondc/org/buyer_app_finder_fee_type": "percent",
            "@ondc/org/buyer_app_finder_fee_amount": "0",
            "@ondc/org/settlement_basis": "delivery",
            "@ondc/org/settlement_window": "P1D",
            "@ondc/org/withholding_amount": "10.00",
            "@ondc/org/settlement_details": [
              {
                settlement_counterparty: "buyer-app",
                settlement_phase: "sale-amount",
                settlement_type: "upi",
                beneficiary_name: "xxxxx",
                upi_address: "gft@oksbi",
                settlement_bank_account_no: "XXXXXXXXXX",
                settlement_ifsc_code: "XXXXXXXXX",
                bank_name: "xxxx",
                branch_name: "xxxx"
              }
            ]
          }
        ],
        tags: [
          {
            descriptor: {
              code: "buyer_id"
            },
            list: [
              {
                descriptor: {
                  code: "buyer_id_code"
                },
                value: "gst"
              },
              {
                descriptor: {
                  code: "buyer_id_no"
                },
                value: "xxxxxxxxxxxxxxx"
              }
            ]
          }
        ]
      }
    },
    error: {
      type: "DOMAIN-ERROR",
      code: "50005",
      message: "Incoterm - CIF not supported"
    }
  }