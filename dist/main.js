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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initializeWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initializeWebsite */ \"./src/modules/initializeWebsite.js\");\n\r\n\r\nconst init = () => {\r\n    (0,_modules_initializeWebsite__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\r\n    const home = document.createElement('div');\r\n    home.classList.add('home');\r\n\r\n    for (let i = 1; i <= 5; i++) {\r\n        const img = document.createElement('img');\r\n        img.classList.add('sliderImg');\r\n        img.setAttribute('src', `./images/slide${i}.jpg`);\r\n        img.setAttribute('id', `img${i}`);\r\n        home.appendChild(img);\r\n    }\r\n\r\n    const paragraph = document.createElement('p');\r\n    paragraph.classList.add('paragraph');\r\n    paragraph.textContent = `\r\n    After six successful years in New York, chef Tom Colicchio brought Craft’s pioneering approach to the West Coast. Century City is now where you can enjoy Tom Colicchio’s signature ‘Whats Local Is Best’ cooking style and our ‘Make People Happy’ brand of hospitality. \r\n    \r\n    Craft’s emphasis on seasonal dining and warm hospitality has always been a natural West Coast fit and can now be enjoyed on our private patio or back in our Main Dining Room for safety-conscious dinner. CLA To-Go is back offering pickup & local delivery to help you fill your home tables with all your Tom Colicchio favorites.`;\r\n\r\n\r\n    home.appendChild(paragraph);\r\n\r\n    return home;\r\n}\r\n\r\nconst loadHome = () => {\r\n    const main = document.querySelector('#main');\r\n    main.textContent = '';\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initializeWebsite.js":
/*!******************************************!*\
  !*** ./src/modules/initializeWebsite.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    const logo = document.createElement('img');\r\n    logo.classList.add('logo');\r\n    logo.src = './images/logo.png'\r\n\r\n    header.appendChild(logo);\r\n    header.appendChild(createNav());\r\n\r\n    return header;\r\n}\r\n\r\nconst setActiveButton = (button) => {\r\n    const buttons = document.querySelectorAll('.button-nav');\r\n    buttons.forEach((button) => {\r\n        if (button !== undefined) {\r\n            button.classList.remove('active');\r\n        }\r\n    });\r\n    button.classList.add('active');\r\n}\r\n\r\nconst createNav = () => {\r\n    const nav = document.createElement('nav');\r\n\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.classList.add('button-nav');\r\n    homeBtn.classList.add('active');\r\n    homeBtn.textContent = 'Home';\r\n    homeBtn.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('active')) return;\r\n        setActiveButton(homeBtn);\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    })\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.classList.add('button-nav');\r\n    menuBtn.textContent = 'Menu';\r\n    menuBtn.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('active')) return;\r\n        setActiveButton(menuBtn);\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    })\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.classList.add('button-nav');\r\n    contactBtn.textContent = 'Contact';\r\n    contactBtn.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('active')) return;\r\n        setActiveButton(contactBtn);\r\n        // contactBtn();\r\n    })\r\n\r\n    nav.appendChild(homeBtn);\r\n    nav.appendChild(menuBtn);\r\n    nav.appendChild(contactBtn);\r\n\r\n    return nav;\r\n}\r\n\r\nconst createMain = () => {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n    main.setAttribute('id', 'main');\r\n\r\n    return main;\r\n}\r\n\r\nconst createFooter = () => {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n\r\n    const copyright = document.createElement('p')\r\n    copyright.textContent = 'Copyright © 2021 Me'\r\n\r\n    const githubLink = document.createElement('a');\r\n    githubLink.href = 'https://github.com/siIas';\r\n\r\n    const githubIcon = document.createElement('i');\r\n    githubIcon.classList.add('fab');\r\n    githubIcon.classList.add('fa-github');\r\n\r\n    githubLink.appendChild(githubIcon);\r\n    footer.appendChild(copyright);\r\n    footer.appendChild(githubLink);\r\n\r\n    return footer;\r\n}\r\n\r\nconst initializeWebsite = () => {\r\n    const content = document.querySelector('#content');\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initializeWebsite.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuItem = (title, description, money) => {\r\n    const menuItem = document.createElement('div');\r\n    menuItem.classList.add('menu-item');\r\n\r\n    const foodName = document.createElement('h2');\r\n    foodName.textContent = title;\r\n\r\n    const foodDescription = document.createElement('p');\r\n    foodDescription.textContent = description;\r\n\r\n    const price = document.createElement('p');\r\n    price.textContent = money;\r\n\r\n    menuItem.appendChild(foodName);\r\n    menuItem.appendChild(foodDescription);\r\n    menuItem.appendChild(price);\r\n\r\n    return menuItem;\r\n}\r\n\r\nconst createMenu = () => {\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('menu');\r\n\r\n    menu.appendChild(createMenuItem('MARKET GREENS', 'Tomatillo, Pickled Onion', '$18'));\r\n\r\n    menu.appendChild(createMenuItem('WILD ARUGULA SALAD', 'Lemon Confit, Pine Nuts', '$18'));\r\n\r\n    menu.appendChild(createMenuItem('SUMMER MELON', 'Feta, Golden Raisin', '$20'));\r\n\r\n    menu.appendChild(createMenuItem('AHI TUNA CRUDO', 'Jalapeño Ponzu, Crispy Rice Noodle', '$22'));\r\n\r\n    menu.appendChild(createMenuItem('DUNGENESS CRAB', 'Avocado Mousse, Smoked Salmon Roe', '$24'));\r\n\r\n    menu.appendChild(createMenuItem('PORK BELLY', 'Date, Peach', '$22'));\r\n\r\n    return menu;\r\n}\r\n\r\nconst loadMenu = () => {\r\n    const main = document.querySelector('#main');\r\n    main.textContent = '';\r\n    main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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