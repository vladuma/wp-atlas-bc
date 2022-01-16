(() => {
var exports = {};
exports.id = 2915;
exports.ids = [2915];
exports.modules = {

/***/ 8240:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSidebar_root__NKexS",
	"main": "ProductSidebar_main__NUF_H",
	"header": "ProductSidebar_header__ocQne",
	"name": "ProductSidebar_name__w5oP4",
	"price": "ProductSidebar_price__9fp9j",
	"sidebar": "ProductSidebar_sidebar__84r1R",
	"sliderContainer": "ProductSidebar_sliderContainer__W9fZ_",
	"imageContainer": "ProductSidebar_imageContainer__ZGg2v",
	"img": "ProductSidebar_img__0i3jw",
	"button": "ProductSidebar_button__wCcMi",
	"wishlistButton": "ProductSidebar_wishlistButton__kHAzy",
	"relatedProductsGrid": "ProductSidebar_relatedProductsGrid__Io8sN"
};


/***/ }),

/***/ 9:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSlider_root__CkX9_",
	"slider": "ProductSlider_slider__RDhYR",
	"show": "ProductSlider_show__AO62j",
	"thumb": "ProductSlider_thumb__hidLi",
	"selected": "ProductSlider_selected__jfBfr",
	"album": "ProductSlider_album__kO50_"
};


/***/ }),

/***/ 6776:
/***/ ((module) => {

// Exports
module.exports = {
	"control": "ProductSliderControl_control__UPgWs",
	"leftControl": "ProductSliderControl_leftControl__hUC8_",
	"rightControl": "ProductSliderControl_rightControl__FpBZV"
};


/***/ }),

/***/ 9030:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductView_root__p8KG2",
	"main": "ProductView_main__nvbWs",
	"sidebar": "ProductView_sidebar__kg7LT",
	"sliderContainer": "ProductView_sliderContainer__pOPQv",
	"imageContainer": "ProductView_imageContainer__iMubZ",
	"img": "ProductView_img__n_S1i",
	"button": "ProductView_button__7CJmW",
	"wishlistButton": "ProductView_wishlistButton__gU_5c",
	"relatedProductsGrid": "ProductView_relatedProductsGrid__rpjtM"
};


/***/ }),

/***/ 6959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(3444);
// Exports
module.exports = {
	"swatch": "Swatch_swatch__gw_u_ " + ___CSS_LOADER_ICSS_IMPORT_0___["root"] + "",
	"color": "Swatch_color__ZnsRN",
	"dark": "Swatch_dark__s0wLp",
	"active": "Swatch_active__b7Hx7",
	"textLabel": "Swatch_textLabel__n8Lqq"
};


/***/ }),

/***/ 948:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Collapse_root__Xp49l",
	"header": "Collapse_header__Yh30u",
	"label": "Collapse_label__XLy57",
	"content": "Collapse_content___wFn3",
	"icon": "Collapse_icon__7cWaI",
	"open": "Collapse_open__qqhpF"
};


/***/ }),

/***/ 6861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Slug),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/lib/api/commerce.ts + 23 modules
var commerce = __webpack_require__(3335);
// EXTERNAL MODULE: ./src/components/common/Layout/Layout.tsx + 44 modules
var Layout = __webpack_require__(9179);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
// EXTERNAL MODULE: ./src/components/product/ProductView/ProductView.module.css
var ProductView_module = __webpack_require__(9030);
var ProductView_module_default = /*#__PURE__*/__webpack_require__.n(ProductView_module);
// EXTERNAL MODULE: ./src/framework/commerce/product/use-price.tsx
var use_price = __webpack_require__(5760);
// EXTERNAL MODULE: ./src/components/wishlist/WishlistButton/WishlistButton.tsx
var WishlistButton = __webpack_require__(7822);
;// CONCATENATED MODULE: external "keen-slider/react"
const react_namespaceObject = require("keen-slider/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@react-spring/web"
const web_namespaceObject = require("@react-spring/web");
// EXTERNAL MODULE: ./src/components/product/ProductSlider/ProductSlider.module.css
var ProductSlider_module = __webpack_require__(9);
var ProductSlider_module_default = /*#__PURE__*/__webpack_require__.n(ProductSlider_module);
// EXTERNAL MODULE: ./src/components/product/ProductSliderControl/ProductSliderControl.module.css
var ProductSliderControl_module = __webpack_require__(6776);
var ProductSliderControl_module_default = /*#__PURE__*/__webpack_require__.n(ProductSliderControl_module);
;// CONCATENATED MODULE: ./src/components/icons/ArrowLeft.tsx

const ArrowLeft = ({ ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 12H5",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 19L5 12L12 5",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
};
/* harmony default export */ const icons_ArrowLeft = (ArrowLeft);

;// CONCATENATED MODULE: ./src/components/icons/ArrowRight.tsx

const ArrowRight = ({ ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 12H19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 5L19 12L12 19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    }));
};
/* harmony default export */ const icons_ArrowRight = (ArrowRight);

