"use strict";
(() => {
var exports = {};
exports.id = 7030;
exports.ids = [7030];
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

/***/ 6107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_logout)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/logout.ts


const logoutEndpoint = async (ctx)=>{
    const { req , res , handlers  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['logout']
    })) {
        return;
    }
    try {
        const redirectTo = req.query.redirect_to;
        const body = typeof redirectTo === 'string' ? {
            redirectTo
        } : {};
        return await handlers['logout']({
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
/* harmony default export */ const logout = (logoutEndpoint);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/logout/logout.ts

const logout_logout = async ({ res , body: { redirectTo  } , config ,  })=>{
    // Remove the cookie
    res.setHeader('Set-Cookie', (0,external_cookie_.serialize)(config.customerCookie, '', {
        maxAge: -1,
        path: '/'
    }));
    // Only allow redirects to a relative URL
    if (redirectTo?.startsWith('/')) {
        res.redirect(redirectTo);
    } else {
        res.status(200).json({
            data: null
        });
    }
};
/* harmony default export */ const endpoints_logout_logout = (logout_logout);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/logout/index.ts



const handlers = {
    logout: endpoints_logout_logout
};
const logoutApi = (0,api/* createEndpoint */.dg)({
    handler: logout,
    handlers
});
/* harmony default export */ const endpoints_logout = (logoutApi);

// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 17 modules
var commerce = __webpack_require__(5368);
;// CONCATENATED MODULE: ./src/pages/api/logout.ts


/* harmony default export */ const api_logout = (endpoints_logout(commerce/* default */.Z));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5368,2098], () => (__webpack_exec__(6107)));
module.exports = __webpack_exports__;

})();