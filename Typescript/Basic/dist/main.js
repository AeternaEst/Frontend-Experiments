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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generics_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generics/type-guards */ "./src/generics/type-guards.ts");
//import typeGuards from "./types/type-guards";

//import constraints from "./generics/constraints";
//import genericInterface from "./generics/interface";
//import animals from './types/casting';
//import automap from './classes/automap';
//import assertion from './types/assertion';
Object(_generics_type_guards__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/generics/type-guards.ts":
/*!*************************************!*\
  !*** ./src/generics/type-guards.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Bank = /** @class */ (function () {
    function Bank(name, amountOfMoney) {
        this.name = name;
        this.amountOfMoney = amountOfMoney;
    }
    return Bank;
}());
var University = /** @class */ (function () {
    function University(name, address) {
        this.name = name;
        this.address = address;
    }
    return University;
}());
function isOfType(type, property) {
    return type[property] !== undefined;
}
var ofType = function (type, property) { return type[property] !== undefined; };
function genericTypeGuard() {
    var bank = new Bank("Danske Bank", 10000000);
    var university = new University("CBS", "Bredgade 18");
    if (isOfType(bank, "amountOfMoney")) {
        console.log(bank.name + " owns " + bank.amountOfMoney + " amount of money");
    }
    if (ofType(university, "address")) {
        console.log(university.name + " are located on " + university.address);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (genericTypeGuard);


/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/App.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.ts */"./src/App.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpY3MvdHlwZS1ndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsK0NBQStDO0FBQ087QUFDdEQsbURBQW1EO0FBQ25ELHNEQUFzRDtBQUN0RCx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUU1QyxxRUFBZ0IsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSG5CO0FBQUE7SUFDRSxjQUFtQixJQUFZLEVBQVMsYUFBcUI7UUFBMUMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQztJQUNuRSxXQUFDO0FBQUQsQ0FBQztBQUVEO0lBQ0Usb0JBQW1CLElBQVksRUFBUyxPQUFlO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUM3RCxpQkFBQztBQUFELENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBSSxJQUFTLEVBQUUsUUFBaUI7SUFDL0MsT0FBUSxJQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQzdDLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxVQUFJLElBQVMsRUFBRSxRQUFpQixJQUFnQixPQUFDLElBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQW5DLENBQW1DLENBQUM7QUFFbkcsU0FBUyxnQkFBZ0I7SUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBZ0IsQ0FBQztJQUM5RCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFnQixDQUFDO0lBRXZFLElBQUcsUUFBUSxDQUFPLElBQUksRUFBRSxlQUFlLENBQUMsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGNBQVMsSUFBSSxDQUFDLGFBQWEscUJBQWtCLENBQUM7S0FDdkU7SUFFRCxJQUFHLE1BQU0sQ0FBYSxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUU7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxVQUFVLENBQUMsSUFBSSx3QkFBbUIsVUFBVSxDQUFDLE9BQVMsQ0FBQztLQUN2RTtBQUNILENBQUM7QUFFYywrRUFBZ0IsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vaW1wb3J0IHR5cGVHdWFyZHMgZnJvbSBcIi4vdHlwZXMvdHlwZS1ndWFyZHNcIjtcclxuaW1wb3J0IGdlbmVyaWNUeXBlR3VhcmQgZnJvbSBcIi4vZ2VuZXJpY3MvdHlwZS1ndWFyZHNcIjtcclxuLy9pbXBvcnQgY29uc3RyYWludHMgZnJvbSBcIi4vZ2VuZXJpY3MvY29uc3RyYWludHNcIjtcclxuLy9pbXBvcnQgZ2VuZXJpY0ludGVyZmFjZSBmcm9tIFwiLi9nZW5lcmljcy9pbnRlcmZhY2VcIjtcclxuLy9pbXBvcnQgYW5pbWFscyBmcm9tICcuL3R5cGVzL2Nhc3RpbmcnO1xyXG4vL2ltcG9ydCBhdXRvbWFwIGZyb20gJy4vY2xhc3Nlcy9hdXRvbWFwJztcclxuLy9pbXBvcnQgYXNzZXJ0aW9uIGZyb20gJy4vdHlwZXMvYXNzZXJ0aW9uJztcclxuXHJcbmdlbmVyaWNUeXBlR3VhcmQoKTsiLCJcclxuaW50ZXJmYWNlIEluc3RpdHV0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEJhbmsgaW1wbGVtZW50cyBJbnN0aXR1dGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFtb3VudE9mTW9uZXk6IG51bWJlcikge31cclxufVxyXG5cclxuY2xhc3MgVW5pdmVyc2l0eSBpbXBsZW1lbnRzIEluc3RpdHV0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWRkcmVzczogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc09mVHlwZTxUPih0eXBlOiBhbnksIHByb3BlcnR5OiBrZXlvZiBUKTogdHlwZSBpcyBUIHtcclxuICByZXR1cm4gKHR5cGUgYXMgVClbcHJvcGVydHldICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmNvbnN0IG9mVHlwZSA9IDxUPih0eXBlOiBhbnksIHByb3BlcnR5OiBrZXlvZiBUKTogdHlwZSBpcyBUID0+ICh0eXBlIGFzIFQpW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJpY1R5cGVHdWFyZCgpOiB2b2lkIHtcclxuICBjb25zdCBiYW5rID0gbmV3IEJhbmsoXCJEYW5za2UgQmFua1wiLCAxMDAwMDAwMCkgYXMgSW5zdGl0dXRpb247XHJcbiAgY29uc3QgdW5pdmVyc2l0eSA9IG5ldyBVbml2ZXJzaXR5KFwiQ0JTXCIsIFwiQnJlZGdhZGUgMThcIikgYXMgSW5zdGl0dXRpb247XHJcblxyXG4gIGlmKGlzT2ZUeXBlPEJhbms+KGJhbmssIFwiYW1vdW50T2ZNb25leVwiKSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7YmFuay5uYW1lfSBvd25zICR7YmFuay5hbW91bnRPZk1vbmV5fSBhbW91bnQgb2YgbW9uZXlgKVxyXG4gIH1cclxuXHJcbiAgaWYob2ZUeXBlPFVuaXZlcnNpdHk+KHVuaXZlcnNpdHksIFwiYWRkcmVzc1wiKSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7dW5pdmVyc2l0eS5uYW1lfSBhcmUgbG9jYXRlZCBvbiAke3VuaXZlcnNpdHkuYWRkcmVzc31gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJpY1R5cGVHdWFyZDsiXSwic291cmNlUm9vdCI6IiJ9