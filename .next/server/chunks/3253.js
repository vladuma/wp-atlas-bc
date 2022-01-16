"use strict";
exports.id = 3253;
exports.ids = [3253];
exports.modules = {

/***/ 9308:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FaustProvider)
/* harmony export */ });
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var _server_getProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9951);
/* harmony import */ var _gqty_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_gqty_client_js__WEBPACK_IMPORTED_MODULE_3__, _server_getProps_js__WEBPACK_IMPORTED_MODULE_2__]);
([_gqty_client_js__WEBPACK_IMPORTED_MODULE_3__, _server_getProps_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




/**
 * The FaustProvider is a React component required to properly facilitate SSR and SSG for Faust.js.
 *
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#rehydration-using-faustprovider-
 */
function FaustProvider({ children, pageProps, client, }) {
    client.setAsRoot();
    const { useHydrateCache, auth: { useHydrateCache: useAuthHydrateCache }, } = client;
    const cacheSnapshot = pageProps?.[_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__/* .CLIENT_CACHE_PROP */ .wS];
    const authSnapshot = pageProps?.[_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_CLIENT_CACHE_PROP */ .S3];
    useHydrateCache({
        cacheSnapshot: lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__(cacheSnapshot) ? undefined : cacheSnapshot,
    });
    useAuthHydrateCache({
        cacheSnapshot: lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__(authSnapshot) ? undefined : authSnapshot,
    });
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gqty_client_js__WEBPACK_IMPORTED_MODULE_3__/* .FaustContext.Provider */ .l.Provider, { value: {
            client,
        } }, children));
}

});

/***/ }),

/***/ 4323:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__.O)
/* harmony export */ });
/* harmony import */ var _FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__]);
_FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),

/***/ 6265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8656);

let nextConfig = {
    revalidate: 900,
};
function config(cfg) {
    nextConfig = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_0__({}, cfg, nextConfig, {
        revalidate: 900,
    });
    return nextConfig;
}


/***/ }),

/***/ 732:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: config, createRedirects, withFaust

// EXTERNAL MODULE: ./node_modules/@faustjs/next/dist/mjs/config/config.js
var config = __webpack_require__(6265);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "lodash/isFunction.js"
var isFunction_js_ = __webpack_require__(1361);
;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/config/withFaust.js


async function createRedirects(redirectFn, previewDestination = '/preview') {
    let redirects = [];
    if (isFunction(redirectFn)) {
        redirects = await redirectFn();
    }
    redirects.unshift({
        source: `/((?!${trim(previewDestination, '/')}$).*)`,
        has: [
            {
                type: 'query',
                key: 'preview',
                value: 'true',
            },
        ],
        destination: `/${trim(previewDestination, '/')}`,
        permanent: false,
    });
    return redirects;
}
/**
 * A helper function to merge Faust.js related Next.js config with a user defined Next.js config.
 *
 * @param {NextConfig} config
 * @param {withFaustConfig} withFaustConfig
 * @returns {NextConfig}
 */
function withFaust(config, withFaustConfig) {
    const { previewDestination } = withFaustConfig || {};
    const nextConfig = config ?? {};
    const existingRedirects = nextConfig.redirects;
    nextConfig.redirects = () => createRedirects(existingRedirects, previewDestination);
    return nextConfig;
}

;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/config/index.js




/***/ }),

/***/ 3253:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s3": () => (/* reexport safe */ _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__.s3),
/* harmony export */   "fJ": () => (/* reexport safe */ _server_index_js__WEBPACK_IMPORTED_MODULE_3__.fJ),
/* harmony export */   "bM": () => (/* reexport safe */ _server_index_js__WEBPACK_IMPORTED_MODULE_3__.bM),
/* harmony export */   "Ou": () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_4__.O)
/* harmony export */ });
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* harmony import */ var _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);
/* harmony import */ var _log_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _server_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5895);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_index_js__WEBPACK_IMPORTED_MODULE_4__, _server_index_js__WEBPACK_IMPORTED_MODULE_3__, _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__]);
([_components_index_js__WEBPACK_IMPORTED_MODULE_4__, _server_index_js__WEBPACK_IMPORTED_MODULE_3__, _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






});

