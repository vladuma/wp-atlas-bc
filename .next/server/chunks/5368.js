"use strict";
exports.id = 5368;
exports.ids = [5368];
exports.modules = {

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zd": () => (/* binding */ BigcommerceApiError),
/* harmony export */   "Ye": () => (/* binding */ BigcommerceNetworkError)
/* harmony export */ });
/* unused harmony export BigcommerceGraphQLError */
// Used for GraphQL errors
class BigcommerceGraphQLError extends Error {
}
class BigcommerceApiError extends Error {
    constructor(msg, res, data){
        super(msg);
        this.name = 'BigcommerceApiError';
        this.status = res.status;
        this.res = res;
        this.data = data;
    }
}
class BigcommerceNetworkError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'BigcommerceNetworkError';
    }
}


/***/ }),

/***/ 5702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Id": () => (/* binding */ normalizeCart),
  "Zh": () => (/* binding */ normalizeCategory),
  "ze": () => (/* binding */ normalizePage),
  "Op": () => (/* binding */ normalizeProduct)
});

// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__(6333);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/lib/immutability.ts

const c = new external_immutability_helper_.Context();
c.extend('$auto', function(value, object) {
    return object ? c.update(object, value) : c.update({}, value);
});
c.extend('$autoArray', function(value, object) {
    return object ? c.update(object, value) : c.update([], value);
});
/* harmony default export */ const immutability = (c.update);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/lib/get-slug.ts
// Remove trailing and leading slash, usually included in nodes
// returned by the BigCommerce API
const getSlug = (path)=>path.replace(/^\/|\/$/g, '')
;
/* harmony default export */ const get_slug = (getSlug);

;// CONCATENATED MODULE: ./src/framework/bigcommerce/lib/normalize.ts


function normalizeProductOption(productOption) {
    const { node: { entityId , values: { edges =[]  } = {} , ...rest } ,  } = productOption;
    return {
        id: entityId,
        values: edges?.map(({ node  })=>node
        ),
        ...rest
    };
}
function normalizeProduct(productNode) {
    const { entityId: id , productOptions: productOptions1 , prices , path , id: _ , options: _0 ,  } = productNode;
    return immutability(productNode, {
        id: {
            $set: String(id)
        },
        images: {
            $apply: ({ edges  })=>edges?.map(({ node: { urlOriginal , altText , ...rest }  })=>({
                        url: urlOriginal,
                        alt: altText,
                        ...rest
                    })
                )
        },
        variants: {
            $apply: ({ edges  })=>edges?.map(({ node: { entityId , productOptions , ...rest }  })=>({
                        id: entityId,
                        options: productOptions?.edges ? productOptions.edges.map(normalizeProductOption) : [],
                        ...rest
                    })
                )
        },
        options: {
            $set: productOptions1.edges ? productOptions1?.edges.map(normalizeProductOption) : []
        },
        brand: {
            $apply: (brand)=>brand?.entityId ? brand?.entityId : null
        },
        slug: {
            $set: path?.replace(/^\/+|\/+$/g, '')
        },
        price: {
            $set: {
                value: prices?.price.value,
                currencyCode: prices?.price.currencyCode
            }
        },
        $unset: [
            'entityId'
        ]
    });
}
function normalizePage(page) {
    return {
        id: String(page.id),
        name: page.name,
        is_visible: page.is_visible,
        sort_order: page.sort_order,
        body: page.body
    };
}
function normalizeCart(data) {
    return {
        id: data.id,
        customerId: String(data.customer_id),
        email: data.email,
        createdAt: data.created_time,
        currency: data.currency,
        taxesIncluded: data.tax_included,
        lineItems: [
            ...data.line_items.physical_items.map(normalizeLineItem),
            ...data.line_items.digital_items.map(normalizeLineItem), 
        ],
        lineItemsSubtotalPrice: data.base_amount,
        subtotalPrice: data.base_amount + data.discount_amount,
        totalPrice: data.cart_amount,
        discounts: data.discounts?.map((discount)=>({
                value: discount.discounted_amount
            })
        )
    };
}
function normalizeLineItem(item) {
    return {
        id: item.id,
        variantId: String(item.variant_id),
        productId: String(item.product_id),
        name: item.name,
        quantity: item.quantity,
        variant: {
            id: String(item.variant_id),
            sku: item.sku,
            name: item.name,
            image: {
                url: item.image_url
            },
            requiresShipping: item.is_require_shipping,
            price: item.sale_price,
            listPrice: item.list_price
        },
        options: item.options,
        path: item.url.split('/')[3],
        discounts: item.discounts.map((discount)=>({
                value: discount.discounted_amount
            })
        )
    };
}
function normalizeCategory(category) {
    return {
        id: `${category.entityId}`,
        name: category.name,
        slug: get_slug(category.path),
        path: category.path
    };
}


