/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nconst UI = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\nconst POST = __webpack_require__(/*! ./modules/postMethod */ \"./src/js/modules/postMethod.js\");\r\nconst GET = __webpack_require__(/*! ./modules/getMethod */ \"./src/js/modules/getMethod.js\");\r\nconst PUT = __webpack_require__(/*! ./modules/putMethod */ \"./src/js/modules/putMethod.js\");\r\nconst DELETE = __webpack_require__(/*! ./modules/deleteMethod */ \"./src/js/modules/deleteMethod.js\");\r\n\r\nconst root = document.querySelector(\"#root\");\r\nconst url = \"http://localhost:8888/todos\";\r\n\r\nconst {form, screenInput} = UI;\r\n\r\nUI.start();\r\nPOST(form, screenInput, url);\r\n\r\n//(editBtnArray, saveBtnArray, content, isCompleted, url)\r\n\r\nasync function test () {\r\n    await GET(UI, url);\r\n    PUT(\r\n        document.querySelectorAll(\".editBtn\"),\r\n        document.querySelectorAll(\".saveBtn\"),\r\n        document.querySelectorAll(\".listsBlockItemContent\"),\r\n        document.querySelectorAll(\".done\"),\r\n        url\r\n    );\r\n    DELETE(\r\n        document.querySelectorAll(\".removeBtn\"),\r\n        url\r\n    )\r\n}\r\n\r\ntest();\r\n\r\n// .then(() => {\r\n// \tPUT(\r\n// \t\tdocument.querySelectorAll(\".editBtn\"),\r\n// \t\tdocument.querySelectorAll(\".saveBtn\"),\r\n// \t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\r\n// \t\tdocument.querySelectorAll(\".done\"),\r\n// \t\turl\r\n// \t);\r\n// \tDELETE(document.querySelectorAll(\".removeBtn\"), url);\r\n// })\n\n//# sourceURL=webpack://crud/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/deleteMethod.js":
/*!****************************************!*\
  !*** ./src/js/modules/deleteMethod.js ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = function (removeBtn, url) {\r\n\tremoveBtn.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async () => {\r\n\t\t\tconst fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;\r\n\t\t\tbtn.parentElement.parentElement.remove();\r\n\r\n\t\t\tawait fetch(`${url}/${parseInt(fakeID)}`, {\r\n\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t});\r\n\t\t})\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/deleteMethod.js?");

/***/ }),

/***/ "./src/js/modules/getMethod.js":
/*!*************************************!*\
  !*** ./src/js/modules/getMethod.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = async function (ui, url) {\r\n\treturn await fetch(url)\r\n\t.then(data => data.json())\r\n\t.then(data => data.forEach(obj => {\r\n\t\tui.toHTML(obj.id, obj.title, obj.isComplete);\r\n\t}))\r\n\t\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/getMethod.js?");

/***/ }),

/***/ "./src/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./src/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = function (form, input, url) {\r\n    form.addEventListener(\"submit\", async (e) => {\r\n        e.preventDefault();\r\n\r\n        if (input.value.trim() !== \"\") {\r\n            await fetch (url, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    \"content-type\" : \"application/json\"\r\n                },\r\n                body: JSON.stringify({title: input.value.trim(), isComplete: false})\r\n            });\r\n        }\r\n\r\n        e.target.reset();\r\n    });\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/postMethod.js?");

/***/ }),

/***/ "./src/js/modules/putMethod.js":
/*!*************************************!*\
  !*** ./src/js/modules/putMethod.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = function (editBtnArray, saveBtnArray, content, isCompleted, url) {\r\n\teditBtnArray.forEach((editBtn, index) => {\r\n\t\tlet isComp = isCompleted[index];\r\n\t\tconst fakeID = parseInt(content[index].children[0].textContent);\r\n\t\tconst input = content[index].children[1];\r\n\t\t\r\n\t\teditBtn.addEventListener(\"click\", () => {\t\t\t\r\n\t\t\teditBtn.style.display = \"none\";\r\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\r\n\t\t\tinput.classList.add(\"edit\");\r\n\t\t\tinput.removeAttribute(\"readonly\");\t\t\t\r\n\r\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async () => {\r\n\t\t\t\tupdatePut(input, isComp, fakeID);\r\n\t\t\t})\t\t\t\r\n\t\t});\r\n\r\n\t\tisCompleted[index].addEventListener(\"change\", async () => {\r\n\t\t\tupdatePut(input, isComp, fakeID);\r\n\t\t});\r\n\r\n\t\tasync function updatePut(input, isComp, fakeID) {\r\n\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\tmethod: \"PUT\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\" : \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({title: input.value.trim(), isComplete: isComp.checked ? true : false })\r\n\t\t\t})\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/putMethod.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle: document.createElement(\"p\"),\r\n\tform: document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\r\n\telementOptions() {\r\n\t\tthis.title.textContent = \"CRUD\";\r\n\t\tthis.subTitle.textContent = \"Asyn Application\"\r\n\r\n\t\tthis.form.id = \"app-form\";\r\n\t\tthis.screenBlock.id = \"screenBlock\";\r\n\t\tthis.screenInput.type = \"text\";\r\n\t\tthis.screenInput.placeholder = \"Type here...\";\r\n\t\tthis.screenAddBtn.textContent = \"ADD\";\r\n\t\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\t\tthis.listsBlock.id = \"listBlock\";\r\n\t},\r\n\r\n\tappendElements() {\r\n\t\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\r\n\t\tthis.form.append(this.screenBlock);\r\n\t\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n\t},\r\n\r\n\ttoHTML(id, value, state = false) {\r\n\t\tthis.listsBlock.innerHTML += `\r\n\t\t\t<div class=\"listsBlockItem\">\r\n\t\t\t\t<div class=\"listsBlockItemContent\">\r\n\t\t\t\t\t<span>${id}</span>\r\n\t\t\t\t\t<input type=\"text\" value=\"${value}\" ${state ? \"\" : \"readonly\"}>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t<button class=\"removeBtn\">Remove</button>\r\n\t\t\t\t\t<button class=\"editBtn\">Edit</button>\r\n\t\t\t\t\t<button class=\"saveBtn\">Save</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"done\" name=\"done\" class=\"done\" ${state ? \"checked\" : \"\"}>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t},\r\n\r\n\tstart() {\r\n\t\tthis.elementOptions();\r\n\t\tthis.appendElements();\r\n\t}\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;