/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/type-guards */ \"./src/types/type-guards.ts\");\n\r\nObject(_types_type_guards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/types/type-guards.ts":
/*!**********************************!*\
  !*** ./src/types/type-guards.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Orc = /** @class */ (function () {\r\n    function Orc(name, hitpoints, damage) {\r\n        this.name = name;\r\n        this.hitpoints = hitpoints;\r\n        this.damage = damage;\r\n    }\r\n    Orc.prototype.attack = function () {\r\n        console.log(this.name + \" attacks for \" + this.damage);\r\n    };\r\n    return Orc;\r\n}());\r\nvar Dragon = /** @class */ (function () {\r\n    function Dragon(name, hitpoints, damage) {\r\n        this.name = name;\r\n        this.hitpoints = hitpoints;\r\n        this.damage = damage;\r\n    }\r\n    Dragon.prototype.attack = function () {\r\n        console.log(this.name + \" attacks for \" + this.damage);\r\n    };\r\n    Dragon.prototype.breatheFire = function () {\r\n        console.log(this.name + \" does a fire breath attack\");\r\n    };\r\n    return Dragon;\r\n}());\r\nfunction isDragon(monster) {\r\n    return monster.breatheFire !== undefined;\r\n}\r\nvar MonsterController = /** @class */ (function () {\r\n    function MonsterController() {\r\n        this.monsters = [];\r\n    }\r\n    MonsterController.prototype.addMonster = function (monster) {\r\n        this.monsters.push(monster);\r\n    };\r\n    MonsterController.prototype.monsterAttacks = function () {\r\n        this.monsters.forEach(function (monster) {\r\n            monster.attack();\r\n            if (isDragon(monster)) {\r\n                monster.breatheFire();\r\n            }\r\n        });\r\n    };\r\n    return MonsterController;\r\n}());\r\nfunction typeGuards() {\r\n    var orc = new Orc(\"Orc\", 10, 3);\r\n    var dragon = new Dragon(\"Dragon\", 100, 15);\r\n    var controller = new MonsterController();\r\n    controller.addMonster(orc);\r\n    controller.addMonster(dragon);\r\n    controller.monsterAttacks();\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeGuards);\r\n\n\n//# sourceURL=webpack:///./src/types/type-guards.ts?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/App.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/App.ts */\"./src/App.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/App.ts?");

/***/ })

/******/ });