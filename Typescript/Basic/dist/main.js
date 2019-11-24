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
/* harmony import */ var _types_intersection_and_unions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/intersection-and-unions */ "./src/types/intersection-and-unions.ts");
//import useTypeDeclarations from "./type-declarations/typeDeclarations";

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
Object(_types_intersection_and_unions__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/generics/type-guards.ts":
/*!*************************************!*\
  !*** ./src/generics/type-guards.ts ***!
  \*************************************/
/*! exports provided: isOfType, ofType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOfType", function() { return isOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofType", function() { return ofType; });
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

/***/ "./src/types/intersection-and-unions.ts":
/*!**********************************************!*\
  !*** ./src/types/intersection-and-unions.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generics_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generics/type-guards */ "./src/generics/type-guards.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Loggable = /** @class */ (function () {
    function Loggable(instanceId) {
        this.instanceId = instanceId;
    }
    Loggable.prototype.print = function () {
        for (var key in this) {
            var value = this[key];
            if (typeof (value) !== "function") {
                console.log(value);
            }
        }
    };
    return Loggable;
}());
function union(param) {
    if (Object(_generics_type_guards__WEBPACK_IMPORTED_MODULE_0__["isOfType"])(param, "job")) {
        console.log("My name is " + param.name + ", i am " + param.age + " years old and i work as a " + param.job);
    }
    if (param instanceof (Loggable)) {
        param.print();
    }
}
function intersection(human, loggable) {
    var intersectionType = __assign(__assign(__assign({}, human), loggable), { print: loggable.print });
    return intersectionType;
}
function run() {
    var human = {
        name: "Spartacus",
        age: 35,
        job: "gladiator"
    };
    var loggable = new Loggable("instance197456");
    union(human);
    union(loggable);
    var combined = intersection(human, loggable);
    console.log(combined.job);
    combined.print();
}
/* harmony default export */ __webpack_exports__["default"] = (run);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpY3MvdHlwZS1ndWFyZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2ludGVyc2VjdGlvbi1hbmQtdW5pb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBLHlFQUF5RTtBQUN2QjtBQUNsRCxxREFBcUQ7QUFDckQsc0VBQXNFO0FBQ3RFLDhEQUE4RDtBQUM5RCwrQ0FBK0M7QUFDL0Msd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRCxzREFBc0Q7QUFDdEQsd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFFNUMsOEVBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUk47QUFBQTtBQUFBO0FBQUE7SUFDRSxjQUFtQixJQUFZLEVBQVMsYUFBcUI7UUFBMUMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQztJQUNuRSxXQUFDO0FBQUQsQ0FBQztBQUVEO0lBQ0Usb0JBQW1CLElBQVksRUFBUyxPQUFlO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUM3RCxpQkFBQztBQUFELENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBSSxJQUFTLEVBQUUsUUFBaUI7SUFDdEQsT0FBUSxJQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQzdDLENBQUM7QUFFTSxJQUFNLE1BQU0sR0FBRyxVQUFJLElBQVMsRUFBRSxRQUFpQixJQUFnQixPQUFDLElBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQW5DLENBQW1DLENBQUM7QUFFMUcsU0FBUyxnQkFBZ0I7SUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBZ0IsQ0FBQztJQUM5RCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFnQixDQUFDO0lBRXZFLElBQUcsUUFBUSxDQUFPLElBQUksRUFBRSxlQUFlLENBQUMsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGNBQVMsSUFBSSxDQUFDLGFBQWEscUJBQWtCLENBQUM7S0FDdkU7SUFFRCxJQUFHLE1BQU0sQ0FBYSxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUU7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBSSxVQUFVLENBQUMsSUFBSSx3QkFBbUIsVUFBVSxDQUFDLE9BQVMsQ0FBQztLQUN2RTtBQUNILENBQUM7QUFFYywrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ21CO0FBU25EO0lBRUUsa0JBQW1CLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7SUFBRyxDQUFDO0lBRXpDLHdCQUFLLEdBQUw7UUFDRSxLQUFJLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBRyxPQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUF1QjtJQUNwQyxJQUFHLHNFQUFRLENBQVEsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsS0FBSyxDQUFDLElBQUksZUFBVSxLQUFLLENBQUMsR0FBRyxtQ0FBOEIsS0FBSyxDQUFDLEdBQUssQ0FBQyxDQUFDO0tBQ25HO0lBRUQsSUFBRyxLQUFLLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUM5QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZjtBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFZLEVBQUUsUUFBa0I7SUFDcEQsSUFBTSxnQkFBZ0Isa0NBQ2pCLEtBQUssR0FDTCxRQUFRLEtBQ1gsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQ3RCLENBQUM7SUFHRixPQUFPLGdCQUFnQixDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLEdBQUc7SUFDVixJQUFNLEtBQUssR0FBVTtRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxXQUFXO0tBQ2pCO0lBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVoRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDYixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFaEIsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVjLGtFQUFHLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL2ltcG9ydCB1c2VUeXBlRGVjbGFyYXRpb25zIGZyb20gXCIuL3R5cGUtZGVjbGFyYXRpb25zL3R5cGVEZWNsYXJhdGlvbnNcIjtcclxuaW1wb3J0IHJ1biBmcm9tIFwiLi90eXBlcy9pbnRlcnNlY3Rpb24tYW5kLXVuaW9uc1wiO1xyXG4vL2ltcG9ydCB0eXBlQ2hlY2tpbmcgZnJvbSBcIi4vdHlwZXMvdHlwaW5nLWNoZWNraW5nXCI7XHJcbi8vaW1wb3J0IGluZGV4ZWRBY2Nlc3NUeXBlcyBmcm9tIFwiLi9hY2Nlc3MtdHlwZXMvaW5kZXhlZC1hY2Nlc3MtdHlwZVwiO1xyXG4vL2ltcG9ydCBpbnRlcmZhY2VBcHBlbmQgZnJvbSBcIi4vaW50ZXJmYWNlcy9pbnRlcmZhY2UtYXBwZW5kXCI7XHJcbi8vaW1wb3J0IHR5cGVHdWFyZHMgZnJvbSBcIi4vdHlwZXMvdHlwZS1ndWFyZHNcIjtcclxuLy9pbXBvcnQgZ2VuZXJpY1R5cGVHdWFyZCBmcm9tIFwiLi9nZW5lcmljcy90eXBlLWd1YXJkc1wiO1xyXG4vL2ltcG9ydCBjb25zdHJhaW50cyBmcm9tIFwiLi9nZW5lcmljcy9jb25zdHJhaW50c1wiO1xyXG4vL2ltcG9ydCBnZW5lcmljSW50ZXJmYWNlIGZyb20gXCIuL2dlbmVyaWNzL2ludGVyZmFjZVwiO1xyXG4vL2ltcG9ydCBhbmltYWxzIGZyb20gJy4vdHlwZXMvY2FzdGluZyc7XHJcbi8vaW1wb3J0IGF1dG9tYXAgZnJvbSAnLi9jbGFzc2VzL2F1dG9tYXAnO1xyXG4vL2ltcG9ydCBhc3NlcnRpb24gZnJvbSAnLi90eXBlcy9hc3NlcnRpb24nO1xyXG5cclxucnVuKCk7IiwiXHJcbmludGVyZmFjZSBJbnN0aXR1dGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBCYW5rIGltcGxlbWVudHMgSW5zdGl0dXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhbW91bnRPZk1vbmV5OiBudW1iZXIpIHt9XHJcbn1cclxuXHJcbmNsYXNzIFVuaXZlcnNpdHkgaW1wbGVtZW50cyBJbnN0aXR1dGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFkZHJlc3M6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2ZUeXBlPFQ+KHR5cGU6IGFueSwgcHJvcGVydHk6IGtleW9mIFQpOiB0eXBlIGlzIFQge1xyXG4gIHJldHVybiAodHlwZSBhcyBUKVtwcm9wZXJ0eV0gIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9mVHlwZSA9IDxUPih0eXBlOiBhbnksIHByb3BlcnR5OiBrZXlvZiBUKTogdHlwZSBpcyBUID0+ICh0eXBlIGFzIFQpW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJpY1R5cGVHdWFyZCgpOiB2b2lkIHtcclxuICBjb25zdCBiYW5rID0gbmV3IEJhbmsoXCJEYW5za2UgQmFua1wiLCAxMDAwMDAwMCkgYXMgSW5zdGl0dXRpb247XHJcbiAgY29uc3QgdW5pdmVyc2l0eSA9IG5ldyBVbml2ZXJzaXR5KFwiQ0JTXCIsIFwiQnJlZGdhZGUgMThcIikgYXMgSW5zdGl0dXRpb247XHJcblxyXG4gIGlmKGlzT2ZUeXBlPEJhbms+KGJhbmssIFwiYW1vdW50T2ZNb25leVwiKSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7YmFuay5uYW1lfSBvd25zICR7YmFuay5hbW91bnRPZk1vbmV5fSBhbW91bnQgb2YgbW9uZXlgKVxyXG4gIH1cclxuXHJcbiAgaWYob2ZUeXBlPFVuaXZlcnNpdHk+KHVuaXZlcnNpdHksIFwiYWRkcmVzc1wiKSkge1xyXG4gICAgY29uc29sZS5sb2coYCR7dW5pdmVyc2l0eS5uYW1lfSBhcmUgbG9jYXRlZCBvbiAke3VuaXZlcnNpdHkuYWRkcmVzc31gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJpY1R5cGVHdWFyZDsiLCJpbXBvcnQgeyBpc09mVHlwZSB9IGZyb20gXCIuLi9nZW5lcmljcy90eXBlLWd1YXJkc1wiO1xyXG5cclxuXHJcbmludGVyZmFjZSBIdW1hbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGFnZTogbnVtYmVyO1xyXG4gIGpvYjogXCJkZXZlbG9wZXJcIiB8IFwidGVhY2hlclwiIHwgXCJtZWNoYW5pY1wiIHwgXCJnbGFkaWF0b3JcIjtcclxufVxyXG5cclxuY2xhc3MgTG9nZ2FibGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nKSB7fVxyXG5cclxuICBwcmludCAoKTogdm9pZCB7XHJcbiAgICBmb3IoY29uc3Qga2V5IGluIHRoaXMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XHJcbiAgICAgIGlmKHR5cGVvZih2YWx1ZSkgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaW9uKHBhcmFtOiBIdW1hbiB8IExvZ2dhYmxlKTogdm9pZCB7XHJcbiAgaWYoaXNPZlR5cGU8SHVtYW4+KHBhcmFtLCBcImpvYlwiKSkge1xyXG4gICAgY29uc29sZS5sb2coYE15IG5hbWUgaXMgJHtwYXJhbS5uYW1lfSwgaSBhbSAke3BhcmFtLmFnZX0geWVhcnMgb2xkIGFuZCBpIHdvcmsgYXMgYSAke3BhcmFtLmpvYn1gKTtcclxuICB9XHJcblxyXG4gIGlmKHBhcmFtIGluc3RhbmNlb2YgKExvZ2dhYmxlKSkge1xyXG4gICAgcGFyYW0ucHJpbnQoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyc2VjdGlvbihodW1hbjogSHVtYW4sIGxvZ2dhYmxlOiBMb2dnYWJsZSk6IEh1bWFuICYgTG9nZ2FibGUge1xyXG4gIGNvbnN0IGludGVyc2VjdGlvblR5cGU6IEh1bWFuICYgTG9nZ2FibGUgPSB7XHJcbiAgICAuLi5odW1hbixcclxuICAgIC4uLmxvZ2dhYmxlLFxyXG4gICAgcHJpbnQ6IGxvZ2dhYmxlLnByaW50XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiBpbnRlcnNlY3Rpb25UeXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oKTogdm9pZCB7XHJcbiAgY29uc3QgaHVtYW46IEh1bWFuID0ge1xyXG4gICAgbmFtZTogXCJTcGFydGFjdXNcIixcclxuICAgIGFnZTogMzUsXHJcbiAgICBqb2I6IFwiZ2xhZGlhdG9yXCJcclxuICB9XHJcbiAgY29uc3QgbG9nZ2FibGUgPSBuZXcgTG9nZ2FibGUoXCJpbnN0YW5jZTE5NzQ1NlwiKTtcclxuXHJcbiAgdW5pb24oaHVtYW4pO1xyXG4gIHVuaW9uKGxvZ2dhYmxlKTtcclxuXHJcbiAgY29uc3QgY29tYmluZWQgPSBpbnRlcnNlY3Rpb24oaHVtYW4sIGxvZ2dhYmxlKTtcclxuICBjb25zb2xlLmxvZyhjb21iaW5lZC5qb2IpO1xyXG4gIGNvbWJpbmVkLnByaW50KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bjtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=