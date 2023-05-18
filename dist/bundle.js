/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Logics/Project.js":
/*!*******************************!*\
  !*** ./src/Logics/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  #title;\r\n  #color;\r\n  #tasks;\r\n  constructor(_title, _color) {\r\n    this.title = _title;\r\n    this.color = _color;\r\n    this.tasks = [];\r\n  }\r\n\r\n  set title(_title) {\r\n    console.log(\"called setter\");\r\n    this.#title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.#title;\r\n  }\r\n\r\n  set color(_color) {\r\n    this.#color = _color;\r\n  }\r\n\r\n  get color() {\r\n    return this.#color;\r\n  }\r\n\r\n  set tasks(_tasks) {\r\n    this.#tasks = _tasks;\r\n  }\r\n\r\n  get tasks() {\r\n    return this.#tasks;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/Logics/Project.js?");

/***/ }),

/***/ "./src/Logics/Task.js":
/*!****************************!*\
  !*** ./src/Logics/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  #title;\r\n  #description;\r\n  #startDateAndTime;\r\n  #endDateAndTime;\r\n  #isCompleted;\r\n  constructor(_title, _description, _startDateAndTime, _endDateAndTime) {\r\n    this.title = _title;\r\n    this.description = _description;\r\n    this.startDateAndTime = _startDateAndTime;\r\n    this.endDateAndTime = _endDateAndTime;\r\n    this.isCompleted = false;\r\n  }\r\n\r\n  set title(_title) {\r\n    this.#title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.#title;\r\n  }\r\n\r\n  set description(_description) {\r\n    this.#description = _description;\r\n  }\r\n\r\n  get description() {\r\n    return this.#description;\r\n  }\r\n  \r\n  set startDateAndTime(_startDateAndTime) {\r\n    this.#startDateAndTime = _startDateAndTime;\r\n  }\r\n\r\n  get startDateAndTime() {\r\n    return this.#startDateAndTime;\r\n  }\r\n\r\n  set endDateAndTime(_endDateAndTime) {\r\n    this.#endDateAndTime = _endDateAndTime;\r\n  }\r\n\r\n  get endDateAndTime() {\r\n    return this.#endDateAndTime;\r\n  }\r\n\r\n  set isCompleted(_isCompleted) {\r\n    this.#isCompleted = _isCompleted;\r\n  }\r\n\r\n  get isCompleted() {\r\n    return this.#isCompleted;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Logics/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logics_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logics/Project */ \"./src/Logics/Project.js\");\n/* harmony import */ var _Logics_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logics/Task */ \"./src/Logics/Task.js\");\n\r\n\r\n\r\n\r\nvar project1 = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin\", \"red\")\r\nproject1.tasks = [1,1,2];\r\n\r\nconsole.log(project1.title);\r\nconsole.log(project1.color);\r\nconsole.log(project1.tasks);\r\n\r\nconst contentDiv = document.createElement('div');\r\ncontentDiv.id = \"content\";\r\n\r\nvar startDate = new Date(\"17 May 2023 5:00:00\");\r\nvar task1 = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Planning logic\", \"Write down things\", startDate, new Date(2023, 4, 20, 5, 0, 0))  //Month is May but we're passing 4 because counter starting at 0 - Jan\r\nconsole.log(task1.startDateAndTime, task1.endDateAndTime, task1.isCompleted);\r\n\r\ndocument.body.appendChild(contentDiv);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;