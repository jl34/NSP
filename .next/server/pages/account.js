"use strict";
(() => {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/account/account-profile.js


const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    city: "Los Angeles",
    country: "USA",
    jobTitle: "Senior Network Contract Manager",
    name: "Jennifer Luu",
    timezone: "Manager: Jennifer Luu"
};
const AccountProfile = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            src: user.avatar,
                            sx: {
                                height: 64,
                                mb: 2,
                                width: 64
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textPrimary",
                            gutterBottom: true,
                            variant: "h5",
                            children: user.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textSecondary",
                            variant: "body2",
                            children: `${user.city} ${user.country}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textSecondary",
                            variant: "body2",
                            children: user.timezone
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActions, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    color: "primary",
                    fullWidth: true,
                    variant: "text",
                    children: "Upload picture"
                })
            })
        ]
    });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/account/account-profile-details.js



const states = [
    {
        value: "california",
        label: "California"
    },
    {
        value: "new-york",
        label: "New York"
    },
    {
        value: "san-francisco",
        label: "San Francisco"
    }
];
const AccountProfileDetails = (props)=>{
    const { 0: values , 1: setValues  } = (0,external_react_.useState)({
        firstName: "Jennifer",
        lastName: "Luu",
        email: "uhc@google.com",
        phone: "",
        state: "California",
        country: "USA"
    });
    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        autoComplete: "off",
        noValidate: true,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CardHeader, {
                    subheader: "The information can be edited",
                    title: "Profile"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    helperText: "Please specify the first name",
                                    label: "First name",
                                    name: "firstName",
                                    onChange: handleChange,
                                    required: true,
                                    value: values.firstName,
                                    variant: "outlined"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    label: "Last name",
                                    name: "lastName",
                                    onChange: handleChange,
                                    required: true,
                                    value: values.lastName,
                                    variant: "outlined"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    label: "Email Address",
                                    name: "email",
                                    onChange: handleChange,
                                    required: true,
                                    value: values.email,
                                    variant: "outlined"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    label: "Phone Number",
                                    name: "phone",
                                    onChange: handleChange,
                                    type: "number",
                                    value: values.phone,
                                    variant: "outlined"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    label: "Country",
                                    name: "country",
                                    onChange: handleChange,
                                    required: true,
                                    value: values.country,
                                    variant: "outlined"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                md: 6,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                    fullWidth: true,
                                    label: "Select State",
                                    name: "state",
                                    onChange: handleChange,
                                    required: true,
                                    select: true,
                                    SelectProps: {
                                        native: true
                                    },
                                    value: values.state,
                                    variant: "outlined",
                                    children: states.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option.value,
                                            children: option.label
                                        }, option.value))
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        color: "primary",
                        variant: "contained",
                        children: "Save details"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/dashboard-layout.js + 15 modules
var dashboard_layout = __webpack_require__(6447);
;// CONCATENATED MODULE: ./src/pages/account.js






const Account = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Account"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                component: "main",
                sx: {
                    flexGrow: 1,
                    py: 8
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                    maxWidth: "lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                mb: 3
                            },
                            variant: "h4",
                            children: "Account"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    lg: 4,
                                    md: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AccountProfile, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    lg: 8,
                                    md: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AccountProfileDetails, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
Account.getLayout = (page)=>/*#__PURE__*/ jsx_runtime_.jsx(dashboard_layout/* DashboardLayout */.c, {
        children: page
    });
/* harmony default export */ const account = (Account);


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2596:
/***/ ((module) => {

module.exports = require("@mui/icons-material/OpenInNew");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("@mui/material/utils");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,447], () => (__webpack_exec__(7526)));
module.exports = __webpack_exports__;

})();