exports.id = 7155;
exports.ids = [7155];
exports.modules = {

/***/ 1357:
/***/ ((module) => {

// Exports
module.exports = {
	"post_list": "posts_post_list__glOzP"
};


/***/ }),

/***/ 7155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1770);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5141);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(826);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3740);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(487);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var scss_pages_posts_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1357);
/* harmony import */ var scss_pages_posts_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(scss_pages_posts_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_5__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_6__]);
([client__WEBPACK_IMPORTED_MODULE_5__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const POSTS_PER_PAGE = 6;
function Page() {
    const { query ={}  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { postSlug , postCursor  } = query;
    const { usePosts , useQuery  } = client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp;
    const generalSettings = useQuery().generalSettings;
    const isBefore = postSlug === 'before';
    const posts = usePosts({
        after: !isBefore ? postCursor : undefined,
        before: isBefore ? postCursor : undefined,
        first: !isBefore ? POSTS_PER_PAGE : undefined,
        last: isBefore ? POSTS_PER_PAGE : undefined
    });
    if (useQuery().$state.isLoading) {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: generalSettings?.title,
                description: generalSettings?.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        generalSettings?.title,
                        " - ",
                        generalSettings?.description
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "content content-index",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        posts: posts.nodes,
                        heading: "Blog Posts",
                        headingLevel: "h2",
                        postTitleLevel: "h3",
                        id: (scss_pages_posts_module_scss__WEBPACK_IMPORTED_MODULE_8___default().post_list)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        pageInfo: posts.pageInfo,
                        basePath: "/posts"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                copyrightHolder: generalSettings?.title
            })
        ]
    }));
};
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp
    });
}

});

/***/ })

};
;