"use strict";
(() => {
var exports = {};
exports.id = 7871;
exports.ids = [7871];
exports.modules = {

/***/ 5974:
/***/ ((module) => {

module.exports = import("@faustjs/core/api");;

/***/ }),

/***/ 3403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _faustjs_core_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_api__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_faustjs_core_api__WEBPACK_IMPORTED_MODULE_0__.apiRouter);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3403));
module.exports = __webpack_exports__;

})();