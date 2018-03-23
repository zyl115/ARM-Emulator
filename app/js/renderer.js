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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setType;
/* unused harmony export getType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__);


var types = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default.a();
function setType(fullName, cons) {
    types.set(fullName, cons);
}
function getType(fullName) {
    return types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    reflection: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default()("reflection")
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NonDeclaredType */
/* unused harmony export Any */
/* unused harmony export Unit */
/* harmony export (immutable) */ __webpack_exports__["b"] = Option;
/* unused harmony export Array */
/* harmony export (immutable) */ __webpack_exports__["c"] = Tuple;
/* unused harmony export Function */
/* harmony export (immutable) */ __webpack_exports__["a"] = GenericParam;
/* unused harmony export Interface */
/* harmony export (immutable) */ __webpack_exports__["k"] = makeGeneric;
/* unused harmony export isGeneric */
/* unused harmony export getDefinition */
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* unused harmony export getPropertyNames */
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["l"] = toString;
/* unused harmony export ObjectRef */
/* unused harmony export getHashCode */
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["h"] = equals;
/* harmony export (immutable) */ __webpack_exports__["e"] = comparePrimitives;
/* harmony export (immutable) */ __webpack_exports__["d"] = compare;
/* harmony export (immutable) */ __webpack_exports__["i"] = equalsRecords;
/* harmony export (immutable) */ __webpack_exports__["f"] = compareRecords;
/* harmony export (immutable) */ __webpack_exports__["j"] = equalsUnions;
/* harmony export (immutable) */ __webpack_exports__["g"] = compareUnions;
/* unused harmony export createDisposable */
/* unused harmony export createAtom */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export jsOptions */
/* unused harmony export round */
/* unused harmony export sign */
/* unused harmony export randomNext */
/* unused harmony export applyOperator */
/* unused harmony export unescapeDataString */
/* unused harmony export escapeDataString */
/* unused harmony export escapeUriString */
/* unused harmony export clear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_weak_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_json_stringify__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Date__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Symbol__ = __webpack_require__(0);
















var NonDeclaredType = function () {
    function NonDeclaredType(kind, definition, generics) {
        __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_classCallCheck___default()(this, NonDeclaredType);

        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }

    __WEBPACK_IMPORTED_MODULE_13_babel_runtime_helpers_createClass___default()(NonDeclaredType, [{
        key: "Equals",
        value: function Equals(other) {
            if (this.kind === other.kind && this.definition === other.definition) {
                return __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(this.generics) === "object"
                // equalsRecords should also work for Type[] (tuples)
                ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
            }
            return false;
        }
    }]);

    return NonDeclaredType;
}();
var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, [t]);
}
function FableArray(t) {
    var isTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var def = null;
    var genArg = null;
    if (isTypedArray) {
        def = t;
    } else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, [genArg]);
}

function Tuple(types) {
    return new NonDeclaredType("Tuple", null, types);
}
function FableFunction(types) {
    return new NonDeclaredType("Function", null, types);
}

function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
/**
 * Returns the parent if this is a declared generic type or the argument otherwise.
 * Attention: Unlike .NET this doesn't throw an exception if type is not generic.
 */
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo = {};
        var parentInfo = parent[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]();
        __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(info).forEach(function (k) {
            var i = info[k];
            if ((typeof i === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(i)) === "object") {
                newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_object_assign___default()(parentInfo[k] || {}, i);
            } else {
                newInfo[k] = i;
            }
        });
        return newInfo;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol_iterator___default.a] === "function";
    } else if (typeof obj[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
/**
 * Returns:
 * - Records: array with names of fields
 * - Classes: array with names of getters
 * - Nulls and unions: empty array
 * - JS Objects: The result of calling Object.getOwnPropertyNames
 */
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function toString(obj) {
    var quoteStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    function isObject(x) {
        return x !== null && (typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    if (obj == null || typeof obj === "number") {
        return String(obj);
    }
    if (typeof obj === "string") {
        return quoteStrings ? __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_json_stringify___default()(obj) : obj;
    }
    if (obj instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_14__Date__["b" /* toString */])(obj);
    }
    if (typeof obj.ToString === "function") {
        return obj.ToString();
    }
    if (hasInterface(obj, "FSharpUnion")) {
        var info = obj[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]();
        var uci = info.cases[obj.tag];
        switch (uci.length) {
            case 1:
                return uci[0];
            case 2:
                // For simplicity let's always use parens, in .NET they're ommitted in some cases
                return uci[0] + " (" + toString(obj.data, true) + ")";
            default:
                return uci[0] + " (" + obj.data.map(function (x) {
                    return toString(x, true);
                }).join(",") + ")";
        }
    }
    try {
        return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_json_stringify___default()(obj, function (k, v) {
            return v && v[__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol_iterator___default.a] && !Array.isArray(v) && isObject(v) ? __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_array_from___default()(v) : v && typeof v.ToString === "function" ? toString(v) : v;
        });
    } catch (err) {
        // Fallback for objects with circular references
        return "{" + __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(obj).map(function (k) {
            return k + ": " + String(obj[k]);
        }).join(", ") + "}";
    }
}
var ObjectRef = function () {
    function ObjectRef() {
        __WEBPACK_IMPORTED_MODULE_12_babel_runtime_helpers_classCallCheck___default()(this, ObjectRef);
    }

    __WEBPACK_IMPORTED_MODULE_13_babel_runtime_helpers_createClass___default()(ObjectRef, null, [{
        key: "id",
        value: function id(o) {
            if (!ObjectRef.idMap.has(o)) {
                ObjectRef.idMap.set(o, ++ObjectRef.count);
            }
            return ObjectRef.idMap.get(o);
        }
    }]);

    return ObjectRef;
}();
ObjectRef.idMap = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_weak_map___default.a();
ObjectRef.count = 0;
function getHashCode(x) {
    return ObjectRef.id(x) * 2654435761 | 0;
}
function hash(x) {
    if ((typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(x)) === __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(1)) {
        return x * 2654435761 | 0;
    }
    if (x != null && typeof x.GetHashCode === "function") {
        return x.GetHashCode();
    } else {
        var s = toString(x);
        var h = 5381;
        var i = 0;
        var len = s.length;
        while (i < len) {
            h = h * 33 ^ s.charCodeAt(i++);
        }
        return h;
    }
}
function equals(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else if (x == null) {
        return y == null;
    } else if (y == null) {
        return false;
    } else if ((typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(x)) !== "object" || (typeof y === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(y)) !== "object") {
        return x === y;
        // Equals override or IEquatable implementation
    } else if (typeof x.Equals === "function") {
        return x.Equals(y);
    } else if (typeof y.Equals === "function") {
        return y.Equals(x);
    } else if (__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(x) !== __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(y)) {
        return false;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return false;
        }
        for (var i = 0; i < x.length; i++) {
            if (!equals(x[i], y[i])) {
                return false;
            }
        }
        return true;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return false;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i = 0; _i < x.byteLength; _i++) {
            if (dv1.getUint8(_i) !== dv2.getUint8(_i)) {
                return false;
            }
        }
        return true;
    } else if (x instanceof Date) {
        return x.getTime() === y.getTime();
    } else {
        return false;
    }
}
function comparePrimitives(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function compare(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else if (x == null) {
        return y == null ? 0 : -1;
    } else if (y == null) {
        return 1; // everything is bigger than null
    } else if ((typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(x)) !== "object" || (typeof y === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(y)) !== "object") {
        return x === y ? 0 : x < y ? -1 : 1;
        // Some types (see Long.ts) may just implement the function and not the interface
        // else if (hasInterface(x, "System.IComparable"))
    } else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    } else if (typeof y.CompareTo === "function") {
        return y.CompareTo(x) * -1;
    } else if (__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(x) !== __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(y)) {
        return -1;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return x.length < y.length ? -1 : 1;
        }
        for (var i = 0, j = 0; i < x.length; i++) {
            j = compare(x[i], y[i]);
            if (j !== 0) {
                return j;
            }
        }
        return 0;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return x.byteLength < y.byteLength ? -1 : 1;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
            b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
            if (b1 < b2) {
                return -1;
            }
            if (b1 > b2) {
                return 1;
            }
        }
        return 0;
    } else if (x instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_14__Date__["a" /* compare */])(x, y);
    } else if ((typeof x === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(x)) === "object") {
        var xhash = hash(x);
        var yhash = hash(y);
        if (xhash === yhash) {
            return equals(x, y) ? 0 : -1;
        } else {
            return xhash < yhash ? -1 : 1;
        }
    } else {
        return x < y ? -1 : 1;
    }
}
function equalsRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (!equals(x[key], y[key])) {
                    return false;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return true;
    }
}
function compareRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(keys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var key = _step2.value;

                var res = compare(x[key], y[key]);
                if (res !== 0) {
                    return res;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return 0;
    }
}
function equalsUnions(x, y) {
    return x === y || x.tag === y.tag && equals(x.data, y.data);
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    } else {
        var res = x.tag < y.tag ? -1 : x.tag > y.tag ? 1 : 0;
        return res !== 0 ? res : compare(x.data, y.data);
    }
}
function createDisposable(f) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({
        Dispose: f
    }, __WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection, function () {
        return { interfaces: ["System.IDisposable"] };
    });
}
// tslint forbids non-arrow functions, but it's
// necessary here to use the arguments object
/* tslint:disable */
function createAtom(value) {
    var atom = value;
    return function () {
        return arguments.length === 0 ? atom : (atom = arguments[0], void 0);
    };
}
/* tslint:enable */
var CaseRules = {
    None: 0,
    LowerFirst: 1
};
function isList(o) {
    if (o != null) {
        if (typeof o[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection] === "function") {
            return o[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]().type === "Microsoft.FSharp.Collections.FSharpList";
        }
    }
    return false;
}
function createObj(fields) {
    var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;
    var casesCache = arguments[2];

    var iter = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(fields);
    var cur = iter.next();
    var o = {};
    while (!cur.done) {
        var value = cur.value;
        if (Array.isArray(value)) {
            o[value[0]] = value[1];
        } else {
            casesCache = casesCache || new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default.a();
            var proto = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(value);
            var cases = casesCache.get(proto);
            if (cases == null) {
                if (typeof proto[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection] === "function") {
                    cases = proto[__WEBPACK_IMPORTED_MODULE_15__Symbol__["a" /* default */].reflection]().cases;
                    casesCache.set(proto, cases);
                }
            }
            var caseInfo = cases != null ? cases[value.tag] : null;
            if (Array.isArray(caseInfo)) {
                var key = caseInfo[0];
                if (caseRule === CaseRules.LowerFirst) {
                    key = key[0].toLowerCase() + key.substr(1);
                }
                o[key] = caseInfo.length === 1 ? true : isList(value.data) ? createObj(value.data, caseRule, casesCache) : value.data;
            } else {
                throw new Error("Cannot infer key and value of " + value);
            }
        }
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor !== Object) {
        var target = {};
        var props = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(source);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(props), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _p = _step3.value;

                target[_p] = source[_p];
            }
            // Copy also properties from prototype, see #192
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var proto = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(source);
        if (proto != null) {
            props = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_names___default()(proto);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(props), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var p = _step4.value;

                    var prop = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(proto, p);
                    if (prop.value) {
                        target[p] = prop.value;
                    } else if (prop.get) {
                        target[p] = prop.get.apply(source);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
        return target;
    } else {
        return source;
    }
}
function jsOptions(mutator) {
    var opts = {};
    mutator(opts);
    return opts;
}
function round(value) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n);
    var f = n - i;
    var e = 1e-8;
    var r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function applyOperator(x, y, operator) {
    function getMethod(obj) {
        if ((typeof obj === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_11_babel_runtime_helpers_typeof___default()(obj)) === "object") {
            var cons = __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_object_get_prototype_of___default()(obj).constructor;
            if (typeof cons[operator] === "function") {
                return cons[operator];
            }
        }
        return null;
    }
    var meth = getMethod(x);
    if (meth != null) {
        return meth(x, y);
    }
    meth = getMethod(y);
    if (meth != null) {
        return meth(x, y);
    }
    switch (operator) {
        case "op_Addition":
            return x + y;
        case "op_Subtraction":
            return x - y;
        case "op_Multiply":
            return x * y;
        case "op_Division":
            return x / y;
        case "op_Modulus":
            return x % y;
        case "op_LeftShift":
            return x << y;
        case "op_RightShift":
            return x >> y;
        case "op_BitwiseAnd":
            return x & y;
        case "op_BitwiseOr":
            return x | y;
        case "op_ExclusiveOr":
            return x ^ y;
        case "op_LogicalNot":
            return x + y;
        case "op_UnaryNegation":
            return !x;
        case "op_BooleanAnd":
            return x && y;
        case "op_BooleanOr":
            return x || y;
        default:
            return null;
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear method can be called on IDictionary
// too so we need to make a runtime check (see #1120)
function clear(col) {
    if (Array.isArray(col)) {
        col.splice(0);
    } else {
        col.clear();
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = append;
/* unused harmony export choose */
/* harmony export (immutable) */ __webpack_exports__["b"] = collect;
/* unused harmony export concat */
/* harmony export (immutable) */ __webpack_exports__["d"] = filter;
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["e"] = initialize;
/* harmony export (immutable) */ __webpack_exports__["f"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export partition */
/* unused harmony export replicate */
/* harmony export (immutable) */ __webpack_exports__["h"] = reverse;
/* unused harmony export singleton */
/* unused harmony export slice */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* unused harmony export groupBy */
/* harmony export (immutable) */ __webpack_exports__["i"] = splitAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Seq__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__ListClass__["b"]; });








/* harmony default export */ __webpack_exports__["c"] = (__WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]);

function append(xs, ys) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, ys, reverse(xs));
}
function choose(f, xs) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        var y = f(x);
        return y != null ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* getValue */])(y), acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
    return reverse(r);
}
function collect(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return append(acc, f(x));
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
// TODO: should be xs: Iterable<List<T>>
function concat(xs) {
    return collect(function (x) {
        return x;
    }, xs);
}
function filter(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return f(x) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function where(f, xs) {
    return filter(f, xs);
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("List length must be non-negative");
    }
    var xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]();
    for (var i = 1; i <= n; i++) {
        xs = new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(n - i), xs);
    }
    return xs;
}
function map(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function mapIndexed(f, xs) {
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x, i) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](f(i, x), acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
function indexed(xs) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, xs);
}
function partition(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        var lacc = acc[0];
        var racc = acc[1];
        return f(x) ? [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, lacc), racc] : [lacc, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, racc)];
    }, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()], reverse(xs));
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x) {
        return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc);
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs);
}
function singleton(x) {
    return new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]());
}
function slice(lower, upper, xs) {
    var noLower = lower == null;
    var noUpper = upper == null;
    return reverse(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["d" /* fold */])(function (acc, x, i) {
        return (noLower || lower <= i) && (noUpper || i <= upper) ? new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](x, acc) : acc;
    }, new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), xs));
}
/* ToDo: instance unzip() */
function unzip(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["e" /* foldBack */])(function (xy, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xy[1], acc[1])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
/* ToDo: instance unzip3() */
function unzip3(xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["e" /* foldBack */])(function (xyz, acc) {
        return [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[0], acc[0]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[1], acc[1]), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](xyz[2], acc[2])];
    }, xs, [new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_0__ListClass__["a" /* default */]()]);
}
function groupBy(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["j" /* map */])(function (k) {
        return [k[0], Object(__WEBPACK_IMPORTED_MODULE_3__Seq__["r" /* toList */])(k[1])];
    }, Object(__WEBPACK_IMPORTED_MODULE_1__Map__["d" /* groupBy */])(f, xs)));
}
function splitAt(index, xs) {
    if (index < 0) {
        throw new Error("The input must be non-negative.");
    }
    var i = 0;
    var last = xs;
    var first = new Array(index);
    while (i < index) {
        if (last.tail == null) {
            throw new Error("The input sequence has an insufficient number of elements.");
        }
        first[i] = last.head;
        last = last.tail;
        i++;
    }
    return [Object(__WEBPACK_IMPORTED_MODULE_0__ListClass__["b" /* ofArray */])(first), last];
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* harmony export (immutable) */ __webpack_exports__["r"] = toList;
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* harmony export (immutable) */ __webpack_exports__["a"] = choose;
/* harmony export (immutable) */ __webpack_exports__["b"] = compareWith;
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["c"] = exists;
/* unused harmony export exists2 */
/* unused harmony export filter */
/* unused harmony export where */
/* harmony export (immutable) */ __webpack_exports__["d"] = fold;
/* harmony export (immutable) */ __webpack_exports__["e"] = foldBack;
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* harmony export (immutable) */ __webpack_exports__["f"] = forAll;
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* harmony export (immutable) */ __webpack_exports__["g"] = item;
/* harmony export (immutable) */ __webpack_exports__["h"] = iterate;
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* harmony export (immutable) */ __webpack_exports__["i"] = last;
/* unused harmony export count */
/* harmony export (immutable) */ __webpack_exports__["j"] = map;
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* harmony export (immutable) */ __webpack_exports__["k"] = map2;
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export chunkBySize */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* harmony export (immutable) */ __webpack_exports__["n"] = rangeStep;
/* unused harmony export rangeChar */
/* harmony export (immutable) */ __webpack_exports__["m"] = range;
/* unused harmony export readOnly */
/* harmony export (immutable) */ __webpack_exports__["o"] = reduce;
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* harmony export (immutable) */ __webpack_exports__["p"] = scan;
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* harmony export (immutable) */ __webpack_exports__["q"] = sortWith;
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* harmony export (immutable) */ __webpack_exports__["s"] = tryFindIndex;
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* harmony export (immutable) */ __webpack_exports__["t"] = tryPick;
/* harmony export (immutable) */ __webpack_exports__["l"] = pick;
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Array__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ListClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Util__ = __webpack_require__(1);












var Enumerator = function () {
    function Enumerator(iter) {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Enumerator);

        this.iter = iter;
    }

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Enumerator, [{
        key: "MoveNext",
        value: function MoveNext() {
            var cur = this.iter.next();
            this.current = cur.value;
            return !cur.done;
        }
    }, {
        key: "Reset",
        value: function Reset() {
            throw new Error("JS iterators cannot be reset");
        }
    }, {
        key: "Dispose",
        value: function Dispose() {
            return;
        }
    }, {
        key: "Current",
        get: function get() {
            return this.current;
        }
    }, {
        key: "get_Current",
        get: function get() {
            return this.current;
        }
    }]);

    return Enumerator;
}();
function getEnumerator(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new Enumerator(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(o));
}
function toIterator(en) {
    return {
        next: function next() {
            return en.MoveNext() ? { done: false, value: en.Current } : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return Object(__WEBPACK_IMPORTED_MODULE_9__Option__["b" /* getValue */])(res);
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_8__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_8__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () {
        return unfold(function (x) {
            return x.tail != null ? [x.head, x.tail] : null;
        }, xs);
    });
}
function ofArray(xs) {
    return delay(function () {
        return unfold(function (i) {
            return i < xs.length ? [xs[i], i + 1] : null;
        }, 0);
    });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iters = [i, null];
        return unfold(function () {
            var cur = void 0;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                } else {
                    firstDone = true;
                    iters = [null, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys)];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var output = { value: null };
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(cur.value);
                    } else {
                        hasFinished = true;
                    }
                } else {
                    var _cur = innerIter.next();
                    if (!_cur.done) {
                        output = { value: _cur.value };
                        hasFinished = true;
                    } else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output.value, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                var y = f(cur.value);
                if (y != null) {
                    return [Object(__WEBPACK_IMPORTED_MODULE_9__Option__["b" /* getValue */])(y), iter];
                }
                cur = iter.next();
            }
            return null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) {
        return i !== 0;
    }, map2(function (x, y) {
        return f(x, y);
    }, xs, ys));
    return nonZero != null ? Object(__WEBPACK_IMPORTED_MODULE_9__Option__["b" /* getValue */])(nonZero) : count(xs) - count(ys);
}
function delay(f) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(f());
    });
}
function empty() {
    return unfold(function () {
        return void 0;
    });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () {
        return cond() ? [xs, true] : null;
    }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter = void 0;
        try {
            iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        } catch (err) {
            return void 0;
        } finally {
            finalFn();
        }
        return unfold(function (it) {
            try {
                var cur = it.next();
                return !cur.done ? [cur.value, it] : null;
            } catch (err) {
                return void 0;
            } finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function disposeOnce() {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    } catch (err) {
        return void 0;
    } finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    var snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(itemsToExclude);
    var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
        return !exclusionItems.some(function (excludedItem) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["h" /* equals */])(excludedItem, element);
        });
    };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    var cur = void 0;
    for (var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    var cur1 = void 0;
    var cur2 = void 0;
    for (var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs), iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function filter(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                if (f(cur.value)) {
                    return [cur.value, iter];
                }
                cur = iter.next();
            }
            return null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    } else {
        var cur = void 0;
        for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
    var cur1 = void 0;
    var cur2 = void 0;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) {
        return acc && f(x);
    }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) {
        return acc && f(x, y);
    }, true, xs, ys);
}
function tryHead(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    return cur.done ? null : Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) {
            return i < n ? [f(i), i + 1] : null;
        }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) {
            return [f(i), i + 1];
        }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0) {
        return null;
    }
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return i < xs.length ? Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(xs[i]) : null;
    }
    for (var j = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; j++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(cur.value);
        }
    }
    return null;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) {
        return f(x);
    }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) {
        return f(x, y);
    }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) {
        return f(i, x);
    }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) {
        return f(i, x, y);
    }, null, xs, ys);
}
function isEmpty(xs) {
    var i = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    return i.next().done;
}
function tryLast(xs) {
    try {
        return Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(reduce(function (_, x) {
            return x;
        }, xs));
    } catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
// A export function 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
        return acc + 1;
    }, 0, xs);
}
function map(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs));
    });
}
function indexed(xs) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, xs);
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        var iter2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(ys);
        var iter3 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(zs);
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            var cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function chunkBySize(size, xs) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_7__Array__["a" /* chunkBySize */])(size, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs));
    return ofArray(result);
}
function mapFold(f, acc, xs, transform) {
    var result = [];
    var r = void 0;
    var cur = void 0;
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }

        var _f = f(acc, cur.value);

        var _f2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_f, 2);

        r = _f2[0];
        acc = _f2[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    var result = [];
    var r = void 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        var _f3 = f(arr[i], acc);

        var _f4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_f3, 2);

        r = _f4[0];
        acc = _f4[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["d" /* compare */])(acc, x) === 1 ? acc : x;
    }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["d" /* compare */])(f(acc), f(x)) === 1 ? acc : x;
    }, xs);
}
function min(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["d" /* compare */])(acc, x) === -1 ? acc : x;
    }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["d" /* compare */])(f(acc), f(x)) === -1 ? acc : x;
    }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) {
        return [last[1], next];
    }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(Object(__WEBPACK_IMPORTED_MODULE_7__Array__["b" /* permute */])(f, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(function () {
        return unfold(function (x) {
            return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
        }, first);
    });
}
function rangeChar(first, last) {
    return delay(function () {
        return unfold(function (x) {
            return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
        }, first);
    });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) {
        return x;
    }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f);
    }
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    var acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (acc) {
            if (acc == null) {
                return [seed, seed];
            }
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) {
        return f(x, acc);
    }, seed, reverse(xs)));
}
function singleton(y) {
    return unfold(function (x) {
        return x != null ? [x, null] : null;
    }, y);
}
function skip(n, xs) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        for (var i = 1; i <= n; i++) {
            if (iter.next().done) {
                throw new Error("Seq has not enough elements");
            }
        }
        return iter;
    });
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) {
            return hasPassed || (hasPassed = !f(x));
        }, xs);
    });
}
function sortWith(f, xs) {
    var ys = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) {
        return acc + x;
    }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) {
        return acc + f(x);
    }, 0, xs);
}
function tail(xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        return iter;
    });
}
function take(n, xs) {
    var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, null];
            }
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(cur.value);
        }
    }
    return defaultValue === void 0 ? null : Object(__WEBPACK_IMPORTED_MODULE_9__Option__["c" /* makeSome */])(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return null;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return null;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        var y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return null;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol_iterator___default.a, function () {
        // Capture a copy of the first value in the closure
        // so the sequence is restarted every time, see #1230
        var acc = fst;
        return {
            next: function next() {
                var res = f(acc);
                if (res != null) {
                    acc = res[1];
                    return { done: false, value: res[0] };
                }
                return { done: true };
            }
        };
    });
}
function zip(xs, ys) {
    return map2(function (x, y) {
        return [x, y];
    }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) {
        return [x, y, z];
    }, xs, ys, zs);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(90);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = map;
/* unused harmony export mapError */
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util__ = __webpack_require__(1);






var Result = function () {
    function Result(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Result);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Result, [{
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["j" /* equalsUnions */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["g" /* compareUnions */])(this, other);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Core.FSharpResult",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Ok", Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* GenericParam */])("T")], ["Error", Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* GenericParam */])("TError")]]
            };
        }
    }]);

    return Result;
}();

/* harmony default export */ __webpack_exports__["b"] = (Result);

