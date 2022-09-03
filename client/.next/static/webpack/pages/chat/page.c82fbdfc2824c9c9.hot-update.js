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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), arrivalMessage = ref1[0], setArrivalMessage = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages(msgs);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (socket.current) {\n            socket.current.on(\"recieve-msg\", function(msg) {\n                setArrivalMessage({\n                    fromSelf: false,\n                    message: msg\n                });\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        arrivalMessage && setMessages(function(prev) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(prev).concat([\n                arrivalMessage\n            ]);\n        });\n    }, [\n        arrivalMessage\n    ]);\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 74,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 73,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 72,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"F4a3LP3Gfx051QlgPL1zOUFQTp4=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRztvQkFDM0IscUJBQ0ksOERBQUNmLEtBQUc7a0NBQ0EsNEVBQUNBLEtBQUc7NEJBQUNDLFNBQVMsRUFBRSxFQUFDLENBQW9CWCxNQUFpRCxDQUFuRXpCLG1GQUFjLEVBQUMsR0FBQyxDQUFvRCxRQUFsRHlCLE9BQU8sQ0FBQ00sUUFBUSxHQUFFL0Isa0ZBQWEsR0FBR0Esb0ZBQWUsQ0FBRTtzQ0FDcEYsNEVBQUNxRCxHQUFDO2dDQUFDakIsU0FBUyxFQUFFcEMsbUZBQWM7MENBQ3ZCeUIsT0FBTyxDQUFDQSxPQUFPOzs7OztxQ0FDaEI7Ozs7O2lDQUNGO3VCQUxBeUIsS0FBSzs7Ozs2QkFNVCxDQUNUO2lCQUNKLENBQUM7Ozs7O29CQUVKOzBCQUNOLDhEQUFDOUMsa0RBQVM7Z0JBQUNvQixpQkFBaUIsRUFBRUEsaUJBQWlCOzs7OztvQkFBSTs7Ozs7O1lBQ2pELENBQ1Q7Q0FDSjtHQTNFUWpCLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQTZFdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRDb250YWluZXIuanM/NmYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY2hhdGNvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBEZWZhdWx0QXZhdGFyIGZyb20gXCIuLi9hc3NldHMvZGVmYXVsdGF2YXRhci5wbmdcIjtcclxuaW1wb3J0IExvZ291dCBmcm9tICcuL0xvZ291dCc7XHJcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi9DaGF0SW5wdXQnO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdENvbnRhaW5lcih7IGN1cnJlbnRDaGF0LCBjdXJyZW50VXNlciwgc29ja2V0IH0pIHtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Fycml2YWxNZXNzYWdlLCBzZXRBcnJpdmFsTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYygpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbXCJwb3N0XCJdKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9nZXRtZXNzYWdlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgICAgICB9LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hNZXNzYWdlcygpO1xyXG4gICAgfSwgW2N1cnJlbnRDaGF0XSlcclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1tcInBvc3RcIl0oXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2FkZG1lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkXHJcbiAgICAgICAgfSwge3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc29ja2V0LmN1cnJlbnQuZW1pdChcInNlbmQtbXNnXCIsIHtcclxuICAgICAgICAgICAgdG86IGN1cnJlbnRDaGF0LmlkLFxyXG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1zZ3MgPSBbLi4ubWVzc2FnZXNdO1xyXG4gICAgICAgIG1zZ3MucHVzaCh7ZnJvbVNlbGY6dHJ1ZSwgbWVzc2FnZTogbWVzc2FnZX0pO1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKG1zZ3MpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoc29ja2V0LmN1cnJlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcInJlY2lldmUtbXNnXCIsIChtc2cpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRBcnJpdmFsTWVzc2FnZSh7ZnJvbVNlbGY6IGZhbHNlLCBtZXNzYWdlOiBtc2d9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhcnJpdmFsTWVzc2FnZSAmJiBzZXRNZXNzYWdlcygocHJldik9PlsuLi5wcmV2LCBhcnJpdmFsTWVzc2FnZV0pO1xyXG4gICAgfSwgW2Fycml2YWxNZXNzYWdlXSlcclxuICAgIHJldHVybiBjdXJyZW50Q2hhdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y3VycmVudENoYXQucHJvZmlsZUltYWdlID8gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtjdXJyZW50Q2hhdC5wcm9maWxlSW1hZ2V9YCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0QXZhdGFyfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y3VycmVudENoYXQudXNlcm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ291dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0TWVzc2FnZXN9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZXNzYWdlfSAke21lc3NhZ2UuZnJvbVNlbGY/IHN0eWxlcy5zZW5kZWQgOiBzdHlsZXMucmVjaWV2ZWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENoYXRJbnB1dCBoYW5kbGVTZW5kTWVzc2FnZT17aGFuZGxlU2VuZE1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJJbWFnZSIsIkRlZmF1bHRBdmF0YXIiLCJMb2dvdXQiLCJDaGF0SW5wdXQiLCJNZXNzYWdlcyIsImF4aW9zIiwiQ2hhdENvbnRhaW5lciIsImN1cnJlbnRDaGF0IiwiY3VycmVudFVzZXIiLCJzb2NrZXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYXJyaXZhbE1lc3NhZ2UiLCJzZXRBcnJpdmFsTWVzc2FnZSIsImZldGNoTWVzc2FnZXMiLCJyZXNwb25zZSIsImZyb20iLCJpZCIsInRvIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJoYW5kbGVTZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJtc2dzIiwidGV4dCIsImN1cnJlbnQiLCJlbWl0IiwicHVzaCIsImZyb21TZWxmIiwib24iLCJtc2ciLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsImNoYXRIZWFkZXIiLCJ1c2VyRGV0YWlscyIsImF2YXRhciIsInNyYyIsInByb2ZpbGVJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidXNlcm5hbWUiLCJoMyIsImNoYXRNZXNzYWdlcyIsIm1hcCIsImluZGV4Iiwic2VuZGVkIiwicmVjaWV2ZWQiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});