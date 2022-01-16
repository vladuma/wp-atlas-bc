"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 3666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 6333:
/***/ ((module) => {

module.exports = require("immutability-helper");

/***/ }),

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_login)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/login.ts


const loginEndpoint = async (ctx)=>{
    const { req , res , handlers  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        POST: handlers['login'],
        GET: handlers['login']
    })) {
        return;
    }
    try {
        const body = req.body ?? {};
        return await handlers['login']({
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
/* harmony default export */ const login = (loginEndpoint);

// EXTERNAL MODULE: ./src/framework/commerce/utils/errors.ts
var utils_errors = __webpack_require__(1356);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/login/login.ts

const invalidCredentials = /invalid credentials/i;
const login_login = async ({ res , body: { email , password  } , config , commerce ,  })=>{
    // TODO: Add proper validations with something like Ajv
    if (!(email && password)) {
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
        await commerce.login({
            variables: {
                email,
                password
            },
            config,
            res
        });
    } catch (error) {
        // Check if the email and password didn't match an existing account
        if (error instanceof utils_errors/* FetcherError */.T4 && invalidCredentials.test(error.message)) {
            return res.status(401).json({
                data: null,
                errors: [
                    {
                        message: 'Cannot find an account that matches the provided credentials',
                        code: 'invalid_credentials'
                    }, 
                ]
            });
        }
        throw error;
    }
    res.status(200).json({
        data: null
    });
};
/* harmony default export */ const endpoints_login_login = (login_login);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/login/index.ts



const handlers = {
    login: endpoints_login_login
};
const loginApi = (0,api/* createEndpoint */.dg)({
    handler: login,
    handlers
});
/* harmony default export */ const endpoints_login = (loginApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/login.ts


/* harmony default export */ const api_login = (endpoints_login(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(5214)));
module.exports = __webpack_exports__;

})();