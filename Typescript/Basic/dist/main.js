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
//import animals from './types/casting';
//import automap from './classes/automap';

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
/*! exports provided: logProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logProps", function() { return logProps; });
function logProps(obj) {
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'function') {
            console.log("Key: " + key + ", Value: " + obj[key]);
        }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYXNzZXJ0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQ0E7QUFFMUMsZ0VBQVMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSndCO0FBZ0JwQztJQUNFLGlCQUFtQixJQUFZLEVBQVMsS0FBYTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElB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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vaW1wb3J0IGFuaW1hbHMgZnJvbSAnLi90eXBlcy9jYXN0aW5nJztcclxuLy9pbXBvcnQgYXV0b21hcCBmcm9tICcuL2NsYXNzZXMvYXV0b21hcCc7XHJcbmltcG9ydCBhc3NlcnRpb24gZnJvbSAnLi90eXBlcy9hc3NlcnRpb24nO1xyXG5cclxuYXNzZXJ0aW9uKCk7IiwiaW1wb3J0IHsgbG9nUHJvcHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBCYXNlVmVoaWNsZSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNwZWVkOiBudW1iZXI7XHJcbiAgcHJpbnRTdGF0czogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhclZlaGljbGUgZXh0ZW5kcyBCYXNlVmVoaWNsZSB7XHJcbiAgbW9kZWw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJpY3ljbGVWZWhpY2xlIGV4dGVuZHMgQmFzZVZlaGljbGUge1xyXG4gIG51bU9mR2VhcnM6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmVoaWNsZSBpbXBsZW1lbnRzIEJhc2VWZWhpY2xlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogc3RyaW5nLCBwdWJsaWMgc3BlZWQ6IG51bWJlcil7XHJcbiAgICB0aGlzLnByaW50U3RhdHMgPSB0aGlzLnByaW50U3RhdHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaW50U3RhdHMoKTogdm9pZCB7XHJcbiAgICBsb2dQcm9wcyh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENhciBleHRlbmRzIFZlaGljbGUgaW1wbGVtZW50cyBDYXJWZWhpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIHB1YmxpYyBtb2RlbDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcih0eXBlLCBzcGVlZCk7XHJcbiAgICB0aGlzLnByaW50U3RhdHMgPSB0aGlzLnByaW50U3RhdHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaW50U3RhdHMoKTogdm9pZCB7XHJcbiAgICBsb2dQcm9wcyh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJpY3ljbGUgZXh0ZW5kcyBWZWhpY2xlIGltcGxlbWVudHMgQmljeWNsZVZlaGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgc3BlZWQ6IG51bWJlciwgcHVibGljIG51bU9mR2VhcnM6IG51bWJlcikge1xyXG4gICAgc3VwZXIodHlwZSwgc3BlZWQpO1xyXG4gICAgdGhpcy5wcmludFN0YXRzID0gdGhpcy5wcmludFN0YXRzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcmludFN0YXRzKCk6IHZvaWQge1xyXG4gICAgbG9nUHJvcHModGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NlcnRpb24oKTogdm9pZCB7XHJcbiAgY29uc3QgY2FyID0gbmV3IENhcihcIkNhclwiLCAxNTAsIFwiVlcgVVBcIik7XHJcbiAgY29uc3QgY3VzdG9tQ2FyID0ge1xyXG4gICAgdHlwZTogXCJDYXJcIixcclxuICAgIHNwZWVkOiAxNTAsXHJcbiAgICBtb2RlbDogXCJGb3JkIEZpZXN0YVwiLFxyXG4gICAgcHJpbnRTdGF0czogKCk6IHZvaWQgPT4gY29uc29sZS5sb2coXCJjdXN0b20gY2FyXCIpXHJcbiAgfVxyXG4gIGNvbnN0IGJpY3ljbGUgPSBuZXcgQmljeWNsZShcIkJpY3ljbGVcIiwgNDAsIDcpO1xyXG4gIGNvbnN0IHZlaGljbGUgPSBuZXcgVmVoaWNsZShcIkJvYXRcIiwgMzAwKTtcclxuXHJcbiAgaWYoY2FyIGluc3RhbmNlb2YgQ2FyKSB7IC8vdHJ1ZVxyXG4gICAgY2FyLnByaW50U3RhdHMoKTtcclxuICB9XHJcbiAgaWYoY3VzdG9tQ2FyIGluc3RhbmNlb2YgQ2FyKSB7IC8vZmFsc2VcclxuICAgIGN1c3RvbUNhci5wcmludFN0YXRzKCk7XHJcbiAgfVxyXG4gIGlmKGJpY3ljbGUgaW5zdGFuY2VvZiBWZWhpY2xlKSB7IC8vdHJ1ZVxyXG4gICAgYmljeWNsZS5wcmludFN0YXRzKCk7XHJcbiAgfVxyXG5cclxuICBpZihcInNwZWVkXCIgaW4gY3VzdG9tQ2FyKSB7IC8vdHJ1ZVxyXG4gICAgY3VzdG9tQ2FyLnByaW50U3RhdHMoKTtcclxuICB9XHJcbiAgaWYoXCJudW1PZkdlYXJzXCIgaW4gdmVoaWNsZSkgeyAvL2ZhbHNlXHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgc2hvdWxkIG5vdCBoYXBwZW5cIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzc2VydGlvbjsiLCJleHBvcnQgZnVuY3Rpb24gbG9nUHJvcHMob2JqOiB7fSk6IHZvaWQge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYodHlwZW9mIG9ialtrZXldICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBLZXk6ICR7a2V5fSwgVmFsdWU6ICR7b2JqW2tleV19YClcclxuICAgIH1cclxuICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=