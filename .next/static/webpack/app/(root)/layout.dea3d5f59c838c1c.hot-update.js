"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/main-nav.tsx":
/*!*********************************!*\
  !*** ./components/main-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNav: function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ MainNav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Assuming Heading might be utilized elsewhere or should be removed if not in use.\n// import Heading from \"./ui/heading\";\nfunction MainNav(param) {\n    let { className, ...props } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    // The `useParams` is declared but never used. Consider removing it if unnecessary.\n    // const params = useParams();\n    const routes = [\n        {\n            href: \"/\",\n            label: \"ROIPro\",\n            active: pathname === \"/\"\n        },\n        {\n            href: \"/items\",\n            label: \"Portfolio\",\n            active: pathname === \"/items\"\n        },\n        {\n            href: \"/dashboard\",\n            label: \"Dashboard\",\n            active: pathname === \"/dashboard\"\n        },\n        {\n            href: \"/contact\",\n            label: \"Contact Us\",\n            active: pathname === \"/contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex items-space-around space-x-40 lg:space-x-20\", className),\n        ...props,\n        children: routes.map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: route.href,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-sm font-medium transition-colors hover:text-primary\", route.active ? \"text-black dark:text-white\" : \"text-muted-foreground\"),\n                children: route.label\n            }, route.href, false, {\n                fileName: \"/Users/vanshzota/Capstone-9/components/main-nav.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/vanshzota/Capstone-9/components/main-nav.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0o7QUFDaUI7QUFDcEI7QUFDMUIsbUZBQW1GO0FBQ25GLHNDQUFzQztBQUUvQixTQUFTSSxRQUFRLEtBR1k7UUFIWixFQUN0QkMsU0FBUyxFQUNULEdBQUdDLE9BQytCLEdBSFo7O0lBSXRCLE1BQU1DLFdBQVdMLDREQUFXQTtJQUM1QixtRkFBbUY7SUFDbkYsOEJBQThCO0lBQzlCLE1BQU1NLFNBQVM7UUFDYjtZQUNFQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUUosYUFBYTtRQUN2QjtRQUNBO1lBQ0VFLE1BQU07WUFDTkMsT0FBTztZQUNQQyxRQUFRSixhQUFhO1FBQ3ZCO1FBQ0E7WUFDRUUsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVFKLGFBQWE7UUFDdkI7UUFDQTtZQUNFRSxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUUosYUFBYTtRQUN2QjtLQUVEO0lBRUQscUJBQ0UsOERBQUNLO1FBQ0NQLFdBQVdMLDhDQUFFQSxDQUFDLG9EQUFvREs7UUFDakUsR0FBR0MsS0FBSztrQkFFUkUsT0FBT0ssR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDYixrREFBSUE7Z0JBRUhRLE1BQU1LLE1BQU1MLElBQUk7Z0JBQ2hCSixXQUFXTCw4Q0FBRUEsQ0FBQyw0REFDWmMsTUFBTUgsTUFBTSxHQUFHLCtCQUErQjswQkFHL0NHLE1BQU1KLEtBQUs7ZUFOUEksTUFBTUwsSUFBSTs7Ozs7Ozs7OztBQVd6QjtHQWpEZ0JMOztRQUlHRix3REFBV0E7OztLQUpkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmF2LnRzeD85ZTljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBBc3N1bWluZyBIZWFkaW5nIG1pZ2h0IGJlIHV0aWxpemVkIGVsc2V3aGVyZSBvciBzaG91bGQgYmUgcmVtb3ZlZCBpZiBub3QgaW4gdXNlLlxuLy8gaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vdWkvaGVhZGluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gTWFpbk5hdih7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pikge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIC8vIFRoZSBgdXNlUGFyYW1zYCBpcyBkZWNsYXJlZCBidXQgbmV2ZXIgdXNlZC4gQ29uc2lkZXIgcmVtb3ZpbmcgaXQgaWYgdW5uZWNlc3NhcnkuXG4gIC8vIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBjb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgaHJlZjogJy8nLFxuICAgICAgbGFiZWw6ICdST0lQcm8nLFxuICAgICAgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy8nXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiAnL2l0ZW1zJyxcbiAgICAgIGxhYmVsOiAnUG9ydGZvbGlvJyxcbiAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09ICcvaXRlbXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXG4gICAgICBhY3RpdmU6IHBhdGhuYW1lID09PSAnL2Rhc2hib2FyZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGhyZWY6ICcvY29udGFjdCcsIC8vIENoYW5nZWQgYmFjayB0byAnL2NvbnRhY3QtdXMnXG4gICAgICBsYWJlbDogJ0NvbnRhY3QgVXMnLFxuICAgICAgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy9jb250YWN0J1xuICAgIH0sXG4gICAgXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBpdGVtcy1zcGFjZS1hcm91bmQgc3BhY2UteC00MCBsZzpzcGFjZS14LTIwXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge3JvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAga2V5PXtyb3V0ZS5ocmVmfVxuICAgICAgICAgIGhyZWY9e3JvdXRlLmhyZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICByb3V0ZS5hY3RpdmUgPyBcInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCIgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyb3V0ZS5sYWJlbH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY24iLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJSZWFjdCIsIk1haW5OYXYiLCJjbGFzc05hbWUiLCJwcm9wcyIsInBhdGhuYW1lIiwicm91dGVzIiwiaHJlZiIsImxhYmVsIiwiYWN0aXZlIiwibmF2IiwibWFwIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-nav.tsx\n"));

/***/ })

});