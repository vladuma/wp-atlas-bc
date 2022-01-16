exports.id = 365;
exports.ids = [365];
exports.modules = {

/***/ 4622:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductCard_root__QuNmM",
	"productImage": "ProductCard_productImage__78Qp5",
	"header": "ProductCard_header__jvHwd",
	"name": "ProductCard_name__rySuG",
	"price": "ProductCard_price__NPQs5",
	"wishlistButton": "ProductCard_wishlistButton__Ia5az",
	"imageContainer": "ProductCard_imageContainer__pWcxe",
	"simple": "ProductCard_simple__bWfVc",
	"slim": "ProductCard_slim__BijvU"
};


/***/ }),

/***/ 4339:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductTag_root__Pv_pz",
	"name": "ProductTag_name__162aF",
	"fontsizing": "ProductTag_fontsizing__KQmOb",
	"price": "ProductTag_price__DmHhm"
};


/***/ }),

/***/ 1306:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistButton_root__As_6W",
	"icon": "WishlistButton_icon__MbT9J",
	"loading": "WishlistButton_loading__jkQxb",
	"inWishlist": "WishlistButton_inWishlist__pHHoG"
};


/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4622);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7822);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5760);
/* harmony import */ var _ProductTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4498);








const placeholderImg = '/product-img-placeholder.svg';
const ProductCard = ({ product , imgProps , className , noNameTag =false , variant ='default' ,  })=>{
    const { price  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: product.price.value,
        baseAmount: product.price.retailPrice,
        currencyCode: product.price.currencyCode
    });
    const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().root), {
        [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().slim)]: variant === 'slim',
        [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().simple)]: variant === 'simple'
    }, className);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: `/product/${product.slug}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: rootClassName,
            "aria-label": product.name,
            children: [
                variant === 'slim' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: product.name
                            })
                        }),
                        product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                quality: "85",
                                src: product.images[0]?.url || placeholderImg,
                                alt: product.name || 'Product Image',
                                height: 320,
                                width: 320,
                                layout: "fixed",
                                ...imgProps
                            })
                        })
                    ]
                }),
                variant === 'simple' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                         true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
                            productId: product.id,
                            variant: product.variants[0]
                        }),
                        !noNameTag && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: product.name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),
                                    children: `${price} ${product.price?.currencyCode}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
                            children: product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    alt: product.name || 'Product Image',
                                    className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
                                    src: product.images[0]?.url || placeholderImg,
                                    height: 540,
                                    width: 540,
                                    quality: "85",
                                    layout: "responsive",
                                    ...imgProps
                                })
                            })
                        })
                    ]
                }),
                variant === 'default' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                         true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
                            productId: product.id,
                            variant: product.variants[0]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductTag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            name: product.name,
                            price: `${price} ${product.price?.currencyCode}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
                            children: product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    alt: product.name || 'Product Image',
                                    className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
                                    src: product.images[0]?.url || placeholderImg,
                                    height: 540,
                                    width: 540,
                                    quality: "85",
                                    layout: "responsive",
                                    ...imgProps
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ }),

/***/ 4498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4339);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ProductTag = ({ name , price , className ='' , fontSize =32 ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().root), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                        [(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontsizing)]: fontSize < 32
                    }),
                    style: {
                        fontSize: `${fontSize}px`,
                        lineHeight: `${fontSize}px`
                    },
                    children: name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),
                children: price
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTag);


/***/ }),

/***/ 7822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6784);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9069);
/* harmony import */ var _framework_wishlist_use_add_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3146);
/* harmony import */ var _framework_customer_use_customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6268);
/* harmony import */ var _framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3494);
/* harmony import */ var _framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6531);
/* harmony import */ var _WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1306);
/* harmony import */ var _WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8__);










const WishlistButton = ({ productId , variant , className , ...props })=>{
    const { data  } = (0,_framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const addItem = (0,_framework_wishlist_use_add_item__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const removeItem = (0,_framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { data: customer  } = (0,_framework_customer_use_customer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { openModal , setModalView  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_7__/* .useUI */ .l8)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // @ts-ignore Wishlist is not always enabled
    const itemInWishlist = data?.items?.find(// @ts-ignore Wishlist is not always enabled
    (item)=>item.product_id === Number(productId) && item.variant_id === Number(variant.id)
    );
    const handleWishlistChange = async (e)=>{
        e.preventDefault();
        if (loading) return;
        // A login is required before adding an item to the wishlist
        if (!customer) {
            setModalView('LOGIN_VIEW');
            return openModal();
        }
        setLoading(true);
        try {
            if (itemInWishlist) {
                await removeItem({
                    id: itemInWishlist.id
                });
            } else {
                await addItem({
                    productId,
                    variantId: variant?.id
                });
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "Add to wishlist",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().root), className),
        onClick: handleWishlistChange,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon), {
                [(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().loading)]: loading,
                [(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().inWishlist)]: itemInWishlist
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishlistButton);


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


/***/ })

};
;