function map(f, result) {
    return result.tag === 0 ? new Result(0, f(result.data)) : result;
}
function mapError(f, result) {
    return result.tag === 1 ? new Result(1, f(result.data)) : result;
}
function bind(f, result) {
    return result.tag === 0 ? f(result.data) : result;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = groupBy;
/* unused harmony export countBy */
/* unused harmony export MapTree */
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony export (immutable) */ __webpack_exports__["f"] = remove;
/* unused harmony export containsValue */
/* unused harmony export tryGetValue */
/* unused harmony export exists */
/* unused harmony export find */
/* harmony export (immutable) */ __webpack_exports__["g"] = tryFind;
/* unused harmony export filter */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export forAll */
/* unused harmony export isEmpty */
/* unused harmony export iterate */
/* harmony export (immutable) */ __webpack_exports__["e"] = map;
/* unused harmony export partition */
/* unused harmony export findKey */
/* unused harmony export tryFindKey */
/* unused harmony export pick */
/* unused harmony export tryPick */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Util__ = __webpack_require__(1);


















// ----------------------------------------------
// These functions belong to Seq.ts but are
// implemented here to prevent cyclic dependencies
function groupBy(f, xs) {
    var keys = [];
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    var acc = create();
    var cur = iter.next();
    while (!cur.done) {
        var k = f(cur.value);
        var vs = tryFind(k, acc);
        if (vs == null) {
            keys.push(k);
            acc = add(k, [cur.value], acc);
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_7__Option__["b" /* getValue */])(vs).push(cur.value);
        }
        cur = iter.next();
    }
    return keys.map(function (k) {
        return [k, acc.get(k)];
    });
}
function countBy(f, xs) {
    return groupBy(f, xs).map(function (kv) {
        return [kv[0], kv[1].length];
    });
}
var MapTree = function MapTree(tag, data) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, MapTree);

    this.tag = tag | 0;
    this.data = data;
};
function tree_sizeAux(acc, m) {
    sizeAux: while (true) {
        if (m.tag === 1) {
            return acc + 1 | 0;
        } else if (m.tag === 2) {
            acc = tree_sizeAux(acc + 1, m.data[2]);
            m = m.data[3];
            continue sizeAux;
        } else {
            return acc | 0;
        }
    }
}
function tree_size(x) {
    return tree_sizeAux(0, x);
}
function tree_empty() {
    return new MapTree(0);
}
function tree_height(_arg1) {
    return _arg1.tag === 1 ? 1 : _arg1.tag === 2 ? _arg1.data[4] : 0;
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_mk(l, k, v, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return new MapTree(1, [k, v]);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return new MapTree(2, [k, v, l, r, m + 1]);
    }
    throw new Error("internal error: Map.tree_mk");
}
function tree_rebalance(t1, k, v, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + 2) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[2]) > t1h + 1) {
                if (t2.data[2].tag === 2) {
                    return tree_mk(tree_mk(t1, k, v, t2.data[2].data[2]), t2.data[2].data[0], t2.data[2].data[1], tree_mk(t2.data[2].data[3], t2.data[0], t2.data[1], t2.data[3]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, v, t2.data[2]), t2.data[0], t2.data[1], t2.data[3]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + 2) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[3]) > t2h + 1) {
                    if (t1.data[3].tag === 2) {
                        return tree_mk(tree_mk(t1.data[2], t1.data[0], t1.data[1], t1.data[3].data[2]), t1.data[3].data[0], t1.data[3].data[1], tree_mk(t1.data[3].data[3], k, v, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[2], t1.data[0], t1.data[1], tree_mk(t1.data[3], k, v, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, v, t2);
        }
    }
}
function tree_add(comparer, k, v, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c < 0) {
            return new MapTree(2, [k, v, new MapTree(0), m, 2]);
        } else if (c === 0) {
            return new MapTree(1, [k, v]);
        }
        return new MapTree(2, [k, v, m, new MapTree(0), 2]);
    } else if (m.tag === 2) {
        var _c = comparer.Compare(k, m.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, v, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c === 0) {
            return new MapTree(2, [k, v, m.data[2], m.data[3], m.data[4]]);
        }
        return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_add(comparer, k, v, m.data[3]));
    }
    return new MapTree(1, [k, v]);
}
function tree_find(comparer, k, m) {
    var res = tree_tryFind(comparer, k, m);
    if (res == null) {
        throw new Error("key not found: " + k);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_7__Option__["b" /* getValue */])(res);
}
function tree_tryFind(comparer, k, m) {
    tryFind: while (true) {
        if (m.tag === 1) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c === 0) {
                return Object(__WEBPACK_IMPORTED_MODULE_7__Option__["c" /* makeSome */])(m.data[1]);
            } else {
                return null;
            }
        } else if (m.tag === 2) {
            var c_1 = comparer.Compare(k, m.data[0]) | 0;
            if (c_1 < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue tryFind;
            } else if (c_1 === 0) {
                return Object(__WEBPACK_IMPORTED_MODULE_7__Option__["c" /* makeSome */])(m.data[1]);
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue tryFind;
            }
        } else {
            return null;
        }
    }
}
function tree_partition1(comparer, f, k, v, acc1, acc2) {
    return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], s.data[1], acc[0], acc[1]);
    } else if (s.tag === 2) {
        var acc_2 = tree_partitionAux(comparer, f, s.data[3], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], s.data[1], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[2], acc_3[0], acc_3[1]);
    }
    return acc;
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
}
function tree_filter1(comparer, f, k, v, acc) {
    return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
}
function tree_filterAux(comparer, f, s, acc) {
    return s.tag === 1 ? tree_filter1(comparer, f, s.data[0], s.data[1], acc) : s.tag === 2 ? tree_filterAux(comparer, f, s.data[3], tree_filter1(comparer, f, s.data[0], s.data[1], tree_filterAux(comparer, f, s.data[2], acc))) : acc;
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, tree_empty());
}
function tree_spliceOutSuccessor(m) {
    if (m.tag === 1) {
        return [m.data[0], m.data[1], new MapTree(0)];
    } else if (m.tag === 2) {
        if (m.data[2].tag === 0) {
            return [m.data[0], m.data[1], m.data[3]];
        } else {
            var kvl = tree_spliceOutSuccessor(m.data[2]);
            return [kvl[0], kvl[1], tree_mk(kvl[2], m.data[0], m.data[1], m.data[3])];
        }
    }
    throw new Error("internal error: Map.spliceOutSuccessor");
}
function tree_remove(comparer, k, m) {
    if (m.tag === 1) {
        var c = comparer.Compare(k, m.data[0]);
        if (c === 0) {
            return new MapTree(0);
        } else {
            return m;
        }
    } else if (m.tag === 2) {
        var _c2 = comparer.Compare(k, m.data[0]);
        if (_c2 < 0) {
            return tree_rebalance(tree_remove(comparer, k, m.data[2]), m.data[0], m.data[1], m.data[3]);
        } else if (_c2 === 0) {
            if (m.data[2].tag === 0) {
                return m.data[3];
            } else {
                if (m.data[3].tag === 0) {
                    return m.data[2];
                } else {
                    var input = tree_spliceOutSuccessor(m.data[3]);
                    return tree_mk(m.data[2], input[0], input[1], input[2]);
                }
            }
        } else {
            return tree_rebalance(m.data[2], m.data[0], m.data[1], tree_remove(comparer, k, m.data[3]));
        }
    } else {
        return tree_empty();
    }
}
function tree_mem(comparer, k, m) {
    mem: while (true) {
        if (m.tag === 1) {
            return comparer.Compare(k, m.data[0]) === 0;
        } else if (m.tag === 2) {
            var c = comparer.Compare(k, m.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                m = m.data[2];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                m = m.data[3];
                continue mem;
            }
        } else {
            return false;
        }
    }
}
function tree_iter(f, m) {
    if (m.tag === 1) {
        f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        tree_iter(f, m.data[2]);
        f(m.data[0], m.data[1]);
        tree_iter(f, m.data[3]);
    }
}
function tree_tryPick(f, m) {
    if (m.tag === 1) {
        return f(m.data[0], m.data[1]);
    } else if (m.tag === 2) {
        var matchValue = tree_tryPick(f, m.data[2]);
        if (matchValue == null) {
            var matchValue_1 = f(m.data[0], m.data[1]);
            if (matchValue_1 == null) {
                return tree_tryPick(f, m.data[3]);
            } else {
                var res = matchValue_1;
                return res;
            }
        } else {
            return matchValue;
        }
    } else {
        return null;
    }
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_exists(f, m.data[2]) ? true : f(m.data[0], m.data[1])) ? true : tree_exists(f, m.data[3]) : false;
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0], m.data[1]) : m.tag === 2 ? (tree_forall(f, m.data[2]) ? f(m.data[0], m.data[1]) : false) ? tree_forall(f, m.data[3]) : false : true;
}
function tree_mapi(f, m) {
    return m.tag === 1 ? new MapTree(1, [m.data[0], f(m.data[0], m.data[1])]) : m.tag === 2 ? new MapTree(2, [m.data[0], f(m.data[0], m.data[1]), tree_mapi(f, m.data[2]), tree_mapi(f, m.data[3]), m.data[4]]) : tree_empty();
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], m.data[1], x) : m.tag === 2 ? tree_foldBack(f, m.data[2], f(m.data[0], m.data[1], tree_foldBack(f, m.data[3], x))) : x;
}
function tree_fold(f, x, m) {
    return m.tag === 1 ? f(x, m.data[0], m.data[1]) : m.tag === 2 ? tree_fold(f, f(tree_fold(f, x, m.data[2]), m.data[0], m.data[1]), m.data[3]) : x;
}
// function tree_foldFromTo(
//     comparer: IComparer<any>, lo: any, hi: any,
//     f: (k:any, v: any, acc: any) => any, m: MapTree, x: any): any {
//   if (m.tag === 1) {
//     var cLoKey = comparer.Compare(lo, m.data[0]);
//     var cKeyHi = comparer.Compare(m.data[0], hi);
//     var x_1 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.data[0], m.data[1], x) : x;
//     return x_1;
//   } else if (m.tag === 2) {
//     var cLoKey = comparer.Compare(lo, m.data[0]);
//     var cKeyHi = comparer.Compare(m.data[0], hi);
//     var x_1 = cLoKey < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.data[2], x) : x;
//     var x_2 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.data[0], m.data[1], x_1) : x_1;
//     var x_3 = cKeyHi < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.data[3], x_2) : x_2;
//     return x_3;
//   }
//   return x;
// }
// function tree_foldSection(
//     comparer: IComparer<any>, lo: any, hi: any,
//     f: (k: any, v: any, acc: any) => any, m: MapTree, x: any) {
//   return comparer.Compare(lo, hi) === 1 ? x : tree_foldFromTo(comparer, lo, hi, f, m, x);
// }
// function tree_loop(m: MapTree, acc: any): List<[any,any]> {
//   return m.tag === 1
//     ? new List([m.data[0], m.data[1]], acc)
//     : m.tag === 2
//       ? tree_loop(m.data[2], new List([m.data[0], m.data[1]], tree_loop(m.data[3], acc)))
//       : acc;
// }
// function tree_toList(m: MapTree) {
//   return tree_loop(m, new List());
// }
// function tree_toArray(m: MapTree) {
//   return Array.from(tree_toList(m));
// }
// function tree_ofList(comparer: IComparer<any>, l: List<[any,any]>) {
//   return Seq.fold((acc: MapTree, tupledArg: [any, any]) => {
//     return tree_add(comparer, tupledArg[0], tupledArg[1], acc);
//   }, tree_empty(), l);
// }
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
        cur = e.next();
    }
    return acc;
}
// function tree_ofArray(comparer: IComparer<any>, arr: ArrayLike<[any,any]>) {
//   var res = tree_empty();
//   for (var i = 0; i <= arr.length - 1; i++) {
//     res = tree_add(comparer, arr[i][0], arr[i][1], res);
//   }
//   return res;
// }
function tree_ofSeq(comparer, c) {
    var ie = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(c);
    return tree_mkFromEnumerator(comparer, tree_empty(), ie);
}
// function tree_copyToArray(s: MapTree, arr: ArrayLike<any>, i: number) {
//   tree_iter((x, y) => { arr[i++] = [x, y]; }, s);
// }
function tree_collapseLHS(stack) {
    if (stack.tail != null) {
        if (stack.head.tag === 1) {
            return stack;
        } else if (stack.head.tag === 2) {
            return tree_collapseLHS(Object(__WEBPACK_IMPORTED_MODULE_6__ListClass__["b" /* ofArray */])([stack.head.data[2], new MapTree(1, [stack.head.data[0], stack.head.data[1]]), stack.head.data[3]], stack.tail));
        } else {
            return tree_collapseLHS(stack.tail);
        }
    } else {
        return new __WEBPACK_IMPORTED_MODULE_6__ListClass__["a" /* default */]();
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_6__ListClass__["a" /* default */](s, new __WEBPACK_IMPORTED_MODULE_6__ListClass__["a" /* default */]())), started: false };
}
function tree_moveNext(i) {
    function current(it) {
        if (it.stack.tail == null) {
            return null;
        } else if (it.stack.head.tag === 1) {
            return [it.stack.head.data[0], it.stack.head.data[1]];
        }
        throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
}

var FableMap = function () {
    /** Do not call, use Map.create instead. */
    function FableMap() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, FableMap);

        return;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FableMap, [{
        key: "ToString",
        value: function ToString() {
            return "map [" + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["l" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(m2) {
            return this.CompareTo(m2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(m2) {
            var _this = this;

            return this === m2 ? 0 : Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["b" /* compareWith */])(function (kvp1, kvp2) {
                var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
                return c !== 0 ? c : Object(__WEBPACK_IMPORTED_MODULE_10__Util__["d" /* compare */])(kvp1[1], kvp2[1]);
            }, this, m2);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "entries",
        value: function entries() {
            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(this);
        }
    }, {
        key: "keys",
        value: function keys() {
            return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["j" /* map */])(function (kv) {
                return kv[0];
            }, this);
        }
    }, {
        key: "values",
        value: function values() {
            return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["j" /* map */])(function (kv) {
                return kv[1];
            }, this);
        }
    }, {
        key: "get",
        value: function get(k) {
            return tree_find(this.comparer, k, this.tree);
        }
    }, {
        key: "has",
        value: function has(k) {
            return tree_mem(this.comparer, k, this.tree);
        }
        /** Mutating method */

    }, {
        key: "set",
        value: function set(k, v) {
            this.tree = tree_add(this.comparer, k, v, this.tree);
        }
        /** Mutating method */

    }, {
        key: "delete",
        value: function _delete(k) {
            // TODO: Is calculating the size twice is more performant than calling tree_mem?
            var oldSize = tree_size(this.tree);
            this.tree = tree_remove(this.comparer, k, this.tree);
            return oldSize > tree_size(this.tree);
        }
        /** Mutating method */

    }, {
        key: "clear",
        value: function clear() {
            this.tree = tree_empty();
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpMap",
                interfaces: ["System.IEquatable", "System.IComparable", "System.Collections.Generic.IDictionary"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_size(this.tree);
        }
    }]);

    return FableMap;
}();

/* harmony default export */ __webpack_exports__["c"] = (FableMap);

function from(comparer, tree) {
    var map = new FableMap();
    map.tree = tree;
    map.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_5__Comparer__["a" /* default */]();
    return map;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_5__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
}
function add(k, v, map) {
    return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
}
function remove(item, map) {
    return from(map.comparer, tree_remove(map.comparer, item, map.tree));
}
function containsValue(v, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["d" /* fold */])(function (acc, k) {
        return acc || Object(__WEBPACK_IMPORTED_MODULE_10__Util__["h" /* equals */])(map.get(k), v);
    }, false, map.keys());
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function exists(f, map) {
    return tree_exists(f, map.tree);
}
function find(k, map) {
    return tree_find(map.comparer, k, map.tree);
}
function tryFind(k, map) {
    return tree_tryFind(map.comparer, k, map.tree);
}
function filter(f, map) {
    return from(map.comparer, tree_filter(map.comparer, f, map.tree));
}
function fold(f, seed, map) {
    return tree_fold(f, seed, map.tree);
}
function foldBack(f, map, seed) {
    return tree_foldBack(f, map.tree, seed);
}
function forAll(f, map) {
    return tree_forall(f, map.tree);
}
function isEmpty(map) {
    return tree_isEmpty(map.tree);
}
function iterate(f, map) {
    tree_iter(f, map.tree);
}
function map(f, map) {
    return from(map.comparer, tree_mapi(f, map.tree));
}
function partition(f, map) {
    var rs = tree_partition(map.comparer, f, map.tree);
    return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
}
function findKey(f, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["l" /* pick */])(function (kv) {
        return f(kv[0], kv[1]) ? Object(__WEBPACK_IMPORTED_MODULE_7__Option__["c" /* makeSome */])(kv[0]) : null;
    }, map);
}
function tryFindKey(f, map) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["t" /* tryPick */])(function (kv) {
        return f(kv[0], kv[1]) ? Object(__WEBPACK_IMPORTED_MODULE_7__Option__["c" /* makeSome */])(kv[0]) : null;
    }, map);
}
function pick(f, map) {
    var res = tryPick(f, map);
    if (res != null) {
        return Object(__WEBPACK_IMPORTED_MODULE_7__Option__["b" /* getValue */])(res);
    }
    throw new Error("key not found");
}
function tryPick(f, map) {
    return tree_tryPick(f, map.tree);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Some */
/* harmony export (immutable) */ __webpack_exports__["c"] = makeSome;
/* harmony export (immutable) */ __webpack_exports__["b"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultArg;
/* unused harmony export defaultArgWith */
/* unused harmony export filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util__ = __webpack_require__(1);



var Some = function () {
    function Some(value) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Some);

        this.value = value;
    }
    // We don't prefix it with "Some" for consistency with erased options


    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Some, [{
        key: "ToString",
        value: function ToString() {
            return Object(__WEBPACK_IMPORTED_MODULE_2__Util__["l" /* toString */])(this.value);
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            if (other == null) {
                return false;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_2__Util__["h" /* equals */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            if (other == null) {
                return 1;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_2__Util__["d" /* compare */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }]);

    return Some;
}();
function makeSome(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function getValue(x, acceptNull) {
    if (x == null) {
        if (!acceptNull) {
            throw new Error("Option has no value");
        }
        return null;
    } else {
        return x instanceof Some ? x.value : x;
    }
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : f != null ? f(getValue(arg)) : getValue(arg);
}
function defaultArgWith(arg, defThunk) {
    return arg == null ? defThunk() : getValue(arg);
}
function filter(predicate, arg) {
    return arg != null ? !predicate(getValue(arg)) ? null : arg : arg;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fromEqualityComparer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util__ = __webpack_require__(1);





var Comparer = function () {
    function Comparer(f) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Comparer);

        this.Compare = f || __WEBPACK_IMPORTED_MODULE_3__Util__["d" /* compare */];
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Comparer, [{
        key: __WEBPACK_IMPORTED_MODULE_2__Symbol__["a" /* default */].reflection,
        value: function value() {
            return { interfaces: ["System.IComparer"] };
        }
    }]);

    return Comparer;
}();

/* harmony default export */ __webpack_exports__["a"] = (Comparer);

function fromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (typeof comparer.Compare === "function") {
        return new Comparer(comparer.Compare);
    } else {
        return new Comparer(function (x, y) {
            var xhash = comparer.GetHashCode(x);
            var yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            } else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Flags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return regNames; });
/* unused harmony export regStrings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return regNums; });
/* unused harmony export inverseRegNums */
/* harmony export (immutable) */ __webpack_exports__["h"] = register;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MemLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WAddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Int32__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);












var Flags = function () {
    function Flags(n, c, z, v) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Flags);

        this.N = n;
        this.C = c;
        this.Z = z;
        this.V = v;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Flags, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonData.Flags",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    N: "boolean",
                    C: "boolean",
                    Z: "boolean",
                    V: "boolean"
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Flags;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonData.Flags", Flags);
var RName = function () {
    function RName(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RName);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(RName, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonData.RName",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["R0"], ["R1"], ["R2"], ["R3"], ["R4"], ["R5"], ["R6"], ["R7"], ["R8"], ["R9"], ["R10"], ["R11"], ["R12"], ["R13"], ["R14"], ["R15"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }, {
        key: "RegNum",
        get: function get() {
            return regNums.get(this);
        }
    }]);

    return RName;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonData.RName", RName);
var regNames = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["R0", new RName(0)], ["R1", new RName(1)], ["R2", new RName(2)], ["R3", new RName(3)], ["R4", new RName(4)], ["R5", new RName(5)], ["R6", new RName(6)], ["R7", new RName(7)], ["R8", new RName(8)], ["R9", new RName(9)], ["R10", new RName(10)], ["R11", new RName(11)], ["R12", new RName(12)], ["R13", new RName(13)], ["R14", new RName(14)], ["R15", new RName(15)], ["PC", new RName(15)], ["LR", new RName(14)], ["SP", new RName(13)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var regStrings = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["d" /* filter */])(function (tupledArg) {
    return tupledArg[1].indexOf("R") === 0;
}, Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg_1) {
    return [tupledArg_1[1], tupledArg_1[0]];
}, Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(regNames))), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](function (x, y) {
    return x.CompareTo(y);
}));
var regNums = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["e" /* map */])(function (_arg1, s) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Int32__["b" /* parse */])(s.slice(1, s.length));
}, regStrings);
var inverseRegNums = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg) {
    return [tupledArg[1], tupledArg[0]];
}, Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(regNums)), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
function register(n) {
    if (0 <= n ? n < 16 : false) {
        return inverseRegNums.get(n);
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Register %d does not exist!"))(n);
    }
}
var MemLoc = function () {
    function MemLoc(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MemLoc);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MemLoc, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonData.MemLoc",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["DataLoc", "number"], ["Code", Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["a" /* GenericParam */])("INS")]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return MemLoc;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonData.MemLoc", MemLoc);
