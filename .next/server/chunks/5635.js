"use strict";
exports.id = 5635;
exports.ids = [5635];
exports.modules = {

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ catalog_products)
});

// UNUSED EXPORTS: handlers

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/errors.ts
var errors = __webpack_require__(6083);
// EXTERNAL MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts + 1 modules
var is_allowed_operation = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/framework/commerce/api/endpoints/catalog/products.ts


const productsEndpoint = async (ctx)=>{
    const { req , res , handlers  } = ctx;
    if (!(0,is_allowed_operation/* default */.Z)(req, res, {
        GET: handlers['getProducts']
    })) {
        return;
    }
    try {
        const body = req.query;
        return await handlers['getProducts']({
            ...ctx,
            body
        });
    } catch (error) {
        console.error(error);
        const message = error instanceof errors/* CommerceAPIError */.$ ? 'An unexpected error ocurred with the Commerce API' : 'An unexpected error ocurred';
        res.status(500).json({
            data: null,
            errors: [
                {
                    message
                }
            ]
        });
    }
};
/* harmony default export */ const products = (productsEndpoint);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/catalog/products/get-products.ts
const SORT = {
    latest: 'id',
    trending: 'total_sold',
    price: 'price'
};
const LIMIT = 12;
// Return current cart info
const getProducts = async ({ res , body: { search , categoryId , brandId , sort  } , config , commerce ,  })=>{
    // Use a dummy base as we only care about the relative path
    const url = new URL('/v3/catalog/products', 'http://a');
    url.searchParams.set('is_visible', 'true');
    url.searchParams.set('limit', String(LIMIT));
    if (search) url.searchParams.set('keyword', search);
    if (categoryId && Number.isInteger(Number(categoryId))) url.searchParams.set('categories:in', String(categoryId));
    if (brandId && Number.isInteger(Number(brandId))) url.searchParams.set('brand_id', String(brandId));
    if (sort) {
        const [_sort, direction] = sort.split('-');
        const sortValue = SORT[_sort];
        if (sortValue && direction) {
            url.searchParams.set('sort', sortValue);
            url.searchParams.set('direction', direction);
        }
    }
    // We only want the id of each product
    url.searchParams.set('include_fields', 'id');
    const { data  } = await config.storeApiFetch(url.pathname + url.search);
    const ids = data.map((p)=>String(p.id)
    );
    const found = ids.length > 0;
    // We want the GraphQL version of each product
    const graphqlData = await commerce.getAllProducts({
        variables: {
            first: LIMIT,
            ids
        },
        config
    });
    // Put the products in an object that we can use to get them by id
    const productsById = graphqlData.products.reduce((prods, p)=>{
        prods[Number(p.id)] = p;
        return prods;
    }, {});
    const products = found ? [] : graphqlData.products;
    // Populate the products array with the graphql products, in the order
    // assigned by the list of entity ids
    ids.forEach((id)=>{
        const product = productsById[id];
        if (product) products.push(product);
    });
    res.status(200).json({
        data: {
            products,
            found
        }
    });
};
/* harmony default export */ const get_products = (getProducts);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/endpoints/catalog/products/index.ts



const handlers = {
    getProducts: get_products
};
const productsApi = (0,api/* createEndpoint */.dg)({
    handler: products,
    handlers
});
/* harmony default export */ const catalog_products = (productsApi);


/***/ })

};
;