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
/* harmony import */ var _utility_types_pick_and_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-types/pick-and-omit */ "./src/utility-types/pick-and-omit.ts");

Object(_utility_types_pick_and_omit__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/utility-types/pick-and-omit.ts":
/*!********************************************!*\
  !*** ./src/utility-types/pick-and-omit.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var runPick = function () {
    var simpleAccount = {
        balance: {
            withDecimals: 20.00,
            plainNumber: 20,
            formatted: "20.0 DKK"
        },
        iBan: "DK123456789"
    };
    var accountSettings = {
        allowOverdraft: true,
        isActive: false
    };
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logPropsDeep"])(simpleAccount);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logProps"])(accountSettings);
};
/* harmony default export */ __webpack_exports__["default"] = (runPick);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS10eXBlcy9waWNrLWFuZC1vbWl0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBb0Q7QUFJcEQsNEVBQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSlY7QUFBQTtBQUFpRDtBQWtCakQsSUFBTSxPQUFPLEdBQUc7SUFDZCxJQUFNLGFBQWEsR0FBa0I7UUFDbkMsT0FBTyxFQUFFO1lBQ1AsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsVUFBVTtTQUN0QjtRQUNELElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0QsSUFBTSxlQUFlLEdBQW9CO1FBQ3ZDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBRUQsMkRBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1Qix1REFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFYyxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDcEN2QjtBQUFBO0FBQUE7QUFBTyxTQUFTLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7UUFDMUIsSUFBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLEdBQUcsaUJBQVksR0FBRyxDQUFDLEdBQUcsQ0FBRyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsTUFBVTtJQUFWLG1DQUFVO0lBQ2pDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLFlBQVksSUFBSSxHQUFHLENBQUM7S0FDckI7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVU7SUFBVixtQ0FBVTtJQUMvQyxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUU7SUFDM0MsS0FBSSxJQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDcEIsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUcsT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFJLFNBQVMsYUFBUSxHQUFLLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBSSxTQUFTLGFBQVEsR0FBRyxpQkFBWSxLQUFPLENBQUMsQ0FBQzthQUN6RDtTQUNGO0tBQ0Y7QUFDSCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHJ1blBpY2sgZnJvbSBcIi4vdXRpbGl0eS10eXBlcy9waWNrLWFuZC1vbWl0XCI7XHJcblxyXG5cclxuXHJcbnJ1blBpY2soKTsiLCJpbXBvcnQgeyBsb2dQcm9wc0RlZXAsIGxvZ1Byb3BzIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbmludGVyZmFjZSBBbW91bnQge1xyXG4gIHdpdGhEZWNpbWFsczogbnVtYmVyO1xyXG4gIHBsYWluTnVtYmVyOiBudW1iZXI7XHJcbiAgZm9ybWF0dGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCYW5rQWNjb3VudCB7XHJcbiAgYmFsYW5jZTogQW1vdW50O1xyXG4gIGlCYW46IHN0cmluZztcclxuICBhbGxvd092ZXJkcmFmdDogYm9vbGVhbjtcclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBTaW1wbGVBY2NvdW50ID0gUGljazxCYW5rQWNjb3VudCwgXCJiYWxhbmNlXCIgfCBcImlCYW5cIj5cclxudHlwZSBBY2NvdW50U2V0dGluZ3MgPSBPbWl0PEJhbmtBY2NvdW50LCBcImJhbGFuY2VcIiB8IFwiaUJhblwiPlxyXG5cclxuY29uc3QgcnVuUGljayA9ICgpOiB2b2lkID0+IHtcclxuICBjb25zdCBzaW1wbGVBY2NvdW50OiBTaW1wbGVBY2NvdW50ID0ge1xyXG4gICAgYmFsYW5jZToge1xyXG4gICAgICB3aXRoRGVjaW1hbHM6IDIwLjAwLFxyXG4gICAgICBwbGFpbk51bWJlcjogMjAsXHJcbiAgICAgIGZvcm1hdHRlZDogXCIyMC4wIERLS1wiXHJcbiAgICB9LFxyXG4gICAgaUJhbjogXCJESzEyMzQ1Njc4OVwiXHJcbiAgfVxyXG4gIGNvbnN0IGFjY291bnRTZXR0aW5nczogQWNjb3VudFNldHRpbmdzID0ge1xyXG4gICAgYWxsb3dPdmVyZHJhZnQ6IHRydWUsXHJcbiAgICBpc0FjdGl2ZTogZmFsc2VcclxuICB9XHJcblxyXG4gIGxvZ1Byb3BzRGVlcChzaW1wbGVBY2NvdW50KTtcclxuICBsb2dQcm9wcyhhY2NvdW50U2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5QaWNrOyIsImV4cG9ydCBmdW5jdGlvbiBsb2dQcm9wcyhvYmo6IGFueSk6IHZvaWQge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYodHlwZW9mIG9ialtrZXldICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBLZXk6ICR7a2V5fSwgVmFsdWU6ICR7b2JqW2tleV19YClcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZW50U3RyaW5nKGluZGVudCA9IDApOiBzdHJpbmcge1xyXG4gIGxldCBpbmRlbnRTdHJpbmcgPSBcIlwiO1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xyXG4gICAgaW5kZW50U3RyaW5nICs9IFwiIFwiO1xyXG4gIH1cclxuICByZXR1cm4gaW5kZW50U3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nUHJvcHNEZWVwKG9iajogYW55LCBpbmRlbnQgPSAwKTogdm9pZCB7XHJcbiAgY29uc3QgaW5kZW50aW9uID0gZ2V0SW5kZW50U3RyaW5nKGluZGVudCkgO1xyXG4gIGZvcihjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xyXG4gICAgaWYodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRlbnRpb259S2V5OiAke2tleX1gKTtcclxuICAgICAgICBsb2dQcm9wc0RlZXAodmFsdWUsIGluZGVudCArIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2luZGVudGlvbn1LZXk6ICR7a2V5fSwgVmFsdWU6ICR7dmFsdWV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=