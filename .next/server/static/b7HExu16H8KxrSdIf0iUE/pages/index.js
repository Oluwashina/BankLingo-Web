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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Cjq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-f707346ff7d6ffd5c9b98425c9cbb6ff.png";

/***/ }),

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

/***/ "/FYF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(About, _React$Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "about",
        className: "app-about-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "About Our App"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-about-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Best Mobile App"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-verification-check"
      }), " Responsive design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-verification-check"
      }), " Easy to customize"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-verification-check"
      }), " Modern design")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#app-download",
        className: "default-button"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-cloud-download"
      }), "Download Now")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.9s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("28CD"),
        alt: "App About Image"
      })))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (About);

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

/***/ "/M1s":
/***/ (function(module, exports) {



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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "1x3o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("W+0S");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);













var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Contact, _React$Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "state", {
      submitting: false,
      submitted: false,
      buttonState: '',
      formFields: {
        name: '',
        email: '',
        subject: '',
        text: ''
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onSubmit", function (e) {
      e.preventDefault();
      var data = _this.state.formFields;
      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
      }).then(function (res) {
        res.status === 200 ? _this.setState({
          submitted: true
        }) : '';

        var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

        formFields.name = '';
        formFields.email = '';
        formFields.phone = '';
        formFields.subject = '';
        formFields.text = '';

        _this.setState({
          formFields: formFields
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "nameChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.name = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "emailChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.email = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "subjectChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.subject = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "textChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.text = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onHideSuccess", function () {
      _this.setState({
        submitted: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "successMessage", function () {
      if (_this.state.submitted) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "alert alert-success"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", null, "Thank you!"), " Your message is send to the owner", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          onClick: _this.onHideSuccess,
          type: "button",
          className: "close"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7")));
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "contact",
        className: "contact-section gray-bg"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_10___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Get in Touch"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_10___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "single-contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icofont-location-pin"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Office Address:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "2750 Quadra Street Victoria, Canada.")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_10___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "single-contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icofont-envelope"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "E-mail Address:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "heroapp@gmail.com")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_10___default.a, {
        delay: "0.8s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "single-contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icofont icofont-phone"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Phone Number:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "+324-9442-515"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-12 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_10___default.a, {
        delay: "0.9s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "contact-form"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        id: "contactForm",
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        required: true,
        "data-error": "Please enter your name",
        placeholder: "Your Name",
        value: this.state.formFields.name,
        onChange: this.nameChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "E-mail"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        required: true,
        "data-error": "Please enter your email",
        placeholder: "Email Address",
        value: this.state.formFields.email,
        onChange: this.emailChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Subject"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        required: true,
        "data-error": "Please enter your subject",
        placeholder: "Your subject",
        value: this.state.formFields.subject,
        onChange: this.subjectChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Message"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        className: "form-control",
        id: "message",
        rows: "6",
        required: true,
        "data-error": "Write your message",
        placeholder: "Enter your message here...",
        value: this.state.formFields.text,
        onChange: this.textChangeHandler
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "help-block with-errors"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        className: "default-button"
      }, "Send Message", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "icofont-arrow-right"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "msgSubmit",
        className: "h3 text-center hidden"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "clearfix"
      })), this.successMessage())))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ }),

/***/ "28CD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-about-739a519e663f67f443e29c5c30ff0b95.jpg";

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4iaM":
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tpJJ");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("/M1s");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11__);













var HowItWorks =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(HowItWorks, _React$Component);

  function HowItWorks() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HowItWorks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HowItWorks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HowItWorks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "how-it-works",
        className: "how-it-works gray-bg"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "How Lending works?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "BankLingo\u2019s Digital-Lending-Platform (DLP) offers operating capabilities to support day-to-day execution of lending process. We have built APIs to support end-to-end  the loan application workflow from product setup to customer\u2019s loan application and helping the business make all right decisions when it comes to credit."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hiw-feature-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-hiw-feature"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont icofont-login"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Loan Origination"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-hiw-feature"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont icofont-test-tube-alt"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Loan Underwritting/Decision making"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-hiw-feature"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-chart-histogram-alt"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Loan disbursement"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-hiw-feature"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-light-bulb"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Loan servicing or collection"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-hiw-feature"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-light-bulb"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, "Reports"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-5 offset-lg-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "video-demo-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__("HNf8"),
        alt: "Video Demo Image",
        className: "img-circle"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "play-video-icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();
        },
        className: "popup-youtube"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-play"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sonar-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sonar-emitter"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sonar-wave"
      }))))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_modal_video__WEBPACK_IMPORTED_MODULE_10___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }))));
    }
  }]);

  return HowItWorks;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HowItWorks);

/***/ }),