/***/ }),

/***/ 428:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ FaustContext),
/* harmony export */   "s": () => (/* binding */ getClient)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _gqty_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8593);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8700);
/* harmony import */ var lodash_merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__, _gqty_react__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);
([_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__, _gqty_react__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FaustContext = react__WEBPACK_IMPORTED_MODULE_5__.createContext({});
/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/explicit-module-boundary-types */
function getClient(clientConfig, createReactClientOpts) {
    const coreClient = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.getClient)(clientConfig);
    let reactClientOpts = {
        defaults: {
            // Set this flag as "true" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,
            // Set this flag based on your needs
            staleWhileRevalidate: false,
        },
    };
    if (lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(createReactClientOpts)) {
        reactClientOpts = lodash_merge_js__WEBPACK_IMPORTED_MODULE_4__(reactClientOpts, createReactClientOpts);
    }
    const reactClient = (0,_gqty_react__WEBPACK_IMPORTED_MODULE_1__.createReactClient)(coreClient, reactClientOpts);
    const authReactClient = (0,_gqty_react__WEBPACK_IMPORTED_MODULE_1__.createReactClient)(coreClient.auth, reactClientOpts);
    const haveServerContext = lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(clientConfig.context?.apiClient);
    let nextClient;
    function useClient() {
        let client = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext)
            ?.client;
        if (haveServerContext || !lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(client)) {
            client = nextClient;
        }
        return client;
    }
    function useAuthClient() {
        let client = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext)
            ?.client;
        if (haveServerContext || !lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(client)) {
            client = nextClient;
        }
        return client.auth;
    }
    const hooks = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .createHooks */ .H)(useClient);
    const authHooks = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .createAuthHooks */ .N)(useAuthClient);
    function useIsLoading() {
        const { isLoading } = nextClient.useQuery().$state;
        const isAuthLoading = nextClient.auth.useQuery().$state.isLoading;
        return isLoading || isAuthLoading;
    }
    function setAsRoot() {
        nextClient.useQuery = reactClient.useQuery;
        nextClient.useLazyQuery = reactClient.useLazyQuery;
        nextClient.useTransactionQuery = reactClient.useTransactionQuery;
        nextClient.usePaginatedQuery = reactClient.usePaginatedQuery;
        nextClient.useMutation = reactClient.useMutation;
        nextClient.useSubscription = reactClient.useSubscription;
        nextClient.useClient = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext);
            return nextClient;
        };
        nextClient.auth.useQuery = authReactClient.useQuery;
        nextClient.auth.useLazyQuery = authReactClient.useLazyQuery;
        nextClient.auth.useTransactionQuery = authReactClient.useTransactionQuery;
        nextClient.auth.usePaginatedQuery = authReactClient.usePaginatedQuery;
        nextClient.auth.useMutation = authReactClient.useMutation;
        nextClient.auth.useSubscription = authReactClient.useSubscription;
        nextClient.auth.useClient = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext);
            return nextClient.auth;
        };
        nextClient.setAsRoot = lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
    }
    nextClient = {
        client: coreClient,
        ...reactClient,
        auth: {
            client: coreClient.auth,
            ...authReactClient,
            ...authHooks,
            useClient: useAuthClient,
            useIsLoading,
        },
        setAsRoot,
        context: clientConfig.context,
        ...hooks,
        useClient,
        useIsLoading,
    };
    return nextClient;
}

});

/***/ }),