;// CONCATENATED MODULE: ./src/components/product/ProductSliderControl/ProductSliderControl.tsx





const ProductSliderControl = ({ onPrev , onNext  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductSliderControl_module_default()).control,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_classnames_default()((ProductSliderControl_module_default()).leftControl),
                onClick: onPrev,
                "aria-label": "Previous Product Image",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_ArrowLeft, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_classnames_default()((ProductSliderControl_module_default()).rightControl),
                onClick: onNext,
                "aria-label": "Next Product Image",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_ArrowRight, {})
            })
        ]
    })
;
/* harmony default export */ const ProductSliderControl_ProductSliderControl = (/*#__PURE__*/(0,external_react_.memo)(ProductSliderControl));

;// CONCATENATED MODULE: ./src/components/product/ProductSlider/ProductSlider.tsx







const ProductSlider = ({ children , className ='' ,  })=>{
    const { 0: currentSlide , 1: setCurrentSlide  } = (0,external_react_.useState)(0);
    const { 0: isMounted , 1: setIsMounted  } = (0,external_react_.useState)(false);
    const sliderContainerRef = (0,external_react_.useRef)(null);
    const thumbsContainerRef = (0,external_react_.useRef)(null);
    const [ref, slider1] = (0,react_namespaceObject.useKeenSlider)({
        loop: true,
        slides: {
            perView: 1
        },
        created: ()=>setIsMounted(true)
        ,
        slideChanged (s1) {
            const slideNumber = s1.track.details.rel;
            setCurrentSlide(slideNumber);
            if (thumbsContainerRef.current) {
                const $el = document.getElementById(`thumb-${slideNumber}`);
                if (slideNumber >= 3) {
                    thumbsContainerRef.current.scrollLeft = $el.offsetLeft;
                } else {
                    thumbsContainerRef.current.scrollLeft = 0;
                }
            }
        }
    });
    // Stop the history navigation gesture on touch devices
    (0,external_react_.useEffect)(()=>{
        const preventNavigation = (event)=>{
            // Center point of the touch area
            const touchXPosition = event.touches[0].pageX;
            // Size of the touch area
            const touchXRadius = event.touches[0].radiusX || 0;
            // We set a threshold (10px) on both sizes of the screen,
            // if the touch area overlaps with the screen edges
            // it's likely to trigger the navigation. We prevent the
            // touchstart event in that case.
            if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > window.innerWidth - 10) event.preventDefault();
        };
        const slider = sliderContainerRef.current;
        slider.addEventListener('touchstart', preventNavigation);
        return ()=>{
            if (slider) {
                slider.removeEventListener('touchstart', preventNavigation);
            }
        };
    }, []);
    const onPrev = external_react_default().useCallback(()=>slider1.current?.prev()
    , [
        slider1
    ]);
    const onNext = external_react_default().useCallback(()=>slider1.current?.next()
    , [
        slider1
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((ProductSlider_module_default()).root, className),
        ref: sliderContainerRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: ref,
                className: external_classnames_default()((ProductSlider_module_default()).slider, {
                    [(ProductSlider_module_default()).show]: isMounted
                }, 'keen-slider'),
                children: [
                    slider1 && /*#__PURE__*/ jsx_runtime_.jsx(ProductSliderControl_ProductSliderControl, {
                        onPrev: onPrev,
                        onNext: onNext
                    }),
                    external_react_.Children.map(children, (child)=>{
                        // Add the keen-slider__slide className to children
                        if (/*#__PURE__*/ (0,external_react_.isValidElement)(child)) {
                            return {
                                ...child,
                                props: {
                                    ...child.props,
                                    className: `${child.props.className ? `${child.props.className} ` : ''}keen-slider__slide`
                                }
                            };
                        }
                        return child;
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(web_namespaceObject.a.div, {
                className: (ProductSlider_module_default()).album,
                ref: thumbsContainerRef,
                children: slider1 && external_react_.Children.map(children, (child, idx)=>{
                    if (/*#__PURE__*/ (0,external_react_.isValidElement)(child)) {
                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: external_classnames_default()(child.props.className, (ProductSlider_module_default()).thumb, {
                                    [(ProductSlider_module_default()).selected]: currentSlide === idx
                                }),
                                id: `thumb-${idx}`,
                                onClick: ()=>{
                                    slider1.current?.moveToIdx(idx);
                                }
                            }
                        };
                    }
                    return child;
                })
            })
        ]
    }));
};
/* harmony default export */ const ProductSlider_ProductSlider = (ProductSlider);

