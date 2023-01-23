"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ Budget)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDownward"
var ArrowDownward_ = __webpack_require__(2569);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward_);
;// CONCATENATED MODULE: external "@mui/icons-material/Money"
const Money_namespaceObject = require("@mui/icons-material/Money");
var Money_default = /*#__PURE__*/__webpack_require__.n(Money_namespaceObject);
;// CONCATENATED MODULE: ./src/components/dashboard/budget.js




const Budget = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        sx: {
            height: "100%"
        },
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 3,
                    sx: {
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textSecondary",
                                    gutterBottom: true,
                                    variant: "overline",
                                    children: "GROSS REVENUE"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textPrimary",
                                    variant: "h4",
                                    children: "$140M"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                sx: {
                                    backgroundColor: "gray",
                                    height: 56,
                                    width: 56
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Money_default()), {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        pt: 2,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownward_default()), {
                            color: "error"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "error",
                            sx: {
                                mr: 1
                            },
                            variant: "body2",
                            children: "12%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textSecondary",
                            variant: "caption",
                            children: "Since last month"
                        })
                    ]
                })
            ]
        })
    });


/***/ }),

/***/ 500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ LatestOrders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5162);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7902);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _severity_pill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const orders = [
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1049",
        amount: 30.5,
        customer: {
            name: "John Smith"
        },
        createdAt: 1555016400000,
        status: "pending"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1048",
        amount: 25.1,
        customer: {
            name: "Jennifer Luu"
        },
        createdAt: 1555016400000,
        status: "completed"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1047",
        amount: 10.99,
        customer: {
            name: "Alex Richardson"
        },
        createdAt: 1554930000000,
        status: "pending"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1046",
        amount: 96.43,
        customer: {
            name: "George Washington"
        },
        createdAt: 1554757200000,
        status: "not started"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1045",
        amount: 32.54,
        customer: {
            name: "Clarke Gilbert"
        },
        createdAt: 1554670800000,
        status: "completed"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        ref: "NSP1044",
        amount: 16.76,
        customer: {
            name: "Adam Eve"
        },
        createdAt: 1554670800000,
        status: "completed"
    }
];
const LatestOrders = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {
                title: "Latest Negotiations"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    sx: {
                        minWidth: 800
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: "NSP ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: "Contract Manager"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            sortDirection: "desc",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                                enterDelay: 300,
                                                title: "Sort",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableSortLabel, {
                                                    active: true,
                                                    direction: "desc",
                                                    children: "Date"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                            children: "Status"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
                                children: orders.map((order)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                        hover: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: order.ref
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: order.customer.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(order.createdAt, "dd/MM/yyyy")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_severity_pill__WEBPACK_IMPORTED_MODULE_6__/* .SeverityPill */ .I, {
                                                    color: order.status === "completed" && "success" || order.status === "not started" && "error" || "warning",
                                                    children: order.status
                                                })
                                            })
                                        ]
                                    }, order.id))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    color: "primary",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default()), {
                        fontSize: "small"
                    }),
                    size: "small",
                    variant: "text",
                    children: "View all"
                })
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ LatestProducts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7902);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const products = [
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        name: "Network Strategic Planner Template",
        imageUrl: "./static/images/products/file.png",
        updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subHours)(Date.now(), 2)
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        name: "Total Cost of Care",
        imageUrl: "./static/images/products/file.png",
        updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subHours)(Date.now(), 2)
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        name: "Enloe NSP",
        imageUrl: "./static/images/products/file.png",
        updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subHours)(Date.now(), 3)
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        name: "Stanford NSP",
        imageUrl: "./static/images/products/file.png",
        updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subHours)(Date.now(), 5)
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
        name: "Providence LA NSP",
        imageUrl: "./static/images/products/file.png",
        updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.subHours)(Date.now(), 9)
    }
];
const LatestProducts = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                subtitle: `${products.length} in total`,
                title: "Recent Documents"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
                children: products.map((product, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                        divider: i < products.length - 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemAvatar, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: product.name,
                                    src: product.imageUrl,
                                    style: {
                                        height: 48,
                                        width: 48
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemText, {
                                primary: product.name,
                                secondary: `Updated ${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.formatDistanceToNow)(product.updatedAt)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                edge: "end",
                                size: "small",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_5___default()), {})
                            })
                        ]
                    }, product.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    color: "primary",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                    size: "small",
                    variant: "text",
                    children: "View all"
                })
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Sales)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowDropDown"
const ArrowDropDown_namespaceObject = require("@mui/icons-material/ArrowDropDown");
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowRight"
var ArrowRight_ = __webpack_require__(7902);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_);
;// CONCATENATED MODULE: ./src/components/dashboard/sales.js
//import { Bar } from 'react-chartjs-2';




const Sales = (props)=>{
    const theme = (0,material_.useTheme)();
    const data = {
        datasets: [
            {
                backgroundColor: "#3F51B5",
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [
                    18,
                    5,
                    19,
                    27,
                    29,
                    19,
                    20
                ],
                label: "This year",
                maxBarThickness: 10
            },
            {
                backgroundColor: "#EEEEEE",
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [
                    11,
                    20,
                    12,
                    29,
                    30,
                    25,
                    13
                ],
                label: "Last year",
                maxBarThickness: 10
            }
        ],
        labels: [
            "1 Aug",
            "2 Aug",
            "3 Aug",
            "4 Aug",
            "5 Aug",
            "6 Aug",
            "7 aug"
        ]
    };
    const options = {
        animation: false,
        cornerRadius: 20,
        layout: {
            padding: 0
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        xAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [
                        2
                    ],
                    borderDashOffset: [
                        2
                    ],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [
                        2
                    ],
                    zeroLineBorderDashOffset: [
                        2
                    ],
                    zeroLineColor: theme.palette.divider
                }
            }
        ],
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: "index",
            titleFontColor: theme.palette.text.primary
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardHeader, {
                action: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                    endIcon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowDropDown_default()), {
                        fontSize: "small"
                    }),
                    size: "small",
                    children: "Last 7 days"
                }),
                title: "Negotiations Completed YTD"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        height: 400,
                        position: "relative"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/Users/Jennifer/Visual Studio/nsp/public/static/images/products/BarChart2.png",
                        style: {
                            height: 432,
                            width: 820
                        },
                        sx: {
                            display: "flex",
                            objectPosition: center
                        }
                    })
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
                    endIcon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowRight_default()), {
                        fontSize: "small"
                    }),
                    size: "small",
                    children: "Overview"
                })
            })
        ]
    });
};


/***/ }),

/***/ 5603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ TasksProgress)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/InsertChartOutlined"
const InsertChartOutlined_namespaceObject = require("@mui/icons-material/InsertChartOutlined");
var InsertChartOutlined_default = /*#__PURE__*/__webpack_require__.n(InsertChartOutlined_namespaceObject);
;// CONCATENATED MODULE: ./src/components/dashboard/tasks-progress.js



const TasksProgress = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        sx: {
            height: "100%"
        },
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 3,
                    sx: {
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textSecondary",
                                    gutterBottom: true,
                                    variant: "overline",
                                    children: "TOTAL NSP PROGRESS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textPrimary",
                                    variant: "h4",
                                    children: "75.5%"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                sx: {
                                    backgroundColor: "warning.main",
                                    height: 56,
                                    width: 56
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((InsertChartOutlined_default()), {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        pt: 3
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.LinearProgress, {
                        value: 75.5,
                        variant: "determinate"
                    })
                })
            ]
        })
    });


/***/ }),

/***/ 9758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ TotalCustomers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowUpward"
var ArrowUpward_ = __webpack_require__(3789);
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_);
;// CONCATENATED MODULE: external "@mui/icons-material/PeopleOutlined"
const PeopleOutlined_namespaceObject = require("@mui/icons-material/PeopleOutlined");
var PeopleOutlined_default = /*#__PURE__*/__webpack_require__.n(PeopleOutlined_namespaceObject);
;// CONCATENATED MODULE: ./src/components/dashboard/total-customers.js




const TotalCustomers = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 3,
                    sx: {
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textSecondary",
                                    gutterBottom: true,
                                    variant: "overline",
                                    children: "TOTAL NEGOTIATIONS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    color: "textPrimary",
                                    variant: "h4",
                                    children: "13"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                sx: {
                                    backgroundColor: "indigo",
                                    height: 56,
                                    width: 56
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((PeopleOutlined_default()), {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        alignItems: "center",
                        display: "flex",
                        pt: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowUpward_default()), {
                            color: "success"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "LightSeaGreen",
                            variant: "body2",
                            sx: {
                                mr: 1
                            },
                            children: "16%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            color: "textSecondary",
                            variant: "caption",
                            children: "Since last month"
                        })
                    ]
                })
            ]
        })
    });


/***/ }),

/***/ 6527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ TotalProfit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/AttachMoney"
const AttachMoney_namespaceObject = require("@mui/icons-material/AttachMoney");
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_namespaceObject);
;// CONCATENATED MODULE: ./src/components/dashboard/total-profit.js



const TotalProfit = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                spacing: 3,
                sx: {
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                color: "textSecondary",
                                gutterBottom: true,
                                variant: "overline",
                                children: "SAVINGS POTENTIAL"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                color: "textPrimary",
                                variant: "h4",
                                children: "$23M"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                            sx: {
                                backgroundColor: "success.main",
                                height: 56,
                                width: 56
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((AttachMoney_default()), {})
                        })
                    })
                ]
            })
        })
    });


/***/ }),

/***/ 4821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ TrafficByDevice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__]);
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TrafficByDevice = (props)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const data = {
        datasets: [
            {
                data: [
                    63,
                    15,
                    22
                ],
                backgroundColor: [
                    "#66CDAA",
                    "#DAA520",
                    "#e53935"
                ],
                borderWidth: 8,
                borderColor: "#FFFFFF",
                hoverBorderColor: "#FFFFFF"
            }
        ],
        labels: [
            "Complete",
            "In Progress",
            "Not Started"
        ]
    };
    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: {
            padding: 0
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: "index",
            titleFontColor: theme.palette.text.primary
        }
    };
    const devices = [
        {
            title: "Has Completed",
            value: 63,
            color: "#66CDAA"
        },
        {
            title: "In Progress",
            value: 15,
            color: "#DAA520"
        },
        {
            title: "Not Started",
            value: 23,
            color: "#e53935"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
                title: "Status Chart"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            height: 300,
                            position: "relative"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "./static/images/products/Doughnut.png",
                            style: {
                                height: 300,
                                width: 415
                            },
                            sx: {
                                display: "flex"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            pt: 2
                        },
                        children: devices.map(({ color , icon: Icon , title , value  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    p: 1,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        color: "textPrimary",
                                        variant: "body1",
                                        children: title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        style: {
                                            color
                                        },
                                        variant: "h4",
                                        children: [
                                            value,
                                            "%"
                                        ]
                                    })
                                ]
                            }, title))
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3486:
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
/* harmony import */ var _components_dashboard_budget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2908);
/* harmony import */ var _components_dashboard_latest_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(500);
/* harmony import */ var _components_dashboard_latest_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2753);
/* harmony import */ var _components_dashboard_sales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1929);
/* harmony import */ var _components_dashboard_tasks_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5603);
/* harmony import */ var _components_dashboard_total_customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9758);
/* harmony import */ var _components_dashboard_total_profit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6527);
/* harmony import */ var _components_dashboard_traffic_by_device__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4821);
/* harmony import */ var _components_dashboard_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dashboard_latest_orders__WEBPACK_IMPORTED_MODULE_4__, _components_dashboard_latest_products__WEBPACK_IMPORTED_MODULE_5__, _components_dashboard_traffic_by_device__WEBPACK_IMPORTED_MODULE_10__]);
([_components_dashboard_latest_orders__WEBPACK_IMPORTED_MODULE_4__, _components_dashboard_latest_products__WEBPACK_IMPORTED_MODULE_5__, _components_dashboard_traffic_by_device__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Dashboard = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Dashboard"
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h4",
                            sx: {
                                mb: 5
                            },
                            children: "Hi Jennifer, welcome back!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            container: true,
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    lg: 3,
                                    sm: 6,
                                    xl: 3,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_budget__WEBPACK_IMPORTED_MODULE_3__/* .Budget */ .k, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    xl: 3,
                                    lg: 3,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_total_customers__WEBPACK_IMPORTED_MODULE_8__/* .TotalCustomers */ .D, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    xl: 3,
                                    lg: 3,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_tasks_progress__WEBPACK_IMPORTED_MODULE_7__/* .TasksProgress */ .W, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    xl: 3,
                                    lg: 3,
                                    sm: 6,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_total_profit__WEBPACK_IMPORTED_MODULE_9__/* .TotalProfit */ .J, {
                                        sx: {
                                            height: "100%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    lg: 8,
                                    md: 12,
                                    xl: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_sales__WEBPACK_IMPORTED_MODULE_6__/* .Sales */ .x, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    lg: 4,
                                    md: 6,
                                    xl: 3,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_traffic_by_device__WEBPACK_IMPORTED_MODULE_10__/* .TrafficByDevice */ .i, {
                                        sx: {
                                            height: "100%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    lg: 4,
                                    md: 6,
                                    xl: 3,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_latest_products__WEBPACK_IMPORTED_MODULE_5__/* .LatestProducts */ .x, {
                                        sx: {
                                            height: "100%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    lg: 8,
                                    md: 12,
                                    xl: 9,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_latest_orders__WEBPACK_IMPORTED_MODULE_4__/* .LatestOrders */ .n, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
Dashboard.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_layout__WEBPACK_IMPORTED_MODULE_11__/* .DashboardLayout */ .c, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 2569:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowDownward");

/***/ }),

/***/ 7902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowRight");

/***/ }),

/***/ 3789:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowUpward");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 6952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

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

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ 5162:
/***/ ((module) => {

module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 738:
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,447,208], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();