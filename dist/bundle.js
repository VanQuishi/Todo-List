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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\r\\n  --headerHeight: 100px;\\r\\n  --footerHeight: 50px;\\r\\n  --mainHeight: calc(100vh - calc(var(--headerHeight) + var(--footerHeight)));\\r\\n  --yellow-bg: #f8da5b;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  height: 100vh;\\r\\n  padding: 0; \\r\\n  margin: 0;\\r\\n  background-color: #f9fafb;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nh1, h2, h3, ul{\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbutton:hover{\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#header{\\r\\n  background-color: black;\\r\\n  height: var(--headerHeight);\\r\\n  padding-left: 20px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#main{\\r\\n  height: var(--mainHeight);\\r\\n  display: grid;\\r\\n  grid-template: 1fr / 1fr 4fr;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#nav{\\r\\n  background-color: #eee;\\r\\n  padding: 20px;\\r\\n}\\r\\n#nav ul{\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  color: black;\\r\\n}\\r\\n#nav li{\\r\\n  border: 1px solid #ccc;\\r\\n  /* padding-left: 20px; */\\r\\n}\\r\\n#nav li:hover{\\r\\n  background-color: #ccc;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#nav li:active{\\r\\n  background-color: #ccc;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#nav ul>li>button{\\r\\n  width: 100%;\\r\\n  text-align: left;\\r\\n  border: none;\\r\\n  padding: 15px 20px 15px 20px;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n.projectBtnWrapper{\\r\\n  display: grid;\\r\\n  grid-template: 1fr / 4fr 1fr;\\r\\n}\\r\\n.projectFormBtn{\\r\\n  border: 1px solid #ccc;\\r\\n  padding: 10px;\\r\\n}\\r\\n.projectFormBtn:hover{\\r\\n  background-color: #ccc;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.blueBtn{\\r\\n  background-color: #0d6efd;\\r\\n  color: white;\\r\\n  border: 1px solid #0d6efd;\\r\\n}\\r\\n.blueBtn:hover{\\r\\n  background-color: #0b5ed7;\\r\\n  color: white;\\r\\n  border: 1px solid #0b5ed7;\\r\\n}\\r\\n.redBtn{\\r\\n  background-color: #dc3545;\\r\\n  color: white;\\r\\n  border: 1px solid #dc3545;\\r\\n}\\r\\n.redBtn:hover{\\r\\n  background-color: #bb2d3b;\\r\\n  color: white;\\r\\n  border: 1px solid #bb2d3b;\\r\\n}\\r\\n#nav ul>li>button:hover{\\r\\n  background-color: #ccc;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#nav ul>li>button:active{\\r\\n  background-color: #ccc;\\r\\n  cursor: pointer;\\r\\n}\\r\\n#nav #newProjectButton{\\r\\n  border-left: 1px solid #ccc;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#projectInputForm{\\r\\n  display: none;\\r\\n}\\r\\n#projectInputLabel{\\r\\n  margin-top: 1rem;\\r\\n  color: black;\\r\\n}\\r\\n.projectSwatchesWrapper{\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  align-items: center;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n#projectInput{\\r\\n  width: 100%;\\r\\n  padding: 10px 0 10px 0;\\r\\n  border: 1px;\\r\\n  text-align: center;\\r\\n}\\r\\n.colorBtn{\\r\\n  border: 1px black solid;\\r\\n  width: 10px;\\r\\n  height: 10px;\\r\\n  border-radius: 70%;\\r\\n  padding: 10px;\\r\\n}\\r\\n.colorBtn:hover{\\r\\n  cursor: pointer;\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n#colorSelectionToggle{\\r\\n  background-color: #ffafcc;\\r\\n  border: 1px solid #ffafcc;\\r\\n}\\r\\n#colorSelectionWrapper{\\r\\n  display: none;\\r\\n  gap: 0.5rem;\\r\\n  position: absolute;\\r\\n  margin-top: 10px;\\r\\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1);\\r\\n  background: #ffffff;\\r\\n  border-radius: 5px;\\r\\n  padding: 10px;\\r\\n}\\r\\n#colorSelectionWrapper button:nth-child(1){\\r\\n  background-color: #ffafcc;\\r\\n  border: 1px solid #ffafcc;\\r\\n}\\r\\n#colorSelectionWrapper button:nth-child(2){\\r\\n  background-color: #f8da5b;\\r\\n  border: 1px solid #f8da5b;\\r\\n}\\r\\n#colorSelectionWrapper button:nth-child(3){\\r\\n  background-color: #93e4c1;\\r\\n  border: 1px solid #93e4c1;\\r\\n}\\r\\n#colorSelectionWrapper button:nth-child(4){\\r\\n  background-color: #a2d2ff;\\r\\n  border: 1px solid #a2d2ff;\\r\\n}\\r\\n#colorSelectionWrapper button:nth-child(5){\\r\\n  background-color: #d59bf6;\\r\\n  border: 1px solid #d59bf6;\\r\\n}\\r\\n\\r\\n#viewWrapper{\\r\\n  display: flex;\\r\\n  gap: 1.5rem;\\r\\n  padding: 20px;\\r\\n  justify-content: center;\\r\\n}\\r\\n#view{\\r\\n/*   margin: 20px auto; */\\r\\n  width: 60%;\\r\\n  color: black;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n.viewChild{\\r\\n  flex: 1;\\r\\n}\\r\\n#addTaskBtn{\\r\\n  padding: 10px;\\r\\n}\\r\\n#addTaskBtn:hover{\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.projectTitleButton{\\r\\n  width: 100%;\\r\\n  padding: 15px 20px 15px 20px;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.taskItem{\\r\\n  display: grid;\\r\\n  grid-template: auto / 1rem 1fr 1fr 4rem 1rem;\\r\\n  border: 1px solid #ccc;\\r\\n  text-align: center;\\r\\n  padding: 10px 20px 10px 20px;\\r\\n  align-items: center;\\r\\n}\\r\\n.taskItemCross{\\r\\n  text-decoration: line-through;\\r\\n  opacity: 50%;\\r\\n}\\r\\n.taskItemToday{\\r\\n  grid-template: auto / 1rem 1fr 4rem 1rem;\\r\\n  border: 1px solid black;\\r\\n  padding: 15px 35px 15px 25px;\\r\\n}\\r\\n.taskItemToday img, .taskItem img{\\r\\n  width: 1.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.taskItemCheckbox{\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.completedTask{\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.todayTitle{\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n#taskFormWrapper{\\r\\n  display: none;\\r\\n  top: 50%;\\r\\n  transform: translate(0, -50%);\\r\\n  left: 50%;\\r\\n  position: absolute;\\r\\n  margin: 0;\\r\\n  color: black;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 5px;\\r\\n  padding: 1rem;\\r\\n  width: 20rem;\\r\\n  background-color: #f9fafb;\\r\\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1);\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n#taskForm{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n/*   height: 300px; */\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n#taskForm label{\\r\\n  margin-top: 10px;\\r\\n}\\r\\n#taskForm input{\\r\\n  /* height: 50px; */\\r\\n  padding: 10px;\\r\\n}\\r\\n#taskForm select{\\r\\n  border-radius: 0.25em;\\r\\n  padding: 0.25em 0.5em;\\r\\n  cursor: pointer;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n#btnTaskWrapper{\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  gap: 10px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.btnTask{\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#footer{\\r\\n  background-color: black;\\r\\n  height: var(--footerHeight);\\r\\n  display: flex;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n#footer img{\\r\\n  width: 30px;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.asterisk{\\r\\n  color: red;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Logics/LocalStorage.js":
/*!************************************!*\
  !*** ./src/Logics/LocalStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Logics/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Logics/Task.js\");\n\r\n\r\n\r\nclass LocalStorage {\r\n  projects;\r\n  constructor(_projects) {\r\n    this.projects = _projects;\r\n    this.loadProjects();\r\n  }\r\n\r\n  set projects(_projects) {\r\n    this.projects = _projects;\r\n  }\r\n\r\n  get projects() {\r\n    return this.projects;\r\n  }\r\n\r\n  addProject(_project) {\r\n    for (let i = 0; i < this.projects.length; i++) {\r\n      if (this.projects[i].title == _project.title) {\r\n        return false;\r\n      }\r\n    } \r\n\r\n    this.projects.push(_project);\r\n    return true;\r\n  }\r\n\r\n  removeProject(_projectTitle) {\r\n    for (let i = 0; i < this.projects.length; i++) {\r\n      if (this.projects[i].title == _projectTitle) {\r\n        console.log(\"reached removeProject\");\r\n        this.projects.splice(i, 1);\r\n        return true;\r\n      }\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  saveProjects() {\r\n    localStorage.setItem('myLocalProjects', JSON.stringify(this.projects));\r\n    console.log(\"after save\", localStorage.getItem('myLocalProjects'));\r\n  }\r\n\r\n  loadProjects() {\r\n    console.log(\"called loadProjects\");\r\n    if (localStorage.getItem('myLocalProjects')) {\r\n      var existingProjects = JSON.parse(localStorage.getItem('myLocalProjects'));\r\n      console.log({existingProjects});\r\n\r\n      var _projects = [];\r\n      existingProjects.forEach(function(item) {\r\n        let tasks = [];\r\n        for (var i = 0; i < item['tasks'].length; i++) {\r\n          let dueDate = new Date(item['tasks'][i]['dueDateAndTime']);\r\n          let task = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item['tasks'][i]['title'], item['tasks'][i]['description'], dueDate, item['tasks'][i]['isCompleted']);\r\n          tasks.push(task);\r\n        }\r\n        console.log('tasks', tasks);\r\n        let project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item['title'], item['color'], tasks);\r\n        _projects.push(project);\r\n      });\r\n\r\n      this.projects = _projects;\r\n      console.log(\"called loadProjects\", this.projects);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Logics/LocalStorage.js?");

/***/ }),