/***/ "5JGc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-72310e174741dbb68790e6f5d8c4c32d.jpg";

/***/ }),

/***/ "5nZn":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-mockup-1-a04420fac3170a8ee58670cf95df9696.png";

/***/ }),

/***/ "7Yif":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Features; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Features =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Features, _React$Component);

  function Features() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Features);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Features).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Features, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "features",
        className: "awsome-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Awsome Features"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-sun"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "High Resolution"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-light-bulb"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Unique Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-imac"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "Full Responsive"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.7s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-code-alt"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "CLEAN CODES"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.8s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-eye"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "RETINA READY"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.9s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-feature"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "feature-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-space-shuttle"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, "UNLIMITED FEATURES"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.")))))));
    }
  }]);

  return Features;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "822F":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-3f19fd6c47b7c1a1e4c66c62af5a4ffe.jpg";

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Tp+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-071fa0ee09c5d0a0d5b909a20109a6d2.jpg";

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

/***/ "CCBG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFoAWgMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAGBwUBAgMECAD/2gAIAQEAAAAAb2TIEBm6fklPWVsyDHODFilh0M1bfWX1S+d3LXnvU65l7fZI/mMzY6mHQZ2vqlMwfzwVu5GTSmmOtfX1XSDvf6+gBWe6akfY1oj4Npn4juSDN37sS0Ql4YczOFimJNuD/MOrmEMjBJTs0uExNJSG0E2E7wmzgDEdZYxswH6jHfFN4UEmAjB8jG9Q+eBR5aQn/8QAGQEBAQEBAQEAAAAAAAAAAAAABAMAAgEF/9oACAECEAAAANI6u94EjF9zGSz7yFp/SoQ7A/SxvL6nP//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBQEC/9oACAEDEAAAANO2iLCU3U5fB6dBSSqzS5JJDSZQqxNexTsJP//EACQQAAIDAAICAgMAAwAAAAAAAAEDAgQFAAYREgcTEBQhIjEz/9oACAEBAAEIAPB/vADzweb/AHall2Y1YXPknbW4phk/K9dqpDSw+1Ym57Cj/eeDwg88Hng8EP6eenOy60qNN/pjM2d3SlFDvjLRtEF+j0YZS/uWk2a10+Og94nqw/Q0fHPHCOeOCPJ+IxJ58kaMJRKIfBuVWMNSxy2kLlIc7OI/VIT7BWEWBi6V9iLFa+jD1Ea2bWuJA4R556cEf9817Aq573HdLXACfxDrHPfvp5hdmtbOjZqzvJsbW3otsvxNYRZK6+JrWpQPxbuTTCdRn9I5454PPHO5vC81Syy6tk3Nl8SVqV/e2Kr6c8Kjq2EJd2NGV2Sw5Glo19ViSO1UTXuL50hpXp0lmPn1HPHk/gc+Qn0jTrKleBiCR0HchjdmS2eTlbefbtNR3HGQWsanJUqikqPe42GbVQy6rlRurpRhSbIH6JgD8TDDCfpoLoRyVPOifTQCG6VIIkHQ+PPk5dILzNvse7hlM106EaSZiw9NbrmvrZ67zcx3Ttg6FaDEvNVqgPwZD+nnaoVqtOdoNRWUxLg0A1oVnQIM4Qli60FCSHNgZ+YKyqkx2LK8fu2bb5IOTfnTqqQhGmqXj7v2a/N7WGbQa4bG5fu32vatg8rB0ITfGNiJcYlipffEeCMi5Bi4A4lZzOzYJVSrBWo2HEoXCyUm0FD7ICUk+x53HQv2rViqLijD6TDPbCcQZ0Jg1LaC2ci5sOCR+6Z5hsIurBw7Kacw5NJ/23/c6LoQz43lampOvSolX2un/lzt1mFaGmqL5QkomC7EqwYueGwlrpcmfa23yZGMzzreULMqtgVlPTT/AF5JQ1RIUrODf+lpEDFlSIMvA5v10S2vWT1r+hXLK1/vM5hwh7y41a/228sLX5jzo4AsHxlxjJkyVxj45IDigDrM4Ix8Dn//xAA0EAACAgECAwUFBgcAAAAAAAABAgMRACFBBBIxIjJRYZEQExQggQUzQnGxwSM0UlNiocL/2gAIAQEACT8A9rJJOSLXZSfHOE4aE7FrdXzgJUcbwAulHOKtx1icFH+gPyn2sAQn64QyFyWVtSxOcRQydi6g2LIDY5SVSWRkJDWN1OEfGR9H3kX5vDCLRKyiQUCH2MBqepAGNZBuwbqj4jDyzxPb7Akfs2N2ZEH0Nag/KwFAUT0BJoE5IzO9s7HUmzevmceNY44IXBfoCCRnF8NMUB+6FVgaT4dmSGHmpLXOEEK6hdR/oUCRgoGx9emMfdlxV/K4VXclvyUXi2eZhvVEWDkSyxPwimm6EK+RokiRFnYaKgugMYSo8xuOjdNvj2rXY3GfjXnGoBrpknKk8sYf8g9/LKpnEwZU3ygGLUN2NVttkpSLiUPDysapA/dOPw8on4m55XBZxFWnJ0GcVcxsdiNEHmSEvLdmKkudSTZs5GQDAAgym4n4gKIhdhKsuxA7IGWSq2jHqy3RDf5Lv7TT0eXwutMiR+Knh/isRbq18pjA/q5sa3EjKRodAaPTwwBhyDm+hKnHPuNFg4s7eT40ckrjSgKo7k4VZgb8gcUSTy+9EC3Q0pjeQFvs+elnRBZjxgyuOZWGoKkdR7R4nOKEfFTXa7MW2UbEYhVmNObJF3qaOowUwEwVupABDD1zY2BsRlSwHuK/eTxo4zBD0GFuYzGjZuwLoHI/eQBABFKzMLuyTqM+zo1jUUoViKBN12rxGi8zqPUZKnqMrn6Leos5MWd7F+Q2UYvMCxGp0Jr9sPdRb3sVR9axAaclW3HkDl81gVsL3OHtVii/jEOvhdHB0dh6GsAt1DoPEdCB+WEEqNcO/jkie74cAuVFBWbCnNbWetkG6s9DjB6B67kjUgZ/YZa81NgjPxEZ5AfQgXjaMCMo8RGhKMRzct6EjQgHDbsSznaybN1iLI8CnUUSoYUSKx7MrM8redUBknXXGi5Z5gVmuhQYsQPEgNWE1TAkdCOpGvU4y3GSPXN4Gb0Wv1ObsfUG83OdqJgeYA6hhsSNaOcbHBAy00UcYDP5E4rct4veIB2sbg42qxNyjzU3hyFCF+zpqBUUMRe+u3niL3ztij+U/wC8RfvDt54i77YK0wAm8A6YN1wDvvijP//EACMRAAICAQMDBQAAAAAAAAAAAAECABEDEBJBITEyBBMUIjP/2gAIAQIBAT8AjPV1xPl4xzFe9SaFwsGVie26Ois1eImFhWwNdRG3DTMaxtCB7bVFO4W09OAHoTEeraZaq5u2stTNhAFqsw9GW4tA1xozb3o9pkUj7DiVawrWdQItVLnMzfkYvjFQXcCjT//EACURAAIBAwMEAgMAAAAAAAAAAAECAAMREgQhQRATMTIUoVJh4f/aAAgBAwEBPwCU6WWJPM+C58LHpFeoBJUCdsgKq+cfuUmdE33aV0N8ytg0qLi1umnF6qRmIcDLH+wIAWwbL1+pq6hZN5XHr0oXLWHMKlka/maatZ7NK6FlYxwxFz5ljKSdunlyYjg7HmZWaBstM7H8YwIaxmMU3SUTeqv6jezRqrWVeIWME//Z"