/***/ }),

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dg": () => (/* binding */ createEndpoint),
  "Db": () => (/* binding */ getCommerceApi)
});

// UNUSED EXPORTS: CommerceAPICore, getEndpoint

;// CONCATENATED MODULE: ./src/framework/commerce/api/operations.ts
const noop = ()=>{
    throw new Error('Not implemented');
};
const OPERATIONS = [
    'login',
    'getAllPages',
    'getPage',
    'getSiteInfo',
    'getCustomerWishlist',
    'getAllProductPaths',
    'getAllProducts',
    'getProduct', 
];
const defaultOperations = OPERATIONS.reduce((ops, k)=>{
    ops[k] = noop;
    return ops;
}, {});

;// CONCATENATED MODULE: ./src/framework/commerce/api/index.ts

class CommerceAPICore {
    constructor(provider){
        this.provider = provider;
    }
    getConfig(userConfig = {}) {
        return Object.entries(userConfig).reduce((cfg, [key, value])=>Object.assign(cfg, {
                [key]: value
            })
        , {
            ...this.provider.config
        });
    }
    setConfig(newConfig) {
        Object.assign(this.provider.config, newConfig);
    }
}
function getCommerceApi(customProvider) {
    const commerce = Object.assign(new CommerceAPICore(customProvider), defaultOperations);
    const ops = customProvider.operations;
    OPERATIONS.forEach((k)=>{
        const op = ops[k];
        if (op) {
            commerce[k] = op({
                commerce
            });
        }
    });
    return commerce;
}
function getEndpoint(commerce, context) {
    const cfg = commerce.getConfig(context.config);
    return function apiHandler(req, res) {
        return context.handler({
            req,
            res,
            commerce,
            config: cfg,
            handlers: context.handlers,
            options: context.options ?? {}
        });
    };
}
const createEndpoint = (endpoint)=>(commerce, context)=>{
        return getEndpoint(commerce, {
            ...endpoint,
            ...context
        });
    }
;


/***/ }),

/***/ 1356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T4": () => (/* binding */ FetcherError)
/* harmony export */ });
/* unused harmony exports CommerceError, ValidationError */
class CommerceError extends Error {
    constructor({ message , code , errors  }){
        const error = message ? {
            message,
            ...code ? {
                code
            } : {}
        } : errors[0];
        super(error.message);
        this.errors = message ? [
            error
        ] : errors;
        if (error.code) this.code = error.code;
    }
}
// Used for errors that come from a bad implementation of the hooks
class ValidationError extends (/* unused pure expression or super */ null && (CommerceError)) {
    constructor(options){
        super(options);
        this.code = 'validation_error';
    }
}
class FetcherError extends CommerceError {
    constructor(options){
        super(options);
        this.status = options.status;
    }
}


/***/ }),

/***/ 5368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ commerce)
});

// EXTERNAL MODULE: ./src/framework/commerce/api/index.ts + 1 modules
var api = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/framework/commerce/utils/errors.ts
var errors = __webpack_require__(1356);
// EXTERNAL MODULE: external "@vercel/fetch"
var fetch_ = __webpack_require__(3666);
var fetch_default = /*#__PURE__*/__webpack_require__.n(fetch_);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/fetch.ts

/* harmony default export */ const fetch = (fetch_default()());

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/fetch-graphql-api.ts


