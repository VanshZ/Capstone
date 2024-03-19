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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/client */ \"(app-pages-browser)/./app/(root)/(routes)/components/client.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// HomePage.jsx\n\n\n\n\n\n\n\n// Inside your component or page\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap\",\n        rel: \"stylesheet\"\n    }, void 0, false, {\n        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined)\n}, void 0, false, {\n    fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n    lineNumber: 14,\n    columnNumber: 1\n}, undefined);\nconst HomePage = ()=>{\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fav, setFav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const dataTableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Ref for scrolling into the data table\n    const fetchHouseData = async ()=>{\n        const options = {\n            method: \"GET\",\n            url: \"https://zillow-com1.p.rapidapi.com/propertyExtendedSearch\",\n            params: {\n                location: searchQuery,\n                home_type: \"Houses\"\n            },\n            headers: {\n                \"X-RapidAPI-Key\": \"c31fb36df2mshbf32ada61677af9p180734jsn0dcb38ea4a90\",\n                \"X-RapidAPI-Host\": \"zillow-com1.p.rapidapi.com\"\n            }\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].request(options);\n            const formattedResult = response.data.props.map((prop)=>({\n                    zpid: prop.zpid,\n                    propertyType: prop.propertyType === \"SINGLE_FAMILY\" ? \"Single Family\" : prop.listingStatus,\n                    address: prop.address,\n                    price: _lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatter.format(prop.price || 0),\n                    listingStatus: prop.listingStatus,\n                    livingArea: prop.livingArea ? prop.livingArea.toString() : \"\",\n                    isFavorite: fav.includes(prop.zpid) ? true : false\n                }));\n            setProperties(formattedResult);\n            if (formattedResult.length > 0 && dataTableRef.current) {\n                dataTableRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        } catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"No Results Found!\");\n        }\n    };\n    const fetchFavorites = async ()=>{\n        const res = await fetch(\"/api/properties\");\n        if (!res.ok) {\n            console.error(\"Failed to fetch\");\n            return;\n        }\n        const data = await res.json();\n        setFav(data.map((x)=>x.zpid));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n        fetchFavorites();\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"#b24c43\",\n                    padding: \"50px 20px\",\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: \"/images/banner.png\",\n                            alt: \"ROIPro Banner\",\n                            width: 400,\n                            height: 60,\n                            layout: \"intrinsic\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"relative\",\n                            maxWidth: \"500px\",\n                            margin: \"20px auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Search location\",\n                                style: {\n                                    width: \"100%\",\n                                    padding: \"10px\",\n                                    borderRadius: \"5px\",\n                                    border: \"1px solid #ddd\",\n                                    color: \"#000\",\n                                    marginBottom: \"10px\"\n                                },\n                                value: searchQuery,\n                                onChange: (e)=>setSearchQuery(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && fetchHouseData()\n                            }, void 0, false, {\n                                fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: fetchHouseData,\n                                style: {\n                                    position: \"absolute\",\n                                    top: \"0\",\n                                    right: \"0\",\n                                    padding: \"10px\",\n                                    border: \"none\",\n                                    borderRadius: \"0 5px 5px 0\",\n                                    backgroundColor: \"white\",\n                                    color: \"#b24c43\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"\\uD83D\\uDD0D\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: dataTableRef,\n                style: {\n                    padding: \"40px 20px\",\n                    backgroundColor: \"white\",\n                    color: \"black\",\n                    textAlign: \"center\",\n                    fontFamily: \"Poppins, sans-serif\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            fontSize: \"2rem\",\n                            marginBottom: \"10px\"\n                        },\n                        children: \"The smartest way to buy a home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"1rem\"\n                        },\n                        children: \"Access all of your property information at the click of a button.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_client__WEBPACK_IMPORTED_MODULE_4__.HomeClient, {\n                data: properties\n            }, void 0, false, {\n                fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vanshzota/Capstone-9/app/(root)/(routes)/page.tsx\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"SlgDKKts3S7ksOtEjz38imiR28o=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvKHJvdXRlcykvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxlQUFlO0FBRTRDO0FBQ2pDO0FBQ1U7QUFFSTtBQUNTO0FBQ2xCO0FBQ0Y7QUFFN0IsZ0NBQWdDO2NBQ2hDLDhEQUFDUyxrREFBSUE7Y0FDRCw0RUFBQ0M7UUFBS0MsTUFBSztRQUE2RUMsS0FBSTs7Ozs7Ozs7Ozs7QUFJaEcsTUFBTUMsV0FBVzs7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2dCLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFhLEVBQUU7SUFDM0QsTUFBTSxDQUFDa0IsS0FBS0MsT0FBTyxHQUFHbkIsK0NBQVFBLENBQVcsRUFBRTtJQUMzQyxNQUFNb0IsZUFBZW5CLDZDQUFNQSxDQUFDLE9BQU8sd0NBQXdDO0lBRTNFLE1BQU1vQixpQkFBaUI7UUFDbkIsTUFBTUMsVUFBVTtZQUNaQyxRQUFRO1lBQ1JDLEtBQUs7WUFDTEMsUUFBUTtnQkFBRUMsVUFBVVo7Z0JBQWFhLFdBQVc7WUFBUztZQUNyREMsU0FBUztnQkFDTCxrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtZQUN2QjtRQUNKO1FBRUEsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTTNCLDZDQUFLQSxDQUFDNEIsT0FBTyxDQUFDUjtZQUVyQyxNQUFNUyxrQkFBOEJGLFNBQVNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBK0c7b0JBQ3hLQyxNQUFNRCxLQUFLQyxJQUFJO29CQUNmQyxjQUFjRixLQUFLRSxZQUFZLEtBQUssa0JBQWtCLGtCQUFrQkYsS0FBS0csYUFBYTtvQkFDMUZDLFNBQVNKLEtBQUtJLE9BQU87b0JBQ3JCQyxPQUFPcEMsaURBQVNBLENBQUNxQyxNQUFN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ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG4vLyBIb21lUGFnZS5qc3hcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7IFpXQ29sdW1uIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbnMnO1xuaW1wb3J0IHsgZm9ybWF0dGVyIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgSG9tZUNsaWVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbGllbnQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gSW5zaWRlIHlvdXIgY29tcG9uZW50IG9yIHBhZ2VcbjxIZWFkPlxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuPC9IZWFkPlxuXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGU8WldDb2x1bW5bXT4oW10pO1xuICAgIGNvbnN0IFtmYXYsIHNldEZhdl0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IGRhdGFUYWJsZVJlZiA9IHVzZVJlZihudWxsKTsgLy8gUmVmIGZvciBzY3JvbGxpbmcgaW50byB0aGUgZGF0YSB0YWJsZVxuXG4gICAgY29uc3QgZmV0Y2hIb3VzZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly96aWxsb3ctY29tMS5wLnJhcGlkYXBpLmNvbS9wcm9wZXJ0eUV4dGVuZGVkU2VhcmNoJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBsb2NhdGlvbjogc2VhcmNoUXVlcnksIGhvbWVfdHlwZTogJ0hvdXNlcycgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnYzMxZmIzNmRmMm1zaGJmMzJhZGE2MTY3N2FmOXAxODA3MzRqc24wZGNiMzhlYTRhOTAnLFxuICAgICAgICAgICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnemlsbG93LWNvbTEucC5yYXBpZGFwaS5jb20nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHQ6IFpXQ29sdW1uW10gPSByZXNwb25zZS5kYXRhLnByb3BzLm1hcCgocHJvcDogeyB6cGlkOiBhbnk7IHByb3BlcnR5VHlwZTogYW55OyBhZGRyZXNzOiBhbnk7IHByaWNlOiBhbnk7IGxpc3RpbmdTdGF0dXM6IHN0cmluZzsgbGl2aW5nQXJlYTogYW55OyB9KSA9PiAoe1xuICAgICAgICAgICAgICAgIHpwaWQ6IHByb3AuenBpZCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHByb3AucHJvcGVydHlUeXBlID09PSBcIlNJTkdMRV9GQU1JTFlcIiA/IFwiU2luZ2xlIEZhbWlseVwiIDogcHJvcC5saXN0aW5nU3RhdHVzLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3AuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBwcmljZTogZm9ybWF0dGVyLmZvcm1hdChwcm9wLnByaWNlIHx8IDApLFxuICAgICAgICAgICAgICAgIGxpc3RpbmdTdGF0dXM6IHByb3AubGlzdGluZ1N0YXR1cyxcbiAgICAgICAgICAgICAgICBsaXZpbmdBcmVhOiBwcm9wLmxpdmluZ0FyZWEgPyBwcm9wLmxpdmluZ0FyZWEudG9TdHJpbmcoKSA6IFwiXCIsXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogZmF2LmluY2x1ZGVzKHByb3AuenBpZCkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgc2V0UHJvcGVydGllcyhmb3JtYXR0ZWRSZXN1bHQpO1xuXG4gICAgICAgICAgICBpZiAoZm9ybWF0dGVkUmVzdWx0Lmxlbmd0aCA+IDAgJiYgZGF0YVRhYmxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRhVGFibGVSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdObyBSZXN1bHRzIEZvdW5kIScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoRmF2b3JpdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9wZXJ0aWVzJyk7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2gnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0RmF2KGRhdGEubWFwKCh4OiBhbnkpID0+IHguenBpZCkpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gICAgICAgIGZldGNoRmF2b3JpdGVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKCFpc01vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2E4MzEzMScsIHBhZGRpbmc6ICc1MHB4IDIwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uZXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJPSVBybyBCYW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXJnaW46ICcyMHB4IGF1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLCBjb2xvcjogJyMwMDAnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBmZXRjaEhvdXNlRGF0YSgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtmZXRjaEhvdXNlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcwJywgcmlnaHQ6ICcwJywgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICdub25lJywgYm9yZGVyUmFkaXVzOiAnMCA1cHggNXB4IDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAnI2E4MzEzMScsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIPCflI1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdlxuICByZWY9e2RhdGFUYWJsZVJlZn1cbiAgc3R5bGU9e3tcbiAgICBwYWRkaW5nOiAnNDBweCAyMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgc2Fucy1zZXJpZicsIC8vIEFkZCB0aGUgZm9udEZhbWlseSBoZXJlXG4gIH19XG4+XG4gIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJyZW0nLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5UaGUgc21hcnRlc3Qgd2F5IHRvIGJ1eSBhIGhvbWU8L2gyPlxuICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nIH19PlxuICAgIEFjY2VzcyBhbGwgb2YgeW91ciBwcm9wZXJ0eSBpbmZvcm1hdGlvbiBhdCB0aGUgY2xpY2sgb2YgYSBidXR0b24uXG4gIDwvcD5cbjwvZGl2PlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxIb21lQ2xpZW50IGRhdGE9e3Byb3BlcnRpZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiYXhpb3MiLCJ0b2FzdCIsImZvcm1hdHRlciIsIkhvbWVDbGllbnQiLCJJbWFnZSIsIkhlYWQiLCJsaW5rIiwiaHJlZiIsInJlbCIsIkhvbWVQYWdlIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwiZmF2Iiwic2V0RmF2IiwiZGF0YVRhYmxlUmVmIiwiZmV0Y2hIb3VzZURhdGEiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwibG9jYXRpb24iLCJob21lX3R5cGUiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwiZm9ybWF0dGVkUmVzdWx0IiwiZGF0YSIsInByb3BzIiwibWFwIiwicHJvcCIsInpwaWQiLCJwcm9wZXJ0eVR5cGUiLCJsaXN0aW5nU3RhdHVzIiwiYWRkcmVzcyIsInByaWNlIiwiZm9ybWF0IiwibGl2aW5nQXJlYSIsInRvU3RyaW5nIiwiaXNGYXZvcml0ZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJlcnJvciIsImZldGNoRmF2b3JpdGVzIiwicmVzIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJqc29uIiwieCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwicG9zaXRpb24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0b3AiLCJyaWdodCIsImN1cnNvciIsInJlZiIsImZvbnRGYW1pbHkiLCJoMiIsImZvbnRTaXplIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/(routes)/page.tsx\n"));

/***/ })

});