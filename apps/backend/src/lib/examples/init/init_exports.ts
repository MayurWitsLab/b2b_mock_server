export const initExports = {
  context: {
    domain: "ONDC:RET10",
    location: {
      city: {
        code: "std:999"
      },
      country: {
        code: "IND"
      }
    },
    action: "init",
    version: "2.0.2",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/grocery",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/grocery",
    transaction_id: "9568beb3-265a-4730-be4e-c00ba2e5e30a",
    message_id: "582eb99f-a7c1-46ae-8174-936757d2d96f",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "PT30S"
  },
  message: {
    order: {
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
          },
          add_ons: [
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
          customer: {
            person: {
              creds: [
                {
                  id: "ESG-12345678",
                  type: "License",
                  desc: "Import License No. ESG-12345678",
                  icon: "https://abcd.cdn.com/images/license-img",
                  url: "https://abcd.dnb.com/verify?id=’ESG-12345678'"
                }
              ]
            }
          },
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
      payments: [
        {
          type: "ON-FULFILLMENT",
          collected_by: "BPP"
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
              value: "12345678"
            }
          ]
        }
      ]
    }
  }
}