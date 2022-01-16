(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,9630,36];
exports.modules = {

/***/ 1511:
/***/ ((module) => {

// Exports
module.exports = {
	"cta": "CTA_cta__46Bdf",
	"wrap": "CTA_wrap__uwNew",
	"children": "CTA_children__hLTn7",
	"title": "CTA_title__hIPik",
	"intro": "CTA_intro__ulsH6",
	"button-wrap": "CTA_button-wrap__VOKOZ"
};


/***/ }),

/***/ 8539:
/***/ ((module) => {

// Exports
module.exports = {
	"explore": "home_explore__RBjEx",
	"post_list": "home_post_list__V9bXl",
	"home_hero": "home_home_hero__KxIR7",
	"features": "home_features__VTdXB"
};


/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1511);
/* harmony import */ var scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4465);




function CTA({ title ='Get in touch' , buttonText , buttonURL , children , headingLevel ='h1'  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cta),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    level: headingLevel,
                    className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default().intro),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default().children),
                            children: children
                        }),
                        buttonText && buttonURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["button-wrap"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: buttonURL,
                                className: "button",
                                children: buttonText
                            })
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTA);


/***/ }),

/***/ 441:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5141);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1335);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(826);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7489);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(487);
/* harmony import */ var scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8539);
/* harmony import */ var scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_4__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_5__]);
([client__WEBPACK_IMPORTED_MODULE_4__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







function Page() {
    const { usePosts , useQuery  } = client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .Lp;
    const generalSettings = useQuery().generalSettings;
    const posts = usePosts({
        first: 6,
        where: {
            categoryName: 'uncategorized'
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "Get Started with Headless",
                        buttonText: "Developer Docs",
                        buttonURL: "https://faustjs.org",
                        button2Text: "Headless on GitHub",
                        button2URL: "https://github.com/wpengine/faustjs",
                        bgImage: "/images/headless_hero_background.jpg",
                        id: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().home_hero),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "WP\xa0Engine’s Headless WordPress Framework includes this example project, the",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/wpengine/faustjs#wordpress-plugin",
                                    children: "headless WordPress plugin"
                                }),
                                ",",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: "headless packages"
                                }),
                                ", and",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://faustjs.org/docs/tutorial/dev-env-setup",
                                    children: "tutorials"
                                }),
                                ' ',
                                "to make building headless WordPress sites fast and fun."
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().explore),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Explore this Example Project"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "This headless example project uses",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://nextjs.org/",
                                            children: "Next.js"
                                        }),
                                        ",",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://graphql.org/",
                                            children: "GraphQL"
                                        }),
                                        ",",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://gqty.dev",
                                            children: "GQty"
                                        }),
                                        " and the",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/wpengine/faustjs",
                                            children: "WP\xa0Engine headless packages"
                                        }),
                                        ' ',
                                        "for WordPress integration. Dive in and edit this template at",
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                            children: "src/pages/index.tsx"
                                        }),
                                        " or discover more below."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().features),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Static Site Generation"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "This example project uses Next.js'",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering",
                                                            children: "Static Site Generation (SSR)"
                                                        }),
                                                        ". SSG unlocks better performance by statically generating pages that can then be cached by a CDN."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Incremental Static Regeneration"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "This example project uses Next.js'",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://vercel.com/docs/concepts/next.js/incremental-static-regeneration",
                                                            children: "Incremental Static Regeneration (ISR)"
                                                        }),
                                                        ". This allows you to revalidate static pages without having to rebuild your entire site. By default, Faust.js sets a",
                                                        ' ',
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                            children: [
                                                                "15 minute ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                                    children: "revalidate"
                                                                }),
                                                                " time per page."
                                                            ]
                                                        }),
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://faustjs.org/docs/next/guides/ssr-ssg#setting-up-incremental-static-regeneration-isr",
                                                            children: "Learn more about how Faust.js uses ISR."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Ready for Atlas"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://wpengine.com/atlas",
                                                            children: "Atlas"
                                                        }),
                                                        " is the complete Headless WordPress Platform for absurdly fast dynamic sites. One headless solution, one price, all in one place.",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().features),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Global Styles and Fonts"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Add styles to load on every page, such as typography and layout rules, in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/scss/main.scss"
                                                        }),
                                                        ". The project adds",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://necolas.github.io/normalize.css/",
                                                            children: "normalize.css"
                                                        }),
                                                        ' ',
                                                        "in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/_app.tsx"
                                                        }),
                                                        ". Google Fonts are enqueued in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/_document.tsx"
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Hooks"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Fetch data from WordPress with ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "usePost"
                                                        }),
                                                        ",",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "usePosts"
                                                        }),
                                                        ", ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "useGeneralSettings"
                                                        }),
                                                        " and other custom hooks. Use these hooks in your page templates to pass data to custom components. See",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/index.tsx"
                                                        }),
                                                        " for examples."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Components"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Add or edit components in the ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/components"
                                                        }),
                                                        ' ',
                                                        "folder. Find component styles at",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/scss/components"
                                                        }),
                                                        ", which use",
                                                        ' ',
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css",
                                                            children: "CSS modules"
                                                        }),
                                                        ' ',
                                                        "to scope CSS to each component."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        posts: posts?.nodes,
                        heading: "Latest Posts",
                        intro: "The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site.",
                        headingLevel: "h2",
                        postTitleLevel: "h3",
                        id: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().post_list)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        title: "Questions or comments?",
                        buttonText: "Join the discussion on GitHub",
                        buttonURL: "https://github.com/wpengine/faustjs/discussions",
                        headingLevel: "h2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "We welcome feature requests, bug reports and questions in the",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: "Headless Framework GitHub repository"
                                }),
                                "."
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                copyrightHolder: generalSettings.title
            })
        ]
    }));
};
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .Lp
    });
}

});

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 8656:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/defaults.js");

/***/ }),

/***/ 9923:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isArray.js");

/***/ }),

/***/ 1361:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction.js");

/***/ }),

/***/ 8086:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil.js");

/***/ }),

/***/ 8700:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject.js");

/***/ }),

/***/ 3108:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString.js");

/***/ }),

/***/ 7187:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isUndefined.js");

/***/ }),

/***/ 9010:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge.js");

/***/ }),

/***/ 8593:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/noop.js");

/***/ }),

/***/ 3197:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/trim.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 5925:
/***/ ((module) => {

"use strict";
module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4298:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core");;

/***/ }),

/***/ 9577:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/auth");;

/***/ }),

/***/ 1305:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/client");;

/***/ }),

/***/ 7326:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/config");;

/***/ }),

/***/ 2866:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/utils");;

/***/ }),

/***/ 1542:
/***/ ((module) => {

"use strict";
module.exports = import("@gqty/logger");;

/***/ }),

/***/ 48:
/***/ ((module) => {

"use strict";
module.exports = import("@gqty/react");;

/***/ }),

/***/ 1676:
/***/ ((module) => {

"use strict";
module.exports = import("gqty");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3253,1770,1803,1335,826], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();