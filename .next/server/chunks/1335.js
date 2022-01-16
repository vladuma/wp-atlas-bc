exports.id = 1335;
exports.ids = [1335];
exports.modules = {

/***/ 1309:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__EXu9N",
	"wrap": "Hero_wrap__tZ7RL",
	"children": "Hero_children__vRawC",
	"intro": "Hero_intro__Xv0zz"
};


/***/ }),

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1309);
/* harmony import */ var scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Hero({ title ='Hero Title' , id , bgImage , buttonText , buttonURL , button2Text , button2URL , children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        ...id && {
            id
        },
        style: {
            backgroundImage: bgImage ? `url(${bgImage})` : 'none'
        },
        className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hero),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().intro),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().children),
                            children: children
                        }),
                        buttonText && buttonURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: buttonURL,
                                className: "button",
                                children: buttonText
                            })
                        }),
                        button2Text && button2URL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: button2URL,
                                className: "button button-secondary",
                                children: button2Text
                            })
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ })

};
;