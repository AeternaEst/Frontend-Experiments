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
/* harmony import */ var _utility_types_return_and_instance_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-types/return-and-instance-type */ "./src/utility-types/return-and-instance-type.ts");

Object(_utility_types_return_and_instance_type__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/utility-types/return-and-instance-type.ts":
/*!*******************************************************!*\
  !*** ./src/utility-types/return-and-instance-type.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ReturnType is used to extract the return type from a function
 * InstanceType is used to extract the type created by a constructor function
 */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Building = /** @class */ (function () {
    function Building(squareFeet) {
        this.squareFeet = squareFeet;
    }
    return Building;
}());
function findLargestBuilding(buildings) {
    var copy = __spreadArrays(buildings);
    return copy.sort(function (first, second) { return first.squareFeet < second.squareFeet ? -1 : 1; })[buildings.length - 1];
}
function logBuilding(building) {
    console.log("The building is " + building.squareFeet + " square feet");
}
var runReturnAndInstanceType = function () {
    var buildings = [
        {
            squareFeet: 10
        },
        {
            squareFeet: 50
        },
        {
            squareFeet: 100
        }
    ];
    var largestBuilding = findLargestBuilding(buildings);
    logBuilding(largestBuilding);
    var house = {
        squareFeet: 90,
        address: "Secret Adress 40x"
    };
    logBuilding(house);
    console.log("The address is " + house.address);
};
/* harmony default export */ __webpack_exports__["default"] = (runReturnAndInstanceType);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS10eXBlcy9yZXR1cm4tYW5kLWluc3RhbmNlLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWdGO0FBR2hGLHVGQUF3QixFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNGM0I7QUFBQTs7O0dBR0c7Ozs7Ozs7O0FBRUg7SUFDRSxrQkFBbUIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUFHLENBQUM7SUFDM0MsZUFBQztBQUFELENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLFNBQXFCO0lBQ2hELElBQU0sSUFBSSxrQkFBTyxTQUFTLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTSxJQUFLLFlBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekcsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQWdEO0lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLFFBQVEsQ0FBQyxVQUFVLGlCQUFjLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBSUQsSUFBTSx3QkFBd0IsR0FBRztJQUMvQixJQUFNLFNBQVMsR0FBZTtRQUM1QjtZQUNFLFVBQVUsRUFBRSxFQUFFO1NBQ2Y7UUFDRDtZQUNFLFVBQVUsRUFBRSxFQUFFO1NBQ2Y7UUFDRDtZQUNFLFVBQVUsRUFBRSxHQUFHO1NBQ2hCO0tBQ0YsQ0FBQztJQUVGLElBQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU3QixJQUFNLEtBQUssR0FBVTtRQUNuQixVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxtQkFBbUI7S0FDN0I7SUFDRCxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFYyx1RkFBd0IsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBydW5SZXR1cm5BbmRJbnN0YW5jZVR5cGUgZnJvbSBcIi4vdXRpbGl0eS10eXBlcy9yZXR1cm4tYW5kLWluc3RhbmNlLXR5cGVcIjtcclxuXHJcblxyXG5ydW5SZXR1cm5BbmRJbnN0YW5jZVR5cGUoKTsiLCJcclxuLyoqXHJcbiAqIFJldHVyblR5cGUgaXMgdXNlZCB0byBleHRyYWN0IHRoZSByZXR1cm4gdHlwZSBmcm9tIGEgZnVuY3Rpb25cclxuICogSW5zdGFuY2VUeXBlIGlzIHVzZWQgdG8gZXh0cmFjdCB0aGUgdHlwZSBjcmVhdGVkIGJ5IGEgY29uc3RydWN0b3IgZnVuY3Rpb25cclxuICovXHJcblxyXG5jbGFzcyBCdWlsZGluZyB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHNxdWFyZUZlZXQ6IG51bWJlcikge31cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZExhcmdlc3RCdWlsZGluZyhidWlsZGluZ3M6IEJ1aWxkaW5nW10pOiBCdWlsZGluZyB7XHJcbiAgY29uc3QgY29weSA9IFsuLi5idWlsZGluZ3NdO1xyXG4gIHJldHVybiBjb3B5LnNvcnQoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0LnNxdWFyZUZlZXQgPCBzZWNvbmQuc3F1YXJlRmVldCA/IC0xIDogMSlbYnVpbGRpbmdzLmxlbmd0aC0xXTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nQnVpbGRpbmcoYnVpbGRpbmc6IFJldHVyblR5cGU8dHlwZW9mIGZpbmRMYXJnZXN0QnVpbGRpbmc+KTogdm9pZCB7XHJcbiAgY29uc29sZS5sb2coYFRoZSBidWlsZGluZyBpcyAke2J1aWxkaW5nLnNxdWFyZUZlZXR9IHNxdWFyZSBmZWV0YCk7XHJcbn1cclxuXHJcbnR5cGUgSG91c2UgPSBJbnN0YW5jZVR5cGU8dHlwZW9mIEJ1aWxkaW5nPiAmIHsgYWRkcmVzczogc3RyaW5nIH07XHJcblxyXG5jb25zdCBydW5SZXR1cm5BbmRJbnN0YW5jZVR5cGUgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgYnVpbGRpbmdzOiBCdWlsZGluZ1tdID0gW1xyXG4gICAge1xyXG4gICAgICBzcXVhcmVGZWV0OiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3F1YXJlRmVldDogNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNxdWFyZUZlZXQ6IDEwMFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxhcmdlc3RCdWlsZGluZyA9IGZpbmRMYXJnZXN0QnVpbGRpbmcoYnVpbGRpbmdzKTtcclxuICBsb2dCdWlsZGluZyhsYXJnZXN0QnVpbGRpbmcpO1xyXG5cclxuICBjb25zdCBob3VzZTogSG91c2UgPSB7XHJcbiAgICBzcXVhcmVGZWV0OiA5MCxcclxuICAgIGFkZHJlc3M6IFwiU2VjcmV0IEFkcmVzcyA0MHhcIlxyXG4gIH1cclxuICBsb2dCdWlsZGluZyhob3VzZSk7XHJcbiAgY29uc29sZS5sb2coYFRoZSBhZGRyZXNzIGlzICR7aG91c2UuYWRkcmVzc31gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuUmV0dXJuQW5kSW5zdGFuY2VUeXBlO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==