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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/chatcontainer.module.scss */ \"./styles/chatcontainer.module.scss\");\n/* harmony import */ var _styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/defaultavatar.png */ \"./assets/defaultavatar.png\");\n/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logout */ \"./components/Logout.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInput */ \"./components/ChatInput.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Messages */ \"./components/Messages.js\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-request */ \"./hooks/use-request.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatContainer(param) {\n    var currentChat = param.currentChat, currentUser = param.currentUser;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), msg = ref[0], setMsg = ref[1];\n    var ref1 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        url: \"http://localhost:4000/api/addmessage\",\n        method: \"post\",\n        body: {\n            text: msge,\n            from: currentUser.id,\n            to: currentChat.id\n        },\n        onSuccess: function(data) {\n            console.log(data);\n        }\n    }), doRequest = ref1.doRequest, errors = ref1.errors;\n    var handleSendMessage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(message);\n                        _ctx.next = 3;\n                        return doRequest();\n                    case 3:\n                        if (errors) setErrors(errors);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSendMessage(message) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return currentChat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().userDetails),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().avatar),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: currentChat.profileImage ? \"data:image/svg+xml;base64,\".concat(currentChat.profileImage) : _assets_defaultavatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_chatcontainer_module_scss__WEBPACK_IMPORTED_MODULE_10___default().username),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: currentChat.username\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Messages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSendMessage: handleSendMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatContainer.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatContainer, \"wMpHrgUVtAR5r86sJigFUcs8r7M=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFvQztBQUNxQjtBQUMxQjtBQUN5QjtBQUMxQjtBQUNNO0FBQ0Y7QUFDWTtBQUU5QyxTQUFTUyxhQUFhLENBQUMsS0FBNEIsRUFBRTtRQUE1QkMsV0FBVyxHQUFiLEtBQTRCLENBQTFCQSxXQUFXLEVBQUVDLFdBQVcsR0FBMUIsS0FBNEIsQ0FBYkEsV0FBVzs7SUFDN0MsSUFBc0JWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0JXLEdBQUcsR0FBWVgsR0FBWSxHQUF4QixFQUFFWSxNQUFNLEdBQUlaLEdBQVksR0FBaEI7SUFDbEIsSUFBNEJPLElBVzFCLEdBWDBCQSw4REFBVSxDQUFDO1FBQ25DTSxHQUFHLEVBQUUsc0NBQXNDO1FBQzNDQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxJQUFJLEVBQUU7WUFDRkMsSUFBSSxFQUFFQyxJQUFJO1lBQ1ZDLElBQUksRUFBRVIsV0FBVyxDQUFDUyxFQUFFO1lBQ3BCQyxFQUFFLEVBQUVYLFdBQVcsQ0FBQ1UsRUFBRTtTQUNyQjtRQUNERSxTQUFTLEVBQUUsU0FBQ0MsSUFBSSxFQUFLO1lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7U0FDckI7S0FDSixDQUFDLEVBWEtHLFNBQVMsR0FBWWxCLElBVzFCLENBWEtrQixTQUFTLEVBQUVDLE1BQU0sR0FBSW5CLElBVzFCLENBWGdCbUIsTUFBTTtJQVl4QixJQUFNQyxpQkFBaUI7bUJBQUcsaVBBQU9DLE9BQU8sRUFBRzs7Ozt3QkFDdkNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQzs7K0JBQ2ZILFNBQVMsRUFBRTs7d0JBQ2pCLElBQUdDLE1BQU0sRUFDTEcsU0FBUyxDQUFDSCxNQUFNLENBQUMsQ0FBQzs7Ozs7O1NBQ3pCO3dCQUxLQyxpQkFBaUIsQ0FBVUMsT0FBTzs7O09BS3ZDO0lBQ0QsT0FBT25CLFdBQVcsa0JBQ2QsOERBQUNxQixLQUFHO1FBQUNDLFNBQVMsRUFBRTlCLHlGQUFvQjs7MEJBQ2hDLDhEQUFDNkIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFOUIsc0ZBQWlCOztrQ0FDN0IsOERBQUM2QixLQUFHO3dCQUFDQyxTQUFTLEVBQUU5Qix1RkFBa0I7OzBDQUM5Qiw4REFBQzZCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRTlCLGtGQUFhOzBDQUN6Qiw0RUFBQ0MsbURBQUs7b0NBQUNrQyxHQUFHLEVBQUUzQixXQUFXLENBQUM0QixZQUFZLEdBQUcsNEJBQTJCLENBQTJCLE9BQXpCNUIsV0FBVyxDQUFDNEIsWUFBWSxDQUFFLEdBQzFGbEMsaUVBQWE7b0NBQUVtQyxLQUFLLEVBQUUsRUFBRTtvQ0FBRUMsTUFBTSxFQUFFLEVBQUU7b0NBQUVDLEdBQUcsRUFBQyxRQUFROzs7Ozt3Q0FBRzs7Ozs7b0NBQ3ZEOzBDQUNOLDhEQUFDVixLQUFHO2dDQUFDQyxTQUFTLEVBQUU5QixvRkFBZTswQ0FDM0IsNEVBQUN5QyxJQUFFOzhDQUFFakMsV0FBVyxDQUFDZ0MsUUFBUTs7Ozs7d0NBQU07Ozs7O29DQUM3Qjs7Ozs7OzRCQUNKO2tDQUNOLDhEQUFDckMsK0NBQU07Ozs7NEJBQUc7Ozs7OztvQkFDUjswQkFDTiw4REFBQ0UsaURBQVE7Ozs7b0JBQUU7MEJBQ1gsOERBQUNELGtEQUFTO2dCQUFDc0IsaUJBQWlCLEVBQUVBLGlCQUFpQjs7Ozs7b0JBQUk7Ozs7OztZQUNqRCxDQUNUO0NBQ0o7R0F0Q1FuQixhQUFhOztRQUVVRCwwREFBVTs7O0FBRmpDQyxLQUFBQSxhQUFhO0FBd0N0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qcz82ZjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY2hhdGNvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBEZWZhdWx0QXZhdGFyIGZyb20gXCIuLi9hc3NldHMvZGVmYXVsdGF2YXRhci5wbmdcIjtcclxuaW1wb3J0IExvZ291dCBmcm9tICcuL0xvZ291dCc7XHJcbmltcG9ydCBDaGF0SW5wdXQgZnJvbSAnLi9DaGF0SW5wdXQnO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XHJcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uL2hvb2tzL3VzZS1yZXF1ZXN0JztcclxuXHJcbmZ1bmN0aW9uIENoYXRDb250YWluZXIoeyBjdXJyZW50Q2hhdCwgY3VycmVudFVzZXIgfSkge1xyXG4gICAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qge2RvUmVxdWVzdCwgZXJyb3JzfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2FkZG1lc3NhZ2VcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgdGV4dDogbXNnZSxcclxuICAgICAgICAgICAgZnJvbTogY3VycmVudFVzZXIuaWQsXHJcbiAgICAgICAgICAgIHRvOiBjdXJyZW50Q2hhdC5pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICAgICAgaWYoZXJyb3JzKVxyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3JzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyZW50Q2hhdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y3VycmVudENoYXQucHJvZmlsZUltYWdlID8gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtjdXJyZW50Q2hhdC5wcm9maWxlSW1hZ2V9YCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0QXZhdGFyfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y3VycmVudENoYXQudXNlcm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ291dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lc3NhZ2VzLz5cclxuICAgICAgICAgICAgPENoYXRJbnB1dCBoYW5kbGVTZW5kTWVzc2FnZT17aGFuZGxlU2VuZE1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIkRlZmF1bHRBdmF0YXIiLCJMb2dvdXQiLCJDaGF0SW5wdXQiLCJNZXNzYWdlcyIsInVzZVJlcXVlc3QiLCJDaGF0Q29udGFpbmVyIiwiY3VycmVudENoYXQiLCJjdXJyZW50VXNlciIsIm1zZyIsInNldE1zZyIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJ0ZXh0IiwibXNnZSIsImZyb20iLCJpZCIsInRvIiwib25TdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJoYW5kbGVTZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXRFcnJvcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY2hhdEhlYWRlciIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwic3JjIiwicHJvZmlsZUltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1c2VybmFtZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n"));

/***/ })

});