/***/ "./src/Logics/Project.js":
/*!*******************************!*\
  !*** ./src/Logics/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  title;\r\n  color;\r\n  tasks;\r\n  constructor(_title, _color, _tasks) {\r\n    this.title = _title;\r\n    this.color = _color;\r\n    this.tasks = _tasks;\r\n  }\r\n\r\n  set title(_title) {\r\n    console.log(\"called setter\");\r\n    this.title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.title;\r\n  }\r\n\r\n  set color(_color) {\r\n    this.color = _color;\r\n  }\r\n\r\n  get color() {\r\n    return this.color;\r\n  }\r\n\r\n  set tasks(_tasks) {\r\n    this.tasks = sortTasksAsc(_tasks);\r\n  }\r\n\r\n  get tasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  addTask = (_task) => {\r\n    this.tasks.push(_task);\r\n    this.tasks = sortTasksAsc(this.tasks);\r\n  }\r\n\r\n  removeTask = (_taskTitle, _taskDueDate) => {\r\n    for (let i = 0; i < this.tasks.length; i++) {\r\n      if (this.tasks[i].title == _taskTitle && this.tasks[i].dueDateAndTime == _taskDueDate) {\r\n        this.tasks.splice(i, 1);\r\n        return;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction sortTasksAsc(_tasks) {\r\n  for (let i = 1; i < _tasks.length; i++) {\r\n    for (let j = i - 1; j > -1; j--) {\r\n      if (_tasks[j + 1].dueDateAndTime < _tasks[j].dueDateAndTime) {\r\n        [_tasks[j + 1], _tasks[j]] = [_tasks[j], _tasks[j + 1]];\r\n      }\r\n    }\r\n  }\r\n\r\n  return _tasks;\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/Logics/Project.js?");

/***/ }),

