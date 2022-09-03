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

/***/ "./pages/chat/page.js":
/*!****************************!*\
  !*** ./pages/chat/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/chatpage.module.scss */ \"./styles/chatpage.module.scss\");\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Contacts */ \"./components/Contacts.js\");\n/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Welcome */ \"./components/Welcome.js\");\n/* harmony import */ var _components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ChatContainer */ \"./components/ChatContainer.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Page(param) {\n    var currentUser = param.currentUser;\n    var _this = this;\n    _s();\n    var socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref[0], setContacts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), currentChat = ref1[0], setCurrentChat = ref1[1];\n    var ref2 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        url: \"http://localhost:4000/api/getallusers\",\n        method: \"get\",\n        onSuccess: function(data) {\n            console.log(data);\n            setContacts(data);\n        }\n    }), doRequest = ref2.doRequest, errors = ref2.errors;\n    var NotAuthError = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Kindly Sign Up to continue.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                    href: \"chat/login\",\n                    children: \"Login Page\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {});\n    var fetchContacts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!currentUser.isProfileImageSet) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return doRequest();\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/chat/profile\", null, {\n                                shallow: true\n                            });\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchContacts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchContacts();\n    }, []);\n    var handleChatChange = function(chat) {\n        setCurrentChat(chat);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Contacts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        contacts: contacts,\n                        currentUser: currentUser,\n                        changeChat: handleChatChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    currentChat === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Welcome__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 44\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        currentChat: currentChat,\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 83\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            errors\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"3AvoYqFoxDNvejPqic0Ry/4AB4c=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFJbUJOLDBEQUFVOzs7QUFKakNNLEtBQUFBLElBQUk7QUFxRGIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC9wYWdlLmpzPzZhM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cGFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29udGFjdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0cyc7XHJcbmltcG9ydCBXZWxjb21lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2VsY29tZSc7XHJcbmltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lcic7XHJcbmltcG9ydCB7aW99IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcclxuZnVuY3Rpb24gUGFnZSh7Y3VycmVudFVzZXJ9KSB7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtjb250YWN0cywgc2V0Q29udGFjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRDaGF0LCBzZXRDdXJyZW50Q2hhdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3Qge2RvUmVxdWVzdCwgZXJyb3JzfSA9IHVzZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2dldGFsbHVzZXJzXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldENvbnRhY3RzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgTm90QXV0aEVycm9yPSAoKT0+e1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMT5LaW5kbHkgU2lnbiBVcCB0byBjb250aW51ZS48L2gxPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImNoYXQvbG9naW5cIj5Mb2dpbiBQYWdlPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBmZXRjaENvbnRhY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyLmlzUHJvZmlsZUltYWdlU2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9jaGF0L3Byb2ZpbGVcIiwgbnVsbCwge3NoYWxsb3c6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udGFjdHMoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhdENoYW5nZSA9IChjaGF0KT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRDaGF0KGNoYXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxDb250YWN0cyBjb250YWN0cz17Y29udGFjdHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gY2hhbmdlQ2hhdCA9IHtoYW5kbGVDaGF0Q2hhbmdlfS8+XHJcbiAgICAgICAgICAgIHtjdXJyZW50Q2hhdCA9PT0gdW5kZWZpbmVkPyAgICA8V2VsY29tZSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9Lz4gOiA8Q2hhdENvbnRhaW5lciBjdXJyZW50Q2hhdD17Y3VycmVudENoYXR9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0vPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsInVzZVJlcXVlc3QiLCJSb3V0ZXIiLCJDb250YWN0cyIsIldlbGNvbWUiLCJDaGF0Q29udGFpbmVyIiwiaW8iLCJQYWdlIiwiY3VycmVudFVzZXIiLCJzb2NrZXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwidW5kZWZpbmVkIiwiY3VycmVudENoYXQiLCJzZXRDdXJyZW50Q2hhdCIsInVybCIsIm1ldGhvZCIsIm9uU3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwiTm90QXV0aEVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsImgxIiwiTGluayIsImhyZWYiLCJmZXRjaENvbnRhY3RzIiwicmVzcG9uc2UiLCJpc1Byb2ZpbGVJbWFnZVNldCIsInB1c2giLCJzaGFsbG93IiwiaGFuZGxlQ2hhdENoYW5nZSIsImNoYXQiLCJjb250YWluZXIiLCJjaGFuZ2VDaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat/page.js\n"));

/***/ })

});