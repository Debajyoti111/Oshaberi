"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/page",{

/***/ "./components/ChatContainer.js":
/*!*************************************!*\
  !*** ./components/ChatContainer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), arrivalMessage = ref1[0], setArrivalMessage = ref1[1];\n    var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages(msgs);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (socket.current) {\n            socket.current.on(\"recieve-msg\", function(msg) {\n                setArrivalMessage({\n                    fromSelf: false,\n                    message: msg\n                });\n            });\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        arrivalMessage && setMessages(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(prev).concat([\n                arrivalMessage\n            ]);\n        });\n        console.log(messages);\n    }, [\n        arrivalMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        (ref = scrollRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        messages\n    ]);\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 79,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 78,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 77,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"BYFBCnM3HJOxCnC7JjXhqE7ein4=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDVixLQUFHO2dDQUFDQyxTQUFTLEVBQUV2QyxvRkFBZTswQ0FDM0IsNEVBQUNrRCxJQUFFOzhDQUFFMUMsV0FBVyxDQUFDeUMsUUFBUTs7Ozs7d0NBQU07Ozs7O29DQUM3Qjs7Ozs7OzRCQUNKO2tDQUNOLDhEQUFDOUMsK0NBQU07Ozs7NEJBQUc7Ozs7OztvQkFDUjswQkFDTiw4REFBQ21DLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXZDLHdGQUFtQjswQkFFM0JXLFFBQVEsQ0FBQ3lDLEdBQUcsQ0FBQyxTQUFDMUIsT0FBTyxFQUFFMkIsS0FBSyxFQUFHO29CQUMzQixxQkFDSSw4REFBQ2YsS0FBRztrQ0FDQSw0RUFBQ0EsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBb0JiLE1BQWlELENBQW5FMUIsbUZBQWMsRUFBQyxHQUFDLENBQW9ELFFBQWxEMEIsT0FBTyxDQUFDTSxRQUFRLEdBQUVoQyxrRkFBYSxHQUFHQSxvRkFBZSxDQUFFO3NDQUNwRiw0RUFBQ3dELEdBQUM7Z0NBQUNqQixTQUFTLEVBQUV2QyxtRkFBYzswQ0FDdkIwQixPQUFPLENBQUNBLE9BQU87Ozs7O3FDQUNoQjs7Ozs7aUNBQ0Y7dUJBTEEyQixLQUFLOzs7OzZCQU1ULENBQ1Q7aUJBQ0osQ0FBQzs7Ozs7b0JBRUo7MEJBQ04sOERBQUNqRCxrREFBUztnQkFBQ3FCLGlCQUFpQixFQUFFQSxpQkFBaUI7Ozs7O29CQUFJOzs7Ozs7WUFDakQsQ0FDVDtDQUNKO0dBaEZRbEIsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBa0Z0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qcz82ZjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NoYXRjb250YWluZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgRGVmYXVsdEF2YXRhciBmcm9tIFwiLi4vYXNzZXRzL2RlZmF1bHRhdmF0YXIucG5nXCI7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4vQ2hhdElucHV0JztcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRDb250YWluZXIoeyBjdXJyZW50Q2hhdCwgY3VycmVudFVzZXIsIHNvY2tldCB9KSB7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthcnJpdmFsTWVzc2FnZSwgc2V0QXJyaXZhbE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYoKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYygpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbXCJwb3N0XCJdKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9nZXRtZXNzYWdlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hNZXNzYWdlcygpO1xyXG4gICAgfSwgW2N1cnJlbnRDaGF0XSlcclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2FkZG1lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgfSwge3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IFsuLi5tZXNzYWdlc107XHJcbiAgICAgICAgbXNncy5wdXNoKHtmcm9tU2VsZjp0cnVlLCBtZXNzYWdlOiBtZXNzYWdlfSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMobXNncyk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihzb2NrZXQuY3VycmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwicmVjaWV2ZS1tc2dcIiwgKG1zZyk9PntcclxuICAgICAgICAgICAgICAgIHNldEFycml2YWxNZXNzYWdlKHtmcm9tU2VsZjogZmFsc2UsIG1lc3NhZ2U6IG1zZ30pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXJyaXZhbE1lc3NhZ2UgJiYgc2V0TWVzc2FnZXMoKHByZXYpPT5bLi4ucHJldiwgYXJyaXZhbE1lc3NhZ2VdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XHJcbiAgICB9LCBbYXJyaXZhbE1lc3NhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgIH0sIFttZXNzYWdlc10pXHJcbiAgICByZXR1cm4gY3VycmVudENoYXQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZSA/IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7Y3VycmVudENoYXQucHJvZmlsZUltYWdlfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdEF2YXRhcn0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRDaGF0LnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdE1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVzc2FnZX0gJHttZXNzYWdlLmZyb21TZWxmPyBzdHlsZXMuc2VuZGVkIDogc3R5bGVzLnJlY2lldmVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0SW5wdXQgaGFuZGxlU2VuZE1lc3NhZ2U9e2hhbmRsZVNlbmRNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiSW1hZ2UiLCJEZWZhdWx0QXZhdGFyIiwiTG9nb3V0IiwiQ2hhdElucHV0IiwiTWVzc2FnZXMiLCJheGlvcyIsIkNoYXRDb250YWluZXIiLCJjdXJyZW50Q2hhdCIsImN1cnJlbnRVc2VyIiwic29ja2V0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImFycml2YWxNZXNzYWdlIiwic2V0QXJyaXZhbE1lc3NhZ2UiLCJzY3JvbGxSZWYiLCJmZXRjaE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmcm9tIiwiaWQiLCJ0byIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwibXNncyIsInRleHQiLCJjdXJyZW50IiwiZW1pdCIsInB1c2giLCJmcm9tU2VsZiIsIm9uIiwibXNnIiwicHJldiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwic3JjIiwicHJvZmlsZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1c2VybmFtZSIsImgzIiwiY2hhdE1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJzZW5kZWQiLCJyZWNpZXZlZCIsInAiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});