/***/ }),

/***/ "D69Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDownload; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var AppDownload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AppDownload, _React$Component);

  function AppDownload() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AppDownload);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AppDownload).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AppDownload, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "app-download",
        className: "app-download-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title",
        "data-wow-delay": ".3s"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "NOW AVAILABLE"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-download-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "download-btn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-brand-apple"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "available on", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "large-text"
      }, "App Store")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "download-btn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-brand-android-robot"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "available on", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "large-text"
      }, "Play Store"))))))))));
    }
  }]);

  return AppDownload;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "DoxH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faq; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uQVn");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QYuT");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__);










var Faq =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Faq, _React$Component);

  function Faq() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Faq);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Faq).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Faq, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "faqs",
        className: "faqs-section gray-bg"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Frequently Asked Questions"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("xa8k"),
        alt: "Faq Image"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "faq-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["Accordion"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "1."), " It is a long established fact that a reader will be")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "2."), "  Contrary to popular belief, Lorem Ipsum")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "3."), "  There are many variations of passages")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "4."), "  Lorem ipsum dolor sit amet")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "5."), "  Sed ut perspiciatis unde omnis iste natus")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemHeading"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemButton"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "6."), "  But I must explain to you")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItemPanel"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))))))));
    }
  }]);

  return Faq;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "Ei3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var Blog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Blog, _React$Component);

  function Blog() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Blog);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Blog).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "blog",
        className: "blog-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Latest Blog Post"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "horizontal-post single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("5JGc"),
        alt: "Blog Post Image"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "post_date"
      }, "20 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        },
        className: "default-button"
      }, "Read More", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-swoosh-right"
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.7s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "horizontal-post single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("Iezp"),
        alt: "Blog Post Image"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, "Awesome app"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "post_date"
      }, "21 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        },
        className: "default-button"
      }, "Read More", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-swoosh-right"
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.9s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "horizontal-post single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("KWOr"),
        alt: "Blog Post Image"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blog-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "blog-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/details-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        }
      }, "Awesome app landing page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-admin"
      }, "By ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "admin"), " / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "12"), " Comments / ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "post_date"
      }, "22 Mar, 2019")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient. Erat tristique nonummy etiam, fusce est porttitor..."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        onClick: function onClick() {
          return window.location.refresh();
        },
        className: "default-button"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-swoosh-right"
      }))))))))));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "FSaE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-f17f67798a0b064a423c2c20564d69f8.png";