var WAddr = function () {
    function WAddr(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, WAddr);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(WAddr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonData.WAddr",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["WA", "number"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return WAddr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonData.WAddr", WAddr);
var DataPath = function () {
    function DataPath(fl, regs, mM) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DataPath);

        this.Fl = fl;
        this.Regs = regs;
        this.MM = mM;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DataPath, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonData.DataPath",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Fl: Flags,
                    Regs: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["c" /* default */], {
                        Key: RName,
                        Value: "number"
                    }),
                    MM: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["c" /* default */], {
                        Key: WAddr,
                        Value: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(MemLoc, {
                            INS: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["a" /* GenericParam */])("INS")
                        })
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return DataPath;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonData.DataPath", DataPath);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export compare */
/* unused harmony export compareTo */
/* unused harmony export startsWith */
/* unused harmony export indexOfAny */
/* harmony export (immutable) */ __webpack_exports__["c"] = printf;
/* harmony export (immutable) */ __webpack_exports__["e"] = toConsole;
/* unused harmony export toConsoleError */
/* harmony export (immutable) */ __webpack_exports__["g"] = toText;
/* harmony export (immutable) */ __webpack_exports__["f"] = toFail;
/* unused harmony export fsFormat */
/* unused harmony export format */
/* harmony export (immutable) */ __webpack_exports__["a"] = endsWith;
/* unused harmony export initialize */
/* unused harmony export insert */
/* unused harmony export isNullOrEmpty */
/* unused harmony export isNullOrWhiteSpace */
/* harmony export (immutable) */ __webpack_exports__["b"] = join;
/* unused harmony export validateGuid */
/* unused harmony export newGuid */
/* unused harmony export guidToArray */
/* unused harmony export arrayToGuid */
/* unused harmony export toBase64String */
/* unused harmony export fromBase64String */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* unused harmony export remove */
/* unused harmony export replace */
/* unused harmony export replicate */
/* unused harmony export getCharAtIndex */
/* harmony export (immutable) */ __webpack_exports__["d"] = split;
/* harmony export (immutable) */ __webpack_exports__["h"] = trim;
/* unused harmony export filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Date__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RegExp__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Util__ = __webpack_require__(1);





var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
// From https://stackoverflow.com/a/13653180/3922220
var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var StringComparison = {
    CurrentCulture: 0,
    CurrentCultureIgnoreCase: 1,
    InvariantCulture: 2,
    InvariantCultureIgnoreCase: 3,
    Ordinal: 4,
    OrdinalIgnoreCase: 5
};
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === StringComparison.CurrentCultureIgnoreCase || i === StringComparison.InvariantCultureIgnoreCase || i === StringComparison.OrdinalIgnoreCase;
    }
    function isOrdinal(i) {
        return i === StringComparison.Ordinal || i === StringComparison.OrdinalIgnoreCase;
    }
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    } // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    switch (args.length) {
        case 2:
            return cmp(args[0], args[1], false);
        case 3:
            return cmp(args[0], args[1], args[2]);
        case 4:
            return cmp(args[0], args[1], args[2] === true);
        case 5:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareTo(x, y) {
    return cmp(x, y, false);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf) {
    if (str == null || str === "") {
        return -1;
    }
    var startIndex = (arguments.length <= 2 ? 0 : arguments.length - 2) > 0 ? arguments.length <= 2 ? undefined : arguments[2] : 0;
    if (startIndex < 0) {
        throw new Error("String.indexOfAny: Start index cannot be negative");
    }
    var length = (arguments.length <= 2 ? 0 : arguments.length - 2) > 1 ? arguments.length <= 3 ? undefined : arguments[3] : str.length - startIndex;
    if (length < 0) {
        throw new Error("String.indexOfAny: Length cannot be negative");
    }
    if (length > str.length - startIndex) {
        throw new Error("String.indexOfAny: Invalid startIndex and length");
    }
    str = str.substr(startIndex, length);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(anyOf), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            var index = str.indexOf(c);
            if (index > -1) {
                return index + startIndex;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return -1;
}
function toHex(value) {
    return value < 0 ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16) : value.toString(16);
}
function printf(input) {
    return {
        input: input,
        cont: fsFormat(input)
    };
}
function toConsole(arg) {
    return arg.cont(console.log);
}
function toConsoleError(arg) {
    return arg.cont(console.error);
}
function toText(arg) {
    return arg.cont(function (x) {
        return x;
    });
}
function toFail(arg) {
    return arg.cont(function (x) {
        throw new Error(x);
    });
}
function formatOnce(str2, rep) {
    return str2.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
        switch (format) {
            case "f":
            case "F":
                rep = rep.toFixed(precision || 6);
                break;
            case "g":
            case "G":
                rep = rep.toPrecision(precision);
                break;
            case "e":
            case "E":
                rep = rep.toExponential(precision);
                break;
            case "O":
                rep = Object(__WEBPACK_IMPORTED_MODULE_4__Util__["l" /* toString */])(rep);
                break;
            case "A":
                rep = Object(__WEBPACK_IMPORTED_MODULE_4__Util__["l" /* toString */])(rep, true);
                break;
            case "x":
                rep = toHex(Number(rep));
                break;
            case "X":
                rep = toHex(Number(rep)).toUpperCase();
                break;
        }
        var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep, 10) >= 0;
        pad = parseInt(pad, 10);
        if (!isNaN(pad)) {
            var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
            rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
        }
        var once = prefix + (plusPrefix ? "+" + rep : rep);
        return once.replace(/%/g, "%%");
    });
}
function createPrinter(str, cont) {
    var printer = function printer() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        // Make a copy as the function may be used several times
        var strCopy = str;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(args), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var arg = _step2.value;

                strCopy = formatOnce(strCopy, arg);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return fsFormatRegExp.test(strCopy) ? createPrinter(strCopy, cont) : cont(strCopy.replace(/%%/g, "%"));
    };
    // Mark it as curried so it doesn't
    // get wrapped by CurriedLambda
    printer.curried = true;
    return printer;
}
function fsFormat(str) {
    return function (cont) {
        return fsFormatRegExp.test(str) ? createPrinter(str, cont) : cont(str);
    };
}
function format(str) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    return str.replace(formatRegExp, function (match, idx, pad, pattern) {
        var rep = args[idx];
        var padSymbol = " ";
        if (typeof rep === "number") {
            switch ((pattern || "").substring(0, 1)) {
                case "f":
                case "F":
                    rep = pattern.length > 1 ? rep.toFixed(pattern.substring(1)) : rep.toFixed(2);
                    break;
                case "g":
                case "G":
                    rep = pattern.length > 1 ? rep.toPrecision(pattern.substring(1)) : rep.toPrecision();
                    break;
                case "e":
                case "E":
                    rep = pattern.length > 1 ? rep.toExponential(pattern.substring(1)) : rep.toExponential();
                    break;
                case "p":
                case "P":
                    rep = (pattern.length > 1 ? (rep * 100).toFixed(pattern.substring(1)) : (rep * 100).toFixed(2)) + " %";
                    break;
                case "x":
                    rep = toHex(Number(rep));
                    break;
                case "X":
                    rep = toHex(Number(rep)).toUpperCase();
                    break;
                default:
                    var m = /^(0+)(\.0+)?$/.exec(pattern);
                    if (m != null) {
                        var decs = 0;
                        if (m[2] != null) {
                            rep = rep.toFixed(decs = m[2].length - 1);
                        }
                        pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
                        padSymbol = "0";
                    } else if (pattern) {
                        rep = pattern;
                    }
            }
        } else if (typeof rep.ToString === "function") {
            rep = rep.ToString(pattern);
        } else if (rep instanceof Date) {
            rep = Object(__WEBPACK_IMPORTED_MODULE_2__Date__["b" /* toString */])(rep, pattern);
        }
        pad = parseInt((pad || "").substring(1), 10);
        if (!isNaN(pad)) {
            rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    var idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("String length must be non-negative");
    }
    var xs = new Array(n);
    for (var i = 0; i < n; i++) {
        xs[i] = f(i);
    }
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function join(delimiter, xs) {
    var xs2 = typeof xs === "string" ? [xs] : xs;
    var len = arguments.length;
    if (len > 2) {
        xs2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            xs2[key - 1] = arguments[key];
        }
    } else if (!Array.isArray(xs2)) {
        xs2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default()(xs2);
    }
    return xs2.map(function (x) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__Util__["l" /* toString */])(x);
    }).join(delimiter);
}
/** Validates UUID as specified in RFC4122 (versions 1-5). Trims braces. */
function validateGuid(str, doNotThrow) {
    var trimmed = trim(str, "both", "{", "}");
    if (guidRegex.test(trimmed)) {
        return doNotThrow ? [true, trimmed] : trimmed;
    } else if (doNotThrow) {
        return [false, "00000000-0000-0000-0000-000000000000"];
    }
    throw new Error("Guid should contain 32 digits with 4 dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
/* tslint:disable */
// From https://gist.github.com/LeverOne/1308368
function newGuid() {
    var b = "";
    for (var a = 0; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {}
    return b;
}
// Maps for number <-> hex string conversion
var _convertMapsInitialized = false;
var _byteToHex = void 0;
var _hexToByte = void 0;
function initConvertMaps() {
    _byteToHex = new Array(256);
    _hexToByte = {};
    for (var i = 0; i < 256; i++) {
        _byteToHex[i] = (i + 0x100).toString(16).substr(1);
        _hexToByte[_byteToHex[i]] = i;
    }
    _convertMapsInitialized = true;
}
/** Parse a UUID into it's component bytes */
// Adapted from https://github.com/zefferus/uuid-parse
function guidToArray(s) {
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    var i = 0;
    var buf = new Uint8Array(16);
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
        switch (i) {
            // .NET saves first three byte groups with differten endianness
            // See https://stackoverflow.com/a/16722909/3922220
            case 0:
            case 1:
            case 2:
            case 3:
                buf[3 - i++] = _hexToByte[oct];
                break;
            case 4:
            case 5:
                buf[9 - i++] = _hexToByte[oct];
                break;
            case 6:
            case 7:
                buf[13 - i++] = _hexToByte[oct];
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                buf[i++] = _hexToByte[oct];
                break;
        }
    });
    // Zero out remaining bytes if string was short
    while (i < 16) {
        buf[i++] = 0;
    }
    return buf;
}
/** Convert UUID byte array into a string */
function arrayToGuid(buf) {
    if (buf.length !== 16) {
        throw new Error("Byte array for GUID must be exactly 16 bytes long");
    }
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    return _byteToHex[buf[3]] + _byteToHex[buf[2]] + _byteToHex[buf[1]] + _byteToHex[buf[0]] + "-" + _byteToHex[buf[5]] + _byteToHex[buf[4]] + "-" + _byteToHex[buf[7]] + _byteToHex[buf[6]] + "-" + _byteToHex[buf[8]] + _byteToHex[buf[9]] + "-" + _byteToHex[buf[10]] + _byteToHex[buf[11]] + _byteToHex[buf[12]] + _byteToHex[buf[13]] + _byteToHex[buf[14]] + _byteToHex[buf[15]];
}
/* tslint:enable */
function notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function toBase64String(inArray) {
    var str = "";
    for (var i = 0; i < inArray.length; i++) {
        str += String.fromCharCode(inArray[i]);
    }
    return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
    var binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    str = String(str);
    len = len - str.length;
    for (var i = 0; i < len; i++) {
        str = isRight ? str + ch : ch + str;
    }
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && startIndex + count > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(Object(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function getCharAtIndex(input, index) {
    if (index < 0 || index > input.length) {
        throw new Error("System.IndexOutOfRangeException: Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count === "number" ? count : null;
    removeEmpty = typeof removeEmpty === "number" ? removeEmpty : null;
    if (count < 0) {
        throw new Error("Count cannot be less than zero");
    }
    if (count === 0) {
        return [];
    }
    var splitters2 = splitters;
    if (!Array.isArray(splitters)) {
        var len = arguments.length;
        splitters2 = Array(len - 1);
        for (var key = 1; key < len; key++) {
            splitters2[key - 1] = arguments[key];
        }
    }
    splitters2 = splitters2.map(function (x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(x);
    });
    splitters2 = splitters2.length > 0 ? splitters2 : [" "];
    var i = 0;
    var splits = [];
    var reg = new RegExp(splitters2.join("|"), "g");
    while (count == null || count > 1) {
        var m = reg.exec(str);
        if (m === null) {
            break;
        }
        if (!removeEmpty || m.index - i > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || str.length - i > 0) {
        splits.push(str.substring(i));
    }
    return splits;
}
function trim(str, side) {
    for (var _len4 = arguments.length, chars = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        chars[_key4 - 2] = arguments[_key4];
    }

    if (side === "both" && chars.length === 0) {
        return str.trim();
    }
    if (side === "start" || side === "both") {
        var reg = chars.length === 0 ? /^\s+/ : new RegExp("^[" + Object(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(chars.join("")) + "]+");
        str = str.replace(reg, "");
    }
    if (side === "end" || side === "both") {
        var _reg = chars.length === 0 ? /\s+$/ : new RegExp("[" + Object(__WEBPACK_IMPORTED_MODULE_3__RegExp__["a" /* escape */])(chars.join("")) + "]+$");
        str = str.replace(_reg, "");
    }
    return str;
}
function filter(pred, x) {
    return x.split("").filter(pred).join("");
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(44);
var Symbol = __webpack_require__(19).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(19);
var core = __webpack_require__(7);
var ctx = __webpack_require__(31);
var hide = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LORS; });
/* unused harmony export IndexMode */
/* unused harmony export LSInstr */
/* unused harmony export LDRPseudo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export Bkt */
/* unused harmony export LSSpec */
/* unused harmony export opCodes */
/* harmony export (immutable) */ __webpack_exports__["l"] = splitIntoWords;
/* unused harmony export convCharListToStr */
/* unused harmony export optToRes */
/* harmony export (immutable) */ __webpack_exports__["k"] = removeEmptyStr;
/* unused harmony export checkTwoEl */
/* harmony export (immutable) */ __webpack_exports__["m"] = splitStrIntoList;
/* harmony export (immutable) */ __webpack_exports__["j"] = parseBktResGen;
/* unused harmony export arithOp */
/* unused harmony export shiftMode */
/* harmony export (immutable) */ __webpack_exports__["f"] = convExp2LitNoCheck;
/* harmony export (immutable) */ __webpack_exports__["e"] = convExp2Lit;
/* unused harmony export checkOffsetValidity */
/* unused harmony export convExp2Offset */
/* harmony export (immutable) */ __webpack_exports__["i"] = litOrReg;
/* unused harmony export str2Offset */
/* unused harmony export parseSqBktRes */
/* harmony export (immutable) */ __webpack_exports__["n"] = strList2Op2;
/* unused harmony export strList2Offset */
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dataMemAddrStart; });
/* unused harmony export byteWordTwoFunc */
/* harmony export (immutable) */ __webpack_exports__["o"] = updateRec;
/* unused harmony export breakWordIntoBytes */
/* unused harmony export checkAddrValidity */
/* unused harmony export checkAddrAlign */
/* unused harmony export loadMMDataWord */
/* unused harmony export loadMMDataByte */
/* unused harmony export word2Byte */
/* unused harmony export storeMMDataWord */
/* unused harmony export storeMMDataByte */
/* unused harmony export loadFunc */
/* harmony export (immutable) */ __webpack_exports__["d"] = PCPlus4;
/* unused harmony export storeDataReturnMM */
/* unused harmony export LSMain */
/* unused harmony export LDRPseudoExec */
/* harmony export (immutable) */ __webpack_exports__["h"] = execLS;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_RegExp__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Int32__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);





















var LORS = function () {
    function LORS(tag) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LORS);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LORS, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.LORS",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["L"], ["S"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return LORS;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.LORS", LORS);
var IndexMode = function () {
    function IndexMode(tag) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, IndexMode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(IndexMode, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.IndexMode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["PRE"], ["POST"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return IndexMode;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.IndexMode", IndexMode);
var LSInstr = function () {
    function LSInstr(ins, _byte, reg1, reg2, offset, pointerUpdate, cond) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LSInstr);

        this.Ins = ins;
        this.Byte = _byte;
        this.Reg1 = reg1;
        this.Reg2 = reg2;
        this.Offset = offset;
        this.PointerUpdate = pointerUpdate;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LSInstr, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.LSInstr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Ins: LORS,
                    Byte: "boolean",
                    Reg1: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */],
                    Reg2: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */],
                    Offset: Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */]),
                    PointerUpdate: Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(IndexMode),
                    Cond: __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return LSInstr;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.LSInstr", LSInstr);
var LDRPseudo = function () {
    function LDRPseudo(dest, value, cond) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LDRPseudo);

        this.Dest = dest;
        this.Value = value;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(LDRPseudo, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.LDRPseudo",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Dest: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */],
                    Value: "number",
                    Cond: __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return LDRPseudo;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.LDRPseudo", LDRPseudo);
var Instr = function () {
    function Instr(tag, data) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.Instr",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["LS", LSInstr], ["LDRP", LDRPseudo]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.Instr", Instr);
var Bkt = function () {
    function Bkt(preBkt, inBkt, postBkt) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Bkt);

        this.PreBkt = preBkt;
        this.InBkt = inBkt;
        this.PostBkt = postBkt;
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Bkt, [{
        key: __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LS.Bkt",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    PreBkt: "string",
                    InBkt: "string",
                    PostBkt: "string"
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Bkt;
}();
Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LS.Bkt", Bkt);
var LSSpec = new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["b" /* InstrClass */](2), Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["LDR", "STR"]), Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["", "B"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["f" /* opCodeExpand */])(LSSpec);
function splitIntoWords(line, charArray) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(k, "both");
    }, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["d" /* split */])(line, charArray, null, 0)));
}
function convCharListToStr(list) {
    return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["b" /* join */])("", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_array_from___default()(list));
}
function optToRes(inp, error) {
    if (inp == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, error);
    } else {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(inp));
    }
}
function removeEmptyStr(strList) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["d" /* filter */])(function (k) {
        return k !== "";
    }, strList);
}
function checkTwoEl(strList) {
    var $var1 = strList.tail != null ? strList.tail.tail == null ? [1] : strList.tail.tail.tail == null ? [0, strList.head, strList.tail.head] : [2] : [2];

    switch ($var1[0]) {
        case 0:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, [$var1[1], $var1[2]]);

        case 1:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid syntax: Symbol not found.check symbols such as ',', '[', ']' etc");

        case 2:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid syntax:check symbols such as ',', '[', ']' etc");
    }
}
function splitStrIntoList(str) {
    return splitIntoWords(str, [","]);
}
function parseBktResGen(lb, rb, str) {
    var leftBktSep = function leftBktSep(inp) {
        return checkTwoEl(splitIntoWords(inp, [lb]));
    };

    var rightBktSep = function rightBktSep(inp_1) {
        return checkTwoEl(splitIntoWords(inp_1, [rb]));
    };

    var matchValue = leftBktSep(str);

    if (matchValue.tag === 1) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, matchValue.data);
    } else {
        var rest = matchValue.data[1];
        var prebkt = matchValue.data[0];
        var matchValue_1 = rightBktSep(rest);

        if (matchValue_1.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, matchValue_1.data);
        } else {
            var postbkt = matchValue_1.data[1];
            var inbkt = matchValue_1.data[0];
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Bkt(prebkt, inbkt, postbkt));
        }
    }
}
function arithOp(op1, op2, sym) {
    if (sym === "*") {
        return op1 * op2;
    } else if (sym === "+") {
        return op1 + op2;
    } else if (sym === "-") {
        return op1 - op2;
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("should not happen"));
    }
}
var shiftMode = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["LSL", new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["b" /* ShiftRotateOption */](0)], ["LSR", new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["b" /* ShiftRotateOption */](2)], ["ASR", new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["b" /* ShiftRotateOption */](1)], ["ROR", new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["b" /* ShiftRotateOption */](3)]]), new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
function convExp2LitNoCheck(str, symtab) {
    var charList = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(str);

    var convStr2Lit = function convStr2Lit(symtab_1, str_1) {
        if (str_1.indexOf("0X") === 0) {
            var numWithout0x = str_1.slice(2, str_1.length);
            var matchValue = Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_RegExp__["b" /* isMatch */])(numWithout0x, "^[0-9A-F][0-9A-F]*$");

            if (matchValue) {
                return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Int32__["b" /* parse */])(numWithout0x, 16) >>> 0);
            } else {
                return null;
            }
        } else if (str_1.indexOf("0B") === 0) {
            var numWithout0b = str_1.slice(2, str_1.length);
            var matchValue_1 = Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_RegExp__["b" /* isMatch */])(numWithout0b, "^[0-1][0-1]*$");

            if (matchValue_1) {
                return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Int32__["b" /* parse */])(numWithout0b, 2));
            } else {
                return null;
            }
        } else {
            var matchValue_2 = Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_RegExp__["b" /* isMatch */])(str_1, "^[0-9\\-][0-9]*$");

            if (matchValue_2) {
                return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Int32__["b" /* parse */])(str_1, 10) >>> 0);
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(str_1, symtab_1), null, function (arg0) {
                    return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, arg0);
                });
            }
        }
    };

    var detectFirst = function detectFirst(list) {
        var firstOpIndex = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["s" /* tryFindIndex */])(function (k) {
            return (k === "+" ? true : k === "-") ? true : k === "*";
        }, list);

        if (firstOpIndex != null) {
            var patternInput = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["i" /* splitAt */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(firstOpIndex), list);
            var firstLitStr = convCharListToStr(patternInput[0]);
            var matchValue_3 = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["g" /* item */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(firstOpIndex), list);
            var $var2 = matchValue_3 === "-" ? Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(firstOpIndex) === 0 ? [0] : [1] : [1];

            switch ($var2[0]) {
                case 0:
                    return [new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, 0), patternInput[1].tail, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["g" /* item */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(firstOpIndex), list)];

                case 1:
                    return [convStr2Lit(symtab, firstLitStr), patternInput[1].tail, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["g" /* item */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(firstOpIndex), list)];
            }
        } else {
            return function (k_1) {
                return [k_1, new __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](), "!"];
            }(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(convStr2Lit)(symtab)(convCharListToStr(list)));
        }
    };

    var parseExp = function parseExp(firstLit, operator, cList, symtab_2) {
        parseExp: while (true) {
            var patternInput_1 = detectFirst(cList);

            if (patternInput_1[2] === "!") {
                if (patternInput_1[0] != null) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(patternInput_1[0]).tag === 0) {
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, arithOp(firstLit, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(patternInput_1[0]).data, operator));
                    } else {
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "unexpected. should not happen.");
                    }
                } else {
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Invalid Literal %A"))(patternInput_1[0]));
                }
            } else if (patternInput_1[0] != null) {
                if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(patternInput_1[0]).tag === 0) {
                    var newFirstLit = arithOp(firstLit, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(patternInput_1[0]).data, operator);
                    firstLit = newFirstLit;
                    operator = patternInput_1[2];
                    cList = patternInput_1[1];
                    symtab_2 = symtab_2;
                    continue parseExp;
                } else {
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "unexpected. should not happen.");
                }
            } else {
                return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid Literal");
            }
        }
    };

    return parseExp(0, "+", charList, symtab);
}
function convExp2Lit(str, symtab) {
    var checkFinalResult = function checkFinalResult(inp) {
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["c" /* checkLitValidity */])(inp);

        if (matchValue) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, inp);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Invalid Literal %A"))(inp));
        }
    };

    return function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(checkFinalResult, result);
    }(convExp2LitNoCheck(str, symtab));
}
function checkOffsetValidity(num) {
    if (num > -4096) {
        return num < 4096;
    } else {
        return false;
    }
}
function convExp2Offset(str, symtab) {
    var checkFinalResult = function checkFinalResult(inp) {
        var matchValue = checkOffsetValidity(~~inp);

        if (matchValue) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, inp);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Invalid Literal %A"))(inp));
        }
    };

    return function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(checkFinalResult, result);
    }(convExp2LitNoCheck(str, symtab));
}
function litOrReg(el, symtab, offsetBool) {
    if (el.indexOf("#") === 0) {
        var litStr = el.substr(1);

        if (offsetBool) {
            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (arg0) {
                return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, arg0);
            }, convExp2Offset(litStr, symtab));
        } else {
            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (arg0_1) {
                return new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](0, arg0_1);
            }, convExp2Lit(litStr, symtab));
        }
    } else {
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(el, __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);

        if (matchValue == null) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "invalid reg");
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["a" /* Op2 */](1, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue)));
        }
    }
}
function str2Offset(symtab, strList, offsetBool) {
    var $var3 = strList.tail != null ? strList.tail.tail != null ? strList.tail.tail.tail != null ? strList.tail.tail.tail.tail == null ? [2, strList.head, strList.tail.head, strList.tail.tail.head] : [3] : [1, strList.head, strList.tail.head] : [0, strList.head] : [3];

    switch ($var3[0]) {
        case 0:
            return litOrReg($var3[1], symtab, offsetBool);

        case 1:
            var matchValue = [$var3[1], $var3[2]];

            if (matchValue[1] === "RRX") {
                var reg_ = optToRes(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(matchValue[0], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]), "Invalid RRX Reg");
                return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(function (k) {
                    return optToRes(Object(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["e" /* makeShift */])(new __WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["b" /* ShiftRotateOption */](4), k, null, null), "wont happen, RRX will always execute");
                }, reg_);
            } else {
                return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op2 Invalid");
            }

        case 2:
            var matchValue_1 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var3[1], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);

            if (matchValue_1 == null) {
                return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "invalid reg");
            } else if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1).tag === 15) {
                return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "PC/R15 not allowed with shift");
            } else {
                var matchValue_2 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var3[2], shiftMode);

                if (matchValue_2 == null) {
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Shift type error");
                } else {
                    var el3_ = litOrReg($var3[3], symtab, offsetBool);

                    if (el3_.tag === 1) {
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, el3_.data);
                    } else if (el3_.data.tag === 0) {
                        var lit = el3_.data.data;
                        return optToRes(Object(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["e" /* makeShift */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1), null, ~~lit), "invalid lit shift operation");
                    } else if (el3_.data.tag === 1) {
                        var reg = el3_.data.data;
                        return optToRes(Object(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["e" /* makeShift */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1), reg, null), "invalid reg shift operation");
                    } else {
                        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Error at 3 el. will not happen"));
                    }
                }
            }

        case 3:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Too many elements ");
    }
}
var parseSqBktRes = Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function (str) {
    return parseBktResGen("[", "]", str);
});
function strList2Op2(strList, symtab) {
    return function (k) {
        return str2Offset(symtab, k, false);
    }(removeEmptyStr(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["b" /* collect */])(function (a) {
        return splitIntoWords(a, [" "]);
    }, strList)));
}
function strList2Offset(strList, symtab) {
    return function (k) {
        return str2Offset(symtab, k, true);
    }(removeEmptyStr(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["b" /* collect */])(function (a) {
        return splitIntoWords(a, [" "]);
    }, strList)));
}
function parse(ls) {
    var parse_ = function parse_(tupledArg) {
        var value;
        var reg;
        var patternInput = void 0;
        var matchValue = [tupledArg[1][0], tupledArg[1][1]];
        var $var4 = matchValue[0] === "LDR" ? matchValue[1] === "" ? [0] : matchValue[1] === "B" ? [1] : [4] : matchValue[0] === "STR" ? matchValue[1] === "" ? [2] : matchValue[1] === "B" ? [3] : [4] : [4];

        switch ($var4[0]) {
            case 0:
                patternInput = [new LORS(0), false];
                break;

            case 1:
                patternInput = [new LORS(0), true];
                break;

            case 2:
                patternInput = [new LORS(1), false];
                break;

            case 3:
                patternInput = [new LORS(1), true];
                break;

            case 4:
                patternInput = Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
                break;
        }

        var bktStrList = parseSqBktRes(ls.Operands);
        var instrLS = void 0;

        if (bktStrList.tag === 1) {
            var strList = splitStrIntoList(ls.Operands);
            var matchValue_1 = [tupledArg[1][0], strList];
            var $var5 = matchValue_1[0] === "LDR" ? matchValue_1[1].tail != null ? matchValue_1[1].tail.tail != null ? matchValue_1[1].tail.tail.tail == null ? (value = matchValue_1[1].tail.head, reg = matchValue_1[1].head, value.indexOf("=") === 0) ? [0, matchValue_1[1].head, matchValue_1[1].tail.head] : [1] : [1] : [1] : [1] : [1];

            switch ($var5[0]) {
                case 0:
                    var dest = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var5[1], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
                    var value_ = ls.SymTab != null ? convExp2LitNoCheck($var5[2].slice(1, $var5[2].length), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, 0);
                    var matchValue_2 = [dest, value_];

                    if (matchValue_2[0] == null) {
                        instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "destination Reg invalid");
                    } else if (matchValue_2[1].tag === 1) {
                        instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, matchValue_2[1].data);
                    } else {
                        instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(1, new LDRPseudo(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2[0]), matchValue_2[1].data, tupledArg[1][2])));
                    }

                    break;

                case 1:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, bktStrList.data);
                    break;
            }
        } else {
            var reg1 = void 0;
            var reg1_ = splitIntoWords(bktStrList.data.PreBkt, [","]);
            var $var6 = reg1_.tail != null ? reg1_.tail.tail != null ? reg1_.tail.head === "" ? reg1_.tail.tail.tail == null ? [0, reg1_.head] : [1] : [1] : [1] : [1];

            switch ($var6[0]) {
                case 0:
                    reg1 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var6[1], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
                    break;

                case 1:
                    reg1 = null;
                    break;
            }

            var patternInput_1 = void 0;
            var reg2Offset = splitIntoWords(bktStrList.data.InBkt, [","]);

            if (reg2Offset.tail != null) {
                if (reg2Offset.tail.tail == null) {
                    patternInput_1 = [Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(reg2Offset.head, __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]), null];
                } else {
                    var reg22 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(reg2Offset.head, __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
                    var offset_ = ls.SymTab != null ? strList2Offset(reg2Offset.tail, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : null;
                    patternInput_1 = [reg22, offset_];
                }
            } else {
                patternInput_1 = [null, null];
            }

            var patternInput_2 = void 0;
            var outOfBkt = splitIntoWords(bktStrList.data.PostBkt, [","]);
            var $var7 = outOfBkt.tail != null ? outOfBkt.head === "" ? outOfBkt.tail.tail == null ? [0] : [2, outOfBkt] : outOfBkt.head === "!" ? outOfBkt.tail.tail == null ? [1] : [2, outOfBkt] : [2, outOfBkt] : [0];

            switch ($var7[0]) {
                case 0:
                    patternInput_2 = [null, false];
                    break;

                case 1:
                    patternInput_2 = [null, true];
                    break;

                case 2:
                    var offset__1 = ls.SymTab != null ? strList2Offset($var7[1], Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : null;
                    patternInput_2 = [offset__1, false];
                    break;
            }

            var matchValue_3 = [reg1, patternInput_1[0], patternInput_1[1], patternInput_2[0], patternInput_2[1]];
            var $var8 = void 0;

            if (matchValue_3[0] != null) {
                if (matchValue_3[1] != null) {
                    if (matchValue_3[2] == null) {
                        if (matchValue_3[3] == null) {
                            if (matchValue_3[4]) {
                                $var8 = [8];
                            } else {
                                $var8 = [4, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[1])];
                            }
                        } else {
                            var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[3]);

                            if (copyOfStruct.tag === 0) {
                                if (matchValue_3[4]) {
                                    $var8 = [8];
                                } else {
                                    $var8 = [7, copyOfStruct.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[1])];
                                }
                            } else {
                                $var8 = [3, copyOfStruct.data];
                            }
                        }
                    } else {
                        var copyOfStruct_1 = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[2]);

                        if (copyOfStruct_1.tag === 0) {
                            if (matchValue_3[3] == null) {
                                if (matchValue_3[4]) {
                                    $var8 = [6, copyOfStruct_1.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[1])];
                                } else {
                                    $var8 = [5, copyOfStruct_1.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[1])];
                                }
                            } else {
                                var copyOfStruct_2 = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_3[3]);

                                if (copyOfStruct_2.tag === 1) {
                                    $var8 = [3, copyOfStruct_2.data];
                                } else {
                                    $var8 = [8];
                                }
                            }
                        } else {
                            $var8 = [2, copyOfStruct_1.data];
                        }
                    }
                } else {
                    $var8 = [1];
                }
            } else {
                $var8 = [0];
            }

            switch ($var8[0]) {
                case 0:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Reg 1 Invalid");
                    break;

                case 1:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Reg 2 Invalid");
                    break;

                case 2:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, $var8[1]);
                    break;

                case 3:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, $var8[1]);
                    break;

                case 4:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(0, new LSInstr(patternInput[0], patternInput[1], $var8[1], $var8[2], null, null, tupledArg[1][2])));
                    break;

                case 5:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(0, new LSInstr(patternInput[0], patternInput[1], $var8[2], $var8[3], $var8[1], null, tupledArg[1][2])));
                    break;

                case 6:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(0, new LSInstr(patternInput[0], patternInput[1], $var8[2], $var8[3], $var8[1], new IndexMode(0), tupledArg[1][2])));
                    break;

                case 7:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(0, new LSInstr(patternInput[0], patternInput[1], $var8[2], $var8[3], $var8[1], new IndexMode(1), tupledArg[1][2])));
                    break;

                case 8:
                    instrLS = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Offset error");
                    break;
            }
        }

        if (instrLS.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, instrLS.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["e" /* Parse */](instrLS.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(parse);


var dataMemAddrStart = 256;
function byteWordTwoFunc(byteFunc, wordFunc, _byte) {
    if (_byte) {
        return byteFunc;
    } else {
        return wordFunc;
    }
}
function updateRec(recIn, updateList) {
    var folder;
    return (folder = function folder(old, tupledArg) {
        return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(tupledArg[0], tupledArg[1], old);
    }, function (list) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["d" /* fold */])(folder, recIn, list);
    })(updateList);
}
function breakWordIntoBytes(word) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k) {
        return word << 24 - k >>> 24;
    }, Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([0, 8, 16, 24]));
}
function checkAddrValidity(addr) {
    if (addr < dataMemAddrStart) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Address under 0x100 not allowed.");
    } else {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, addr);
    }
}
function checkAddrAlign(addr) {
    if (addr % 4 !== 0) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "unaligned memory access");
    } else {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, addr);
    }
}
function loadMMDataWord(addr, dataPath) {
    var load = function load(addr_1) {
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, addr_1), dataPath.MM);

        if (matchValue == null) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, 0);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).tag === 0) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Memory access failure");
        }
    };

    return function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(load, result);
    }(function (result_1) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(checkAddrAlign, result_1);
    }(checkAddrValidity(addr)));
}
function loadMMDataByte(addr, dataPath) {
    var load = function load(addr_1) {
        var addrOffset = addr_1 % 4;
        var baseAddr = addr_1 - addrOffset;
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, baseAddr), dataPath.MM);

        if (matchValue == null) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, 0);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).tag === 0) {
            var byteList = breakWordIntoBytes(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).data);
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Seq__["g" /* item */])(~~addrOffset, byteList));
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Memory access failure");
        }
    };

    return function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(load, result);
    }(checkAddrValidity(addr));
}
function word2Byte(word) {
    return word & 255;
}
function storeMMDataWord(addr, dataPath, word) {
    var store = function store(addr_1) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, addr_1), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["c" /* MemLoc */](0, word), dataPath.MM));
    };

    return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(store, function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(checkAddrAlign, result);
    }(checkAddrValidity(addr)));
}
function storeMMDataByte(addr, dataPath, word) {
    var store = function store(addr_1) {
        var byteData = word2Byte(word);
        var addrOffset = addr_1 % 4;
        var baseAddr = addr_1 - addrOffset;
        var shiftedByte = byteData << ~~(8 * addrOffset);
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, baseAddr), dataPath.MM);

        if (matchValue == null) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, baseAddr), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["c" /* MemLoc */](0, shiftedByte), dataPath.MM));
        } else if (Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).tag === 0) {
            var numToBeSubtracted = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).data << ~~(8 * (3 - addrOffset)) >>> 24 << ~~(addrOffset * 8);
            var newWData = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue).data - numToBeSubtracted + shiftedByte;
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, baseAddr), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["c" /* MemLoc */](0, newWData), dataPath.MM));
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Memory access failure");
        }
    };

    return function (result) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(store, result);
    }(checkAddrValidity(addr));
}
function loadFunc(_byte) {
    return Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(byteWordTwoFunc(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(loadMMDataByte), Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(loadMMDataWord), _byte));
}
function PCPlus4(dataPath) {
    var initialPC = dataPath.Regs.get(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */](15));
    var Regs = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */](15), initialPC + 4, dataPath.Regs);
    return new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs, dataPath.MM);
}
function storeDataReturnMM(addr, dataPath, source, _byte) {
    var func = byteWordTwoFunc(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(storeMMDataByte), Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(storeMMDataWord), _byte);
    return func(addr, dataPath, source);
}
function LSMain(reg1, reg2, offset, _byte, ins, ptrupdate, dataPath) {
    var Regs;
    var matchValue = [ins, _byte, reg2];
    var $var9 = matchValue[0].tag === 0 ? matchValue[1] ? matchValue[2].tag === 15 ? [0] : (matchValue[2].Equals(reg1) ? Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function () {
        return ptrupdate != null;
    })() : false) ? [1, matchValue[2]] : [2] : (matchValue[2].Equals(reg1) ? Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function () {
        return ptrupdate != null;
    })() : false) ? [1, matchValue[2]] : [2] : matchValue[2].tag === 15 ? [0] : (matchValue[2].Equals(reg1) ? Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function () {
        return ptrupdate != null;
    })() : false) ? [1, matchValue[2]] : [2];

    switch ($var9[0]) {
        case 0:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "R15 not allowed as destination (STR) or source (LDR)");

        case 1:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Destination must be different from source base addr");

        case 2:
            var addrInReg = dataPath.Regs.get(reg2);
            var source = void 0;

            if (ins.tag === 1) {
                source = new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, dataPath.Regs.get(reg1));
            } else {
                var matchValue_1 = [offset, ptrupdate];
                var $var10 = matchValue_1[0] != null ? matchValue_1[1] == null ? [1, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0])] : Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[1]).tag === 0 ? [1, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0])] : [0] : matchValue_1[1] == null ? [0] : [2];

                switch ($var10[0]) {
                    case 0:
                        source = loadFunc(_byte)(addrInReg, dataPath);
                        break;

                    case 1:
                        var offsetAddr = addrInReg + $var10[1];
                        source = loadFunc(_byte)(offsetAddr, dataPath);
                        break;

                    case 2:
                        source = Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("unexpected combination of offset and pointerupdate"));
                        break;
                }
            }

            if (source.tag === 1) {
                return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, source.data);
            } else {
                var matchValue_2 = [ins, ptrupdate];
                var $var11 = matchValue_2[0].tag === 1 ? matchValue_2[1] != null ? [3, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2[1])] : [2] : matchValue_2[1] != null ? Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2[1]).tag === 1 ? [1] : [1] : [0];

                switch ($var11[0]) {
                    case 0:
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, PCPlus4((Regs = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(reg1, source.data, dataPath.Regs), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs, dataPath.MM))));

                    case 1:
                        if (offset == null) {
                            return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("LS. will not happen"));
                        } else {
                            var regUpdateList = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([[reg1, source.data], [reg2, addrInReg + Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(offset)]]);
                            var newRegs = updateRec(dataPath.Regs, regUpdateList);
                            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, PCPlus4(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, newRegs, dataPath.MM)));
                        }

                    case 2:
                        if (offset == null) {
                            var newMM = storeDataReturnMM(addrInReg, dataPath, source.data, _byte);
                            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (k) {
                                return PCPlus4(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, dataPath.Regs, k));
                            }, newMM);
                        } else {
                            var offsetAddr_1 = addrInReg + Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(offset);
                            var newMM_1 = storeDataReturnMM(offsetAddr_1, dataPath, source.data, _byte);
                            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (k_1) {
                                return PCPlus4(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, dataPath.Regs, k_1));
                            }, newMM_1);
                        }

                    case 3:
                        if (offset == null) {
                            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Offset value missing");
                        } else {
                            var offsetAddr_2 = addrInReg + Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(offset);
                            var newAddr = $var11[1].tag === 1 ? addrInReg : offsetAddr_2;
                            var newMM_2 = storeDataReturnMM(newAddr, dataPath, source.data, _byte);
                            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (mm) {
                                var Regs_1;
                                return PCPlus4((Regs_1 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(reg2, offsetAddr_2, dataPath.Regs), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs_1, mm)));
                            }, newMM_2);
                        }

                }
            }

    }
}
function LDRPseudoExec(dest, value, dp) {
    var Regs;
    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, PCPlus4((Regs = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(dest, value, dp.Regs), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dp.Fl, Regs, dp.MM))));
}
function execLS(ins, dataPath) {
    if (ins.tag === 1) {
        return LDRPseudoExec(ins.data.Dest, ins.data.Value, dataPath);
    } else {
        var offset = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ins.data.Offset, null, function (k) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__FlexOp2_fs__["d" /* flexOp2 */])(k, dataPath);
        });
        return LSMain(ins.data.Reg1, ins.data.Reg2, offset, ins.data.Byte, ins.data.Ins, ins.data.PointerUpdate, dataPath);
    }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InstrClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LineData; });
/* unused harmony export condMap */
/* unused harmony export condStrings */
/* harmony export (immutable) */ __webpack_exports__["f"] = opCodeExpand;
/* harmony export (immutable) */ __webpack_exports__["g"] = pResultInstrMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Set__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);














var Condition = function () {
    function Condition(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Condition);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Condition, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonLex.Condition",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Ceq"], ["Cne"], ["Cmi"], ["Cpl"], ["Chi"], ["Chs"], ["Clo"], ["Cls"], ["Cge"], ["Cgt"], ["Cle"], ["Clt"], ["Cvs"], ["Cvc"], ["Cnv"], ["Cal"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return Condition;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonLex.Condition", Condition);
var InstrClass = function () {
    function InstrClass(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, InstrClass);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(InstrClass, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonLex.InstrClass",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["ARI"], ["BITC"], ["LSC"], ["LSM"], ["Branch"], ["MOVC"], ["SFTC"], ["TSTC"], ["DCD"], ["ADR"], ["EQUC"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return InstrClass;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonLex.InstrClass", InstrClass);
var OpSpec = function () {
    function OpSpec(instrC, roots, suffixes) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, OpSpec);

        this.InstrC = instrC;
        this.Roots = roots;
        this.Suffixes = suffixes;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(OpSpec, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonLex.OpSpec",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    InstrC: InstrClass,
                    Roots: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */], {
                        T: "string"
                    }),
                    Suffixes: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */], {
                        T: "string"
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return OpSpec;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonLex.OpSpec", OpSpec);
var Parse = function () {
    function Parse(pInstr, pLabel, pSize, pCond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Parse);

        this.PInstr = pInstr;
        this.PLabel = pLabel;
        this.PSize = pSize;
        this.PCond = pCond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Parse, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonLex.Parse",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    PInstr: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["a" /* GenericParam */])("INS"),
                    PLabel: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["c" /* Tuple */])(["string", "number"])),
                    PSize: "number",
                    PCond: Condition
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Parse;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonLex.Parse", Parse);
var LineData = function () {
    function LineData(loadAddr, label, symTab, opCode, operands) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LineData);

        this.LoadAddr = loadAddr;
        this.Label = label;
        this.SymTab = symTab;
        this.OpCode = opCode;
        this.Operands = operands;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(LineData, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonLex.LineData",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    LoadAddr: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */],
                    Label: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])("string"),
                    SymTab: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Map__["c" /* default */], {
                        Key: "string",
                        Value: "number"
                    })),
                    OpCode: "string",
                    Operands: "string"
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return LineData;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonLex.LineData", LineData);
var condMap = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["EQ", new Condition(0)], ["NE", new Condition(1)], ["MI", new Condition(2)], ["PL", new Condition(3)], ["HI", new Condition(4)], ["HS", new Condition(5)], ["LO", new Condition(6)], ["LS", new Condition(7)], ["GE", new Condition(8)], ["GT", new Condition(9)], ["LE", new Condition(10)], ["LT", new Condition(11)], ["VS", new Condition(12)], ["VC", new Condition(13)], ["NV", new Condition(14)], ["AL", new Condition(15)], ["", new Condition(15)], ["", new Condition(15)]]), new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var condStrings = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Set__["a" /* distinct */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tuple) {
    return tuple[0];
}, Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(condMap))));
function opCodeExpand(spec) {
    return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["b" /* collect */])(function (r) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["b" /* collect */])(function (s) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (c) {
                return [r + s + c, [spec.InstrC, [r, s, condMap.get(c)]]];
            }, condStrings);
        }, spec.Suffixes);
    }, spec.Roots), new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
}
function pResultInstrMap(fMap, fMapE, paRes) {
    var PInstr;

    if (paRes.tag === 1) {
        return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, fMapE(paRes.data));
    } else {
        var ins = paRes.data.PInstr;
        return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, (PInstr = fMap(ins), new Parse(PInstr, paRes.data.PLabel, paRes.data.PSize, paRes.data.PCond)));
    }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CurriedLambda;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

function CurriedLambda(f, expectedArgsLength) {
    if (f.curried === true) {
        return f;
    }
    var curriedFn = function curriedFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var args2 = args.map(function (x) {
            return typeof x === "function" ? CurriedLambda(x) : x;
        });
        var actualArgsLength = Math.max(args2.length, 1);
        expectedArgsLength = Math.max(expectedArgsLength || f.length, 1);
        if (actualArgsLength >= expectedArgsLength) {
            var restArgs = args2.splice(expectedArgsLength);
            var res = f.apply(undefined, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(args2));
            if (typeof res === "function") {
                var newLambda = CurriedLambda(res);
                return restArgs.length === 0 ? newLambda : newLambda.apply(undefined, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(restArgs));
            } else {
                return res;
            }
        } else {
            return CurriedLambda(function () {
                for (var _len2 = arguments.length, args3 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args3[_key2] = arguments[_key2];
                }

                return f.apply(undefined, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(args2.concat(args3)));
            }, expectedArgsLength - actualArgsLength);
        }
    };
    curriedFn.curried = true;
    return curriedFn;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(76);
var toPrimitive = __webpack_require__(53);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(35);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShiftRotateOption; });
/* unused harmony export ShiftVal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Op2; });
/* unused harmony export rOR */
/* unused harmony export lSR */
/* unused harmony export lSL */
/* unused harmony export rRX */
/* unused harmony export aSR */
/* harmony export (immutable) */ __webpack_exports__["e"] = makeShift;
/* harmony export (immutable) */ __webpack_exports__["c"] = checkLitValidity;
/* unused harmony export makeLiteral */
/* harmony export (immutable) */ __webpack_exports__["d"] = flexOp2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);










var ShiftRotateOption = function () {
    function ShiftRotateOption(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ShiftRotateOption);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ShiftRotateOption, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "FlexOp2.ShiftRotateOption",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["LSL"], ["ASR"], ["LSR"], ["ROR"], ["RRX"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return ShiftRotateOption;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("FlexOp2.ShiftRotateOption", ShiftRotateOption);
var ShiftVal = function () {
    function ShiftVal(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ShiftVal);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ShiftVal, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "FlexOp2.ShiftVal",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Lit", "number"], ["RShift", __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */]]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return ShiftVal;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("FlexOp2.ShiftVal", ShiftVal);
var Op2 = function () {
    function Op2(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Op2);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Op2, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "FlexOp2.Op2",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Literal", "number"], ["Reg", __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */]], ["RegS", __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */], ShiftRotateOption, ShiftVal], ["RegRRX", __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */]]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return Op2;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("FlexOp2.Op2", Op2);
function rOR(num, rBit) {
    return (num >>> ~~rBit | num) << 32 - ~~rBit;
}
function lSR(num, sBit) {
    return num >>> ~~sBit;
}
function lSL(num, sBit) {
    return num << ~~sBit;
}
function rRX(num, cFlag) {
    var carryBit = (cFlag ? 1 : 0) | 0;
    return (num >>> 1) + (carryBit >>> 0 << 31);
}
function aSR(num, sBit) {
    var matchValue = ~~num >= 0;

    if (matchValue) {
        return num >>> ~~sBit;
    } else {
        return (num >>> ~~sBit) + (4294967295 << 32 - ~~sBit);
    }
}
function makeShift(shiftType, rOp2, rShift, s) {
    var lit;

    if (shiftType.tag === 4) {
        return new Op2(3, rOp2);
    } else {
        var matchValue = [rShift, s];
        var $var1 = matchValue[0] == null ? matchValue[1] != null ? (lit = Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]) | 0, lit >= 1 ? lit <= 31 : false) ? [0, Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1])] : [1] : [1] : [1];

        switch ($var1[0]) {
            case 0:
                return new Op2(2, [rOp2, shiftType, new ShiftVal(0, $var1[1] >>> 0)]);

            case 1:
                var $var2 = matchValue[0] == null ? matchValue[1] == null ? [1] : [2] : matchValue[1] == null ? [0, Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0])] : [2];

                switch ($var2[0]) {
                    case 0:
                        return new Op2(2, [rOp2, shiftType, new ShiftVal(1, $var2[1])]);

                    case 1:
                        return new Op2(2, [rOp2, shiftType, new ShiftVal(0, 1)]);

                    case 2:
                        return null;
                }

        }
    }
}
function checkLitValidity(literal) {
    var checkOri = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (x) {
        return x >= 0 ? x <= 255 : false;
    }, Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (x_1) {
        return literal >>> x_1 | literal << 32 - x_1;
    }, Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 2, 30))));
    var checkInv = void 0;
    var inv = ~literal;
    checkInv = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (x_2) {
        return x_2 >= 0 ? x_2 <= 255 : false;
    }, Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (x_3) {
        return inv >>> x_3 | inv << 32 - x_3;
    }, Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 2, 30))));

    if (checkInv) {
        return true;
    } else {
        return checkOri;
    }
}
function makeLiteral(literalData) {
    if (checkLitValidity(literalData)) {
        return new Op2(0, literalData);
    } else {
        return null;
    }
}
function flexOp2(op2, cpuData) {
    var convertedOp2 = void 0;
    var $var3 = op2.tag === 2 ? op2.data[2].tag === 1 ? [0, op2.data[0], op2.data[2].data, op2.data[1]] : [1, op2] : [1, op2];

    switch ($var3[0]) {
        case 0:
            convertedOp2 = new Op2(2, [$var3[1], $var3[3], new ShiftVal(0, cpuData.Regs.get($var3[2]) % 32)]);
            break;

        case 1:
            convertedOp2 = $var3[1];
            break;
    }

    var $var4 = convertedOp2.tag === 1 ? [1, convertedOp2.data] : convertedOp2.tag === 2 ? convertedOp2.data[1].tag === 2 ? convertedOp2.data[2].tag === 0 ? [2, convertedOp2.data[2].data, convertedOp2.data[0]] : [7] : convertedOp2.data[1].tag === 0 ? convertedOp2.data[2].tag === 0 ? [3, convertedOp2.data[2].data, convertedOp2.data[0]] : [7] : convertedOp2.data[1].tag === 1 ? convertedOp2.data[2].tag === 0 ? [4, convertedOp2.data[2].data, convertedOp2.data[0]] : [7] : convertedOp2.data[1].tag === 3 ? convertedOp2.data[2].tag === 0 ? [5, convertedOp2.data[2].data, convertedOp2.data[0]] : [7] : [7] : convertedOp2.tag === 3 ? [6, convertedOp2.data] : [0, convertedOp2.data];

    switch ($var4[0]) {
        case 0:
            return $var4[1];

        case 1:
            return cpuData.Regs.get($var4[1]);

        case 2:
            return lSR(cpuData.Regs.get($var4[2]), $var4[1]);

        case 3:
            return lSL(cpuData.Regs.get($var4[2]), $var4[1]);

        case 4:
            return aSR(cpuData.Regs.get($var4[2]), $var4[1]);

        case 5:
            return rOR(cpuData.Regs.get($var4[2]), $var4[1]);

        case 6:
            return rRX(cpuData.Regs.get($var4[1]), cpuData.Fl.C);

        case 7:
            return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Should not happen"));
    }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(56);
var defined = __webpack_require__(50);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(101)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(51)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(75);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var global = __webpack_require__(19);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(32);
var TO_STRING_TAG = __webpack_require__(13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(50);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(31);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var anObject = __webpack_require__(24);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(61);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(44)('meta');
var isObject = __webpack_require__(20);
var has = __webpack_require__(26);
var setDesc = __webpack_require__(18).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = ofArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Util__ = __webpack_require__(1);








// This module is split from List.ts to prevent cyclic dependencies
function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}

var List = function () {
    function List(head, tail) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, List);

        this.head = head;
        this.tail = tail;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(List, [{
        key: "ToString",
        value: function ToString() {
            return "[" + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_5__Util__["l" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return true;
            } else {
                var cur1 = this;
                var cur2 = other;
                while (Object(__WEBPACK_IMPORTED_MODULE_5__Util__["h" /* equals */])(cur1.head, cur2.head)) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null;
                    }
                }
                return false;
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return 0;
            } else {
                var cur1 = this;
                var cur2 = other;
                var res = Object(__WEBPACK_IMPORTED_MODULE_5__Util__["d" /* compare */])(cur1.head, cur2.head);
                while (res === 0) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null ? 0 : -1;
                    }
                    res = Object(__WEBPACK_IMPORTED_MODULE_5__Util__["d" /* compare */])(cur1.head, cur2.head);
                }
                return res;
            }
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var cur = this;
            return {
                next: function next() {
                    var tmp = cur;
                    cur = cur.tail;
                    return { done: tmp.tail == null, value: tmp.head };
                }
            };
        }
        //   append(ys: List<T>): List<T> {
        //     return append(this, ys);
        //   }
        //   choose<U>(f: (x: T) => U, xs: List<T>): List<U> {
        //     return choose(f, this);
        //   }
        //   collect<U>(f: (x: T) => List<U>): List<U> {
        //     return collect(f, this);
        //   }
        //   filter(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   where(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   map<U>(f: (x: T) => U): List<U> {
        //     return map(f, this);
        //   }
        //   mapIndexed<U>(f: (i: number, x: T) => U): List<U> {
        //     return mapIndexed(f, this);
        //   }
        //   partition(f: (x: T) => boolean): [List<T>, List<T>] {
        //     return partition(f, this) as [List<T>, List<T>];
        //   }
        //   reverse(): List<T> {
        //     return reverse(this);
        //   }
        //   slice(lower: number, upper: number): List<T> {
        //     return slice(lower, upper, this);
        //   }

    }, {
        key: __WEBPACK_IMPORTED_MODULE_4__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpList",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "length",
        get: function get() {
            var cur = this;
            var acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        }
    }]);

    return List;
}();

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export op2codeMap */
/* unused harmony export SHIFTOps */
/* unused harmony export MOVOps */
/* unused harmony export BITOps */
/* unused harmony export TSTOps */
/* unused harmony export DCDOps */
/* unused harmony export LexerState */
/* unused harmony export LexData */
/* unused harmony export modulo256R */
/* unused harmony export modulo32L */
/* unused harmony export Checkfill */
/* harmony export (immutable) */ __webpack_exports__["a"] = Op2SetCFlag;
/* harmony export (immutable) */ __webpack_exports__["e"] = ParseSHIFTOps;
/* harmony export (immutable) */ __webpack_exports__["c"] = ParseFILLEQUOps;
/* harmony export (immutable) */ __webpack_exports__["d"] = ParseMOVOps;
/* harmony export (immutable) */ __webpack_exports__["b"] = ParseBITOps;
/* harmony export (immutable) */ __webpack_exports__["f"] = ParseTSTOps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);