/***/ "./src/Logics/Task.js":
/*!****************************!*\
  !*** ./src/Logics/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  title;\r\n  description;\r\n  dueDateAndTime;\r\n  isCompleted;\r\n  constructor(_title, _description, _dueDateAndTime, _isCompleted) {\r\n    this.title = _title;\r\n    this.description = _description;\r\n    this.dueDateAndTime = _dueDateAndTime;\r\n    this.isCompleted = _isCompleted;\r\n  }\r\n\r\n  set title(_title) {\r\n    this.title = _title;\r\n  }\r\n\r\n  get title() {\r\n    return this.title;\r\n  }\r\n\r\n  set description(_description) {\r\n    this.description = _description;\r\n  }\r\n\r\n  get description() {\r\n    return this.description;\r\n  }\r\n  \r\n  set dueDateAndTime(_dueDateAndTime) {\r\n    this.dueDateAndTime = _dueDateAndTime;\r\n  }\r\n\r\n  get dueDateAndTime() {\r\n    return this.dueDateAndTime;\r\n  }\r\n  \r\n  set isCompleted(_isCompleted) {\r\n    this.isCompleted = _isCompleted;\r\n  }\r\n\r\n  get isCompleted() {\r\n    return this.isCompleted;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Logics/Task.js?");

/***/ }),

/***/ "./src/UI/ProjectView.js":
/*!*******************************!*\
  !*** ./src/UI/ProjectView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectView)\n/* harmony export */ });\n/* harmony import */ var _assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edit_icon.svg */ \"./src/assets/edit_icon.svg\");\n/* harmony import */ var _assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/delete_icon.svg */ \"./src/assets/delete_icon.svg\");\n// Each Project is a dropdown of its tasks, sorted based on due date:\r\n    /*\r\n    + Project title is displayed with its color background\r\n    + First Project tasks are displayed by default\r\n    + User can expand/collapse any of the Projects' dropdowns\r\n    */\r\n// Each task comes along with a checkbox, edit icon, delete icon\r\n\r\n\r\n\r\nclass ProjectView {\r\n    htmlDisplay;\r\n    constructor(projectTitle, projectColor, projectTasks) {\r\n        console.log('called setter projectView');\r\n        let projectWrapper = document.createElement('div');\r\n        projectWrapper.className = 'viewChild';\r\n\r\n        let taskItems = \"\";\r\n        projectTasks.forEach(task => {\r\n            taskItems += this.createTaskItem(task, projectTitle);\r\n        });\r\n\r\n        projectWrapper.innerHTML += `\r\n            <button class=\"projectTitleButton\" style=\"background-color:${projectColor}\">${projectTitle}</button>\r\n            <div class=\"taskListWrapper\" id=\"${projectTitle}taskListWrapper\">\r\n                <ul class=\"tasksList\">${taskItems}</ul>\r\n            </div>\r\n        `;\r\n\r\n        this.htmlDisplay = projectWrapper;\r\n    }\r\n\r\n    createTaskItem = (task, projectTitle) => {\r\n        let dueDate = new Date(task.dueDateAndTime).toLocaleDateString('en-us', { weekday:\"long\", year:\"numeric\", month:\"short\", day:\"numeric\"});\r\n        let taskItemHTML = \"\";\r\n        if (task.isCompleted) {\r\n            taskItemHTML = `\r\n            <li class=\"taskItem ${projectTitle} taskItemCross\">\r\n                <input type=\"checkbox\" class=\"taskItemCheckbox\" checked>\r\n                <div>${task.title}</div>\r\n                <div>${dueDate}</div>\r\n                <div>\r\n                    <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n                </div>\r\n                <div>\r\n                    <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n                </div>\r\n                </li>\r\n            `\r\n        } else {\r\n            taskItemHTML = `\r\n            <li class=\"taskItem ${projectTitle}\">\r\n                <input type=\"checkbox\" class=\"taskItemCheckbox\">\r\n                <div>${task.title}</div>\r\n                <div>${dueDate}</div>\r\n                <div>\r\n                    <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n                </div>\r\n                <div>\r\n                    <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n                </div>\r\n                </li>\r\n            `\r\n        }\r\n        \r\n\r\n        return taskItemHTML;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI/ProjectView.js?");

