module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+VFE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var GoTop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(GoTop, _React$Component);

  function GoTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GoTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GoTop).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onScrollStep", function () {
      if (window.pageYOffset === 0) {
        clearInterval(_this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - _this.props.scrollStepInPx);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "scrollToTop", function () {
      var intervalId = setInterval(_this.onScrollStep, _this.props.delayInMs);

      _this.setState({
        intervalId: intervalId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "renderGoTopIcon", function () {
      if (_this.state.thePosition) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          id: "toTop",
          className: "back-top-button",
          onClick: _this.scrollToTop
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icofont-rocket"
        }));
      }
    });

    _this.state = {
      intervalId: 0,
      thePosition: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GoTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          _this2.setState({
            thePosition: true
          });
        } else {
          _this2.setState({
            thePosition: false
          });
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.renderGoTopIcon());
    }
  }]);

  return GoTop;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (GoTop);

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R9PD");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5JGc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-72310e174741dbb68790e6f5d8c4c32d.jpg";

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "B1OR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Loader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Loader, _React$Component);

  function Loader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Loader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Loader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Loader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "preloader-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "preloader"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null)));
    }
  }]);

  return Loader;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "BLKz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        id: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-top"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "subscribe-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Subscribe for our Newsletter"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "subscribe-form"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "newsletter-form",
        "data-toggle": "validator"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Enter your email address",
        name: "EMAIL",
        required: true,
        autoComplete: "off"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn subscribe-btn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-paper-plane"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "validator-newsletter",
        className: "form-result"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "copyright"
      }, "Copyright 2019 \xA9 all rights by EnvyTheme")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Follow us :"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-google-plus"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-pinterest"
      }))))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Iezp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-b7d9c23c1fd3702b4a134a47049dfcc9.jpg";

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KK4J":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "KWOr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-241aff43cf19c0a218256dac1506558e.jpg";

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "R9PD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailsOne; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KK4J");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SQkg");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("B1OR");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("w/ZP");
/* harmony import */ var _components_Common_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("BLKz");
/* harmony import */ var _components_Common_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+VFE");















var DetailsOne =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DetailsOne, _React$Component);

  function DetailsOne() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DetailsOne);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DetailsOne).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DetailsOne, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default.a, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_8__["Preloader"], {
        fadeDuration: 1000
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "top-banner-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "banner-title"
      }, "Blog With Right Sidebar")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ol", {
        className: "breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Home"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Blog With Right Sidebar")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "blog",
        className: "blog-details-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8 col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.1s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("5JGc"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "20 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.2s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("Iezp"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "21 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("KWOr"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "22 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("KWOr"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "23 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("Iezp"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "24 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), "/ ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("5JGc"),
        alt: "Blog Post Image"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-date"
      }, "25 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More"))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "pagination-nav"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        "aria-label": "Previous"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-long-arrow-left"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "1"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "2"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "3"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "4"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        "aria-label": "Next"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-long-arrow-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "search-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "search",
        name: "search",
        placeholder: "Search Post Here..."
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn search-btn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-search"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "recent-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "blog-sidebar-title"
      }, "Recent post"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-recent-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("rsKP"),
        alt: "blog"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/details-one"
      }, "How to customize HeroApp")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Mar 21, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-recent-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("sfeU"),
        alt: "blog"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/details-one"
      }, "Awesome app landing page")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Mar 22, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-recent-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("b25/"),
        alt: "blog"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/details-one"
      }, "Eu bibendum dictum ipsum vivamus nostra lectus")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Mar 23, 2019"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-category"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "blog-sidebar-title"
      }, "Category"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Android ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(05)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Mobile App ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(05)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Photography ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(01)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "IOS ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(08)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Latest App ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(08)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Technology ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(02)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Lifestyle ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(04)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Trending Post ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(07)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "single-category"
      }, "Videos ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "(03)")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "popular-tags"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "blog-sidebar-title"
      }, "Popular Tags"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Android")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Mobile App")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Photography")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "IOS")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Latest App")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Technology")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Lifestyle")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Trending Post")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Videos")))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_Footer__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_GoTop__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        scrollStepInPx: "50",
        delayInMs: "16.66"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null))));
    }
  }]);

  return DetailsOne;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "SQkg":
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "b25/":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rsKP":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "sfeU":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w/ZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("k094");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var Navigation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "renderMenus", function () {
      // For external pages like blog & blog details
      if (window.location.pathname === '/details-one' || window.location.pathname === '/details-two' || window.location.pathname === '/blog-one' || window.location.pathname === '/blog-two' || window.location.pathname === '/blog-three') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "navbar-nav ml-auto"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "About"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Features"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Screenshots"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Pricing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Faqs"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link active"
        }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          onClick: _this.toggleNavbar,
          className: "nav-link"
        }, "Contact"))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return 100;
        },
        className: "nav-link active",
        href: "#home"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#about"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#features"
      }, "Features")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#screenshots"
      }, "Screenshots")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#pricing"
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#faqs"
      }, "Faqs")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#blog"
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: _this.toggleNavbar,
        offset: function offset() {
          return -30;
        },
        className: "nav-link",
        href: "#contact"
      }, "Contact")));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("menu-shrink");
        } else {
          elementId.classList.remove("menu-shrink");
        }
      });
      window.scrollTo(0, 0);

      if (!(window.location.pathname === '/details-one' || window.location.pathname === '/details-two' || window.location.pathname === '/blog-one' || window.location.pathname === '/blog-two' || window.location.pathname === '/blog-three')) {
        var mainNavLinks = document.querySelectorAll("nav ul li a");
        window.addEventListener("scroll", function () {
          var fromTop = window.scrollY;
          mainNavLinks.forEach(function (link) {
            var section = document.querySelector(link.hash);

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        id: "navbar",
        className: "navbar fixed-top navbar-expand-md navbar-light top-menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, "BankLingo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, this.renderMenus())));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ })

/******/ });