const fetchGraphqlApi = (getConfig)=>async (query, { variables , preview  } = {}, fetchOptions)=>{
        // log.warn(query)
        const config = getConfig();
        const res = await fetch(config.commerceUrl + (preview ? '/preview' : ''), {
            ...fetchOptions,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${config.apiToken}`,
                ...fetchOptions?.headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        const json = await res.json();
        if (json.errors) {
            throw new errors/* FetcherError */.T4({
                errors: json.errors ?? [
                    {
                        message: 'Failed to fetch Bigcommerce API'
                    }
                ],
                status: res.status
            });
        }
        return {
            data: json.data,
            res
        };
    }
;
/* harmony default export */ const fetch_graphql_api = (fetchGraphqlApi);

// EXTERNAL MODULE: ./src/framework/bigcommerce/api/utils/errors.ts
var utils_errors = __webpack_require__(6628);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/fetch-store-api.ts


const fetchStoreApi = (getConfig)=>async (endpoint, options)=>{
        const config = getConfig();
        let res;
        try {
            res = await fetch(config.storeApiUrl + endpoint, {
                ...options,
                headers: {
                    ...options?.headers,
                    'Content-Type': 'application/json',
                    'X-Auth-Token': config.storeApiToken,
                    'X-Auth-Client': config.storeApiClientId
                }
            });
        } catch (error) {
            throw new utils_errors/* BigcommerceNetworkError */.Ye(`Fetch to Bigcommerce failed: ${error.message}`);
        }
        const contentType = res.headers.get('Content-Type');
        const isJSON = contentType?.includes('application/json');
        if (!res.ok) {
            const data = isJSON ? await res.json() : await getTextOrNull(res);
            const headers = getRawHeaders(res);
            const msg = `Big Commerce API error (${res.status}) \nHeaders: ${JSON.stringify(headers, null, 2)}\n${typeof data === 'string' ? data : JSON.stringify(data, null, 2)}`;
            throw new utils_errors/* BigcommerceApiError */.zd(msg, res, data);
        }
        if (res.status !== 204 && !isJSON) {
            throw new utils_errors/* BigcommerceApiError */.zd(`Fetch to Bigcommerce API failed, expected JSON content but found: ${contentType}`, res);
        }
        // If something was removed, the response will be empty
        return res.status === 204 ? null : await res.json();
    }
;
/* harmony default export */ const fetch_store_api = (fetchStoreApi);
function getRawHeaders(res) {
    const headers = {};
    res.headers.forEach((value, key)=>{
        headers[key] = value;
    });
    return headers;
}
function getTextOrNull(res) {
    try {
        return res.text();
    } catch (err) {
        return null;
    }
}

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/concat-cookie.ts
function concatHeader(prev, val) {
    if (!val) return prev;
    if (!prev) return val;
    if (Array.isArray(prev)) return prev.concat(String(val));
    prev = String(prev);
    if (Array.isArray(val)) return [
        prev
    ].concat(val);
    return [
        prev,
        String(val)
    ];
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/login.ts

const loginMutation = /* GraphQL */ `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      result
    }
  }
`;
function loginOperation({ commerce  }) {
    async function login({ query =loginMutation , variables , res: response , config  }) {
        config = commerce.getConfig(config);
        const { data , res  } = await config.fetch(query, {
            variables
        });
        // Bigcommerce returns a Set-Cookie header with the auth cookie
        let cookie = res.headers.get('Set-Cookie');
        if (cookie && typeof cookie === 'string') {
            // In development, don't set a secure cookie or the browser will ignore it
            if (false) {}
            response.setHeader('Set-Cookie', concatHeader(response.getHeader('Set-Cookie'), cookie));
        }
        return {
            result: data.login?.result
        };
    }
    return login;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-all-pages.ts
function getAllPagesOperation({ commerce  }) {
    async function getAllPages({ config , preview  } = {}) {
        const cfg = commerce.getConfig(config);
        // RecursivePartial forces the method to check for every prop in the data, which is
        // required in case there's a custom `url`
        const { data  } = await cfg.storeApiFetch('/v3/content/pages');
        const pages = data ?? [];
        return {
            pages: preview ? pages : pages.filter((p)=>p.is_visible
            )
        };
    }
    return getAllPages;
};

// EXTERNAL MODULE: ./src/framework/bigcommerce/lib/normalize.ts + 2 modules
var normalize = __webpack_require__(5702);
;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-page.ts

function getPageOperation({ commerce  }) {
    async function getPage({ url , variables , config , preview  }) {
        const cfg = commerce.getConfig(config);
        // RecursivePartial forces the method to check for every prop in the data, which is
        // required in case there's a custom `url`
        const { data  } = await cfg.storeApiFetch(url || `/v3/content/pages?id=${variables.id}&include=body`);
        const firstPage = data?.[0];
        const page = firstPage;
        if (preview || page?.is_visible) {
            return {
                page: (0,normalize/* normalizePage */.ze)(page)
            };
        }
        return {};
    }
    return getPage;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/filter-edges.ts
function filterEdges(edges) {
    return edges?.filter((edge)=>!!edge
    ) ?? [];
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/fragments/category-tree.ts
const categoryTreeItemFragment = /* GraphQL */ `
  fragment categoryTreeItem on CategoryTreeItem {
    entityId
    name
    path
    description
    productCount
  }
`;

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-site-info.ts



// Get 3 levels of categories
const getSiteInfoQuery = /* GraphQL */ `
  query getSiteInfo {
    site {
      categoryTree {
        ...categoryTreeItem
        children {
          ...categoryTreeItem
          children {
            ...categoryTreeItem
          }
        }
      }
      brands {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            entityId
            name
            defaultImage {
              urlOriginal
              altText
            }
            pageTitle
            metaDesc
            metaKeywords
            searchKeywords
            path
          }
        }
      }
    }
  }
  ${categoryTreeItemFragment}