/***/ 2903:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ createHooks),
/* harmony export */   "N": () => (/* binding */ createAuthHooks)
/* harmony export */ });
/* harmony import */ var _useAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2257);
/* harmony import */ var _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6991);
/* harmony import */ var _useMutation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(437);
/* harmony import */ var _usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1223);
/* harmony import */ var _useQuery_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4799);
/* harmony import */ var _useSubscription_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9199);
/* harmony import */ var _useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9478);
/* harmony import */ var _useHydrateCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4003);
/* harmony import */ var _useCategory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8630);
/* harmony import */ var _usePosts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8263);
/* harmony import */ var _usePost_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1003);
/* harmony import */ var _usePage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9860);
/* harmony import */ var _usePreview_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6038);
/* harmony import */ var _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4750);
/* harmony import */ var _useLogin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8381);
/* harmony import */ var _useLogout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useLogout_js__WEBPACK_IMPORTED_MODULE_9__, _useLogin_js__WEBPACK_IMPORTED_MODULE_8__, _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_7__, _usePreview_js__WEBPACK_IMPORTED_MODULE_6__, _usePage_js__WEBPACK_IMPORTED_MODULE_5__, _usePost_js__WEBPACK_IMPORTED_MODULE_4__, _useCategory_js__WEBPACK_IMPORTED_MODULE_2__, _useAuth_js__WEBPACK_IMPORTED_MODULE_0__]);
([_useLogout_js__WEBPACK_IMPORTED_MODULE_9__, _useLogin_js__WEBPACK_IMPORTED_MODULE_8__, _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_7__, _usePreview_js__WEBPACK_IMPORTED_MODULE_6__, _usePage_js__WEBPACK_IMPORTED_MODULE_5__, _usePost_js__WEBPACK_IMPORTED_MODULE_4__, _useCategory_js__WEBPACK_IMPORTED_MODULE_2__, _useAuth_js__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
















function createHooks(useClient) {
    const useQuery = (0,_useQuery_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .U)(useClient);
    const useMutation = (0,_useMutation_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .U)(useClient);
    return {
        useQuery,
        useLazyQuery: (0,_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_12__/* .create */ .U)(useClient),
        useMutation,
        usePaginatedQuery: (0,_usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_13__/* .create */ .U)(useClient),
        useSubscription: (0,_useSubscription_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .U)(useClient),
        useTransactionQuery: (0,_useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .U)(useClient),
        useHydrateCache: (0,_useHydrateCache_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .U)(useClient),
        useCategory: (0,_useCategory_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .U)(useQuery),
        usePosts: (0,_usePosts_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .U)(useQuery),
        usePost: (0,_usePost_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .U)(useQuery),
        usePage: (0,_usePage_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .U)(useQuery),
    };
}
function createAuthHooks(useClient) {
    const useQuery = (0,_useQuery_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .U)(useClient);
    const useAuth = (0,_useAuth_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .U)();
    const useMutation = (0,_useMutation_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .U)(useClient);
    return {
        useQuery,
        useAuth,
        useLazyQuery: (0,_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_12__/* .create */ .U)(useClient),
        useMutation,
        usePaginatedQuery: (0,_usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_13__/* .create */ .U)(useClient),
        useSubscription: (0,_useSubscription_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .U)(useClient),
        useTransactionQuery: (0,_useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .U)(useClient),
        useHydrateCache: (0,_useHydrateCache_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .U)(useClient),
        useCategory: (0,_useCategory_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .U)(useQuery),
        usePosts: (0,_usePosts_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .U)(useQuery),
        usePost: (0,_usePost_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .U)(useQuery),
        usePage: (0,_usePage_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .U)(useQuery),
        usePreview: (0,_usePreview_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .U)(useAuth, useQuery),
        usePreviewNode: (0,_usePreviewNode_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .U)(useAuth, useQuery),
        useLogin: (0,_useLogin_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .U)(useMutation),
        useLogout: (0,_useLogout_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .U)(),
    };
}

});

/***/ }),