var op2codeMap = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["LSL", new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["b" /* ShiftRotateOption */](0)], ["LSR", new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["b" /* ShiftRotateOption */](2)], ["ASR", new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["b" /* ShiftRotateOption */](1)], ["ROR", new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["b" /* ShiftRotateOption */](3)], ["RRX", new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["b" /* ShiftRotateOption */](4)]]), new __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var SHIFTOps = function () {
    function SHIFTOps(dest, op1, op2) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SHIFTOps);

        this.Dest = dest;
        this.Op1 = op1;
        this.Op2 = op2;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SHIFTOps, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.SHIFTOps",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Dest: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op1: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op2: Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(__WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */])
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return SHIFTOps;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.SHIFTOps", SHIFTOps);
var MOVOps = function () {
    function MOVOps(dest, op2) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MOVOps);

        this.Dest = dest;
        this.Op2 = op2;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MOVOps, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.MOVOps",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Dest: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return MOVOps;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.MOVOps", MOVOps);
var BITOps = function () {
    function BITOps(dest, op1, op2) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BITOps);

        this.Dest = dest;
        this.Op1 = op1;
        this.Op2 = op2;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BITOps, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.BITOps",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Dest: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op1: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return BITOps;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.BITOps", BITOps);
var TSTOps = function () {
    function TSTOps(op1, op2) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TSTOps);

        this.Op1 = op1;
        this.Op2 = op2;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(TSTOps, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.TSTOps",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Op1: __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return TSTOps;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.TSTOps", TSTOps);
var DCDOps = function () {
    function DCDOps(litlst) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DCDOps);

        this.Litlst = litlst;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DCDOps, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.DCDOps",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Litlst: Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */], {
                        T: "number"
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return DCDOps;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.DCDOps", DCDOps);
var LexerState = function () {
    function LexerState(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LexerState);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(LexerState, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.LexerState",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["Normal"], ["InComment"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return LexerState;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.LexerState", LexerState);
var LexData = function () {
    function LexData(txt, state, numb) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LexData);

        this.Txt = txt;
        this.State = state;
        this.Numb = numb | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(LexData, [{
        key: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TokenizeOperandsV2.LexData",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Txt: "string",
                    State: LexerState,
                    Numb: "number"
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return LexData;
}();
Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TokenizeOperandsV2.LexData", LexData);
function modulo256R(r) {
    return ~~(r << 24 >>> 24) | 0;
}
function modulo32L(l) {
    return ~~(l << 27 >>> 27) | 0;
}
function Checkfill(n) {
    var matchValue = ~~n % 4 | 0;

    if (matchValue === 0) {
        return true;
    } else {
        return false;
    }
}
function Op2SetCFlag(cpuData, op2) {
    var mapRtoUint = function mapRtoUint(r) {
        return cpuData.Regs.get(r);
    };

    if (op2.tag === 1) {
        return null;
    } else if (op2.tag === 2) {
        if (op2.data[1].tag === 1) {
            if (op2.data[2].tag === 1) {
                if (modulo256R(cpuData.Regs.get(op2.data[2].data)) > 32 ? modulo256R(cpuData.Regs.get(op2.data[0])) < 0 : false) {
                    return true;
                } else if (modulo256R(cpuData.Regs.get(op2.data[2].data)) > 32 ? modulo256R(cpuData.Regs.get(op2.data[0])) >= 0 : false) {
                    return false;
                } else if (modulo256R(cpuData.Regs.get(op2.data[2].data)) === 0) {
                    return null;
                } else if ((modulo256R(cpuData.Regs.get(op2.data[0]) >>> modulo256R(cpuData.Regs.get(op2.data[2].data)) - 1) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var i = ~~op2.data[2].data | 0;

                if (i > 32 ? ~~cpuData.Regs.get(op2.data[0]) < 0 : false) {
                    return true;
                } else if (i > 32 ? ~~cpuData.Regs.get(op2.data[0]) >= 0 : false) {
                    return false;
                } else if (i === 0) {
                    return null;
                } else if ((~~(cpuData.Regs.get(op2.data[0]) >>> i - 1) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if (op2.data[1].tag === 0) {
            if (op2.data[2].tag === 1) {
                if (modulo256R(cpuData.Regs.get(op2.data[2].data)) > 32) {
                    return false;
                } else if (~~cpuData.Regs.get(op2.data[2].data) === 0) {
                    return null;
                } else if (~~(cpuData.Regs.get(op2.data[0]) << ~~cpuData.Regs.get(op2.data[2].data) - 1) < 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var i_1 = ~~op2.data[2].data | 0;

                if (i_1 > 32) {
                    return false;
                } else if (i_1 === 0) {
                    return null;
                } else if (~~(cpuData.Regs.get(op2.data[0]) << i_1 - 1) < 0) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if (op2.data[1].tag === 2) {
            if (op2.data[2].tag === 1) {
                if (modulo256R(cpuData.Regs.get(op2.data[2].data)) > 32) {
                    return false;
                } else if (~~cpuData.Regs.get(op2.data[2].data) === 0) {
                    return null;
                } else if ((~~(cpuData.Regs.get(op2.data[0]) >>> ~~cpuData.Regs.get(op2.data[2].data) - 1) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var i_2 = ~~op2.data[2].data | 0;

                if (i_2 > 32) {
                    return false;
                } else if (i_2 === 0) {
                    return null;
                } else if ((~~(cpuData.Regs.get(op2.data[0]) >>> i_2 - 1) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if (op2.data[1].tag === 3) {
            if (op2.data[2].tag === 1) {
                var op2r = cpuData.Regs.get(op2.data[2].data) % 32;

                if (op2r === 0) {
                    return null;
                } else if ((~~(cpuData.Regs.get(op2.data[0]) >>> ~~(op2r - 1)) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var i_3 = ~~op2.data[2].data | 0;
                var i_4 = i_3 % 32 | 0;

                if (i_4 === 0) {
                    return null;
                } else if ((~~(cpuData.Regs.get(op2.data[0]) >>> i_4 - 1) & 1) === 1) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return null;
        }
    } else if (op2.tag === 3) {
        if ((~~cpuData.Regs.get(op2.data) & 1) === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return null;
    }
}
function ParseSHIFTOps(root, ls, tok) {
    var patternInput = void 0;
    var matchValue = [tok, root];
    var $var1 = matchValue[0].tail != null ? matchValue[0].tail.tail != null ? matchValue[0].tail.tail.tail != null ? matchValue[0].tail.tail.tail.tail == null ? [1, matchValue[0].head, matchValue[0].tail.head, matchValue[0].tail.tail.head] : [2] : matchValue[1] === "RRX" ? [0, matchValue[0].head, matchValue[0].tail.head] : [2] : [2] : [2];

    switch ($var1[0]) {
        case 0:
            var destReg = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            var op1_ = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[2], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            patternInput = [destReg, op1_, null];
            break;

        case 1:
            var destReg_1 = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            var op1Reg = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[2], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            var op2_ = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["i" /* litOrReg */])($var1[3], Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab), false) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */](0, 0));
            patternInput = [destReg_1, op1Reg, op2_];
            break;

        case 2:
            patternInput = [null, null, null];
            break;
    }

    var matchValue_1 = [[patternInput[0], patternInput[1], patternInput[2]], root];

    if (matchValue_1[0][0] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Dest error");
    } else if (matchValue_1[0][1] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op1 Error");
    } else if (matchValue_1[0][2] != null) {
        var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0][2]);

        if (copyOfStruct.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, copyOfStruct.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new SHIFTOps(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0][0]), Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0][1]), copyOfStruct.data));
        }
    } else if (matchValue_1[1] === "RRX") {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new SHIFTOps(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0][0]), Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0][1]), null));
    } else {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op2 Error");
    }
}
function ParseFILLEQUOps(root, ls, tok) {
    var matchValue = [tok, root];
    var $var2 = matchValue[0].tail != null ? matchValue[0].tail.tail == null ? matchValue[1] === "FILL" ? [0, matchValue[0].head] : matchValue[1] === "EQU" ? [1, matchValue[0].head] : [2] : [2] : [2];

    switch ($var2[0]) {
        case 0:
            var num = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["f" /* convExp2LitNoCheck */])($var2[1], Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, 0);
            var $var3 = num.tag === 0 ? num.data % 4 === 0 ? [0] : [1] : [1];

            switch ($var3[0]) {
                case 0:
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, num.data);

                case 1:
                    if (num.tag === 1) {
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, num.data);
                    } else {
                        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Number of bytes to fill not a multiple of 4");
                    }

            }

        case 1:
            if (ls.SymTab != null) {
                return Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["f" /* convExp2LitNoCheck */])($var2[1], Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab));
            } else {
                var res = Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["f" /* convExp2LitNoCheck */])($var2[1], Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(null, new __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])));

                if (res.tag === 1) {
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, 0);
                } else {
                    return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, res.data);
                }
            }

        case 2:
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Expression error");
    }
}
function ParseMOVOps(ls, tok) {
    var patternInput = void 0;

    if (tok.tail != null) {
        var destReg = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(tok.head, __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
        var op2_ = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["n" /* strList2Op2 */])(tok.tail, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */](0, 0));
        patternInput = [destReg, op2_];
    } else {
        patternInput = [null, null];
    }

    var matchValue = [patternInput[0], patternInput[1]];

    if (matchValue[0] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Dest error");
    } else if (matchValue[1] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op1 Error");
    } else {
        var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]);

        if (copyOfStruct.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, copyOfStruct.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new MOVOps(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0]), copyOfStruct.data));
        }
    }
}
function ParseBITOps(ls, tok) {
    var patternInput = void 0;
    var $var4 = tok.tail != null ? tok.tail.tail != null ? [0, tok.head, tok.tail.head, tok.tail.tail] : [1] : [1];

    switch ($var4[0]) {
        case 0:
            var destReg = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var4[1], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            var op1_ = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var4[2], __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
            var op2_ = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["n" /* strList2Op2 */])($var4[3], Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */](0, 0));
            patternInput = [destReg, op1_, op2_];
            break;

        case 1:
            patternInput = [null, null, null];
            break;
    }

    var matchValue = [patternInput[0], patternInput[1], patternInput[2]];

    if (matchValue[0] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Dest error");
    } else if (matchValue[1] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op1 Error");
    } else if (matchValue[2] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op2 Error");
    } else {
        var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[2]);

        if (copyOfStruct.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, copyOfStruct.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new BITOps(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0]), Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]), copyOfStruct.data));
        }
    }
}
function ParseTSTOps(ls, tok) {
    var patternInput = void 0;

    if (tok.tail != null) {
        var destReg = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(tok.head, __WEBPACK_IMPORTED_MODULE_8__CommonData_fs__["f" /* regNames */]);
        var op2_ = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["n" /* strList2Op2 */])(tok.tail, Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__FlexOp2_fs__["a" /* Op2 */](0, 0));
        patternInput = [destReg, op2_];
    } else {
        patternInput = [null, null];
    }

    var matchValue = [patternInput[0], patternInput[1]];

    if (matchValue[0] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "op1 error");
    } else if (matchValue[1] == null) {
        return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "op2 Error");
    } else {
        var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]);

        if (copyOfStruct.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, copyOfStruct.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new TSTOps(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0]), copyOfStruct.data));
        }
    }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(78);
var enumBugKeys = __webpack_require__(60);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(49);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(18).f;
var has = __webpack_require__(26);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValid;
/* unused harmony export tryParse */
/* harmony export (immutable) */ __webpack_exports__["b"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);


var parseRadix = /^\s*([\+\-])?(0[xob])?([0-9a-fA-F]+)\s*$/;
var invalidRadix2 = /[^01]/;
var invalidRadix8 = /[^0-7]/;
var invalidRadix10 = /[^0-9]/;
function isValid(s, radix) {
    var res = parseRadix.exec(s);
    if (res != null) {
        if (radix == null) {
            switch (res[2]) {
                case "0b":
                    radix = 2;
                    break;
                case "0o":
                    radix = 8;
                    break;
                case "0x":
                    radix = 16;
                    break;
                default:
                    radix = 10;
                    break;
            }
        }
        switch (radix) {
            case 2:
                return invalidRadix2.test(res[3]) ? null : [res, 2];
            case 8:
                return invalidRadix8.test(res[3]) ? null : [res, 8];
            case 10:
                return invalidRadix10.test(res[3]) ? null : [res, 10];
            case 16:
                return [res, 16];
            default:
                throw new Error("Invalid Base.");
        }
    }
    return null;
}
// TODO does this perfectly match the .NET behavior ?
function tryParse(s, radix, initial) {
    var a = isValid(s, radix);
    if (a !== null) {
        var _a = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(a, 2),
            _a$ = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_a[0], 4),
            prefix = _a$[1],
            digits = _a$[3],
            radix_ = _a[1];

        var v = parseInt((prefix || "") + digits, radix_);
        if (!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_nan___default()(v)) {
            return [true, v];
        }
    }
    return [false, initial];
}
function parse(s, radix) {
    var a = tryParse(s, radix, 0);
    if (a[0]) {
        return a[1];
    } else {
        throw new Error("Input string was not in a correct format.");
    }
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(52);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(54);
var hide = __webpack_require__(23);
var has = __webpack_require__(26);
var Iterators = __webpack_require__(32);
var $iterCreate = __webpack_require__(102);
var setToStringTag = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(79);
var ITERATOR = __webpack_require__(13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(24);
var dPs = __webpack_require__(103);
var enumBugKeys = __webpack_require__(60);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(77)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(106).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(57);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(44);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(19);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(13)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(57);
var TAG = __webpack_require__(13)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["a"] = escape;
/* unused harmony export unescape */
/* harmony export (immutable) */ __webpack_exports__["b"] = isMatch;
/* unused harmony export match */
/* unused harmony export matches */
/* unused harmony export options */
/* unused harmony export replace */
/* harmony export (immutable) */ __webpack_exports__["c"] = split;
function create(pattern, options) {
    var flags = "g";
    flags += options & 1 ? "i" : "";
    flags += options & 2 ? "m" : "";
    return new RegExp(pattern, flags);
}
// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var reg = void 0;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
    if (!reg.global) {
        throw new Error("Non-global RegExp"); // Prevent infinite loop
    }
    var m = reg.exec(str);
    var matches = [];
    while (m !== null) {
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function options(reg) {
    var options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit) {
    var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    function replacer() {
        var res = arguments[0];
        if (limit !== 0) {
            limit--;
            var _match = [];
            var len = arguments.length;
            for (var i = 0; i < len - 2; i++) {
                _match.push(arguments[i]);
            }
            _match.index = arguments[len - 2];
            _match.input = arguments[len - 1];
            res = replacement(_match);
        }
        return res;
    }
    if (typeof reg === "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        // $0 doesn't work with JS regex, see #1155
        replacement = replacement.replace(/\$0/g, function (s) {
            return "$&";
        });
        if (limit != null) {
            var m = void 0;
            var sub1 = input.substring(offset);
            var _matches = matches(reg, sub1);
            var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit) {
    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof reg === "string") {
        var tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14);
var core = __webpack_require__(7);
var fails = __webpack_require__(25);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(23);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(19);
var $export = __webpack_require__(14);
var meta = __webpack_require__(38);
var fails = __webpack_require__(25);
var hide = __webpack_require__(23);
var redefineAll = __webpack_require__(65);
var forOf = __webpack_require__(37);
var anInstance = __webpack_require__(66);
var isObject = __webpack_require__(20);
var setToStringTag = __webpack_require__(45);
var dP = __webpack_require__(18).f;
var each = __webpack_require__(68)(0);
var DESCRIPTORS = __webpack_require__(21);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(31);
var IObject = __webpack_require__(56);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(43);
var asc = __webpack_require__(120);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(14);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(14);
var aFunction = __webpack_require__(75);
var ctx = __webpack_require__(31);
var forOf = __webpack_require__(37);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(13);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(19);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(52);
var wksExt = __webpack_require__(72);
var defineProperty = __webpack_require__(18).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fontSize; });
/* harmony export (immutable) */ __webpack_exports__["e"] = register;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return run; });
/* harmony export (immutable) */ __webpack_exports__["b"] = flag;
/* harmony export (immutable) */ __webpack_exports__["a"] = code;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sym; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);

var fontSize = document.getElementById("font-size");
function register(id) {
    return document.getElementById(Object(__WEBPACK_IMPORTED_MODULE_0__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_0__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("R%i"))(id));
}
var run = document.getElementById("run");
function flag(id) {
    return document.getElementById(Object(__WEBPACK_IMPORTED_MODULE_0__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_0__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("flag_%s"))(id));
}
function code() {
    return window.code.getValue();
}
var mem = document.getElementById("mem-table");
var sym = document.getElementById("sym-table");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(77)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(19).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(26);
var toIObject = __webpack_require__(28);
var arrayIndexOf = __webpack_require__(104)(false);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(26);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(24);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(32);
var ITERATOR = __webpack_require__(13)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export offsetRegex */
/* unused harmony export padWithZeros */
/* unused harmony export offsetToString */
/* unused harmony export toHalfUTCString */
/* unused harmony export toStringWithOffset */
/* unused harmony export toStringWithKind */
/* harmony export (immutable) */ __webpack_exports__["b"] = toString;
/* unused harmony export default */
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* unused harmony export parseRaw */
/* unused harmony export parse */
/* unused harmony export tryParse */
/* unused harmony export offset */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export day */
/* unused harmony export hour */
/* unused harmony export millisecond */
/* unused harmony export minute */
/* unused harmony export month */
/* unused harmony export second */
/* unused harmony export year */
/* unused harmony export dayOfWeek */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* harmony export (immutable) */ __webpack_exports__["a"] = compare;
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */
/* unused harmony export isDaylightSavingTime */
var offsetRegex = /(?:Z|[+-](\d{2}):?(\d{2})?)$/;
function padWithZeros(i, length) {
    var str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function offsetToString(offset) {
    var isMinus = offset < 0;
    offset = Math.abs(offset);
    var hours = ~~(offset / 3600000);
    var minutes = offset % 3600000 / 60000;
    return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function toHalfUTCString(date, half) {
    var str = date.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function toISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    } else {
        // JS Date is always local
        var printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? offsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function toISOStringWithOffset(dateWithOffset, offset) {
    var str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + offsetToString(offset);
}
function toStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, function (match) {
        var rep = match;
        switch (match.substring(0, 1)) {
            case "y":
                var y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                var h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
        }
        if (rep !== match && rep < 10 && match.length > 1) {
            rep = "0" + rep;
        }
        return rep;
    });
}
function toStringWithOffset(date, format) {
    var d = new Date(date.getTime() + date.offset);
    if (!format) {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + offsetToString(date.offset);
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return toHalfUTCString(d, "first");
            case "T":
            case "t":
                return toHalfUTCString(d, "second");
            case "O":
            case "o":
                return toISOStringWithOffset(d, date.offset);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(d, format, true);
    }
}
function toStringWithKind(date, format) {
    var utc = date.kind === 1 /* UTC */;
    if (!format) {
        return utc ? date.toUTCString() : date.toLocaleString();
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? toHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? toHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return toISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format) {
    return date.offset != null ? toStringWithOffset(date, format) : toStringWithKind(date, format);
}
function DateTime(value, kind) {
    kind = kind == null ? 0 /* Unspecified */ : kind;
    var d = new Date(value);
    d.kind = kind | 0;
    return d;
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(str) {
    var date = new Date(str);
    if (isNaN(date.getTime())) {
        // Check if this is a time-only string, which JS Date parsing cannot handle (see #1045)
        if (/^(?:[01]?\d|2[0-3]):(?:[0-5]?\d)(?::[0-5]?\d(?:\.\d+)?)?(?:\s*[AaPp][Mm])?$/.test(str)) {
            var d = new Date();
            date = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + str);
        } else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str) {
    var detectUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var date = parseRaw(str);
    var offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    var kind = offset != null ? detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */ : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function offset(date) {
    var date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */
    ? 0 : date.getTimezoneOffset() * -60000;
}
function create(year, month, day) {
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var kind = arguments[7];

    var dateValue = kind === 1 /* UTC */
    ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    var date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function timeOfDay(d) {
    return hour(d) * 3600000 + minute(d) * 60000 + second(d) * 1000 + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    return DateTime(d.getTime() + ts, d.kind);
}
function addDays(d, v) {
    return DateTime(d.getTime() + v * 86400000, d.kind);
}
function addHours(d, v) {
    return DateTime(d.getTime() + v * 3600000, d.kind);
}
function addMinutes(d, v) {
    return DateTime(d.getTime() + v * 60000, d.kind);
}
function addSeconds(d, v) {
    return DateTime(d.getTime() + v * 1000, d.kind);
}
function addMilliseconds(d, v) {
    return DateTime(d.getTime() + v, d.kind);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number" ? DateTime(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
function compare(x, y) {
    var xtime = x.getTime();
    var ytime = y.getTime();
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
var compareTo = compare;
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    var jan = new Date(x.getFullYear(), 0, 1);
    var jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(46);
var createDesc = __webpack_require__(35);
var toIObject = __webpack_require__(28);
var toPrimitive = __webpack_require__(53);
var has = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(76);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(18).f;
var create = __webpack_require__(55);
var redefineAll = __webpack_require__(65);
var ctx = __webpack_require__(31);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(37);
var $iterDefine = __webpack_require__(51);
var step = __webpack_require__(82);
var setSpecies = __webpack_require__(119);
var DESCRIPTORS = __webpack_require__(21);
var fastKey = __webpack_require__(38).fastKey;
var validate = __webpack_require__(39);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(57);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(62);
var from = __webpack_require__(123);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(90);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(42);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(46);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(56);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(28);
var gOPN = __webpack_require__(93).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(78);
var hiddenKeys = __webpack_require__(60).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(155);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(29);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export map */
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["b"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* harmony export (immutable) */ __webpack_exports__["a"] = chunkBySize;
/* unused harmony export getSubArray */
/* unused harmony export fill */
/* unused harmony export splitAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);

function map(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(source[i]);
    }
    return target;
}
function mapIndexed(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(i, source[i]);
    }
    return target;
}
function indexed(source) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, source, Array);
}
function addRangeInPlace(range, xs) {
    var iter = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(range);
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--) {
        target[targetIndex++] = source[sourceIndex++];
    }
}
function partition(f, xs) {
    var ys = [];
    var zs = [];
    var j = 0;
    var k = 0;
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys[j++] = xs[i];
        } else {
            zs[k++] = xs[i];
        }
    }
    return [ys, zs];
}
function permute(f, xs) {
    // Keep the type of the array
    var ys = xs.map(function () {
        return null;
    });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length) {
            throw new Error("Not a valid permutation");
        }
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var _i = 0; _i < xs.length; _i++) {
        if (checkFlags[_i] !== 1) {
            throw new Error("Not a valid permutation");
        }
    }
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length) {
        target.set(source, lower);
    } else {
        for (var i = lower | 0, j = 0; j <= length; i++, j++) {
            target[i] = source[j];
        }
    }
}
function sortInPlaceBy(f, xs) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x === y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    var ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function chunkBySize(size, xs) {
    if (size < 1) {
        throw new Error("The input must be positive. parameter name: chunkSize");
    }
    if (xs.length === 0) {
        return [[]];
    }
    var result = [];
    // add each chunk to the result
    for (var x = 0; x < Math.ceil(xs.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(xs.slice(start, end));
    }
    return result;
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}
function splitAt(index, xs) {
    if (index < 0) {
        throw new Error("The input must be non-negative.");
    }
    if (index > xs.length) {
        throw new Error("The input sequence has an insufficient number of elements.");
    }
    return [xs.slice(0, index), xs.slice(index)];
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isLong */
/* unused harmony export fromInt */
/* harmony export (immutable) */ __webpack_exports__["b"] = fromNumber;
/* unused harmony export fromBits */
/* unused harmony export fromString */
/* unused harmony export fromValue */
/* unused harmony export ZERO */
/* unused harmony export UZERO */
/* unused harmony export ONE */
/* unused harmony export UONE */
/* unused harmony export NEG_ONE */
/* unused harmony export MAX_VALUE */
/* unused harmony export MAX_UNSIGNED_VALUE */
/* unused harmony export MIN_VALUE */
/* unused harmony export unixEpochMillisecondsToTicks */
/* unused harmony export ticksToUnixEpochMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Int32__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Symbol__ = __webpack_require__(0);


// Source: https://github.com/dcodeIO/long.js/blob/master/LICENSE
// tslint:disable:curly
// tslint:disable:member-access
// tslint:disable:member-ordering


// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * @class A Long class for representing a 64 bit two's-complement integer value.
 */

var Long = function () {
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
     */
    function Long(low, high, unsigned) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Long);

        /**
         * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.eq = this.equals;
        /**
         * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.neq = this.notEquals;
        /**
         * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.lt = this.lessThan;
        /**
         * Tests if this Long's value is less than or equal the specified's.
         * This is an alias of {@link Long#lessThanOrEqual}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.lte = this.lessThanOrEqual;
        /**
         * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.gt = this.greaterThan;
        /**
         * Tests if this Long's value is greater than or equal the specified's.
         * This is an alias of {@link Long#greaterThanOrEqual}.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */
        this.gte = this.greaterThanOrEqual;
        /**
         * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
         * @param {!Long|number|string} other Other value
         * @returns {number} 0 if they are the same, 1 if the this is greater and -1
         *  if the given one is greater
         */
        this.comp = this.compare;
        /**
         * Negates this Long's value. This is an alias of {@link Long#negate}.
         * @returns {!Long} Negated Long
         */
        this.neg = this.negate;
        /**
         * Returns this Long's absolute value. This is an alias of {@link Long#absolute}.
         * @returns {!Long} Absolute Long
         */
        this.abs = this.absolute;
        /**
         * Returns the difference of this and the specified  This is an alias of {@link Long#subtract}.
         * @param {!Long|number|string} subtrahend Subtrahend
         * @returns {!Long} Difference
         */
        this.sub = this.subtract;
        /**
         * Returns the product of this and the specified  This is an alias of {@link Long#multiply}.
         * @param {!Long|number|string} multiplier Multiplier
         * @returns {!Long} Product
         */
        this.mul = this.multiply;
        /**
         * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Quotient
         */
        this.div = this.divide;
        /**
         * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Remainder
         */
        this.mod = this.modulo;
        /**
         * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        this.shl = this.shiftLeft;
        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount.
         * This is an alias of {@link Long#shiftRight}.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        this.shr = this.shiftRight;
        /**
         * Returns this Long with bits logically shifted to the right by the given amount.
         * This is an alias of {@link Long#shiftRightUnsigned}.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */
        this.shru = this.shiftRightUnsigned;
        // Aliases for compatibility with Fable
        this.Equals = this.equals;
        this.CompareTo = this.compare;
        this.ToString = this.toString;
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
    }
    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @returns {number}
     */


    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Long, [{
        key: "toInt",
        value: function toInt() {
            return this.unsigned ? this.low >>> 0 : this.low;
        }
        /**
         * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
         * @returns {number}
         */

    }, {
        key: "toNumber",
        value: function toNumber() {
            if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
            return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        }
        /**
         * Converts the Long to a string written in the specified radix.
         * @param {number=} radix Radix (2-36), defaults to 10
         * @returns {string}
         * @override
         * @throws {RangeError} If `radix` is out of range
         */

    }, {
        key: "toString",
        value: function toString() {
            var radix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

            radix = radix || 10;
            if (radix < 2 || 36 < radix) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
                if (this.eq(MIN_VALUE)) {
                    // We need to change the Long value before it can be negated, so we remove
                    // the bottom-most digit in this base and then recurse to do the rest.
                    var radixLong = fromNumber(radix);
                    var div = this.div(radixLong);
                    var rem1 = div.mul(radixLong).sub(this);
                    return div.toString(radix) + rem1.toInt().toString(radix);
                } else return "-" + this.neg().toString(radix);
            }
            // Do several (6) digits each time through the loop, so as to
            // minimize the calls to the very expensive emulated div.
            var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned);
            var rem = this;
            var result = "";
            while (true) {
                var remDiv = rem.div(radixToPower);
                var intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
                var digits = intval.toString(radix);
                rem = remDiv;
                if (rem.isZero()) return digits + result;else {
                    while (digits.length < 6) {
                        digits = "0" + digits;
                    }result = "" + digits + result;
                }
            }
        }
        /**
         * Gets the high 32 bits as a signed integer.
         * @returns {number} Signed high bits
         */

    }, {
        key: "getHighBits",
        value: function getHighBits() {
            return this.high;
        }
        /**
         * Gets the high 32 bits as an unsigned integer.
         * @returns {number} Unsigned high bits
         */

    }, {
        key: "getHighBitsUnsigned",
        value: function getHighBitsUnsigned() {
            return this.high >>> 0;
        }
        /**
         * Gets the low 32 bits as a signed integer.
         * @returns {number} Signed low bits
         */

    }, {
        key: "getLowBits",
        value: function getLowBits() {
            return this.low;
        }
        /**
         * Gets the low 32 bits as an unsigned integer.
         * @returns {number} Unsigned low bits
         */

    }, {
        key: "getLowBitsUnsigned",
        value: function getLowBitsUnsigned() {
            return this.low >>> 0;
        }
        /**
         * Gets the number of bits needed to represent the absolute value of this
         * @returns {number}
         */

    }, {
        key: "getNumBitsAbs",
        value: function getNumBitsAbs() {
            if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
            var val = this.high !== 0 ? this.high : this.low;
            var bit = void 0;
            for (bit = 31; bit > 0; bit--) {
                if ((val & 1 << bit) !== 0) break;
            }return this.high !== 0 ? bit + 33 : bit + 1;
        }
        /**
         * Tests if this Long's value equals zero.
         * @returns {boolean}
         */

    }, {
        key: "isZero",
        value: function isZero() {
            return this.high === 0 && this.low === 0;
        }
        /**
         * Tests if this Long's value is negative.
         * @returns {boolean}
         */

    }, {
        key: "isNegative",
        value: function isNegative() {
            return !this.unsigned && this.high < 0;
        }
        /**
         * Tests if this Long's value is positive.
         * @returns {boolean}
         */

    }, {
        key: "isPositive",
        value: function isPositive() {
            return this.unsigned || this.high >= 0;
        }
        /**
         * Tests if this Long's value is odd.
         * @returns {boolean}
         */

    }, {
        key: "isOdd",
        value: function isOdd() {
            return (this.low & 1) === 1;
        }
        /**
         * Tests if this Long's value is even.
         * @returns {boolean}
         */

    }, {
        key: "isEven",
        value: function isEven() {
            return (this.low & 1) === 0;
        }
        /**
         * Tests if this Long's value equals the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "equals",
        value: function equals(other) {
            if (!isLong(other)) other = fromValue(other);
            if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
            return this.high === other.high && this.low === other.low;
        }
        /**
         * Tests if this Long's value differs from the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "notEquals",
        value: function notEquals(other) {
            return !this.eq( /* validates */other);
        }
        /**
         * Tests if this Long's value is less than the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "lessThan",
        value: function lessThan(other) {
            return this.comp( /* validates */other) < 0;
        }
        /**
         * Tests if this Long's value is less than or equal the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "lessThanOrEqual",
        value: function lessThanOrEqual(other) {
            return this.comp( /* validates */other) <= 0;
        }
        /**
         * Tests if this Long's value is greater than the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "greaterThan",
        value: function greaterThan(other) {
            return this.comp( /* validates */other) > 0;
        }
        /**
         * Tests if this Long's value is greater than or equal the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {boolean}
         */

    }, {
        key: "greaterThanOrEqual",
        value: function greaterThanOrEqual(other) {
            return this.comp( /* validates */other) >= 0;
        }
        /**
         * Compares this Long's value with the specified's.
         * @param {!Long|number|string} other Other value
         * @returns {number} 0 if they are the same, 1 if the this is greater and -1
         *  if the given one is greater
         */

    }, {
        key: "compare",
        value: function compare(other) {
            if (!isLong(other)) other = fromValue(other);
            if (this.eq(other)) return 0;
            var thisNeg = this.isNegative();
            var otherNeg = other.isNegative();
            if (thisNeg && !otherNeg) return -1;
            if (!thisNeg && otherNeg) return 1;
            // At this point the sign bits are the same
            if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
            // Both are positive if at least one is unsigned
            return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
        }
        /**
         * Negates this Long's value.
         * @returns {!Long} Negated Long
         */

    }, {
        key: "negate",
        value: function negate() {
            if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
            return this.not().add(ONE);
        }
        /**
         * Returns this Long's absolute value.
         * @returns {!Long} Absolute Long
         */

    }, {
        key: "absolute",
        value: function absolute() {
            if (!this.unsigned && this.isNegative()) return this.negate();else return this;
        }
        /**
         * Returns the sum of this and the specified
         * @param {!Long|number|string} addend Addend
         * @returns {!Long} Sum
         */

    }, {
        key: "add",
        value: function add(addend) {
            if (!isLong(addend)) addend = fromValue(addend);
            // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = addend.high >>> 16;
            var b32 = addend.high & 0xFFFF;
            var b16 = addend.low >>> 16;
            var b00 = addend.low & 0xFFFF;
            var c48 = 0;
            var c32 = 0;
            var c16 = 0;
            var c00 = 0;
            c00 += a00 + b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 + b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 + b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 + b48;
            c48 &= 0xFFFF;
            return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        }
        /**
         * Returns the difference of this and the specified
         * @param {!Long|number|string} subtrahend Subtrahend
         * @returns {!Long} Difference
         */

    }, {
        key: "subtract",
        value: function subtract(subtrahend) {
            if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
            return this.add(subtrahend.neg());
        }
        /**
         * Returns the product of this and the specified
         * @param {!Long|number|string} multiplier Multiplier
         * @returns {!Long} Product
         */

    }, {
        key: "multiply",
        value: function multiply(multiplier) {
            if (this.isZero()) return ZERO;
            if (!isLong(multiplier)) multiplier = fromValue(multiplier);
            if (multiplier.isZero()) return ZERO;
            if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
            if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
            if (this.isNegative()) {
                if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
            } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
            // If both longs are small, use float multiplication
            if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
            // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
            // We can skip products that would overflow.
            var a48 = this.high >>> 16;
            var a32 = this.high & 0xFFFF;
            var a16 = this.low >>> 16;
            var a00 = this.low & 0xFFFF;
            var b48 = multiplier.high >>> 16;
            var b32 = multiplier.high & 0xFFFF;
            var b16 = multiplier.low >>> 16;
            var b00 = multiplier.low & 0xFFFF;
            var c48 = 0;
            var c32 = 0;
            var c16 = 0;
            var c00 = 0;
            c00 += a00 * b00;
            c16 += c00 >>> 16;
            c00 &= 0xFFFF;
            c16 += a16 * b00;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c16 += a00 * b16;
            c32 += c16 >>> 16;
            c16 &= 0xFFFF;
            c32 += a32 * b00;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a16 * b16;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c32 += a00 * b32;
            c48 += c32 >>> 16;
            c32 &= 0xFFFF;
            c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
            c48 &= 0xFFFF;
            return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        }
        /**
         * Returns this Long divided by the specified. The result is signed if this Long is signed or
         *  unsigned if this Long is unsigned.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Quotient
         */

    }, {
        key: "divide",
        value: function divide(divisor) {
            if (!isLong(divisor)) divisor = fromValue(divisor);
            if (divisor.isZero()) throw Error("division by zero");
            if (this.isZero()) return this.unsigned ? UZERO : ZERO;
            var rem = ZERO;
            var res = ZERO;
            if (!this.unsigned) {
                // This section is only relevant for signed longs and is derived from the
                // closure library as a whole.
                if (this.eq(MIN_VALUE)) {
                    if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
                    else if (divisor.eq(MIN_VALUE)) return ONE;else {
                            // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                            var halfThis = this.shr(1);
                            var approx = halfThis.div(divisor).shl(1);
                            if (approx.eq(ZERO)) {
                                return divisor.isNegative() ? ONE : NEG_ONE;
                            } else {
                                rem = this.sub(divisor.mul(approx));
                                res = approx.add(rem.div(divisor));
                                return res;
                            }
                        }
                } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
                if (this.isNegative()) {
                    if (divisor.isNegative()) return this.neg().div(divisor.neg());
                    return this.neg().div(divisor).neg();
                } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
                res = ZERO;
            } else {
                // The algorithm below has not been made for unsigned longs. It's therefore
                // required to take special care of the MSB prior to running it.
                if (!divisor.unsigned) divisor = divisor.toUnsigned();
                if (divisor.gt(this)) return UZERO;
                if (divisor.gt(this.shru(1))) return UONE;
                res = UZERO;
            }
            // Repeat the following until the remainder is less than other:  find a
            // floating-point that approximates remainder / other *from below*, add this
            // into the result, and subtract it from the remainder.  It is critical that
            // the approximate value is less than or equal to the real value so that the
            // remainder never becomes negative.
            rem = this;
            while (rem.gte(divisor)) {
                // Approximate the result of division. This may be a little greater or
                // smaller than the actual value.
                var _approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
                // We will tweak the approximate result by changing it in the 48-th digit or
                // the smallest non-fractional digit, whichever is larger.
                // tslint:disable-next-line:prefer-const
                // tslint:disable-next-line:semicolon
                var log2 = Math.ceil(Math.log(_approx) / Math.LN2);
                var delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48);
                // Decrease the approximation until it is smaller than the remainder.  Note
                // that if it is too large, the product overflows and is negative.
                var approxRes = fromNumber(_approx);
                var approxRem = approxRes.mul(divisor);
                while (approxRem.isNegative() || approxRem.gt(rem)) {
                    _approx -= delta;
                    approxRes = fromNumber(_approx, this.unsigned);
                    approxRem = approxRes.mul(divisor);
                }
                // We know the answer can't be zero... and actually, zero would cause
                // infinite recursion since we would make no progress.
                if (approxRes.isZero()) approxRes = ONE;
                res = res.add(approxRes);
                rem = rem.sub(approxRem);
            }
            return res;
        }
        /**
         * Returns this Long modulo the specified.
         * @param {!Long|number|string} divisor Divisor
         * @returns {!Long} Remainder
         */

    }, {
        key: "modulo",
        value: function modulo(divisor) {
            if (!isLong(divisor)) divisor = fromValue(divisor);
            return this.sub(this.div(divisor).mul(divisor));
        }
        /**
         * Returns the bitwise NOT of this
         * @returns {!Long}
         */

    }, {
        key: "not",
        value: function not() {
            return fromBits(~this.low, ~this.high, this.unsigned);
        }
        /**
         * Returns the bitwise AND of this Long and the specified.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */

    }, {
        key: "and",
        value: function and(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
        }
        /**
         * Returns the bitwise OR of this Long and the specified.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */

    }, {
        key: "or",
        value: function or(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
        }
        /**
         * Returns the bitwise XOR of this Long and the given one.
         * @param {!Long|number|string} other Other Long
         * @returns {!Long}
         */

    }, {
        key: "xor",
        value: function xor(other) {
            if (!isLong(other)) other = fromValue(other);
            return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
        }
        /**
         * Returns this Long with bits shifted to the left by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */

    }, {
        key: "shiftLeft",
        value: function shiftLeft(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
        }
        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */

    }, {
        key: "shiftRight",
        value: function shiftRight(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }
        /**
         * Returns this Long with bits logically shifted to the right by the given amount.
         * @param {number|!Long} numBits Number of bits
         * @returns {!Long} Shifted Long
         */

    }, {
        key: "shiftRightUnsigned",
        value: function shiftRightUnsigned(numBits) {
            if (isLong(numBits)) numBits = numBits.toInt();
            numBits = numBits & 63;
            if (numBits === 0) return this;else {
                var high = this.high;
                if (numBits < 32) {
                    var low = this.low;
                    return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
                } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
            }
        }
        /**
         * Converts this Long to signed.
         * @returns {!Long} Signed long
         */

    }, {
        key: "toSigned",
        value: function toSigned() {
            if (!this.unsigned) return this;
            return fromBits(this.low, this.high, false);
        }
        /**
         * Converts this Long to unsigned.
         * @returns {!Long} Unsigned long
         */

    }, {
        key: "toUnsigned",
        value: function toUnsigned() {
            if (this.unsigned) return this;
            return fromBits(this.low, this.high, true);
        }
        /**
         * Converts this Long to its byte representation.
         * @param {boolean=} le Whether little or big endian, defaults to big endian
         * @returns {!Array.<number>} Byte representation
         */

    }, {
        key: "toBytes",
        value: function toBytes(le) {
            return le ? this.toBytesLE() : this.toBytesBE();
        }
        /**
         * Converts this Long to its little endian byte representation.
         * @returns {!Array.<number>} Little endian byte representation
         */

    }, {
        key: "toBytesLE",
        value: function toBytesLE() {
            var hi = this.high;
            var lo = this.low;
            return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24 & 0xff, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24 & 0xff];
        }
        /**
         * Converts this Long to its big endian byte representation.
         * @returns {!Array.<number>} Big endian byte representation
         */

    }, {
        key: "toBytesBE",
        value: function toBytesBE() {
            var hi = this.high;
            var lo = this.low;
            return [hi >>> 24 & 0xff, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24 & 0xff, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            return (!this.unsigned && !this.lessThan(0) ? "+" : "") + this.toString();
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_3__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: this.unsigned ? "System.UInt64" : "System.Int64",
                interfaces: ["FSharpRecord", "System.IComparable"],
                properties: {
                    low: "number",
                    high: "number",
                    unsigned: "boolean"
                }
            };
        }
    }], [{
        key: "ofJSON",
        value: function ofJSON(str) {
            return fromString(str, !/^[+-]/.test(str));
        }
    }]);

    return Long;
}();
// A cache of the Long representations of small integer values.


