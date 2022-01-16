"use strict";
exports.id = 6784;
exports.ids = [6784];
exports.modules = {

/***/ 6784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l8": () => (/* binding */ useUI),
/* harmony export */   "DA": () => (/* binding */ ManagedUIContext)
/* harmony export */ });
/* unused harmony exports UIContext, UIProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    displaySidebar: false,
    displayDropdown: false,
    displayModal: false,
    modalView: 'LOGIN_VIEW',
    sidebarView: 'CART_VIEW',
    userAvatar: ''
};
const UIContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
UIContext.displayName = 'UIContext';
function uiReducer(state, action) {
    switch(action.type){
        case 'OPEN_SIDEBAR':
            {
                return {
                    ...state,
                    displaySidebar: true
                };
            }
        case 'CLOSE_SIDEBAR':
            {
                return {
                    ...state,
                    displaySidebar: false
                };
            }
        case 'OPEN_DROPDOWN':
            {
                return {
                    ...state,
                    displayDropdown: true
                };
            }
        case 'CLOSE_DROPDOWN':
            {
                return {
                    ...state,
                    displayDropdown: false
                };
            }
        case 'OPEN_MODAL':
            {
                return {
                    ...state,
                    displayModal: true,
                    displaySidebar: false
                };
            }
        case 'CLOSE_MODAL':
            {
                return {
                    ...state,
                    displayModal: false
                };
            }
        case 'SET_MODAL_VIEW':
            {
                return {
                    ...state,
                    modalView: action.view
                };
            }
        case 'SET_SIDEBAR_VIEW':
            {
                return {
                    ...state,
                    sidebarView: action.view
                };
            }
        case 'SET_USER_AVATAR':
            {
                return {
                    ...state,
                    userAvatar: action.value
                };
            }
    }
}
const UIProvider = (props)=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(uiReducer, initialState);
    const openSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'OPEN_SIDEBAR'
        })
    , [
        dispatch
    ]);
    const closeSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'CLOSE_SIDEBAR'
        })
    , [
        dispatch
    ]);
    const toggleSidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>state.displaySidebar ? dispatch({
            type: 'CLOSE_SIDEBAR'
        }) : dispatch({
            type: 'OPEN_SIDEBAR'
        })
    , [
        dispatch,
        state.displaySidebar
    ]);
    const closeSidebarIfPresent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>state.displaySidebar && dispatch({
            type: 'CLOSE_SIDEBAR'
        })
    , [
        dispatch,
        state.displaySidebar
    ]);
    const openDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'OPEN_DROPDOWN'
        })
    , [
        dispatch
    ]);
    const closeDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'CLOSE_DROPDOWN'
        })
    , [
        dispatch
    ]);
    const openModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'OPEN_MODAL'
        })
    , [
        dispatch
    ]);
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'CLOSE_MODAL'
        })
    , [
        dispatch
    ]);
    const setUserAvatar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>dispatch({
            type: 'SET_USER_AVATAR',
            value
        })
    , [
        dispatch
    ]);
    const setModalView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((view)=>dispatch({
            type: 'SET_MODAL_VIEW',
            view
        })
    , [
        dispatch
    ]);
    const setSidebarView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((view)=>dispatch({
            type: 'SET_SIDEBAR_VIEW',
            view
        })
    , [
        dispatch
    ]);
    const value1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...state,
            openSidebar,
            closeSidebar,
            toggleSidebar,
            closeSidebarIfPresent,
            openDropdown,
            closeDropdown,
            openModal,
            closeModal,
            setModalView,
            setSidebarView,
            setUserAvatar
        })
    , [
        state
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIContext.Provider, {
        value: value1,
        ...props
    }));
};
const useUI = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UIContext);
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`);
    }
    return context;
};
const ManagedUIContext = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            children: children
        })
    })
;


/***/ })

};
;