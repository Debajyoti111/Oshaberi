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

/***/ "./components/ChatInput.js":
/*!*********************************!*\
  !*** ./components/ChatInput.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/chatinput.module.scss */ \"./styles/chatinput.module.scss\");\n/* harmony import */ var _styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatInput() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showEmojiPicker = ref[0], setShowEmojiPicker = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref1[0], setMessage = ref1[1];\n    var DynamicEmojiPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n        return __webpack_require__.e(/*! import() */ \"node_modules_emoji-picker-react_dist_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/index.js\", 23));\n    }, {\n        loadableGenerated: {\n            modules: [\n                \"..\\\\components\\\\ChatInput.js -> \" + \"emoji-picker-react\"\n            ]\n        },\n        ssr: false\n    });\n    var handleEmojiPickerHideShow = function() {\n        setShowEmojiPicker(!showEmojiPicker);\n    };\n    var handleEmojiClick = function(event, emojiObject) {\n        setMessage(message + emojiObject.emoji);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chatInput),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttonContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().emoji),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsEmojiSmileFill, {\n                            onClick: handleEmojiPickerHideShow\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        showEmojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().emojiPickerReact),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicEmojiPicker, {\n                                pickerStyle: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().emojiPickerReact),\n                                onEmojiClick: handleEmojiClick\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type message here\",\n                        value: message,\n                        onChange: function(e) {\n                            setMessage(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_chatinput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSend, {}, void 0, false, {\n                            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\components\\\\ChatInput.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatInput, \"NrnhVNJE10CLD4UIeTQ0aDaDg7U=\");\n_c = ChatInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInput);\nvar _c;\n$RefreshReg$(_c, \"ChatInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRJbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNSO0FBQ1E7QUFDRztBQUNsQjtBQUNuQyxTQUFTTyxTQUFTLEdBQUc7O0lBQ2pCLElBQThDTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRETyxlQUFlLEdBQXdCUCxHQUFlLEdBQXZDLEVBQUVRLGtCQUFrQixHQUFJUixHQUFlLEdBQW5CO0lBQzFDLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DUyxPQUFPLEdBQWdCVCxJQUFZLEdBQTVCLEVBQUVVLFVBQVUsR0FBSVYsSUFBWSxHQUFoQjtJQUUxQixJQUFNVyxrQkFBa0IsR0FBR04sbURBQU8sQ0FBQztlQUFJLDZOQUE0QjtLQUFBOzs7Ozs7UUFBR08sR0FBRyxFQUFFLEtBQUs7TUFBRTtJQUVsRixJQUFNQyx5QkFBeUIsR0FBRyxXQUFJO1FBQ2xDTCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUMsQ0FBQztLQUN4QztJQUVELElBQU1PLGdCQUFnQixHQUFHLFNBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFHO1FBQzNDTixVQUFVLENBQUNELE9BQU8sR0FBR08sV0FBVyxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUMzQztJQUNELHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRWYsZ0ZBQWdCOzswQkFDNUIsOERBQUNjLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWYsc0ZBQXNCOzBCQUNsQyw0RUFBQ2MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFZiw0RUFBWTs7c0NBQ3hCLDhEQUFDRCw0REFBZ0I7NEJBQUNtQixPQUFPLEVBQUVULHlCQUF5Qjs7Ozs7Z0NBQUc7d0JBRW5ETixlQUFlLGtCQUNmLDhEQUFDVyxLQUFHOzRCQUFDQyxTQUFTLEVBQUVmLHVGQUF1QjtzQ0FDdkMsNEVBQUNPLGtCQUFrQjtnQ0FBQ2EsV0FBVyxFQUFFcEIsdUZBQXVCO2dDQUFFcUIsWUFBWSxFQUFFWCxnQkFBZ0I7Ozs7O29DQUFHOzs7OztnQ0FDckY7Ozs7Ozt3QkFDUjs7Ozs7b0JBQ0o7MEJBQ04sOERBQUNZLE1BQUk7Z0JBQUNQLFNBQVMsRUFBRWYscUZBQXFCOztrQ0FDbEMsOERBQUN3QixPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsV0FBVyxFQUFDLG1CQUFtQjt3QkFBQ0MsS0FBSyxFQUFFdEIsT0FBTzt3QkFBRXVCLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUc7NEJBQUN2QixVQUFVLENBQUN1QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFDOzs7Ozs0QkFBRztrQ0FDakgsOERBQUNJLFFBQU07d0JBQUNoQixTQUFTLEVBQUVmLDZFQUFhO2tDQUM1Qiw0RUFBQ0Ysb0RBQVE7Ozs7Z0NBQUc7Ozs7OzRCQUNQOzs7Ozs7b0JBQ047Ozs7OztZQUNMLENBQ1Q7Q0FDSjtHQWpDUUksU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBbUNsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRJbnB1dC5qcz9hNzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElvTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IEJzRW1vamlTbWlsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NoYXRpbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmZ1bmN0aW9uIENoYXRJbnB1dCgpIHtcclxuICAgIGNvbnN0IFtzaG93RW1vamlQaWNrZXIsIHNldFNob3dFbW9qaVBpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBEeW5hbWljRW1vamlQaWNrZXIgPSBkeW5hbWljKCgpPT5pbXBvcnQoXCJlbW9qaS1waWNrZXItcmVhY3RcIiksIHtzc3I6IGZhbHNlfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1vamlQaWNrZXJIaWRlU2hvdyA9ICgpPT57XHJcbiAgICAgICAgc2V0U2hvd0Vtb2ppUGlja2VyKCFzaG93RW1vamlQaWNrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVtb2ppQ2xpY2sgPSAoZXZlbnQsIGVtb2ppT2JqZWN0KT0+e1xyXG4gICAgICAgIHNldE1lc3NhZ2UobWVzc2FnZSArIGVtb2ppT2JqZWN0LmVtb2ppKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SW5wdXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtb2ppfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnNFbW9qaVNtaWxlRmlsbCBvbkNsaWNrPXtoYW5kbGVFbW9qaVBpY2tlckhpZGVTaG93fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RW1vamlQaWNrZXIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1vamlQaWNrZXJSZWFjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljRW1vamlQaWNrZXIgcGlja2VyU3R5bGU9e3N0eWxlcy5lbW9qaVBpY2tlclJlYWN0fSBvbkVtb2ppQ2xpY2s9e2hhbmRsZUVtb2ppQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlIGhlcmVcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb01kU2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdElucHV0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJb01kU2VuZCIsIkJzRW1vamlTbWlsZUZpbGwiLCJzdHlsZXMiLCJkeW5hbWljIiwiQ2hhdElucHV0Iiwic2hvd0Vtb2ppUGlja2VyIiwic2V0U2hvd0Vtb2ppUGlja2VyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJEeW5hbWljRW1vamlQaWNrZXIiLCJzc3IiLCJoYW5kbGVFbW9qaVBpY2tlckhpZGVTaG93IiwiaGFuZGxlRW1vamlDbGljayIsImV2ZW50IiwiZW1vamlPYmplY3QiLCJlbW9qaSIsImRpdiIsImNsYXNzTmFtZSIsImNoYXRJbnB1dCIsImJ1dHRvbkNvbnRhaW5lciIsIm9uQ2xpY2siLCJlbW9qaVBpY2tlclJlYWN0IiwicGlja2VyU3R5bGUiLCJvbkVtb2ppQ2xpY2siLCJmb3JtIiwiaW5wdXRDb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatInput.js\n"));

/***/ })

});