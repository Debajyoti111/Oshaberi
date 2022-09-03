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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        message.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 60,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 59,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 58,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFGbkMsaUVBQWE7b0NBQUVvQyxLQUFLLEVBQUUsRUFBRTtvQ0FBRUMsTUFBTSxFQUFFLEVBQUU7b0NBQUVDLEdBQUcsRUFBQyxRQUFROzs7Ozt3Q0FBRzs7Ozs7b0NBQ3ZEOzBDQUNOLDhEQUFDVixLQUFHO2dDQUFDQyxTQUFTLEVBQUUvQixvRkFBZTswQ0FDM0IsNEVBQUMwQyxJQUFFOzhDQUFFbEMsV0FBVyxDQUFDaUMsUUFBUTs7Ozs7d0NBQU07Ozs7O29DQUM3Qjs7Ozs7OzRCQUNKO2tDQUNOLDhEQUFDdEMsK0NBQU07Ozs7NEJBQUc7Ozs7OztvQkFDUjswQkFDTiw4REFBQzJCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRS9CLHdGQUFtQjswQkFFM0JXLFFBQVEsQ0FBQ2lDLEdBQUcsQ0FBQyxTQUFDckIsT0FBTyxFQUFFc0IsS0FBSyxFQUFHO29CQUMzQixxQkFDSSw4REFBQ2YsS0FBRztrQ0FDQSw0RUFBQ0EsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBb0JSLE1BQWlELENBQW5FdkIsbUZBQWMsRUFBQyxHQUFDLENBQW9ELFFBQWxEdUIsT0FBTyxDQUFDTSxRQUFRLEdBQUU3QixrRkFBYSxHQUFHQSxvRkFBZSxDQUFFO3NDQUNwRiw0RUFBQ2dELEdBQUM7Z0NBQUNqQixTQUFTLEVBQUUvQixtRkFBYzswQ0FDdkJ1QixPQUFPLENBQUNBLE9BQU87Ozs7O3FDQUNoQjs7Ozs7aUNBQ0Y7dUJBTEFzQixLQUFLOzs7OzZCQU1ULENBQ1Q7aUJBQ0osQ0FBQzs7Ozs7b0JBRUo7MEJBQ04sOERBQUN6QyxrREFBUztnQkFBQ2tCLGlCQUFpQixFQUFFQSxpQkFBaUI7Ozs7O29CQUFJOzs7Ozs7WUFDakQsQ0FDVDtDQUNKO0dBN0RRZixhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUErRHRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29udGFpbmVyLmpzPzZmM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NoYXRjb250YWluZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgRGVmYXVsdEF2YXRhciBmcm9tIFwiLi4vYXNzZXRzL2RlZmF1bHRhdmF0YXIucG5nXCI7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4vQ2hhdElucHV0JztcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRDb250YWluZXIoeyBjdXJyZW50Q2hhdCwgY3VycmVudFVzZXIsIHNvY2tldCB9KSB7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYygpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbXCJwb3N0XCJdKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9nZXRtZXNzYWdlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hNZXNzYWdlcygpO1xyXG4gICAgfSwgW2N1cnJlbnRDaGF0XSlcclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2FkZG1lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgfSwge3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkLFxyXG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1zZ3MgPSBbLi4ubWVzc2FnZXNdO1xyXG4gICAgICAgIG1lc3NhZ2UucHVzaCh7ZnJvbVNlbGY6dHJ1ZSwgbWVzc2FnZTogbWVzc2FnZX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGF0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjdXJyZW50Q2hhdC5wcm9maWxlSW1hZ2UgPyBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZX1gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRBdmF0YXJ9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjdXJyZW50Q2hhdC51c2VybmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb3V0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRNZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lc3NhZ2V9ICR7bWVzc2FnZS5mcm9tU2VsZj8gc3R5bGVzLnNlbmRlZCA6IHN0eWxlcy5yZWNpZXZlZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q2hhdElucHV0IGhhbmRsZVNlbmRNZXNzYWdlPXtoYW5kbGVTZW5kTWVzc2FnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkltYWdlIiwiRGVmYXVsdEF2YXRhciIsIkxvZ291dCIsIkNoYXRJbnB1dCIsIk1lc3NhZ2VzIiwiYXhpb3MiLCJDaGF0Q29udGFpbmVyIiwiY3VycmVudENoYXQiLCJjdXJyZW50VXNlciIsInNvY2tldCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJmZXRjaE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmcm9tIiwiaWQiLCJ0byIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwibXNncyIsInRleHQiLCJjdXJyZW50IiwiZW1pdCIsInB1c2giLCJmcm9tU2VsZiIsImRpdiIsImNsYXNzTmFtZSIsImNoYXRDb250YWluZXIiLCJjaGF0SGVhZGVyIiwidXNlckRldGFpbHMiLCJhdmF0YXIiLCJzcmMiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVzZXJuYW1lIiwiaDMiLCJjaGF0TWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsInNlbmRlZCIsInJlY2lldmVkIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});