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
/* harmony import */ var _mixins_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/mixins */ "./src/mixins/mixins.ts");
//import useTypeDeclarations from "./type-declarations/typeDeclarations";
//import run from "./types/intersection-and-unions";

//import typeChecking from "./types/typing-checking";
//import indexedAccessTypes from "./access-types/indexed-access-type";
//import interfaceAppend from "./interfaces/interface-append";
//import typeGuards from "./types/type-guards";
//import genericTypeGuard from "./generics/type-guards";
//import constraints from "./generics/constraints";
//import genericInterface from "./generics/interface";
//import animals from './types/casting';
//import automap from './classes/automap';
//import assertion from './types/assertion';
Object(_mixins_mixins__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/mixins/mixins.ts":
/*!******************************!*\
  !*** ./src/mixins/mixins.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Base function for implementing the mixin pattern
 * @param derivedCtor This is your subclass implementing the base classes
 * @param baseCtors This is an array of your base classes with the properties you cant to transfer
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
var Print = /** @class */ (function () {
    function Print() {
    }
    Print.prototype.print = function () {
        console.log("printing...");
    };
    return Print;
}());
var Copy = /** @class */ (function () {
    function Copy() {
    }
    Copy.prototype.copy = function () {
        console.log("copying...");
    };
    return Copy;
}());
var Scan = /** @class */ (function () {
    function Scan() {
    }
    Scan.prototype.scan = function () {
        console.log("scanning...");
    };
    return Scan;
}());
var SuperPrinter = /** @class */ (function () {
    function SuperPrinter() {
    }
    return SuperPrinter;
}());
var BasicPrinter = /** @class */ (function () {
    function BasicPrinter() {
    }
    return BasicPrinter;
}());
function mixins() {
    applyMixins(SuperPrinter, [Print, Copy, Scan]);
    applyMixins(BasicPrinter, [Print]);
    var superPrinter = new SuperPrinter();
    var basicPrinter = new BasicPrinter();
    superPrinter.copy();
    superPrinter.scan();
    superPrinter.print();
    basicPrinter.print();
}
/* harmony default export */ __webpack_exports__["default"] = (mixins);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL21peGlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSx5RUFBeUU7QUFDekUsb0RBQW9EO0FBQ2Y7QUFDckMscURBQXFEO0FBQ3JELHNFQUFzRTtBQUN0RSw4REFBOEQ7QUFDOUQsK0NBQStDO0FBQy9DLHdEQUF3RDtBQUN4RCxtREFBbUQ7QUFDbkQsc0RBQXNEO0FBQ3RELHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsNENBQTRDO0FBRTVDLDhEQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JUO0FBQUE7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLFdBQWdCLEVBQUUsU0FBZ0I7SUFDckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtRQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ3pELE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEO0lBQUE7SUFJQSxDQUFDO0lBSEMscUJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIQyxtQkFBSSxHQUFKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUhDLG1CQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFBaUQsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQztBQUlsRDtJQUFBO0lBQXFDLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFJdEMsU0FBUyxNQUFNO0lBQ2IsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuQyxJQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3hDLElBQU0sWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFeEMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFYyxxRUFBTSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy9pbXBvcnQgdXNlVHlwZURlY2xhcmF0aW9ucyBmcm9tIFwiLi90eXBlLWRlY2xhcmF0aW9ucy90eXBlRGVjbGFyYXRpb25zXCI7XHJcbi8vaW1wb3J0IHJ1biBmcm9tIFwiLi90eXBlcy9pbnRlcnNlY3Rpb24tYW5kLXVuaW9uc1wiO1xyXG5pbXBvcnQgbWl4aW5zIGZyb20gXCIuL21peGlucy9taXhpbnNcIjtcclxuLy9pbXBvcnQgdHlwZUNoZWNraW5nIGZyb20gXCIuL3R5cGVzL3R5cGluZy1jaGVja2luZ1wiO1xyXG4vL2ltcG9ydCBpbmRleGVkQWNjZXNzVHlwZXMgZnJvbSBcIi4vYWNjZXNzLXR5cGVzL2luZGV4ZWQtYWNjZXNzLXR5cGVcIjtcclxuLy9pbXBvcnQgaW50ZXJmYWNlQXBwZW5kIGZyb20gXCIuL2ludGVyZmFjZXMvaW50ZXJmYWNlLWFwcGVuZFwiO1xyXG4vL2ltcG9ydCB0eXBlR3VhcmRzIGZyb20gXCIuL3R5cGVzL3R5cGUtZ3VhcmRzXCI7XHJcbi8vaW1wb3J0IGdlbmVyaWNUeXBlR3VhcmQgZnJvbSBcIi4vZ2VuZXJpY3MvdHlwZS1ndWFyZHNcIjtcclxuLy9pbXBvcnQgY29uc3RyYWludHMgZnJvbSBcIi4vZ2VuZXJpY3MvY29uc3RyYWludHNcIjtcclxuLy9pbXBvcnQgZ2VuZXJpY0ludGVyZmFjZSBmcm9tIFwiLi9nZW5lcmljcy9pbnRlcmZhY2VcIjtcclxuLy9pbXBvcnQgYW5pbWFscyBmcm9tICcuL3R5cGVzL2Nhc3RpbmcnO1xyXG4vL2ltcG9ydCBhdXRvbWFwIGZyb20gJy4vY2xhc3Nlcy9hdXRvbWFwJztcclxuLy9pbXBvcnQgYXNzZXJ0aW9uIGZyb20gJy4vdHlwZXMvYXNzZXJ0aW9uJztcclxuXHJcbm1peGlucygpOyIsIlxyXG4vKipcclxuICogQmFzZSBmdW5jdGlvbiBmb3IgaW1wbGVtZW50aW5nIHRoZSBtaXhpbiBwYXR0ZXJuXHJcbiAqIEBwYXJhbSBkZXJpdmVkQ3RvciBUaGlzIGlzIHlvdXIgc3ViY2xhc3MgaW1wbGVtZW50aW5nIHRoZSBiYXNlIGNsYXNzZXNcclxuICogQHBhcmFtIGJhc2VDdG9ycyBUaGlzIGlzIGFuIGFycmF5IG9mIHlvdXIgYmFzZSBjbGFzc2VzIHdpdGggdGhlIHByb3BlcnRpZXMgeW91IGNhbnQgdG8gdHJhbnNmZXJcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10pOiB2b2lkIHtcclxuICBiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXJpdmVkQ3Rvci5wcm90b3R5cGUsIG5hbWUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY2xhc3MgUHJpbnQge1xyXG4gIHByaW50KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJwcmludGluZy4uLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENvcHkge1xyXG4gIGNvcHkoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvcHlpbmcuLi5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTY2FuIHtcclxuICBzY2FuKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJzY2FubmluZy4uLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFN1cGVyUHJpbnRlciBpbXBsZW1lbnRzIFByaW50LCBDb3B5LCBTY2FuIHt9XHJcblxyXG5pbnRlcmZhY2UgU3VwZXJQcmludGVyIGV4dGVuZHMgUHJpbnQsIENvcHksIFNjYW4ge31cclxuXHJcbmNsYXNzIEJhc2ljUHJpbnRlciBpbXBsZW1lbnRzIFByaW50IHt9XHJcblxyXG5pbnRlcmZhY2UgQmFzaWNQcmludGVyIGV4dGVuZHMgUHJpbnQsIENvcHkge31cclxuXHJcbmZ1bmN0aW9uIG1peGlucygpOiB2b2lkIHtcclxuICBhcHBseU1peGlucyhTdXBlclByaW50ZXIsIFtQcmludCwgQ29weSwgU2Nhbl0pO1xyXG4gIGFwcGx5TWl4aW5zKEJhc2ljUHJpbnRlciwgW1ByaW50XSk7XHJcblxyXG4gIGNvbnN0IHN1cGVyUHJpbnRlciA9IG5ldyBTdXBlclByaW50ZXIoKTtcclxuICBjb25zdCBiYXNpY1ByaW50ZXIgPSBuZXcgQmFzaWNQcmludGVyKCk7XHJcblxyXG4gIHN1cGVyUHJpbnRlci5jb3B5KCk7XHJcbiAgc3VwZXJQcmludGVyLnNjYW4oKTtcclxuICBzdXBlclByaW50ZXIucHJpbnQoKTtcclxuICBiYXNpY1ByaW50ZXIucHJpbnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zOyJdLCJzb3VyY2VSb290IjoiIn0=