/***/ }),

/***/ "./src/UI/TaskForm.js":
/*!****************************!*\
  !*** ./src/UI/TaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TaskForm = document.createElement('div');\r\nTaskForm.id = \"taskFormWrapper\";\r\n\r\nTaskForm.innerHTML = `\r\n  <div style=\"display: flex; justify-content: center\">\r\n    <h3>New Task</h3>\r\n  </div>\r\n  <div id=\"taskForm\">\r\n    <label for=\"taskTitle\">Task Title<span class=\"asterisk\">*</span></label>\r\n    <input type=\"text\" id=\"taskTitleInput\" for=\"taskTitle\" required>\r\n    <label for=\"taskDescription\">Description:</label>\r\n    <textarea id=\"taskDescription\" for=\"taskDescription\" rows=\"5\"></textarea>\r\n    <label for=\"project\">Project<span class=\"asterisk\">*</span></label>\r\n    <select name=\"project\" id=\"projectDropdown\"></select>\r\n    <label for=\"dueDate\">Due date<span class=\"asterisk\">*</span></label>\r\n    <input type=\"date\" for=\"dueDate\" id=\"dueDate\" required>\r\n    <div id=\"btnTaskWrapper\">\r\n      <button class=\"blueBtn btnTask\" id=\"submitTaskBtn\">Add Task</button>\r\n      <button class=\"redBtn btnTask\" id=\"cancelTaskBtn\">Cancel</button>\r\n    </div>\r\n  </div>\r\n`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);\n\n//# sourceURL=webpack://todo-list/./src/UI/TaskForm.js?");

/***/ }),

/***/ "./src/UI/TodayView.js":
/*!*****************************!*\
  !*** ./src/UI/TodayView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodayView)\n/* harmony export */ });\n/* harmony import */ var _assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edit_icon.svg */ \"./src/assets/edit_icon.svg\");\n/* harmony import */ var _assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/delete_icon.svg */ \"./src/assets/delete_icon.svg\");\n\r\n\r\n\r\nclass TodayView {\r\n  htmlDisplay;\r\n  constructor(todayDate, todayList) {\r\n    console.log('called constructor TodayView');\r\n    let todayWrapper = document.createElement('div');\r\n    todayWrapper.className = 'viewChild';\r\n\r\n    let taskItems = \"\"\r\n    todayList.forEach(item => {     \r\n      taskItems += this.createTaskItem(item[0], item[1], item[2]);\r\n    });\r\n\r\n    todayWrapper.innerHTML += `\r\n      <div class=\"todayTitle\">\r\n        <h2>Due Today</h2>\r\n        <h2>${todayDate}</h2>\r\n      </div>\r\n      <div class=\"taskListWrapper\">\r\n          <ul class=\"tasksList\">${taskItems}</ul>\r\n      </div>\r\n    `;\r\n\r\n    this.htmlDisplay = todayWrapper;\r\n  }\r\n\r\n  createTaskItem = (task, projectTitle, projectColor) => {\r\n    let taskItemHTML = \"\";\r\n    if (task.isCompleted) {\r\n      taskItemHTML = `\r\n        <li class=\"taskItem ${projectTitle} taskItemToday taskItemCross\" style=\"background-color:${projectColor}\">\r\n            <input type=\"checkbox\" class=\"taskItemCheckbox\" checked>\r\n            <div>${task.title}</div>\r\n            <div>\r\n              <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n            </div>\r\n            <div>\r\n              <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            </div>\r\n        </li>\r\n      `\r\n    }\r\n    else {\r\n      taskItemHTML = `\r\n        <li class=\"taskItem ${projectTitle} taskItemToday\" style=\"background-color:${projectColor}\">\r\n            <input type=\"checkbox\" class=\"taskItemCheckbox\">\r\n            <div>${task.title}</div>\r\n            <div>\r\n              <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n            </div>\r\n            <div>\r\n              <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            </div>\r\n        </li>\r\n      `\r\n    }\r\n    \r\n    return taskItemHTML;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI/TodayView.js?");

