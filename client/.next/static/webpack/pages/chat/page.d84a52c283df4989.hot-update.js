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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), arrivalMessage = ref1[0], setArrivalMessage = ref1[1];\n    var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages(msgs);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (socket.current) {\n            socket.current.on(\"recieve-msg\", function(msg) {\n                setArrivalMessage({\n                    fromSelf: false,\n                    message: msg\n                });\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        arrivalMessage && setMessages(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(prev).concat([\n                arrivalMessage\n            ]);\n        });\n    }, [\n        arrivalMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref;\n        (ref = scrollRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    }, [\n        messages\n    ]);\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 79,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 78,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 77,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"HsJSSFSFru4FocSsQX33XlWKGPU=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsU0FBUyxFQUFFdkMsb0ZBQWU7MENBQzNCLDRFQUFDa0QsSUFBRTs4Q0FBRTFDLFdBQVcsQ0FBQ3lDLFFBQVE7Ozs7O3dDQUFNOzs7OztvQ0FDN0I7Ozs7Ozs0QkFDSjtrQ0FDTiw4REFBQzlDLCtDQUFNOzs7OzRCQUFHOzs7Ozs7b0JBQ1I7MEJBQ04sOERBQUNtQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUV2Qyx3RkFBbUI7MEJBRTNCVyxRQUFRLENBQUN5QyxHQUFHLENBQUMsU0FBQzFCLE9BQU8sRUFBRTJCLEtBQUssRUFBRztvQkFDM0IscUJBQ0ksOERBQUNmLEtBQUc7a0NBQ0EsNEVBQUNBLEtBQUc7NEJBQUNDLFNBQVMsRUFBRSxFQUFDLENBQW9CYixNQUFpRCxDQUFuRTFCLG1GQUFjLEVBQUMsR0FBQyxDQUFvRCxRQUFsRDBCLE9BQU8sQ0FBQ00sUUFBUSxHQUFFaEMsa0ZBQWEsR0FBR0Esb0ZBQWUsQ0FBRTtzQ0FDcEYsNEVBQUN3RCxHQUFDO2dDQUFDakIsU0FBUyxFQUFFdkMsbUZBQWM7MENBQ3ZCMEIsT0FBTyxDQUFDQSxPQUFPOzs7OztxQ0FDaEI7Ozs7O2lDQUNGO3VCQUxBMkIsS0FBSzs7Ozs2QkFNVCxDQUNUO2lCQUNKLENBQUM7Ozs7O29CQUVKOzBCQUNOLDhEQUFDakQsa0RBQVM7Z0JBQUNxQixpQkFBaUIsRUFBRUEsaUJBQWlCOzs7OztvQkFBSTs7Ozs7O1lBQ2pELENBQ1Q7Q0FDSjtHQWhGUWxCLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQWtGdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRDb250YWluZXIuanM/NmYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY2hhdGNvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBEZWZhdWx0QXZhdGFyIGZyb20gXCIuLi9hc3NldHMvZGVmYXVsdGF2YXRhci5wbmdcIjtcclxuaW1wb3J0IExvZ291dCBmcm9tICcuL0xvZ291dCc7XHJcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi9DaGF0SW5wdXQnO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdENvbnRhaW5lcih7IGN1cnJlbnRDaGF0LCBjdXJyZW50VXNlciwgc29ja2V0IH0pIHtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Fycml2YWxNZXNzYWdlLCBzZXRBcnJpdmFsTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHNjcm9sbFJlZiA9IFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jKCk9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2dldG1lc3NhZ2VzXCIsIHtcclxuICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaE1lc3NhZ2VzKCk7XHJcbiAgICB9LCBbY3VycmVudENoYXRdKVxyXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW1wicG9zdFwiXShcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvYWRkbWVzc2FnZVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWRcclxuICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZC1tc2dcIiwge1xyXG4gICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWQsXHJcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IFsuLi5tZXNzYWdlc107XHJcbiAgICAgICAgbXNncy5wdXNoKHtmcm9tU2VsZjp0cnVlLCBtZXNzYWdlOiBtZXNzYWdlfSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMobXNncyk7XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihzb2NrZXQuY3VycmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwicmVjaWV2ZS1tc2dcIiwgKG1zZyk9PntcclxuICAgICAgICAgICAgICAgIHNldEFycml2YWxNZXNzYWdlKHtmcm9tU2VsZjogZmFsc2UsIG1lc3NhZ2U6IG1zZ30pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFycml2YWxNZXNzYWdlICYmIHNldE1lc3NhZ2VzKChwcmV2KT0+Wy4uLnByZXYsIGFycml2YWxNZXNzYWdlXSk7XHJcbiAgICB9LCBbYXJyaXZhbE1lc3NhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcclxuICAgIH0sIFttZXNzYWdlc10pXHJcbiAgICByZXR1cm4gY3VycmVudENoYXQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZSA/IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7Y3VycmVudENoYXQucHJvZmlsZUltYWdlfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdEF2YXRhcn0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRDaGF0LnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdE1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVzc2FnZX0gJHttZXNzYWdlLmZyb21TZWxmPyBzdHlsZXMuc2VuZGVkIDogc3R5bGVzLnJlY2lldmVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0SW5wdXQgaGFuZGxlU2VuZE1lc3NhZ2U9e2hhbmRsZVNlbmRNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJEZWZhdWx0QXZhdGFyIiwiTG9nb3V0IiwiQ2hhdElucHV0IiwiTWVzc2FnZXMiLCJheGlvcyIsIkNoYXRDb250YWluZXIiLCJjdXJyZW50Q2hhdCIsImN1cnJlbnRVc2VyIiwic29ja2V0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImFycml2YWxNZXNzYWdlIiwic2V0QXJyaXZhbE1lc3NhZ2UiLCJzY3JvbGxSZWYiLCJmZXRjaE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmcm9tIiwiaWQiLCJ0byIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwibXNncyIsInRleHQiLCJjdXJyZW50IiwiZW1pdCIsInB1c2giLCJmcm9tU2VsZiIsIm9uIiwibXNnIiwicHJldiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwic3JjIiwicHJvZmlsZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1c2VybmFtZSIsImgzIiwiY2hhdE1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJzZW5kZWQiLCJyZWNpZXZlZCIsInAiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});