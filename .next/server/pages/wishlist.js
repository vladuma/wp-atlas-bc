(() => {
var exports = {};
exports.id = 4737;
exports.ids = [4737];
exports.modules = {

/***/ 5701:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistCard_root__Fny3a",
	"productBg": "WishlistCard_productBg__cYxPT"
};


/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
    const arr = [];
    while(n > arr.length){
        arr.push(fn(arr.length));
    }
    return arr;
};


/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wishlist),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 23 modules
var commerce = __webpack_require__(3335);
// EXTERNAL MODULE: ./src/components/icons/Heart.tsx
var Heart = __webpack_require__(9069);
// EXTERNAL MODULE: ./src/components/common/Layout/Layout.tsx + 44 modules
var Layout = __webpack_require__(9179);
// EXTERNAL MODULE: ./src/components/ui/Container/Container.tsx
var Container = __webpack_require__(5569);
// EXTERNAL MODULE: ./src/components/ui/Text/Text.tsx
var Text = __webpack_require__(6376);
// EXTERNAL MODULE: ./src/components/ui/Skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(289);
// EXTERNAL MODULE: ./src/framework/bigcommerce/customer/use-customer.tsx + 1 modules
var use_customer = __webpack_require__(6268);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/wishlist/WishlistCard/WishlistCard.module.css
var WishlistCard_module = __webpack_require__(5701);
var WishlistCard_module_default = /*#__PURE__*/__webpack_require__.n(WishlistCard_module);
;// CONCATENATED MODULE: ./src/components/icons/Trash.tsx

const Trash = ({ ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 6H21",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 11V17",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 11V17",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
};
/* harmony default export */ const icons_Trash = (Trash);

// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(145);
// EXTERNAL MODULE: ./src/components/ui/context.tsx
var context = __webpack_require__(6784);
// EXTERNAL MODULE: ./src/framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5760);
// EXTERNAL MODULE: ./src/framework/bigcommerce/cart/use-add-item.tsx + 1 modules
var use_add_item = __webpack_require__(623);
// EXTERNAL MODULE: ./src/framework/bigcommerce/wishlist/use-remove-item.tsx + 1 modules
var use_remove_item = __webpack_require__(6531);
;// CONCATENATED MODULE: ./src/components/wishlist/WishlistCard/WishlistCard.tsx












const placeholderImg = '/product-img-placeholder.svg';
const WishlistCard = ({ item  })=>{
    const product = item.product;
    const { price  } = (0,use_price/* default */.ZP)({
        amount: product.price?.value,
        baseAmount: product.price?.retailPrice,
        currencyCode: product.price?.currencyCode
    });
    // @ts-ignore Wishlist is not always enabled
    const removeItem = (0,use_remove_item/* default */.Z)({
        wishlist: {
            includeProducts: true
        }
    });
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: removing , 1: setRemoving  } = (0,external_react_.useState)(false);
    // TODO: fix this missing argument issue
    /* @ts-ignore */ const addItem = (0,use_add_item/* default */.Z)();
    const { openSidebar  } = (0,context/* useUI */.l8)();
    const handleRemove = async ()=>{
        setRemoving(true);
        try {
            // If this action succeeds then there's no need to do `setRemoving(true)`
            // because the component will be removed from the view
            await removeItem({
                id: item.id
            });
        } catch (error) {
            setRemoving(false);
        }
    };
    const addToCart = async ()=>{
        setLoading(true);
        try {
            await addItem({
                productId: String(product.id),
                variantId: String(product.variants[0].id)
            });
            openSidebar();
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((WishlistCard_module_default()).root, {
            'opacity-75 pointer-events-none': removing
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `col-span-3 ${(WishlistCard_module_default()).productBg}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: product.images[0]?.url || placeholderImg,
                        width: 400,
                        height: 400,
                        alt: product.images[0]?.alt || 'Product Image'
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-span-7",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-2xl mb-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/product${product.path}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: product.name
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                            html: product.description
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        "aria-label": "Add to Cart",
                        type: "button",
                        className: 'py-1 px-3 border border-secondary rounded-md shadow-sm hover:bg-primary-hover',
                        onClick: addToCart,
                        loading: loading,
                        children: "Add to Cart"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-span-2 flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end font-bold",
                        children: price
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleRemove,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_Trash, {})
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const WishlistCard_WishlistCard = (WishlistCard);

// EXTERNAL MODULE: ./src/framework/bigcommerce/wishlist/use-wishlist.tsx + 1 modules
var use_wishlist = __webpack_require__(3494);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(994);
;// CONCATENATED MODULE: ./src/pages/wishlist.tsx









async function getStaticProps({ preview , locale , locales  }) {
    // Disabling page if Feature is not available
    if (false) {}
    const config = {
        locale,
        locales
    };
    const pagesPromise = commerce/* default.getAllPages */.Z.getAllPages({
        config,
        preview
    });
    const siteInfoPromise = commerce/* default.getSiteInfo */.Z.getSiteInfo({
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories  } = await siteInfoPromise;
    return {
        props: {
            pages,
            categories
        }
    };
}
function Wishlist() {
    const { data: customer  } = (0,use_customer/* default */.Z)();
    // @ts-ignore Shopify - Fix this types
    const { data , isLoading , isEmpty  } = (0,use_wishlist/* default */.Z)({
        includeProducts: true
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-3 mb-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                    variant: "pageHeading",
                    children: "My Wishlist"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "group flex flex-col",
                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: (0,range_map/* default */.Z)(12, (i)=>/*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-60 h-60"
                                })
                            }, i)
                        )
                    }) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1 px-12 py-24 flex flex-col justify-center items-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Heart/* default */.Z, {
                                    className: "absolute"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "pt-6 text-2xl font-bold tracking-wide text-center",
                                children: "Your wishlist is empty"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-accent-6 px-10 text-center pt-2",
                                children: "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake."
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: data && // @ts-ignore Shopify - Fix this types
                        data.items?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(WishlistCard_WishlistCard, {
                                item: item
                            }, item.id)
                        )
                    })
                })
            ]
        })
    }));
};
Wishlist.Layout = Layout/* default */.Z;


/***/ }),

/***/ 3666:
/***/ ((module) => {

"use strict";
module.exports = require("@vercel/fetch");

/***/ }),

/***/ 5782:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1072:
/***/ ((module) => {

"use strict";
module.exports = require("email-validator");

/***/ }),

/***/ 6333:
/***/ ((module) => {

"use strict";
module.exports = require("immutability-helper");

/***/ }),

/***/ 6734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 4305:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.debounce");

/***/ }),

/***/ 3746:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.random");

/***/ }),

/***/ 8622:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.throttle");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 824:
/***/ ((module) => {

"use strict";
module.exports = require("react-merge-refs");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,1486,6784,9611,289], () => (__webpack_exec__(10)));
module.exports = __webpack_exports__;

})();