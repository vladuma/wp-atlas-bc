"use strict";
exports.id = 4886;
exports.ids = [4886];
exports.modules = {

/***/ 4886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponent": () => (/* binding */ PageComponent),
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5141);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1335);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(487);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_3__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__]);
([client__WEBPACK_IMPORTED_MODULE_3__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





// export interface PageProps {
//   page: PageType | PageType['preview']['node'] | null | undefined;
// }
function PageComponent({ page  }) {
    const { useQuery  } = client__WEBPACK_IMPORTED_MODULE_3__/* .client */ .Lp;
    const generalSettings = useQuery().generalSettings;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: generalSettings?.title,
                description: generalSettings?.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        page?.title(),
                        " - ",
                        generalSettings?.title
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: page?.title(),
                bgImage: page?.featuredImage?.node.sourceUrl()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "content content-single",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wrap",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: page?.content() ?? ''
                        }
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                copyrightHolder: generalSettings?.title
            })
        ]
    }));
}
function Page() {
    const { usePage  } = client__WEBPACK_IMPORTED_MODULE_3__/* .client */ .Lp;
    const page = usePage();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageComponent, {
        page: page
    }));
};
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_3__/* .client */ .Lp,
        notFound: await (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .is404 */ .bM)(context, {
            client: client__WEBPACK_IMPORTED_MODULE_3__/* .client */ .Lp
        })
    });
}
function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    };
}

});

/***/ })

};
;