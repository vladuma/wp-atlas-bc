"use strict";
(() => {
var exports = {};
exports.id = 3560;
exports.ids = [3560];
exports.modules = {

/***/ 3666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

/***/ }),

/***/ 3681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getCustomerIdQuery */
const getCustomerIdQuery = /* GraphQL */ `
  query getCustomerId {
    customer {
      entityId
    }
  }
`;
async function getCustomerId({ customerToken , config  }) {
    const { data  } = await config.fetch(getCustomerIdQuery, undefined, {
        headers: {
            cookie: `${config.customerCookie}=${customerToken}`
        }
    });
    return String(data?.customer?.entityId);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCustomerId);


/***/ }),

/***/ 1548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ parseWishlistItem),
/* harmony export */   "_": () => (/* binding */ parseCartItem)
/* harmony export */ });
const parseWishlistItem = (item)=>({
        product_id: Number(item.productId),
        variant_id: Number(item.variantId)
    })
;
const parseCartItem = (item)=>({
        quantity: item.quantity,
        product_id: Number(item.productId),
        variant_id: Number(item.variantId),
        option_selections: item.optionSelections
    })
;


/***/ }),

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_wishlist)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/wishlist.ts


const wishlistEndpoint = async (ctx)=>{
    const { req , res , handlers , config  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['getWishlist'],
        POST: handlers['addItem'],
        DELETE: handlers['removeItem']
    })) {
        return;
    }
    const { cookies  } = req;
    const customerToken = cookies[config.customerCookie];
    try {
        // Return current wishlist info
        if (req.method === 'GET') {
            const body = {
                customerToken,
                includeProducts: req.query.products === '1'
            };
            return await handlers['getWishlist']({
                ...ctx,
                body
            });
        }
        // Add an item to the wishlist
        if (req.method === 'POST') {
            const body = {
                ...req.body,
                customerToken
            };
            return await handlers['addItem']({
                ...ctx,
                body
            });
        }
        // Remove an item from the wishlist
        if (req.method === 'DELETE') {
            const body = {
                ...req.body,
                customerToken
            };
            return await handlers['removeItem']({
                ...ctx,
                body
            });
        }
    } catch (error) {
        console.error(error);
        const message = error instanceof errors/* CommerceAPIError */.$ ? 'An unexpected error ocurred with the Commerce API' : 'An unexpected error ocurred';
        res.status(500).json({
            data: null,
            errors: [
                {
                    message
                }
            ]
        });
    }
};
/* harmony default export */ const wishlist = (wishlistEndpoint);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/get-customer-id.ts
var get_customer_id = __webpack_require__(3681);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/wishlist/get-wishlist.ts

// Return wishlist info
const getWishlist = async ({ res , body: { customerToken , includeProducts  } , config , commerce ,  })=>{
    let result = {};
    if (customerToken) {
        const customerId = customerToken && await (0,get_customer_id/* default */.Z)({
            customerToken,
            config
        });
        if (!customerId) {
            // If the customerToken is invalid, then this request is too
            return res.status(404).json({
                data: null,
                errors: [
                    {
                        message: 'Wishlist not found'
                    }
                ]
            });
        }
        const { wishlist  } = await commerce.getCustomerWishlist({
            variables: {
                customerId
            },
            includeProducts,
            config
        });
        result = {
            data: wishlist
        };
    }
    res.status(200).json({
        data: result.data ?? null
    });
};
/* harmony default export */ const get_wishlist = (getWishlist);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/parse-item.ts
var parse_item = __webpack_require__(1548);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/wishlist/add-item.ts


// Return wishlist info
const addItem = async ({ res , body: { customerToken , item  } , config , commerce ,  })=>{
    if (!item) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Missing item'
                }
            ]
        });
    }
    const customerId = customerToken && await (0,get_customer_id/* default */.Z)({
        customerToken,
        config
    });
    if (!customerId) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Invalid request'
                }
            ]
        });
    }
    const { wishlist  } = await commerce.getCustomerWishlist({
        variables: {
            customerId
        },
        config
    });
    const options = {
        method: 'POST',
        body: JSON.stringify(wishlist ? {
            items: [
                (0,parse_item/* parseWishlistItem */.x)(item)
            ]
        } : {
            name: 'Wishlist',
            customer_id: customerId,
            items: [
                (0,parse_item/* parseWishlistItem */.x)(item)
            ],
            is_public: false
        })
    };
    const { data  } = wishlist ? await config.storeApiFetch(`/v3/wishlists/${wishlist.id}/items`, options) : await config.storeApiFetch('/v3/wishlists', options);
    res.status(200).json({
        data
    });
};
/* harmony default export */ const add_item = (addItem);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/wishlist/remove-item.ts

// Return wishlist info
const removeItem = async ({ res , body: { customerToken , itemId  } , config , commerce ,  })=>{
    const customerId = customerToken && await (0,get_customer_id/* default */.Z)({
        customerToken,
        config
    });
    const { wishlist  } = customerId && await commerce.getCustomerWishlist({
        variables: {
            customerId
        },
        config
    }) || {};
    if (!wishlist || !itemId) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Invalid request'
                }
            ]
        });
    }
    const result = await config.storeApiFetch(`/v3/wishlists/${wishlist.id}/items/${itemId}`, {
        method: 'DELETE'
    });
    const data = result?.data ?? null;
    res.status(200).json({
        data
    });
};
/* harmony default export */ const remove_item = (removeItem);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/wishlist/index.ts





const handlers = {
    getWishlist: get_wishlist,
    addItem: add_item,
    removeItem: remove_item
};
const wishlistApi = (0,api/* createEndpoint */.dg)({
    handler: wishlist,
    handlers
});
/* harmony default export */ const endpoints_wishlist = (wishlistApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/wishlist.ts


/* harmony default export */ const api_wishlist = (endpoints_wishlist(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(282)));
module.exports = __webpack_exports__;

})();