/***/ }),

/***/ "./src/UI/WeekView.js":
/*!****************************!*\
  !*** ./src/UI/WeekView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeekView)\n/* harmony export */ });\n/* harmony import */ var _assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edit_icon.svg */ \"./src/assets/edit_icon.svg\");\n/* harmony import */ var _assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/delete_icon.svg */ \"./src/assets/delete_icon.svg\");\n\r\n\r\n\r\nclass WeekView {\r\n  htmlDisplay;\r\n  constructor(weekBegin, weekEnd, weekList) {\r\n    let weekWrapper = document.createElement('div');\r\n    weekWrapper.className = 'viewChild';\r\n\r\n    let taskItems = \"\"\r\n    weekList.forEach(item => {     \r\n      taskItems += this.createTaskItem(item[0], item[1], item[2]);\r\n    });\r\n\r\n    weekWrapper.innerHTML += `\r\n      <div class=\"todayTitle\">\r\n        <h2>Due This Week</h2>\r\n        <h2>${weekBegin} - ${weekEnd}</h2>\r\n      </div>\r\n      <div class=\"taskListWrapper\">\r\n          <ul class=\"tasksList\">${taskItems}</ul>\r\n      </div>\r\n    `;\r\n\r\n    this.htmlDisplay = weekWrapper;\r\n  }\r\n\r\n  createTaskItem = (task, projectTitle, projectColor) => {\r\n    let taskItemHTML = \"\";\r\n    if (task.isCompleted) {\r\n      taskItemHTML = `\r\n        <li class=\"taskItem ${projectTitle} taskItemToday taskItemCross\" style=\"background-color:${projectColor}\">\r\n            <input type=\"checkbox\" class=\"taskItemCheckbox\" checked>\r\n            <div>${task.title}</div>\r\n            <div>\r\n              <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n            </div>\r\n            <div>\r\n              <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            </div>\r\n        </li>\r\n      `\r\n    }\r\n    else {\r\n      taskItemHTML = `\r\n        <li class=\"taskItem ${projectTitle} taskItemToday\" style=\"background-color:${projectColor}\">\r\n            <input type=\"checkbox\" class=\"taskItemCheckbox\">\r\n            <div>${task.title}</div>\r\n            <div>\r\n              <img src=\"${_assets_edit_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n            </div>\r\n            <div>\r\n              <img src=\"${_assets_delete_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            </div>\r\n        </li>\r\n      `\r\n    }\r\n    \r\n    return taskItemHTML;\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/UI/WeekView.js?");

/***/ }),

