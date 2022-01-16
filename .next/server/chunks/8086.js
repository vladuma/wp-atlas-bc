"use strict";
exports.id = 8086;
exports.ids = [8086];
exports.modules = {

/***/ 6964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/common/Layout/Layout.tsx + 44 modules
var Layout = __webpack_require__(9179);
// EXTERNAL MODULE: ./src/components/product/ProductCard/ProductCard.tsx
var ProductCard = __webpack_require__(5248);
// EXTERNAL MODULE: ./src/components/ui/Container/Container.tsx
var Container = __webpack_require__(5569);
// EXTERNAL MODULE: ./src/components/ui/Skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(289);
// EXTERNAL MODULE: ./src/framework/bigcommerce/product/use-search.tsx + 1 modules
var use_search = __webpack_require__(7345);
// EXTERNAL MODULE: ./src/lib/get-slug.ts
var get_slug = __webpack_require__(9487);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(994);
;// CONCATENATED MODULE: ./src/lib/search.tsx


function useSearchMeta(asPath) {
    const { 0: pathname , 1: setPathname  } = (0,external_react_.useState)('/search');
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)();
    const { 0: brand , 1: setBrand  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        // Only access asPath after hydration to avoid a server mismatch
        const path = asPath.split('?')[0];
        const parts = path.split('/');
        let c = parts[2];
        let b = parts[3];
        if (c === 'designers') {
            c = parts[4];
        }
        if (path !== pathname) setPathname(path);
        if (c !== category) setCategory(c);
        if (b !== brand) setBrand(b);
    }, [
        asPath,
        pathname,
        category,
        brand
    ]);
    return {
        pathname,
        category,
        brand
    };
}
// Removes empty query parameters from the query object
const filterQuery = (query)=>Object.keys(query).reduce((obj, key)=>{
        if (query[key]?.length) {
            obj[key] = query[key];
        }
        return obj;
    }, {})
;
const getCategoryPath = (path, brand)=>{
    const category = (0,get_slug/* default */.Z)(path);
    return `/search${brand ? `/designers/${brand}` : ''}${category ? `/${category}` : ''}`;
};
const getDesignerPath = (path, category)=>{
    const designer = (0,get_slug/* default */.Z)(path).replace(/^brands/, 'designers');
    return `/search${designer ? `/${designer}` : ''}${category ? `/${category}` : ''}`;
};

;// CONCATENATED MODULE: ./src/components/search.tsx












