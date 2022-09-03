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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/chatpage.module.scss */ \"./styles/chatpage.module.scss\");\n/* harmony import */ var _styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Contacts */ \"./components/Contacts.js\");\n/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Welcome */ \"./components/Welcome.js\");\n/* harmony import */ var _components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ChatContainer */ \"./components/ChatContainer.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Page(param) {\n    var currentUser = param.currentUser;\n    _s();\n    var socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts = ref[0], setContacts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), currentChat = ref1[0], setCurrentChat = ref1[1];\n    var ref2 = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        url: \"http://localhost:4000/api/getallusers\",\n        method: \"get\",\n        onSuccess: function(data) {\n            console.log(data);\n            setContacts(data);\n        }\n    }), doRequest = ref2.doRequest, errors = ref2.errors;\n    var fetchContacts = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return D_WebDevelopment_Chat_App_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!currentUser.isProfileImageSet) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return doRequest();\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/chat/profile\", null, {\n                                shallow: true\n                            });\n                        }\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchContacts() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchContacts();\n    }, []);\n    var handleChatChange = function(chat) {\n        setCurrentChat(chat);\n    };\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Contacts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        contacts: contacts,\n                        currentUser: currentUser,\n                        changeChat: handleChatChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    currentChat === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Welcome__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 44\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ChatContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        currentChat: currentChat,\n                        currentUser: currentUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 83\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            errors\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_chatpage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().chatContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n            children: [\n                \"Kindly Sign Up to continue. \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                    href: \"chat/login\",\n                    children: \"Login Page\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 49\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n            lineNumber: 50,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\chat\\\\page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"iy8vj5uxGDQ1ht7JEIILmre23qQ=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQvcGFnZS5qcz82YTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhdHBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdHMnO1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dlbGNvbWUnO1xyXG5pbXBvcnQgQ2hhdENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRDb250YWluZXInO1xyXG5pbXBvcnQge2lvfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXHJcbmZ1bmN0aW9uIFBhZ2Uoe2N1cnJlbnRVc2VyfSkge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbY29udGFjdHMsIHNldENvbnRhY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyZW50Q2hhdCwgc2V0Q3VycmVudENoYXRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IHtkb1JlcXVlc3QsIGVycm9yc30gPSB1c2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9nZXRhbGx1c2Vyc1wiLFxyXG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRDb250YWN0cyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZldGNoQ29udGFjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoY3VycmVudFVzZXIuaXNQcm9maWxlSW1hZ2VTZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb1JlcXVlc3QoKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2NoYXQvcHJvZmlsZVwiLCBudWxsLCB7c2hhbGxvdzogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250YWN0cygpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBoYW5kbGVDaGF0Q2hhbmdlID0gKGNoYXQpPT57XHJcbiAgICAgICAgc2V0Q3VycmVudENoYXQoY2hhdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VycmVudFVzZXI/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxDb250YWN0cyBjb250YWN0cz17Y29udGFjdHN9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gY2hhbmdlQ2hhdCA9IHtoYW5kbGVDaGF0Q2hhbmdlfS8+XHJcbiAgICAgICAgICAgIHtjdXJyZW50Q2hhdCA9PT0gdW5kZWZpbmVkPyAgICA8V2VsY29tZSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9Lz4gOiA8Q2hhdENvbnRhaW5lciBjdXJyZW50Q2hhdD17Y3VycmVudENoYXR9IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0vPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtlcnJvcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApOihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPktpbmRseSBTaWduIFVwIHRvIGNvbnRpbnVlLiA8TGluayBocmVmPVwiY2hhdC9sb2dpblwiPkxvZ2luIFBhZ2U8L0xpbms+PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwidXNlUmVxdWVzdCIsIlJvdXRlciIsIkNvbnRhY3RzIiwiV2VsY29tZSIsIkNoYXRDb250YWluZXIiLCJpbyIsIlBhZ2UiLCJjdXJyZW50VXNlciIsInNvY2tldCIsImNvbnRhY3RzIiwic2V0Q29udGFjdHMiLCJ1bmRlZmluZWQiLCJjdXJyZW50Q2hhdCIsInNldEN1cnJlbnRDaGF0IiwidXJsIiwibWV0aG9kIiwib25TdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJmZXRjaENvbnRhY3RzIiwicmVzcG9uc2UiLCJpc1Byb2ZpbGVJbWFnZVNldCIsInB1c2giLCJzaGFsbG93IiwiaGFuZGxlQ2hhdENoYW5nZSIsImNoYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGF0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiY2hhbmdlQ2hhdCIsImgxIiwiTGluayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat/page.js\n"));

/***/ })

});