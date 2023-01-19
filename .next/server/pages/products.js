"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ products)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const products = [
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "27/03/2019",
        description: "Completed NSPs",
        title: "Network Strategic Planners",
        totalDownloads: "59"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "31/03/2019",
        description: "Contracts and Proposals",
        title: "Negotiation Contracts",
        totalDownloads: "62"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "03/04/2019",
        description: "Total Cost of Care Documents",
        title: "TCOC",
        totalDownloads: "7"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "04/04/2019",
        description: "Best In Class Benchmarks",
        title: "BIC Benchmarks",
        totalDownloads: "46"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "04/04/2019",
        description: "Division of Financial Responsibilities Documents",
        title: "DOFR",
        totalDownloads: "8"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        createdAt: "04/04/2019",
        description: "Additional Resources",
        title: "Additional Resources",
        totalDownloads: "15"
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ ProductCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/utils"
var utils_ = __webpack_require__(7077);
;// CONCATENATED MODULE: ./src/icons/clock.js


const Clock = (0,utils_.createSvgIcon)(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
        clipRule: "evenodd"
    })
}), "Clock");

// EXTERNAL MODULE: ./src/icons/download.js
var download = __webpack_require__(4747);
;// CONCATENATED MODULE: ./src/components/product/product-card.js





const ProductCard = ({ product , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            pb: 3
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            alt: "Product",
                            src: product.media,
                            variant: "square"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        align: "center",
                        color: "textPrimary",
                        gutterBottom: true,
                        variant: "h5",
                        children: product.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        align: "center",
                        color: "textPrimary",
                        variant: "body1",
                        children: product.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    flexGrow: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    p: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 2,
                    sx: {
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            sx: {
                                alignItems: "center",
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Clock, {
                                    color: "action"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textSecondary",
                                    display: "inline",
                                    sx: {
                                        pl: 1
                                    },
                                    variant: "body2",
                                    children: "Updated 2hr ago"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            sx: {
                                alignItems: "center",
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(download/* Download */.U, {
                                    color: "action"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    color: "textSecondary",
                                    display: "inline",
                                    sx: {
                                        pl: 1
                                    },
                                    variant: "body2",
                                    children: [
                                        product.totalDownloads,
                                        " ",
                                        "Downloads"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
ProductCard.propTypes = {
    product: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ProductListToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4747);
/* harmony import */ var _icons_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7169);
/* harmony import */ var _icons_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2248);






const ProductListToolbar = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    m: -1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        sx: {
                            m: 1
                        },
                        variant: "h4",
                        children: "Documents"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            m: 1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_upload__WEBPACK_IMPORTED_MODULE_5__/* .Upload */ .g, {
                                    fontSize: "small"
                                }),
                                sx: {
                                    mr: 1
                                },
                                children: "Import"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_download__WEBPACK_IMPORTED_MODULE_3__/* .Download */ .U, {
                                    fontSize: "small"
                                }),
                                sx: {
                                    mr: 1
                                },
                                children: "Export"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                color: "primary",
                                variant: "contained",
                                children: "Add document"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    mt: 3
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                maxWidth: 500
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                fullWidth: true,
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                                        position: "start",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
                                            fontSize: "small",
                                            color: "action",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_search__WEBPACK_IMPORTED_MODULE_4__/* .Search */ .o, {})
                                        })
                                    })
                                },
                                placeholder: "Search documents",
                                variant: "outlined"
                            })
                        })
                    })
                })
            })
        ]
    });


/***/ }),

/***/ 1495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mocks_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7492);
/* harmony import */ var _components_product_product_list_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(973);
/* harmony import */ var _components_product_product_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5010);
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mocks_products__WEBPACK_IMPORTED_MODULE_3__]);
_mocks_products__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Products = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Documents"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: "main",
                sx: {
                    flexGrow: 1,
                    py: 8
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    maxWidth: false,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_list_toolbar__WEBPACK_IMPORTED_MODULE_4__/* .ProductListToolbar */ .R, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                pt: 3
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                container: true,
                                spacing: 3,
                                children: _mocks_products__WEBPACK_IMPORTED_MODULE_3__/* .products.map */ .R.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                        item: true,
                                        lg: 4,
                                        md: 6,
                                        xs: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_card__WEBPACK_IMPORTED_MODULE_5__/* .ProductCard */ .I, {
                                            product: product
                                        })
                                    }, product.id))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                pt: 3
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
                                color: "primary",
                                count: 3,
                                size: "small"
                            })
                        })
                    ]
                })
            })
        ]
    });
Products.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_6__/* .DashboardLayout */ .c, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,447,391], () => (__webpack_exec__(1495)));
module.exports = __webpack_exports__;

})();