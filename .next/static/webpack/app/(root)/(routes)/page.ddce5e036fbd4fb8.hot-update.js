"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/(routes)/page",{

/***/ "(app-pages-browser)/./app/(root)/(routes)/page.tsx":
/*!**************************************!*\
  !*** ./app/(root)/(routes)/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/container */ \"(app-pages-browser)/./components/ui/container.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [realEstateData, setRealEstateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearch = async ()=>{\n        setIsLoading(true);\n        setError(\"\");\n        try {\n            // Replace with the URL of your backend endpoint\n            const response = await fetch(\"https://api.zillow.com/your-endpoint?query=\".concat(searchQuery));\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            setRealEstateData(data.properties); // Adjust according to the structure of your data\n        } catch (error) {\n            setError(\"Failed to fetch real estate data\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: searchQuery,\n                onChange: (e)=>setSearchQuery(e.target.value),\n                placeholder: \"Enter a location\"\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleSearch,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 27\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 23\n            }, undefined),\n            realEstateData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: realEstateData.map((property, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: property.address\n                        }, void 0, false, {\n                            fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vanshzota/Documents/compsci/Capstone/app/(root)/(routes)/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"erwtShczj5pWzED3MafKDfv1U/Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvKHJvdXRlcykvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNlO0FBQ0o7QUFDTTtBQUVsRCxNQUFNSSxXQUFXOztJQUNiLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1jLGVBQWU7UUFDakJILGFBQWE7UUFDYkUsU0FBUztRQUNULElBQUk7WUFDQSxnREFBZ0Q7WUFDaEQsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLDhDQUEwRCxPQUFaVjtZQUMzRSxJQUFJLENBQUNTLFNBQVNFLEVBQUUsRUFBRTtnQkFDZCxNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7WUFDaENYLGtCQUFrQlUsS0FBS0UsVUFBVSxHQUFHLGlEQUFpRDtRQUN6RixFQUFFLE9BQU9ULE9BQU87WUFDWkMsU0FBUztRQUNiLFNBQVU7WUFDTkYsYUFBYTtRQUNqQjtJQUNKO0lBR0EscUJBQ0ksOERBQUNSLGdFQUFTQTs7MEJBQ04sOERBQUNtQjtnQkFDR0MsTUFBSztnQkFDTEMsT0FBT2xCO2dCQUNQbUIsVUFBVSxDQUFDQyxJQUFNbkIsZUFBZW1CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDOUNJLGFBQVk7Ozs7OzswQkFFaEIsOERBQUMzQix5REFBTUE7Z0JBQUM0QixTQUFTZjswQkFBYzs7Ozs7O1lBQzlCSiwyQkFBYSw4REFBQ29COzBCQUFFOzs7Ozs7WUFDaEJsQix1QkFBUyw4REFBQ2tCOzBCQUFHbEI7Ozs7OztZQUNiSixnQ0FDRyw4REFBQ3VCOzBCQUVJdkIsZUFBZXdCLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDM0IsOERBQUNIO2tDQUNHLDRFQUFDRDtzQ0FBR0csU0FBU0UsT0FBTzs7Ozs7O3VCQURkRDs7Ozs7Ozs7Ozs7Ozs7OztBQVNsQztHQWxETTlCOztRQUNhRixzREFBU0E7OztLQUR0QkU7QUFvRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb290KS8ocm91dGVzKS9wYWdlLnRzeD9hZDAxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkAvY29tcG9uZW50cy91aS9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZWFsRXN0YXRlRGF0YSwgc2V0UmVhbEVzdGF0ZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHRoZSBVUkwgb2YgeW91ciBiYWNrZW5kIGVuZHBvaW50XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnppbGxvdy5jb20veW91ci1lbmRwb2ludD9xdWVyeT0ke3NlYXJjaFF1ZXJ5fWApO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFJlYWxFc3RhdGVEYXRhKGRhdGEucHJvcGVydGllcyk7IC8vIEFkanVzdCBhY2NvcmRpbmcgdG8gdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGRhdGFcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIHJlYWwgZXN0YXRlIGRhdGEnKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGxvY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICAgIHtyZWFsRXN0YXRlRGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZGp1c3QgdGhpcyB0byByZW5kZXIgeW91ciBkYXRhIGFzIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgICAgICB7cmVhbEVzdGF0ZURhdGEubWFwKChwcm9wZXJ0eSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9wZXJ0eS5hZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBwcm9wZXJ0eSBkZXRhaWxzIGhlcmUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIkhvbWVQYWdlIiwicm91dGVyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlYWxFc3RhdGVEYXRhIiwic2V0UmVhbEVzdGF0ZURhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInByb3BlcnRpZXMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInAiLCJkaXYiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/(routes)/page.tsx\n"));

/***/ })

});