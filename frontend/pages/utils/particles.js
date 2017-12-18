(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Particles"] = factory(require("react"));
	else
		root["Particles"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(8));
var Interact_1 = __webpack_require__(9);
exports.Interact = Interact_1.default;
var Modes_1 = __webpack_require__(10);
exports.Modes = Modes_1.default;
var Particle_1 = __webpack_require__(11);
exports.Particle = Particle_1.default;
var ParticleManager_1 = __webpack_require__(12);
exports.ParticleManager = ParticleManager_1.default;
var ParticlesLibrary_1 = __webpack_require__(13);
exports.ParticlesLibrary = ParticlesLibrary_1.default;
var Vendors_1 = __webpack_require__(14);
exports.Vendors = Vendors_1.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Particles_1 = __webpack_require__(3);
exports.Particles = Particles_1.default;
exports.default = Particles_1.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var react_1 = __webpack_require__(1);
var deepClone = __webpack_require__(4);
var lib_1 = __webpack_require__(0);

var Particles = function (_react_1$PureComponen) {
    _inherits(Particles, _react_1$PureComponen);

    function Particles(props) {
        _classCallCheck(this, Particles);

        var _this = _possibleConstructorReturn(this, (Particles.__proto__ || Object.getPrototypeOf(Particles)).call(this, props));

        _this.state = {
            canvas: undefined,
            library: undefined
        };
        _this.loadCanvas = _this.loadCanvas.bind(_this);
        return _this;
    }

    _createClass(Particles, [{
        key: "destroy",
        value: function destroy() {
            this.state.library.destroy();
        }
    }, {
        key: "loadCanvas",
        value: function loadCanvas(canvas) {
            var _this2 = this;

            if (canvas) {
                this.setState({
                    canvas: canvas
                }, function () {
                    _this2.state.library.loadCanvas(_this2.state.canvas);
                    _this2.state.library.start();
                });
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                library: new lib_1.ParticlesLibrary(this.props.params)
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.state.library.destroy();
            this.setState({
                library: undefined
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                width = _props.width,
                height = _props.height,
                className = _props.className,
                canvasClassName = _props.canvasClassName;

            return React.createElement("div", { className: className }, React.createElement("canvas", { ref: this.loadCanvas, className: canvasClassName, style: lib_1.deepExtend(deepClone(this.props.style), {
                    width: width,
                    height: height
                }) }));
        }
    }]);

    return Particles;
}(react_1.PureComponent);

Particles.defaultProps = {
    width: "100%",
    height: "100%",
    params: {},
    style: {}
};
exports.default = Particles;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultParams = function () {
    return {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: false,
                    value_area: 1200
                }
            },
            color: {
                value: '#FFF'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#FFF',
                opacity: 0.6,
                width: 1,
                shadow: {
                    enable: false,
                    blur: 5,
                    color: 'lime'
                }
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'grab'
                },
                onclick: {
                    enable: false,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    line_linked: {
                        opacity: 0.35
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 100,
                    duration: 5
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: true
    };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = function (hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
exports.clamp = function (number, min, max) {
    return Math.min(Math.max(number, min), max);
};
exports.isInArray = function (value, array) {
    return array.indexOf(value) > -1;
};
exports.deepExtend = function (destination, source) {
    for (var property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            exports.deepExtend(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};
exports.getColor = function (colorObject) {
    var color = {};
    if ((typeof colorObject === "undefined" ? "undefined" : _typeof(colorObject)) == 'object') {
        if (colorObject instanceof Array) {
            var selectedColor = colorObject[Math.floor(Math.random() * colorObject.length)];
            color.rgb = exports.hexToRgb(selectedColor);
        } else {
            var r = colorObject.r,
                g = colorObject.g,
                b = colorObject.b;

            if (r !== undefined && g !== undefined && b !== undefined) {
                color.rgb = { r: r, g: g, b: b };
            } else {
                var h = colorObject.h,
                    s = colorObject.s,
                    l = colorObject.l;

                if (h !== undefined && g !== undefined && b !== undefined) {
                    color.hsl = { h: h, s: s, l: l };
                }
            }
        }
    } else if (colorObject == 'random') {
        color.rgb = {
            r: Math.floor(Math.random() * 255) + 1,
            g: Math.floor(Math.random() * 255) + 1,
            b: Math.floor(Math.random() * 255) + 1
        };
    } else if (typeof colorObject == 'string') {
        color.rgb = exports.hexToRgb(colorObject);
    }
    return color;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Interact = function () {
    function Interact(params, library) {
        _classCallCheck(this, Interact);

        this.params = params;
        this.library = library;
    }

    _createClass(Interact, [{
        key: "linkParticles",
        value: function linkParticles(p1, p2) {
            var dx = p1.x - p2.x;
            var dy = p1.y - p2.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var canvas = this.library.canvas;
            var line_linked = this.params.particles.line_linked;

            if (dist <= this.params.particles.line_linked.distance) {
                var opacity_line = this.params.particles.line_linked.opacity - dist / (1 / this.params.particles.line_linked.opacity) / this.params.particles.line_linked.distance;
                if (opacity_line > 0) {
                    var color_line = this.params.particles.line_linked.color_rgb_line;
                    var r = color_line.r,
                        g = color_line.g,
                        b = color_line.b;

                    canvas.ctx.save();
                    canvas.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                    canvas.ctx.lineWidth = this.params.particles.line_linked.width;
                    canvas.ctx.beginPath();
                    if (line_linked.shadow.enable) {
                        canvas.ctx.shadowBlur = line_linked.shadow.blur;
                        canvas.ctx.shadowColor = line_linked.shadow.color;
                    }
                    canvas.ctx.moveTo(p1.x, p1.y);
                    canvas.ctx.lineTo(p2.x, p2.y);
                    canvas.ctx.stroke();
                    canvas.ctx.closePath();
                    canvas.ctx.restore();
                }
            }
        }
    }, {
        key: "attractParticles",
        value: function attractParticles(p1, p2) {
            var dx = p1.x - p2.x;
            var dy = p1.y - p2.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= this.params.particles.line_linked.distance) {
                var ax = dx / (this.params.particles.move.attract.rotateX * 1000);
                var ay = dy / (this.params.particles.move.attract.rotateY * 1000);
                p1.vx -= ax;
                p1.vy -= ay;
                p2.vx += ax;
                p2.vy += ay;
            }
        }
    }, {
        key: "bounceParticles",
        value: function bounceParticles(p1, p2) {
            var dx = p1.x - p2.x;
            var dy = p1.y - p2.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var dist_p = p1.radius + p2.radius;
            if (dist <= dist_p) {
                p1.vx = -p1.vx;
                p1.vy = -p1.vy;
                p2.vx = -p2.vx;
                p2.vy = -p2.vy;
            }
        }
    }]);

    return Interact;
}();

exports.default = Interact;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);

var Modes = function () {
    function Modes(params, library) {
        _classCallCheck(this, Modes);

        this.params = params;
        this.library = library;
    }

    _createClass(Modes, [{
        key: "pushParticles",
        value: function pushParticles(nb, pos) {
            var _library = this.library,
                canvas = _library.canvas,
                tmp = _library.tmp,
                manager = _library.manager;

            tmp.pushing = true;
            for (var i = 0; i < nb; i++) {
                this.params.particles.array.push(new _1.Particle(this.params, this.library, this.params.particles.color, this.params.particles.opacity.value, {
                    x: pos ? pos.pos_x : Math.random() * canvas.width,
                    y: pos ? pos.pos_y : Math.random() * canvas.height
                }));
                if (i == nb - 1) {
                    if (!this.params.particles.move.enable) {
                        manager.particlesDraw();
                    }
                    tmp.pushing = false;
                }
            }
        }
    }, {
        key: "removeParticles",
        value: function removeParticles(nb) {
            var manager = this.library.manager;

            this.params.particles.array.splice(0, nb);
            if (!this.params.particles.move.enable) {
                manager.particlesDraw();
            }
        }
    }, {
        key: "bubbleParticle",
        value: function bubbleParticle(particle) {
            var _this = this;

            var tmp = this.library.tmp;

            if (this.params.interactivity.events.onhover.enable && _1.isInArray('bubble', this.params.interactivity.events.onhover.mode)) {
                var dx_mouse = particle.x - this.params.interactivity.mouse.pos_x;
                var dy_mouse = particle.y - this.params.interactivity.mouse.pos_y;
                var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                var ratio = 1 - dist_mouse / this.params.interactivity.modes.bubble.distance;
                var init = function init() {
                    particle.opacity_bubble = particle.opacity;
                    particle.radius_bubble = particle.radius;
                };
                if (dist_mouse <= this.params.interactivity.modes.bubble.distance) {
                    if (ratio >= 0 && this.params.interactivity.status == 'mousemove') {
                        if (this.params.interactivity.modes.bubble.size != this.params.particles.size.value) {
                            if (this.params.interactivity.modes.bubble.size > this.params.particles.size.value) {
                                var size = particle.radius + this.params.interactivity.modes.bubble.size * ratio;
                                if (size >= 0) {
                                    particle.radius_bubble = size;
                                }
                            } else {
                                var dif = particle.radius - this.params.interactivity.modes.bubble.size;
                                var _size = particle.radius - dif * ratio;
                                if (_size > 0) {
                                    particle.radius_bubble = _size;
                                } else {
                                    particle.radius_bubble = 0;
                                }
                            }
                        }
                        if (this.params.interactivity.modes.bubble.opacity != this.params.particles.opacity.value) {
                            if (this.params.interactivity.modes.bubble.opacity > this.params.particles.opacity.value) {
                                var opacity = this.params.interactivity.modes.bubble.opacity * ratio;
                                if (opacity > particle.opacity && opacity <= this.params.interactivity.modes.bubble.opacity) {
                                    particle.opacity_bubble = opacity;
                                }
                            } else {
                                var _opacity = particle.opacity - (this.params.particles.opacity.value - this.params.interactivity.modes.bubble.opacity) * ratio;
                                if (_opacity < particle.opacity && _opacity >= this.params.interactivity.modes.bubble.opacity) {
                                    particle.opacity_bubble = _opacity;
                                }
                            }
                        }
                    }
                } else {
                    init();
                }
                if (this.params.interactivity.status == 'mouseleave') {
                    init();
                }
            } else if (this.params.interactivity.events.onclick.enable && _1.isInArray('bubble', this.params.interactivity.events.onclick.mode)) {
                if (tmp.bubble_clicking) {
                    var _dx_mouse = particle.x - this.params.interactivity.mouse.click_pos_x;
                    var _dy_mouse = particle.y - this.params.interactivity.mouse.click_pos_y;
                    var _dist_mouse = Math.sqrt(_dx_mouse * _dx_mouse + _dy_mouse * _dy_mouse);
                    var time_spent = (new Date().getTime() - this.params.interactivity.mouse.click_time) / 1000;
                    if (time_spent > this.params.interactivity.modes.bubble.duration) {
                        tmp.bubble_duration_end = true;
                    }
                    if (time_spent > this.params.interactivity.modes.bubble.duration * 2) {
                        tmp.bubble_clicking = false;
                        tmp.bubble_duration_end = false;
                    }
                    var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                        if (bubble_param != particles_param) {
                            if (!tmp.bubble_duration_end) {
                                if (_dist_mouse <= _this.params.interactivity.modes.bubble.distance) {
                                    var obj = void 0;
                                    if (p_obj_bubble != undefined) {
                                        obj = p_obj_bubble;
                                    } else {
                                        obj = p_obj;
                                    }
                                    if (obj != bubble_param) {
                                        var value = p_obj - time_spent * (p_obj - bubble_param) / _this.params.interactivity.modes.bubble.duration;
                                        if (id == 'size') particle.radius_bubble = value;
                                        if (id == 'opacity') particle.opacity_bubble = value;
                                    }
                                } else {
                                    if (id == 'size') particle.radius_bubble = undefined;
                                    if (id == 'opacity') particle.opacity_bubble = undefined;
                                }
                            } else {
                                if (p_obj_bubble != undefined) {
                                    var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / _this.params.interactivity.modes.bubble.duration;
                                    var _dif = bubble_param - value_tmp;
                                    var _value = bubble_param + _dif;
                                    if (id == 'size') particle.radius_bubble = _value;
                                    if (id == 'opacity') particle.opacity_bubble = _value;
                                }
                            }
                        }
                    };
                    if (tmp.bubble_clicking) {
                        process(this.params.interactivity.modes.bubble.size, this.params.particles.size.value, particle.radius_bubble, particle.radius, 'size');
                        process(this.params.interactivity.modes.bubble.opacity, this.params.particles.opacity.value, particle.opacity_bubble, particle.opacity, 'opacity');
                    }
                }
            }
        }
    }, {
        key: "repulseParticle",
        value: function repulseParticle(particle) {
            var _this2 = this;

            var _library2 = this.library,
                canvas = _library2.canvas,
                tmp = _library2.tmp;

            if (this.params.interactivity.events.onhover.enable && _1.isInArray('repulse', this.params.interactivity.events.onhover.mode) && this.params.interactivity.status == 'mousemove') {
                var dx_mouse = particle.x - this.params.interactivity.mouse.pos_x;
                var dy_mouse = particle.y - this.params.interactivity.mouse.pos_y;
                var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse };
                var repulseRadius = this.params.interactivity.modes.repulse.distance;
                var velocity = 100;
                var repulseFactor = _1.clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
                var pos = {
                    x: particle.x + normVec.x * repulseFactor,
                    y: particle.y + normVec.y * repulseFactor
                };
                if (this.params.particles.move.out_mode == 'bounce') {
                    if (pos.x - particle.radius > 0 && pos.x + particle.radius < canvas.width) particle.x = pos.x;
                    if (pos.y - particle.radius > 0 && pos.y + particle.radius < canvas.height) particle.y = pos.y;
                } else {
                    particle.x = pos.x;
                    particle.y = pos.y;
                }
            } else if (this.params.interactivity.events.onclick.enable && _1.isInArray('repulse', this.params.interactivity.events.onclick.mode)) {
                if (!tmp.repulse_finish) {
                    tmp.repulse_count++;
                    if (tmp.repulse_count == this.params.particles.array.length) tmp.repulse_finish = true;
                }
                if (tmp.repulse_clicking) {
                    var _repulseRadius = Math.pow(this.params.interactivity.modes.repulse.distance / 6, 3);
                    var dx = this.params.interactivity.mouse.click_pos_x - particle.x;
                    var dy = this.params.interactivity.mouse.click_pos_y - particle.y;
                    var d = dx * dx + dy * dy;
                    var force = -_repulseRadius / d * 1;
                    var process = function process() {
                        var f = Math.atan2(dy, dx);
                        particle.vx = force * Math.cos(f);
                        particle.vy = force * Math.sin(f);
                        if (_this2.params.particles.move.out_mode == 'bounce') {
                            var _pos = {
                                x: particle.x + particle.vx,
                                y: particle.y + particle.vy
                            };
                            if (_pos.x + particle.radius > canvas.width) particle.vx = -particle.vx;else if (_pos.x - particle.radius < 0) particle.vx = -particle.vx;
                            if (_pos.y + particle.radius > canvas.height) particle.vy = -particle.vy;else if (_pos.y - particle.radius < 0) particle.vy = -particle.vy;
                        }
                    };
                    if (d <= _repulseRadius) {
                        process();
                    }
                } else {
                    if (tmp.repulse_clicking == false) {
                        particle.vx = particle.vx_i;
                        particle.vy = particle.vy_i;
                    }
                }
            }
        }
    }, {
        key: "grabParticle",
        value: function grabParticle(particle) {
            var canvas = this.library.canvas;
            var _params = this.params,
                interactivity = _params.interactivity,
                particles = _params.particles;

            if (interactivity.events.onhover.enable && interactivity.status == 'mousemove') {
                var dx_mouse = particle.x - interactivity.mouse.pos_x;
                var dy_mouse = particle.y - interactivity.mouse.pos_y;
                var dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                if (dist_mouse <= interactivity.modes.grab.distance) {
                    var grab = interactivity.modes.grab;

                    var opacity_line = grab.line_linked.opacity - dist_mouse / (1 / grab.line_linked.opacity) / grab.distance;
                    if (opacity_line > 0) {
                        var color_line = particles.line_linked.color_rgb_line;
                        var r = color_line.r,
                            g = color_line.g,
                            b = color_line.b;

                        canvas.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                        canvas.ctx.lineWidth = particles.line_linked.width;
                        canvas.ctx.beginPath();
                        canvas.ctx.moveTo(particle.x, particle.y);
                        canvas.ctx.lineTo(interactivity.mouse.pos_x, interactivity.mouse.pos_y);
                        canvas.ctx.stroke();
                        canvas.ctx.closePath();
                    }
                }
            }
        }
    }]);

    return Modes;
}();

exports.default = Modes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);

var Particle = function () {
    function Particle(params, library, color, opacity, position) {
        _classCallCheck(this, Particle);

        this.params = params;
        this.library = library;
        this.setupSize();
        this.setupPosition(position);
        this.setupColor(color);
        this.setupOpacity();
        this.setupAnimation();
    }

    _createClass(Particle, [{
        key: "setupSize",
        value: function setupSize() {
            this.radius = (this.params.particles.size.random ? Math.random() : 1) * this.params.particles.size.value;
            if (this.params.particles.size.anim.enable) {
                this.size_status = false;
                this.vs = this.params.particles.size.anim.speed / 100;
                if (!this.params.particles.size.anim.sync) this.vs = this.vs * Math.random();
            }
        }
    }, {
        key: "setupPosition",
        value: function setupPosition(position) {
            var _library = this.library,
                canvas = _library.canvas,
                vendors = _library.vendors;

            this.x = position ? position.x : Math.random() * canvas.width;
            this.y = position ? position.y : Math.random() * canvas.height;
            if (this.x > canvas.width - this.radius * 2) {
                this.x = this.x - this.radius;
            } else if (this.x < this.radius * 2) {
                this.x = this.x + this.radius;
            }
            if (this.y > canvas.height - this.radius * 2) {
                this.y = this.y - this.radius;
            } else if (this.y < this.radius * 2) {
                this.y = this.y + this.radius;
            }
            if (this.params.particles.move.bounce) {
                vendors.checkOverlap(this, position);
            }
        }
    }, {
        key: "setupColor",
        value: function setupColor(color) {
            this.color = _1.getColor(color.value);
        }
    }, {
        key: "setupOpacity",
        value: function setupOpacity() {
            this.opacity = (this.params.particles.opacity.random ? Math.random() : 1) * this.params.particles.opacity.value;
            if (this.params.particles.opacity.anim.enable) {
                this.opacity_status = false;
                this.vo = this.params.particles.opacity.anim.speed / 100;
                if (!this.params.particles.opacity.anim.sync) {
                    this.vo = this.vo * Math.random();
                }
            }
        }
    }, {
        key: "setupAnimation",
        value: function setupAnimation() {
            var _library2 = this.library,
                tmp = _library2.tmp,
                vendors = _library2.vendors;

            var velbase = null;
            switch (this.params.particles.move.direction) {
                case 'top':
                    velbase = { x: 0, y: -1 };
                    break;
                case 'top-right':
                    velbase = { x: 0.5, y: -0.5 };
                    break;
                case 'right':
                    velbase = { x: 1, y: 0 };
                    break;
                case 'bottom-right':
                    velbase = { x: 0.5, y: 0.5 };
                    break;
                case 'bottom':
                    velbase = { x: 0, y: 1 };
                    break;
                case 'bottom-left':
                    velbase = { x: -0.5, y: 1 };
                    break;
                case 'left':
                    velbase = { x: -1, y: 0 };
                    break;
                case 'top-left':
                    velbase = { x: -0.5, y: -0.5 };
                    break;
                default:
                    velbase = { x: 0, y: 0 };
                    break;
            }
            if (this.params.particles.move.straight) {
                this.vx = velbase.x;
                this.vy = velbase.y;
                if (this.params.particles.move.random) {
                    this.vx = this.vx * Math.random();
                    this.vy = this.vy * Math.random();
                }
            } else {
                this.vx = velbase.x + Math.random() - 0.5;
                this.vy = velbase.y + Math.random() - 0.5;
            }
            this.vx_i = this.vx;
            this.vy_i = this.vy;
            var shape_type = this.params.particles.shape.type;
            if ((typeof shape_type === "undefined" ? "undefined" : _typeof(shape_type)) == 'object') {
                if (shape_type instanceof Array) {
                    var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                    this.shape = shape_selected;
                }
            } else {
                this.shape = shape_type;
            }
            if (this.shape == 'image') {
                var sh = this.params.particles.shape;
                this.img = {
                    src: sh.image.src,
                    ratio: sh.image.width / sh.image.height
                };
                if (!this.img.ratio) this.img.ratio = 1;
                if (tmp.img_type == 'svg' && tmp.source_svg != undefined) {
                    vendors.createSvgImg(this);
                    if (tmp.pushing) {
                        this.img.loaded = false;
                    }
                }
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            var _this = this;

            var _library3 = this.library,
                canvas = _library3.canvas,
                tmp = _library3.tmp,
                vendors = _library3.vendors;
            var particles = this.params.particles;

            var radius = void 0;
            if (this.radius_bubble != undefined) {
                radius = this.radius_bubble;
            } else {
                radius = this.radius;
            }
            var opacity = void 0;
            if (this.opacity_bubble != undefined) {
                opacity = this.opacity_bubble;
            } else {
                opacity = this.opacity;
            }
            var color_value = void 0;
            if (this.color.rgb) {
                var _color$rgb = this.color.rgb,
                    r = _color$rgb.r,
                    g = _color$rgb.g,
                    b = _color$rgb.b;

                color_value = "rgba( " + r + ", " + g + ", " + b + ", " + opacity + " )";
            } else {
                var _color$hsl = this.color.hsl,
                    h = _color$hsl.h,
                    s = _color$hsl.s,
                    l = _color$hsl.l;

                color_value = "hsla( " + h + ", " + s + ", " + l + ", " + opacity + " )";
            }
            canvas.ctx.fillStyle = color_value;
            canvas.ctx.beginPath();
            switch (this.shape) {
                case 'circle':
                    canvas.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
                    break;
                case 'edge':
                    canvas.ctx.rect(this.x - radius, this.y - radius, radius * 2, radius * 2);
                    break;
                case 'triangle':
                    vendors.drawShape(canvas.ctx, this.x - radius, this.y + radius / 1.66, radius * 2, 3, 2);
                    break;
                case 'polygon':
                    vendors.drawShape(canvas.ctx, this.x - radius / (this.params.particles.shape.polygon.nb_sides / 3.5), this.y - radius / (2.66 / 3.5), radius * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 1);
                    break;
                case 'star':
                    vendors.drawShape(canvas.ctx, this.x - radius * 2 / (this.params.particles.shape.polygon.nb_sides / 4), this.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (this.params.particles.shape.polygon.nb_sides / 3), this.params.particles.shape.polygon.nb_sides, 2);
                    break;
                case 'image':
                    var draw = function draw(img_obj) {
                        canvas.ctx.drawImage(img_obj, _this.x - radius, _this.y - radius, radius * 2, radius * 2 / _this.img.ratio);
                    };
                    var img_obj = void 0;
                    if (tmp.img_type == 'svg') {
                        img_obj = this.img.obj;
                    } else {
                        img_obj = tmp.img_obj;
                    }
                    if (img_obj) draw(img_obj);
                    break;
            }
            canvas.ctx.closePath();
            if (this.params.particles.shape.stroke.width > 0) {
                canvas.ctx.strokeStyle = this.params.particles.shape.stroke.color;
                canvas.ctx.lineWidth = this.params.particles.shape.stroke.width;
                canvas.ctx.stroke();
            }
            canvas.ctx.fill();
        }
    }]);

    return Particle;
}();

exports.default = Particle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);

var ParticleManager = function () {
    function ParticleManager(params, interact, modes, vendors, library) {
        _classCallCheck(this, ParticleManager);

        this.params = params;
        this.interact = interact;
        this.modes = modes;
        this.vendors = vendors;
        this.library = library;
    }

    _createClass(ParticleManager, [{
        key: "particlesCreate",
        value: function particlesCreate() {
            var _params$particles = this.params.particles,
                color = _params$particles.color,
                opacity = _params$particles.opacity;

            for (var i = 0; i < this.params.particles.number.value; i++) {
                this.params.particles.array.push(new _1.Particle(this.params, this.library, color, opacity.value));
            }
        }
    }, {
        key: "particlesUpdate",
        value: function particlesUpdate() {
            var _this = this;

            var _library = this.library,
                canvas = _library.canvas,
                interact = _library.interact,
                modes = _library.modes;

            this.params.particles.array.forEach(function (particle, i) {
                if (_this.params.particles.move.enable) {
                    var ms = _this.params.particles.move.speed / 2;
                    particle.x += particle.vx * ms;
                    particle.y += particle.vy * ms;
                }
                if (_this.params.particles.opacity.anim.enable) {
                    if (particle.opacity_status == true) {
                        if (particle.opacity >= _this.params.particles.opacity.value) particle.opacity_status = false;
                        particle.opacity += particle.vo;
                    } else {
                        if (particle.opacity <= _this.params.particles.opacity.anim.opacity_min) particle.opacity_status = true;
                        particle.opacity -= particle.vo;
                    }
                    if (particle.opacity < 0) particle.opacity = 0;
                }
                if (_this.params.particles.size.anim.enable) {
                    if (particle.size_status == true) {
                        if (particle.radius >= _this.params.particles.size.value) particle.size_status = false;
                        particle.radius += particle.vs;
                    } else {
                        if (particle.radius <= _this.params.particles.size.anim.size_min) particle.size_status = true;
                        particle.radius -= particle.vs;
                    }
                    if (particle.radius < 0) particle.radius = 0;
                }
                var new_pos = void 0;
                if (_this.params.particles.move.out_mode == 'bounce') {
                    new_pos = {
                        x_left: particle.radius,
                        x_right: canvas.width,
                        y_top: particle.radius,
                        y_bottom: canvas.height
                    };
                } else {
                    new_pos = {
                        x_left: -particle.radius,
                        x_right: canvas.width + particle.radius,
                        y_top: -particle.radius,
                        y_bottom: canvas.height + particle.radius
                    };
                }
                if (particle.x - particle.radius > canvas.width) {
                    particle.x = new_pos.x_left;
                    particle.y = Math.random() * canvas.height;
                } else if (particle.x + particle.radius < 0) {
                    particle.x = new_pos.x_right;
                    particle.y = Math.random() * canvas.height;
                }
                if (particle.y - particle.radius > canvas.height) {
                    particle.y = new_pos.y_top;
                    particle.x = Math.random() * canvas.width;
                } else if (particle.y + particle.radius < 0) {
                    particle.y = new_pos.y_bottom;
                    particle.x = Math.random() * canvas.width;
                }
                switch (_this.params.particles.move.out_mode) {
                    case 'bounce':
                        if (particle.x + particle.radius > canvas.width) particle.vx = -particle.vx;else if (particle.x - particle.radius < 0) particle.vx = -particle.vx;
                        if (particle.y + particle.radius > canvas.height) particle.vy = -particle.vy;else if (particle.y - particle.radius < 0) particle.vy = -particle.vy;
                        break;
                }
                if (_1.isInArray('grab', _this.params.interactivity.events.onhover.mode)) {
                    modes.grabParticle(particle);
                }
                if (_1.isInArray('bubble', _this.params.interactivity.events.onhover.mode) || _1.isInArray('bubble', _this.params.interactivity.events.onclick.mode)) {
                    modes.bubbleParticle(particle);
                }
                if (_1.isInArray('repulse', _this.params.interactivity.events.onhover.mode) || _1.isInArray('repulse', _this.params.interactivity.events.onclick.mode)) {
                    modes.repulseParticle(particle);
                }
                if (_this.params.particles.line_linked.enable || _this.params.particles.move.attract.enable) {
                    for (var j = i + 1; j < _this.params.particles.array.length; j++) {
                        var link = _this.params.particles.array[j];
                        if (_this.params.particles.line_linked.enable) interact.linkParticles(particle, link);
                        if (_this.params.particles.move.attract.enable) interact.attractParticles(particle, link);
                        if (_this.params.particles.move.bounce) interact.bounceParticles(particle, link);
                    }
                }
            });
        }
    }, {
        key: "particlesDraw",
        value: function particlesDraw() {
            var _library2 = this.library,
                canvas = _library2.canvas,
                manager = _library2.manager;

            canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
            manager.particlesUpdate();
            this.params.particles.array.forEach(function (particle) {
                particle.draw();
            });
        }
    }, {
        key: "particlesEmpty",
        value: function particlesEmpty() {
            this.params.particles.array = [];
        }
    }, {
        key: "particlesRefresh",
        value: function particlesRefresh() {
            var _library3 = this.library,
                tmp = _library3.tmp,
                vendors = _library3.vendors;

            cancelAnimationFrame(tmp.checkAnimFrame);
            cancelAnimationFrame(tmp.drawAnimFrame);
            tmp.source_svg = undefined;
            tmp.img_obj = undefined;
            tmp.count_svg = 0;
            this.particlesEmpty();
            this.library.canvasClear();
            this.library.start();
        }
    }]);

    return ParticleManager;
}();

exports.default = ParticleManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);

var ParticlesLibrary = function () {
    function ParticlesLibrary(params) {
        _classCallCheck(this, ParticlesLibrary);

        this.tmp = {};
        this.tmp = {};
        this.loadParameters(params);
        this.extendParams();
        this.interact = new _1.Interact(this.params, this);
        this.modes = new _1.Modes(this.params, this);
        this.vendors = new _1.Vendors(this.params, this);
        this.manager = new _1.ParticleManager(this.params, this.interact, this.modes, this.vendors, this);
    }

    _createClass(ParticlesLibrary, [{
        key: "loadParameters",
        value: function loadParameters(params) {
            var defaultParams = _1.getDefaultParams();
            var mergedParams = _1.deepExtend(defaultParams, params);
            this.params = mergedParams;
        }
    }, {
        key: "loadCanvas",
        value: function loadCanvas(canvasElement) {
            this.canvas = {
                element: canvasElement,
                width: canvasElement.offsetWidth,
                height: canvasElement.offsetHeight
            };
        }
    }, {
        key: "start",
        value: function start() {
            var vendors = this.vendors;

            vendors.eventsListeners();
            vendors.start();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var tmp = this.tmp;

            this.detachListeners();
            this.vendors.detachListeners();
            cancelAnimationFrame(tmp.drawAnimFrame);
            this.canvasClear();
        }
    }, {
        key: "detachListeners",
        value: function detachListeners() {
            window.removeEventListener('resize', this.onWindowResize);
        }
    }, {
        key: "extendParams",
        value: function extendParams() {
            this.extendTmpDefinition();
            this.onWindowResize = this.onWindowResize.bind(this);
        }
    }, {
        key: "extendTmpDefinition",
        value: function extendTmpDefinition() {
            var tmp = this.tmp;

            tmp.obj = {
                size_value: this.params.particles.size.value,
                size_anim_speed: this.params.particles.size.anim.speed,
                move_speed: this.params.particles.move.speed,
                line_linked_distance: this.params.particles.line_linked.distance,
                line_linked_width: this.params.particles.line_linked.width,
                mode_grab_distance: this.params.interactivity.modes.grab.distance,
                mode_bubble_distance: this.params.interactivity.modes.bubble.distance,
                mode_bubble_size: this.params.interactivity.modes.bubble.size,
                mode_repulse_distance: this.params.interactivity.modes.repulse.distance
            };
        }
    }, {
        key: "retinaInit",
        value: function retinaInit() {
            var canvas = this.canvas,
                tmp = this.tmp;

            if (this.params.retina_detect && window.devicePixelRatio > 1) {
                canvas.pxratio = window.devicePixelRatio;
                tmp.retina = true;
                canvas.width = canvas.element.offsetWidth * canvas.pxratio;
                canvas.height = canvas.element.offsetHeight * canvas.pxratio;
                this.params.particles.size.value = tmp.obj.size_value * canvas.pxratio;
                this.params.particles.size.anim.speed = tmp.obj.size_anim_speed * canvas.pxratio;
                this.params.particles.move.speed = tmp.obj.move_speed * canvas.pxratio;
                this.params.particles.line_linked.distance = tmp.obj.line_linked_distance * canvas.pxratio;
                this.params.interactivity.modes.grab.distance = tmp.obj.mode_grab_distance * canvas.pxratio;
                this.params.interactivity.modes.bubble.distance = tmp.obj.mode_bubble_distance * canvas.pxratio;
                this.params.particles.line_linked.width = tmp.obj.line_linked_width * canvas.pxratio;
                this.params.interactivity.modes.bubble.size = tmp.obj.mode_bubble_size * canvas.pxratio;
                this.params.interactivity.modes.repulse.distance = tmp.obj.mode_repulse_distance * canvas.pxratio;
            } else {
                canvas.pxratio = 1;
                tmp.retina = false;
            }
        }
    }, {
        key: "canvasInit",
        value: function canvasInit() {
            var canvas = this.canvas;

            canvas.ctx = canvas.element.getContext('2d');
        }
    }, {
        key: "canvasSize",
        value: function canvasSize() {
            var canvas = this.canvas;

            canvas.element.width = canvas.width;
            canvas.element.height = canvas.height;
            if (this.params && this.params.interactivity.events.resize) {
                window.addEventListener('resize', this.onWindowResize);
            }
        }
    }, {
        key: "canvasPaint",
        value: function canvasPaint() {
            var canvas = this.canvas;

            canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, {
        key: "canvasClear",
        value: function canvasClear() {
            var canvas = this.canvas;

            canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, {
        key: "onWindowResize",
        value: function onWindowResize() {
            var canvas = this.canvas,
                manager = this.manager,
                tmp = this.tmp,
                vendors = this.vendors;

            canvas.width = canvas.element.offsetWidth;
            canvas.height = canvas.element.offsetHeight;
            if (tmp.retina) {
                canvas.width *= canvas.pxratio;
                canvas.height *= canvas.pxratio;
            }
            canvas.element.width = canvas.width;
            canvas.element.height = canvas.height;
            if (!this.params.particles.move.enable) {
                manager.particlesEmpty();
                manager.particlesCreate();
                manager.particlesDraw();
                vendors.densityAutoParticles();
            }
            vendors.densityAutoParticles();
        }
    }]);

    return ParticlesLibrary;
}();

exports.default = ParticlesLibrary;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);

var Vendors = function () {
    function Vendors(params, library) {
        _classCallCheck(this, Vendors);

        this.params = params;
        this.library = library;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    _createClass(Vendors, [{
        key: "eventsListeners",
        value: function eventsListeners() {
            var interactivity = this.params.interactivity;
            var canvas = this.library.canvas;

            if (interactivity.detect_on == 'window') {
                interactivity.el = window;
            } else {
                interactivity.el = canvas.element;
            }
            if (interactivity.events.onhover.enable || interactivity.events.onclick.enable) {
                interactivity.el.addEventListener('mousemove', this.onMouseMove);
                interactivity.el.addEventListener('mouseleave', this.onMouseLeave);
            }
            if (interactivity.events.onclick.enable) {
                interactivity.el.addEventListener('click', this.onClick);
            }
        }
    }, {
        key: "detachListeners",
        value: function detachListeners() {
            var interactivity = this.params.interactivity;
            var tmp = this.library.tmp;

            if (interactivity.el) {
                if (interactivity.events.onhover.enable || interactivity.events.onclick.enable) {
                    interactivity.el.removeEventListener('mousemove', this.onMouseMove);
                    interactivity.el.addEventListener('mouseleave', this.onMouseLeave);
                }
                if (interactivity.events.onclick.enable) {
                    interactivity.el.addEventListener('click', this.onClick);
                }
            }
            window.cancelAnimationFrame(tmp.drawAnimFrame);
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(event) {
            var _library = this.library,
                canvas = _library.canvas,
                tmp = _library.tmp;
            var interactivity = this.params.interactivity;

            var pos = void 0;
            if (interactivity.el == window) {
                pos = {
                    x: event.clientX,
                    y: event.clientY
                };
            } else {
                pos = {
                    x: event.offsetX || event.clientX,
                    y: event.offsetY || event.clientY
                };
            }
            interactivity.mouse.pos_x = pos.x;
            interactivity.mouse.pos_y = pos.y;
            if (tmp.retina) {
                interactivity.mouse.pos_x *= canvas.pxratio;
                interactivity.mouse.pos_y *= canvas.pxratio;
            }
            interactivity.status = 'mousemove';
        }
    }, {
        key: "onMouseLeave",
        value: function onMouseLeave(event) {
            var interactivity = this.params.interactivity;

            interactivity.mouse.pos_x = null;
            interactivity.mouse.pos_y = null;
            interactivity.status = 'mouseleave';
        }
    }, {
        key: "onClick",
        value: function onClick() {
            var _library2 = this.library,
                modes = _library2.modes,
                tmp = _library2.tmp;
            var _params = this.params,
                interactivity = _params.interactivity,
                particles = _params.particles;

            interactivity.mouse.click_pos_x = interactivity.mouse.pos_x;
            interactivity.mouse.click_pos_y = interactivity.mouse.pos_y;
            interactivity.mouse.click_time = new Date().getTime();
            if (interactivity.events.onclick.enable) {
                switch (interactivity.events.onclick.mode) {
                    case 'push':
                        if (particles.move.enable) {
                            modes.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                        } else {
                            if (interactivity.modes.push.particles_nb == 1) {
                                modes.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                            } else if (interactivity.modes.push.particles_nb > 1) {
                                modes.pushParticles(interactivity.modes.push.particles_nb);
                            }
                        }
                        break;
                    case 'remove':
                        modes.removeParticles(interactivity.modes.remove.particles_nb);
                        break;
                    case 'bubble':
                        tmp.bubble_clicking = true;
                        break;
                    case 'repulse':
                        tmp.repulse_clicking = true;
                        tmp.repulse_count = 0;
                        tmp.repulse_finish = false;
                        setTimeout(function () {
                            tmp.repulse_clicking = false;
                        }, interactivity.modes.repulse.duration * 1000);
                        break;
                }
            }
        }
    }, {
        key: "densityAutoParticles",
        value: function densityAutoParticles() {
            var _library3 = this.library,
                canvas = _library3.canvas,
                modes = _library3.modes,
                tmp = _library3.tmp;
            var particles = this.params.particles;

            if (particles.number.density.enable) {
                var area = canvas.element.width * canvas.element.height / 1000;
                if (tmp.retina) {
                    area = area / canvas.pxratio * 2;
                }
                var nb_particles = area * particles.number.value / particles.number.density.value_area;
                var missing_particles = particles.array.length - nb_particles;
                if (missing_particles < 0) {
                    modes.pushParticles(Math.abs(missing_particles));
                } else {
                    modes.removeParticles(missing_particles);
                }
            }
        }
    }, {
        key: "checkOverlap",
        value: function checkOverlap(p1, position) {
            var _library4 = this.library,
                canvas = _library4.canvas,
                vendors = _library4.vendors;
            var particles = this.params.particles;

            particles.array.forEach(function (particle) {
                var p2 = particle;
                var dx = p1.x - p2.x;
                var dy = p1.y - p2.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist <= p1.radius + p2.radius) {
                    p1.x = position ? position.x : Math.random() * canvas.width;
                    p1.y = position ? position.y : Math.random() * canvas.height;
                    vendors.checkOverlap(p1);
                }
            });
        }
    }, {
        key: "createSvgImg",
        value: function createSvgImg(particle) {
            var tmp = this.library.tmp;

            var svgXml = tmp.source_svg;
            var rgbHex = /#([0-9A-F]{3,6})/gi;
            var coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
                var color_value = void 0;
                if (particle.color.rgb) {
                    var _particle$color$rgb = particle.color.rgb,
                        _r = _particle$color$rgb.r,
                        _g = _particle$color$rgb.g,
                        _b = _particle$color$rgb.b;

                    color_value = "rgba( " + _r + ", " + _g + ", " + _b + ", " + particle.opacity + " )";
                } else {
                    var _particle$color$hsl = particle.color.hsl,
                        h = _particle$color$hsl.h,
                        s = _particle$color$hsl.s,
                        l = _particle$color$hsl.l;

                    color_value = "rgba( " + h + ", " + s + ", " + l + ", " + particle.opacity + " )";
                }
                return color_value;
            });
            var svg = new Blob([coloredSvgXml], {
                type: 'image/svg+xml;charset=utf-8'
            });
            var DOMURL = window.URL || window;
            var url = DOMURL.createObjectURL(svg);
            var img = new Image();
            img.addEventListener('load', function () {
                particle.img.obj = img;
                particle.img.loaded = true;
                DOMURL.revokeObjectURL(url);
                tmp.count_svg++;
            });
            img.src = url;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var _library5 = this.library,
                canvas = _library5.canvas,
                tmp = _library5.tmp;

            cancelAnimationFrame(tmp.drawAnimFrame);
            canvas.element.remove();
        }
    }, {
        key: "drawShape",
        value: function drawShape(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
            var sideCount = sideCountNumerator * sideCountDenominator;
            var decimalSides = sideCountNumerator / sideCountDenominator;
            var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
            var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
            c.save();
            c.beginPath();
            c.translate(startX, startY);
            c.moveTo(0, 0);
            for (var i = 0; i < sideCount; i++) {
                c.lineTo(sideLength, 0);
                c.translate(sideLength, 0);
                c.rotate(interiorAngle);
            }
            c.fill();
            c.restore();
        }
    }, {
        key: "exportImg",
        value: function exportImg() {
            var canvas = this.library.canvas;

            window.open(canvas.element.toDataURL('image/png'), '_blank');
        }
    }, {
        key: "loadImg",
        value: function loadImg(type) {
            var _library6 = this.library,
                tmp = _library6.tmp,
                vendors = _library6.vendors;
            var particles = this.params.particles;

            tmp.img_error = undefined;
            if (particles.shape.image.src != '') {
                if (type == 'svg') {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', particles.shape.image.src);
                    xhr.onreadystatechange = function (data) {
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                tmp.source_svg = data.currentTarget.response;
                                vendors.checkBeforeDraw();
                            } else {
                                console.log('Error react-particles-js - image not found');
                                tmp.img_error = true;
                            }
                        }
                    };
                    xhr.send();
                } else {
                    var img = new Image();
                    img.addEventListener('load', function () {
                        tmp.img_obj = img;
                        vendors.checkBeforeDraw();
                    });
                    img.src = particles.shape.image.src;
                }
            } else {
                console.log('Error react-particles-js - no image.src');
                tmp.img_error = true;
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            var _library7 = this.library,
                tmp = _library7.tmp,
                manager = _library7.manager,
                vendors = _library7.vendors;
            var particles = this.params.particles;

            if (particles.shape.type == 'image') {
                if (tmp.img_type == 'svg') {
                    if (tmp.count_svg >= particles.number.value) {
                        manager.particlesDraw();
                        if (!particles.move.enable) {
                            cancelAnimationFrame(tmp.drawAnimFrame);
                        } else {
                            tmp.drawAnimFrame = requestAnimationFrame(vendors.draw.bind(vendors));
                        }
                    } else {
                        if (!tmp.img_error) {
                            tmp.drawAnimFrame = requestAnimationFrame(vendors.draw.bind(vendors));
                        }
                    }
                } else {
                    if (tmp.img_obj != undefined) {
                        manager.particlesDraw();
                        if (!particles.move.enable) {
                            cancelAnimationFrame(tmp.drawAnimFrame);
                        } else {
                            tmp.drawAnimFrame = requestAnimationFrame(vendors.draw.bind(vendors));
                        }
                    } else {
                        if (!tmp.img_error) {
                            tmp.drawAnimFrame = requestAnimationFrame(vendors.draw.bind(vendors));
                        }
                    }
                }
            } else {
                manager.particlesDraw();
                if (!particles.move.enable) {
                    cancelAnimationFrame(tmp.drawAnimFrame);
                } else {
                    tmp.drawAnimFrame = requestAnimationFrame(vendors.draw.bind(vendors));
                }
            }
        }
    }, {
        key: "checkBeforeDraw",
        value: function checkBeforeDraw() {
            var _library8 = this.library,
                tmp = _library8.tmp,
                vendors = _library8.vendors;
            var particles = this.params.particles;

            if (particles.shape.type == 'image') {
                if (tmp.img_type == 'svg' && tmp.source_svg == undefined) {
                    var check = void 0;
                    tmp.checkAnimFrame = requestAnimationFrame(check);
                } else {
                    cancelAnimationFrame(tmp.checkAnimFrame);
                    if (!tmp.img_error) {
                        vendors.init();
                        vendors.draw();
                    }
                }
            } else {
                vendors.init();
                vendors.draw();
            }
        }
    }, {
        key: "init",
        value: function init() {
            var library = this.library;
            var manager = library.manager,
                vendors = library.vendors;
            var particles = this.params.particles;

            library.retinaInit();
            library.canvasInit();
            library.canvasSize();
            manager.particlesCreate();
            vendors.densityAutoParticles();
            particles.line_linked.color_rgb_line = _1.hexToRgb(particles.line_linked.color);
        }
    }, {
        key: "start",
        value: function start() {
            var _library9 = this.library,
                tmp = _library9.tmp,
                vendors = _library9.vendors;
            var particles = this.params.particles;

            if (_1.isInArray('image', particles.shape.type)) {
                tmp.img_type = particles.shape.image.src.substr(particles.shape.image.src.length - 3);
                vendors.loadImg(tmp.img_type);
            } else {
                vendors.checkBeforeDraw();
            }
        }
    }]);

    return Vendors;
}();

exports.default = Vendors;

/***/ })
/******/ ]);
});
//# sourceMappingURL=particles.js.map