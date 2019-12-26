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

/***/ "./node_modules/clamp-js/clamp.js":
/*!****************************************!*\
  !*** ./node_modules/clamp-js/clamp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Clamp.js 0.7.0
 *
 * Copyright 2011-2013, Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

(function(root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
  /**
   * Clamps a text node.
   * @param {HTMLElement} element. Element containing the text node to clamp.
   * @param {Object} options. Options to pass to the clamper.
   */
  function clamp(element, options) {
    options = options || {};

    var self = this,
      win = window,
      opt = {
        clamp: options.clamp || 2,
        useNativeClamp: typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
        splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
        animate: options.animate || false,
        truncationChar: options.truncationChar || '…',
        truncationHTML: options.truncationHTML
      },

      sty = element.style,
      originalText = element.innerHTML,

      supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
      clampValue = opt.clamp,
      isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
      truncationHTMLContainer;

    if (opt.truncationHTML) {
      truncationHTMLContainer = document.createElement('span');
      truncationHTMLContainer.innerHTML = opt.truncationHTML;
    }


    // UTILITY FUNCTIONS __________________________________________________________

    /**
     * Return the current style for an element.
     * @param {HTMLElement} elem The element to compute.
     * @param {string} prop The style property.
     * @returns {number}
     */
    function computeStyle(elem, prop) {
      if (!win.getComputedStyle) {
        win.getComputedStyle = function(el, pseudo) {
          this.el = el;
          this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
              prop = prop.replace(re, function() {
                return arguments[2].toUpperCase();
              });
            }
            return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
          };
          return this;
        };
      }

      return win.getComputedStyle(elem, null).getPropertyValue(prop);
    }

    /**
     * Returns the maximum number of lines of text that should be rendered based
     * on the current height of the element and the line-height of the text.
     */
    function getMaxLines(height) {
      var availHeight = height || element.clientHeight,
        lineHeight = getLineHeight(element);

      return Math.max(Math.floor(availHeight / lineHeight), 0);
    }

    /**
     * Returns the maximum height a given element should have based on the line-
     * height of the text and the given clamp value.
     */
    function getMaxHeight(clmp) {
      var lineHeight = getLineHeight(element);
      return lineHeight * clmp;
    }

    /**
     * Returns the line-height of an element as an integer.
     */
    function getLineHeight(elem) {
      var lh = computeStyle(elem, 'line-height');
      if (lh == 'normal') {
        // Normal line heights vary from browser to browser. The spec recommends
        // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
        lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
      }
      return parseInt(lh);
    }


    // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
    var splitOnChars = opt.splitOnChars.slice(0),
      splitChar = splitOnChars[0],
      chunks,
      lastChunk;

    /**
     * Gets an element's last child. That may be another node or a node's contents.
     */
    function getLastChild(elem) {
      //Current element has children, need to go deeper and get last child as a text node
      if (elem.lastChild.children && elem.lastChild.children.length > 0) {
        return getLastChild(Array.prototype.slice.call(elem.children).pop());
      }
      //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
      else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue === '' || elem.lastChild.nodeValue == opt.truncationChar) {
        elem.lastChild.parentNode.removeChild(elem.lastChild);
        return getLastChild(element);
      }
      //This is the last child we want, return it
      else {
        return elem.lastChild;
      }
    }

    /**
     * Removes one character at a time from the text until its width or
     * height is beneath the passed-in max param.
     */
    function truncate(target, maxHeight) {
      if (!maxHeight) {
        return;
      }

      /**
       * Resets global variables.
       */
      function reset() {
        splitOnChars = opt.splitOnChars.slice(0);
        splitChar = splitOnChars[0];
        chunks = null;
        lastChunk = null;
      }

      var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

      //Grab the next chunks
      if (!chunks) {
        //If there are more characters to try, grab the next one
        if (splitOnChars.length > 0) {
          splitChar = splitOnChars.shift();
        }
        //No characters to chunk by. Go character-by-character
        else {
          splitChar = '';
        }

        chunks = nodeValue.split(splitChar);
      }

      //If there are chunks left to remove, remove the last one and see if
      // the nodeValue fits.
      if (chunks.length > 1) {
        // console.log('chunks', chunks);
        lastChunk = chunks.pop();
        // console.log('lastChunk', lastChunk);
        applyEllipsis(target, chunks.join(splitChar));
      }
      //No more chunks can be removed using this character
      else {
        chunks = null;
      }

      //Insert the custom HTML before the truncation character
      if (truncationHTMLContainer) {
        target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
        element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
      }

      //Search produced valid chunks
      if (chunks) {
        //It fits
        if (element.clientHeight <= maxHeight) {
          //There's still more characters to try splitting on, not quite done yet
          if (splitOnChars.length >= 0 && splitChar !== '') {
            applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
            chunks = null;
          }
          //Finished!
          else {
            return element.innerHTML;
          }
        }
      }
      //No valid chunks produced
      else {
        //No valid chunks even when splitting by letter, time to move
        //on to the next node
        if (splitChar === '') {
          applyEllipsis(target, '');
          target = getLastChild(element);

          reset();
        }
      }

      //If you get here it means still too big, let's keep truncating
      if (opt.animate) {
        setTimeout(function() {
          truncate(target, maxHeight);
        }, opt.animate === true ? 10 : opt.animate);
      } else {
        return truncate(target, maxHeight);
      }
    }

    function applyEllipsis(elem, str) {
      elem.nodeValue = str + opt.truncationChar;
    }


    // CONSTRUCTOR ________________________________________________________________

    if (clampValue == 'auto') {
      clampValue = getMaxLines();
    } else if (isCSSValue) {
      clampValue = getMaxLines(parseInt(clampValue));
    }

    var clampedText;
    if (supportsNativeClamp && opt.useNativeClamp) {
      sty.overflow = 'hidden';
      sty.textOverflow = 'ellipsis';
      sty.webkitBoxOrient = 'vertical';
      sty.display = '-webkit-box';
      sty.webkitLineClamp = clampValue;

      if (isCSSValue) {
        sty.height = opt.clamp + 'px';
      }
    } else {
      var height = getMaxHeight(clampValue);
      if (height <= element.clientHeight) {
        clampedText = truncate(getLastChild(element), height);
      }
    }

    return {
      'original': originalText,
      'clamped': clampedText
    };
  }

  return clamp;
}));


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keywords_declare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keywords/declare */ "./src/keywords/declare.ts");