/***/ 2257:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9577);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8700);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7187);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8593);
/* harmony import */ var lodash_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);
([_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// eslint-disable-next-line import/extensions







function create() {
    return (useAuthOptions) => {
        const options = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, useAuthOptions, {
            shouldRedirect: true,
        });
        const { shouldRedirect } = options;
        const { authType, loginPagePath } = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)();
        const [{ isAuthenticated, isLoading, authResult }, setState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
            isAuthenticated: undefined,
            isLoading: true,
            authResult: undefined,
        });
        // Check if a user is authenticated
        (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            let mounted = true;
            /* eslint-disable @typescript-eslint/no-floating-promises */
            (async () => {
                if (!mounted) {
                    return;
                }
                const auth = await (0,_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__.ensureAuthorization)({
                    redirectUri: window.location.href,
                    loginPageUri: `/${lodash_trim_js__WEBPACK_IMPORTED_MODULE_6__(loginPagePath, '/')}/?redirect_uri=${encodeURIComponent(window.location.href)}`,
                });
                if (!mounted) {
                    return;
                }
                setState({
                    authResult: auth,
                    isAuthenticated: auth === true,
                    isLoading: false,
                });
            })();
            return () => {
                mounted = false;
            };
        }, [loginPagePath]);
        // Redirect the user to the login page if they are not authenticated
        (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
            // Do not redirect if specified in UseAuthOptions.
            if (!shouldRedirect) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_4__(isAuthenticated) || isAuthenticated === true) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            // The user is not authenticated. Redirect them to the login page.
            const timeout = setTimeout(() => {
                if (!lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(authResult)) {
                    return;
                }
                if (authType === 'local' && authResult.login) {
                    window.location.replace(authResult.login);
                }
                if (authType === 'redirect' && authResult.redirect) {
                    window.location.replace(authResult.redirect);
                }
            }, 200);
            return () => {
                clearTimeout(timeout);
            };
        }, [shouldRedirect, isAuthenticated, authResult, authType]);
        return { isAuthenticated, isLoading, authResult };
    };
}

});

/***/ }),

/***/ 8630:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3108);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8656);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { category } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_3__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasCategoryId */ .Uh)(query)) {
            params = {
                id: query.categoryId,
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.ID,
                ...params,
            };
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasCategorySlug */ .gD)(query)) {
            params = {
                id: query.categorySlug,
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.SLUG,
                ...params,
            };
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_2__(params.id)) {
            throw new Error('Invalid parameters for useCategory, you must send in an id or specify known URL params in your config');
        }
        return category(params);
    };
}

});

/***/ }),

/***/ 4003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3108);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8700);
/* harmony import */ var lodash_isFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1361);




function create(useClient) {
    return ({ cacheSnapshot, shouldRefetch }) => {
        const snapshotCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
        const { client } = useClient();
        if (lodash_isString_js__WEBPACK_IMPORTED_MODULE_1__(cacheSnapshot) && snapshotCache.current !== cacheSnapshot) {
            snapshotCache.current = cacheSnapshot;
            client.hydrateCache({ cacheSnapshot, shouldRefetch: false });
        }
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (!lodash_isObject_js__WEBPACK_IMPORTED_MODULE_2__(client) || !lodash_isFunction_js__WEBPACK_IMPORTED_MODULE_3__(client.refetch)) {
                return;
            }
            if (shouldRefetch) {
                client.refetch(client.query).catch(console.error);
            }
        }, [shouldRefetch, client]);
    };
}


/***/ }),

/***/ 6991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (...args) => {
        return useClient().useLazyQuery(...args);
    };
}


/***/ }),

