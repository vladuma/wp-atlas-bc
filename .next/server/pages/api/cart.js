"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 3666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

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

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_cart)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/cart.ts


const cartEndpoint = async (ctx)=>{
    const { req , res , handlers , config  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['getCart'],
        POST: handlers['addItem'],
        PUT: handlers['updateItem'],
        DELETE: handlers['removeItem']
    })) {
        return;
    }
    const { cookies  } = req;
    const cartId = cookies[config.cartCookie];
    try {
        // Return current cart info
        if (req.method === 'GET') {
            const body = {
                cartId
            };
            return await handlers['getCart']({
                ...ctx,
                body
            });
        }
        // Create or add an item to the cart
        if (req.method === 'POST') {
            const body = {
                ...req.body,
                cartId
            };
            return await handlers['addItem']({
                ...ctx,
                body
            });
        }
        // Update item in cart
        if (req.method === 'PUT') {
            const body = {
                ...req.body,
                cartId
            };
            return await handlers['updateItem']({
                ...ctx,
                body
            });
        }
        // Remove an item from the cart
        if (req.method === 'DELETE') {
            const body = {
                ...req.body,
                cartId
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
/* harmony default export */ const cart = (cartEndpoint);

// EXTERNAL MODULE: ./src/framework/bigcommerce/lib/normalize.ts + 2 modules
var normalize = __webpack_require__(5702);
// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/errors.ts
var utils_errors = __webpack_require__(6628);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/get-cart-cookie.ts

function getCartCookie(name, cartId, maxAge) {
    const options = cartId && maxAge ? {
        maxAge,
        expires: new Date(Date.now() + maxAge * 1000),
        secure: "production" === 'production',
        path: '/',
        sameSite: 'lax'
    } : {
        maxAge: -1,
        path: '/'
    } // Removes the cookie
    ;
    return (0,external_cookie_.serialize)(name, cartId || '', options);
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/cart/get-cart.ts



// Return current cart info
const getCart = async ({ res , body: { cartId  } , config ,  })=>{
    let result = {};
    if (cartId) {
        try {
            result = await config.storeApiFetch(`/v3/carts/${cartId}?include=line_items.physical_items.options,line_items.digital_items.options`);
        } catch (error) {
            if (error instanceof utils_errors/* BigcommerceApiError */.zd && error.status === 404) {
                // Remove the cookie if it exists but the cart wasn't found
                res.setHeader('Set-Cookie', getCartCookie(config.cartCookie));
            } else {
                throw error;
            }
        }
    }
    res.status(200).json({
        data: result.data ? (0,normalize/* normalizeCart */.Id)(result.data) : null
    });
};
/* harmony default export */ const get_cart = (getCart);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/parse-item.ts
var parse_item = __webpack_require__(1548);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/cart/add-item.ts



const addItem = async ({ res , body: { cartId , item  } , config ,  })=>{
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
    if (!item.quantity) item.quantity = 1;
    const options = {
        method: 'POST',
        body: JSON.stringify({
            line_items: [
                (0,parse_item/* parseCartItem */._)(item)
            ],
            ...!cartId && config.storeChannelId ? {
                channel_id: config.storeChannelId
            } : {}
        })
    };
    const { data  } = cartId ? await config.storeApiFetch(`/v3/carts/${cartId}/items?include=line_items.physical_items.options,line_items.digital_items.options`, options) : await config.storeApiFetch('/v3/carts?include=line_items.physical_items.options,line_items.digital_items.options', options);
    // Create or update the cart cookie
    res.setHeader('Set-Cookie', getCartCookie(config.cartCookie, data.id, config.cartCookieMaxAge));
    res.status(200).json({
        data: (0,normalize/* normalizeCart */.Id)(data)
    });
};
/* harmony default export */ const add_item = (addItem);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/cart/update-item.ts



const updateItem = async ({ res , body: { cartId , itemId , item  } , config ,  })=>{
    if (!cartId || !itemId || !item) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Invalid request'
                }
            ]
        });
    }
    const { data  } = await config.storeApiFetch(`/v3/carts/${cartId}/items/${itemId}?include=line_items.physical_items.options`, {
        method: 'PUT',
        body: JSON.stringify({
            line_item: (0,parse_item/* parseCartItem */._)(item)
        })
    });
    // Update the cart cookie
    res.setHeader('Set-Cookie', getCartCookie(config.cartCookie, cartId, config.cartCookieMaxAge));
    res.status(200).json({
        data: (0,normalize/* normalizeCart */.Id)(data)
    });
};
/* harmony default export */ const update_item = (updateItem);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/cart/remove-item.ts


const removeItem = async ({ res , body: { cartId , itemId  } , config ,  })=>{
    if (!cartId || !itemId) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Invalid request'
                }
            ]
        });
    }
    const result = await config.storeApiFetch(`/v3/carts/${cartId}/items/${itemId}?include=line_items.physical_items.options`, {
        method: 'DELETE'
    });
    const data = result?.data ?? null;
    res.setHeader('Set-Cookie', data ? getCartCookie(config.cartCookie, cartId, config.cartCookieMaxAge) : getCartCookie(config.cartCookie));
    res.status(200).json({
        data: data && (0,normalize/* normalizeCart */.Id)(data)
    });
};
/* harmony default export */ const remove_item = (removeItem);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/cart/index.ts






const handlers = {
    getCart: get_cart,
    addItem: add_item,
    updateItem: update_item,
    removeItem: remove_item
};
const cartApi = (0,api/* createEndpoint */.dg)({
    handler: cart,
    handlers
});
/* harmony default export */ const endpoints_cart = (cartApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/cart.ts


/* harmony default export */ const api_cart = (endpoints_cart(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(9498)));
module.exports = __webpack_exports__;

})();