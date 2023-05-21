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

/***/ "./src/Logics/LocalStorage.js":
/*!************************************!*\
  !*** ./src/Logics/LocalStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Logics/Project.js\");\n\r\n\r\nclass LocalStorage {\r\n  #projects;\r\n  constructor(_projects) {\r\n    this.projects = _projects;\r\n    this.saveProjects();\r\n  }\r\n\r\n  set projects(_projects) {\r\n    this.#projects = _projects;\r\n  }\r\n\r\n  get projects() {\r\n    return this.#projects;\r\n  }\r\n\r\n  addProject(_project) {\r\n    for (let i = 0; i < this.projects.length; i++) {\r\n      if (this.projects[i].title == _project.title) {\r\n        return false;\r\n      }\r\n    } \r\n\r\n    this.projects.push(_project);\r\n    return true;\r\n  }\r\n\r\n  removeProject(_projectTitle) {\r\n    for (let i = 0; i < this.projects.length; i++) {\r\n      if (this.projects[i].title == _projectTitle) {\r\n        console.log(\"reached removeProject\");\r\n        this.projects.splice(i, 1);\r\n        return true;\r\n      }\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  saveProjects() {\r\n    console.log(\"called saveProjects()\");\r\n    localStorage.setItem('myLocalProjects', JSON.stringify(this.projects));\r\n  }\r\n\r\n  loadProjects() {\r\n    if (localStorage.getItem('myLocalProjects')) {\r\n      var existingProjects = JSON.parse(localStorage.getItem('myLocalProjects'));\r\n      console.log({existingProjects});\r\n\r\n      existingProjects.forEach(item => {\r\n        let project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item['title'], item['color']);\r\n        this.projects.push(project);\r\n      });\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Logics/LocalStorage.js?");

/***/ }),

/***/ "./src/Logics/Project.js":
/*!*******************************!*\
  !*** ./src/Logics/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  #title;\r\n  #color;\r\n  #tasks;\r\n  constructor(_title, _color) {\r\n    this.title = _title;\r\n    this.color = _color;\r\n    this.tasks = [];\r\n  }\r\n\r\n  set title(_title) {\r\n    console.log(\"called setter\");\r\n    this.#title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.#title;\r\n  }\r\n\r\n  set color(_color) {\r\n    this.#color = _color;\r\n  }\r\n\r\n  get color() {\r\n    return this.#color;\r\n  }\r\n\r\n  set tasks(_tasks) {\r\n    this.#tasks = sortTasksAsc(_tasks);\r\n  }\r\n\r\n  get tasks() {\r\n    return this.#tasks;\r\n  }\r\n\r\n  addTask = (_task) => {\r\n    this.tasks.push(_task);\r\n    this.tasks = sortTasksAsc(this.tasks);\r\n  }\r\n\r\n  removeTask = (_taskTitle, _taskDueDate) => {\r\n    for (let i = 0; i < this.tasks.length; i++) {\r\n      if (this.tasks[i].title == _taskTitle && this.tasks[i].dueDateAndTime == _taskDueDate) {\r\n        this.tasks.splice(i, 1);\r\n        return;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction sortTasksAsc(_tasks) {\r\n  for (let i = 1; i < _tasks.length; i++) {\r\n    for (let j = i - 1; j > -1; j--) {\r\n      if (_tasks[j + 1].dueDateAndTime < _tasks[j].dueDateAndTime) {\r\n        [_tasks[j + 1], _tasks[j]] = [_tasks[j], _tasks[j + 1]];\r\n      }\r\n    }\r\n  }\r\n\r\n  return _tasks;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/Logics/Project.js?");

/***/ }),

