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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNav: function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ MainNav auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction MainNav(param) {\n    let { className, ...props } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const routes = [\n        {\n            href: \"/\",\n            label: \"ROIPro\",\n            active: pathname === \"/\"\n        },\n        {\n            href: \"/portfolio\",\n            label: \"Portfolio\",\n            active: pathname === \"/portfolio\"\n        },\n        {\n            href: \"/dashboard\",\n            label: \"Dashboard\",\n            active: pathname === \"/dashboard\"\n        },\n        {\n            href: \"/contact-us\",\n            label: \"Contact Us\",\n            active: pathname === \"/contact-us\"\n        },\n        {\n            href: \"/settings\",\n            label: \"Settings\",\n            active: pathname === \"/settings\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex items-space-around space-x-40 lg:space-x-45\", className),\n        ...props,\n        children: routes.map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: route.href,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-sm font-medium transition-colors hover:text-primary\", route.active ? \"text-black dark:text-white\" : \"text-muted-foreground\"),\n                children: route.label\n            }, route.href, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/components/main-nav.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/vanshzota/Documents/compsci/Capstone/components/main-nav.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(MainNav, \"Fs4PNpGR+dv2PW0hVLK1QUoNAAc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVpQztBQUNKO0FBQzRCO0FBR2xELFNBQVNJLFFBQVEsS0FHWTtRQUhaLEVBQ3BCQyxTQUFTLEVBQ1QsR0FBR0MsT0FDNkIsR0FIWjs7SUFJcEIsTUFBTUMsV0FBV0osNERBQVdBO0lBQzVCLE1BQU1LLFNBQVNOLDBEQUFTQTtJQUN4QixNQUFNTyxTQUFTO1FBQ1g7WUFDSUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVFMLGFBQWE7UUFDekI7UUFDQTtZQUNJRyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUUwsYUFBYTtRQUN6QjtRQUNBO1lBQ0lHLE1BQU07WUFDTkMsT0FBTztZQUNQQyxRQUFRTCxhQUFhO1FBQ3pCO1FBQ0E7WUFDSUcsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVFMLGFBQWE7UUFDekI7UUFDQTtZQUNJRyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUUwsYUFBYTtRQUN6QjtLQUNIO0lBRUQscUJBQ0ksOERBQUNNO1FBQ0dSLFdBQVdMLDhDQUFFQSxDQUFDLG9EQUFvREs7UUFDakUsR0FBR0MsS0FBSztrQkFFUkcsT0FBT0ssR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDZCxrREFBSUE7Z0JBRURTLE1BQU1LLE1BQU1MLElBQUk7Z0JBQ2hCTCxXQUFXTCw4Q0FBRUEsQ0FBQyw0REFDVmUsTUFBTUgsTUFBTSxHQUFHLCtCQUErQjswQkFHakRHLE1BQU1KLEtBQUs7ZUFOUEksTUFBTUwsSUFBSTs7Ozs7Ozs7OztBQVduQztHQXBEZ0JOOztRQUlLRCx3REFBV0E7UUFDYkQsc0RBQVNBOzs7S0FMWkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLW5hdi50c3g/OWU5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vdWkvaGVhZGluZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5OYXYoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgLi4ucHJvcHNcclxufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IHJvdXRlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdST0lQcm8nLFxyXG4gICAgICAgICAgICBhY3RpdmU6IHBhdGhuYW1lID09PSAnLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJy9wb3J0Zm9saW8nLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09ICcvcG9ydGZvbGlvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhyZWY6ICcvY29udGFjdC11cycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ29udGFjdCBVcycsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09ICcvY29udGFjdC11cydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaHJlZjogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgICAgICBhY3RpdmU6IHBhdGhuYW1lID09PSAnL3NldHRpbmdzJ1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLXNwYWNlLWFyb3VuZCBzcGFjZS14LTQwIGxnOnNwYWNlLXgtNDVcIiwgY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtyb3V0ZS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5hY3RpdmUgPyBcInRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCIgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cm91dGUubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY24iLCJMaW5rIiwidXNlUGFyYW1zIiwidXNlUGF0aG5hbWUiLCJNYWluTmF2IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJwYXRobmFtZSIsInBhcmFtcyIsInJvdXRlcyIsImhyZWYiLCJsYWJlbCIsImFjdGl2ZSIsIm5hdiIsIm1hcCIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-nav.tsx\n"));

/***/ })

});