/***/ }),

/***/ "HNf8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video-demo-2a740c3055ffc934fc7363d6178e5b23.jpg";

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

/***/ "QYXK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAFoAWgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwIFAAMEAQj/2gAIAQEAAAAA+iszmCKI3KslOXPnihXgBD6tO8n7p90oItVSpZn1r7slzzEV4frhPXv0mV7pcuK0Q2cVBYtJmbs5PQZelAwPdTkNJy4pV3y8y6PiG3uwd86/VQpPUUqqbAdRBt1BKOyVwojznLnncawlUUrF0CFmubtotDmgrAw/tKPQvcaF0TWCfqCyz00XKLnFj//EABoBAAMAAwEAAAAAAAAAAAAAAAMEBQABAgb/2gAIAQIQAAAA3yA3eYglRa3qYBl4nM1R47SUY5D0Awra63oP/8QAGQEAAwEBAQAAAAAAAAAAAAAAAwQFAgAB/9oACAEDEAAAAO2yAXe0H0EM+1m1pYtUqSCKzdsQ15xLkg7MX//EADsQAAIBBAAEAgUJBgcAAAAAAAECAwAEBREGEiExQXEQEyJhgQcUIzJRYnKhsSQzQnOCkRUWNERSksH/2gAIAQEAAT8A13rrXWry9tbK3kuLqdYok1zO3QDdXnyk4CGcRwCe6Uqdyxgcn50/ytWiOAcVJr+b1rAcX4XO+xbTFJu5hk6P8D4+jRrRodPRrvWvR8pmVYvZY+N9BXDyt7z2FZCN0i2YuX9PMEeFX04LtptEGrDJT208csUpV1YMrL0Owd7Brgjixc/ZFZmAu4QBJ98eD+nVa91eNaqaVIYZJX+qilj5AbrJxnL3sUJP007F29wY1ccLQraLE7b0gAPlXEPCUEcbyRvoimikt7gofA1wNlZcdlbS6DewWAcfdJ0wNKyugZTsMAQfAg9j6FHo1QrjS/FphZhvRlIjHxNcHLHPxHmJpSoWBY1BPYbWshe2kpCw3MTkAkhWBP5Gs/e2UaFJXrMwW0zCeAdEIDDYJ0T30Kw1lyJ9u2BH9Y1+ZFcGZA32AtST7cYMT+a1rtSj0a9HykF2gsVHhLuuGLXJ3R4kTHzRRytNGC0gLADkrAcK5m3zwkurv1se9/VWuNMaHyDwx7WIzAOR9hFW/CVtbvI/rRqQnajoASaNp8wvooPB4VdR+FwCK4EDW1zlbXwEgYUF7UB6PE1quNLIzWcMoH1G/WuAMpDBn+J7V9dopl+AKGsfm2vMvcLaxNIkSnm1obbwGzWauRPcXPzmB4nYkBKjuzazW0NzNG5ZlUIGBcb7FgDWcdHzuLjTuLSZj5FlArAWyx5S/lHika/luug1Q36B6MpbLPZyxkd1NObrEcYLeRAaO0kQ/wAaMArKKx2GsJrlru0nuFjZxMscblUbwZHArPz2wuglvjvpOxd+YhfeATUWCshcrdhg8xm9dPOQF2QNAADsFrE3zZTP5O/6+qjVYIR90NusTk1XKOhbuIz8CK32pa17q3T3MEYJaVRWV4jxttCwE6u7AgAVxZapdBLmHW2AO+/UjejXCeauoMgE3oSp7aHsXXoSK4iy1vFGS9qR94D9NVlOLJrn9lt1MVsgLP8A85COwOuwrh3msbCPnGjK/O3kxCipbx7bORDm+ui68taFYDKRZKxjlB9tCUkXxDLS+hYEVCSNnVcSPb6EYiXnIJB7coFZaaVZ5CrMUHMB4kkjWhWOnea3EE7dGXSt7/Csfai0vuc+/XxrMSi5tGAPhV1aequQp+3rWUtQPUBF0DFCq1n8isc+Gn5iGEKh/I9KxOffEXUN9bc8iTjVzDokdP4lIrFZqwykIktpgTrbIejL5j0TygI4HflNZK0MzXO/4YgfiRWctgtxDaRLoM22Pu3rQ86uYwhkijHWEKp/vsn4GsFiLHKRQrOveMN0Oj08QaynD1nYEGO4klTxVtE/lqv8r2uSvmklnMab2QANhRWatEM8IjP1IUKj3Kdg1xdCA6L1PIvMvkWrATgR2iB+ui3uK1j4VW7gmRzH7QHMn57oS3Gh9NH/ANatpzNJJ+Aj/wAq5QD54dd3Va4jEcWQifl2TIiJ9rOx1/YdzUkR/apdEtNI3v6brhB3F25O9LB6sVlIkkVtruobIr7C95Dpj468RWRiH+M2jj6hQxt8FrOWUt7kZ+RfYjiVCfzOveKxMAhuoUft1Kn4crAVaSNHBBzdfaIoX50PaP8AesX/AKhvwirn91P/ADhXEfXiLGDwEUzDz13puloSO/Iev9VcLd38qu+9Q/X/AKau+7fiX9DVqq/NZzyjfr2qYAXNroD98a/20PmKQDlXp4Cv/8QAJREAAgEDAgYDAQAAAAAAAAAAAQIAAwQREjEQEyEiMjMgQVKB/9oACAECAQE/AI76RmLWZtoHz0Pwu3IKqIruH7ZrJVT9xTkZ43QPMaU2LPnYxC/draUfDgSBvLuqnMUBs/r+xGKtiEjGqW757TwuvUwAi9VlOjUddYEcsqrmLshEQvjqsq+poJZqOXiXygKpH6iOSFlPxn//xAAjEQACAgEDBQADAAAAAAAAAAABAgARAwQSIRATIjEyIEJy/9oACAEDAQE/AIiF2qNgRRzHx0LHr8NEgpnM2oyeSw46Zh+sYbSw66QjsrUKACplCALsEzffSifU0aPsa1/mBrXlYbJqZ0ryHTS/dky+VjZ8attLVPFm4jD7Bjql8ROHWD5mpY9y5pWJZrhUeUf3P//Z"