/* harmony default export */ __webpack_exports__["a"] = (Long);
var INT_CACHE = {};
// A cache of the Long representations of small unsigned integer values.
var UINT_CACHE = {};
/**
 * Tests if the specified object is a
 * @param {*} obj Object
 * @returns {boolean}
 */
function isLong(obj) {
    return obj && obj instanceof Long;
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
 * @returns {!Long} The corresponding Long value
 */
function fromInt(value) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var obj = void 0;
    var cachedObj = void 0;
    var cache = false;
    if (unsigned) {
        value >>>= 0;
        if (0 <= value && value < 256) {
            cache = true;
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache) UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (-128 <= value && value < 128) {
            cache = true;
            cachedObj = INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache) INT_CACHE[value] = obj;
        return obj;
    }
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
 * @returns {!Long} The corresponding Long value
 */
function fromNumber(value) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (isNaN(value) || !isFinite(value)) {
        // TODO FormatException ?
        throw new Error("Input string was not in a correct format.");
    }
    if (unsigned) {
        if (value < 0) return UZERO;
        if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
    }
    if (value < 0) return fromNumber(-value, unsigned).neg();
    return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
 * @returns {!Long} The corresponding Long value
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
/**
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
function fromString(str) {
    var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    if (Object(__WEBPACK_IMPORTED_MODULE_2__Int32__["a" /* isValid */])(str, radix) === null) {
        // TODO FormatException ?
        throw new Error("Input string was not in a correct format.");
    }
    if (str.length === 0) throw Error("empty string");
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
    if (typeof unsigned === "number") {
        // For goog.math.long compatibility
        radix = unsigned, unsigned = false;
    } else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError("radix");
    var p = str.indexOf("-");
    if (p > 0) throw Error("interior hyphen");else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i);
        var value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
/**
 * Converts the specified value to a
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @returns {!Long}
 */
function fromValue(val) {
    if (val /* is compatible */ instanceof Long) return val;
    if (typeof val === "number") return fromNumber(val);
    if (typeof val === "string") return fromString(val);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, val.unsigned);
}
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * Signed zero.
 * @type {!Long}
 */
var ZERO = fromInt(0);
/**
 * Unsigned zero.
 * @type {!Long}
 */
var UZERO = fromInt(0, true);
/**
 * Signed one.
 * @type {!Long}
 */
var ONE = fromInt(1);
/**
 * Unsigned one.
 * @type {!Long}
 */
var UONE = fromInt(1, true);
/**
 * Signed negative one.
 * @type {!Long}
 */
var NEG_ONE = fromInt(-1);
/**
 * Maximum signed value.
 * @type {!Long}
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Minimum signed value.
 * @type {!Long}
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
function unixEpochMillisecondsToTicks(ms, offset) {
    return fromNumber(ms).add(62135596800000).add(offset).mul(10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
    return ticks.div(10000).sub(62135596800000).toNumber();
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renderer_fs__ = __webpack_require__(99);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "init", function() { return __WEBPACK_IMPORTED_MODULE_0__Renderer_fs__["a"]; });


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ref_fs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_Int32__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Update_fs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Emulator_Group_fs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);







console.log("Hi from the renderer.js");
function init() {
    __WEBPACK_IMPORTED_MODULE_0__Ref_fs__["c" /* fontSize */].addEventListener("change", function (_arg1) {
        var size = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_Int32__["b" /* parse */])(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["c" /* fontSize */].value.slice(11, __WEBPACK_IMPORTED_MODULE_0__Ref_fs__["c" /* fontSize */].value.length)) | 0;
        console.log("Font size updated");
        return Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["b" /* fontSize */])(size);
    });
    __WEBPACK_IMPORTED_MODULE_0__Ref_fs__["f" /* run */].addEventListener("click", function (_arg2) {
        var inputString = Object(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["a" /* code */])();
        var patternInput = Object(__WEBPACK_IMPORTED_MODULE_3__Emulator_Group_fs__["a" /* output */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["l" /* toString */])(inputString));
        console.log(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("input %s"))(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Util__["l" /* toString */])(inputString)));
        console.log(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("flags %A"))(patternInput[1]));
        console.log(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("symtab %A"))(patternInput[3]));
        console.log(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Regs %A"))(patternInput[0]));
        console.log(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("MM %A"))(patternInput[2]));
        Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["e" /* sym */])(patternInput[3]);
        Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["c" /* memory */])(patternInput[2]);
        Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg) {
            Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["d" /* register */])(tupledArg[0], tupledArg[1]);
        }, patternInput[0]);
        return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg_1) {
            Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["a" /* flag */])(tupledArg_1[0], tupledArg_1[1]);
        }, patternInput[1]);
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["e" /* register */])(0).addEventListener("click", function (_arg3) {
        console.log("register R0 changed!");
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["b" /* flag */])("N").addEventListener("click", function (_arg4) {
        console.log("flag N changed!");
        Object(__WEBPACK_IMPORTED_MODULE_2__Update_fs__["a" /* flag */])("N", true);
    });
}
init();

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(107);
module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var defined = __webpack_require__(50);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(35);
var setToStringTag = __webpack_require__(45);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(23)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var anObject = __webpack_require__(24);
var getKeys = __webpack_require__(42);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(28);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(105);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(49);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(19).document;
module.exports = document && document.documentElement;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(31);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(36);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var toLength = __webpack_require__(43);
var createProperty = __webpack_require__(108);
var getIterFn = __webpack_require__(61);

$export($export.S + $export.F * !__webpack_require__(109)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(18);
var createDesc = __webpack_require__(35);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(13)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(30);
module.exports = __webpack_require__(113);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(112);
var step = __webpack_require__(82);
var Iterators = __webpack_require__(32);
var toIObject = __webpack_require__(28);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(51)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var get = __webpack_require__(61);
module.exports = __webpack_require__(7).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
var $Object = __webpack_require__(7).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(28);
var $getOwnPropertyDescriptor = __webpack_require__(84).f;

__webpack_require__(64)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(30);
__webpack_require__(33);
__webpack_require__(118);
__webpack_require__(122);
__webpack_require__(124);
__webpack_require__(125);
module.exports = __webpack_require__(7).Map;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(86);
var validate = __webpack_require__(39);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(67)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(19);
var core = __webpack_require__(7);
var dP = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(21);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(121);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var isArray = __webpack_require__(87);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(14);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(88)('Map') });


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(37);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(69)('Map');


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(70)('Map');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(21), 'Object', { defineProperty: __webpack_require__(18).f });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(33);
__webpack_require__(130);
__webpack_require__(132);
__webpack_require__(133);
module.exports = __webpack_require__(7).WeakMap;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(68)(0);
var redefine = __webpack_require__(54);
var meta = __webpack_require__(38);
var assign = __webpack_require__(91);
var weak = __webpack_require__(131);
var isObject = __webpack_require__(20);
var fails = __webpack_require__(25);
var validate = __webpack_require__(39);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(67)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(65);
var getWeak = __webpack_require__(38).getWeak;
var anObject = __webpack_require__(24);
var isObject = __webpack_require__(20);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(37);
var createArrayMethod = __webpack_require__(68);
var $has = __webpack_require__(26);
var validate = __webpack_require__(39);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(69)('WeakMap');


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(70)('WeakMap');


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(33);
module.exports = __webpack_require__(72).f('iterator');


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(91) });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
var $Object = __webpack_require__(7).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(64)('getOwnPropertyNames', function () {
  return __webpack_require__(92).f;
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(36);
var $getPrototypeOf = __webpack_require__(79);

__webpack_require__(64)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(34);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(94);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(47);
__webpack_require__(150);
__webpack_require__(151);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(19);
var has = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(21);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(54);
var META = __webpack_require__(38).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(45);
var uid = __webpack_require__(44);
var wks = __webpack_require__(13);
var wksExt = __webpack_require__(72);
var wksDefine = __webpack_require__(73);
var enumKeys = __webpack_require__(149);
var isArray = __webpack_require__(87);
var anObject = __webpack_require__(24);
var isObject = __webpack_require__(20);
var toIObject = __webpack_require__(28);
var toPrimitive = __webpack_require__(53);
var createDesc = __webpack_require__(35);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(92);
var $GOPD = __webpack_require__(84);
var $DP = __webpack_require__(18);
var $keys = __webpack_require__(42);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(93).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(46).f = $propertyIsEnumerable;
  __webpack_require__(71).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(52)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(42);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(46);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73)('asyncIterator');


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73)('observable');


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
module.exports = __webpack_require__(7).Number.isNaN;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(14);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(30);
module.exports = __webpack_require__(157);


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(13)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(7).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = fontSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = register;
/* harmony export (immutable) */ __webpack_exports__["a"] = flag;
/* unused harmony export code */
/* harmony export (immutable) */ __webpack_exports__["c"] = memory;
/* harmony export (immutable) */ __webpack_exports__["e"] = sym;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ref_fs__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);



function fontSize(size) {
    var options = {
        fontSize: size
    };
    return window.code.updateOptions(options);
}
function register(id, value) {
    var el = Object(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["e" /* register */])(id);
    el.setAttribute("style", "background: #c4e160");
    el.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("0x%X"))(value);
}
function flag(id, value) {
    var el = Object(__WEBPACK_IMPORTED_MODULE_0__Ref_fs__["b" /* flag */])(id);

    if (value) {
        el.setAttribute("style", "background: #e56464");
        el.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("%i"))(1);
    } else {
        el.setAttribute("style", "background: #fcfcfc");
        el.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("%i"))(0);
    }
}
function code(text) {
    return window.code.setValue(text);
}
function memory(wl) {
    var mem = __WEBPACK_IMPORTED_MODULE_0__Ref_fs__["d" /* mem */];

    var appendChild = function appendChild(wa, wv) {
        var newNode = document.createElement("tr");
        var b0 = wv & 255;
        var b1 = (wv & 65280) >>> 8;
        var b2 = (wv & 16711680) >>> 16;
        var b3 = (wv & -16777216 >>> 0) >>> 24;
        newNode.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("<tr> <td> 0x%X </td> <td> 0x%X </td> <td> 0x%X </td> <td> 0x%X </td> <td> 0x%X </td> <td> 0x%X </td> <tr>"))(wa, b3, b2, b1, b0, wv);
        return mem.appendChild(newNode);
    };

    mem.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("<tr><th>Word Address</th><th>Byte 3</th><th>Byte 2</th><th>Byte 1</th><th>Byte 0</th><th>Word Value</th></tr>"));
    return Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg) {
        return appendChild(tupledArg[0], tupledArg[1]);
    }, wl);
}
function sym(symlist) {
    var sym_1 = __WEBPACK_IMPORTED_MODULE_0__Ref_fs__["g" /* sym */];

    var appendChild = function appendChild(name, v) {
        var newNode = document.createElement("tr");
        newNode.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("<tr> <td> %s </td> <td> 0x%X </td> <tr>"))(name, v);
        return sym_1.appendChild(newNode);
    };

    sym_1.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("<tr><th> Name </th> <th> Value </th> </tr>"));
    return Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg) {
        return appendChild(tupledArg[0], tupledArg[1]);
    }, symlist);
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = output;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommonTop_fs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);







function output(input) {
    var parseRes = Object(__WEBPACK_IMPORTED_MODULE_0__CommonTop_fs__["a" /* genParsedDPSymtab */])(Object(__WEBPACK_IMPORTED_MODULE_0__CommonTop_fs__["b" /* inputToLines */])(input));
    var simulateOutput = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(function (tupledArg) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__CommonTop_fs__["c" /* simulate */])(0, tupledArg[0]);
    }, parseRes);
    var symtab = Object(__WEBPACK_IMPORTED_MODULE_1__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (tupledArg_1) {
        return tupledArg_1[1];
    }, parseRes);
    var matchValue = [simulateOutput, symtab];
    var $var1 = matchValue[0].tag === 1 ? matchValue[1].tag === 1 ? [1, matchValue[0].data, matchValue[1].data] : [2] : matchValue[1].tag === 0 ? [0, matchValue[1].data, matchValue[0].data] : [2];

    switch ($var1[0]) {
        case 0:
            var regs = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (tupledArg_2) {
                return [tupledArg_2[0].RegNum, tupledArg_2[1]];
            }, Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])($var1[2].Regs));

            var fls = function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["N", x.N], ["Z", x.Z], ["C", x.C], ["V", x.V]]);
            }($var1[2].Fl);

            var mm_1 = void 0;
            var mmList = Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])($var1[2].MM);

            var getDataLoc = function getDataLoc(mm) {
                if (mm[1].tag === 0) {
                    var y = mm[1].data;
                    var x_1 = mm[0].data;
                    return [x_1, y];
                } else {
                    return null;
                }
            };

            mm_1 = Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */], Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["d" /* filter */])(function (x_3) {
                return !Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(x_3, null);
            }, Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(getDataLoc, mmList)));
            var sym = Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])($var1[1]));
            return [regs, fls, mm_1, sym];

        case 1:
            window.alert(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("%A %A"))($var1[1], $var1[2]));
            return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Error regs"));

        case 2:
            throw new Error("/Users/clivewongtohsoon/WebstormProjects/Monaco/arm-monaco/src/Emulator/Group.fs", 26, 14);
    }
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Instr */
/* unused harmony export ErrInstr */
/* unused harmony export IMatch */
/* unused harmony export parseLine */
/* harmony export (immutable) */ __webpack_exports__["b"] = inputToLines;
/* unused harmony export addSym */
/* unused harmony export initialDataPath */
/* unused harmony export executeSpecialIns */
/* unused harmony export parseAll */
/* unused harmony export genSymTab */
/* unused harmony export parseNTimes */
/* unused harmony export storeIns */
/* harmony export (immutable) */ __webpack_exports__["a"] = genParsedDPSymtab;
/* unused harmony export runErrorMap */
/* unused harmony export CheckCond */
/* unused harmony export execIfTrue */
/* unused harmony export executeAnyInstr */
/* harmony export (immutable) */ __webpack_exports__["c"] = simulate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LSM_fs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Branch_fs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DP_fs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TST_v2_fs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BIT_v2_fs__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MOV_v2_fs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SFT_v2_fs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DCD_fs__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ADR_fs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__nuget_packages_fable_core_1_3_8_fable_core_RegExp__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);





























var Instr = function () {
    function Instr(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonTop.Instr",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["ILSM", __WEBPACK_IMPORTED_MODULE_3__LSM_fs__["b" /* LSMInstr */]], ["ILS", __WEBPACK_IMPORTED_MODULE_4__LS_fs__["b" /* Instr */]], ["IB", __WEBPACK_IMPORTED_MODULE_5__Branch_fs__["b" /* BInstr */]], ["IDP", __WEBPACK_IMPORTED_MODULE_6__DP_fs__["b" /* AriInstr */]], ["ITST", __WEBPACK_IMPORTED_MODULE_7__TST_v2_fs__["b" /* Instr */]], ["IBIT", __WEBPACK_IMPORTED_MODULE_8__BIT_v2_fs__["c" /* Instr */]], ["IMOV", __WEBPACK_IMPORTED_MODULE_9__MOV_v2_fs__["b" /* Instr */]], ["ISFT", __WEBPACK_IMPORTED_MODULE_10__SFT_v2_fs__["b" /* Instr */]], ["IDCD", __WEBPACK_IMPORTED_MODULE_11__DCD_fs__["b" /* Instr */]], ["IADR", __WEBPACK_IMPORTED_MODULE_12__ADR_fs__["b" /* Instr */]], ["IEQUFILL", __WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__["c" /* Instr */]], ["END"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonTop.Instr", Instr);
var ErrInstr = function () {
    function ErrInstr(tag, data) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ErrInstr);

        this.tag = tag | 0;
        this.data = data;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ErrInstr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "CommonTop.ErrInstr",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["ERRILSM", "string"], ["ERRILS", "string"], ["ERRIB", "string"], ["ERRITST", "string"], ["ERRIBIT", "string"], ["ERRIMOV", "string"], ["ERRISFT", "string"], ["ERRIDP", "string"], ["ERRIDCD", "string"], ["ERRIADR", "string"], ["ERRIEQUFILL", "string"], ["ERRTOPLEVEL", "string"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this === other || this.tag === other.tag && Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(this.data, other.data);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["g" /* compareUnions */])(this, other) | 0;
        }
    }]);

    return ErrInstr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("CommonTop.ErrInstr", ErrInstr);
