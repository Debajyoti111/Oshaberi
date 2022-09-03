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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), arrivalMessage = ref1[0], setArrivalMessage = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages(msgs);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (socket.current) {\n            socket.current.on(\"recieve-msg\", function(msg) {});\n        }\n    }, []);\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 70,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 69,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 68,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"wWWgVWPF/D7gn9i8dQ6jW71Ehf8=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs7Ozs7cUNBQ2hCOzs7OztpQ0FDRjt1QkFMQXdCLEtBQUs7Ozs7NkJBTVQsQ0FDVDtpQkFDSixDQUFDOzs7OztvQkFFSjswQkFDTiw4REFBQzdDLGtEQUFTO2dCQUFDb0IsaUJBQWlCLEVBQUVBLGlCQUFpQjs7Ozs7b0JBQUk7Ozs7OztZQUNqRCxDQUNUO0NBQ0o7R0F2RVFqQixhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUF5RXRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Q29udGFpbmVyLmpzPzZmM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NoYXRjb250YWluZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgRGVmYXVsdEF2YXRhciBmcm9tIFwiLi4vYXNzZXRzL2RlZmF1bHRhdmF0YXIucG5nXCI7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2hhdElucHV0IGZyb20gJy4vQ2hhdElucHV0JztcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRDb250YWluZXIoeyBjdXJyZW50Q2hhdCwgY3VycmVudFVzZXIsIHNvY2tldCB9KSB7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthcnJpdmFsTWVzc2FnZSwgc2V0QXJyaXZhbE1lc3NhZ2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jKCk9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2dldG1lc3NhZ2VzXCIsIHtcclxuICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaE1lc3NhZ2VzKCk7XHJcbiAgICB9LCBbY3VycmVudENoYXRdKVxyXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW1wicG9zdFwiXShcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvYWRkbWVzc2FnZVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWRcclxuICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZC1tc2dcIiwge1xyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWQsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IFsuLi5tZXNzYWdlc107XHJcbiAgICAgICAgbXNncy5wdXNoKHtmcm9tU2VsZjp0cnVlLCBtZXNzYWdlOiBtZXNzYWdlfSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMobXNncyk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihzb2NrZXQuY3VycmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwicmVjaWV2ZS1tc2dcIiwgKG1zZyk9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGF0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjdXJyZW50Q2hhdC5wcm9maWxlSW1hZ2UgPyBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZX1gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRBdmF0YXJ9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjdXJyZW50Q2hhdC51c2VybmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb3V0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRNZXNzYWdlc30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lc3NhZ2V9ICR7bWVzc2FnZS5mcm9tU2VsZj8gc3R5bGVzLnNlbmRlZCA6IHN0eWxlcy5yZWNpZXZlZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q2hhdElucHV0IGhhbmRsZVNlbmRNZXNzYWdlPXtoYW5kbGVTZW5kTWVzc2FnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkltYWdlIiwiRGVmYXVsdEF2YXRhciIsIkxvZ291dCIsIkNoYXRJbnB1dCIsIk1lc3NhZ2VzIiwiYXhpb3MiLCJDaGF0Q29udGFpbmVyIiwiY3VycmVudENoYXQiLCJjdXJyZW50VXNlciIsInNvY2tldCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJhcnJpdmFsTWVzc2FnZSIsInNldEFycml2YWxNZXNzYWdlIiwiZmV0Y2hNZXNzYWdlcyIsInJlc3BvbnNlIiwiZnJvbSIsImlkIiwidG8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZVNlbmRNZXNzYWdlIiwibWVzc2FnZSIsIm1zZ3MiLCJ0ZXh0IiwiY3VycmVudCIsImVtaXQiLCJwdXNoIiwiZnJvbVNlbGYiLCJvbiIsIm1zZyIsImRpdiIsImNsYXNzTmFtZSIsImNoYXRDb250YWluZXIiLCJjaGF0SGVhZGVyIiwidXNlckRldGFpbHMiLCJhdmF0YXIiLCJzcmMiLCJwcm9maWxlSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVzZXJuYW1lIiwiaDMiLCJjaGF0TWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsInNlbmRlZCIsInJlY2lldmVkIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});