/***/ "./src/Logics/Task.js":
/*!****************************!*\
  !*** ./src/Logics/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  #title;\r\n  #description;\r\n  #dueDateAndTime;\r\n  #isCompleted;\r\n  constructor(_title, _description, _dueDateAndTime) {\r\n    this.title = _title;\r\n    this.description = _description;\r\n    this.dueDateAndTime = _dueDateAndTime;\r\n    this.isCompleted = false;\r\n  }\r\n\r\n  set title(_title) {\r\n    this.#title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.#title;\r\n  }\r\n\r\n  set description(_description) {\r\n    this.#description = _description;\r\n  }\r\n\r\n  get description() {\r\n    return this.#description;\r\n  }\r\n  \r\n  set dueDateAndTime(_dueDateAndTime) {\r\n    this.#dueDateAndTime = _dueDateAndTime;\r\n  }\r\n\r\n  get dueDateAndTime() {\r\n    return this.#dueDateAndTime;\r\n  }\r\n  \r\n  set isCompleted(_isCompleted) {\r\n    this.#isCompleted = _isCompleted;\r\n  }\r\n\r\n  get isCompleted() {\r\n    return this.#isCompleted;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Logics/Task.js?");

/***/ }),

/***/ "./src/UI/layout.js":
/*!**************************!*\
  !*** ./src/UI/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst layout = document.createElement('div');\r\n\r\nconst header = document.createElement('div');\r\nheader.id = \"header\";\r\n\r\nlayout.appendChild(header);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n//# sourceURL=webpack://todo-list/./src/UI/layout.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logics_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logics/Project */ \"./src/Logics/Project.js\");\n/* harmony import */ var _Logics_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logics/Task */ \"./src/Logics/Task.js\");\n/* harmony import */ var _Logics_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logics/LocalStorage */ \"./src/Logics/LocalStorage.js\");\n/* harmony import */ var _UI_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/layout */ \"./src/UI/layout.js\");\n\r\n\r\n\r\n\r\n\r\nvar project1 = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin1\", \"red\")\r\nproject1.tasks = [1,1,2];\r\n\r\nconsole.log(project1.title);\r\nconsole.log(project1.color);\r\nconsole.log(project1.tasks);\r\n\r\nconst contentDiv = document.createElement('div');\r\ncontentDiv.id = \"content\";\r\n\r\nvar dueDate = new Date(\"17 May 2023 5:00:00\");\r\nvar task1 = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Planning logic 1\", \"Write down things\", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan\r\nconsole.log(task1.dueDateAndTime, task1.isCompleted);\r\n\r\nvar dueDate = new Date(\"20 May 2023 5:00:00\");\r\nvar task2 = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Planning logic 2 \", \"Write down things\", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan\r\nconsole.log(task2.dueDateAndTime, task1.isCompleted);\r\n\r\nvar dueDate = new Date(\"25 May 2023 5:00:00\");\r\nvar task3 = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Planning logic 3\", \"Write down things\", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan\r\nconsole.log(task3.dueDateAndTime, task1.isCompleted);\r\n\r\nproject1.tasks = [task1, task3, task2];\r\nconsole.log(project1.tasks);\r\n\r\nvar dueDate = new Date(\"15 May 2023 5:00:00\");\r\nvar task0 = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Planning logic 0\", \"Write down things\", dueDate)  //Month is May but we're passing 4 because counter starting at 0 - Jan\r\nconsole.log(task1.dueDateAndTime, task0.isCompleted);\r\n\r\nproject1.addTask(task0);\r\nconsole.log(project1.tasks);\r\n\r\nproject1.removeTask(task0.title, task0.dueDateAndTime);\r\nconsole.log(project1.tasks);\r\n\r\nvar project2 = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin2\", \"blue\");\r\n\r\nvar projects = [];\r\n\r\nvar storage = new _Logics_LocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"](projects);\r\nconsole.log(storage.projects);\r\nstorage.removeProject(\"Odin3\");\r\n\r\nvar project3 = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin3\", \"yellow\");\r\nstorage.addProject(project3);\r\nstorage.removeProject(\"Odin3\");\r\nconsole.log(storage.projects);\r\n\r\ndocument.body.appendChild(_UI_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\ndocument.body.appendChild(contentDiv);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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