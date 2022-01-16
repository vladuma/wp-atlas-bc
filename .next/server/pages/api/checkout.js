"use strict";
(() => {
var exports = {};
exports.id = 9756;
exports.ids = [9756];
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

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_checkout)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/checkout.ts


const checkoutEndpoint = async (ctx)=>{
    const { req , res , handlers , config  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['getCheckout'],
        POST: handlers['submitCheckout']
    })) {
        return;
    }
    const { cookies  } = req;
    const cartId = cookies[config.cartCookie];
    try {
        // Create checkout
        if (req.method === 'GET') {
            const body = {
                ...req.body,
                cartId
            };
            return await handlers['getCheckout']({
                ...ctx,
                body
            });
        }
        // Create checkout
        if (req.method === 'POST' && handlers['submitCheckout']) {
            const body = {
                ...req.body,
                cartId
            };
            return await handlers['submitCheckout']({
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
/* harmony default export */ const checkout = (checkoutEndpoint);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/get-customer-id.ts
var get_customer_id = __webpack_require__(3681);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: external "uuidv4"
const external_uuidv4_namespaceObject = require("uuidv4");
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/checkout/get-checkout.ts



const fullCheckout = true;
const getCheckout = async ({ req , res , config ,  })=>{
    const { cookies  } = req;
    const cartId = cookies[config.cartCookie];
    const customerToken = cookies[config.customerCookie];
    if (!cartId) {
        res.redirect('/cart');
        return;
    }
    const { data  } = await config.storeApiFetch(`/v3/carts/${cartId}/redirect_urls`, {
        method: 'POST'
    });
    const customerId = customerToken && await (0,get_customer_id/* default */.Z)({
        customerToken,
        config
    });
    //if there is a customer create a jwt token
    if (!customerId) {
        if (fullCheckout) {
            res.redirect(data.checkout_url);
            return;
        }
    } else {
        const dateCreated = Math.round(new Date().getTime() / 1000);
        const payload = {
            iss: config.storeApiClientId,
            iat: dateCreated,
            jti: (0,external_uuidv4_namespaceObject.uuid)(),
            operation: 'customer_login',
            store_hash: config.storeHash,
            customer_id: customerId,
            channel_id: config.storeChannelId,
            redirect_to: data.checkout_url.replace(config.storeUrl, "")
        };
        let token = external_jsonwebtoken_default().sign(payload, config.storeApiClientSecret, {
            algorithm: 'HS256'
        });
        let checkouturl = `${config.storeUrl}/login/token/${token}`;
        console.log('checkouturl', checkouturl);
        if (fullCheckout) {
            res.redirect(checkouturl);
            return;
        }
    }
    // TODO: make the embedded checkout work too!
    const html = `
       <!DOCTYPE html>
         <html lang="en">
         <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Checkout</title>
           <script src="https://checkout-sdk.bigcommerce.com/v1/loader.js"></script>
           <script>
             window.onload = function() {
               checkoutKitLoader.load('checkout-sdk').then(function (service) {
                 service.embedCheckout({
                   containerId: 'checkout',
                   url: '${data.embedded_checkout_url}'
                 });
               });
             }
           </script>
         </head>
         <body>
           <div id="checkout"></div>
         </body>
       </html>
     `;
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
};
/* harmony default export */ const get_checkout = (getCheckout);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/checkout/index.ts



const handlers = {
    getCheckout: get_checkout
};
const checkoutApi = (0,api/* createEndpoint */.dg)({
    handler: checkout,
    handlers
});
/* harmony default export */ const endpoints_checkout = (checkoutApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/checkout.ts


/* harmony default export */ const api_checkout = (endpoints_checkout(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(6015)));
module.exports = __webpack_exports__;

})();