/***/ }),

/***/ "QYuT":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-preloading-screen"
var external_react_preloading_screen_ = __webpack_require__("SQkg");

// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__("KK4J");
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// EXTERNAL MODULE: ./components/Navigation/Navigation.js
var Navigation = __webpack_require__("w/ZP");

// EXTERNAL MODULE: ./components/Shared/Loader.js
var Loader = __webpack_require__("B1OR");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react-owl-carousel3"
var external_react_owl_carousel3_ = __webpack_require__("q4RA");
var external_react_owl_carousel3_default = /*#__PURE__*/__webpack_require__.n(external_react_owl_carousel3_);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// CONCATENATED MODULE: ./components/HomeOne/Slider.js









var options = {
  items: 1,
  nav: true,
  dots: false,
  touchDrag: false,
  mouseDrag: false,
  autoplay: false,
  autoplayHoverPause: true,
  loop: true,
  navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"]
};

var Slider_Slider =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Slider, _React$Component);

  function Slider() {
    Object(classCallCheck["a" /* default */])(this, Slider);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Slider).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Slider, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        id: "home",
        className: "hompage-slides-wrapper"
      }, external_react_default.a.createElement(external_react_owl_carousel3_default.a, Object(esm_extends["a" /* default */])({
        className: "homepage-slides owl-carousel owl-theme"
      }, options), this.props.slideData.map(function (data, idx) {
        return external_react_default.a.createElement("div", {
          className: "single-slider-item gradient-bg",
          key: idx
        }, external_react_default.a.createElement("div", {
          className: "slide-item-table"
        }, external_react_default.a.createElement("div", {
          className: "slide-item-tablecell"
        }, external_react_default.a.createElement("div", {
          className: "container"
        }, external_react_default.a.createElement("div", {
          className: "row"
        }, external_react_default.a.createElement("div", {
          className: "col-md-12 col-lg-7"
        }, external_react_default.a.createElement(external_react_visibility_sensor_default.a, null, function (_ref) {
          var isVisible = _ref.isVisible;
          return external_react_default.a.createElement("div", {
            className: "slider-text"
          }, external_react_default.a.createElement("h1", {
            className: isVisible ? "animated fadeInUp slow opacityOne" : ''
          }, data.heading), external_react_default.a.createElement("p", {
            className: isVisible ? "animated fadeInUp slow opacityOne" : ''
          }, data.text), external_react_default.a.createElement("div", {
            className: "slide-button"
          }, external_react_default.a.createElement("a", {
            href: "#",
            className: "\n                                                                        slide-btn-white mr-10 ".concat(isVisible ? "animated fadeInDown slow opacityOne" : "", "\n                                                                    ")
          }, external_react_default.a.createElement("i", {
            className: "icofont-cloud-download"
          }), "Request a demo"), external_react_default.a.createElement("a", {
            href: "#",
            className: "\n                                                                        slide-btn-bordered ".concat(isVisible ? "animated fadeInDown slow opacityOne" : "", "\n                                                                    ")
          }, "Find Out More")));
        })), external_react_default.a.createElement("div", {
          className: "col-md-12 col-lg-5"
        }, external_react_default.a.createElement("div", {
          className: "welcome-phone"
        }, external_react_default.a.createElement("img", {
          src: __webpack_require__("5nZn"),
          alt: "App Mockup image"
        }))))))));
      })));
    }
  }]);

  return Slider;
}(external_react_default.a.Component);