/***/ 8381:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9577);
/* harmony import */ var _faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2866);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8593);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__]);
([_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions



function create(useMutation) {
    return (options) => {
        const { useMutationOptions } = options || {};
        const [loginMutation, { isLoading, data, error }] = useMutation((mutation, args) => {
            const { username, email, password } = args;
            const { code, error: mutationError } = mutation.generateAuthorizationCode({
                input: {
                    username,
                    email,
                    password,
                },
            }) || {};
            if (mutationError) {
                return { error: mutationError };
            }
            return { code };
        }, useMutationOptions);
        /**
         * Exchange a username/email and password for an authorization code
         *
         * @param {string} usernameEmail A WordPress username or email
         * @param {string} password The password for the username/email
         *
         * @returns Promise<void>
         */
        async function login(usernameEmail, password) {
            await loginMutation({
                args: {
                    username: (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(usernameEmail) ? undefined : usernameEmail,
                    email: (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(usernameEmail) ? usernameEmail : undefined,
                    password,
                },
            });
        }
        // If there is a successful login, and a redirect_uri query param present in the
        // url, then redirect the user to the redirect_uri.
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
            }
            if (!data || !data.code) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
            }
            let mounted = true;
            void (async () => {
                if (!mounted) {
                    return;
                }
                await (0,_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__.fetchAccessToken)(data.code);
                if (!mounted) {
                    return;
                }
                const redirectUri = (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.getQueryParam)(window.location.href, 'redirect_uri');
                if (redirectUri) {
                    window.location.replace(redirectUri);
                }
            })();
            return () => {
                mounted = false;
            };
        }, [data]);
        return { login, isLoading, data, error };
    };
}

});

/***/ }),

/***/ 1564:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7326);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);
([_faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__, _faustjs_core__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// eslint-disable-next-line import/extensions



function create() {
    return () => {
        const { apiBasePath } = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)();
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(apiBasePath)) {
            throw new Error('apiBasePath needs to be defined to use the useLogout hook');
        }
        const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
        const [isLoggedOut, setIsLoggedOut] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
        /**
         * Callable function to logout the existing user.
         */
        async function logout() {
            setIsLoading(true);
            const res = await fetch(`${apiBasePath}/${_faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_ENDPOINT_PARTIAL_PATH}`, {
                method: 'POST',
            });
            setIsLoading(false);
            if (res.ok) {
                setIsLoggedOut(true);
            }
            else {
                setIsLoggedOut(false);
            }
        }
        return { logout, isLoggedOut, isLoading };
    };
}

});

/***/ }),

/***/ 437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (...args) => {
        return useClient().useMutation(...args);
    };
}


/***/ }),

/***/ 9860:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3108);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { page } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPageId */ .jj)(query)) {
            params = {
                id: query.pageId,
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.ID,
                ...params,
            };
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPageUri */ .S5)(query)) {
            params = {
                id: query.pageUri.join('/'),
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.URI,
                ...params,
            };
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__(params.id)) {
            throw new Error('Invalid parameters for usePage, you must send in an id or specify known URL params in your config');
        }
        return page(params);
    };
}

});

/***/ }),

/***/ 1223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (...args) => {
        return useClient().usePaginatedQuery(...args);
    };
}


/***/ }),

/***/ 1003:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3108);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { post } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, args);
        const { query } = router;
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostId */ .OJ)(query)) {
            params = {
                id: query.postId,
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.ID,
                ...params,
            };
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostSlug */ .nh)(query)) {
            params = {
                id: query.postSlug,
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.SLUG,
                ...params,
            };
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostUri */ .kN)(query)) {
            params = {
                id: query.postUri.join('/'),
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.URI,
                ...params,
            };
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__(params.id)) {
            throw new Error('Invalid parameters for usePost, you must send in an id or specify known URL params in your config');
        }
        return post(params);
    };
}

});

/***/ }),

/***/ 8263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8656);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1825);



function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
        const { posts } = useQuery();
        const params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_1__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .hasCategoryId */ .Uh)(query)) {
            params.where = {
                categoryId: Number(query.categoryId),
                ...params.where,
            };
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .hasCategorySlug */ .gD)(query)) {
            params.where = {
                categoryName: query.categorySlug,
                ...params.where,
            };
        }
        return posts(params);
    };
}


/***/ }),

/***/ 6038:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7187);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5925);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions




