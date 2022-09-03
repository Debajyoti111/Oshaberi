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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 61,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 60,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM2QixZQUFZLENBQUUsR0FDMUZuQyxpRUFBYTtvQ0FBRW9DLEtBQUssRUFBRSxFQUFFO29DQUFFQyxNQUFNLEVBQUUsRUFBRTtvQ0FBRUMsR0FBRyxFQUFDLFFBQVE7Ozs7O3dDQUFHOzs7OztvQ0FDdkQ7MENBQ04sOERBQUNWLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRS9CLG9GQUFlOzBDQUMzQiw0RUFBQzBDLElBQUU7OENBQUVsQyxXQUFXLENBQUNpQyxRQUFROzs7Ozt3Q0FBTTs7Ozs7b0NBQzdCOzs7Ozs7NEJBQ0o7a0NBQ04sOERBQUN0QywrQ0FBTTs7Ozs0QkFBRzs7Ozs7O29CQUNSOzBCQUNOLDhEQUFDMkIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFL0Isd0ZBQW1COzBCQUUzQlcsUUFBUSxDQUFDaUMsR0FBRyxDQUFDLFNBQUNyQixPQUFPLEVBQUVzQixLQUFLLEVBQUc7b0JBQzNCLHFCQUNJLDhEQUFDZixLQUFHO2tDQUNBLDRFQUFDQSxLQUFHOzRCQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFvQlIsTUFBaUQsQ0FBbkV2QixtRkFBYyxFQUFDLEdBQUMsQ0FBb0QsUUFBbER1QixPQUFPLENBQUNNLFFBQVEsR0FBRTdCLGtGQUFhLEdBQUdBLG9GQUFlLENBQUU7c0NBQ3BGLDRFQUFDZ0QsR0FBQztnQ0FBQ2pCLFNBQVMsRUFBRS9CLG1GQUFjOzBDQUN2QnVCLE9BQU8sQ0FBQ0EsT0FBTzs7Ozs7cUNBQ2hCOzs7OztpQ0FDRjt1QkFMQXNCLEtBQUs7Ozs7NkJBTVQsQ0FDVDtpQkFDSixDQUFDOzs7OztvQkFFSjswQkFDTiw4REFBQ3pDLGtEQUFTO2dCQUFDa0IsaUJBQWlCLEVBQUVBLGlCQUFpQjs7Ozs7b0JBQUk7Ozs7OztZQUNqRCxDQUNUO0NBQ0o7R0E5RFFmLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQWdFdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRDb250YWluZXIuanM/NmYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY2hhdGNvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBEZWZhdWx0QXZhdGFyIGZyb20gXCIuLi9hc3NldHMvZGVmYXVsdGF2YXRhci5wbmdcIjtcclxuaW1wb3J0IExvZ291dCBmcm9tICcuL0xvZ291dCc7XHJcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi9DaGF0SW5wdXQnO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdENvbnRhaW5lcih7IGN1cnJlbnRDaGF0LCBjdXJyZW50VXNlciwgc29ja2V0IH0pIHtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jKCk9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2dldG1lc3NhZ2VzXCIsIHtcclxuICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaE1lc3NhZ2VzKCk7XHJcbiAgICB9LCBbY3VycmVudENoYXRdKVxyXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW1wicG9zdFwiXShcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvYWRkbWVzc2FnZVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWRcclxuICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZC1tc2dcIiwge1xyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWQsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IFsuLi5tZXNzYWdlc107XHJcbiAgICAgICAgbXNncy5wdXNoKHtmcm9tU2VsZjp0cnVlLCBtZXNzYWdlOiBtZXNzYWdlfSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGF0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjdXJyZW50Q2hhdC5wcm9maWxlSW1hZ2UgPyBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZX1gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRBdmF0YXJ9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjdXJyZW50Q2hhdC51c2VybmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb3V0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRNZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lc3NhZ2V9ICR7bWVzc2FnZS5mcm9tU2VsZj8gc3R5bGVzLnNlbmRlZCA6IHN0eWxlcy5yZWNpZXZlZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q2hhdElucHV0IGhhbmRsZVNlbmRNZXNzYWdlPXtoYW5kbGVTZW5kTWVzc2FnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkltYWdlIiwiRGVmYXVsdEF2YXRhciIsIkxvZ291dCIsIkNoYXRJbnB1dCIsIk1lc3NhZ2VzIiwiYXhpb3MiLCJDaGF0Q29udGFpbmVyIiwiY3VycmVudENoYXQiLCJjdXJyZW50VXNlciIsInNvY2tldCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJmZXRjaE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmcm9tIiwiaWQiLCJ0byIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwibXNncyIsInRleHQiLCJjdXJyZW50IiwiZW1pdCIsInB1c2giLCJmcm9tU2VsZiIsImRpdiIsImNsYXNzTmFtZSIsImNoYXRDb250YWluZXIiLCJjaGF0SGVhZGVyIiwidXNlckRldGFpbHMiLCJhdmF0YXIiLCJzcmMiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVzZXJuYW1lIiwiaDMiLCJjaGF0TWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsInNlbmRlZCIsInJlY2lldmVkIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});