function IMatch(ld) {
    var pConv = function pConv(fr, fe, p) {
        return Object(__WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["g" /* pResultInstrMap */])(fr, fe, p);
    };

    var activePatternResult2941 = Object(__WEBPACK_IMPORTED_MODULE_5__Branch_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

    if (activePatternResult2941 != null) {
        return pConv(function (arg0) {
            return new Instr(2, arg0);
        }, function (arg0_1) {
            return new ErrInstr(2, arg0_1);
        }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2941));
    } else {
        var activePatternResult2940 = Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

        if (activePatternResult2940 != null) {
            return pConv(function (arg0_2) {
                return new Instr(1, arg0_2);
            }, function (arg0_3) {
                return new ErrInstr(1, arg0_3);
            }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2940));
        } else {
            var activePatternResult2939 = Object(__WEBPACK_IMPORTED_MODULE_3__LSM_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

            if (activePatternResult2939 != null) {
                return pConv(function (arg0_4) {
                    return new Instr(0, arg0_4);
                }, function (arg0_5) {
                    return new ErrInstr(0, arg0_5);
                }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2939));
            } else {
                var activePatternResult2938 = Object(__WEBPACK_IMPORTED_MODULE_6__DP_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                if (activePatternResult2938 != null) {
                    return pConv(function (arg0_6) {
                        return new Instr(3, arg0_6);
                    }, function (arg0_7) {
                        return new ErrInstr(7, arg0_7);
                    }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2938));
                } else {
                    var activePatternResult2937 = Object(__WEBPACK_IMPORTED_MODULE_7__TST_v2_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                    if (activePatternResult2937 != null) {
                        return pConv(function (arg0_8) {
                            return new Instr(4, arg0_8);
                        }, function (arg0_9) {
                            return new ErrInstr(3, arg0_9);
                        }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2937));
                    } else {
                        var activePatternResult2936 = Object(__WEBPACK_IMPORTED_MODULE_8__BIT_v2_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                        if (activePatternResult2936 != null) {
                            return pConv(function (arg0_10) {
                                return new Instr(5, arg0_10);
                            }, function (arg0_11) {
                                return new ErrInstr(4, arg0_11);
                            }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2936));
                        } else {
                            var activePatternResult2935 = Object(__WEBPACK_IMPORTED_MODULE_9__MOV_v2_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                            if (activePatternResult2935 != null) {
                                return pConv(function (arg0_12) {
                                    return new Instr(6, arg0_12);
                                }, function (arg0_13) {
                                    return new ErrInstr(5, arg0_13);
                                }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2935));
                            } else {
                                var activePatternResult2934 = Object(__WEBPACK_IMPORTED_MODULE_10__SFT_v2_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                                if (activePatternResult2934 != null) {
                                    return pConv(function (arg0_14) {
                                        return new Instr(7, arg0_14);
                                    }, function (arg0_15) {
                                        return new ErrInstr(6, arg0_15);
                                    }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2934));
                                } else {
                                    var activePatternResult2933 = Object(__WEBPACK_IMPORTED_MODULE_11__DCD_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                                    if (activePatternResult2933 != null) {
                                        return pConv(function (arg0_16) {
                                            return new Instr(8, arg0_16);
                                        }, function (arg0_17) {
                                            return new ErrInstr(8, arg0_17);
                                        }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2933));
                                    } else {
                                        var activePatternResult2932 = Object(__WEBPACK_IMPORTED_MODULE_12__ADR_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                                        if (activePatternResult2932 != null) {
                                            return pConv(function (arg0_18) {
                                                return new Instr(9, arg0_18);
                                            }, function (arg0_19) {
                                                return new ErrInstr(9, arg0_19);
                                            }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2932));
                                        } else {
                                            var activePatternResult2931 = Object(__WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__["a" /* $7C$IMatch$7C$_$7C$ */])(ld);

                                            if (activePatternResult2931 != null) {
                                                return pConv(function (arg0_20) {
                                                    return new Instr(10, arg0_20);
                                                }, function (arg0_21) {
                                                    return new ErrInstr(10, arg0_21);
                                                }, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(activePatternResult2931));
                                            } else {
                                                return null;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function parseLine(symtab, loadAddr, asmLine) {
    var makeLineData = function makeLineData(opcode, operands) {
        var Operands = Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["b" /* join */])(" ", operands);
        var Label = null;
        return new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["c" /* LineData */](loadAddr, Label, symtab, opcode, Operands);
    };

    var removeComment = function removeComment(txt) {
        return function (_arg1) {
            if (_arg1.length === 1) {
                var x = _arg1[0];
                return x;
            } else if (_arg1.length === 0) {
                return "";
            } else {
                return _arg1[0];
            }
        }(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["d" /* split */])(txt, ";"));
    };

    var splitIntoWords = function splitIntoWords(line) {
        return Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["d" /* split */])(line, [], null, 1);
    };

    var matchLine = function matchLine(words) {
        var inputRecord;
        var Label_1;
        var pNoLabel = void 0;
        var $var1 = words.tail != null ? words.head === "END" ? words.tail.tail == null ? [0] : [1, words.head, words.tail] : [1, words.head, words.tail] : [2];

        switch ($var1[0]) {
            case 0:
                pNoLabel = new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["e" /* Parse */](new Instr(11), null, 4, new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["a" /* Condition */](15)));
                break;

            case 1:
                pNoLabel = IMatch(Object(__WEBPACK_IMPORTED_MODULE_19__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function (arg00) {
                    return Object(__WEBPACK_IMPORTED_MODULE_19__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(makeLineData)(arg00);
                })($var1[1], $var1[2]));
                break;

            case 2:
                pNoLabel = null;
                break;
        }

        var matchValue = [pNoLabel, words];
        var $var2 = matchValue[0] == null ? matchValue[1].tail != null ? matchValue[1].tail.tail != null ? matchValue[1].tail.head === "END" ? matchValue[1].tail.tail.tail == null ? [1, matchValue[1].head] : [2, matchValue[1].head, matchValue[1].tail.head, matchValue[1].tail.tail] : [2, matchValue[1].head, matchValue[1].tail.head, matchValue[1].tail.tail] : [3] : [3] : [0, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0])];

        switch ($var2[0]) {
            case 0:
                return $var2[1];

            case 1:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["e" /* Parse */](new Instr(11), [$var2[1], loadAddr.data], 4, new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["a" /* Condition */](15)));

            case 2:
                var matchValue_1 = IMatch((inputRecord = Object(__WEBPACK_IMPORTED_MODULE_19__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function (arg00_1) {
                    return Object(__WEBPACK_IMPORTED_MODULE_19__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(makeLineData)(arg00_1);
                })($var2[2], $var2[3]), Label_1 = $var2[1], new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["c" /* LineData */](inputRecord.LoadAddr, Label_1, inputRecord.SymTab, inputRecord.OpCode, inputRecord.Operands)));

                if (matchValue_1 != null) {
                    return Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1);
                } else {
                    return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(11, Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Unimplemented instruction %s"))($var2[2])));
                }

            case 3:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(11, Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["g" /* toText */])(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Unimplemented instruction %A"))(words)));
        }
    };

    return matchLine(Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(splitIntoWords(removeComment(asmLine.toLocaleUpperCase()))));
}
function inputToLines(inp) {
    return Object(__WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["d" /* filter */])(function (k) {
        return !(k.indexOf(";") === 0);
    }, Object(__WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["d" /* filter */])(function (k_1) {
        return k_1 !== "";
    }, Object(__WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k_2) {
        return Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(k_2, "both");
    }, Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_22__nuget_packages_fable_core_1_3_8_fable_core_RegExp__["c" /* split */])(inp, "[\r\n]+")))));
}
function addSym(symtab, parse) {
    if (parse.PLabel == null) {
        return symtab;
    } else {
        return function (tupledArg) {
            return Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(tupledArg[0], tupledArg[1], symtab);
        }(Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(parse.PLabel));
    }
}
var initialDataPath = function () {
    var regs = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["k" /* map2 */])(function (a, b) {
        return [Object(__WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["h" /* register */])(a), b];
    }, Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_20__nuget_packages_fable_core_1_3_8_fable_core_Seq__["m" /* range */])(0, 15)), Object(__WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4278190080, 0, 8]))), new __WEBPACK_IMPORTED_MODULE_25__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](function (x, y) {
        return x.CompareTo(y);
    }));
    var mm = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(null, new __WEBPACK_IMPORTED_MODULE_25__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["d" /* compare */]));
    var flags = new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["b" /* Flags */](false, false, false, false);
    return new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["a" /* DataPath */](flags, regs, mm);
}();
function executeSpecialIns(startAddr, ins, dp) {
    var $var3 = ins.tag === 8 ? [0, ins.data] : ins.tag === 10 ? ins.data.Opcode.Equals(new __WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__["b" /* EQUCode */](1)) ? [1, ins.data] : [2] : [2];

    switch ($var3[0]) {
        case 0:
            return Object(__WEBPACK_IMPORTED_MODULE_11__DCD_fs__["c" /* exec */])(startAddr, $var3[1], dp);

        case 1:
            return Object(__WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__["d" /* execFILL */])(startAddr, $var3[1], dp);

        case 2:
            return dp;
    }
}
function parseAll(lines, symtab, dp) {
    var parseOneLine = function parseOneLine(strlist, addr, parselist, dp_, startAddr) {
        parseOneLine: while (true) {
            if (strlist.tail != null) {
                var newparse = parseLine(symtab, new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["e" /* WAddr */](0, addr), strlist.head);

                if (newparse.tag === 1) {
                    return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, newparse.data);
                } else {
                    var $var4 = newparse.data.PInstr.tag === 10 ? newparse.data.PInstr.data.Opcode.Equals(new __WEBPACK_IMPORTED_MODULE_13__EQUFILL_fs__["b" /* EQUCode */](0)) ? [0, newparse.data.PInstr.data] : [1] : [1];

                    switch ($var4[0]) {
                        case 0:
                            strlist = strlist.tail;
                            addr = addr;
                            parselist = new __WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](newparse.data, parselist);
                            dp_ = dp;
                            startAddr = startAddr;
                            continue parseOneLine;

                        case 1:
                            var $var5 = newparse.data.PInstr.tag === 10 ? [0] : newparse.data.PInstr.tag === 8 ? [0] : [1];

                            switch ($var5[0]) {
                                case 0:
                                    var newdp = executeSpecialIns(startAddr, newparse.data.PInstr, dp_);
                                    var updatedParse = void 0;

                                    var PLabel = function (tupledArg) {
                                        return [tupledArg[0], startAddr];
                                    }(Object(__WEBPACK_IMPORTED_MODULE_11__DCD_fs__["d" /* opt2Val */])(newparse.data.PLabel));

                                    updatedParse = new __WEBPACK_IMPORTED_MODULE_15__CommonLex_fs__["e" /* Parse */](newparse.data.PInstr, PLabel, newparse.data.PSize, newparse.data.PCond);
                                    strlist = strlist.tail;
                                    addr = addr;
                                    parselist = new __WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](updatedParse, parselist);
                                    dp_ = newdp;
                                    startAddr = startAddr + newparse.data.PSize * 4;
                                    continue parseOneLine;

                                case 1:
                                    var newAddr = addr + newparse.data.PSize;
                                    strlist = strlist.tail;
                                    addr = newAddr;
                                    parselist = new __WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](newparse.data, parselist);
                                    dp_ = dp_;
                                    startAddr = startAddr;
                                    continue parseOneLine;
                            }

                    }
                }
            } else {
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, [Object(__WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["h" /* reverse */])(parselist), dp_, symtab]);
            }
        }
    };

    return parseOneLine(lines, 0, new __WEBPACK_IMPORTED_MODULE_21__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](), dp, __WEBPACK_IMPORTED_MODULE_4__LS_fs__["g" /* dataMemAddrStart */]);
}
function genSymTab(parse1List) {
    var initSymTab = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(null, new __WEBPACK_IMPORTED_MODULE_25__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Util__["d" /* compare */]));

    var addSymbol = function addSymbol(parselist, symtab) {
        addSymbol: while (true) {
            if (parselist.tail == null) {
                return symtab;
            } else if (parselist.tail.tail == null) {
                return addSym(symtab, parselist.head);
            } else {
                var $var35 = parselist.tail;
                symtab = addSym(symtab, parselist.head);
                parselist = $var35;
                continue addSymbol;
            }
        }
    };

    return addSymbol(parse1List, initSymTab);
}
function parseNTimes(lines, n, symtab) {
    parseNTimes: while (true) {
        var parseres = parseAll(lines, symtab, initialDataPath);

        if (n === 1) {
            if (parseres.tag === 1) {
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, parseres.data);
            } else {
                var parselist = parseres.data[0];
                var dp = parseres.data[1];
                var symtab_1 = genSymTab(parselist);
                return function (k) {
                    return parseAll(lines, k, initialDataPath);
                }(symtab_1);
            }
        } else if (parseres.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, parseres.data);
        } else {
            var parselist_1 = parseres.data[0];
            var dp_1 = parseres.data[1];
            var symtab_ = genSymTab(parselist_1);
            lines = lines;
            n = n - 1;
            symtab = symtab_;
            continue parseNTimes;
        }
    }
}
function storeIns(addr, datapath, parses) {
    var MM;

    storeIns: while (true) {
        if (parses.tail == null) {
            return datapath;
        } else {
            var $var6 = parses.head.PInstr.tag === 8 ? [0] : parses.head.PInstr.tag === 10 ? [0] : [1];

            switch ($var6[0]) {
                case 0:
                    addr = addr;
                    datapath = datapath;
                    parses = parses.tail;
                    continue storeIns;

                case 1:
                    var $var36 = addr + parses.head.PSize;
                    datapath = (MM = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["e" /* WAddr */](0, addr), new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["c" /* MemLoc */](1, parses.head.PInstr), datapath.MM), new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["a" /* DataPath */](datapath.Fl, datapath.Regs, MM));
                    parses = parses.tail;
                    addr = $var36;
                    continue storeIns;
            }
        }
    }
}
function genParsedDPSymtab(lines) {
    return Object(__WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (tupledArg) {
        return [storeIns(0, tupledArg[1], tupledArg[0]), tupledArg[2]];
    }, parseNTimes(lines, 10, null));
}
function runErrorMap(ins, res) {
    if (res.tag === 1) {
        switch (ins.tag) {
            case 1:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(0, res.data));

            case 2:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(0, res.data));

            case 11:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(11, res.data));

            case 3:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(7, res.data));

            case 5:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(4, res.data));

            case 6:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(5, res.data));

            case 4:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(3, res.data));

            case 7:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(6, res.data));

            case 8:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(8, res.data));

            case 9:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(9, res.data));

            case 10:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(10, res.data));

            default:
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(0, res.data));
        }
    } else {
        return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, res.data);
    }
}
function CheckCond(cpuData, cond) {
    var $var7 = cond.tag === 0 ? cpuData.Fl.Z ? [0] : [1] : [1];

    switch ($var7[0]) {
        case 0:
            return true;

        case 1:
            var $var8 = cond.tag === 1 ? !cpuData.Fl.Z ? [0] : [1] : [1];

            switch ($var8[0]) {
                case 0:
                    return true;

                case 1:
                    var $var9 = cond.tag === 2 ? cpuData.Fl.N ? [0] : [1] : [1];

                    switch ($var9[0]) {
                        case 0:
                            return true;

                        case 1:
                            var $var10 = cond.tag === 3 ? !cpuData.Fl.N ? [0] : [1] : [1];

                            switch ($var10[0]) {
                                case 0:
                                    return true;

                                case 1:
                                    var $var11 = cond.tag === 12 ? cpuData.Fl.V ? [0] : [1] : [1];

                                    switch ($var11[0]) {
                                        case 0:
                                            return true;

                                        case 1:
                                            var $var12 = cond.tag === 13 ? !cpuData.Fl.V ? [0] : [1] : [1];

                                            switch ($var12[0]) {
                                                case 0:
                                                    return true;

                                                case 1:
                                                    var $var13 = cond.tag === 5 ? cpuData.Fl.C ? [0] : [1] : [1];

                                                    switch ($var13[0]) {
                                                        case 0:
                                                            return true;

                                                        case 1:
                                                            var $var14 = cond.tag === 6 ? !cpuData.Fl.C ? [0] : [1] : [1];

                                                            switch ($var14[0]) {
                                                                case 0:
                                                                    return true;

                                                                case 1:
                                                                    var $var15 = cond.tag === 4 ? (cpuData.Fl.C ? !cpuData.Fl.Z : false) ? [0] : [1] : [1];

                                                                    switch ($var15[0]) {
                                                                        case 0:
                                                                            return true;

                                                                        case 1:
                                                                            var $var16 = cond.tag === 7 ? (!cpuData.Fl.C ? true : cpuData.Fl.Z) ? [0] : [1] : [1];

                                                                            switch ($var16[0]) {
                                                                                case 0:
                                                                                    return true;

                                                                                case 1:
                                                                                    var $var17 = cond.tag === 8 ? cpuData.Fl.N === cpuData.Fl.V ? [0] : [1] : [1];

                                                                                    switch ($var17[0]) {
                                                                                        case 0:
                                                                                            return true;

                                                                                        case 1:
                                                                                            var $var18 = cond.tag === 11 ? cpuData.Fl.N !== cpuData.Fl.V ? [0] : [1] : [1];

                                                                                            switch ($var18[0]) {
                                                                                                case 0:
                                                                                                    return true;

                                                                                                case 1:
                                                                                                    var $var19 = cond.tag === 9 ? (!cpuData.Fl.Z ? cpuData.Fl.N === cpuData.Fl.V : false) ? [0] : [1] : [1];

                                                                                                    switch ($var19[0]) {
                                                                                                        case 0:
                                                                                                            return true;

                                                                                                        case 1:
                                                                                                            var $var20 = cond.tag === 10 ? (cpuData.Fl.Z ? true : cpuData.Fl.N !== cpuData.Fl.V) ? [0] : [1] : [1];

                                                                                                            switch ($var20[0]) {
                                                                                                                case 0:
                                                                                                                    return true;

                                                                                                                case 1:
                                                                                                                    if (cond.tag === 14) {
                                                                                                                        return false;
                                                                                                                    } else if (cond.tag === 15) {
                                                                                                                        return true;
                                                                                                                    } else {
                                                                                                                        return false;
                                                                                                                    }

                                                                                                            }

                                                                                                    }

                                                                                            }

                                                                                    }

                                                                            }

                                                                    }

                                                            }

                                                    }

                                            }

                                    }

                            }

                    }

            }

    }
}
function execIfTrue(func, bool, obj) {
    if (bool) {
        return func(obj);
    } else {
        return obj;
    }
}
function executeAnyInstr(ins, dp) {
    var execute = function execute(dp_1) {
        var ins__1;
        var ins_;
        var $var21 = ins.tag === 0 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

        switch ($var21[0]) {
            case 0:
                return function (res) {
                    return runErrorMap(ins, res);
                }(Object(__WEBPACK_IMPORTED_MODULE_3__LSM_fs__["c" /* execLSM */])($var21[1], dp_1));

            case 1:
                var $var22 = ins.tag === 1 ? ins.data.tag === 0 ? (ins__1 = ins.data.data, CheckCond(dp_1, ins__1.Cond)) ? [0, ins.data.data] : [1] : [1] : [1];

                switch ($var22[0]) {
                    case 0:
                        return function (res_1) {
                            return runErrorMap(ins, res_1);
                        }(Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["h" /* execLS */])(new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["b" /* Instr */](0, $var22[1]), dp_1));

                    case 1:
                        var $var23 = ins.tag === 1 ? ins.data.tag === 1 ? (ins_ = ins.data.data, CheckCond(dp_1, ins_.Cond)) ? [0, ins.data.data] : [1] : [1] : [1];

                        switch ($var23[0]) {
                            case 0:
                                return function (res_2) {
                                    return runErrorMap(ins, res_2);
                                }(Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["h" /* execLS */])(new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["b" /* Instr */](1, $var23[1]), dp_1));

                            case 1:
                                var $var24 = ins.tag === 2 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                switch ($var24[0]) {
                                    case 0:
                                        return function (res_3) {
                                            return runErrorMap(ins, res_3);
                                        }(Object(__WEBPACK_IMPORTED_MODULE_5__Branch_fs__["c" /* execB */])($var24[1], dp_1));

                                    case 1:
                                        var $var25 = ins.tag === 3 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                        switch ($var25[0]) {
                                            case 0:
                                                return function (res_4) {
                                                    return runErrorMap(ins, res_4);
                                                }(Object(__WEBPACK_IMPORTED_MODULE_6__DP_fs__["c" /* arith */])($var25[1], dp_1));

                                            case 1:
                                                var $var26 = ins.tag === 5 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                                switch ($var26[0]) {
                                                    case 0:
                                                        return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_8__BIT_v2_fs__["b" /* BitwiseExecute */])(dp_1, $var26[1]));

                                                    case 1:
                                                        var $var27 = ins.tag === 6 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                                        switch ($var27[0]) {
                                                            case 0:
                                                                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_9__MOV_v2_fs__["c" /* MovsExecute */])(dp_1, $var27[1]));

                                                            case 1:
                                                                var $var28 = ins.tag === 4 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                                                switch ($var28[0]) {
                                                                    case 0:
                                                                        return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_7__TST_v2_fs__["c" /* TestExecute */])(dp_1, $var28[1]));

                                                                    case 1:
                                                                        var $var29 = ins.tag === 7 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                                                        switch ($var29[0]) {
                                                                            case 0:
                                                                                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_10__SFT_v2_fs__["c" /* ShiftExecute */])(dp_1, $var29[1]));

                                                                            case 1:
                                                                                var $var30 = ins.tag === 9 ? CheckCond(dp_1, ins.data.Cond) ? [0, ins.data] : [1] : [1];

                                                                                switch ($var30[0]) {
                                                                                    case 0:
                                                                                        return function (res_5) {
                                                                                            return runErrorMap(ins, res_5);
                                                                                        }(Object(__WEBPACK_IMPORTED_MODULE_12__ADR_fs__["c" /* exec */])($var30[1], dp_1));

                                                                                    case 1:
                                                                                        return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["d" /* PCPlus4 */])(dp_1));
                                                                                }

                                                                        }

                                                                }

                                                        }

                                                }

                                        }

                                }

                        }

                }

        }
    };

    var condMet = function condMet(cond) {
        return CheckCond(dp, cond);
    };

    return execute(dp);
}
function simulate(addr, dp) {
    var Regs;
    var memContent = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["e" /* WAddr */](0, addr), dp.MM);
    var $var31 = memContent != null ? Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(memContent).tag === 0 ? addr >= 256 ? [2] : addr >= 256 ? [2] : [3] : Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(memContent).data.tag === 11 ? [0] : [1, Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(memContent).data] : addr >= 256 ? [2] : [3];

    switch ($var31[0]) {
        case 0:
            return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, dp);

        case 1:
            var newDP = executeAnyInstr($var31[1], dp);
            return Object(__WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(function (k) {
                return simulate(k.Regs.get(new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["d" /* RName */](15)) - 8, k);
            }, newDP);

        case 2:
            return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, new ErrInstr(11, "Error: data memory accessed when fetching instruction"));

        case 3:
            if (memContent == null) {
                return new __WEBPACK_IMPORTED_MODULE_18__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, (Regs = Object(__WEBPACK_IMPORTED_MODULE_23__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["d" /* RName */](15), dp.Regs.get(new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["d" /* RName */](15)) - 4, dp.Regs), new __WEBPACK_IMPORTED_MODULE_24__CommonData_fs__["a" /* DataPath */](dp.Fl, Regs, dp.MM)));
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_17__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("unexpected error"));
            }

    }
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DIR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LSMInstr; });
/* unused harmony export LSMOpCodeMap */
/* unused harmony export LSMSpec */
/* unused harmony export opCodes */
/* unused harmony export parseCurBktRes */
/* unused harmony export parsePreBkt */
/* unused harmony export regRangeToList */
/* unused harmony export parseInBkt */
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* unused harmony export storeLoadM */
/* unused harmony export LSMMain */
/* harmony export (immutable) */ __webpack_exports__["c"] = execLSM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);


















var DIR = function () {
    function DIR(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DIR);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DIR, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LSM.DIR",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["FA"], ["FD"], ["EA"], ["ED"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return DIR;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LSM.DIR", DIR);
var LSMInstr = function () {
    function LSMInstr(ins, dir, reg1, regList, ptrUpdate, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LSMInstr);

        this.Ins = ins;
        this.Dir = dir;
        this.Reg1 = reg1;
        this.RegList = regList;
        this.PtrUpdate = ptrUpdate;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(LSMInstr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "LSM.LSMInstr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Ins: __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */],
                    Dir: DIR,
                    Reg1: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */],
                    RegList: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */], {
                        T: __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */]
                    }),
                    PtrUpdate: "boolean",
                    Cond: __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return LSMInstr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("LSM.LSMInstr", LSMInstr);
