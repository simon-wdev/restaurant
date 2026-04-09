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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/IosevkaCharon-Regular.ttf */ \"./src/fonts/IosevkaCharon-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/IosevkaCharon-Bold.ttf */ \"./src/fonts/IosevkaCharon-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n@font-face {\n    font-family: 'Iosevka';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\n@font-face {\n    font-family: 'Iosevka';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n\n\n:root{\n    --brown: #A47251;\n    --light-brown: #DD9E59;\n    --beige: #F0D8A1;\n    --mint: #DCF0C3;\n}\n\nbody{\n    font-family: 'Iosevka', monospace;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nnav{\n    display: flex;\n    justify-content: center;\n    gap: 5%;\n    padding-top: 2%;\n    background-color: var(--beige);\n}\n\nbutton{\n    font-weight: bold;\n    font-size: 1.8em;\n    font-family: 'Iosevka', monospace; \n    color: white;\n    border: none;\n    background: none;\n    cursor: pointer;\n    transition: background 0.3s ease;\n}\n\nbutton:hover{\n    color: var(--light-brown);\n}\n\n.home-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 3%;\n}\n\n.body-wrapper{\n    display: flex;\n    gap: 50px;\n    margin-top: 3%;\n}\n\n.body-wrapper p{\n    width: 30vw;\n    font-size: 1.5em;\n    font-weight: 200;\n    margin: 0;\n}\n\n.body-wrapper img{\n    max-width: 600px;\n    width: 90%;\n    min-width: 300px;\n    border-radius: 8px;\n    box-shadow: 2px 2px 5px black;\n    max-width: 100%;\n    height: auto;\n    display: block;\n}\n\n.text-container{\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    line-height: 1.5;\n}\n\n.text-container button{\n    background-color: var(--beige);\n    border: solid var(--light-brown) 1px;\n    min-width: 100px;\n    max-width: 200px;\n    margin-top: 20px;\n    padding: 10px;\n    border-radius: 10px;\n    align-self: flex-end;\n    box-shadow: 2px 2px 5px black;\n}\n\n.menu-wrapper{\n    display:flex;\n    width: 95%;\n    margin: 0 auto;\n    flex-wrap: wrap;\n    flex: 1;\n    gap: 20px;\n    min-width: 0;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    box-sizing: border-box;\n}\n\n.menu-wrapper img{\n    max-width: 300px;\n    width: 100%;\n    min-width: 150px;\n    border-radius: 20%;\n    min-width: 100px;\n    height: auto;\n    display: block;\n    flex-shrink: 0;\n}\n\n.dish-card{\n    display: flex;\n    border: black solid 2px;\n    width: 90%;\n    max-width: 600px;\n    min-width: 300px;\n    padding: 20px;\n    gap: 20px;\n    border-radius: 10px;\n    font-size: 1.3em;\n    box-shadow: 2px 2px 10px;\n}\n\n.price{\n    text-align: right;\n    font-weight: bold;\n    font-size: 1.5em;\n}\n\n.about-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.5em;\n}\n\n.about-wrapper p{\n    max-width: 800px;\n    width: 90%;\n    min-width: 300px;\n    line-height: 1.5;\n}\n\n\n.info-wrapper{\n    display:flex;\n    flex-direction: column;\n    align-items: stretch;\n    border: solid black 2px;\n    max-width: 600px;\n    width: 90%;\n    min-width: 200px;\n    background-color: var(--mint);\n    box-shadow: 2px 2px 10px black;\n    margin-top: 2em;\n    padding: 10px;\n}\n\n.info-row{\n    display: flex;\n    text-align: right;\n}\n\n.info-row p {\n    margin: 0;\n}\n\n\n@media (max-width: 600px) {\n    .body-wrapper{\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .body-wrapper p{\n        width: 90%;\n        margin: 10px;\n    }\n\n    .text-container button{\n        align-self: center;\n        margin-bottom: 20px;\n    }\n\n    .menu-wrapper{\n        align-items: center;\n    }\n\n    .dish-card {\n        flex-direction: column; \n        align-items: center; \n        text-align: center;\n    }\n\n    .price {\n        text-align: center;   \n    }\n\n    .about-wrapper{\n        margin-bottom: 10px;\n    }\n\n    .info-row{\n        flex-direction: column;\n        text-align: center;\n        align-items: center;\n    }\n\n    .info-row p {\n        text-align: center;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/BBQ.jpg"
/*!*********************!*\
  !*** ./src/BBQ.jpg ***!
  \*********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b5bd8817c23a680ce0a8.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/BBQ.jpg?\n}");

/***/ },

