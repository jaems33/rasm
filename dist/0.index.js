(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./pkg/rasm.js\");\n\n\nlet result = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"fibonacci\"](40);\nlet secondResult = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"fibonacci\"](30);\nconsole.log('Check');\nconsole.log(result);\nconsole.log(secondResult);\n\n\n//# sourceURL=webpack:///./init.js?");

/***/ }),

/***/ "./pkg/rasm.js":
/*!*********************!*\
  !*** ./pkg/rasm.js ***!
  \*********************/
/*! exports provided: fibonacci */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rasm_bg.wasm */ \"./pkg/rasm_bg.wasm\");\n/* harmony import */ var _rasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rasm_bg.js */ \"./pkg/rasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fibonacci\", function() { return _rasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"fibonacci\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/rasm.js?");

/***/ }),

/***/ "./pkg/rasm_bg.js":
/*!************************!*\
  !*** ./pkg/rasm_bg.js ***!
  \************************/
/*! exports provided: fibonacci */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fibonacci\", function() { return fibonacci; });\n/* harmony import */ var _rasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rasm_bg.wasm */ \"./pkg/rasm_bg.wasm\");\n\n\n/**\n* @param {number} n1\n* @returns {number}\n*/\nfunction fibonacci(n1) {\n    var ret = _rasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fibonacci\"](n1);\n    return ret;\n}\n\n\n\n//# sourceURL=webpack:///./pkg/rasm_bg.js?");

/***/ }),

/***/ "./pkg/rasm_bg.wasm":
/*!**************************!*\
  !*** ./pkg/rasm_bg.wasm ***!
  \**************************/
/*! exports provided: memory, fibonacci */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/rasm_bg.wasm?");

/***/ })

}]);