var LSMOpCodeMap = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["LDM", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(1)]], ["LDMFD", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(1)]], ["LDMIA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(1)]], ["LDMEA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(2)]], ["LDMDB", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(2)]], ["LDMFA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(0)]], ["LDMDA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(0)]], ["LDMED", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(3)]], ["LDMIB", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](0), new DIR(3)]], ["STM", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(2)]], ["STMEA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(2)]], ["STMIA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(2)]], ["STMFD", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(1)]], ["STMDB", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(1)]], ["STMED", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(3)]], ["STMDA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(3)]], ["STMFA", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(0)]], ["STMIB", [new __WEBPACK_IMPORTED_MODULE_4__LS_fs__["c" /* LORS */](1), new DIR(0)]]]), new __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var LSMSpec = new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["b" /* InstrClass */](3), Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["LDM", "STM"]), Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["FA", "FD", "EA", "ED", "", "IA", "DB", "IB", "DA"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["f" /* opCodeExpand */])(LSMSpec);
var parseCurBktRes = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(function (str) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["j" /* parseBktResGen */])("{", "}", str);
});
function parsePreBkt(str) {
    if (Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["a" /* endsWith */])(str, ",")) {
        var rstr = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(str, "end", ","), "both", " ");

        if (Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["a" /* endsWith */])(rstr, "!")) {
            var rnameStr = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["h" /* trim */])(rstr, "end", "!"), "both", " ");
            var rname = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(rnameStr, __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
            return [rname, true];
        } else {
            return [Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(rstr, __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]), false];
        }
    } else {
        return [null, true];
    }
}
function regRangeToList(str) {
    var regStartEnd = Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["l" /* splitIntoWords */])(str, ["-"]);
    var $var1 = regStartEnd.tail != null ? regStartEnd.tail.tail == null ? [1, regStartEnd.head] : regStartEnd.tail.tail.tail == null ? [0, regStartEnd.head, regStartEnd.tail.head] : [2] : [2];

    switch ($var1[0]) {
        case 0:
            var r1 = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
            var r2 = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[2], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]);
            var matchValue = [r1, r2];
            var $var2 = matchValue[0] != null ? matchValue[1] != null ? [0, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1])] : [1] : [1];

            switch ($var2[0]) {
                case 0:
                    return function (list) {
                        return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(__WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["h" /* register */], list);
                    }(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["m" /* range */])($var2[1].RegNum, $var2[2].RegNum)));

                case 1:
                    return null;
            }

        case 1:
            return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["f" /* regNames */]), null, function (k) {
                return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([k]);
            });

        case 2:
            return null;
    }
}
function parseInBkt(str) {
    var convSomeToItem = function convSomeToItem(inp) {
        if (inp == null) {
            return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
        } else {
            return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(inp);
        }
    };

    var regList = function (list) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(regRangeToList, list);
    }(Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["l" /* splitIntoWords */])(str, [","]));

    var matchValue = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function ($var3) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(null, $var3);
    }, regList);

    if (matchValue) {
        return null;
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["b" /* collect */])(convSomeToItem, regList);
    }
}
function parse(ls) {
    var parse_ = function parse_(tupledArg) {
        var patternInput = LSMOpCodeMap.get(tupledArg[1][0] + tupledArg[1][1]);
        var bktStrList = parseCurBktRes(ls.Operands);

        var parseBkt = function parseBkt(bkt) {
            var prebkt = parsePreBkt(bkt.PreBkt);
            var inbkt = parseInBkt(bkt.InBkt);
            var matchValue = [prebkt, inbkt, bkt.PostBkt];

            if (matchValue[0][0] == null) {
                return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid Reg 1");
            } else if (matchValue[1] == null) {
                return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid Reg List");
            } else if (matchValue[2] === "") {
                return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new LSMInstr(patternInput[0], patternInput[1], Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0][0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]), matchValue[0][1], tupledArg[1][2]));
            } else {
                return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Unexpected chars after brackets");
            }
        };

        var instrLSM = function (result) {
            return Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(parseBkt, result);
        }(bktStrList);

        if (instrLSM.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, instrLSM.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["e" /* Parse */](instrLSM.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(parse);


function storeLoadM(ls, dir, addr, dataPath, regList) {
    var listLength = regList.length | 0;
    var addrList = void 0;
    var matchValue = [ls, dir];
    var $var4 = matchValue[0].tag === 0 ? matchValue[1].tag === 1 ? [0] : matchValue[1].tag === 2 ? [1] : matchValue[1].tag === 0 ? [1] : [0] : matchValue[1].tag === 0 ? [0] : matchValue[1].tag === 3 ? [1] : matchValue[1].tag === 1 ? [1] : [0];

    switch ($var4[0]) {
        case 0:
            addrList = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k) {
                return addr + (k >>> 0);
            }, Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 4, (listLength - 1) * 4)));
            break;

        case 1:
            addrList = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k_1) {
                return addr - (k_1 >>> 0);
            }, Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 4, (listLength - 1) * 4)));
            break;
    }

    var finalAddr = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["i" /* last */])(addrList);
    var invalidStatus = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (k_2) {
        return k_2 < 4096;
    }, addrList);
    var unalignedStatus = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (k_3) {
        return k_3 % 4 !== 0;
    }, addrList);
    var matchValue_1 = [invalidStatus, unalignedStatus];

    if (matchValue_1[0]) {
        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Invalid Address");
    } else if (matchValue_1[1]) {
        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "unaligned word address");
    } else if (ls.tag === 0) {
        var mmData = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function ($var6) {
            return function (k_4) {
                return k_4 == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(k_4).tag === 0 ? Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(k_4).data : Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen. Memory of instruction area read"));
            }(function ($var5) {
                return function (arg00) {
                    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(arg00, dataPath.MM);
                }(function (arg0) {
                    return new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, arg0);
                }($var5));
            }($var6));
        }, addrList);
        var updateList = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["k" /* map2 */])(function (a, b) {
            return [a, b];
        }, regList, mmData));
        var updatedRegs = Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["o" /* updateRec */])(dataPath.Regs, updateList);
        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, [new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, updatedRegs, dataPath.MM), finalAddr]);
    } else {
        var regValues = Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (k_5) {
            return dataPath.Regs.get(k_5);
        }, regList);
        var updateList_1 = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["k" /* map2 */])(function (a_1, b_1) {
            return [new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["e" /* WAddr */](0, a_1), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["c" /* MemLoc */](0, b_1)];
        }, addrList, regValues));
        var updatedMM = Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["o" /* updateRec */])(dataPath.MM, updateList_1);
        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, [new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](dataPath.Fl, dataPath.Regs, updatedMM), finalAddr]);
    }
}
function LSMMain(dir, ins, ptrupdate, reg1, reglist, datapath) {
    var Regs;

    var sort = function sort(ins_1, dir_1, regs) {
        var matchValue = [ins_1, dir_1];
        var $var7 = matchValue[0].tag === 0 ? matchValue[1].tag === 1 ? [0] : matchValue[1].tag === 2 ? [1] : matchValue[1].tag === 0 ? [1] : [0] : matchValue[1].tag === 0 ? [0] : matchValue[1].tag === 3 ? [1] : matchValue[1].tag === 1 ? [1] : [0];

        switch ($var7[0]) {
            case 0:
                return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["q" /* sortWith */])(function ($var8, $var9) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["d" /* compare */])($var8, $var9);
                }, regs));

            case 1:
                return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["q" /* sortWith */])(function ($var10, $var11) {
                    return -Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["d" /* compare */])($var10, $var11);
                }, regs));
        }
    };

    var regNameList = function (list) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(__WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["h" /* register */], list);
    }(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(sort)(ins, dir)(Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(__WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["g" /* regNums */].get.bind(__WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["g" /* regNums */]), reglist)));

    var ptrAddr = datapath.Regs.get(reg1);
    var firstElAddr = void 0;
    var matchValue_1 = [ins, dir];
    var $var12 = matchValue_1[0].tag === 0 ? matchValue_1[1].tag === 1 ? [0] : matchValue_1[1].tag === 3 ? [1] : matchValue_1[1].tag === 2 ? [2] : [0] : matchValue_1[1].tag === 3 ? [0] : matchValue_1[1].tag === 0 ? [1] : matchValue_1[1].tag === 1 ? [2] : [0];

    switch ($var12[0]) {
        case 0:
            firstElAddr = ptrAddr;
            break;

        case 1:
            firstElAddr = ptrAddr + 4;
            break;

        case 2:
            firstElAddr = ptrAddr - 4;
            break;
    }

    var newDPAndLastAddr = void 0;
    var matchValue_2 = [reglist, reg1];

    if (Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (k_1) {
        return k_1.Equals(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */](15)) ? true : k_1.Equals(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */](13));
    }, matchValue_2[0])) {
        newDPAndLastAddr = new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "List of Registers cannot contain R13 and R15");
    } else if (Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function ($var13) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(matchValue_2[1], $var13);
    }, matchValue_2[0])) {
        newDPAndLastAddr = new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Stack pointer cannot be in list of registers");
    } else if (matchValue_2[1].Equals(new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["d" /* RName */](15))) {
        newDPAndLastAddr = new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, " Stack pointer must be from R0 to R14.");
    } else {
        newDPAndLastAddr = storeLoadM(ins, dir, firstElAddr, datapath, regNameList);
    }

    if (newDPAndLastAddr.tag === 1) {
        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, newDPAndLastAddr.data);
    } else {
        var lastAddr = newDPAndLastAddr.data[1];
        var DP = newDPAndLastAddr.data[0];
        var updatedReg1 = void 0;

        if (ptrupdate) {
            var matchValue_3 = [ins, dir];
            var $var14 = matchValue_3[0].tag === 0 ? matchValue_3[1].tag === 3 ? [0] : matchValue_3[1].tag === 1 ? [1] : matchValue_3[1].tag === 0 ? [2] : [0] : matchValue_3[1].tag === 1 ? [0] : matchValue_3[1].tag === 2 ? [1] : matchValue_3[1].tag === 3 ? [2] : [0];

            switch ($var14[0]) {
                case 0:
                    updatedReg1 = lastAddr;
                    break;

                case 1:
                    updatedReg1 = lastAddr + 4;
                    break;

                case 2:
                    updatedReg1 = lastAddr - 4;
                    break;
            }
        } else {
            updatedReg1 = ptrAddr;
        }

        return new __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_4__LS_fs__["d" /* PCPlus4 */])((Regs = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(reg1, updatedReg1, DP.Regs), new __WEBPACK_IMPORTED_MODULE_5__CommonData_fs__["a" /* DataPath */](DP.Fl, Regs, DP.MM))));
    }
}
function execLSM(instr, dataPath) {
    return LSMMain(instr.Dir, instr.Ins, instr.PtrUpdate, instr.Reg1, instr.RegList, dataPath);
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinctBy */
/* harmony export (immutable) */ __webpack_exports__["a"] = distinct;
/* unused harmony export SetTree */
/* unused harmony export create */
/* unused harmony export isEmpty */
/* unused harmony export add */
/* unused harmony export addInPlace */
/* unused harmony export remove */
/* unused harmony export union */
/* unused harmony export op_Addition */
/* unused harmony export unionInPlace */
/* unused harmony export unionMany */
/* unused harmony export difference */
/* unused harmony export op_Subtraction */
/* unused harmony export differenceInPlace */
/* unused harmony export intersect */
/* unused harmony export intersectInPlace */
/* unused harmony export intersectMany */
/* unused harmony export isProperSubsetOf */
/* unused harmony export isProperSubset */
/* unused harmony export isSubsetOf */
/* unused harmony export isSubset */
/* unused harmony export isProperSupersetOf */
/* unused harmony export isProperSuperset */
/* unused harmony export isSupersetOf */
/* unused harmony export isSuperset */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* unused harmony export filter */
/* unused harmony export map */
/* unused harmony export exists */
/* unused harmony export forAll */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export iterate */
/* unused harmony export minimumElement */
/* unused harmony export minElement */
/* unused harmony export maximumElement */
/* unused harmony export maxElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Util__ = __webpack_require__(1);






// tslint:disable:max-line-length












// ----------------------------------------------
// These functions belong to Seq.ts but are
// implemented here to prevent cyclic dependencies
function distinctBy(f, xs) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["a" /* choose */])(function (tup) {
        return tup[0];
    }, Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["p" /* scan */])(function (tup, x) {
        var acc = tup[1];
        var k = f(x);
        return acc.has(k) ? [null, acc] : [x, add(k, acc)];
    }, [null, create()], xs));
}
function distinct(xs) {
    return distinctBy(function (x) {
        return x;
    }, xs);
}
var SetTree = function SetTree(tag, data) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, SetTree);

    this.tag = tag | 0;
    this.data = data;
};
var tree_tolerance = 2;
function tree_countAux(s, acc) {
    countAux: while (true) {
        if (s.tag === 1) {
            return acc + 1 | 0;
        } else if (s.tag === 0) {
            return acc | 0;
        } else {
            var _var5 = s.data[1];
            acc = tree_countAux(s.data[2], acc + 1);
            s = _var5;
            continue countAux;
        }
    }
}
function tree_count(s) {
    return tree_countAux(s, 0);
}
function tree_SetOne(n) {
    return new SetTree(1, [n]);
}
function tree_SetNode(x, l, r, h) {
    return new SetTree(2, [x, l, r, h]);
}
function tree_height(t) {
    return t.tag === 1 ? 1 : t.tag === 2 ? t.data[3] : 0;
}
function tree_mk(l, k, r) {
    var matchValue = l.tag === 0 ? r.tag === 0 ? 0 : 1 : 1;
    switch (matchValue) {
        case 0:
            return tree_SetOne(k);
        case 1:
            var hl = tree_height(l) | 0;
            var hr = tree_height(r) | 0;
            var m = (hl < hr ? hr : hl) | 0;
            return tree_SetNode(k, l, r, m + 1);
    }
    throw new Error("internal error: Set.tree_mk");
}
function tree_rebalance(t1, k, t2) {
    var t1h = tree_height(t1);
    var t2h = tree_height(t2);
    if (t2h > t1h + tree_tolerance) {
        if (t2.tag === 2) {
            if (tree_height(t2.data[1]) > t1h + 1) {
                if (t2.data[1].tag === 2) {
                    return tree_mk(tree_mk(t1, k, t2.data[1].data[1]), t2.data[1].data[0], tree_mk(t2.data[1].data[2], t2.data[0], t2.data[2]));
                } else {
                    throw new Error("rebalance");
                }
            } else {
                return tree_mk(tree_mk(t1, k, t2.data[1]), t2.data[0], t2.data[2]);
            }
        } else {
            throw new Error("rebalance");
        }
    } else {
        if (t1h > t2h + tree_tolerance) {
            if (t1.tag === 2) {
                if (tree_height(t1.data[2]) > t2h + 1) {
                    if (t1.data[2].tag === 2) {
                        return tree_mk(tree_mk(t1.data[1], t1.data[0], t1.data[2].data[1]), t1.data[2].data[0], tree_mk(t1.data[2].data[2], k, t2));
                    } else {
                        throw new Error("rebalance");
                    }
                } else {
                    return tree_mk(t1.data[1], t1.data[0], tree_mk(t1.data[2], k, t2));
                }
            } else {
                throw new Error("rebalance");
            }
        } else {
            return tree_mk(t1, k, t2);
        }
    }
}
function tree_add(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c < 0) {
            return tree_SetNode(k, new SetTree(0), t, 2);
        } else if (c === 0) {
            return t;
        } else {
            return tree_SetNode(k, t, new SetTree(0), 2);
        }
    } else if (t.tag === 0) {
        return tree_SetOne(k);
    } else {
        var _c = comparer.Compare(k, t.data[0]);
        if (_c < 0) {
            return tree_rebalance(tree_add(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c === 0) {
            return t;
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_add(comparer, k, t.data[2]));
        }
    }
}
function tree_balance(comparer, t1, k, t2) {
    var matchValue = t1.tag === 1 ? t2.tag === 0 ? [1, t1] : t2.tag === 1 ? [2, t1.data[0], t2] : [2, t1.data[0], t2] : t1.tag === 2 ? t2.tag === 1 ? [3, t2.data[0], t1] : t2.tag === 2 ? [4, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]] : [1, t1] : [0, t2];
    switch (matchValue[0]) {
        case 0:
            return tree_add(comparer, k, matchValue[1]);
        case 1:
            return tree_add(comparer, k, matchValue[1]);
        case 2:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 3:
            return tree_add(comparer, k, tree_add(comparer, matchValue[1], matchValue[2]));
        case 4:
            if (matchValue[1] + tree_tolerance < matchValue[2]) {
                return tree_rebalance(tree_balance(comparer, t1, k, matchValue[7]), matchValue[4], matchValue[8]);
            } else if (matchValue[2] + tree_tolerance < matchValue[1]) {
                return tree_rebalance(matchValue[5], matchValue[3], tree_balance(comparer, matchValue[6], k, t2));
            } else {
                return tree_mk(t1, k, t2);
            }
    }
    throw new Error("internal error: Set.tree_balance");
}
function tree_split(comparer, pivot, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(t.data[0], pivot);
        if (c < 0) {
            return [t, false, new SetTree(0)];
        } else if (c === 0) {
            return [new SetTree(0), true, new SetTree(0)];
        } else {
            return [new SetTree(0), false, t];
        }
    } else if (t.tag === 0) {
        return [new SetTree(0), false, new SetTree(0)];
    } else {
        var _c2 = comparer.Compare(pivot, t.data[0]);
        if (_c2 < 0) {
            var patternInput = tree_split(comparer, pivot, t.data[1]);
            return [patternInput[0], patternInput[1], tree_balance(comparer, patternInput[2], t.data[0], t.data[2])];
        } else if (_c2 === 0) {
            return [t.data[1], true, t.data[2]];
        } else {
            var _patternInput = tree_split(comparer, pivot, t.data[2]);
            return [tree_balance(comparer, t.data[1], t.data[0], _patternInput[0]), _patternInput[1], _patternInput[2]];
        }
    }
}
function tree_spliceOutSuccessor(t) {
    if (t.tag === 1) {
        return [t.data[0], new SetTree(0)];
    } else if (t.tag === 2) {
        if (t.data[1].tag === 0) {
            return [t.data[0], t.data[2]];
        } else {
            var patternInput = tree_spliceOutSuccessor(t.data[1]);
            return [patternInput[0], tree_mk(patternInput[1], t.data[0], t.data[2])];
        }
    } else {
        throw new Error("internal error: Map.spliceOutSuccessor");
    }
}
function tree_remove(comparer, k, t) {
    if (t.tag === 1) {
        var c = comparer.Compare(k, t.data[0]);
        if (c === 0) {
            return new SetTree(0);
        } else {
            return t;
        }
    } else if (t.tag === 2) {
        var _c3 = comparer.Compare(k, t.data[0]);
        if (_c3 < 0) {
            return tree_rebalance(tree_remove(comparer, k, t.data[1]), t.data[0], t.data[2]);
        } else if (_c3 === 0) {
            var matchValue = [t.data[1], t.data[2]];
            if (matchValue[0].tag === 0) {
                return t.data[2];
            } else if (matchValue[1].tag === 0) {
                return t.data[1];
            } else {
                var patternInput = tree_spliceOutSuccessor(t.data[2]);
                return tree_mk(t.data[1], patternInput[0], patternInput[1]);
            }
        } else {
            return tree_rebalance(t.data[1], t.data[0], tree_remove(comparer, k, t.data[2]));
        }
    } else {
        return t;
    }
}
function tree_mem(comparer, k, t) {
    mem: while (true) {
        if (t.tag === 1) {
            return comparer.Compare(k, t.data[0]) === 0;
        } else if (t.tag === 0) {
            return false;
        } else {
            var c = comparer.Compare(k, t.data[0]) | 0;
            if (c < 0) {
                comparer = comparer;
                k = k;
                t = t.data[1];
                continue mem;
            } else if (c === 0) {
                return true;
            } else {
                comparer = comparer;
                k = k;
                t = t.data[2];
                continue mem;
            }
        }
    }
}
function tree_iter(f, t) {
    if (t.tag === 1) {
        f(t.data[0]);
    } else if (t.tag !== 0) {
        tree_iter(f, t.data[1]);
        f(t.data[0]);
        tree_iter(f, t.data[2]);
    }
}
function tree_foldBack(f, m, x) {
    return m.tag === 1 ? f(m.data[0], x) : m.tag === 0 ? x : tree_foldBack(f, m.data[1], f(m.data[0], tree_foldBack(f, m.data[2], x)));
}
function tree_fold(f, x, m) {
    if (m.tag === 1) {
        return f(x, m.data[0]);
    } else if (m.tag === 0) {
        return x;
    } else {
        var x_1 = tree_fold(f, x, m.data[1]);
        var x_2 = f(x_1, m.data[0]);
        return tree_fold(f, x_2, m.data[2]);
    }
}
function tree_forall(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? true : (f(m.data[0]) ? tree_forall(f, m.data[1]) : false) ? tree_forall(f, m.data[2]) : false;
}
function tree_exists(f, m) {
    return m.tag === 1 ? f(m.data[0]) : m.tag === 0 ? false : (f(m.data[0]) ? true : tree_exists(f, m.data[1])) ? true : tree_exists(f, m.data[2]);
}
function tree_isEmpty(m) {
    return m.tag === 0 ? true : false;
}
function tree_subset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a);
}
function tree_psubset(comparer, a, b) {
    return tree_forall(function (x) {
        return tree_mem(comparer, x, b);
    }, a) ? tree_exists(function (x) {
        return !tree_mem(comparer, x, a);
    }, b) : false;
}
function tree_filterAux(comparer, f, s, acc) {
    if (s.tag === 1) {
        if (f(s.data[0])) {
            return tree_add(comparer, s.data[0], acc);
        } else {
            return acc;
        }
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_1 = f(s.data[0]) ? tree_add(comparer, s.data[0], acc) : acc;
        return tree_filterAux(comparer, f, s.data[1], tree_filterAux(comparer, f, s.data[2], acc_1));
    }
}
function tree_filter(comparer, f, s) {
    return tree_filterAux(comparer, f, s, new SetTree(0));
}
function tree_diffAux(comparer, m, acc) {
    diffAux: while (true) {
        if (m.tag === 1) {
            return tree_remove(comparer, m.data[0], acc);
        } else if (m.tag === 0) {
            return acc;
        } else {
            var _var6 = comparer;
            var _var7 = m.data[1];
            acc = tree_diffAux(comparer, m.data[2], tree_remove(comparer, m.data[0], acc));
            comparer = _var6;
            m = _var7;
            continue diffAux;
        }
    }
}
function tree_diff(comparer, a, b) {
    return tree_diffAux(comparer, b, a);
}
function tree_union(comparer, t1, t2) {
    var matchValue = t1.tag === 0 ? [1, t2] : t1.tag === 1 ? t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [3, t1.data[0], t2] : [3, t1.data[0], t2] : t2.tag === 0 ? [2, t1] : t2.tag === 1 ? [4, t2.data[0], t1] : [0, t1.data[3], t2.data[3], t1.data[0], t2.data[0], t1.data[1], t1.data[2], t2.data[1], t2.data[2]];
    switch (matchValue[0]) {
        case 0:
            if (matchValue[1] > matchValue[2]) {
                var patternInput = tree_split(comparer, matchValue[3], t2);
                return tree_balance(comparer, tree_union(comparer, matchValue[5], patternInput[0]), matchValue[3], tree_union(comparer, matchValue[6], patternInput[2]));
            } else {
                var patternInput_1 = tree_split(comparer, matchValue[4], t1);
                return tree_balance(comparer, tree_union(comparer, matchValue[7], patternInput_1[0]), matchValue[4], tree_union(comparer, matchValue[8], patternInput_1[2]));
            }
        case 1:
            return matchValue[1];
        case 2:
            return matchValue[1];
        case 3:
            return tree_add(comparer, matchValue[1], matchValue[2]);
        case 4:
            return tree_add(comparer, matchValue[1], matchValue[2]);
    }
    throw new Error("internal error: Set.tree_union");
}
function tree_intersectionAux(comparer, b, m, acc) {
    intersectionAux: while (true) {
        if (m.tag === 1) {
            if (tree_mem(comparer, m.data[0], b)) {
                return tree_add(comparer, m.data[0], acc);
            } else {
                return acc;
            }
        } else if (m.tag === 0) {
            return acc;
        } else {
            var acc_1 = tree_intersectionAux(comparer, b, m.data[2], acc);
            var acc_2 = tree_mem(comparer, m.data[0], b) ? tree_add(comparer, m.data[0], acc_1) : acc_1;
            comparer = comparer;
            b = b;
            m = m.data[1];
            acc = acc_2;
            continue intersectionAux;
        }
    }
}
function tree_intersection(comparer, a, b) {
    return tree_intersectionAux(comparer, b, a, new SetTree(0));
}
function tree_partition1(comparer, f, k, acc1, acc2) {
    return f(k) ? [tree_add(comparer, k, acc1), acc2] : [acc1, tree_add(comparer, k, acc2)];
}
function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
    var acc = [acc_0, acc_1];
    if (s.tag === 1) {
        return tree_partition1(comparer, f, s.data[0], acc[0], acc[1]);
    } else if (s.tag === 0) {
        return acc;
    } else {
        var acc_2 = tree_partitionAux(comparer, f, s.data[2], acc[0], acc[1]);
        var acc_3 = tree_partition1(comparer, f, s.data[0], acc_2[0], acc_2[1]);
        return tree_partitionAux(comparer, f, s.data[1], acc_3[0], acc_3[1]);
    }
}
function tree_partition(comparer, f, s) {
    return tree_partitionAux(comparer, f, s, new SetTree(0), new SetTree(0));
}
// function tree_$MatchSetNode$MatchSetEmpty$(s: SetTree) {
//   return s.tag === 1 ? new Choice("Choice1Of2", [[s.data[0], new SetTree(0), new SetTree(0)]]) : s.tag === 0 ? new Choice("Choice2Of2", [null]) : new Choice("Choice1Of2", [[s.data[0], s.data[1], s.data[2]]]);
// }
function tree_minimumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_minimumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_minimumElementAux(s.data[1], s.data[0]);
}
function tree_maximumElementAux(s, n) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? n : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_maximumElementOpt(s) {
    return s.tag === 1 ? s.data[0] : s.tag === 0 ? null : tree_maximumElementAux(s.data[2], s.data[0]);
}
function tree_minimumElement(s) {
    var matchValue = tree_minimumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_maximumElement(s) {
    var matchValue = tree_maximumElementOpt(s);
    if (matchValue == null) {
        throw new Error("Set contains no elements");
    } else {
        return matchValue;
    }
}
function tree_collapseLHS(stack) {
    collapseLHS: while (true) {
        if (stack.tail != null) {
            if (stack.head.tag === 1) {
                return stack;
            } else if (stack.head.tag === 2) {
                stack = Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([stack.head.data[1], tree_SetOne(stack.head.data[0]), stack.head.data[2]], stack.tail);
                continue collapseLHS;
            } else {
                stack = stack.tail;
                continue collapseLHS;
            }
        } else {
            return new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */]();
        }
    }
}
function tree_mkIterator(s) {
    return { stack: tree_collapseLHS(new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](s, new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */]())), started: false };
}
// function tree_notStarted() {
//   throw new Error("Enumeration not started");
// };
// var alreadyFinished = $exports.alreadyFinished = function () {
//   throw new Error("Enumeration already started");
// };
function tree_moveNext(i) {
    function current(it) {
        if (it.stack.tail == null) {
            return null;
        } else if (it.stack.head.tag === 1) {
            return it.stack.head.data[0];
        }
        throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
    if (i.started) {
        if (i.stack.tail == null) {
            return { done: true, value: null };
        } else {
            if (i.stack.head.tag === 1) {
                i.stack = tree_collapseLHS(i.stack.tail);
                return {
                    done: i.stack.tail == null,
                    value: current(i)
                };
            } else {
                throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
            }
        }
    } else {
        i.started = true;
        return {
            done: i.stack.tail == null,
            value: current(i)
        };
    }
}
function tree_compareStacks(comparer, l1, l2) {
    compareStacks: while (true) {
        var matchValue = l1.tail != null ? l2.tail != null ? l2.head.tag === 1 ? l1.head.tag === 1 ? [4, l1.head.data[0], l2.head.data[0], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [6, l1.head.data[1], l1.head.data[0], l1.head.data[2], l2.head.data[0], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [10, l2.head.data[0], l2.tail] : l2.head.tag === 2 ? l2.head.data[1].tag === 0 ? l1.head.tag === 1 ? [5, l1.head.data[0], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : l1.head.tag === 2 ? l1.head.data[1].tag === 0 ? [7, l1.head.data[0], l1.head.data[2], l2.head.data[0], l2.head.data[2], l1.tail, l2.tail] : [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [11, l2.head.data[0], l2.head.data[1], l2.head.data[2], l2.tail] : l1.head.tag === 1 ? [8, l1.head.data[0], l1.tail] : l1.head.tag === 2 ? [9, l1.head.data[0], l1.head.data[1], l1.head.data[2], l1.tail] : [3, l1.tail, l2.tail] : [2] : l2.tail != null ? [1] : [0];
        switch (matchValue[0]) {
            case 0:
                return 0;
            case 1:
                return -1;
            case 2:
                return 1;
            case 3:
                comparer = comparer;
                l1 = matchValue[1];
                l2 = matchValue[2];
                continue compareStacks;
            case 4:
                var c = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c !== 0) {
                    return c | 0;
                } else {
                    comparer = comparer;
                    l1 = matchValue[3];
                    l2 = matchValue[4];
                    continue compareStacks;
                }
            case 5:
                var c_1 = comparer.Compare(matchValue[1], matchValue[2]) | 0;
                if (c_1 !== 0) {
                    return c_1 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](new SetTree(0), matchValue[4]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](matchValue[3], matchValue[5]);
                    continue compareStacks;
                }
            case 6:
                var c_2 = comparer.Compare(matchValue[2], matchValue[4]) | 0;
                if (c_2 !== 0) {
                    return c_2 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](matchValue[3], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](matchValue[1], matchValue[6]);
                    continue compareStacks;
                }
            case 7:
                var c_3 = comparer.Compare(matchValue[1], matchValue[3]) | 0;
                if (c_3 !== 0) {
                    return c_3 | 0;
                } else {
                    comparer = comparer;
                    l1 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](matchValue[2], matchValue[5]);
                    l2 = new __WEBPACK_IMPORTED_MODULE_7__List__["c" /* default */](matchValue[4], matchValue[6]);
                    continue compareStacks;
                }
            case 8:
                comparer = comparer;
                l1 = Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                l2 = l2;
                continue compareStacks;
            case 9:
                comparer = comparer;
                l1 = Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                l2 = l2;
                continue compareStacks;
            case 10:
                comparer = comparer;
                l1 = l1;
                l2 = Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([new SetTree(0), tree_SetOne(matchValue[1])], matchValue[2]);
                continue compareStacks;
            case 11:
                comparer = comparer;
                l1 = l1;
                l2 = Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([matchValue[2], tree_SetNode(matchValue[1], new SetTree(0), matchValue[3], 0)], matchValue[4]);
                continue compareStacks;
        }
    }
}
function tree_compare(comparer, s1, s2) {
    if (s1.tag === 0) {
        return s2.tag === 0 ? 0 : -1;
    } else {
        return s2.tag === 0 ? 1 : tree_compareStacks(comparer, Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([s1]), Object(__WEBPACK_IMPORTED_MODULE_7__List__["g" /* ofArray */])([s2]));
    }
}
function tree_mkFromEnumerator(comparer, acc, e) {
    var cur = e.next();
    while (!cur.done) {
        acc = tree_add(comparer, cur.value, acc);
        cur = e.next();
    }
    return acc;
}
function tree_ofSeq(comparer, c) {
    var ie = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(c);
    return tree_mkFromEnumerator(comparer, new SetTree(0), ie);
}

var FableSet = function () {
    /** Do not call, use Set.create instead. */
    function FableSet() {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, FableSet);

        return;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FableSet, [{
        key: "ToString",
        value: function ToString() {
            return "set [" + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default()(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__Util__["l" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(s2) {
            return this.CompareTo(s2) === 0;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(s2) {
            return this === s2 ? 0 : tree_compare(this.comparer, this.tree, s2.tree);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol_iterator___default.a,
        value: function value() {
            var i = tree_mkIterator(this.tree);
            return {
                next: function next() {
                    return tree_moveNext(i);
                }
            };
        }
    }, {
        key: "values",
        value: function values() {
            return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(this);
        }
    }, {
        key: "has",
        value: function has(v) {
            return tree_mem(this.comparer, v, this.tree);
        }
        /** Mutating method */

    }, {
        key: "add",
        value: function add(v) {
            this.tree = tree_add(this.comparer, v, this.tree);
            return this;
        }
        /** Mutating method */

    }, {
        key: "delete",
        value: function _delete(v) {
            // TODO: Is calculating the size twice is more performant than calling tree_mem?
            var oldSize = tree_count(this.tree);
            this.tree = tree_remove(this.comparer, v, this.tree);
            return oldSize > tree_count(this.tree);
        }
        /** Mutating method */

    }, {
        key: "clear",
        value: function clear() {
            this.tree = new SetTree(0);
        }
    }, {
        key: __WEBPACK_IMPORTED_MODULE_9__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpSet",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "size",
        get: function get() {
            return tree_count(this.tree);
        }
    }]);

    return FableSet;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (FableSet);

function from(comparer, tree) {
    var s = new FableSet();
    s.tree = tree;
    s.comparer = comparer || new __WEBPACK_IMPORTED_MODULE_6__Comparer__["a" /* default */]();
    return s;
}
function create(ie, comparer) {
    comparer = comparer || new __WEBPACK_IMPORTED_MODULE_6__Comparer__["a" /* default */]();
    return from(comparer, ie ? tree_ofSeq(comparer, ie) : new SetTree(0));
}
function isEmpty(s) {
    return tree_isEmpty(s.tree);
}
function add(item, s) {
    return from(s.comparer, tree_add(s.comparer, item, s.tree));
}
function addInPlace(item, s) {
    return s.has(item) ? false : (s.add(item), true);
}
function remove(item, s) {
    return from(s.comparer, tree_remove(s.comparer, item, s.tree));
}
function union(set1, set2) {
    return set2.tree.tag === 0 ? set1 : set1.tree.tag === 0 ? set2 : from(set1.comparer, tree_union(set1.comparer, set1.tree, set2.tree));
}
function op_Addition(set1, set2) {
    return union(set1, set2);
}
function unionInPlace(set1, set2) {
    Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["h" /* iterate */])(function (x) {
        set1.add(x);
    }, set2);
}
function unionMany(sets) {
    // Pass args as union(s, acc) instead of union(acc, s)
    // to discard the comparer of the first empty set
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["d" /* fold */])(function (acc, s) {
        return union(s, acc);
    }, create(), sets);
}
function difference(set1, set2) {
    return set1.tree.tag === 0 ? set1 : set2.tree.tag === 0 ? set1 : from(set1.comparer, tree_diff(set1.comparer, set1.tree, set2.tree));
}
function op_Subtraction(set1, set2) {
    return difference(set1, set2);
}
function differenceInPlace(set1, set2) {
    Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["h" /* iterate */])(function (x) {
        set1.delete(x);
    }, set2);
}
function intersect(set1, set2) {
    return set2.tree.tag === 0 ? set2 : set1.tree.tag === 0 ? set1 : from(set1.comparer, tree_intersection(set1.comparer, set1.tree, set2.tree));
}
function intersectInPlace(set1, set2) {
    var set2_ = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
    Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["h" /* iterate */])(function (x) {
        if (!set2_.has(x)) {
            set1.delete(x);
        }
    }, set1);
}
function intersectMany(sets) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["o" /* reduce */])(function (s1, s2) {
        return intersect(s1, s2);
    }, sets);
}
function isProperSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
        return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["f" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1) && Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["c" /* exists */])(function (x) {
            return !set1.has(x);
        }, set2);
    }
}
function isProperSubset(set1, set2) {
    return isProperSubsetOf(set1, set2);
}
function isSubsetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set1.tree, set2.tree);
    } else {
        set2 = set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2);
        return Object(__WEBPACK_IMPORTED_MODULE_8__Seq__["f" /* forAll */])(function (x) {
            return set2.has(x);
        }, set1);
    }
}
function isSubset(set1, set2) {
    return isSubsetOf(set1, set2);
}
function isProperSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_psubset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isProperSubset(set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2), set1);
    }
}
function isProperSuperset(set1, set2) {
    return isProperSupersetOf(set1, set2);
}
function isSupersetOf(set1, set2) {
    if (set1 instanceof FableSet && set2 instanceof FableSet) {
        return tree_subset(set1.comparer, set2.tree, set1.tree);
    } else {
        return isSubset(set2 instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a ? set2 : new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(set2), set1);
    }
}
function isSuperset(set1, set2) {
    return isSupersetOf(set1, set2);
}
function copyTo(xs, arr, arrayIndex, count) {
    if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) {
        throw new Error("Array is invalid");
    }
    count = count || arr.length;
    var i = arrayIndex || 0;
    var iter = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_get_iterator___default()(xs);
    while (count--) {
        var el = iter.next();
        if (el.done) {
            break;
        }
        arr[i++] = el.value;
    }
}
function partition(f, s) {
    if (s.tree.tag === 0) {
        return [s, s];
    } else {
        var tuple = tree_partition(s.comparer, f, s.tree);
        return [from(s.comparer, tuple[0]), from(s.comparer, tuple[1])];
    }
}
function filter(f, s) {
    if (s.tree.tag === 0) {
        return s;
    } else {
        return from(s.comparer, tree_filter(s.comparer, f, s.tree));
    }
}
function map(f, s) {
    var comparer = new __WEBPACK_IMPORTED_MODULE_6__Comparer__["a" /* default */]();
    return from(comparer, tree_fold(function (acc, k) {
        return tree_add(comparer, f(k), acc);
    }, new SetTree(0), s.tree));
}
function exists(f, s) {
    return tree_exists(f, s.tree);
}
function forAll(f, s) {
    return tree_forall(f, s.tree);
}
function fold(f, seed, s) {
    return tree_fold(f, seed, s.tree);
}
function foldBack(f, s, seed) {
    return tree_foldBack(f, s.tree, seed);
}
function iterate(f, s) {
    tree_iter(f, s.tree);
}
function minimumElement(s) {
    return tree_minimumElement(s.tree);
}
function minElement(s) {
    return tree_minimumElement(s.tree);
}
function maximumElement(s) {
    return tree_maximumElement(s.tree);
}
function maxElement(s) {
    return tree_maximumElement(s.tree);
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(30);
__webpack_require__(33);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
module.exports = __webpack_require__(7).Set;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(86);
var validate = __webpack_require__(39);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(67)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(14);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(88)('Set') });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(69)('Set');


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(70)('Set');


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(22);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BInstr; });
/* unused harmony export bSpec */
/* unused harmony export opCodes */
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony export (immutable) */ __webpack_exports__["c"] = execB;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__ = __webpack_require__(11);















var BInstr = function () {
    function BInstr(r14Val, targetAddr, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BInstr);

        this.R14Val = r14Val;
        this.TargetAddr = targetAddr;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BInstr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Branch.BInstr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    R14Val: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])("number"),
                    TargetAddr: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])("number"),
                    Cond: __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return BInstr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("Branch.BInstr", BInstr);
var bSpec = new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["b" /* InstrClass */](4), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["B", "BL"]), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([""]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["f" /* opCodeExpand */])(bSpec);
function parse(ls) {
    var parse_ = function parse_(tupledArg) {
        var targetSymb = Object(__WEBPACK_IMPORTED_MODULE_6__LS_fs__["k" /* removeEmptyStr */])(Object(__WEBPACK_IMPORTED_MODULE_6__LS_fs__["l" /* splitIntoWords */])(ls.Operands, [" "]));
        var target = targetSymb.tail == null ? new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "No target") : targetSymb.tail.tail == null ? ls.SymTab == null ? new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, null) : Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (arg0) {
            return arg0;
        }, Object(__WEBPACK_IMPORTED_MODULE_6__LS_fs__["e" /* convExp2Lit */])(targetSymb.head, Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab))) : new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Too many target input");
        var instrB = void 0;

        if (target.tag === 1) {
            instrB = new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, target.data);
        } else if (target.data == null) {
            if (tupledArg[1][0] === "B") {
                instrB = new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new BInstr(null, null, tupledArg[1][2]));
            } else if (tupledArg[1][0] === "BL") {
                instrB = new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new BInstr(ls.LoadAddr.data + 4, null, tupledArg[1][2]));
            } else {
                instrB = Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
            }
        } else {
            var addr = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(target.data);

            if (tupledArg[1][0] === "B") {
                instrB = new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new BInstr(null, addr, tupledArg[1][2]));
            } else if (tupledArg[1][0] === "BL") {
                instrB = new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new BInstr(ls.LoadAddr.data + 4, addr, tupledArg[1][2]));
            } else {
                instrB = Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
            }
        }

        if (instrB.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, instrB.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["e" /* Parse */](instrB.data, Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(parse);


function execB(instr, dataPath) {
    var Regs;
    var Regs_1;

    if (instr.TargetAddr == null) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("should not happen"));
    } else if (instr.R14Val != null) {
        var regUpdate = Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([[new __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__["d" /* RName */](15), Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(instr.TargetAddr) + 8], [new __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__["d" /* RName */](14), Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(instr.R14Val)]]);
        return new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, (Regs = Object(__WEBPACK_IMPORTED_MODULE_6__LS_fs__["o" /* updateRec */])(dataPath.Regs, regUpdate), new __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs, dataPath.MM)));
    } else {
        return new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, (Regs_1 = Object(__WEBPACK_IMPORTED_MODULE_6__LS_fs__["o" /* updateRec */])(dataPath.Regs, Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([[new __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__["d" /* RName */](15), Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(instr.TargetAddr) + 8]])), new __WEBPACK_IMPORTED_MODULE_12__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs_1, dataPath.MM)));
    }
}

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ArithType */
/* unused harmony export Suf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AriInstr; });
/* unused harmony export SumData */
/* unused harmony export shiftOpMap */
/* unused harmony export arithTypeMap */
/* unused harmony export dPSpec */
/* unused harmony export opCodes */
/* unused harmony export myUint32 */
/* unused harmony export actualSum */
/* unused harmony export cSum */
/* unused harmony export vSum */
/* unused harmony export doArith */
/* harmony export (immutable) */ __webpack_exports__["c"] = arith;
/* unused harmony export arithParse2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);



















var ArithType = function () {
    function ArithType(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ArithType);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ArithType, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DP.ArithType",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["ADD"], ["SUB"], ["RSB"], ["RSC"], ["ADC"], ["SBC"], ["CMP"], ["CMN"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return ArithType;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DP.ArithType", ArithType);
var Suf = function () {
    function Suf(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Suf);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Suf, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DP.Suf",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["FSet"], ["NoFSet"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return Suf;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DP.Suf", Suf);
var AriInstr = function () {
    function AriInstr(dest, op1, op2, suffix, arithType, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AriInstr);

        this.Dest = dest;
        this.Op1 = op1;
        this.Op2 = op2;
        this.Suffix = suffix;
        this.arithType = arithType;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(AriInstr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DP.AriInstr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Dest: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(__WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */]),
                    Op1: __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["a" /* Op2 */],
                    Suffix: Suf,
                    arithType: ArithType,
                    Cond: __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return AriInstr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DP.AriInstr", AriInstr);
var SumData = function () {
    function SumData(actual, cSum, vSum) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SumData);

        this.Actual = actual;
        this.CSum = cSum;
        this.VSum = vSum;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SumData, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DP.SumData",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Actual: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["a" /* default */],
                    CSum: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["a" /* default */],
                    VSum: __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["a" /* default */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return SumData;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DP.SumData", SumData);
var shiftOpMap = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["LSL", new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["b" /* ShiftRotateOption */](0)], ["LSR", new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["b" /* ShiftRotateOption */](2)], ["ASR", new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["b" /* ShiftRotateOption */](1)], ["ROR", new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["b" /* ShiftRotateOption */](3)]]), new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var arithTypeMap = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["ADD", new ArithType(0)], ["SUB", new ArithType(1)], ["RSB", new ArithType(2)], ["RSC", new ArithType(3)], ["ADC", new ArithType(4)], ["SBC", new ArithType(5)], ["CMP", new ArithType(6)], ["CMN", new ArithType(7)]]), new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var dPSpec = new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["b" /* InstrClass */](0), Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["ADD", "SUB", "RSB", "ADC", "SBC", "RSC", "CMP", "CMN"]), Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["", "S"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["f" /* remove */])("CMNS", Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["f" /* remove */])("CMPS", Object(__WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["f" /* opCodeExpand */])(dPSpec)));
function myUint32(x) {
    return function (x_1) {
        return x_1.shl(32);
    }(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(-1, false).shr(32)).not().and(x);
}
function actualSum(op1Val, op2Val, carry) {
    return myUint32(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(op1Val, false).add(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(op2Val, false)).add(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(carry, false)));
}
function cSum(op1Val, op2Val, carry) {
    return myUint32(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(op1Val, false)).add(myUint32(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(op2Val, false))).add(myUint32(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(carry, false)));
}
function vSum(op1Val, op2Val, carry) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(~~op1Val, false).add(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(~~op2Val, false)).add(Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(~~carry, false));
}
function doArith(op1Val, op2Val, carry) {
    var actual = actualSum(op1Val, op2Val, carry);
    var cSum_1 = cSum(op1Val, op2Val, carry);
    var vSum_1 = vSum(op1Val, op2Val, carry);
    return new SumData(actual, cSum_1, vSum_1);
}
function arith(instr, data) {
    var carry = data.Fl.C ? 1 : 0;
    var op1Val = data.Regs.get(instr.Op1);

    var setFlag = function setFlag(sum) {
        var cFlag = ~~sum.CSum.shr(32).toNumber() !== 0;
        var zFlag = sum.Actual.toNumber() >>> 0 === 0;
        var nFlag = sum.Actual.shr(31).toNumber() >>> 0 === 1;
        var vFlag = !Object(__WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Long__["b" /* fromNumber */])(~~sum.Actual.toNumber(), false).Equals(sum.VSum);
        return new __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["b" /* Flags */](nFlag, cFlag, zFlag, vFlag);
    };

    var createSum = function createSum(op1Val_1, op2Val) {
        switch (instr.arithType.tag) {
            case 7:
                return doArith(op1Val_1, op2Val, 0);

            case 1:
                return doArith(op1Val_1, -~~op2Val >>> 0, 0);

            case 6:
                return doArith(op1Val_1, -~~op2Val >>> 0, 0);

            case 2:
                return doArith(op2Val, -~~op1Val_1 >>> 0, 0);

            case 4:
                return doArith(op1Val_1, op2Val, carry);

            case 5:
                return doArith(op1Val_1, -~~(op2Val + 1) >>> 0, carry);

            case 3:
                return doArith(op2Val, -~~(op1Val_1 + 1) >>> 0, carry);

            default:
                return doArith(op1Val_1, op2Val, 0);
        }
    };

    var createNewReg = function createNewReg(dest, sum_1) {
        if (dest == null) {
            return data.Regs;
        } else {
            return function (lst) {
                return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["d" /* fold */])(function (_arg1, x) {
                    return function (tupledArg) {
                        return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(tupledArg[0], tupledArg[1], data.Regs);
                    }(x);
                }, data.Regs, lst);
            }(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([[Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(dest), sum_1.Actual.toNumber() >>> 0]]));
        }
    };

    var updateData = function updateData(dest_1, op1Val_2, op2Val_1) {
        var sum_2 = createSum(op1Val_2, op2Val_1);
        var fl = ((instr.Suffix.Equals(new Suf(0)) ? true : instr.arithType.Equals(new ArithType(7))) ? true : instr.arithType.Equals(new ArithType(6))) ? setFlag(sum_2) : data.Fl;
        var newReg = createNewReg(dest_1, sum_2);
        return new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_14__LS_fs__["d" /* PCPlus4 */])(new __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["a" /* DataPath */](fl, newReg, data.MM)));
    };

    if (instr.Op2.tag === 3) {
        var op2Val_2 = (carry << 31 | data.Regs.get(instr.Op2.data)) >>> 1;
        return updateData(instr.Dest, op1Val, op2Val_2);
    } else if (instr.Op2.tag === 1) {
        var op2Val_3 = data.Regs.get(instr.Op2.data);
        return updateData(instr.Dest, op1Val, op2Val_3);
    } else if (instr.Op2.tag === 0) {
        return updateData(instr.Dest, op1Val, instr.Op2.data);
    } else {
        var n = (instr.Op2.data[2].tag === 1 ? ~~data.Regs.get(instr.Op2.data[2].data) : ~~instr.Op2.data[2].data) | 0;
        var op2Val_4 = void 0;

        if (instr.Op2.data[1].tag === 1) {
            var signBit = data.Regs.get(instr.Op2.data[0]) >>> 31;
            var shiftedBit = signBit === 1 ? -1 >>> 0 << 32 - n : 0;
            op2Val_4 = data.Regs.get(instr.Op2.data[0]) >>> n | shiftedBit;
        } else if (instr.Op2.data[1].tag === 2) {
            op2Val_4 = data.Regs.get(instr.Op2.data[0]) >>> n;
        } else if (instr.Op2.data[1].tag === 3) {
            var x_1 = data.Regs.get(instr.Op2.data[0]);
            op2Val_4 = x_1 >>> n | x_1 << 32 - n;
        } else if (instr.Op2.data[1].tag === 4) {
            op2Val_4 = Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
        } else {
            op2Val_4 = data.Regs.get(instr.Op2.data[0]) << n;
        }

        return updateData(instr.Dest, op1Val, op2Val_4);
    }
}
function arithParse2(ls) {
    var parse_ = function parse_(tupledArg) {
        var suf = tupledArg[1][1] === "" ? new Suf(1) : tupledArg[1][1] === "S" ? new Suf(0) : Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("Impossible, it will be filtered by Option.map"));
        var arithType = arithTypeMap.get(tupledArg[1][0].toLocaleUpperCase());
        var opStrList = Object(__WEBPACK_IMPORTED_MODULE_14__LS_fs__["l" /* splitIntoWords */])(ls.Operands, [","]);
        var patternInput = void 0;
        var matchValue = [opStrList, arithType];
        var $var1 = matchValue[0].tail != null ? matchValue[1].tag === 6 ? [0, matchValue[0].head, matchValue[0].tail] : matchValue[1].tag === 7 ? [0, matchValue[0].head, matchValue[0].tail] : matchValue[0].tail.tail != null ? [1, matchValue[0].head, matchValue[0].tail.head, matchValue[0].tail.tail] : [2] : [2];

        switch ($var1[0]) {
            case 0:
                var op1Reg = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["f" /* regNames */]);
                var op2_ = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_14__LS_fs__["n" /* strList2Op2 */])($var1[2], Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["a" /* Op2 */](0, 0));
                patternInput = [null, op1Reg, op2_];
                break;

            case 1:
                var destReg = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[1], __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["f" /* regNames */]);
                var op1Reg_1 = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[2], __WEBPACK_IMPORTED_MODULE_4__CommonData_fs__["f" /* regNames */]);
                var op2__1 = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_14__LS_fs__["n" /* strList2Op2 */])($var1[3], Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab)) : new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_5__FlexOp2_fs__["a" /* Op2 */](0, 0));
                patternInput = [destReg, op1Reg_1, op2__1];
                break;

            case 2:
                patternInput = [null, null, null];
                break;
        }

        var instr = void 0;
        var matchValue_1 = [patternInput[0], patternInput[1], patternInput[2]];
        var $var2 = void 0;

        if (matchValue_1[0] == null) {
            if (matchValue_1[1] == null) {
                $var2 = [2];
            } else if (matchValue_1[2] != null) {
                var copyOfStruct = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[2]);

                if (copyOfStruct.tag === 1) {
                    $var2 = [2];
                } else {
                    $var2 = [1, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[1]), copyOfStruct.data];
                }
            } else {
                $var2 = [2];
            }
        } else if (matchValue_1[1] == null) {
            $var2 = [3];
        } else if (matchValue_1[2] != null) {
            var copyOfStruct_1 = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[2]);

            if (copyOfStruct_1.tag === 1) {
                $var2 = [4, copyOfStruct_1.data];
            } else {
                $var2 = [0, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[0]), Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_1[1]), copyOfStruct_1.data];
            }
        } else {
            $var2 = [5];
        }

        switch ($var2[0]) {
            case 0:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new AriInstr($var2[1], $var2[2], $var2[3], suf, arithType, tupledArg[1][2]));
                break;

            case 1:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new AriInstr(null, $var2[1], $var2[2], suf, arithType, tupledArg[1][2]));
                break;

            case 2:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Dest Error");
                break;

            case 3:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Op1 Error");
                break;

            case 4:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, $var2[1]);
                break;

            case 5:
                instr = new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "unexpected Error in DP");
                break;
        }

        if (instr.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, instr.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["e" /* Parse */](instr.data, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_16__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(arithParse2);



/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TTCode */
/* unused harmony export opcodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export MVSpec */
/* unused harmony export opCodes */
/* unused harmony export TTparse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* unused harmony export updateFl */
/* harmony export (immutable) */ __webpack_exports__["c"] = TestExecute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
















var TTCode = function () {
    function TTCode(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TTCode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(TTCode, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TT2.TTCode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["TST"], ["TEQ"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return TTCode;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TT2.TTCode", TTCode);
var opcodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["TST", new TTCode(0)], ["TEQ", new TTCode(1)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var Instr = function () {
    function Instr(opcode, op1, op2, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Opcode = opcode;
        this.Op1 = op1;
        this.Op2 = op2;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "TT2.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Opcode: TTCode,
                    Op1: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["a" /* Op2 */],
                    Cond: __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("TT2.Instr", Instr);
var MVSpec = new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["b" /* InstrClass */](7), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["TST", "TEQ"]), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([""]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["f" /* opCodeExpand */])(MVSpec);
function TTparse(ls) {
    var parse_ = function parse_(tupledArg) {
        var oprands = function (tok) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["f" /* ParseTSTOps */])(ls, tok);
        }(Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["m" /* splitStrIntoList */])(ls.Operands));

        if (oprands.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, oprands.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["e" /* Parse */](new Instr(opcodeMap.get(tupledArg[1][0]), oprands.data.Op1, oprands.data.Op2, tupledArg[1][2]), Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(TTparse);


function updateFl(cpuData_, setC, result) {
    var checkC = setC != null ? Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(setC) ? true : false : cpuData_.Fl.C;
    var checkN = ~~result < 0 ? true : false;
    var checkZ = ~~result === 0 ? true : false;
    return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["b" /* Flags */](checkN, checkC, checkZ, cpuData_.Fl.V), cpuData_.Regs, cpuData_.MM);
}
function TestExecute(cpuData, instr) {
    var rop1 = cpuData.Regs.get(instr.Op1);

    var setC = function (op2) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["a" /* Op2SetCFlag */])(cpuData, op2);
    }(instr.Op2);

    var rop2 = function (k) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["d" /* flexOp2 */])(k, cpuData);
    }(instr.Op2);

    var updateFlRegs_ = function updateFlRegs_(result) {
        return updateFl(cpuData, setC, result);
    };

    if (instr.Opcode.tag === 1) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 ^ rop2));
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 & rop2));
    }
}

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BTCode */
/* unused harmony export opcodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Instr; });
/* unused harmony export MVSpec */
/* unused harmony export opCodes */
/* unused harmony export BTparse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* unused harmony export updateFlRegs */
/* harmony export (immutable) */ __webpack_exports__["b"] = BitwiseExecute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
