const SORT = {
    'trending-desc': 'Trending',
    'latest-desc': 'Latest arrivals',
    'price-asc': 'Price: Low to high',
    'price-desc': 'Price: High to low'
};
function Search({ categories , brands  }) {
    const { 0: activeFilter , 1: setActiveFilter  } = (0,external_react_.useState)('');
    const { 0: toggleFilter , 1: setToggleFilter  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { asPath , locale  } = router;
    const { q , sort  } = router.query;
    // `q` can be included but because categories and designers can't be searched
    // in the same way of products, it's better to ignore the search input if one
    // of those is selected
    const query = filterQuery({
        sort
    });
    const { pathname , category , brand  } = useSearchMeta(asPath);
    const activeCategory = categories.find((cat)=>cat.slug === category
    );
    const activeBrand = brands.find((b)=>(0,get_slug/* default */.Z)(b.node.path) === `brands/${brand}`
    )?.node;
    const { data  } = (0,use_search/* default */.Z)({
        search: typeof q === 'string' ? q : '',
        categoryId: activeCategory?.id,
        brandId: activeBrand?.entityId,
        sort: typeof sort === 'string' ? sort : '',
        locale
    });
    const handleClick = (event, filter)=>{
        if (filter !== activeFilter) {
            setToggleFilter(true);
        } else {
            setToggleFilter(!toggleFilter);
        }
        setActiveFilter(filter);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-8 lg:col-span-2 order-1 lg:order-none",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "rounded-md shadow-sm",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            onClick: (e)=>handleClick(e, 'categories')
                                            ,
                                            className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                            id: "options-menu",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "true",
                                            children: [
                                                activeCategory?.name ? `Category: ${activeCategory?.name}` : 'All Categories',
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "-mr-1 ml-2 h-5 w-5",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== 'categories' || toggleFilter !== true ? 'hidden' : ''}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "aria-labelledby": "options-menu",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: external_classnames_default()('block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                            underline: !activeCategory?.name
                                                        }),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: {
                                                                pathname: getCategoryPath('', brand),
                                                                query
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: (e)=>handleClick(e, 'categories')
                                                                ,
                                                                className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                                children: "All Categories"
                                                            })
                                                        })
                                                    }),
                                                    categories.map((cat)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: external_classnames_default()('block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                                underline: activeCategory?.id === cat.id
                                                            }),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: {
                                                                    pathname: getCategoryPath(cat.path, brand),
                                                                    query
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>handleClick(e, 'categories')
                                                                    ,
                                                                    className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                                    children: cat.name
                                                                })
                                                            })
                                                        }, cat.path)
                                                    )
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:hidden mt-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "rounded-md shadow-sm",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            onClick: (e)=>handleClick(e, 'brands')
                                            ,
                                            className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-8 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                            id: "options-menu",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "true",
                                            children: [
                                                activeBrand?.name ? `Design: ${activeBrand?.name}` : 'All Designs',
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "-mr-1 ml-2 h-5 w-5",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== 'brands' || toggleFilter !== true ? 'hidden' : ''}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "aria-labelledby": "options-menu",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: external_classnames_default()('block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                            underline: !activeBrand?.name
                                                        }),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: {
                                                                pathname: getDesignerPath('', category),
                                                                query
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: (e)=>handleClick(e, 'brands')
                                                                ,
                                                                className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                                children: "All Designers"
                                                            })
                                                        })
                                                    }),
                                                    brands.flatMap(({ node  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: external_classnames_default()('block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                                // @ts-ignore Shopify - Fix this types
                                                                underline: activeBrand?.entityId === node.entityId
                                                            }),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: {
                                                                    pathname: getDesignerPath(node.path, category),
                                                                    query
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>handleClick(e, 'brands')
                                                                    ,
                                                                    className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                                    children: node.name
                                                                })
                                                            })
                                                        }, node.path)
                                                    )
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-8 order-3 lg:order-none",
                    children: [
                        (q || activeCategory || activeBrand) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-12 transition ease-in duration-75",
                            children: data ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: external_classnames_default()('animated', {
                                            fadeIn: data.found,
                                            hidden: !data.found
                                        }),
                                        children: [
                                            "Showing ",
                                            data.products.length,
                                            " results",
                                            ' ',
                                            q && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "for \"",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: q
                                                    }),
                                                    "\""
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()('animated', {
                                            fadeIn: !data.found,
                                            hidden: data.found
                                        }),
                                        children: q ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                "There are no products that match \"",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: q
                                                }),
                                                "\""
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: "There are no products that match the selected category."
                                        })
                                    })
                                ]
                            }) : q ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    "Searching for: \"",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: q
                                    }),
                                    "\""
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: "Searching..."
                            })
                        }),
                        data ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: data.products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                                    variant: "simple",
                                    className: "animated fadeIn",
                                    product: product,
                                    imgProps: {
                                        width: 480,
                                        height: 480
                                    }
                                }, product.path)
                            )
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: (0,range_map/* default */.Z)(12, (i)=>/*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-60 h-60"
                                    })
                                }, i)
                            )
                        }),
                        ' '
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-8 lg:col-span-2 order-2 lg:order-none",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative inline-block w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "rounded-md shadow-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "button",
                                        onClick: (e)=>handleClick(e, 'sort')
                                        ,
                                        className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                        id: "options-menu",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "true",
                                        children: [
                                            sort ? SORT[sort] : 'Relevance',
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "-mr-1 ml-2 h-5 w-5",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== 'sort' || toggleFilter !== true ? 'hidden' : ''}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "options-menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: external_classnames_default()('block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                        underline: !sort
                                                    }),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: {
                                                            pathname,
                                                            query: filterQuery({
                                                                q
                                                            })
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: (e)=>handleClick(e, 'sort')
                                                            ,
                                                            className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                            children: "Relevance"
                                                        })
                                                    })
                                                }),
                                                Object.entries(SORT).map(([key, text])=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: external_classnames_default()('block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8', {
                                                            underline: sort === key
                                                        }),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: {
                                                                pathname,
                                                                query: filterQuery({
                                                                    q,
                                                                    sort: key
                                                                })
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: (e)=>handleClick(e, 'sort')
                                                                ,
                                                                className: 'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4',
                                                                children: text
                                                            })
                                                        })
                                                    }, key)
                                                )
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
Search.Layout = Layout/* default */.Z;


/***/ }),

/***/ 7717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getSearchStaticProps)
/* harmony export */ });
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3335);

async function getSearchStaticProps({ preview , locale , locales  }) {
    const config = {
        locale,
        locales
    };
    const pagesPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAllPages */ .Z.getAllPages({
        config,
        preview
    });
    const siteInfoPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getSiteInfo */ .Z.getSiteInfo({
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories , brands  } = await siteInfoPromise;
    return {
        props: {
            pages,
            categories,
            brands
        },
        revalidate: 200
    };
}


/***/ })

};
;