// EXTERNAL MODULE: ./src/components/product/ProductCard/ProductCard.tsx
var ProductCard = __webpack_require__(5248);
// EXTERNAL MODULE: ./src/components/ui/Container/Container.tsx
var Container = __webpack_require__(5569);
// EXTERNAL MODULE: ./src/components/ui/Text/Text.tsx
var Text = __webpack_require__(6376);
// EXTERNAL MODULE: ./src/components/product/ProductSidebar/ProductSidebar.module.css
var ProductSidebar_module = __webpack_require__(8240);
var ProductSidebar_module_default = /*#__PURE__*/__webpack_require__.n(ProductSidebar_module);
// EXTERNAL MODULE: ./src/framework/bigcommerce/cart/use-add-item.tsx + 1 modules
var use_add_item = __webpack_require__(623);
// EXTERNAL MODULE: ./src/components/product/Swatch/Swatch.module.css
var Swatch_module = __webpack_require__(6959);
var Swatch_module_default = /*#__PURE__*/__webpack_require__.n(Swatch_module);
// EXTERNAL MODULE: ./src/components/icons/Check.tsx
var Check = __webpack_require__(2347);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(145);
// EXTERNAL MODULE: ./src/lib/colors.ts
var colors = __webpack_require__(3272);
;// CONCATENATED MODULE: ./src/components/product/Swatch/Swatch.tsx







const Swatch = /*#__PURE__*/ external_react_default().memo(({ active , className , color ='' , label =null , variant ='size' , ...props })=>{
    variant = variant?.toLowerCase();
    if (label) {
        label = label?.toLowerCase();
    }
    const swatchClassName = external_classnames_default()((Swatch_module_default()).swatch, {
        [(Swatch_module_default()).color]: color,
        [(Swatch_module_default()).active]: active,
        [(Swatch_module_default()).size]: variant === 'size',
        [(Swatch_module_default()).dark]: color ? (0,colors/* isDark */._T)(color) : false,
        [(Swatch_module_default()).textLabel]: !color && label && label.length > 3
    }, className);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
        role: "option",
        "aria-selected": active,
        "aria-label": variant && label ? `${variant} ${label}` : 'Variant Swatch',
        className: swatchClassName,
        ...label && color && {
            title: label
        },
        style: color ? {
            backgroundColor: color
        } : {},
        ...props,
        children: [
            color && active && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Check/* default */.Z, {})
            }),
            !color ? label : null
        ]
    }));
});
Swatch.displayName = 'Swatch';
/* harmony default export */ const Swatch_Swatch = (Swatch);

;// CONCATENATED MODULE: ./src/components/product/ProductOptions/ProductOptions.tsx



const ProductOptions = ({ options , selectedOptions: selectedOptions1 , setSelectedOptions ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: options.map((opt)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "uppercase font-medium text-sm tracking-wide",
                        children: opt.displayName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        role: "listbox",
                        className: "flex flex-row py-4",
                        children: opt.values.map((v, i)=>{
                            const active = selectedOptions1[opt.displayName.toLowerCase()];
                            return(/*#__PURE__*/ jsx_runtime_.jsx(Swatch_Swatch, {
                                active: v.label.toLowerCase() === active,
                                variant: opt.displayName,
                                color: v.hexColors ? v.hexColors[0] : '',
                                label: v.label,
                                onClick: ()=>{
                                    setSelectedOptions((selectedOptions)=>{
                                        return {
                                            ...selectedOptions,
                                            [opt.displayName.toLowerCase()]: v.label.toLowerCase()
                                        };
                                    });
                                }
                            }, `${opt.id}-${i}`));
                        })
                    })
                ]
            }, opt.displayName)
        )
    }));
};
/* harmony default export */ const ProductOptions_ProductOptions = (/*#__PURE__*/(0,external_react_.memo)(ProductOptions));

// EXTERNAL MODULE: ./src/components/ui/context.tsx
var context = __webpack_require__(6784);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(994);
;// CONCATENATED MODULE: ./src/components/icons/Star.tsx

const Star = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
        })
    }));
};
/* harmony default export */ const icons_Star = (Star);

