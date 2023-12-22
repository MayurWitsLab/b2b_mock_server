export const selectDomestic = {
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
    action: "select",
    version: "2.0.1",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/grocery",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/grocery",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "P1D"
  },
  message: {
    order: {
      provider: {
        id: "P1",
        locations: [
          {
            id: "L1"
          }
        ],
        ttl: "P1D"
      },
      items: [
        {
          id: "I1",
          location_ids: [
            "L1"
          ],
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
      fulfillments: [
        {
          id: "F1",
          type: "Delivery",
          stops: [
            {
              type: "end",
              location: {
                gps: "12.974002,77.613458",
                area_code: "560001",
                city: {
                  name: "Bengaluru"
                },
                country: {
                  code: "IND"
                },
                state: {
                  name: "Karnataka"
                }
              },
              contact: {
                phone: "9886098860"
              }
            }
          ]
        }
      ],
      payments: [
        {
          type: "ON-FULFILLMENT"
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
  }
}