`;
function getSiteInfoOperation({ commerce  }) {
    async function getSiteInfo({ query =getSiteInfoQuery , config  } = {}) {
        const cfg = commerce.getConfig(config);
        const { data  } = await cfg.fetch(query);
        const categories = data.site.categoryTree.map(normalize/* normalizeCategory */.Zh);
        const brands = data.site?.brands?.edges;
        return {
            categories: categories ?? [],
            brands: filterEdges(brands)
        };
    }
    return getSiteInfo;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-customer-wishlist.ts
function getCustomerWishlistOperation({ commerce  }) {
    async function getCustomerWishlist({ config , variables , includeProducts  }) {
        config = commerce.getConfig(config);
        const { data =[]  } = await config.storeApiFetch(`/v3/wishlists?customer_id=${variables.customerId}`);
        const wishlist = data[0];
        if (includeProducts && wishlist?.items?.length) {
            const ids = wishlist.items?.map((item)=>item?.product_id ? String(item?.product_id) : null
            ).filter((id)=>!!id
            );
            if (ids?.length) {
                const graphqlData = await commerce.getAllProducts({
                    variables: {
                        first: 50,
                        ids
                    },
                    config
                });
                // Put the products in an object that we can use to get them by id
                const productsById = graphqlData.products.reduce((prods, p)=>{
                    prods[Number(p.id)] = p;
                    return prods;
                }, {});
                // Populate the wishlist items with the graphql products
                wishlist.items.forEach((item)=>{
                    const product = item && productsById[item.product_id];
                    if (item && product) {
                        // @ts-ignore Fix this type when the wishlist type is properly defined
                        item.product = product;
                    }
                });
            }
        }
        return {
            wishlist: wishlist
        };
    }
    return getCustomerWishlist;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-all-product-paths.ts

const getAllProductPathsQuery = /* GraphQL */ `
  query getAllProductPaths($first: Int = 100) {
    site {
      products(first: $first) {
        edges {
          node {
            path
          }
        }
      }
    }
  }
`;
function getAllProductPathsOperation({ commerce  }) {
    async function getAllProductPaths({ query =getAllProductPathsQuery , variables , config  } = {}) {
        config = commerce.getConfig(config);
        // RecursivePartial forces the method to check for every prop in the data, which is
        // required in case there's a custom `query`
        const { data  } = await config.fetch(query, {
            variables
        });
        const products = data.site?.products?.edges;
        return {
            products: filterEdges(products).map(({ node  })=>node
            )
        };
    }
    return getAllProductPaths;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/utils/set-product-locale-meta.ts
function setProductLocaleMeta(node) {
    if (node.localeMeta?.edges) {
        node.localeMeta.edges = node.localeMeta.edges.filter((edge)=>{
            const { key , value  } = edge?.node ?? {};
            if (key && key in node) {
                node[key] = value;
                return false;
            }
            return true;
        });
        if (!node.localeMeta.edges.length) {
            delete node.localeMeta;
        }
    }
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/fragments/product.ts
const productPrices = /* GraphQL */ `
  fragment productPrices on Prices {
    price {
      value
      currencyCode
    }
    salePrice {
      value
      currencyCode
    }
    retailPrice {
      value
      currencyCode
    }
  }
