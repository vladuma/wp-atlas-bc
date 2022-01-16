"use strict";
exports.id = 2781;
exports.ids = [2781];
exports.modules = {

/***/ 2781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_SignUpView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__(1072);
;// CONCATENATED MODULE: ./src/components/icons/Info.tsx

const Info = ({ ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "transparent"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 8v4",
                stroke: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 16h.01",
                stroke: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const icons_Info = (Info);

// EXTERNAL MODULE: ./src/components/ui/context.tsx
var context = __webpack_require__(6784);
// EXTERNAL MODULE: ./src/components/ui/Logo/Logo.tsx
var Logo = __webpack_require__(1381);
// EXTERNAL MODULE: ./src/components/ui/Input/Input.tsx
var Input = __webpack_require__(7982);
// EXTERNAL MODULE: ./src/components/ui/Button/Button.tsx
var Button = __webpack_require__(145);
// EXTERNAL MODULE: ./src/framework/bigcommerce/auth/use-signup.tsx + 1 modules
var use_signup = __webpack_require__(7680);
;// CONCATENATED MODULE: ./src/components/auth/SignUpView.tsx







const SignUpView = ()=>{
    // Form State
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)('');
    const { 0: firstName , 1: setFirstName  } = (0,external_react_.useState)('');
    const { 0: lastName , 1: setLastName  } = (0,external_react_.useState)('');
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)('');
    const { 0: dirty , 1: setDirty  } = (0,external_react_.useState)(false);
    const { 0: disabled , 1: setDisabled  } = (0,external_react_.useState)(false);
    const signup = (0,use_signup/* default */.Z)();
    const { setModalView , closeModal  } = (0,context/* useUI */.l8)();
    const handleSignup = async (e)=>{
        e.preventDefault();
        if (!dirty && !disabled) {
            setDirty(true);
            handleValidation();
        }
        try {
            setLoading(true);
            setMessage('');
            await signup({
                email,
                firstName,
                lastName,
                password
            });
            setLoading(false);
            closeModal();
        } catch ({ errors  }) {
            // setMessage(errors[0].message)
            setLoading(false);
        }
    };
    const handleValidation = (0,external_react_.useCallback)(()=>{
        // Test for Alphanumeric password
        const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);
        // Unable to send form unless fields are valid.
        if (dirty) {
            setDisabled(!(0,external_email_validator_.validate)(email) || password.length < 7 || !validPassword);
        }
    }, [
        email,
        password,
        dirty
    ]);
    (0,external_react_.useEffect)(()=>{
        handleValidation();
    }, [
        handleValidation
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSignup,
        className: "w-80 flex flex-col justify-between p-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center pb-12 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                    width: "64px",
                    height: "64px"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col space-y-4",
                children: [
                    message && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-red border border-red p-3",
                        children: message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                        placeholder: "First Name",
                        onChange: setFirstName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                        placeholder: "Last Name",
                        onChange: setLastName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                        type: "email",
                        placeholder: "Email",
                        onChange: setEmail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                        type: "password",
                        placeholder: "Password",
                        onChange: setPassword
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-accent-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "inline-block align-middle ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_Info, {
                                    width: "15",
                                    height: "15"
                                })
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "leading-6 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Info"
                                    }),
                                    ": Passwords must be longer than 7 chars and include numbers.",
                                    ' '
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt-2 w-full flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            variant: "slim",
                            type: "submit",
                            loading: loading,
                            disabled: disabled,
                            children: "Sign Up"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "pt-1 text-center text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-accent-7",
                                children: "Do you have an account?"
                            }),
                            ` `,
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-accent-9 font-bold hover:underline cursor-pointer",
                                onClick: ()=>setModalView('LOGIN_VIEW')
                                ,
                                children: "Log In"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const auth_SignUpView = (SignUpView);


/***/ })

};
;