Slider_Slider.defaultProps = {
  slideData: [{
    heading: "Manage your loan, deposits and investments with BankLingo",
    text: "BankLingo by NIDCOM Solutions is a light-weight, cloud based core banking solution that empowers financial institutions to rapidly create financial products (Lending, Savings, Transactional banking, Deposits, etc.)"
  }, {
    heading: "Awesome Jibo Mobile App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }]
};
/* harmony default export */ var HomeOne_Slider = (Slider_Slider);
// EXTERNAL MODULE: ./components/HomeOne/About.js
var About = __webpack_require__("/FYF");

// EXTERNAL MODULE: ./components/HomeOne/HowItWorks.js
var HowItWorks = __webpack_require__("4iaM");

// EXTERNAL MODULE: ./components/HomeOne/Features.js
var Features = __webpack_require__("7Yif");

// EXTERNAL MODULE: ./components/HomeOne/Counter.js
var Counter = __webpack_require__("SHZO");

// EXTERNAL MODULE: ./components/Common/Screenshots.js + 1 modules
var Screenshots = __webpack_require__("pQ+i");

// EXTERNAL MODULE: ./components/HomeOne/Testimonial.js
var Testimonial = __webpack_require__("W4Ro");

// EXTERNAL MODULE: ./components/HomeOne/Pricing.js
var Pricing = __webpack_require__("qC/9");

// EXTERNAL MODULE: ./components/Common/Faq.js
var Faq = __webpack_require__("DoxH");

// EXTERNAL MODULE: ./components/HomeOne/Team.js
var Team = __webpack_require__("drXD");

// EXTERNAL MODULE: ./components/HomeOne/AppDownload.js
var AppDownload = __webpack_require__("D69Z");

// EXTERNAL MODULE: ./components/HomeOne/Blog.js
var Blog = __webpack_require__("Ei3t");

// EXTERNAL MODULE: ./components/Common/Contact.js
var Contact = __webpack_require__("1x3o");

// EXTERNAL MODULE: ./components/Common/Footer.js
var Footer = __webpack_require__("BLKz");

// EXTERNAL MODULE: ./components/Common/GoTop.js
var GoTop = __webpack_require__("+VFE");

// CONCATENATED MODULE: ./pages/index.js


























var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index() {
    Object(classCallCheck["a" /* default */])(this, Index);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Index).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_no_ssr_default.a, {
        key: "1"
      }, external_react_default.a.createElement(external_react_preloading_screen_["Preloader"], {
        fadeDuration: 1000
      }, external_react_default.a.createElement(Navigation["a" /* default */], null), external_react_default.a.createElement(HomeOne_Slider, null), external_react_default.a.createElement(About["a" /* default */], null), external_react_default.a.createElement(HowItWorks["a" /* default */], null), external_react_default.a.createElement(Features["a" /* default */], null), external_react_default.a.createElement(Counter["a" /* default */], null), external_react_default.a.createElement(Screenshots["a" /* default */], null), external_react_default.a.createElement(Testimonial["a" /* default */], null), external_react_default.a.createElement(Pricing["a" /* default */], null), external_react_default.a.createElement(Faq["a" /* default */], null), external_react_default.a.createElement(Team["a" /* default */], null), external_react_default.a.createElement(AppDownload["a" /* default */], null), external_react_default.a.createElement(Blog["a" /* default */], null), external_react_default.a.createElement(Contact["a" /* default */], null), external_react_default.a.createElement(Footer["a" /* default */], null), external_react_default.a.createElement(GoTop["a" /* default */], {
        scrollStepInPx: "50",
        delayInMs: "16.66"
      }), external_react_default.a.createElement(external_react_preloading_screen_["Placeholder"], null, external_react_default.a.createElement(Loader["a" /* default */], null))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "RZfI":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-d740ea0cd47608c9e2aff0fefd4f0988.png";

/***/ }),

/***/ "SHZO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Counter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Counter, _React$Component);

  function Counter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Counter);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Counter).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Counter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "counter",
        className: "counter-stats"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "counter-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-users"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Users"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "counter-number"
      }, "2900")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "counter-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-heart-alt"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Happy Clients"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "counter-number"
      }, "2099")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "counter-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-rating"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Reviews"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "counter-number"
      }, "1999")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "counter-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-cloud-download"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "App Downloads"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "counter-number"
      }, "7899")))))));
    }
  }]);

  return Counter;
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

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Unq7":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-6b6605f17250b1ca5032ef6e6186ca14.jpg";

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "W4Ro":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Testimonial; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q4RA");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__);








