"use strict";
(() => {
var exports = {};
exports.id = 3858;
exports.ids = [3858];
exports.modules = {

/***/ 3666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

/***/ }),

/***/ 3233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_customer)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/customer/index.ts


const customerEndpoint = async (ctx)=>{
    const { req , res , handlers  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['getLoggedInCustomer']
    })) {
        return;
    }
    try {
        const body = null;
        return await handlers['getLoggedInCustomer']({
            ...ctx,
            body
        });
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
/* harmony default export */ const customer = (customerEndpoint);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/customer/get-logged-in-customer.ts
const getLoggedInCustomerQuery = /* GraphQL */ `
  query getLoggedInCustomer {
    customer {
      entityId
      firstName
      lastName
      email
      company
      customerGroupId
      notes
      phone
      addressCount
      attributeCount
      storeCredit {
        value
        currencyCode
      }
    }
  }
`;
const getLoggedInCustomer = async ({ req , res , config  })=>{
    const token = req.cookies[config.customerCookie];
    if (token) {
        const { data  } = await config.fetch(getLoggedInCustomerQuery, undefined, {
            headers: {
                cookie: `${config.customerCookie}=${token}`
            }
        });
        const { customer  } = data;
        if (!customer) {
            return res.status(400).json({
                data: null,
                errors: [
                    {
                        message: 'Customer not found',
                        code: 'not_found'
                    }
                ]
            });
        }
        return res.status(200).json({
            data: {
                customer
            }
        });
    }
    res.status(200).json({
        data: null
    });
};
/* harmony default export */ const get_logged_in_customer = (getLoggedInCustomer);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/customer/index.ts



const handlers = {
    getLoggedInCustomer: get_logged_in_customer
};
const customerApi = (0,api/* createEndpoint */.dg)({
    handler: customer,
    handlers
});
/* harmony default export */ const endpoints_customer = (customerApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/customer/index.ts


/* harmony default export */ const api_customer = (endpoints_customer(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(3233)));
module.exports = __webpack_exports__;

})();