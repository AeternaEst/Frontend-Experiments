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
/* harmony import */ var _types_assertion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/assertion */ "./src/types/assertion.ts");

Object(_types_assertion__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/types/assertion.ts":
/*!********************************!*\
  !*** ./src/types/assertion.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Vehicle = /** @class */ (function () {
    function Vehicle(type, speed) {
        this.type = type;
        this.speed = speed;
        this.printStats = this.printStats.bind(this);
    }
    Vehicle.prototype.printStats = function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(this);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(type, speed, model) {
        var _this = _super.call(this, type, speed) || this;
        _this.model = model;
        _this.printStats = _this.printStats.bind(_this);
        return _this;
    }
    Car.prototype.printStats = function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(this);
    };
    return Car;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(type, speed, numOfGears) {
        var _this = _super.call(this, type, speed) || this;
        _this.numOfGears = numOfGears;
        _this.printStats = _this.printStats.bind(_this);
        return _this;
    }
    Bicycle.prototype.printStats = function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(this);
    };
    return Bicycle;
}(Vehicle));
function assertion() {
    var car = new Car("Car", 150, "VW UP");
    var customCar = {
        type: "Car",
        speed: 150,
        model: "Ford Fiesta",
        printStats: function () { return console.log("custom car"); }
    };
    var bicycle = new Bicycle("Bicycle", 40, 7);
    var vehicle = new Vehicle("Boat", 300);
    if (car instanceof Car) { //true
        car.printStats();
    }
    if (customCar instanceof Car) { //false
        customCar.printStats();
    }
    if (bicycle instanceof Vehicle) { //true
        bicycle.printStats();
    }
    if ("speed" in customCar) { //true
        customCar.printStats();
    }
    if ("numOfGears" in vehicle) { //false
        console.log("This should not happen");
    }
}
/* harmony default export */ __webpack_exports__["default"] = (assertion);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: logProps, logPropsDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logProps", function() { return logProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPropsDeep", function() { return logPropsDeep; });
function logProps(obj) {
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'function') {
            console.log("Key: " + key + ", Value: " + obj[key]);
        }
    });
}
function getIndentString(indent) {
    if (indent === void 0) { indent = 0; }
    var indentString = "";
    for (var i = 0; i < indent; i++) {
        indentString += " ";
    }
    return indentString;
}
function logPropsDeep(obj, indent) {
    if (indent === void 0) { indent = 0; }
    var indention = getIndentString(indent);
    for (var key in obj) {
        var value = obj[key];
        if (typeof value !== 'function') {
            if (typeof value === 'object') {
                console.log(indention + "Key: " + key);
                logPropsDeep(value, indent + 4);
            }
            else {
                console.log(indention + "Key: " + key + ", Value: " + value);
            }
        }
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYXNzZXJ0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBMEM7QUFJMUMsZ0VBQVMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSndCO0FBZ0JwQztJQUNFLGlCQUFtQixJQUFZLEVBQVMsS0FBYTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7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QUN0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLFlBQVksSUFBSSxHQUFHLENBQUM7S0FDckI7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVU7SUFBVixtQ0FBVTtJQUMvQyxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUU7SUFDM0MsS0FBSSxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDcEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUcsT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFJLFNBQVMsYUFBUSxHQUFLLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBSSxTQUFTLGFBQVEsR0FBRyxpQkFBWSxLQUFPLENBQUMsQ0FBQzthQUN6RDtTQUNGO0tBQ0Y7QUFDSCxDQUFDIiwiZmlsZSI6IndlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGFzc2VydGlvbiBmcm9tIFwiLi90eXBlcy9hc3NlcnRpb25cIjtcclxuXHJcblxyXG5cclxuYXNzZXJ0aW9uKCk7IiwiaW1wb3J0IHsgbG9nUHJvcHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBCYXNlVmVoaWNsZSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNwZWVkOiBudW1iZXI7XHJcbiAgcHJpbnRTdGF0czogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhclZlaGljbGUgZXh0ZW5kcyBCYXNlVmVoaWNsZSB7XHJcbiAgbW9kZWw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJpY3ljbGVWZWhpY2xlIGV4dGVuZHMgQmFzZVZlaGljbGUge1xyXG4gIG51bU9mR2VhcnM6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmVoaWNsZSBpbXBsZW1lbnRzIEJhc2VWZWhpY2xlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgc3BlZWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLnByaW50U3RhdHMgPSB0aGlzLnByaW50U3RhdHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaW50U3RhdHMoKTogdm9pZCB7XHJcbiAgICBsb2dQcm9wcyh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENhciBleHRlbmRzIFZlaGljbGUgaW1wbGVtZW50cyBDYXJWZWhpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIHB1YmxpYyBtb2RlbDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih0eXBlLCBzcGVlZCk7XHJcbiAgICB0aGlzLnByaW50U3RhdHMgPSB0aGlzLnByaW50U3RhdHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaW50U3RhdHMoKTogdm9pZCB7XHJcbiAgICBsb2dQcm9wcyh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJpY3ljbGUgZXh0ZW5kcyBWZWhpY2xlIGltcGxlbWVudHMgQmljeWNsZVZlaGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgcHVibGljIG51bU9mR2VhcnM6IG51bWJlcikge1xyXG4gICAgc3VwZXIodHlwZSwgc3BlZWQpO1xyXG4gICAgdGhpcy5wcmludFN0YXRzID0gdGhpcy5wcmludFN0YXRzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcmludFN0YXRzKCk6IHZvaWQge1xyXG4gICAgbG9nUHJvcHModGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NlcnRpb24oKTogdm9pZCB7XHJcbiAgY29uc3QgY2FyID0gbmV3IENhcihcIkNhclwiLCAxNTAsIFwiVlcgVVBcIik7XHJcbiAgY29uc3QgY3VzdG9tQ2FyID0ge1xyXG4gICAgdHlwZTogXCJDYXJcIixcclxuICAgIHNwZWVkOiAxNTAsXHJcbiAgICBtb2RlbDogXCJGb3JkIEZpZXN0YVwiLFxyXG4gICAgcHJpbnRTdGF0czogKCk6IHZvaWQgPT4gY29uc29sZS5sb2coXCJjdXN0b20gY2FyXCIpXHJcbiAgfVxyXG4gIGNvbnN0IGJpY3ljbGUgPSBuZXcgQmljeWNsZShcIkJpY3ljbGVcIiwgNDAsIDcpO1xyXG4gIGNvbnN0IHZlaGljbGUgPSBuZXcgVmVoaWNsZShcIkJvYXRcIiwgMzAwKTtcclxuXHJcbiAgaWYoY2FyIGluc3RhbmNlb2YgQ2FyKSB7IC8vdHJ1ZVxyXG4gICAgY2FyLnByaW50U3RhdHMoKTtcclxuICB9XHJcbiAgaWYoY3VzdG9tQ2FyIGluc3RhbmNlb2YgQ2FyKSB7IC8vZmFsc2VcclxuICAgIGN1c3RvbUNhci5wcmludFN0YXRzKCk7XHJcbiAgfVxyXG4gIGlmKGJpY3ljbGUgaW5zdGFuY2VvZiBWZWhpY2xlKSB7IC8vdHJ1ZVxyXG4gICAgYmljeWNsZS5wcmludFN0YXRzKCk7XHJcbiAgfVxyXG5cclxuICBpZihcInNwZWVkXCIgaW4gY3VzdG9tQ2FyKSB7IC8vdHJ1ZVxyXG4gICAgY3VzdG9tQ2FyLnByaW50U3RhdHMoKTtcclxuICB9XHJcbiAgaWYoXCJudW1PZkdlYXJzXCIgaW4gdmVoaWNsZSkgeyAvL2ZhbHNlXHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgc2hvdWxkIG5vdCBoYXBwZW5cIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzc2VydGlvbjsiLCJleHBvcnQgZnVuY3Rpb24gbG9nUHJvcHMob2JqOiBhbnkpOiB2b2lkIHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmKHR5cGVvZiBvYmpba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgS2V5OiAke2tleX0sIFZhbHVlOiAke29ialtrZXldfWApXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluZGVudFN0cmluZyhpbmRlbnQgPSAwKTogc3RyaW5nIHtcclxuICBsZXQgaW5kZW50U3RyaW5nID0gXCJcIjtcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgaW5kZW50OyBpKyspIHtcclxuICAgIGluZGVudFN0cmluZyArPSBcIiBcIjtcclxuICB9XHJcbiAgcmV0dXJuIGluZGVudFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1Byb3BzRGVlcChvYmo6IGFueSwgaW5kZW50ID0gMCk6IHZvaWQge1xyXG4gIGNvbnN0IGluZGVudGlvbiA9IGdldEluZGVudFN0cmluZyhpbmRlbnQpIDtcclxuICBmb3IoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcclxuICAgIGlmKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZW50aW9ufUtleTogJHtrZXl9YCk7XHJcbiAgICAgICAgbG9nUHJvcHNEZWVwKHZhbHVlLCBpbmRlbnQgKyA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRlbnRpb259S2V5OiAke2tleX0sIFZhbHVlOiAke3ZhbHVlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9