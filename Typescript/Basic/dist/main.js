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
/* harmony import */ var _access_types_indexed_access_type_keyof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-types/indexed-access-type-keyof */ "./src/access-types/indexed-access-type-keyof.ts");

Object(_access_types_indexed_access_type_keyof__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/access-types/indexed-access-type-keyof.ts":
/*!*******************************************************!*\
  !*** ./src/access-types/indexed-access-type-keyof.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var Repository = /** @class */ (function () {
    function Repository(entities) {
        this.entities = entities;
    }
    Repository.prototype.filterByKey = function (filterKey, filterValue) {
        return this.entities.filter(function (entity) { return entity[filterKey] === filterValue; });
    };
    Repository.prototype.filterByEntity = function (fn) {
        return this.entities.filter(fn);
    };
    return Repository;
}());
var run = function () {
    var profiles = [
        {
            name: "Nicholas",
            hasPremiumAccess: false,
            premiumPointsEarned: 20
        },
        {
            name: "Andreja",
            hasPremiumAccess: true,
            premiumPointsEarned: 100
        },
        {
            name: "Spartacus",
            hasPremiumAccess: true,
            premiumPointsEarned: 58
        }
    ];
    var repo = new Repository(profiles);
    var premiumProfiles = repo.filterByKey("hasPremiumAccess", true);
    premiumProfiles.forEach(function (userProfile) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(userProfile); });
    var profilesBelowFifty = repo.filterByEntity(function (entity) { return entity.premiumPointsEarned < 50; });
    profilesBelowFifty.forEach(function (userProfile) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(userProfile); });
};
/* harmony default export */ __webpack_exports__["default"] = (run);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjZXNzLXR5cGVzL2luZGV4ZWQtYWNjZXNzLXR5cGUta2V5b2YudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUEyRDtBQUczRCx1RkFBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNITjtBQUFBO0FBQW9DO0FBUXBDO0lBQ0Usb0JBQW9CLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUUsQ0FBQztJQUVwQyxnQ0FBVyxHQUFYLFVBQStCLFNBQVksRUFBRSxXQUFpQjtRQUM1RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFdBQVcsRUFBakMsQ0FBaUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsbUNBQWMsR0FBZCxVQUFlLEVBQTBCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sR0FBRyxHQUFHO0lBQ1YsSUFBTSxRQUFRLEdBQWtCO1FBQzlCO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsbUJBQW1CLEVBQUUsR0FBRztTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCO0tBQ0Y7SUFDRCxJQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBYyxRQUFRLENBQUMsQ0FBQztJQUVuRCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLGVBQWUsQ0FBQyxPQUFPLENBQUMscUJBQVcsSUFBSSw4REFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFFOUQsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQzFGLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxxQkFBVyxJQUFJLDhEQUFRLENBQUMsV0FBVyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRWMsa0VBQUcsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9DbkI7QUFBQTtBQUFPLFNBQVMsUUFBUSxDQUFDLEdBQVE7SUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRztRQUMxQixJQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVEsR0FBRyxpQkFBWSxHQUFHLENBQUMsR0FBRyxDQUFHLENBQUM7U0FDL0M7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgcnVuIGZyb20gXCIuL2FjY2Vzcy10eXBlcy9pbmRleGVkLWFjY2Vzcy10eXBlLWtleW9mXCI7XHJcblxyXG5cclxucnVuKCk7IiwiaW1wb3J0IHsgbG9nUHJvcHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyUHJvZmlsZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGhhc1ByZW1pdW1BY2Nlc3M6IGJvb2xlYW47XHJcbiAgcHJlbWl1bVBvaW50c0Vhcm5lZDogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBSZXBvc2l0b3J5PFQ+IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudGl0aWVzOiBUW10pe31cclxuXHJcbiAgZmlsdGVyQnlLZXk8SyBleHRlbmRzIGtleW9mIFQ+KGZpbHRlcktleTogSywgZmlsdGVyVmFsdWU6IFRbS10pOiBUW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZmlsdGVyKGVudGl0eSA9PiBlbnRpdHlbZmlsdGVyS2V5XSA9PT0gZmlsdGVyVmFsdWUpXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJCeUVudGl0eShmbjogKGVudGl0eTogVCkgPT4gYm9vbGVhbik6IFRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5maWx0ZXIoZm4pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcnVuID0gKCk6IHZvaWQgPT4ge1xyXG4gIGNvbnN0IHByb2ZpbGVzOiBVc2VyUHJvZmlsZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5pY2hvbGFzXCIsXHJcbiAgICAgIGhhc1ByZW1pdW1BY2Nlc3M6IGZhbHNlLFxyXG4gICAgICBwcmVtaXVtUG9pbnRzRWFybmVkOiAyMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBbmRyZWphXCIsXHJcbiAgICAgIGhhc1ByZW1pdW1BY2Nlc3M6IHRydWUsXHJcbiAgICAgIHByZW1pdW1Qb2ludHNFYXJuZWQ6IDEwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFydGFjdXNcIixcclxuICAgICAgaGFzUHJlbWl1bUFjY2VzczogdHJ1ZSxcclxuICAgICAgcHJlbWl1bVBvaW50c0Vhcm5lZDogNThcclxuICAgIH1cclxuICBdXHJcbiAgY29uc3QgcmVwbyA9IG5ldyBSZXBvc2l0b3J5PFVzZXJQcm9maWxlPihwcm9maWxlcyk7XHJcblxyXG4gIGNvbnN0IHByZW1pdW1Qcm9maWxlcyA9IHJlcG8uZmlsdGVyQnlLZXkoXCJoYXNQcmVtaXVtQWNjZXNzXCIsIHRydWUpO1xyXG4gIHByZW1pdW1Qcm9maWxlcy5mb3JFYWNoKHVzZXJQcm9maWxlID0+IGxvZ1Byb3BzKHVzZXJQcm9maWxlKSk7XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVzQmVsb3dGaWZ0eSA9IHJlcG8uZmlsdGVyQnlFbnRpdHkoZW50aXR5ID0+IGVudGl0eS5wcmVtaXVtUG9pbnRzRWFybmVkIDwgNTApO1xyXG4gIHByb2ZpbGVzQmVsb3dGaWZ0eS5mb3JFYWNoKHVzZXJQcm9maWxlID0+IGxvZ1Byb3BzKHVzZXJQcm9maWxlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bjsiLCJleHBvcnQgZnVuY3Rpb24gbG9nUHJvcHMob2JqOiBhbnkpOiB2b2lkIHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmKHR5cGVvZiBvYmpba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgS2V5OiAke2tleX0sIFZhbHVlOiAke29ialtrZXldfWApXHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9