function create(useAuth, useQuery) {
    function usePreview() {
        const { query: { p, page_id: pageId }, } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const { isAuthenticated } = useAuth();
        const { post: postQuery, page: pageQuery } = useQuery();
        const isPage = !!pageId;
        const args = {
            pageId: isPage ? p : undefined,
            postId: !isPage ? p : undefined,
        };
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_1__(isAuthenticated) || isAuthenticated !== true) {
            return;
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .hasPageId */ .jj)(args)) {
            const page = pageQuery({
                id: args?.pageId ?? '',
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.DATABASE_ID,
            });
            const mostRecentPageRevision = page?.revisions({ first: 1 })?.edges?.[0]
                ?.node;
            // eslint-disable-next-line consistent-return
            return {
                type: 'page',
                page: mostRecentPageRevision?.id ? mostRecentPageRevision : page,
            };
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .hasPostId */ .OJ)(args)) {
            const post = postQuery({
                id: args?.postId ?? '',
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.DATABASE_ID,
            });
            const mostRecentPostRevision = post?.revisions({ first: 1 })?.edges?.[0]
                ?.node;
            // eslint-disable-next-line consistent-return
            return {
                type: 'post',
                post: mostRecentPostRevision?.id ? mostRecentPostRevision : post,
            };
        }
    }
    return usePreview;
}

});

/***/ }),

/***/ 4750:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8086);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7187);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions




function create(useAuth, useQuery) {
    function usePreviewNode() {
        const { isReady, query: { p: postIdQuery, preview: previewQuery, typeName: typeNameQuery }, } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
        const { isAuthenticated } = useAuth();
        const { contentNode } = useQuery();
        const unreadyResponse = {
            typeName: undefined,
            node: undefined,
        };
        const notFoundResponse = {
            typeName: null,
            node: null,
        };
        if (!isReady) {
            return unreadyResponse;
        }
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__(isAuthenticated) || isAuthenticated !== true) {
            return unreadyResponse;
        }
        if (lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(postIdQuery) || lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(previewQuery) || previewQuery !== 'true') {
            throw new Error(`usePreviewNode() requires the "p" and "preview" ` +
                `URL query parameters i.e. ?p=123&preview=true`);
        }
        if (Array.isArray(postIdQuery)) {
            throw new Error('usePreviewNode() requires the "p" URL query parameter to be a string');
        }
        const node = contentNode({
            id: postIdQuery,
            idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.ContentNodeIdTypeEnum.DATABASE_ID,
            asPreview: true,
        });
        /**
         * `contentNode` returns null if the post does not exist
         * or if the preview has not been generated yet
         *
         * @link https://github.com/wp-graphql/wp-graphql/issues/2166
         */
        if (node === null) {
            return notFoundResponse;
        }
        if (!lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(typeNameQuery) && Array.isArray(typeNameQuery)) {
            throw new Error('usePreviewNode() requires the "postType" URL' +
                'query parameter to be a string');
        }
        // eslint-disable-next-line no-underscore-dangle
        const previewNodeTypeName = typeNameQuery ?? node?.__typename;
        if (lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(previewNodeTypeName)) {
            return notFoundResponse;
        }
        const previewNode = node?.$on?.[previewNodeTypeName];
        /**
         * `previewNodeTypeName` could be `undefined` here if the postType
         * URL query param is manually specified and it is not valid.
         */
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__(previewNode)) {
            return notFoundResponse;
        }
        return {
            typeName: previewNodeTypeName,
            node: previewNode,
        };
    }
    return usePreviewNode;
}

});

/***/ }),

/***/ 4799:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (...args) => {
        return useClient().useQuery(...args);
    };
}


/***/ }),

/***/ 9199:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (...args) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return useClient().useSubscription(...args);
    };
}


/***/ }),

/***/ 9478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
function create(useClient) {
    return (fn, ...args) => {
        return useClient().useTransactionQuery(fn, ...args);
    };
}


/***/ }),

/***/ 332:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s3": () => (/* reexport safe */ _client_js__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_index_js__WEBPACK_IMPORTED_MODULE_1__, _client_js__WEBPACK_IMPORTED_MODULE_0__]);
([_hooks_index_js__WEBPACK_IMPORTED_MODULE_1__, _client_js__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



});

