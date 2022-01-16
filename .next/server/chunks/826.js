exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 4212:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Posts_title__q_vy3",
	"single": "Posts_single__rpTye"
};


/***/ }),

/***/ 4465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Heading allows components to pass a heading level via props.
function Heading({ level ='h1' , children , className  }) {
    const H = ({ ...props })=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(level, props, children)
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
        className: className,
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4212);
/* harmony import */ var scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4465);






function Posts({ posts , intro , heading , id , headingLevel ='h1' , postTitleLevel ='h2' , readMoreText ='Read more'  }) {
    return(// eslint-disable-next-line react/jsx-props-no-spreading
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["posts-block"]),
        ...id && {
            id
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrap",
            children: [
                heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    level: headingLevel,
                    className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().heading),
                    children: heading
                }),
                intro && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().intro),
                    children: intro
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "posts",
                    children: [
                        posts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().single),
                                id: `post-${post.id}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            level: postTitleLevel,
                                            className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: `/posts/${post.slug}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: post.title()
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_3___default().excerpt),
                                            // eslint-disable-next-line react/no-danger
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt() ?? ''
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: `/posts/${post.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "aria-label": `Read more about ${post.title || 'the post'}`,
                                                children: readMoreText
                                            })
                                        })
                                    ]
                                })
                            }, post.id ?? '')
                        ),
                        posts && posts?.length < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "No posts found."
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);


/***/ })

};
;