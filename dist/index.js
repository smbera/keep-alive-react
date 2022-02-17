(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CACHE_NAME = `__KEEP_ALIVE_CACHE_NAME__`;
let DEFAULT_CONFIG = {
    maxLength: 10,
};
const keepAliveConfig = (config = DEFAULT_CONFIG) => {
    var _a;
    const { maxLength } = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
    window[CACHE_NAME] = {
        maxLength,
        cacheList: ((_a = window[CACHE_NAME]) === null || _a === void 0 ? void 0 : _a.cacheList) || [],
    };
    return Object.assign({ cacheName: CACHE_NAME }, DEFAULT_CONFIG);
};
exports.default = keepAliveConfig;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keepAliveConfig = exports.keepAliveHOC = exports.KeepAliveFactory = void 0;
const keepAlive_1 = __webpack_require__(2);
Object.defineProperty(exports, "KeepAliveFactory", { enumerable: true, get: function () { return keepAlive_1.KeepAliveFactory; } });
Object.defineProperty(exports, "keepAliveHOC", { enumerable: true, get: function () { return keepAlive_1.keepAliveHOC; } });
const keepAliveConfig_1 = __webpack_require__(0);
exports.keepAliveConfig = keepAliveConfig_1.default;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keepAliveHOC = exports.KeepAliveFactory = void 0;
const keepAliveCache_1 = __webpack_require__(3);
function KeepAliveFactory(name) {
    return function (WrappedComponent) {
        return keepAliveHOC(WrappedComponent, name);
    };
}
exports.KeepAliveFactory = KeepAliveFactory;
function keepAliveHOC(WrappedComponent, name) {
    return class Enhancer extends WrappedComponent {
        constructor(props) {
            super(props);
            const { getAlive, keepAlive, deleteAlive } = keepAliveCache_1.default();
            this.keepAlive = (state) => keepAlive({ name, state });
            this.getAlive = () => { var _a; return ((_a = getAlive(name)) === null || _a === void 0 ? void 0 : _a.state) || null; };
            this.deleteAlive = () => deleteAlive(name);
        }
    };
}
exports.keepAliveHOC = keepAliveHOC;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const keepAliveConfig_1 = __webpack_require__(0);
const keepAliveCache = () => {
    const { cacheName, maxLength } = keepAliveConfig_1.default();
    const getCacheList = () => {
        const storeCache = window[cacheName];
        return storeCache.cacheList;
    };
    const getAlive = (name) => {
        let cacheList = getCacheList();
        const item = cacheList.find((i) => i.name === name);
        return item || null;
    };
    const keepAlive = ({ name, state }) => {
        let cacheList = getCacheList();
        let index = cacheList.findIndex((i) => i.name === name);
        if (index !== -1) {
            cacheList.splice(index, 1, {
                name,
                state,
            });
        }
        else {
            cacheList.unshift({
                name,
                state,
            });
        }
        if (cacheList.length > maxLength)
            cacheList.pop();
    };
    const deleteAlive = (name) => {
        let cacheList = getCacheList();
        let index = cacheList.findIndex((i) => i.name === name);
        if (index !== -1) {
            cacheList.splice(index, 1);
        }
    };
    return {
        getAlive,
        keepAlive,
        deleteAlive,
    };
};
exports.default = keepAliveCache;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map