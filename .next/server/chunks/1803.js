exports.id = 1803;
exports.ids = [1803];
exports.modules = {

/***/ 9822:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Footer_wrap__4e6e3",
	"main": "Footer_main__SP1FG"
};


/***/ }),

/***/ 92:
/***/ ((module) => {

// Exports
module.exports = {
	"site-title": "Header_site-title__Otw1K",
	"title-wrap": "Header_title-wrap__4e17x",
	"description": "Header_description__EJ3Db",
	"wrap": "Header_wrap__R9imJ",
	"menu": "Header_menu__6BMG0"
};


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9822);
/* harmony import */ var scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Footer({ copyrightHolder ='Company Name'  }) {
    const year = new Date().getFullYear();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: `© ${year} ${copyrightHolder}. All rights reserved.`
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony import */ var scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1770);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3289);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_4__, client__WEBPACK_IMPORTED_MODULE_3__]);
([client__WEBPACK_IMPORTED_MODULE_4__, client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function Header({ title ='Headless by WP Engine' , description  }) {
    const { menuItems  } = client__WEBPACK_IMPORTED_MODULE_3__/* .client.useQuery */ .Lp.useQuery();
    const links = menuItems({
        where: {
            location: client__WEBPACK_IMPORTED_MODULE_4__/* .MenuLocationEnum.PRIMARY */ .xn.PRIMARY
        }
    })?.nodes;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrap),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["title-wrap"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["site-title"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: title
                                })
                            })
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().menu),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            links?.map((link)=>link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: link.url ?? '',
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: link.url,
                                            children: link?.label
                                        })
                                    })
                                }, `${link.label}$-menu`) : ''
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "button",
                                        href: "https://github.com/wpengine/faustjs",
                                        children: "GitHub"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

});

/***/ })

};
;