/***/ "./src/OG.jpg"
/*!********************!*\
  !*** ./src/OG.jpg ***!
  \********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"974cfcb5fa74e5292d03.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/OG.jpg?\n}");

/***/ },

/***/ "./src/fonts/IosevkaCharon-Bold.ttf"
/*!******************************************!*\
  !*** ./src/fonts/IosevkaCharon-Bold.ttf ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5fca78f0dba6454560ad.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/fonts/IosevkaCharon-Bold.ttf?\n}");

/***/ },

/***/ "./src/fonts/IosevkaCharon-Regular.ttf"
/*!*********************************************!*\
  !*** ./src/fonts/IosevkaCharon-Regular.ttf ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"aa3b2a5b73b80b028681.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/fonts/IosevkaCharon-Regular.ttf?\n}");

/***/ },

/***/ "./src/homeJpg.jpg"
/*!*************************!*\
  !*** ./src/homeJpg.jpg ***!
  \*************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4fafba39d5f4b8ca39e6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/homeJpg.jpg?\n}");

/***/ },

/***/ "./src/vegan.jpg"
/*!***********************!*\
  !*** ./src/vegan.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1f8c18109af4814429c3.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/vegan.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildAbout)\n/* harmony export */ });\nconst wrapper = document.createElement(\"div\");\nwrapper.classList.add(\"about-wrapper\");\n\nconst header = document.createElement(\"h1\");\nheader.textContent = \"Über uns:\";\nheader.style.fontWeight = \"bold\";\n\nconst description = document.createElement(\"p\");\ndescription.textContent = \"Das Patty Project startete nicht in der Küche sondern als Fullstack Projekt. Zwischen normalem Schulwahnsinn\" +\n                          \" und der Liebe zu Burgern war es unser Traum verschiedene Zutaten in Module zu bündeln, sodass die Wartezeit für Kunden minimal bleibt.\" +\n                          \" Seit 2025 machen wir nun Burger im 'Webpack-Format' und freuen uns auf euren Besuch. Kommt doch mal vorbei!\"\n\nconst infoWrapper = document.createElement(\"div\");\ninfoWrapper.classList.add(\"info-wrapper\");\n\n\nfunction infoPairs(label, text){\n    const infoRow = document.createElement(\"div\");                  \n    const strong = document.createElement(\"strong\"); //strong ist ein neuer absatz, strong müsste innerhalb eine paragraph appended werden\n    const p = document.createElement(\"p\");\n    strong.textContent = `${label}: `;\n    p.textContent = text;\n\n    infoRow.classList.add(\"info-row\")\n\n    infoRow.append(strong, p)\n    return infoRow;\n}\n\ninfoWrapper.append(\n    infoPairs(\"Montag\", \"8 - 22 Uhr\"),\n    infoPairs(\"Dienstag\", \"Ruhetag\"),\n    infoPairs(\"Mittwoch\", \"8 - 22 Uhr\"),\n    infoPairs(\"Donnerstag\", \"8 - 22 Uhr\"),\n    infoPairs(\"Freitag\", \"8 - 22 Uhr\"),\n    infoPairs(\"Samstag\", \"8 - 22 Uhr\"),\n    infoPairs(\"Sonntag\", \"8 - 22 Uhr\"),\n);\n\nfunction buildAbout(){\n    wrapper.append(header, description, infoWrapper);\n\n    return wrapper;\n}\n\n//# sourceURL=webpack://restaurant/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHomepage)\n/* harmony export */ });\n/* harmony import */ var _homeJpg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeJpg.jpg */ \"./src/homeJpg.jpg\");\n\n//Homepage\n\n\nfunction buildHomepage(){\n    const wrapper = document.createElement(\"div\")\n    const header = document.createElement(\"h1\");\n    const bodywrapper = document.createElement(\"div\")\n    const img = document.createElement(\"img\");\n    const textContainer = document.createElement(\"div\");\n    const intro = document.createElement(\"p\");\n    const text = document.createElement(\"p\");\n    const button = document.createElement(\"button\")\n\n    bodywrapper.classList.add(\"body-wrapper\")\n    textContainer.classList.add(\"text-container\")\n    wrapper.classList.add(\"home-wrapper\")\n    button.classList.add(\"call-button\")\n    \n    img.src = _homeJpg_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Frau die ein Tablett mit Burgern in der Hand hält.\"\n    \n    header.textContent = \"The Patty Project\";\n    intro.textContent = \"Vergiss labberige Mensa-Patties. Wir bringen das Grill-Feeling direkt in dein Viertel. Handgemacht, frisch und mit der Extraportion Liebe (und Käse) zubereitet. Dein Hunger hat endlich einen Endgegner gefunden!\";\n    text.textContent = \"Freu dich im 'Patty Project' auf reichlich Käse und frische Zutaten. Alle unsere Dip's sind Hausgemacht und frisch!\"\n    button.textContent = \"Zum Menü!\"\n\n    textContainer.append(intro, text, button);\n    bodywrapper.append(img, textContainer)\n    wrapper.append(header, bodywrapper);\n    \n    return wrapper\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n\nconst container = document.querySelector(\".main-content\");\n\nfunction buildPage(buildFunction){\n    container.innerHTML = \"\";\n    container.appendChild(buildFunction());\n}\n\nclass Events{\n    static listener(){\n        const home = document.querySelector(\".home\");\n        const menu = document.querySelector(\".menu\");\n        const about = document.querySelector(\".about\");\n        const call = document.querySelector(\".call-button\")\n\n\n        home.addEventListener(\"click\", function(){\n            buildPage(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        })\n\n        menu.addEventListener(\"click\", function(){\n            buildPage(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        })\n\n        container.addEventListener(\"click\", function(e){\n            if (e.target.classList.contains(\"call-button\")){\n                buildPage(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            }\n        })\n\n\n        about.addEventListener(\"click\", function(){\n            buildPage(_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        })\n    }\n}\n\nbuildPage(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nEvents.listener();\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _BBQ_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BBQ.jpg */ \"./src/BBQ.jpg\");\n/* harmony import */ var _OG_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OG.jpg */ \"./src/OG.jpg\");\n/* harmony import */ var _vegan_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vegan.jpg */ \"./src/vegan.jpg\");\n\n\n\n\n\nconst dishes = [];\n\nconst dishCard = (name, description, price, imgSrc) => {\n    return dishes.push({name, description, price, imgSrc});\n}\n\nconst ogBurger = dishCard(\"The OG Burger\", \"80g saftiges Rindfleisch, Cheddar, knackiger Lollo Bionda, hausgemachte Pickles und unsere geheime Classic-Sauce.\", \"9.50€\", _OG_jpg__WEBPACK_IMPORTED_MODULE_1__)\nconst bbqBurger = dishCard(\"BBQ Beast\", \"Rindfleisch trifft auf krossen Bacon, Röstzwiebeln und eine rauchige Whiskey-BBQ-Sauce. Nichts für schwache Nerven!\", \"11,50€\", _BBQ_jpg__WEBPACK_IMPORTED_MODULE_0__)\nconst veganBurger = dishCard(\"Green Garden (V)\", \"Hausgemachtes Kichererbsen-Walnuss-Patty mit Avocado-Creme, Grillpaprika und frischem Rucola.\", \"10,50€\", _vegan_jpg__WEBPACK_IMPORTED_MODULE_2__)\n\nfunction buildMenu(){\n    const menuWrapper = document.createElement(\"div\");\n    menuWrapper.classList.add(\"menu-wrapper\")\n\n\n    dishes.forEach((dish) => {\n        const dishCard = document.createElement(\"div\");\n        const dishText = document.createElement(\"div\");\n        const dishImg = document.createElement(\"img\");\n        const name = document.createElement(\"h2\");\n        const description = document.createElement(\"p\");\n        const price = document.createElement(\"p\");\n\n        dishCard.classList.add(\"dish-card\");\n        price.classList.add(\"price\")\n\n        name.textContent = dish.name;\n        description.textContent = dish.description;\n        price.textContent = dish.price;\n\n        dishImg.src = dish.imgSrc;\n        dishImg.alt = \"Bild des Gerichts\"\n\n        dishText.append(name, description, price)\n        dishCard.append(dishImg, dishText);\n        menuWrapper.append(dishCard);\n    });\n        return menuWrapper;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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