var options = {
  items: 1,
  nav: false,
  dots: true,
  autoplay: false,
  margin: 40,
  smartSpeed: 500,
  autoplayHoverPause: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    758: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

var Testimonial =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Testimonial, _React$Component);

  function Testimonial() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Testimonial);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Testimonial).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Testimonial, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        id: "testimonial",
        className: "testimonial-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        className: "testimonial-carousel owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icofont-quote-left"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "description"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("q", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pic"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__("zHiC"),
        alt: "client Image"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "title"
      }, "Tareq"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "post"
      }, "UI / UX Designer"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icofont-quote-left"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "description"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("q", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pic"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__("RZfI"),
        alt: "Client Image"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "title"
      }, "Muttakin"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "post"
      }, "Web Developer"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icofont-quote-left"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "description"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("q", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pic"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__("QYXK"),
        alt: "Client Image"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "title"
      }, "Miranda Joy"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "post"
      }, "Web Developer"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icofont-quote-left"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "description"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("q", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "testimonial-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pic"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: __webpack_require__("CCBG"),
        alt: "Client Image"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "title"
      }, "Kristina"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "post"
      }, "Web Developer"))))))));
    }
  }]);

  return Testimonial;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "drXD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var Team =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Team, _React$Component);

  function Team() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Team);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Team).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Team, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "team",
        className: "team-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Our Awesome Team"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-member"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("9Tp+"),
        alt: "Team Member Image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "member-name"
      }, "Steve Roberts"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "designation"
      }, "CEO & Fouder")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-member"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("822F"),
        alt: "Team Member Image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "member-name"
      }, "John Marshall"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "designation"
      }, "UI/UX Designer")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_7___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-member"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__("Unq7"),
        alt: "Team Member Image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "social-links"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "member-name"
      }, "Michael Cartney"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "designation"
      }, "Front-End Developer")))))));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "j5En":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-f18c11420d3332291c4034b7d1c350cc.png";

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pQ+i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// EXTERNAL MODULE: external "react-owl-carousel3"
var external_react_owl_carousel3_ = __webpack_require__("q4RA");
var external_react_owl_carousel3_default = /*#__PURE__*/__webpack_require__.n(external_react_owl_carousel3_);

// CONCATENATED MODULE: ./components/Modal/Modal.js