/***/ }),

/***/ 325:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: logQueries

// EXTERNAL MODULE: external "lodash/defaults.js"
var defaults_js_ = __webpack_require__(8656);
;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/log/log.js

async function logQueries(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
client, options) {
    try {
        const { createLogger } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1542));
        const logOptions = defaults({}, options, {
            showSelections: false,
            showCache: false,
        });
        const logger = createLogger(client.client, logOptions);
        const authLogger = createLogger(client.auth.client, logOptions);
        const unsubLogger = logger.start();
        const unsubAuthLogger = authLogger.start();
        return () => {
            unsubLogger();
            unsubAuthLogger();
        };
    }
    catch (e) {
        return () => { };
    }
}

;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/log/index.js



/***/ }),

/***/ 9951:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wS": () => (/* binding */ CLIENT_CACHE_PROP),
/* harmony export */   "S3": () => (/* binding */ AUTH_CLIENT_CACHE_PROP),
/* harmony export */   "bM": () => (/* binding */ is404),
/* harmony export */   "fJ": () => (/* binding */ getNextStaticProps)
/* harmony export */ });
/* unused harmony exports getProps, getNextServerSideProps */
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8086);
/* harmony import */ var next_dist_shared_lib_router_context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4964);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6265);
/* harmony import */ var _gqty_client_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(428);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_6__]);
([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
/* eslint-disable react/no-children-prop */
// eslint-disable-next-line import/extensions








const CLIENT_CACHE_PROP = '__CLIENT_CACHE_PROP';
const AUTH_CLIENT_CACHE_PROP = '__AUTH_CLIENT_CACHE_PROP';
async function getProps(context, { client, Page, props, }) {
    let cacheSnapshot;
    let authSnapshot;
    client.setAsRoot();
    if (!lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__(Page)) {
        const authClient = client.auth.client;
        const { cacheSnapshot: coreAuthSnapshot } = await authClient.prepareRender(async () => {
            const { cacheSnapshot: coreSnapshot } = await client.prepareReactRender(react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_dist_shared_lib_router_context_js__WEBPACK_IMPORTED_MODULE_3__.RouterContext.Provider
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            , { 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value: { query: { ...context.params } } },
                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_gqty_client_js__WEBPACK_IMPORTED_MODULE_6__/* .FaustContext.Provider */ .l.Provider, { value: { client } },
                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(Page, { ...props }))));
            cacheSnapshot = coreSnapshot;
        });
        authSnapshot = coreAuthSnapshot;
    }
    return {
        props: {
            [CLIENT_CACHE_PROP]: cacheSnapshot ?? null,
            [AUTH_CLIENT_CACHE_PROP]: authSnapshot ?? null,
            ...props,
        },
    };
}
async function is404({ params }, { client }) {
    if (!params) {
        return false;
    }
    const { client: { inlineResolved, query }, } = client;
    let entityExists = false;
    let result;
    try {
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasPostId */ .OJ)(params)) {
            result = inlineResolved(() => {
                return query.post({
                    id: params.postId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.ID,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasPostSlug */ .nh)(params)) {
            result = inlineResolved(() => {
                return query.post({
                    id: params.postSlug,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.SLUG,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasPostUri */ .kN)(params)) {
            result = inlineResolved(() => {
                return query.post({
                    id: params.postUri.join('/'),
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.URI,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasPageId */ .jj)(params)) {
            result = inlineResolved(() => {
                return query.page({
                    id: params.pageId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.ID,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasPageUri */ .S5)(params)) {
            result = inlineResolved(() => {
                return query.page({
                    id: params.pageUri.join('/'),
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.URI,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasCategoryId */ .Uh)(params)) {
            result = inlineResolved(() => {
                return query.category({
                    id: params.categoryId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.ID,
                })?.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_7__/* .hasCategorySlug */ .gD)(params)) {
            result = inlineResolved(() => {
                return query.category({
                    id: params.categorySlug,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.SLUG,
                })?.id;
            }, { refetch: true });
        }
    }
    catch (e) {
        return true;
    }
    if (result instanceof Promise) {
        entityExists = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__(await result);
    }
    else {
        entityExists = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__(result);
    }
    return !entityExists;
}
/**
 * This helper function lets you server side render your page with WordPress data
 *
 * @param {GetServerSidePropsContext} context
 * @param {GetNextServerSidePropsConfig} cfg
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#ssr-using-getnextserversideprops
 */
async function getNextServerSideProps(context, cfg) {
    const { notFound, redirect } = cfg;
    if (isBoolean(notFound) && notFound === true) {
        return {
            notFound,
        };
    }
    if (isObject(redirect)) {
        return {
            redirect,
        };
    }
    return getProps(context, cfg);
}
/**
 * This helper function lets you build a static site with your WordPress data
 *
 * @param {GetStaticPropsContext} context
 * @param {GetNextStaticPropsConfig} cfg
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#ssg-using-getnextstaticprops
 */
async function getNextStaticProps(context, cfg) {
    const { notFound, redirect, revalidate } = cfg;
    const nextConfig = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_5__/* .config */ .v)();
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isBoolean)(notFound) && notFound === true) {
        return {
            notFound,
        };
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isObject)(redirect)) {
        return {
            redirect,
        };
    }
    const pageProps = await getProps(context, cfg);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isObject)(pageProps.props)) {
        pageProps.revalidate = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__(revalidate)
            ? revalidate
            : nextConfig.revalidate;
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    return pageProps;
}

});

/***/ }),

/***/ 5895:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fJ": () => (/* reexport safe */ _getProps_js__WEBPACK_IMPORTED_MODULE_0__.fJ),
/* harmony export */   "bM": () => (/* reexport safe */ _getProps_js__WEBPACK_IMPORTED_MODULE_0__.bM)
/* harmony export */ });
/* harmony import */ var _getProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9951);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getProps_js__WEBPACK_IMPORTED_MODULE_0__]);
_getProps_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


});