`;
const swatchOptionFragment = /* GraphQL */ `
  fragment swatchOption on SwatchOptionValue {
    isDefault
    hexColors
  }
`;
const multipleChoiceOptionFragment = /* GraphQL */ `
  fragment multipleChoiceOption on MultipleChoiceOption {
    values {
      edges {
        node {
          label
          ...swatchOption
        }
      }
    }
  }

  ${swatchOptionFragment}
`;
const productInfoFragment = /* GraphQL */ `
  fragment productInfo on Product {
    entityId
    name
    path
    brand {
      entityId
    }
    description
    prices {
      ...productPrices
    }
    images {
      edges {
        node {
          urlOriginal
          altText
          isDefault
        }
      }
    }
    variants {
      edges {
        node {
          entityId
          defaultImage {
            urlOriginal
            altText
            isDefault
          }
        }
      }
    }
    productOptions {
      edges {
        node {
          __typename
          entityId
          displayName
          ...multipleChoiceOption
        }
      }
    }
    localeMeta: metafields(namespace: $locale, keys: ["name", "description"])
      @include(if: $hasLocale) {
      edges {
        node {
          key
          value
        }
      }
    }
  }

  ${productPrices}
  ${multipleChoiceOptionFragment}
`;
const productConnectionFragment = /* GraphQL */ `
  fragment productConnnection on ProductConnection {
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...productInfo
      }
    }
  }

  ${productInfoFragment}
