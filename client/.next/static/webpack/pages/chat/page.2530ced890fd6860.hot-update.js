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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 58,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 57,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 56,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDOEIsUUFBUTs7Ozs7d0NBQU07Ozs7O29DQUM3Qjs7Ozs7OzRCQUNKO2tDQUNOLDhEQUFDbkMsK0NBQU07Ozs7NEJBQUc7Ozs7OztvQkFDUjswQkFDTiw4REFBQ3dCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTVCLHdGQUFtQjswQkFFM0JXLFFBQVEsQ0FBQzhCLEdBQUcsQ0FBQyxTQUFDbEIsT0FBTyxFQUFFbUIsS0FBSyxFQUFHO29CQUMzQixxQkFDSSw4REFBQ2YsS0FBRztrQ0FDQSw0RUFBQ0EsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFLEVBQUMsQ0FBb0JMLE1BQWlELENBQW5FdkIsbUZBQWMsRUFBQyxHQUFDLENBQW9ELFFBQWxEdUIsT0FBTyxDQUFDb0IsUUFBUSxHQUFFM0Msa0ZBQWEsR0FBR0Esb0ZBQWUsQ0FBRTtzQ0FDcEYsNEVBQUM4QyxHQUFDO2dDQUFDbEIsU0FBUyxFQUFFNUIsbUZBQWM7MENBQ3ZCdUIsT0FBTyxDQUFDQSxPQUFPOzs7OztxQ0FDaEI7Ozs7O2lDQUNGO3VCQUxBbUIsS0FBSzs7Ozs2QkFNVCxDQUNUO2lCQUNKLENBQUM7Ozs7O29CQUVKOzBCQUNOLDhEQUFDdEMsa0RBQVM7Z0JBQUNrQixpQkFBaUIsRUFBRUEsaUJBQWlCOzs7OztvQkFBSTs7Ozs7O1lBQ2pELENBQ1Q7Q0FDSjtHQTNEUWYsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBNkR0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qcz82ZjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jaGF0Y29udGFpbmVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IERlZmF1bHRBdmF0YXIgZnJvbSBcIi4uL2Fzc2V0cy9kZWZhdWx0YXZhdGFyLnBuZ1wiO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4vTG9nb3V0JztcclxuaW1wb3J0IENoYXRJbnB1dCBmcm9tICcuL0NoYXRJbnB1dCc7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0Q29udGFpbmVyKHsgY3VycmVudENoYXQsIGN1cnJlbnRVc2VyLCBzb2NrZXQgfSkge1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBmZXRjaE1lc3NhZ2VzID0gYXN5bmMoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW1wicG9zdFwiXShcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvZ2V0bWVzc2FnZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWRcclxuICAgICAgICAgICAgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoTWVzc2FnZXMoKTtcclxuICAgIH0sIFtjdXJyZW50Q2hhdF0pXHJcbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbXCJwb3N0XCJdKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9hZGRtZXNzYWdlXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLCB7XHJcbiAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZCxcclxuICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VycmVudENoYXQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZSA/IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7Y3VycmVudENoYXQucHJvZmlsZUltYWdlfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdEF2YXRhcn0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRDaGF0LnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdE1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVzc2FnZX0gJHttZXNzYWdlLmZyb21TZWxmPyBzdHlsZXMuc2VuZGVkIDogc3R5bGVzLnJlY2lldmVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0SW5wdXQgaGFuZGxlU2VuZE1lc3NhZ2U9e2hhbmRsZVNlbmRNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJEZWZhdWx0QXZhdGFyIiwiTG9nb3V0IiwiQ2hhdElucHV0IiwiTWVzc2FnZXMiLCJheGlvcyIsIkNoYXRDb250YWluZXIiLCJjdXJyZW50Q2hhdCIsImN1cnJlbnRVc2VyIiwic29ja2V0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImZldGNoTWVzc2FnZXMiLCJyZXNwb25zZSIsImZyb20iLCJpZCIsInRvIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJoYW5kbGVTZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0ZXh0IiwiY3VycmVudCIsImVtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwic3JjIiwicHJvZmlsZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1c2VybmFtZSIsImgzIiwiY2hhdE1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJmcm9tU2VsZiIsInNlbmRlZCIsInJlY2lldmVkIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});