;// CONCATENATED MODULE: ./src/components/ui/Rating/Rating.tsx





const Quantity = ({ value =5  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row py-6 text-accent-9",
        children: (0,range_map/* default */.Z)(5, (i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()('inline-block ml-1 ', {
                    'text-accent-5': i >= Math.floor(value)
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_Star, {})
            }, `star_${i}`)
        )
    })
;
/* harmony default export */ const Rating = (/*#__PURE__*/(0,external_react_.memo)(Quantity));

// EXTERNAL MODULE: ./src/components/ui/Collapse/Collapse.module.css
var Collapse_module = __webpack_require__(948);
var Collapse_module_default = /*#__PURE__*/__webpack_require__.n(Collapse_module);
// EXTERNAL MODULE: ./src/components/icons/ChevronRight.tsx
var ChevronRight = __webpack_require__(5928);
;// CONCATENATED MODULE: external "react-use-measure"
const external_react_use_measure_namespaceObject = require("react-use-measure");
var external_react_use_measure_default = /*#__PURE__*/__webpack_require__.n(external_react_use_measure_namespaceObject);
;// CONCATENATED MODULE: ./src/components/ui/Collapse/Collapse.tsx







const Collapse = /*#__PURE__*/ external_react_default().memo(({ title , children  })=>{
    const { 0: isActive , 1: setActive  } = (0,external_react_.useState)(false);
    const [ref, { height: viewHeight  }] = external_react_use_measure_default()();
    const animProps = (0,web_namespaceObject.useSpring)({
        height: isActive ? viewHeight : 0,
        config: {
            tension: 250,
            friction: 32,
            clamp: true,
            duration: 150
        },
        opacity: isActive ? 1 : 0
    });
    const toggle = ()=>setActive((x)=>!x
        )
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Collapse_module_default()).root,
        role: "button",
        tabIndex: 0,
        "aria-expanded": isActive,
        onClick: toggle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Collapse_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight/* default */.Z, {
                        className: external_classnames_default()((Collapse_module_default()).icon, {
                            [(Collapse_module_default()).open]: isActive
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Collapse_module_default()).label,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(web_namespaceObject.a.div, {
                style: {
                    overflow: 'hidden',
                    ...animProps
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: ref,
                    className: (Collapse_module_default()).content,
                    children: children
                })
            })
        ]
    }));
});
Collapse.displayName = 'Collapse';
/* harmony default export */ const Collapse_Collapse = (Collapse);

