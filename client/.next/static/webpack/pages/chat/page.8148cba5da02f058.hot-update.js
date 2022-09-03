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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser, socket = param.socket;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messages = ref[0], setMessages = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchMessages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/getmessages\", {\n                                from: currentUser.id,\n                                to: currentChat.id\n                            }, {\n                                withCredentials: true\n                            });\n                        case 2:\n                            response = _ctx.sent;\n                            console.log(response.data);\n                            setMessages(response.data);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchMessages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchMessages();\n    }, [\n        currentChat\n    ]);\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var response, msgs;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_8___default().post(\"http://localhost:4000/api/addmessage\", {\n                            text: message,\n                            from: currentUser.id,\n                            to: currentChat.id\n                        }, {\n                            withCredentials: true\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        socket.current.emit(\"send-msg\", {\n                            to: currentChat.id,\n                            from: currentUser.id,\n                            message: message\n                        });\n                        msgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(messages);\n                        msgs.push({\n                            fromSelf: true,\n                            message: message\n                        });\n                        setMessages(msgs);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (socket.current) {\n            socket.current.on(\"recieve-msg\", function(msg) {});\n        }\n    }, []);\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().chatMessages),\n                children: messages.map(function(message, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().message), \" \").concat(message.fromSelf ? (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sended) : (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().recieved)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),\n                                children: message.message\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 69,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                            lineNumber: 68,\n                            columnNumber: 33\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"7vVO+MPe3Y2IDacHRwt2MQF/mfo=\");\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsaUJBQWlCOzs7OztvQkFBSTs7Ozs7O1lBQ2pELENBQ1Q7Q0FDSjtHQXRFUWYsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBd0V0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qcz82ZjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jaGF0Y29udGFpbmVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IERlZmF1bHRBdmF0YXIgZnJvbSBcIi4uL2Fzc2V0cy9kZWZhdWx0YXZhdGFyLnBuZ1wiO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4vTG9nb3V0JztcclxuaW1wb3J0IENoYXRJbnB1dCBmcm9tICcuL0NoYXRJbnB1dCc7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0Q29udGFpbmVyKHsgY3VycmVudENoYXQsIGN1cnJlbnRVc2VyLCBzb2NrZXQgfSkge1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBmZXRjaE1lc3NhZ2VzID0gYXN5bmMoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW1wicG9zdFwiXShcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvZ2V0bWVzc2FnZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICB0bzogY3VycmVudENoYXQuaWRcclxuICAgICAgICAgICAgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoTWVzc2FnZXMoKTtcclxuICAgIH0sIFtjdXJyZW50Q2hhdF0pXHJcbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbXCJwb3N0XCJdKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9hZGRtZXNzYWdlXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgIH0sIHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLCB7XHJcbiAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZCxcclxuICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtc2dzID0gWy4uLm1lc3NhZ2VzXTtcclxuICAgICAgICBtc2dzLnB1c2goe2Zyb21TZWxmOnRydWUsIG1lc3NhZ2U6IG1lc3NhZ2V9KTtcclxuICAgICAgICBzZXRNZXNzYWdlcyhtc2dzKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHNvY2tldC5jdXJyZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJyZWNpZXZlLW1zZ1wiLCAobXNnKT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gY3VycmVudENoYXQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2N1cnJlbnRDaGF0LnByb2ZpbGVJbWFnZSA/IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7Y3VycmVudENoYXQucHJvZmlsZUltYWdlfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdEF2YXRhcn0gd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRDaGF0LnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdE1lc3NhZ2VzfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVzc2FnZX0gJHttZXNzYWdlLmZyb21TZWxmPyBzdHlsZXMuc2VuZGVkIDogc3R5bGVzLnJlY2lldmVkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0SW5wdXQgaGFuZGxlU2VuZE1lc3NhZ2U9e2hhbmRsZVNlbmRNZXNzYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJEZWZhdWx0QXZhdGFyIiwiTG9nb3V0IiwiQ2hhdElucHV0IiwiTWVzc2FnZXMiLCJheGlvcyIsIkNoYXRDb250YWluZXIiLCJjdXJyZW50Q2hhdCIsImN1cnJlbnRVc2VyIiwic29ja2V0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImZldGNoTWVzc2FnZXMiLCJyZXNwb25zZSIsImZyb20iLCJpZCIsInRvIiwid2l0aENyZWRlbnRpYWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJoYW5kbGVTZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJtc2dzIiwidGV4dCIsImN1cnJlbnQiLCJlbWl0IiwicHVzaCIsImZyb21TZWxmIiwib24iLCJtc2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwic3JjIiwicHJvZmlsZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1c2VybmFtZSIsImgzIiwiY2hhdE1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJzZW5kZWQiLCJyZWNpZXZlZCIsInAiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});