`;

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-all-products.ts




const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $hasLocale: Boolean = false
    $locale: String = "null"
    $entityIds: [Int!]
    $first: Int = 10
    $products: Boolean = false
    $featuredProducts: Boolean = false
    $bestSellingProducts: Boolean = false
    $newestProducts: Boolean = false
  ) {
    site {
      products(first: $first, entityIds: $entityIds) @include(if: $products) {
        ...productConnnection
      }
      featuredProducts(first: $first) @include(if: $featuredProducts) {
        ...productConnnection
      }
      bestSellingProducts(first: $first) @include(if: $bestSellingProducts) {
        ...productConnnection
      }
      newestProducts(first: $first) @include(if: $newestProducts) {
        ...productConnnection
      }
    }
  }

  ${productConnectionFragment}
`;
function getProductsType(relevance) {
    switch(relevance){
        case 'featured':
            return 'featuredProducts';
        case 'best_selling':
            return 'bestSellingProducts';
        case 'newest':
            return 'newestProducts';
        default:
            return 'products';
    }
}
function getAllProductsOperation({ commerce  }) {
    async function getAllProducts({ query =getAllProductsQuery , variables: vars = {} , config: cfg  } = {}) {
        const config = commerce.getConfig(cfg);
        const { locale  } = config;
        const field = getProductsType(vars.relevance);
        const variables = {
            locale,
            hasLocale: !!locale
        };
        variables[field] = true;
        if (vars.first) variables.first = vars.first;
        if (vars.ids) variables.entityIds = vars.ids.map((id)=>Number(id)
        );
        // RecursivePartial forces the method to check for every prop in the data, which is
        // required in case there's a custom `query`
        const { data  } = await config.fetch(query, {
            variables
        });
        const edges = data.site?.[field]?.edges;
        const products = filterEdges(edges);
        if (locale && config.applyLocale) {
            products.forEach((product)=>{
                if (product.node) setProductLocaleMeta(product.node);
            });
        }
        return {
            products: products.map(({ node  })=>(0,normalize/* normalizeProduct */.Op)(node)
            )
        };
    }
    return getAllProducts;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/operations/get-product.ts



const getProductQuery = /* GraphQL */ `
  query getProduct(
    $hasLocale: Boolean = false
    $locale: String = "null"
    $path: String!
  ) {
    site {
      route(path: $path) {
        node {
          __typename
          ... on Product {
            ...productInfo
            variants {
              edges {
                node {
                  entityId
                  defaultImage {
                    urlOriginal
                    altText
                    isDefault
                  }
                  prices {
                    ...productPrices
                  }
                  inventory {
                    aggregated {
                      availableToSell
                      warningLevel
                    }
                    isInStock
                  }
                  productOptions {
                    edges {
                      node {
                        __typename
                        entityId
                        displayName
                        ...multipleChoiceOption
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ${productInfoFragment}
`;
// TODO: See if this type is useful for defining the Product type
// export type ProductNode = Extract<
//   GetProductQuery['site']['route']['node'],
//   { __typename: 'Product' }
// >
function get_product_getAllProductPathsOperation({ commerce  }) {
    async function getProduct({ query =getProductQuery , variables: { slug , ...vars } , config: cfg  }) {
        const config = commerce.getConfig(cfg);
        const { locale  } = config;
        const variables = {
            locale,
            hasLocale: !!locale,
            path: slug ? `/${slug}/` : vars.path
        };
        console.log({
            variables
        });
        const { data  } = await config.fetch(query, {
            variables
        });
        console.log(data.site?.route?.node);
        const product = data.site?.route?.node;
        if (product?.__typename === 'Product') {
            if (locale && config.applyLocale) {
                setProductLocaleMeta(product);
            }
            return {
                product: (0,normalize/* normalizeProduct */.Op)(product)
            };
        }
        return {};
    }
    return getProduct;
};

;// CONCATENATED MODULE: ./src/framework/bigcommerce/api/index.ts











const API_URL = process.env.BIGCOMMERCE_STOREFRONT_API_URL;
const API_TOKEN = process.env.BIGCOMMERCE_STOREFRONT_API_TOKEN;
const STORE_API_URL = process.env.BIGCOMMERCE_STORE_API_URL;
const STORE_API_TOKEN = process.env.BIGCOMMERCE_STORE_API_TOKEN;
const STORE_API_CLIENT_ID = process.env.BIGCOMMERCE_STORE_API_CLIENT_ID;
const STORE_CHANNEL_ID = process.env.BIGCOMMERCE_CHANNEL_ID;
const STORE_URL = process.env.BIGCOMMERCE_STORE_URL;
const CLIENT_SECRET = process.env.BIGCOMMERCE_STORE_API_CLIENT_SECRET;
const STOREFRONT_HASH = process.env.BIGCOMMERCE_STORE_API_STORE_HASH;
if (!API_URL) {
    throw new Error(`The environment variable BIGCOMMERCE_STOREFRONT_API_URL is missing and it's required to access your store`);
}
if (!API_TOKEN) {
    throw new Error(`The environment variable BIGCOMMERCE_STOREFRONT_API_TOKEN is missing and it's required to access your store`);
}
if (!(STORE_API_URL && STORE_API_TOKEN && STORE_API_CLIENT_ID)) {
    throw new Error(`The environment variables BIGCOMMERCE_STORE_API_URL, BIGCOMMERCE_STORE_API_TOKEN, BIGCOMMERCE_STORE_API_CLIENT_ID have to be set in order to access the REST API of your store`);
}
const ONE_DAY = 60 * 60 * 24;
const config = {
    commerceUrl: API_URL,
    apiToken: API_TOKEN,
    customerCookie: 'SHOP_TOKEN',
    cartCookie: process.env.BIGCOMMERCE_CART_COOKIE ?? 'bc_cartId',
    cartCookieMaxAge: ONE_DAY * 30,
    fetch: fetch_graphql_api(()=>getCommerceApi().getConfig()
    ),
    applyLocale: true,
    // REST API only
    storeApiUrl: STORE_API_URL,
    storeApiToken: STORE_API_TOKEN,
    storeApiClientId: STORE_API_CLIENT_ID,
    storeChannelId: STORE_CHANNEL_ID,
    storeUrl: STORE_URL,
    storeApiClientSecret: CLIENT_SECRET,
    storeHash: STOREFRONT_HASH,
    storeApiFetch: fetch_store_api(()=>getCommerceApi().getConfig()
    )
};
const operations = {
    login: loginOperation,
    getAllPages: getAllPagesOperation,
    getPage: getPageOperation,
    getSiteInfo: getSiteInfoOperation,
    getCustomerWishlist: getCustomerWishlistOperation,
    getAllProductPaths: getAllProductPathsOperation,
    getAllProducts: getAllProductsOperation,
    getProduct: get_product_getAllProductPathsOperation
};
const provider = {
    config,
    operations
};
function getCommerceApi(customProvider = provider) {
    return (0,api/* getCommerceApi */.Db)(customProvider);
}

;// CONCATENATED MODULE: ./src/lib/api/commerce.ts

/* harmony default export */ const commerce = (getCommerceApi());


/***/ })

};
;