var BTCode = function () {
    function BTCode(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BTCode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(BTCode, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "BT2.BTCode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["AND"], ["EOR"], ["BIC"], ["ORR"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return BTCode;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("BT2.BTCode", BTCode);
var opcodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["AND", new BTCode(0)], ["EOR", new BTCode(1)], ["BIC", new BTCode(2)], ["ORR", new BTCode(3)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var Instr = function () {
    function Instr(opcode, setflag, rdest, op1, op2, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Opcode = opcode;
        this.Setflag = setflag;
        this.Rdest = rdest;
        this.Op1 = op1;
        this.Op2 = op2;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "BT2.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Opcode: BTCode,
                    Setflag: "boolean",
                    Rdest: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op1: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["a" /* Op2 */],
                    Cond: __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("BT2.Instr", Instr);
var MVSpec = new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["b" /* InstrClass */](1), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["AND", "EOR", "BIC", "ORR"]), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["", "S"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["f" /* opCodeExpand */])(MVSpec);
function BTparse(ls) {
    var parse_ = function parse_(tupledArg) {
        var oprands = function (tok) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["b" /* ParseBITOps */])(ls, tok);
        }(Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["m" /* splitStrIntoList */])(ls.Operands));

        if (oprands.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, oprands.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["e" /* Parse */](new Instr(opcodeMap.get(tupledArg[1][0]), function (_arg2) {
                return _arg2 === "S" ? true : false;
            }(tupledArg[1][1]), oprands.data.Dest, oprands.data.Op1, oprands.data.Op2, tupledArg[1][2]), Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(BTparse);


function updateFlRegs(cpuData_, rdest, setF, setC, result) {
    var checkC = setC != null ? Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(setC) ? true : false : cpuData_.Fl.C;
    var checkN = ~~result < 0 ? true : false;
    var checkZ = ~~result === 0 ? true : false;

    if (setF) {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["b" /* Flags */](checkN, checkC, checkZ, cpuData_.Fl.V), Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    } else {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](cpuData_.Fl, Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    }
}
function BitwiseExecute(cpuData, instr) {
    var rop1 = cpuData.Regs.get(instr.Op1);

    var setC = function (op2) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["a" /* Op2SetCFlag */])(cpuData, op2);
    }(instr.Op2);

    var rop2 = function (k) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["d" /* flexOp2 */])(k, cpuData);
    }(instr.Op2);

    var updateFlRegs_ = function updateFlRegs_(result) {
        return updateFlRegs(cpuData, instr.Rdest, instr.Setflag, setC, result);
    };

    if (instr.Opcode.tag === 1) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 ^ rop2));
    } else if (instr.Opcode.tag === 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 & ~rop2));
    } else if (instr.Opcode.tag === 3) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 | rop2));
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop1 & rop2));
    }
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MVCode */
/* unused harmony export opcodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export MVSpec */
/* unused harmony export opCodes */
/* unused harmony export MVparse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* unused harmony export updateFlRegs */
/* harmony export (immutable) */ __webpack_exports__["c"] = MovsExecute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
















var MVCode = function () {
    function MVCode(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MVCode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MVCode, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "MV2.MVCode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["MOV"], ["MVN"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return MVCode;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("MV2.MVCode", MVCode);
var opcodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["MOV", new MVCode(0)], ["MVN", new MVCode(1)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var Instr = function () {
    function Instr(opcode, setflag, rdest, op2, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Opcode = opcode;
        this.Setflag = setflag;
        this.Rdest = rdest;
        this.Op2 = op2;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "MV2.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Opcode: MVCode,
                    Setflag: "boolean",
                    Rdest: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op2: __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["a" /* Op2 */],
                    Cond: __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("MV2.Instr", Instr);
var MVSpec = new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["b" /* InstrClass */](5), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["MOV", "MVN"]), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["", "S"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["f" /* opCodeExpand */])(MVSpec);
function MVparse(ls) {
    var parse_ = function parse_(tupledArg) {
        var oprands = function (tok) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["d" /* ParseMOVOps */])(ls, tok);
        }(Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["m" /* splitStrIntoList */])(ls.Operands));

        if (oprands.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, oprands.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["e" /* Parse */](new Instr(opcodeMap.get(tupledArg[1][0]), function (_arg2) {
                return _arg2 === "S" ? true : false;
            }(tupledArg[1][1]), oprands.data.Dest, oprands.data.Op2, tupledArg[1][2]), Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(MVparse);


function updateFlRegs(cpuData_, rdest, setF, setC, result) {
    var checkC = setC != null ? Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(setC) ? true : false : cpuData_.Fl.C;
    var checkN = ~~result < 0 ? true : false;
    var checkZ = ~~result === 0 ? true : false;

    if (setF) {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["b" /* Flags */](checkN, checkC, checkZ, cpuData_.Fl.V), Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    } else {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](cpuData_.Fl, Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    }
}
function MovsExecute(cpuData, instr) {
    var setC = function (op2) {
        return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["a" /* Op2SetCFlag */])(cpuData, op2);
    }(instr.Op2);

    var rop2 = instr.Rdest.tag === 15 ? function (k) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["d" /* flexOp2 */])(k, cpuData) + 4;
    }(instr.Op2) : function (k_1) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["d" /* flexOp2 */])(k_1, cpuData);
    }(instr.Op2);

    var updateFlRegs_ = function updateFlRegs_(result) {
        return updateFlRegs(cpuData, instr.Rdest, instr.Setflag, setC, result);
    };

    if (instr.Opcode.tag === 1) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(~rop2));
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(rop2));
    }
}

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShiftCode */
/* unused harmony export opcodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export SFSpec */
/* unused harmony export opCodes */
/* unused harmony export SFparse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* unused harmony export CheckCond */
/* unused harmony export updateFlRegs */
/* harmony export (immutable) */ __webpack_exports__["c"] = ShiftExecute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
















var ShiftCode = function () {
    function ShiftCode(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ShiftCode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ShiftCode, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "SF2.ShiftCode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["LSL"], ["LSR"], ["ASR"], ["ROR"], ["RRX"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return ShiftCode;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("SF2.ShiftCode", ShiftCode);
var opcodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["LSL", new ShiftCode(0)], ["LSR", new ShiftCode(1)], ["ASR", new ShiftCode(2)], ["ROR", new ShiftCode(3)], ["RRX", new ShiftCode(4)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var Instr = function () {
    function Instr(opcode, setflag, rdest, op1, op2, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Opcode = opcode;
        this.Setflag = setflag;
        this.Rdest = rdest;
        this.Op1 = op1;
        this.Op2 = op2;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "SF2.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Opcode: ShiftCode,
                    Setflag: "boolean",
                    Rdest: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op1: __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["d" /* RName */],
                    Op2: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* Option */])(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["a" /* Op2 */]),
                    Cond: __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("SF2.Instr", Instr);
var SFSpec = new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["b" /* InstrClass */](6), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["LSL", "LSR", "ASR", "ROR", "RRX"]), Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["", "S"]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["f" /* opCodeExpand */])(SFSpec);
function SFparse(ls) {
    var parse_ = function parse_(tupledArg) {
        var operands = function (tok) {
            return Object(__WEBPACK_IMPORTED_MODULE_10__TokenizeOperands_v2_fs__["e" /* ParseSHIFTOps */])(tupledArg[1][0], ls, tok);
        }(Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["m" /* splitStrIntoList */])(ls.Operands));

        if (operands.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, operands.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_9__CommonLex_fs__["e" /* Parse */](new Instr(opcodeMap.get(tupledArg[1][0]), function (_arg2) {
                return _arg2 === "S" ? true : false;
            }(tupledArg[1][1]), operands.data.Dest, operands.data.Op1, operands.data.Op2, tupledArg[1][2]), Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_14__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(SFparse);


function CheckCond(cpuData, cond) {
    var $var1 = cond.tag === 0 ? cpuData.Fl.Z === true ? [0] : [1] : [1];

    switch ($var1[0]) {
        case 0:
            return true;

        case 1:
            var $var2 = cond.tag === 1 ? cpuData.Fl.Z === false ? [0] : [1] : [1];

            switch ($var2[0]) {
                case 0:
                    return true;

                case 1:
                    var $var3 = cond.tag === 2 ? cpuData.Fl.N === true ? [0] : [1] : [1];

                    switch ($var3[0]) {
                        case 0:
                            return true;

                        case 1:
                            var $var4 = cond.tag === 3 ? cpuData.Fl.N === false ? [0] : [1] : [1];

                            switch ($var4[0]) {
                                case 0:
                                    return true;

                                case 1:
                                    var $var5 = cond.tag === 12 ? cpuData.Fl.V === true ? [0] : [1] : [1];

                                    switch ($var5[0]) {
                                        case 0:
                                            return true;

                                        case 1:
                                            var $var6 = cond.tag === 13 ? cpuData.Fl.V === false ? [0] : [1] : [1];

                                            switch ($var6[0]) {
                                                case 0:
                                                    return true;

                                                case 1:
                                                    var $var7 = cond.tag === 5 ? cpuData.Fl.C === true ? [0] : [1] : [1];

                                                    switch ($var7[0]) {
                                                        case 0:
                                                            return true;

                                                        case 1:
                                                            var $var8 = cond.tag === 6 ? cpuData.Fl.C === false ? [0] : [1] : [1];

                                                            switch ($var8[0]) {
                                                                case 0:
                                                                    return true;

                                                                case 1:
                                                                    var $var9 = cond.tag === 4 ? (cpuData.Fl.C === true ? cpuData.Fl.Z === false : false) ? [0] : [1] : [1];

                                                                    switch ($var9[0]) {
                                                                        case 0:
                                                                            return true;

                                                                        case 1:
                                                                            var $var10 = cond.tag === 7 ? (cpuData.Fl.C === false ? true : cpuData.Fl.Z === true) ? [0] : [1] : [1];

                                                                            switch ($var10[0]) {
                                                                                case 0:
                                                                                    return true;

                                                                                case 1:
                                                                                    var $var11 = cond.tag === 8 ? cpuData.Fl.N === cpuData.Fl.V ? [0] : [1] : [1];

                                                                                    switch ($var11[0]) {
                                                                                        case 0:
                                                                                            return true;

                                                                                        case 1:
                                                                                            var $var12 = cond.tag === 11 ? cpuData.Fl.N !== cpuData.Fl.V ? [0] : [1] : [1];

                                                                                            switch ($var12[0]) {
                                                                                                case 0:
                                                                                                    return true;

                                                                                                case 1:
                                                                                                    var $var13 = cond.tag === 9 ? (cpuData.Fl.Z === false ? cpuData.Fl.N === cpuData.Fl.V : false) ? [0] : [1] : [1];

                                                                                                    switch ($var13[0]) {
                                                                                                        case 0:
                                                                                                            return true;

                                                                                                        case 1:
                                                                                                            var $var14 = cond.tag === 10 ? (cpuData.Fl.Z === true ? true : cpuData.Fl.N !== cpuData.Fl.V) ? [0] : [1] : [1];

                                                                                                            switch ($var14[0]) {
                                                                                                                case 0:
                                                                                                                    return true;

                                                                                                                case 1:
                                                                                                                    if (cond.tag === 14) {
                                                                                                                        return false;
                                                                                                                    } else if (cond.tag === 15) {
                                                                                                                        return true;
                                                                                                                    } else {
                                                                                                                        return false;
                                                                                                                    }

                                                                                                            }

                                                                                                    }

                                                                                            }

                                                                                    }

                                                                            }

                                                                    }

                                                            }

                                                    }

                                            }

                                    }

                            }

                    }

            }

    }
}
function updateFlRegs(cpuData_, instr, rdest, op1, op2, setF, result) {
    var checkN = ~~result < 0 ? true : false;
    var checkZ = ~~result === 0 ? true : false;
    var checkC = void 0;

    switch (instr.tag) {
        case 1:
            if (~~op2 > 32) {
                checkC = false;
            } else if (~~op2 === 0) {
                checkC = cpuData_.Fl.C;
            } else if ((~~(op1 >>> ~~op2 - 1) & 1) === 1) {
                checkC = true;
            } else {
                checkC = false;
            }

            break;

        case 2:
            if (~~op2 > 32 ? ~~op1 < 0 : false) {
                checkC = true;
            } else if (~~op2 > 32 ? ~~op1 >= 0 : false) {
                checkC = false;
            } else if (~~op2 === 0) {
                checkC = cpuData_.Fl.C;
            } else if ((~~(op1 >>> ~~op2 - 1) & 1) === 1) {
                checkC = true;
            } else {
                checkC = false;
            }

            break;

        case 3:
            var int32 = function int32(op2_1) {
                return ~~op2_1 % 32 | 0;
            };

            if (int32(op2) === 0) {
                checkC = cpuData_.Fl.C;
            } else if ((int32(op1 >>> int32(op2) - 1) & 1) === 1) {
                checkC = true;
            } else {
                checkC = false;
            }

            break;

        case 4:
            if ((~~op1 & 1) === 1) {
                checkC = true;
            } else {
                checkC = false;
            }

            break;

        default:
            if (~~op2 > 32) {
                checkC = false;
            } else if (~~op2 === 0) {
                checkC = cpuData_.Fl.C;
            } else if (~~(op1 << ~~op2 - 1) < 0) {
                checkC = true;
            } else {
                checkC = false;
            }

    }

    if (setF) {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["b" /* Flags */](checkN, checkC, checkZ, cpuData_.Fl.V), Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    } else {
        return new __WEBPACK_IMPORTED_MODULE_7__CommonData_fs__["a" /* DataPath */](cpuData_.Fl, Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(rdest, result, cpuData_.Regs), cpuData_.MM);
    }
}
function ShiftExecute(cpuData, instr) {
    var r1 = cpuData.Regs.get(instr.Op1);
    var r2 = instr.Op2 == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_8__FlexOp2_fs__["d" /* flexOp2 */])(Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(instr.Op2), cpuData);

    var updateFlRegs_ = function updateFlRegs_(result) {
        return updateFlRegs(cpuData, instr.Opcode, instr.Rdest, r1, r2, instr.Setflag, result);
    };

    var modulo32 = function modulo32(op2) {
        return ~~(op2 << 27) >> 27 | 0;
    };

    switch (instr.Opcode.tag) {
        case 1:
            if (r2 > 31) {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(0));
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(r1 >>> modulo32(r2)));
            }

        case 2:
            if (r2 > 31) {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(0));
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(~~r1 >> modulo32(r2) >>> 0));
            }

        case 3:
            return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(r1 << 32 - modulo32(r2) | r1 >>> modulo32(r2)));

        case 4:
            var matchValue = cpuData.Fl.C;

            if (matchValue) {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(r1 >>> 1 | 1 << 31 >>> 0));
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(r1 >>> 1));
            }

        default:
            if (r2 > 31) {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(0));
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_11__LS_fs__["d" /* PCPlus4 */])(updateFlRegs_(r1 << modulo32(r2)));
            }

    }
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ByteOrWord */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export opCodes */
/* harmony export (immutable) */ __webpack_exports__["d"] = opt2Val;
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony export (immutable) */ __webpack_exports__["c"] = exec;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__ = __webpack_require__(11);


















var ByteOrWord = function () {
    function ByteOrWord(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ByteOrWord);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ByteOrWord, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DCD.ByteOrWord",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["BYTE"], ["WORD"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return ByteOrWord;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DCD.ByteOrWord", ByteOrWord);
var Instr = function () {
    function Instr(ins, values) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Ins = ins;
        this.Values = values;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "DCD.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Ins: ByteOrWord,
                    Values: Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["k" /* makeGeneric */])(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */], {
                        T: "number"
                    })
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("DCD.Instr", Instr);
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["DCD", [new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["b" /* InstrClass */](8), ["DCD", "", new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["a" /* Condition */](15)]]], ["DCB", [new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["b" /* InstrClass */](8), ["DCB", "", new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["a" /* Condition */](15)]]]]), new __WEBPACK_IMPORTED_MODULE_7__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
function opt2Val(inp) {
    if (inp == null) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
    } else {
        return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(inp);
    }
}
function parse(ls) {
    var parse_ = function parse_(tupledArg) {
        var instruction = tupledArg[1][0] === "DCD" ? new ByteOrWord(1) : tupledArg[1][0] === "DCB" ? new ByteOrWord(0) : Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));

        var convResToOpt = function convResToOpt(res) {
            if (res.tag === 1) {
                return null;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["c" /* makeSome */])(res.data);
            }
        };

        var checkByteValues = function checkByteValues(num) {
            if (num >= 0 ? num < 256 : false) {
                return num;
            } else if (~~num < 0 ? ~~num === -128 : false) {
                return (num + 0x80 & 0xFF) - 0x80 >>> 0;
            } else {
                return null;
            }
        };

        var valListRes = ls.SymTab != null ? Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function ($var1) {
            return convResToOpt(function (k) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__LS_fs__["f" /* convExp2LitNoCheck */])(k, Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab));
            }($var1));
        }, Object(__WEBPACK_IMPORTED_MODULE_10__LS_fs__["m" /* splitStrIntoList */])(ls.Operands)) : new __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */]();
        var valList = void 0;
        var matchValue = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (k_1) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(k_1, null);
        }, valListRes);

        if (matchValue) {
            valList = new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "invalid values");
        } else {
            valList = new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(opt2Val, valListRes));
        }

        var instr = void 0;

        if (instruction.tag === 0) {
            var checkedByteRes = function checkedByteRes(vallist) {
                return function (list) {
                    return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(checkByteValues, list);
                }(vallist);
            };

            var checkContainNone = function checkContainNone(list_1) {
                var matchValue_1 = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["c" /* exists */])(function (k_2) {
                    return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["h" /* equals */])(k_2, null);
                }, list_1);

                if (matchValue_1) {
                    return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Byte inputs must be between -128 and 255");
                } else {
                    return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(opt2Val, list_1));
                }
            };

            instr = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (k_3) {
                return new Instr(instruction, k_3);
            }, Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["a" /* bind */])(checkContainNone, function (result) {
                return Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(checkedByteRes, result);
            }(valList)));
        } else {
            instr = Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["c" /* map */])(function (k_4) {
                return new Instr(instruction, k_4);
            }, valList);
        }

        var matchValue_2 = [instr, ls.Label, tupledArg[1][2]];

        if (matchValue_2[0].tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, matchValue_2[0].data);
        } else if (matchValue_2[1] == null) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Name for DCD/DCB missing");
        } else if (matchValue_2[2].tag === 15) {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["e" /* Parse */](matchValue_2[0].data, [Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue_2[1]), ls.LoadAddr.data], tupledArg[1][0] === "DCD" ? valListRes.length >>> 0 : tupledArg[1][0] === "DCB" ? ~~(valListRes.length / 4) + 1 >>> 0 : Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen!")), new __WEBPACK_IMPORTED_MODULE_6__CommonLex_fs__["a" /* Condition */](15)));
        } else {
            return new __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Condition not allowed");
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(parse);


function exec(startAddr, instr, dataPath) {
    var mapping;

    var convertBytesIntoWords = function convertBytesIntoWords(list) {
        var numOfZerosNeeded = void 0;
        var matchValue = list.length % 4 | 0;

        if (matchValue === 0) {
            numOfZerosNeeded = 0;
        } else {
            numOfZerosNeeded = 4 - matchValue | 0;
        }

        var listOfZero = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["e" /* initialize */])(numOfZerosNeeded, function (_arg1) {
            return 0;
        });
        var endList = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["a" /* append */])(list, listOfZero);

        var convert = function convert(bytesList, wordList) {
            convert: while (true) {
                var $var2 = bytesList.tail == null ? [1] : bytesList.tail.tail != null ? bytesList.tail.tail.tail != null ? bytesList.tail.tail.tail.tail != null ? [0, bytesList.head, bytesList.tail.head, bytesList.tail.tail.head, bytesList.tail.tail.tail.head, bytesList.tail.tail.tail.tail] : [2] : [2] : [2];

                switch ($var2[0]) {
                    case 0:
                        var word = $var2[1] + ($var2[2] << 8) + ($var2[3] << 16) + ($var2[4] << 24);
                        bytesList = $var2[5];
                        wordList = new __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */](word, wordList);
                        continue convert;

                    case 1:
                        return Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["h" /* reverse */])(wordList);

                    case 2:
                        return Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen"));
                }
            }
        };

        return convert(endList, new __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_List__["c" /* default */]());
    };

    var intList = instr.Ins.tag === 0 ? convertBytesIntoWords(instr.Values) : instr.Values;
    return function (k) {
        return new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["a" /* DataPath */](dataPath.Fl, dataPath.Regs, k);
    }(Object(__WEBPACK_IMPORTED_MODULE_10__LS_fs__["o" /* updateRec */])(dataPath.MM, (mapping = function mapping(data, addr) {
        return [new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["e" /* WAddr */](0, startAddr + (addr >>> 0)), new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["c" /* MemLoc */](0, data)];
    }, function (list2) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["k" /* map2 */])(mapping, intList, list2));
    })(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 4, intList.length * 4 - 4)))));
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Instr; });
/* unused harmony export bSpec */
/* unused harmony export opCodes */
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony export (immutable) */ __webpack_exports__["c"] = exec;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FlexOp2_fs__ = __webpack_require__(27);















var Instr = function () {
    function Instr(reg, value, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Reg = reg;
        this.Value = value;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "ADR.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Reg: __WEBPACK_IMPORTED_MODULE_3__CommonData_fs__["d" /* RName */],
                    Value: "number",
                    Cond: __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("ADR.Instr", Instr);
var bSpec = new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["d" /* OpSpec */](new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["b" /* InstrClass */](9), Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])(["ADR"]), Object(__WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([""]));
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["f" /* opCodeExpand */])(bSpec);
function parse(ls) {
    var parse_ = function parse_(tupledArg) {
        var strList = Object(__WEBPACK_IMPORTED_MODULE_7__LS_fs__["m" /* splitStrIntoList */])(ls.Operands);
        var patternInput = void 0;
        var $var1 = strList.tail != null ? strList.tail.tail != null ? strList.tail.tail.tail == null ? [0, strList.tail.head, strList.head] : [1] : [1] : [1];

        switch ($var1[0]) {
            case 0:
                var reg_ = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])($var1[2], __WEBPACK_IMPORTED_MODULE_3__CommonData_fs__["f" /* regNames */]);
                var addr_ = void 0;

                if (ls.SymTab != null) {
                    var num = Object(__WEBPACK_IMPORTED_MODULE_7__LS_fs__["f" /* convExp2LitNoCheck */])($var1[1], Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(ls.SymTab));

                    if (num.tag === 1) {
                        addr_ = null;
                    } else {
                        addr_ = num.data;
                    }
                } else {
                    addr_ = 0;
                }

                patternInput = [reg_, addr_];
                break;

            case 1:
                patternInput = [null, null];
                break;
        }

        var instr = void 0;
        var matchValue = [patternInput[0], patternInput[1]];

        if (matchValue[0] == null) {
            instr = new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Dest error");
        } else if (matchValue[1] == null) {
            instr = new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Expression Error");
        } else {
            instr = new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new Instr(Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[0]), Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["b" /* getValue */])(matchValue[1]), tupledArg[1][2]));
        }

        if (instr.tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, instr.data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_4__CommonLex_fs__["e" /* Parse */](instr.data, Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }), 4, tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_9__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(parse);


function exec(instr, dataPath) {
    var Regs;
    var pcVal = dataPath.Regs.get(new __WEBPACK_IMPORTED_MODULE_3__CommonData_fs__["d" /* RName */](15)) - 4;
    var diff = instr.Value - pcVal;
    Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__["e" /* toConsole */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("difference is %A"))(diff);
    var validity = Object(__WEBPACK_IMPORTED_MODULE_13__FlexOp2_fs__["c" /* checkLitValidity */])(diff);

    if (validity) {
        return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, Object(__WEBPACK_IMPORTED_MODULE_7__LS_fs__["d" /* PCPlus4 */])((Regs = Object(__WEBPACK_IMPORTED_MODULE_8__nuget_packages_fable_core_1_3_8_fable_core_Map__["a" /* add */])(instr.Reg, instr.Value, dataPath.Regs), new __WEBPACK_IMPORTED_MODULE_3__CommonData_fs__["a" /* DataPath */](dataPath.Fl, Regs, dataPath.MM))));
    } else {
        return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "Offset out of range for address load");
    }
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EQUCode; });
/* unused harmony export opcodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Instr; });
/* unused harmony export opCodes */
/* unused harmony export FILLEQUparse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IMatch___; });
/* harmony export (immutable) */ __webpack_exports__["d"] = execFILL;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TokenizeOperands_v2_fs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LS_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(3);

















var EQUCode = function () {
    function EQUCode(tag) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, EQUCode);

        this.tag = tag | 0;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(EQUCode, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "EQUFILL.EQUCode",
                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
                cases: [["EQU"], ["FILL"]]
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return this.tag === other.tag;
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */])(this.tag, other.tag);
        }
    }]);

    return EQUCode;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("EQUFILL.EQUCode", EQUCode);
var opcodeMap = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["EQU", new EQUCode(0)], ["FILL", new EQUCode(1)]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
var Instr = function () {
    function Instr(opcode, value, cond) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Instr);

        this.Opcode = opcode;
        this.Value = value;
        this.Cond = cond;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Instr, [{
        key: __WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "EQUFILL.Instr",
                interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
                properties: {
                    Opcode: EQUCode,
                    Value: "number",
                    Cond: __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */]
                }
            };
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["i" /* equalsRecords */])(this, other);
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["f" /* compareRecords */])(this, other) | 0;
        }
    }]);

    return Instr;
}();
Object(__WEBPACK_IMPORTED_MODULE_2__nuget_packages_fable_core_1_3_8_fable_core_Symbol__["b" /* setType */])("EQUFILL.Instr", Instr);
var opCodes = Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["b" /* create */])(Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["g" /* ofArray */])([["EQU", [new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["b" /* InstrClass */](10), ["EQU", "", new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */](15)]]], ["FILL", [new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["b" /* InstrClass */](10), ["FILL", "", new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["a" /* Condition */](15)]]]]), new __WEBPACK_IMPORTED_MODULE_6__nuget_packages_fable_core_1_3_8_fable_core_Comparer__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__nuget_packages_fable_core_1_3_8_fable_core_Util__["e" /* comparePrimitives */]));
function FILLEQUparse(ls) {
    var parse_ = function parse_(tupledArg) {
        var oprands = function (tok) {
            return Object(__WEBPACK_IMPORTED_MODULE_8__TokenizeOperands_v2_fs__["c" /* ParseFILLEQUOps */])(tupledArg[1][0], ls, tok);
        }(Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["m" /* splitStrIntoList */])(ls.Operands));

        var matchValue = [oprands, ls.Label];

        if (matchValue[1] == null) {
            return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, "No Label found");
        } else if (matchValue[0].tag === 1) {
            return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](1, matchValue[0].data);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_10__nuget_packages_fable_core_1_3_8_fable_core_Result__["b" /* default */](0, new __WEBPACK_IMPORTED_MODULE_7__CommonLex_fs__["e" /* Parse */](new Instr(opcodeMap.get(tupledArg[1][0]), matchValue[0].data, tupledArg[1][2]), tupledArg[1][0] === "FILL" ? Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab) {
                return [lab, ls.LoadAddr.data];
            }) : tupledArg[1][0] === "EQU" ? Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(ls.Label, null, function (lab_1) {
                return [lab_1, matchValue[0].data];
            }) : Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__["f" /* toFail */])(Object(__WEBPACK_IMPORTED_MODULE_12__nuget_packages_fable_core_1_3_8_fable_core_String__["c" /* printf */])("will not happen")), ~~(matchValue[0].data / 4), tupledArg[1][2]));
        }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_11__nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* defaultArg */])(Object(__WEBPACK_IMPORTED_MODULE_4__nuget_packages_fable_core_1_3_8_fable_core_Map__["g" /* tryFind */])(ls.OpCode, opCodes), null, parse_);
}

var _IMatch___ = Object(__WEBPACK_IMPORTED_MODULE_13__nuget_packages_fable_core_1_3_8_fable_core_CurriedLambda__["a" /* default */])(FILLEQUparse);


function execFILL(startAddr, instr, dataPath) {
    if (instr.Value === 0) {
        return dataPath;
    } else {
        return function (k) {
            return new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["a" /* DataPath */](dataPath.Fl, dataPath.Regs, k);
        }(Object(__WEBPACK_IMPORTED_MODULE_9__LS_fs__["o" /* updateRec */])(dataPath.MM, Object(__WEBPACK_IMPORTED_MODULE_5__nuget_packages_fable_core_1_3_8_fable_core_List__["f" /* map */])(function (addr) {
            return [new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["e" /* WAddr */](0, startAddr + addr), new __WEBPACK_IMPORTED_MODULE_14__CommonData_fs__["c" /* MemLoc */](0, 0)];
        }, Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_Seq__["r" /* toList */])(Object(__WEBPACK_IMPORTED_MODULE_15__nuget_packages_fable_core_1_3_8_fable_core_Seq__["n" /* rangeStep */])(0, 4, instr.Value - 4)))));
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=renderer.js.map