/***/ "./src/UI/layout.js":
/*!**************************!*\
  !*** ./src/UI/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_github_mark_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/github-mark/github-mark-white.svg */ \"./src/assets/github-mark/github-mark-white.svg\");\n/* harmony import */ var _assets_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/add_icon.svg */ \"./src/assets/add_icon.svg\");\n\r\n\r\n\r\nconst layout = document.createElement('div');\r\n\r\n\r\n/* Header section */\r\nconst header = document.createElement('div');\r\nheader.id = \"header\";\r\nconst logoWrapper = document.createElement('div');\r\nconst title = document.createElement('h1');\r\ntitle.textContent = \"Planner\";\r\nlogoWrapper.appendChild(title);\r\nheader.appendChild(logoWrapper);\r\n\r\n\r\n/* Main section */\r\nconst main = document.createElement('div');\r\nmain.id = \"main\";\r\n\r\nconst nav = document.createElement('div');\r\nnav.id = \"nav\";\r\n\r\nnav.innerHTML = `\r\n  <ul>\r\n    <li><button>Today</button></li>\r\n    <li><button>Week</button></li>\r\n    <li class=\"projectBtnWrapper\"><button id=\"projectButton\">Projects</button><button id=\"newProjectButton\"><img src=\"${_assets_add_icon_svg__WEBPACK_IMPORTED_MODULE_1__}\" style=\"width: 1.2rem;\"></button></li>    \r\n  </ul>\r\n  <div id=\"projectInputForm\">\r\n    <div id=\"projectInputLabel\">\r\n    <label for=\"projectInput\">Project Name:</label>\r\n    </div>\r\n    <div class=\"projectSwatchesWrapper\">\r\n      <input type=\"text\" id=\"projectInput\">\r\n      <div>\r\n        <span title=\"Click to choose color\">\r\n          <button class=\"colorBtn\" id=\"colorSelectionToggle\"></button>\r\n        </span>\r\n        <div id=\"colorSelectionWrapper\">\r\n          <button class=\"colorBtn\" id=\"btn1\"></button>\r\n          <button class=\"colorBtn\" id=\"btn2\"></button>\r\n          <button class=\"colorBtn\" id=\"btn3\"></button>\r\n          <button class=\"colorBtn\" id=\"btn4\"></button>\r\n          <button class=\"colorBtn\" id=\"btn5\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"projectSwatchesWrapper\">\r\n      <button class=\"projectFormBtn blueBtn\" id=\"addProjectBtn\">Add Project</button>\r\n      <button class=\"projectFormBtn redBtn\" id=\"cancelProjectBtn\">Cancel</button>\r\n    </div>\r\n  </div>  \r\n`\r\n\r\nmain.appendChild(nav);\r\n\r\nconst viewWrapper = document.createElement('div');\r\nviewWrapper.id = \"viewWrapper\";\r\n\r\nconst view = document.createElement('div');\r\nview.id = 'view';\r\n\r\nconst addTaskWrapper = document.createElement('div');\r\naddTaskWrapper.id = \"addTaskWrapper\";\r\naddTaskWrapper.innerHTML = `\r\n  <button class=\"blueBtn\" id=\"addTaskBtn\">New Task</button>\r\n`;\r\n\r\nviewWrapper.appendChild(view);\r\nviewWrapper.appendChild(addTaskWrapper);\r\nmain.appendChild(viewWrapper);\r\n\r\n\r\n/* Footer section */\r\nconst footer = document.createElement('div');\r\nfooter.id = \"footer\";\r\nconst creditWrapper = document.createElement('p');\r\ncreditWrapper.textContent = \"Made by Nin\";\r\nconst githubWrapper = document.createElement('img');\r\ngithubWrapper.src = _assets_github_mark_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__;\r\nfooter.appendChild(creditWrapper);\r\nfooter.appendChild(githubWrapper);\r\n\r\nlayout.appendChild(header);\r\nlayout.appendChild(main);\r\nlayout.appendChild(footer);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI/layout.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logics_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logics/Project */ \"./src/Logics/Project.js\");\n/* harmony import */ var _Logics_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logics/Task */ \"./src/Logics/Task.js\");\n/* harmony import */ var _Logics_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logics/LocalStorage */ \"./src/Logics/LocalStorage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/layout */ \"./src/UI/layout.js\");\n/* harmony import */ var _UI_ProjectView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/ProjectView */ \"./src/UI/ProjectView.js\");\n/* harmony import */ var _UI_TodayView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/TodayView */ \"./src/UI/TodayView.js\");\n/* harmony import */ var _UI_WeekView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UI/WeekView */ \"./src/UI/WeekView.js\");\n/* harmony import */ var _UI_TaskForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UI/TaskForm */ \"./src/UI/TaskForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst todayDateObj = new Date();\r\n\r\nconst contentDiv = document.createElement('div');\r\ncontentDiv.id = \"content\";\r\n\r\n\r\nvar storage = new _Logics_LocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([]);\r\nconsole.log(\"load projects from storage\", storage.projects);\r\n\r\nvar storage2 = new _Logics_LocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([]);\r\nstorage2.loadProjects();\r\n\r\nvar project3 = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin3\", \"#fcf6bd\", []);\r\n\r\n\r\nvar today = new Date();\r\nstorage.projects[0].tasks[0].dueDateAndTime = today;\r\nstorage.projects[1].tasks[0].dueDateAndTime = today;\r\n\r\nvar todayTasks = [];\r\n\r\nfor (let i = 0; i < storage.projects.length; i++) {\r\n  for (let j = 0; j < storage.projects[i].tasks.length; j++) {\r\n    var taskDueDate = new Date(storage.projects[i].tasks[j].dueDateAndTime);\r\n    if (taskDueDate.toLocaleDateString() == todayDateObj.toLocaleDateString())\r\n    {\r\n      todayTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color]);\r\n      console.log(todayTasks);\r\n    }\r\n    console.log(\"no matched date\");\r\n  }\r\n}\r\n\r\n/* End of logic test */\r\n\r\ncontentDiv.appendChild(_UI_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\ncontentDiv.appendChild(_UI_TaskForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\ndocument.body.appendChild(contentDiv);\r\n\r\nconst colorSelectionToggle = document.getElementById('colorSelectionToggle');\r\nconst colorSelectionWrapper = document.getElementById(\"colorSelectionWrapper\");\r\nconst view = document.getElementById('view');\r\n\r\ncolorSelectionToggle.addEventListener(\"click\", function()\r\n{\r\n  if (colorSelectionWrapper.style.display == \"flex\") {\r\n    colorSelectionWrapper.style.display = \"none\";\r\n  } else {\r\n    colorSelectionWrapper.style.display = \"flex\";\r\n  }\r\n})\r\n\r\n// Project View\r\nfor (let i = 0; i < storage.projects.length; i++) {\r\n  var projectView = new _UI_ProjectView__WEBPACK_IMPORTED_MODULE_5__[\"default\"](storage.projects[i].title, storage.projects[i].color, storage.projects[i].tasks);\r\n  view.appendChild(projectView.htmlDisplay);\r\n}\r\n\r\n//Today View\r\nlet todayView = new _UI_TodayView__WEBPACK_IMPORTED_MODULE_6__[\"default\"](todayDateObj.toLocaleDateString(), todayTasks);\r\nconsole.log(todayView);\r\nview.appendChild(todayView.htmlDisplay);\r\n\r\n//Week View\r\nfunction getMondayOfCurrentWeek() {\r\n  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? -6 : 1);\r\n  return todayDateObj.setDate(diff), todayDateObj;\r\n}\r\n\r\nfunction getSundayOfCurrentWeek() {\r\n  const diff = todayDateObj.getDate() - todayDateObj.getDay() + (todayDateObj.getDay() === 0 ? 0 : 7);\r\n  return todayDateObj.setDate(diff), todayDateObj;\r\n}\r\n\r\nconsole.log(\"monday\", getMondayOfCurrentWeek()); \r\nconsole.log(\"sunday\", getSundayOfCurrentWeek()); \r\n\r\nvar weekTasks = []\r\n\r\nfor (var i = 0; i < storage.projects.length; i++) {\r\n  for (var j = 0; j < storage.projects[i].tasks.length; j++) {\r\n    console.log(storage.projects[i].tasks[j].dueDateAndTime);\r\n    let taskDueDate = new Date(`\"${storage.projects[i].tasks[j].dueDateAndTime}\"`);\r\n    console.log(taskDueDate.toString())\r\n    if (taskDueDate <= getSundayOfCurrentWeek() && taskDueDate >= getMondayOfCurrentWeek()) {\r\n      console.log(\"in between the week\");\r\n      weekTasks.push([storage.projects[i].tasks[j], storage.projects[i].title, storage.projects[i].color]);\r\n    }\r\n  }\r\n\r\n  console.log(weekTasks);\r\n}\r\n\r\nlet weekView = new _UI_WeekView__WEBPACK_IMPORTED_MODULE_7__[\"default\"](getMondayOfCurrentWeek().toLocaleDateString(), getSundayOfCurrentWeek().toLocaleDateString(), weekTasks);\r\nconsole.log(weekView);\r\nview.appendChild(weekView.htmlDisplay);\r\n\r\n//function to hide/show taskList\r\nfunction toggleList() {\r\n  let list = document.getElementById(`${this.textContent}` + 'taskListWrapper');\r\n  console.log(list);\r\n  if (list.style.display != 'none') {\r\n      list.style.display = 'none';\r\n      return;\r\n  }\r\n  list.style.display = 'block';\r\n  return;\r\n}\r\n\r\nlet projectTitleButtons = document.getElementsByClassName('projectTitleButton');\r\n\r\nfor (var i = 0; i < projectTitleButtons.length; i++) {\r\n  projectTitleButtons[i].addEventListener('click', toggleList);\r\n}\r\n\r\n//function to complete a task\r\nfunction completeTask() {\r\n  if (this.checked == true) {\r\n    this.parentElement.classList.add('taskItemCross');\r\n    console.log(this.parentElement.classList[1]);\r\n    let projectTitle = this.parentElement.classList[1];\r\n    for (var i = 0; i < storage.projects.length; i++) {\r\n      if (storage.projects[i].title == projectTitle) {\r\n        for (var j = 0; j < storage.projects[i].tasks.length; j++) {\r\n          storage.projects[i].tasks[j].isCompleted = true;\r\n          console.log(storage.projects[i].tasks[j].title, storage.projects[i].tasks[j].isCompleted);\r\n          break;\r\n        }\r\n        break;\r\n      }\r\n    }\r\n  }\r\n  else {\r\n    this.parentElement.classList.remove('taskItemCross');\r\n    console.log(this.parentElement.classList[1]);\r\n    let projectTitle = this.parentElement.classList[1];\r\n    for (var i = 0; i < storage.projects.length; i++) {\r\n      if (storage.projects[i].title == projectTitle) {\r\n        for (var j = 0; j < storage.projects[i].tasks.length; j++) {\r\n          storage.projects[i].tasks[j].isCompleted = false;\r\n          console.log(storage.projects[i].tasks[j].title, storage.projects[i].tasks[j].isCompleted);\r\n          break;\r\n        }\r\n        break;\r\n      }\r\n    }\r\n  } \r\n\r\n  storage.saveProjects();\r\n  console.log(storage.projects);\r\n}\r\n\r\nlet taskItemCheckboxes = document.getElementsByClassName('taskItemCheckbox');\r\n\r\nfor (var i = 0; i < taskItemCheckboxes.length; i++) {\r\n  taskItemCheckboxes[i].addEventListener('click', completeTask);\r\n}\r\n\r\nlet colorButtons = colorSelectionWrapper.querySelectorAll('.colorBtn');\r\n\r\nfor (var i = 0; i < colorButtons.length; i++) {\r\n  colorButtons[i].addEventListener('click', function() {\r\n    let cssObj = window.getComputedStyle(this, null)\r\n    let bgColor = cssObj.getPropertyValue(\"background-color\");\r\n    colorSelectionToggle.style.backgroundColor =  bgColor;\r\n    colorSelectionToggle.style.border = `1px solid ${bgColor}`;\r\n    colorSelectionWrapper.style.display = \"none\";\r\n  });\r\n}\r\n\r\nconst newProjectButton = document.getElementById('newProjectButton');\r\nconst projectInputForm = document.getElementById('projectInputForm');\r\n\r\nnewProjectButton.addEventListener('click', function() {\r\n  if (projectInputForm.style.display == 'none' || projectInputForm.style.display == '') {\r\n    projectInputForm.style.display = 'block';\r\n  }\r\n  else {\r\n    projectInputForm.style.display = 'none';\r\n  }\r\n})\r\n\r\nfunction checkDuplicateProjectName(projectTitle) {\r\n  for (var i = 0; i < storage.projects.length; i++) {\r\n    if (storage.projects[i].title == projectTitle) {\r\n      return true;\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\r\nconst projectTitleInput = document.getElementById('projectInput');\r\nconst addProjectBtn = document.getElementById('addProjectBtn');\r\nconst cancelProjectBtn = document.getElementById('cancelProjectBtn');\r\n\r\naddProjectBtn.addEventListener('click', function() {\r\n  let projectTitle = document.getElementById('projectInput').value;\r\n\r\n  if (checkDuplicateProjectName(projectTitle)) {\r\n    console.log('duplicate project');\r\n  } else if (projectTitle == '') {\r\n    console.log('empty project title');\r\n  }\r\n  else {\r\n    let projColor = colorSelectionToggle.style.backgroundColor;\r\n    let newProject = new _Logics_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectTitle, projColor, []);\r\n    console.log(projColor);\r\n    if (storage.addProject(newProject)) {\r\n      storage.saveProjects();\r\n      console.log('add project successfully');\r\n    } else {\r\n      console.log('fail to add project');\r\n    }\r\n  }\r\n})\r\n\r\ncancelProjectBtn.addEventListener('click', function() {\r\n  colorSelectionWrapper.style.display = \"none\";\r\n  projectTitleInput.value = '';\r\n  projectInputForm.style.display = 'none';\r\n})\r\n\r\nconst addTaskBtn = document.getElementById('addTaskBtn');\r\nconst taskFormWrapper = document.getElementById('taskFormWrapper');\r\nconst taskForm = document.getElementById('taskForm');\r\nconst cancelTaskBtn = document.getElementById('cancelTaskBtn');\r\nconst taskTitleInput = document.getElementById('taskTitleInput');\r\nconst taskDescription = document.getElementById('taskDescription');\r\nconst dueDate = document.getElementById('dueDate');\r\nconst submitTaskBtn = document.getElementById('submitTaskBtn');\r\n\r\naddTaskBtn.addEventListener('click', function() {\r\n  taskFormWrapper.style.display = \"block\";\r\n})\r\n\r\ncancelTaskBtn.addEventListener('click', function() {\r\n  taskFormWrapper.style.display = \"none\";\r\n  taskTitleInput.value = '';\r\n  taskDescription.value = '';\r\n  dueDate.value = '';\r\n})\r\n\r\nconst projectDropdown = document.getElementById('projectDropdown');\r\n\r\nfor (var i = 0; i < storage.projects.length; i++) {\r\n  var prjOption = document.createElement('option');\r\n  prjOption.innerText = storage.projects[i].title;\r\n  projectDropdown.append(prjOption);\r\n}\r\n\r\nconsole.log(\"option:\", projectDropdown.value);\r\n\r\nsubmitTaskBtn.addEventListener('click', function() {\r\n  if (taskTitleInput.value != '' && dueDate.value != '') {\r\n    var task = new _Logics_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskTitleInput.value,  taskDescription.value, dueDate.value);\r\n\r\n    for (var i = 0; i < storage.projects.length; i++) {\r\n      if (storage.projects[i].title == projectDropdown.value) {\r\n        storage.projects[i].addTask(task);\r\n      }\r\n    }\r\n\r\n    storage.saveProjects();\r\n  } else {\r\n    alert('Please fill in all required fields');\r\n  }\r\n  taskFormWrapper.style.display = \"none\";\r\n  return;\r\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/add_icon.svg":
/*!*********************************!*\
  !*** ./src/assets/add_icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a31034ddc7668247b597.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/add_icon.svg?");

/***/ }),

/***/ "./src/assets/delete_icon.svg":
/*!************************************!*\
  !*** ./src/assets/delete_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eac1a29b0fcadff53187.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/delete_icon.svg?");

/***/ }),

/***/ "./src/assets/edit_icon.svg":
/*!**********************************!*\
  !*** ./src/assets/edit_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb174535b66c89089803.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/edit_icon.svg?");

/***/ }),

/***/ "./src/assets/github-mark/github-mark-white.svg":
/*!******************************************************!*\
  !*** ./src/assets/github-mark/github-mark-white.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97ed8e7eef60d61ca469.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/github-mark/github-mark-white.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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