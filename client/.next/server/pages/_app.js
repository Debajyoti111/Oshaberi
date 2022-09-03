/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/buildClient.js":
/*!****************************!*\
  !*** ./api/buildClient.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst buildClient = ({ req  })=>{\n    if (true) {\n        // We are on the server\n        console.log(\"server\");\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://localhost:4000/\",\n            headers: req.headers,\n            withCredentials: true\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGRDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQy9CLElBQUksSUFBNkIsRUFBRTtRQUNqQyx1QkFBdUI7UUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLE9BQU9KLG1EQUFZLENBQUM7WUFDbEJNLE9BQU8sRUFDTCx3QkFBd0I7WUFDMUJDLE9BQU8sRUFBRUwsR0FBRyxDQUFDSyxPQUFPO1lBQ3BCQyxlQUFlLEVBQUUsSUFBSTtTQUN0QixDQUFDLENBQUM7S0FDSixNQUFNLEVBTU47Q0FDRjtBQUVELGlFQUFlUCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGRDbGllbnQuanM/ZTdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBidWlsZENsaWVudCA9ICh7IHJlcSB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXHJcbiAgICBjb25zb2xlLmxvZyhcInNlcnZlclwiKTtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOlxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL1wiLFxyXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxyXG4gICAgY29uc29sZS5sb2coXCJDbGllbnRcIik7XHJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVybDogXCIvXCJcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJidWlsZENsaWVudCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/buildClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_buildClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/buildClient */ \"./api/buildClient.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AppComponent = ({ Component , pageProps , currentUser  })=>{\n    console.log(currentUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\WebDevelopment\\\\Chat App\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    try {\n        const client = (0,_api_buildClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appContext.ctx);\n        let data = {};\n        if (true) {\n            data = await client.get(\"api/currentuser\");\n        } else {}\n        let pageProps = {};\n        if (appContext.Component.getInitialProps) {\n            pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.data);\n        }\n        return {\n            pageProps,\n            currentUser: data.data\n        };\n    } catch (err) {\n        return {\n            pageProps: undefined,\n            currentUser: undefined\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNEO0FBQ2dCO0FBQ25CO0FBQzFCLE1BQU1FLFlBQVksR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFQyxXQUFXLEdBQUUsR0FBRztJQUMxREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLHFCQUFRO2tCQUNSLDRFQUFDRyxNQUFJO3NCQUNMLDRFQUFDTCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Z0JBQUVDLFdBQVcsRUFBRUEsV0FBVzs7Ozs7eUJBQUk7Ozs7O3FCQUMvQztxQkFDSixDQUFFO0NBQ1I7QUFFREgsWUFBWSxDQUFDTyxlQUFlLEdBQUcsT0FBTUMsVUFBVSxHQUFJO0lBQy9DLElBQUc7UUFDSCxNQUFNQyxNQUFNLEdBQUdYLDREQUFXLENBQUNVLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDO1FBQzFDLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBRyxJQUE2QixFQUNoQztZQUNJQSxJQUFJLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM5QyxNQUNHLEVBYUg7UUFDRCxJQUFJVixTQUFTLEdBQUcsRUFBRTtRQUNsQixJQUFJTSxVQUFVLENBQUNQLFNBQVMsQ0FBQ00sZUFBZSxFQUFFO1lBQ3hDTCxTQUFTLEdBQUcsTUFBTU0sVUFBVSxDQUFDUCxTQUFTLENBQUNNLGVBQWUsQ0FBQ0MsVUFBVSxDQUFDRSxHQUFHLEVBQUVELE1BQU0sRUFBRUUsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztTQUMzRjtRQUNELE9BQU87WUFDTFQsU0FBUztZQUNUQyxXQUFXLEVBQUVRLElBQUksQ0FBQ0EsSUFBSTtTQUN2QixDQUFDO0tBQ0gsUUFBTVEsR0FBRyxFQUNWO1FBQ0UsT0FBTztZQUNIakIsU0FBUyxFQUFFa0IsU0FBUztZQUNwQmpCLFdBQVcsRUFBRWlCLFNBQVM7U0FBQyxDQUFDO0tBQzdCO0NBQ0Y7QUFDRCxpRUFBZXBCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkQ2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pPT57XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICA8bWFpbj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxyXG4gICAgPC9tYWluPlxyXG4gICAgPC8+KTtcclxufVxyXG5cclxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGFwcENvbnRleHQgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xyXG4gICAgbGV0IGRhdGEgPSB7fTtcclxuICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKVxyXG4gICAge1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KFwiYXBpL2N1cnJlbnR1c2VyXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc3QgYXV0aFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXQtYXBwLXVzZXJcIik7XHJcbiAgICAgIGlmKGF1dGhVc2VyKVxyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvY3VycmVudHVzZXJcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGF1dGhVc2VyOiBhdXRoVXNlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dC5jdHgsIGNsaWVudCwgZGF0YS5kYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhZ2VQcm9wcyxcclxuICAgICAgY3VycmVudFVzZXI6IGRhdGEuZGF0YVxyXG4gICAgfTtcclxuICB9Y2F0Y2goZXJyKVxyXG4gIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFnZVByb3BzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHVuZGVmaW5lZH07XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDsiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJheGlvcyIsIkFwcENvbXBvbmVudCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiY3R4IiwiZGF0YSIsImdldCIsImF1dGhVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1ldGhvZCIsInVybCIsIndpdGhDcmVkZW50aWFscyIsImVyciIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();