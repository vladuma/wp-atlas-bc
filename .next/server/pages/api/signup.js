"use strict";
(() => {
var exports = {};
exports.id = 2964;
exports.ids = [2964];
exports.modules = {

/***/ 3666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

/***/ }),

/***/ 2630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_signup)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/signup.ts


const signupEndpoint = async (ctx)=>{
    const { req , res , handlers , config  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        POST: handlers['signup']
    })) {
        return;
    }
    const { cookies  } = req;
    const cartId = cookies[config.cartCookie];
    try {
        const body = {
            ...req.body,
            cartId
        };
        return await handlers['signup']({
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
/* harmony default export */ const signup = (signupEndpoint);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/errors.ts
var utils_errors = __webpack_require__(6628);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/signup/signup.ts

const signup_signup = async ({ res , body: { firstName , lastName , email , password  } , config , commerce ,  })=>{
    // TODO: Add proper validations with something like Ajv
    if (!(firstName && lastName && email && password)) {
        return res.status(400).json({
            data: null,
            errors: [
                {
                    message: 'Invalid request'
                }
            ]
        });
    }
    // TODO: validate the password and email
    // Passwords must be at least 7 characters and contain both alphabetic
    // and numeric characters.
    try {
        await config.storeApiFetch('/v3/customers', {
            method: 'POST',
            body: JSON.stringify([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    authentication: {
                        new_password: password
                    }
                }, 
            ])
        });
    } catch (error) {
        if (error instanceof utils_errors/* BigcommerceApiError */.zd && error.status === 422) {
            const hasEmailError = '0.email' in error.data?.errors;
            // If there's an error with the email, it most likely means it's duplicated
            if (hasEmailError) {
                return res.status(400).json({
                    data: null,
                    errors: [
                        {
                            message: 'The email is already in use',
                            code: 'duplicated_email'
                        }, 
                    ]
                });
            }
        }
        throw error;
    }
    // Login the customer right after creating it
    await commerce.login({
        variables: {
            email,
            password
        },
        res,
        config
    });
    res.status(200).json({
        data: null
    });
};
/* harmony default export */ const endpoints_signup_signup = (signup_signup);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/signup/index.ts



const handlers = {
    signup: endpoints_signup_signup
};
const singupApi = (0,api/* createEndpoint */.dg)({
    handler: signup,
    handlers
});
/* harmony default export */ const endpoints_signup = (singupApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/signup.ts


/* harmony default export */ const api_signup = (endpoints_signup(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(2630)));
module.exports = __webpack_exports__;

})();