"use strict";
exports.id = 2098;
exports.ids = [2098];
exports.modules = {

/***/ 6083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ CommerceAPIError)
/* harmony export */ });
/* unused harmony export CommerceNetworkError */
class CommerceAPIError extends Error {
    constructor(msg, res, data){
        super(msg);
        this.name = 'CommerceApiError';
        this.status = res.status;
        this.res = res;
        this.data = data;
    }
}
class CommerceNetworkError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'CommerceNetworkError';
    }
}


/***/ }),

/***/ 6466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ isAllowedOperation)
});

;// CONCATENATED MODULE: ./src/framework/commerce/api/utils/is-allowed-method.ts
function isAllowedMethod(req, res, allowedMethods) {
    const methods = allowedMethods.includes('OPTIONS') ? allowedMethods : [
        ...allowedMethods,
        'OPTIONS'
    ];
    if (!req.method || !methods.includes(req.method)) {
        res.status(405);
        res.setHeader('Allow', methods.join(', '));
        res.end();
        return false;
    }
    if (req.method === 'OPTIONS') {
        res.status(200);
        res.setHeader('Allow', methods.join(', '));
        res.setHeader('Content-Length', '0');
        res.end();
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./src/framework/commerce/api/utils/is-allowed-operation.ts

function isAllowedOperation(req, res, allowedOperations) {
    const methods = Object.keys(allowedOperations);
    const allowedMethods = methods.reduce((arr, method)=>{
        if (allowedOperations[method]) {
            arr.push(method);
        }
        return arr;
    }, []);
    return isAllowedMethod(req, res, allowedMethods);
};


/***/ })

};
;