Object(_keywords_declare__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/keywords/declare.ts":
/*!*********************************!*\
  !*** ./src/keywords/declare.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($clamp) {/**
 * The 'declare' keyword is used when importing libraries that does not have
 * type declarations but you want to use them without typescript errors.
 * NOTE: $clamp is added in the webpack config as a global dependency
 */
var runDeclare = function () {
    var targetDiv = document.getElementById("truncate");
    console.log(targetDiv);
    console.log($clamp);
    $clamp(targetDiv, { clamp: 2 });
};
/* harmony default export */ __webpack_exports__["default"] = (runDeclare);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/clamp-js/clamp.js */ "./node_modules/clamp-js/clamp.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYW1wLWpzL2NsYW1wLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXdvcmRzL2RlY2xhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUEwQztBQUNoRDtBQUNBLElBQUksaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ3ZCLEdBQUcsTUFBTSxFQU1OO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOVFEO0FBQUE7QUFBNEM7QUFJNUMsaUVBQVUsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSGI7QUFBQTs7OztHQUlHO0FBSUgsSUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFYyx5RUFBVSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyohXG4gKiBDbGFtcC5qcyAwLjcuMFxuICpcbiAqIENvcHlyaWdodCAyMDExLTIwMTMsIEpvc2VwaCBTY2htaXR0IGh0dHA6Ly9qb2Uuc2hcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlXG4gKiBodHRwOi8vc2FtLnpveS5vcmcvd3RmcGwvXG4gKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZSwgQ29tbW9uSlMtbGlrZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIHJvb3QuJGNsYW1wID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogQ2xhbXBzIGEgdGV4dCBub2RlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50LiBFbGVtZW50IGNvbnRhaW5pbmcgdGhlIHRleHQgbm9kZSB0byBjbGFtcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuIE9wdGlvbnMgdG8gcGFzcyB0byB0aGUgY2xhbXBlci5cbiAgICovXG4gIGZ1bmN0aW9uIGNsYW1wKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIHdpbiA9IHdpbmRvdyxcbiAgICAgIG9wdCA9IHtcbiAgICAgICAgY2xhbXA6IG9wdGlvbnMuY2xhbXAgfHwgMixcbiAgICAgICAgdXNlTmF0aXZlQ2xhbXA6IHR5cGVvZihvcHRpb25zLnVzZU5hdGl2ZUNsYW1wKSAhPSAndW5kZWZpbmVkJyA/IG9wdGlvbnMudXNlTmF0aXZlQ2xhbXAgOiB0cnVlLFxuICAgICAgICBzcGxpdE9uQ2hhcnM6IG9wdGlvbnMuc3BsaXRPbkNoYXJzIHx8IFsnLicsICctJywgJ+KAkycsICfigJQnLCAnICddLCAvL1NwbGl0IG9uIHNlbnRlbmNlcyAocGVyaW9kcyksIGh5cGVucywgZW4tZGFzaGVzLCBlbS1kYXNoZXMsIGFuZCB3b3JkcyAoc3BhY2VzKS5cbiAgICAgICAgYW5pbWF0ZTogb3B0aW9ucy5hbmltYXRlIHx8IGZhbHNlLFxuICAgICAgICB0cnVuY2F0aW9uQ2hhcjogb3B0aW9ucy50cnVuY2F0aW9uQ2hhciB8fCAn4oCmJyxcbiAgICAgICAgdHJ1bmNhdGlvbkhUTUw6IG9wdGlvbnMudHJ1bmNhdGlvbkhUTUxcbiAgICAgIH0sXG5cbiAgICAgIHN0eSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICBvcmlnaW5hbFRleHQgPSBlbGVtZW50LmlubmVySFRNTCxcblxuICAgICAgc3VwcG9ydHNOYXRpdmVDbGFtcCA9IHR5cGVvZihlbGVtZW50LnN0eWxlLndlYmtpdExpbmVDbGFtcCkgIT0gJ3VuZGVmaW5lZCcsXG4gICAgICBjbGFtcFZhbHVlID0gb3B0LmNsYW1wLFxuICAgICAgaXNDU1NWYWx1ZSA9IGNsYW1wVmFsdWUuaW5kZXhPZiAmJiAoY2xhbXBWYWx1ZS5pbmRleE9mKCdweCcpID4gLTEgfHwgY2xhbXBWYWx1ZS5pbmRleE9mKCdlbScpID4gLTEpLFxuICAgICAgdHJ1bmNhdGlvbkhUTUxDb250YWluZXI7XG5cbiAgICBpZiAob3B0LnRydW5jYXRpb25IVE1MKSB7XG4gICAgICB0cnVuY2F0aW9uSFRNTENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRydW5jYXRpb25IVE1MQ29udGFpbmVyLmlubmVySFRNTCA9IG9wdC50cnVuY2F0aW9uSFRNTDtcbiAgICB9XG5cblxuICAgIC8vIFVUSUxJVFkgRlVOQ1RJT05TIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBzdHlsZSBmb3IgYW4gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIFRoZSBlbGVtZW50IHRvIGNvbXB1dGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3AgVGhlIHN0eWxlIHByb3BlcnR5LlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGVsZW0sIHByb3ApIHtcbiAgICAgIGlmICghd2luLmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgd2luLmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbihlbCwgcHNldWRvKSB7XG4gICAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFwtKFthLXpdKXsxfSkvZztcbiAgICAgICAgICAgIGlmIChwcm9wID09ICdmbG9hdCcpIHByb3AgPSAnc3R5bGVGbG9hdCc7XG4gICAgICAgICAgICBpZiAocmUudGVzdChwcm9wKSkge1xuICAgICAgICAgICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKHJlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzWzJdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsLmN1cnJlbnRTdHlsZSAmJiBlbC5jdXJyZW50U3R5bGVbcHJvcF0gPyBlbC5jdXJyZW50U3R5bGVbcHJvcF0gOiBudWxsO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxpbmVzIG9mIHRleHQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYmFzZWRcbiAgICAgKiBvbiB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgYW5kIHRoZSBsaW5lLWhlaWdodCBvZiB0aGUgdGV4dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRNYXhMaW5lcyhoZWlnaHQpIHtcbiAgICAgIHZhciBhdmFpbEhlaWdodCA9IGhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgbGluZUhlaWdodCA9IGdldExpbmVIZWlnaHQoZWxlbWVudCk7XG5cbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLmZsb29yKGF2YWlsSGVpZ2h0IC8gbGluZUhlaWdodCksIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gaGVpZ2h0IGEgZ2l2ZW4gZWxlbWVudCBzaG91bGQgaGF2ZSBiYXNlZCBvbiB0aGUgbGluZS1cbiAgICAgKiBoZWlnaHQgb2YgdGhlIHRleHQgYW5kIHRoZSBnaXZlbiBjbGFtcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRNYXhIZWlnaHQoY2xtcCkge1xuICAgICAgdmFyIGxpbmVIZWlnaHQgPSBnZXRMaW5lSGVpZ2h0KGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGxpbmVIZWlnaHQgKiBjbG1wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpbmUtaGVpZ2h0IG9mIGFuIGVsZW1lbnQgYXMgYW4gaW50ZWdlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRMaW5lSGVpZ2h0KGVsZW0pIHtcbiAgICAgIHZhciBsaCA9IGNvbXB1dGVTdHlsZShlbGVtLCAnbGluZS1oZWlnaHQnKTtcbiAgICAgIGlmIChsaCA9PSAnbm9ybWFsJykge1xuICAgICAgICAvLyBOb3JtYWwgbGluZSBoZWlnaHRzIHZhcnkgZnJvbSBicm93c2VyIHRvIGJyb3dzZXIuIFRoZSBzcGVjIHJlY29tbWVuZHNcbiAgICAgICAgLy8gYSB2YWx1ZSBiZXR3ZWVuIDEuMCBhbmQgMS4yIG9mIHRoZSBmb250IHNpemUuIFVzaW5nIDEuMSB0byBzcGxpdCB0aGUgZGlmZi5cbiAgICAgICAgbGggPSBwYXJzZUludChjb21wdXRlU3R5bGUoZWxlbSwgJ2ZvbnQtc2l6ZScpKSAqIDEuMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJzZUludChsaCk7XG4gICAgfVxuXG5cbiAgICAvLyBNRUFUIEFORCBQT1RBVE9FUyAoTU1NTSwgUE9UQVRPRVMuLi4pIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gICAgdmFyIHNwbGl0T25DaGFycyA9IG9wdC5zcGxpdE9uQ2hhcnMuc2xpY2UoMCksXG4gICAgICBzcGxpdENoYXIgPSBzcGxpdE9uQ2hhcnNbMF0sXG4gICAgICBjaHVua3MsXG4gICAgICBsYXN0Q2h1bms7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIGVsZW1lbnQncyBsYXN0IGNoaWxkLiBUaGF0IG1heSBiZSBhbm90aGVyIG5vZGUgb3IgYSBub2RlJ3MgY29udGVudHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TGFzdENoaWxkKGVsZW0pIHtcbiAgICAgIC8vQ3VycmVudCBlbGVtZW50IGhhcyBjaGlsZHJlbiwgbmVlZCB0byBnbyBkZWVwZXIgYW5kIGdldCBsYXN0IGNoaWxkIGFzIGEgdGV4dCBub2RlXG4gICAgICBpZiAoZWxlbS5sYXN0Q2hpbGQuY2hpbGRyZW4gJiYgZWxlbS5sYXN0Q2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZ2V0TGFzdENoaWxkKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW0uY2hpbGRyZW4pLnBvcCgpKTtcbiAgICAgIH1cbiAgICAgIC8vVGhpcyBpcyB0aGUgYWJzb2x1dGUgbGFzdCBjaGlsZCwgYSB0ZXh0IG5vZGUsIGJ1dCBzb21ldGhpbmcncyB3cm9uZyB3aXRoIGl0LiBSZW1vdmUgaXQgYW5kIGtlZXAgdHJ5aW5nXG4gICAgICBlbHNlIGlmICghZWxlbS5sYXN0Q2hpbGQgfHwgIWVsZW0ubGFzdENoaWxkLm5vZGVWYWx1ZSB8fCBlbGVtLmxhc3RDaGlsZC5ub2RlVmFsdWUgPT09ICcnIHx8IGVsZW0ubGFzdENoaWxkLm5vZGVWYWx1ZSA9PSBvcHQudHJ1bmNhdGlvbkNoYXIpIHtcbiAgICAgICAgZWxlbS5sYXN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtLmxhc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBnZXRMYXN0Q2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICAvL1RoaXMgaXMgdGhlIGxhc3QgY2hpbGQgd2Ugd2FudCwgcmV0dXJuIGl0XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ubGFzdENoaWxkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgb25lIGNoYXJhY3RlciBhdCBhIHRpbWUgZnJvbSB0aGUgdGV4dCB1bnRpbCBpdHMgd2lkdGggb3JcbiAgICAgKiBoZWlnaHQgaXMgYmVuZWF0aCB0aGUgcGFzc2VkLWluIG1heCBwYXJhbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cnVuY2F0ZSh0YXJnZXQsIG1heEhlaWdodCkge1xuICAgICAgaWYgKCFtYXhIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0cyBnbG9iYWwgdmFyaWFibGVzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgc3BsaXRPbkNoYXJzID0gb3B0LnNwbGl0T25DaGFycy5zbGljZSgwKTtcbiAgICAgICAgc3BsaXRDaGFyID0gc3BsaXRPbkNoYXJzWzBdO1xuICAgICAgICBjaHVua3MgPSBudWxsO1xuICAgICAgICBsYXN0Q2h1bmsgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZVZhbHVlID0gdGFyZ2V0Lm5vZGVWYWx1ZS5yZXBsYWNlKG9wdC50cnVuY2F0aW9uQ2hhciwgJycpO1xuXG4gICAgICAvL0dyYWIgdGhlIG5leHQgY2h1bmtzXG4gICAgICBpZiAoIWNodW5rcykge1xuICAgICAgICAvL0lmIHRoZXJlIGFyZSBtb3JlIGNoYXJhY3RlcnMgdG8gdHJ5LCBncmFiIHRoZSBuZXh0IG9uZVxuICAgICAgICBpZiAoc3BsaXRPbkNoYXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGxpdENoYXIgPSBzcGxpdE9uQ2hhcnMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL05vIGNoYXJhY3RlcnMgdG8gY2h1bmsgYnkuIEdvIGNoYXJhY3Rlci1ieS1jaGFyYWN0ZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaXRDaGFyID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjaHVua3MgPSBub2RlVmFsdWUuc3BsaXQoc3BsaXRDaGFyKTtcbiAgICAgIH1cblxuICAgICAgLy9JZiB0aGVyZSBhcmUgY2h1bmtzIGxlZnQgdG8gcmVtb3ZlLCByZW1vdmUgdGhlIGxhc3Qgb25lIGFuZCBzZWUgaWZcbiAgICAgIC8vIHRoZSBub2RlVmFsdWUgZml0cy5cbiAgICAgIGlmIChjaHVua3MubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2h1bmtzJywgY2h1bmtzKTtcbiAgICAgICAgbGFzdENodW5rID0gY2h1bmtzLnBvcCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbGFzdENodW5rJywgbGFzdENodW5rKTtcbiAgICAgICAgYXBwbHlFbGxpcHNpcyh0YXJnZXQsIGNodW5rcy5qb2luKHNwbGl0Q2hhcikpO1xuICAgICAgfVxuICAgICAgLy9ObyBtb3JlIGNodW5rcyBjYW4gYmUgcmVtb3ZlZCB1c2luZyB0aGlzIGNoYXJhY3RlclxuICAgICAgZWxzZSB7XG4gICAgICAgIGNodW5rcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vSW5zZXJ0IHRoZSBjdXN0b20gSFRNTCBiZWZvcmUgdGhlIHRydW5jYXRpb24gY2hhcmFjdGVyXG4gICAgICBpZiAodHJ1bmNhdGlvbkhUTUxDb250YWluZXIpIHtcbiAgICAgICAgdGFyZ2V0Lm5vZGVWYWx1ZSA9IHRhcmdldC5ub2RlVmFsdWUucmVwbGFjZShvcHQudHJ1bmNhdGlvbkNoYXIsICcnKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0YXJnZXQubm9kZVZhbHVlICsgJyAnICsgdHJ1bmNhdGlvbkhUTUxDb250YWluZXIuaW5uZXJIVE1MICsgb3B0LnRydW5jYXRpb25DaGFyO1xuICAgICAgfVxuXG4gICAgICAvL1NlYXJjaCBwcm9kdWNlZCB2YWxpZCBjaHVua3NcbiAgICAgIGlmIChjaHVua3MpIHtcbiAgICAgICAgLy9JdCBmaXRzXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA8PSBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAvL1RoZXJlJ3Mgc3RpbGwgbW9yZSBjaGFyYWN0ZXJzIHRvIHRyeSBzcGxpdHRpbmcgb24sIG5vdCBxdWl0ZSBkb25lIHlldFxuICAgICAgICAgIGlmIChzcGxpdE9uQ2hhcnMubGVuZ3RoID49IDAgJiYgc3BsaXRDaGFyICE9PSAnJykge1xuICAgICAgICAgICAgYXBwbHlFbGxpcHNpcyh0YXJnZXQsIGNodW5rcy5qb2luKHNwbGl0Q2hhcikgKyBzcGxpdENoYXIgKyBsYXN0Q2h1bmspO1xuICAgICAgICAgICAgY2h1bmtzID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9GaW5pc2hlZCFcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vTm8gdmFsaWQgY2h1bmtzIHByb2R1Y2VkXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9ObyB2YWxpZCBjaHVua3MgZXZlbiB3aGVuIHNwbGl0dGluZyBieSBsZXR0ZXIsIHRpbWUgdG8gbW92ZVxuICAgICAgICAvL29uIHRvIHRoZSBuZXh0IG5vZGVcbiAgICAgICAgaWYgKHNwbGl0Q2hhciA9PT0gJycpIHtcbiAgICAgICAgICBhcHBseUVsbGlwc2lzKHRhcmdldCwgJycpO1xuICAgICAgICAgIHRhcmdldCA9IGdldExhc3RDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9JZiB5b3UgZ2V0IGhlcmUgaXQgbWVhbnMgc3RpbGwgdG9vIGJpZywgbGV0J3Mga2VlcCB0cnVuY2F0aW5nXG4gICAgICBpZiAob3B0LmFuaW1hdGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB0cnVuY2F0ZSh0YXJnZXQsIG1heEhlaWdodCk7XG4gICAgICAgIH0sIG9wdC5hbmltYXRlID09PSB0cnVlID8gMTAgOiBvcHQuYW5pbWF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1bmNhdGUodGFyZ2V0LCBtYXhIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5RWxsaXBzaXMoZWxlbSwgc3RyKSB7XG4gICAgICBlbGVtLm5vZGVWYWx1ZSA9IHN0ciArIG9wdC50cnVuY2F0aW9uQ2hhcjtcbiAgICB9XG5cblxuICAgIC8vIENPTlNUUlVDVE9SIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cblxuICAgIGlmIChjbGFtcFZhbHVlID09ICdhdXRvJykge1xuICAgICAgY2xhbXBWYWx1ZSA9IGdldE1heExpbmVzKCk7XG4gICAgfSBlbHNlIGlmIChpc0NTU1ZhbHVlKSB7XG4gICAgICBjbGFtcFZhbHVlID0gZ2V0TWF4TGluZXMocGFyc2VJbnQoY2xhbXBWYWx1ZSkpO1xuICAgIH1cblxuICAgIHZhciBjbGFtcGVkVGV4dDtcbiAgICBpZiAoc3VwcG9ydHNOYXRpdmVDbGFtcCAmJiBvcHQudXNlTmF0aXZlQ2xhbXApIHtcbiAgICAgIHN0eS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgc3R5LnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XG4gICAgICBzdHkud2Via2l0Qm94T3JpZW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgIHN0eS5kaXNwbGF5ID0gJy13ZWJraXQtYm94JztcbiAgICAgIHN0eS53ZWJraXRMaW5lQ2xhbXAgPSBjbGFtcFZhbHVlO1xuXG4gICAgICBpZiAoaXNDU1NWYWx1ZSkge1xuICAgICAgICBzdHkuaGVpZ2h0ID0gb3B0LmNsYW1wICsgJ3B4JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhlaWdodCA9IGdldE1heEhlaWdodChjbGFtcFZhbHVlKTtcbiAgICAgIGlmIChoZWlnaHQgPD0gZWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgY2xhbXBlZFRleHQgPSB0cnVuY2F0ZShnZXRMYXN0Q2hpbGQoZWxlbWVudCksIGhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdvcmlnaW5hbCc6IG9yaWdpbmFsVGV4dCxcbiAgICAgICdjbGFtcGVkJzogY2xhbXBlZFRleHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNsYW1wO1xufSkpO1xuIiwiaW1wb3J0IHJ1bkRlY2xhcmUgZnJvbSBcIi4va2V5d29yZHMvZGVjbGFyZVwiO1xyXG5cclxuXHJcblxyXG5ydW5EZWNsYXJlKCk7IiwiXHJcbi8qKlxyXG4gKiBUaGUgJ2RlY2xhcmUnIGtleXdvcmQgaXMgdXNlZCB3aGVuIGltcG9ydGluZyBsaWJyYXJpZXMgdGhhdCBkb2VzIG5vdCBoYXZlIFxyXG4gKiB0eXBlIGRlY2xhcmF0aW9ucyBidXQgeW91IHdhbnQgdG8gdXNlIHRoZW0gd2l0aG91dCB0eXBlc2NyaXB0IGVycm9ycy5cclxuICogTk9URTogJGNsYW1wIGlzIGFkZGVkIGluIHRoZSB3ZWJwYWNrIGNvbmZpZyBhcyBhIGdsb2JhbCBkZXBlbmRlbmN5XHJcbiAqL1xyXG5cclxuZGVjbGFyZSBjb25zdCAkY2xhbXA6IGFueTtcclxuXHJcbmNvbnN0IHJ1bkRlY2xhcmUgPSAoKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cnVuY2F0ZVwiKTtcclxuICBjb25zb2xlLmxvZyh0YXJnZXREaXYpO1xyXG4gIGNvbnNvbGUubG9nKCRjbGFtcCk7XHJcbiAgJGNsYW1wKHRhcmdldERpdiwge2NsYW1wOiAyfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkRlY2xhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==