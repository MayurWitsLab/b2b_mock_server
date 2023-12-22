export const onSearchGrocery = {
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
    action: "on_search",
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
    catalog: {
      fulfillments: [
        {
          id: "1",
          type: "Delivery"
        },
        {
          id: "2",
          type: "Self-Pickup"
        }
      ],
      payments: [
        {
          id: "1",
          type: "PRE-FULFILLMENT"
        },
        {
          id: "2",
          type: "ON-FULFILLMENT"
        },
        {
          id: "3",
          type: "POST-FULFILLMENT"
        }
      ],
      descriptor: {
        name: "ABC store",
        short_desc: "Online eCommerce Store",
        long_desc: "Online eCommerce Store",
        images: [
          {
            url: "https://abc.com/images/1-shop-img"
          }
        ]
      },
      providers: [
        {
          id: "P1",
          descriptor: {
            name: "ABC store",
            code: "P001",
            short_desc: "ABC store",
            long_desc: "ABC store",
            additional_desc: {
              url: "chat link",
              content_type: "text/html"
            },
            images: [
              {
                url: "https://abc.com/images/1-shop-img"
              }
            ]
          },
          rating: "4.4",
          ttl: "PT1D",
          locations: [
            {
              id: "L1",
              gps: "12.967555,77.749666",
              address: "Jayanagar 4th Block",
              city: {
                code: "std:080",
                name: "Bengaluru"
              },
              state: {
                code: "KA"
              },
              country: {
                code: "IND"
              },
              area_code: "560076"
            }
          ],
          tags: [
            {
              descriptor: {
                code: "serviceability"
              },
              list: [
                {
                  descriptor: {
                    code: "location"
                  },
                  value: "L1"
                },
                {
                  descriptor: {
                    code: "category"
                  },
                  value: "RET10-1042"
                },
                {
                  descriptor: {
                    code: "type"
                  },
                  value: "12"
                },
                {
                  descriptor: {
                    code: "val"
                  },
                  value: "IND"
                },
                {
                  descriptor: {
                    code: "unit"
                  },
                  value: "country"
                }
              ]
            },
            {
              descriptor: {
                code: "seller_terms"
              },
              list: [
                {
                  descriptor: {
                    code: "gst_credit_invoice"
                  },
                  value: "Y"
                }
              ]
            },
            {
              descriptor: {
                code: "seller_id"
              },
              list: [
                {
                  descriptor: {
                    code: "seller_id_code"
                  },
                  value: "gst"
                },
                {
                  descriptor: {
                    code: "seller_id_no"
                  },
                  value: "xxxxxxxxxxxxxxx"
                }
              ]
            }
          ],
          categories: [
            {
              id: "V1",
              descriptor: {
                name: "Variant Group 1"
              },
              tags: [
                {
                  descriptor: {
                    code: "type"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "type"
                      },
                      value: "variant_group"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "attr"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "name"
                      },
                      value: "item.tags.attribute.colour"
                    },
                    {
                      descriptor: {
                        code: "seq"
                      },
                      value: "1"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "attr"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "name"
                      },
                      value: "item.tags.attribute.size"
                    },
                    {
                      descriptor: {
                        code: "seq"
                      },
                      value: "2"
                    }
                  ]
                }
              ]
            }
          ],
          items: [
            {
              id: "I1",
              parent_item_id: "V1",
              descriptor: {
                name: "Dhara Mustard Oil",
                code: "UPC / EAN code",
                short_desc: "Dhara refined mustard oil",
                long_desc: "Dhara refined mustard oil",
                images: [
                  {
                    url: "https://abc.com/images/207.png"
                  }
                ],
                media: [
                  {
                    mimetype: "video/mp4",
                    url: "video_url"
                  }
                ]
              },
              creator: {
                descriptor: {
                  name: "Mother Dairy",
                  contact: {
                    name: "Raj Kumar",
                    address: {
                      full: "Mother Dairy Fruit & Vegetable Pvt Ltd,A-3, NDDB House, Sector-1, Noida,Uttar Pradesh-201301"
                    },
                    phone: "18001801018",
                    email: "consumer.services@motherdairy.com"
                  }
                }
              },
              price: {
                currency: "INR",
                value: "300.00",
                offered_value: "250.00",
                maximum_value: "350.00"
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "millilitre",
                    value: "500"
                  }
                },
                available: {
                  measure: {
                    unit: "millilitre",
                    value: "500"
                  },
                  count: "2000"
                },
                maximum: {
                  measure: {
                    unit: "millilitre",
                    value: "500"
                  },
                  count: "4000"
                }
              },
              category_ids: [
                "RET10-1042"
              ],
              fulfillment_ids: [
                "1"
              ],
              location_ids: [
                "L1"
              ],
              payment_ids: [
                "2"
              ],
              "add-ons": [
                {
                  id: "78787723",
                  descriptor: {
                    name: "Dhara Sunflower Oil",
                    short_desc: "Dhara Sunflower Oil",
                    long_desc: "Dhara Sunflower Oil",
                    images: [
                      {
                        url: "https://abc.com/images/208.png"
                      }
                    ]
                  },
                  price: {
                    currency: "INR",
                    value: "170.0",
                    offered_value: "100.0",
                    maximum_value: "170.0"
                  }
                }
              ],
              cancellation_terms: [
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Pending"
                    }
                  },
                  refund_eligible: "true"
                },
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Packed"
                    }
                  },
                  refund_eligible: "true"
                },
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Order-delivered"
                    }
                  },
                  return_policy: {
                    return_eligible: "true",
                    return_within: "P7D",
                    fulfillment_managed_by: "seller",
                    return_location: {
                      address: "RTO address",
                      gps: "12.667555,77.349666"
                    }
                  }
                }
              ],
              replacement_terms: [
                {
                  replace_within: "P7D"
                }
              ],
              time: {
                label: "validity",
                range: {
                  start: "2022-12-24T00:00:00.000Z",
                  end: "2022-12-31T00:00:00.000Z"
                }
              },
              matched: "true",
              recommended: "true",
              tags: [
                {
                  descriptor: {
                    code: "origin"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "country"
                      },
                      value: "IND"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "image"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "type"
                      },
                      value: "back_image"
                    },
                    {
                      descriptor: {
                        code: "url"
                      },
                      value: "https://sellerNP.com/images/i1_back_image.png"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "veg_nonveg"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "veg"
                      },
                      value: "yes"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g2"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "time_to_ship"
                      },
                      value: "P1D"
                    },
                    {
                      descriptor: {
                        code: "tax_rate"
                      },
                      value: "12"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g3"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "brand"
                      },
                      value: "Dhara"
                    },
                    {
                      descriptor: {
                        code: "pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "num_price_slabs"
                      },
                      value: "3"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "1"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "4"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "250"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "9"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "200"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "10"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: ""
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "175"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "FSSAI_LICENSE_NO"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "BRAND_OWNER"
                      },
                      value: "12345678901234"
                    },
                    {
                      descriptor: {
                        code: "OTHER"
                      },
                      value: "12345678901234"
                    },
                    {
                      descriptor: {
                        code: "IMPORTER"
                      },
                      value: "12345678901234"
                    }
                  ]
                }
              ]
            }
          ],
          offers: [
            {
              id: "offer-1",
              descriptor: {
                name: "Dhara Olive Oil",
                code: "FREEBIE",
                short_desc: "Dhara Olive Oil",
                long_desc: "Dhara Olive Oil",
                images: [
                  {
                    url: "https://abc.com/images/207.png"
                  }
                ]
              },
              location_ids: [],
              category_ids: [],
              item_ids: [],
              time: {
                label: "validity",
                range: {
                  start: "2023-01-08T00:00:00.000Z",
                  end: "2023-01-15T00:00:00.000Z"
                }
              }
            }
          ],
          fulfillments: [
            {
              contact: {
                phone: "9886098860",
                email: "abc@xyz.com"
              }
            }
          ]
        }
      ]
    }
  }
}