export const onStatusPickedUp = {
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
    action: "on_status",
    version: "2.0.2",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/grocery",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/grocery",
    transaction_id: "9568beb3-265a-4730-be4e-c00ba2e5e30a",
    message_id: "2052ef5e-2ec7-4c21-96f7-dec4b2309010",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "PT30S"
  },
  message: {
    order: {
      id: "O1",
      state: "In-progress",
      provider: {
        id: "P1",
        locations: [
          {
            id: "L1"
          }
        ]
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
          }
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
        email: "nobody@nomail.com",
        phone: "9886098860"
      },
      fulfillments: [
        {
          id: "F1",
          "@ondc/org/provider_name": "Loadshare",
          type: "Delivery",
          tracking: false,
          state: {
            descriptor: {
              code: "Order-picked-up"
            }
          },
          stops: [
            {
              type: "start",
              location: {
                id: "L1",
                descriptor: {
                  name: "ABC Store",
                  images: [
                    "https://gf-integration/images/5.png"
                  ]
                },
                gps: "12.956399,77.636803"
              },
              time: {
                range: {
                  start: "2023-02-03T10:00:00.000Z",
                  end: "2023-02-03T10:30:00.000Z"
                },
                timestamp: "2023-02-03T10:25:00.000Z"
              },
              instructions: {
                name: "Proof of pickup",
                short_desc: "Proof of pickup details",
                long_desc: "Proof of pickup details",
                images: [
                  "https://image1_url.png"
                ]
              },
              contact: {
                phone: "9886098860",
                email: "nobody@nomail.com"
              }
            },
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
              time: {
                range: {
                  start: "2023-02-03T11:00:00.000Z",
                  end: "2023-02-03T11:30:00.000Z"
                }
              },
              instructions: {
                name: "Proof of delivery",
                short_desc: "Proof of delivery details",
                long_desc: "Proof of delivery details",
                images: [
                  "https://image1_url.png"
                ]
              },
              contact: {
                phone: "9886098860"
              },
              agent: {
                person: {
                  name: "Ramu"
                },
                contact: {
                  phone: "9886098860"
                }
              }
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
          "@ondc/org/buyer_app_finder_fee_amount": "3",
          "@ondc/org/settlement_basis": "delivery",
          "@ondc/org/settlement_window": "P1D",
          "@ondc/org/withholding_amount": "10.00",
          "@ondc/org/settlement_details": [
            {
              settlement_counterparty: "seller-app",
              settlement_phase: "sale-amount",
              beneficiary_name: "xxxxx",
              settlement_reference: "XXXX",
              settlement_status: "PAID",
              settlement_timestamp: "2023-02-04T10:00:00.000Z",
              settlement_type: "upi",
              upi_address: "gft@oksbi",
              settlement_bank_account_no: "XXXXXXXXXX",
              settlement_ifsc_code: "XXXXXXXXX",
              bank_name: "xxxx",
              branch_name: "xxxx"
            }
          ]
        }
      ],
      created_at: "2023-02-03T09:30:00.000Z",
      updated_at: "2023-02-03T10:00:00.201Z"
    }
  }
}