/***/ }),

/***/ 1825:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uh": () => (/* reexport */ hasCategoryId),
  "gD": () => (/* reexport */ hasCategorySlug),
  "jj": () => (/* reexport */ hasPageId),
  "S5": () => (/* reexport */ hasPageUri),
  "OJ": () => (/* reexport */ hasPostId),
  "nh": () => (/* reexport */ hasPostSlug),
  "kN": () => (/* reexport */ hasPostUri)
});

// UNUSED EXPORTS: formatUrlPrefix

// EXTERNAL MODULE: external "lodash/isArray.js"
var isArray_js_ = __webpack_require__(9923);
// EXTERNAL MODULE: external "lodash/isObject.js"
var isObject_js_ = __webpack_require__(8700);
// EXTERNAL MODULE: external "lodash/isString.js"
var isString_js_ = __webpack_require__(3108);
// EXTERNAL MODULE: external "lodash/trim.js"
var trim_js_ = __webpack_require__(3197);
;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/utils/assert.js




function hasPropString(prop) {
    return (params) => {
        return isObject_js_(params) && isString_js_(params[prop]);
    };
}
function hasPropStringArray(prop) {
    return (params) => {
        return (isObject_js_(params) && isArray_js_(params[prop]) && isString_js_(params[prop]?.[0]));
    };
}
const hasPostId = hasPropString('postId');
const hasPostSlug = hasPropString('postSlug');
const hasPostUri = hasPropStringArray('postUri');
const hasPageId = hasPropString('pageId');
const hasPageUri = hasPropStringArray('pageUri');
const hasCategoryId = hasPropString('categoryId');
const hasCategorySlug = hasPropString('categorySlug');
function formatUrlPrefix(pathPrefix) {
    if (pathPrefix.length === 1 && pathPrefix === '/') {
        return '';
    }
    const prefix = trim(pathPrefix, '/');
    return `/${prefix}`;
}

;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/utils/index.js



/***/ })

};
;