var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Modal, _React$Component);

  function Modal() {
    Object(classCallCheck["a" /* default */])(this, Modal);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Modal).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Modal, [{
    key: "render",
    value: function render() {
      var closeModal = this.props.closeModal;
      return external_react_default.a.createElement("div", {
        className: "modal right screenshots-modal fade",
        id: "screenshot_details",
        style: {
          paddingRight: '16px',
          display: 'block'
        }
      }, external_react_default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, external_react_default.a.createElement("div", {
        className: "modal-content"
      }, external_react_default.a.createElement("div", {
        className: "modal-header"
      }, external_react_default.a.createElement("button", {
        onClick: closeModal,
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, external_react_default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), external_react_default.a.createElement("div", {
        className: "modal-body"
      }, external_react_default.a.createElement("div", {
        className: "screenshot-details-container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-5 col-lg-5"
      }, external_react_default.a.createElement("img", {
        src: this.props.image,
        alt: "Screenshot Image"
      })), external_react_default.a.createElement("div", {
        className: "col-md-7 col-lg-7"
      }, external_react_default.a.createElement("div", {
        className: "screenshot-details-text"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Screenshots Title"), external_react_default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."), external_react_default.a.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "High Resolution"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Unique Design"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Full Responsive"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Clean Codes")), external_react_default.a.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), external_react_default.a.createElement("p", null, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))))));
    }
  }]);

  return Modal;
}(external_react_default.a.Component);

/* harmony default export */ var components_Modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./components/Common/Screenshots.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Screenshots_Screenshots; });












var options = {
  nav: true,
  margin: 30,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  smartSpeed: 500,
  loop: true,
  navText: ["<i class='icofont-swoosh-left'></i>", "<i class='icofont-swoosh-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

var Screenshots_Screenshots =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Screenshots, _React$Component);

  function Screenshots() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Screenshots);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Screenshots)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      modalOpen: false,
      modalImage: ''
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeModal", function () {
      _this.setState({
        modalOpen: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleImage", function (image) {
      _this.setState({
        modalImage: image
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Screenshots, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modalOpen = this.state.modalOpen;
      return external_react_default.a.createElement("section", {
        id: "screenshots",
        className: "app-screenshots-section"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-12"
      }, external_react_default.a.createElement(external_react_wow_default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, external_react_default.a.createElement("div", {
        className: "section-title"
      }, external_react_default.a.createElement("h2", null, "App Screenshots"), external_react_default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), external_react_default.a.createElement(external_react_wow_default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-12"
      }, external_react_default.a.createElement(external_react_owl_carousel3_default.a, Object(esm_extends["a" /* default */])({
        className: "screenshot-carousel owl-carousel owl-theme"
      }, options), external_react_default.a.createElement("div", {
        className: "screenshot-item"
      }, external_react_default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__("+Cjq"));
        },
        href: "#",
        className: "screenshot-image"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__("+Cjq"),
        alt: "Screenshot Image"
      }))), external_react_default.a.createElement("div", {
        className: "screenshot-item"
      }, external_react_default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__("rj7d"));
        },
        href: "#",
        className: "screenshot-image"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__("rj7d"),
        alt: "Screenshot Image"
      }))), external_react_default.a.createElement("div", {
        className: "screenshot-item"
      }, external_react_default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__("sxfI"));
        },
        href: "#",
        className: "screenshot-image"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__("sxfI"),
        alt: "Screenshot Image"
      }))), external_react_default.a.createElement("div", {
        className: "screenshot-item"
      }, external_react_default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__("FSaE"));
        },
        href: "#",
        className: "screenshot-image"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__("FSaE"),
        alt: "Screenshot Image"
      }))), external_react_default.a.createElement("div", {
        className: "screenshot-item"
      }, external_react_default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__("j5En"));
        },
        href: "#",
        className: "screenshot-image"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__("j5En"),
        alt: "Screenshot Image"
      })))))))), modalOpen ? external_react_default.a.createElement(components_Modal_Modal, {
        closeModal: this.closeModal,
        image: this.state.modalImage
      }) : '');
    }
  }]);

  return Screenshots;
}(external_react_default.a.Component);



/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "qC/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pricing; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1lU9");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Pricing =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Pricing, _React$Component);

  function Pricing() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Pricing);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Pricing).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Pricing, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "pricing",
        className: "pricing-section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Pricing Table"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.4s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-price-package"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Standard"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "price-value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("sup", {
        className: "text-bottom"
      }, "$"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-large"
      }, "33"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "duration"
      }, "/ Per Month"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "price-list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "UI / UX Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "App Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "disabled"
      }, "Web Developement"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "disabled"
      }, "Wordpress Theme"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "disabled"
      }, "24 / 7 Support")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "purchase-btn"
      }, "Purchase"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-price-package personal-price-package"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Personal"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "price-value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("sup", {
        className: "text-bottom"
      }, "$"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-large"
      }, "69"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "duration"
      }, "/Per Month"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "price-list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "UI / UX Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "App Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Developement"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "disabled"
      }, "Wordpress Theme"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "disabled"
      }, "24 / 7 Support")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "purchase-btn"
      }, "Purchase"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12 col-lg-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_6___default.a, {
        delay: "0.6s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-price-package"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Business"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "price-value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("sup", null, "$"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-large"
      }, "99"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "duration"
      }, "/Per Month"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "price-list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "UI / UX Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "App Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Developement"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Wordpress Theme"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "24 / 7 Support")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "purchase-btn"
      }, "Purchase"))))))));
    }
  }]);

  return Pricing;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rj7d":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-b71d09b048ce53676c0cd8ff188b9a48.png";

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

/***/ "sxfI":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-a8814c77f1584b68b45ef4d36a7487f9.png";

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "uQVn":
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

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

/***/ }),

/***/ "xa8k":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-img-dd0baeef06d2c08f57871f54b1555b05.png";

/***/ }),

/***/ "zHiC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-341dd1e0186f107ec9344482d6680e17.png";

/***/ })

/******/ });