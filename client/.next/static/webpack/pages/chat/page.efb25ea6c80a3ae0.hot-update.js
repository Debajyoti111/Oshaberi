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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/chatpage.module.scss */ \"./styles/chatpage.module.scss\");\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Contacts */ \"./components/Contacts.js\");\n/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Welcome */ \"./components/Welcome.js\");\n/* harmony import */ var _components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ChatContainer */ \"./components/ChatContainer.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Page(param) {\n    var currentUser = param.currentUser;\n    var _this = this;\n    _s();\n    var socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref[0], setContacts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), currentChat = ref1[0], setCurrentChat = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5), redirectionTime = ref2[0], setRedirectionTime = ref2[1];\n    var ref3 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        url: \"http://localhost:4000/api/getallusers\",\n        method: \"get\",\n        onSuccess: function(data) {\n            console.log(data);\n            setContacts(data);\n        }\n    }), doRequest = ref3.doRequest, errors = ref3.errors;\n    var NotAuthError = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Kindly Sign Up to continue. You are being redirected to Sign Up page in \",\n                    redirectionTime\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {});\n    var fetchContacts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!currentUser.isProfileImageSet) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return doRequest();\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/chat/profile\", null, {\n                                shallow: true\n                            });\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchContacts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchContacts();\n    }, []);\n    var handleChatChange = function(chat) {\n        setCurrentChat(chat);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Contacts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        contacts: contacts,\n                        currentUser: currentUser,\n                        changeChat: handleChatChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    currentChat === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Welcome__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 44\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        currentChat: currentChat,\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 83\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            errors\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"uQSUed7SsIVWJ1wpGG0AU71boxo=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Ozs7OztvQkFDcEk7WUFDTGdCLE1BQU07Ozs7OztZQUNMLENBQ1Q7Q0FDSjtHQW5EUWpCLElBQUk7O1FBS21CTiwwREFBVTs7O0FBTGpDTSxLQUFBQSxJQUFJO0FBcURiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQvcGFnZS5qcz82YTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhdHBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdHMnO1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dlbGNvbWUnO1xyXG5pbXBvcnQgQ2hhdENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRDb250YWluZXInO1xyXG5pbXBvcnQge2lvfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcbmZ1bmN0aW9uIFBhZ2Uoe2N1cnJlbnRVc2VyfSkge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdCwgc2V0Q3VycmVudENoYXRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtyZWRpcmVjdGlvblRpbWUsIHNldFJlZGlyZWN0aW9uVGltZV0gPSB1c2VTdGF0ZSg1KTtcclxuICAgIGNvbnN0IHtkb1JlcXVlc3QsIGVycm9yc30gPSB1c2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9nZXRhbGx1c2Vyc1wiLFxyXG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRDb250YWN0cyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IE5vdEF1dGhFcnJvcj0gKCk9PntcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+S2luZGx5IFNpZ24gVXAgdG8gY29udGludWUuIFlvdSBhcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBTaWduIFVwIHBhZ2UgaW4ge3JlZGlyZWN0aW9uVGltZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBmZXRjaENvbnRhY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VyLmlzUHJvZmlsZUltYWdlU2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZG9SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9jaGF0L3Byb2ZpbGVcIiwgbnVsbCwge3NoYWxsb3c6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udGFjdHMoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhdENoYW5nZSA9IChjaGF0KT0+e1xyXG4gICAgICAgIHNldEN1cnJlbnRDaGF0KGNoYXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxDb250YWN0cyBjb250YWN0cz17Y29udGFjdHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gY2hhbmdlQ2hhdCA9IHtoYW5kbGVDaGF0Q2hhbmdlfS8+XHJcbiAgICAgICAgICAgIHtjdXJyZW50Q2hhdCA9PT0gdW5kZWZpbmVkPyAgICA8V2VsY29tZSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9Lz4gOiA8Q2hhdENvbnRhaW5lciBjdXJyZW50Q2hhdD17Y3VycmVudENoYXR9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0vPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsInVzZVJlcXVlc3QiLCJSb3V0ZXIiLCJDb250YWN0cyIsIldlbGNvbWUiLCJDaGF0Q29udGFpbmVyIiwiaW8iLCJQYWdlIiwiY3VycmVudFVzZXIiLCJzb2NrZXQiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwidW5kZWZpbmVkIiwiY3VycmVudENoYXQiLCJzZXRDdXJyZW50Q2hhdCIsInJlZGlyZWN0aW9uVGltZSIsInNldFJlZGlyZWN0aW9uVGltZSIsInVybCIsIm1ldGhvZCIsIm9uU3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwiTm90QXV0aEVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsImgxIiwiZmV0Y2hDb250YWN0cyIsInJlc3BvbnNlIiwiaXNQcm9maWxlSW1hZ2VTZXQiLCJwdXNoIiwic2hhbGxvdyIsImhhbmRsZUNoYXRDaGFuZ2UiLCJjaGF0IiwiY29udGFpbmVyIiwiY2hhbmdlQ2hhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat/page.js\n"));

/***/ })

});