;// CONCATENATED MODULE: ./src/components/product/helpers.ts
function getProductVariant(product, opts) {
    const variant1 = product.variants.find((variant)=>{
        return Object.entries(opts).every(([key, value])=>variant.options.find((option)=>{
                if (option.__typename === 'MultipleChoiceOption' && option.displayName.toLowerCase() === key.toLowerCase()) {
                    return option.values.find((v)=>v.label.toLowerCase() === value
                    );
                }
            })
        );
    });
    return variant1;
}
function selectDefaultOptionFromProduct(product, updater) {
    // Selects the default option
    product.variants[0]?.options?.forEach((v)=>{
        updater((choices)=>({
                ...choices,
                [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase()
            })
        );
    });
}

;// CONCATENATED MODULE: ./src/components/product/ProductSidebar/ProductSidebar.tsx







const ProductSidebar = ({ product , className  })=>{
    const addItem = (0,use_add_item/* default */.Z)();
    const { openSidebar  } = (0,context/* useUI */.l8)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: selectedOptions , 1: setSelectedOptions  } = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        selectDefaultOptionFromProduct(product, setSelectedOptions);
    }, [
        product
    ]);
    const variant = getProductVariant(product, selectedOptions);
    const addToCart = async ()=>{
        setLoading(true);
        try {
            await addItem({
                productId: String(product.id),
                variantId: String(variant ? variant.id : product.variants[0]?.id)
            });
            openSidebar();
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProductOptions_ProductOptions, {
                options: product.options,
                selectedOptions: selectedOptions,
                setSelectedOptions: setSelectedOptions
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                className: "pb-4 break-words w-full max-w-xl",
                html: product.descriptionHtml || product.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Rating, {
                        value: 4
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-accent-6 pr-1 font-medium text-sm",
                        children: "36 reviews"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children:  true && /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    "aria-label": "Add to Cart",
                    type: "button",
                    className: (ProductSidebar_module_default()).button,
                    onClick: addToCart,
                    loading: loading,
                    disabled: variant?.availableForSale === false,
                    children: variant?.availableForSale === false ? 'Not Available' : 'Add To Cart'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Collapse_Collapse, {
                        title: "Care",
                        children: "This is a limited edition production run. Printing starts when the drop ends."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Collapse_Collapse, {
                        title: "Details",
                        children: "This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19."
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const ProductSidebar_ProductSidebar = (ProductSidebar);

// EXTERNAL MODULE: ./src/components/product/ProductTag/ProductTag.tsx
var ProductTag = __webpack_require__(4498);
;// CONCATENATED MODULE: ./src/components/product/ProductView/ProductView.tsx











const ProductView = ({ product , relatedProducts  })=>{
    const { price  } = (0,use_price/* default */.ZP)({
        amount: product.price.value,
        baseAmount: product.price.retailPrice,
        currencyCode: product.price.currencyCode
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
                className: "max-w-none w-full",
                clean: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()((ProductView_module_default()).root, 'fit'),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: external_classnames_default()((ProductView_module_default()).main, 'fit'),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProductTag/* default */.Z, {
                                        name: product.name,
                                        price: `${price} ${product.price?.currencyCode}`,
                                        fontSize: 32
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (ProductView_module_default()).sliderContainer,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductSlider_ProductSlider, {
                                            children: product.images.map((image, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (ProductView_module_default()).imageContainer,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        className: (ProductView_module_default()).img,
                                                        src: image.url,
                                                        alt: image.alt || 'Product Image',
                                                        width: 600,
                                                        height: 600,
                                                        priority: i === 0,
                                                        quality: "85"
                                                    })
                                                }, image.url)
                                            )
                                        }, product.id)
                                    }),
                                     true && /*#__PURE__*/ jsx_runtime_.jsx(WishlistButton/* default */.Z, {
                                        className: (ProductView_module_default()).wishlistButton,
                                        productId: product.id,
                                        variant: product.variants[0]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductSidebar_ProductSidebar, {
                                product: product,
                                className: (ProductView_module_default()).sidebar
                            }, product.id)
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "mt-7 border-accent-2"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "py-12 px-6 mb-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Text/* default */.Z, {
                                variant: "sectionHeading",
                                children: "Related Products"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ProductView_module_default()).relatedProductsGrid,
                                children: relatedProducts.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "animated fadeIn bg-accent-0 border border-accent-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                                            noNameTag: true,
                                            product: p,
                                            variant: "simple",
                                            className: "animated fadeIn",
                                            imgProps: {
                                                width: 300,
                                                height: 300
                                            }
                                        }, p.path)
                                    }, p.path)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: product.name,
                description: product.description,
                openGraph: {
                    type: 'website',
                    title: product.name,
                    description: product.description,
                    images: [
                        {
                            url: product.images[0]?.url,
                            width: 800,
                            height: 600,
                            alt: product.name
                        }, 
                    ]
                }
            })
        ]
    }));
};
/* harmony default export */ const ProductView_ProductView = (ProductView);

;// CONCATENATED MODULE: ./src/pages/product/[slug].tsx





async function getStaticProps({ params , locale , locales , preview  }) {
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
    const productPromise = commerce/* default.getProduct */.Z.getProduct({
        variables: {
            slug: params.slug
        },
        config,
        preview
    });
    const allProductsPromise = commerce/* default.getAllProducts */.Z.getAllProducts({
        variables: {
            first: 4
        },
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories  } = await siteInfoPromise;
    const { product  } = await productPromise;
    console.log(product);
    const { products: relatedProducts  } = await allProductsPromise;
    if (!product) {
        throw new Error(`Product with slug '${params.slug}' not found`);
    }
    return {
        props: {
            pages,
            product,
            relatedProducts,
            categories
        },
        revalidate: 200
    };
}
async function getStaticPaths({ locales  }) {
    const { products  } = await commerce/* default.getAllProductPaths */.Z.getAllProductPaths();
    return {
        paths: locales ? locales.reduce((arr, locale)=>{
            // Add a product path for every locale
            products.forEach((product)=>{
                arr.push(`/${locale}/product${product.path}`);
            });
            return arr;
        }, []) : products.map((product)=>`/product${product.path}`
        ),
        fallback: 'blocking'
    };
}
function Slug({ product , relatedProducts  }) {
    const router = (0,router_.useRouter)();
    return router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        children: "Loading..."
    }) : /*#__PURE__*/ jsx_runtime_.jsx(ProductView_ProductView, {
        product: product,
        relatedProducts: relatedProducts
    });
};
Slug.Layout = Layout/* default */.Z;


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,1486,6784,9611,365], () => (__webpack_exec__(6861)));
module.exports = __webpack_exports__;

})();