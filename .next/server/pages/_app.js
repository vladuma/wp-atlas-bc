"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

if (false) {}
/**
 * @type {import("@faustjs/core").Config}
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)({
    wpUrl: "https://miracommerce.wpengine.com",
    apiClientSecret: process.env.FAUSTWP_SECRET_KEY
}));

});

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faust_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7653);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1770);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6784);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_4__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, _faust_config_js__WEBPACK_IMPORTED_MODULE_3__]);
([client__WEBPACK_IMPORTED_MODULE_4__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, _faust_config_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <FaustProvider client={client} pageProps={pageProps}>
//         <Component {...pageProps} />
//       </FaustProvider>
//     </>
//   );
// }





_faust_config_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
const Noop = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    })
;
function MyApp({ Component , pageProps  }) {
    const Layout = Component.Layout || Noop;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.body.classList?.remove('loading');
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .FaustProvider */ .Ou, {
            client: client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .Lp,
            pageProps: pageProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_context__WEBPACK_IMPORTED_MODULE_5__/* .ManagedUIContext */ .DA, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                    pageProps: pageProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    }));
};

});

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 8656:
/***/ ((module) => {

module.exports = require("lodash/defaults.js");

/***/ }),

/***/ 9923:
/***/ ((module) => {

module.exports = require("lodash/isArray.js");

/***/ }),

/***/ 1361:
/***/ ((module) => {

module.exports = require("lodash/isFunction.js");

/***/ }),

/***/ 8086:
/***/ ((module) => {

module.exports = require("lodash/isNil.js");

/***/ }),

/***/ 8700:
/***/ ((module) => {

module.exports = require("lodash/isObject.js");

/***/ }),

/***/ 3108:
/***/ ((module) => {

module.exports = require("lodash/isString.js");

/***/ }),

/***/ 7187:
/***/ ((module) => {

module.exports = require("lodash/isUndefined.js");

/***/ }),

/***/ 9010:
/***/ ((module) => {

module.exports = require("lodash/merge.js");

/***/ }),

/***/ 8593:
/***/ ((module) => {

module.exports = require("lodash/noop.js");

/***/ }),

/***/ 3197:
/***/ ((module) => {

module.exports = require("lodash/trim.js");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 5925:
/***/ ((module) => {

module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4298:
/***/ ((module) => {

module.exports = import("@faustjs/core");;

/***/ }),

/***/ 9577:
/***/ ((module) => {

module.exports = import("@faustjs/core/auth");;

/***/ }),

/***/ 1305:
/***/ ((module) => {

module.exports = import("@faustjs/core/client");;

/***/ }),

/***/ 7326:
/***/ ((module) => {

module.exports = import("@faustjs/core/config");;

/***/ }),

/***/ 2866:
/***/ ((module) => {

module.exports = import("@faustjs/core/utils");;

/***/ }),

/***/ 1542:
/***/ ((module) => {

module.exports = import("@gqty/logger");;

/***/ }),

/***/ 48:
/***/ ((module) => {

module.exports = import("@gqty/react");;

/***/ }),

/***/ 1676:
/***/ ((module) => {

module.exports = import("gqty");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3253,1770,6784], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();