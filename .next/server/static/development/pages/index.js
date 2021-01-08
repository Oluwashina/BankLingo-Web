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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Common/Contact.js":
/*!**************************************!*\
  !*** ./components/Common/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);













var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Contact, _React$Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit", function (e) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "nameChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.name = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "emailChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.email = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "subjectChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.subject = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "textChangeHandler", function (e) {
      var formFields = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.formFields);

      formFields.text = e.target.value;

      _this.setState({
        formFields: formFields
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onHideSuccess", function () {
      _this.setState({
        submitted: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "successMessage", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, [{
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

/***/ "./components/Common/Faq.js":
/*!**********************************!*\
  !*** ./components/Common/Faq.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faq; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_8__);










var Faq =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Faq, _React$Component);

  function Faq() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Faq);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Faq).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Faq, [{
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
        src: __webpack_require__(/*! ../../images/faq-img.png */ "./images/faq-img.png"),
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

/***/ "./components/Common/Footer.js":
/*!*************************************!*\
  !*** ./components/Common/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
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

/***/ "./components/Common/GoTop.js":
/*!************************************!*\
  !*** ./components/Common/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var GoTop =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GoTop, _React$Component);

  function GoTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoTop).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onScrollStep", function () {
      if (window.pageYOffset === 0) {
        clearInterval(_this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - _this.props.scrollStepInPx);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToTop", function () {
      var intervalId = setInterval(_this.onScrollStep, _this.props.delayInMs);

      _this.setState({
        intervalId: intervalId
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderGoTopIcon", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoTop, [{
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

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/Common/Screenshots.js":
/*!******************************************!*\
  !*** ./components/Common/Screenshots.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Screenshots; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-owl-carousel3 */ "react-owl-carousel3");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Modal/Modal */ "./components/Modal/Modal.js");












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

var Screenshots =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Screenshots, _React$Component);

  function Screenshots() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Screenshots);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Screenshots)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      modalOpen: false,
      modalImage: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeModal", function () {
      _this.setState({
        modalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleImage", function (image) {
      _this.setState({
        modalImage: image
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Screenshots, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modalOpen = this.state.modalOpen;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        id: "screenshots",
        className: "app-screenshots-section"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.3s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "App Screenshots"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: "0.5s",
        animation: "fadeInUp"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_10___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "screenshot-carousel owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__(/*! ../../images/screenshot/1.png */ "./images/screenshot/1.png"));
        },
        href: "#",
        className: "screenshot-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot/1.png */ "./images/screenshot/1.png"),
        alt: "Screenshot Image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__(/*! ../../images/screenshot/2.png */ "./images/screenshot/2.png"));
        },
        href: "#",
        className: "screenshot-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot/2.png */ "./images/screenshot/2.png"),
        alt: "Screenshot Image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__(/*! ../../images/screenshot/3.png */ "./images/screenshot/3.png"));
        },
        href: "#",
        className: "screenshot-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot/3.png */ "./images/screenshot/3.png"),
        alt: "Screenshot Image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__(/*! ../../images/screenshot/4.png */ "./images/screenshot/4.png"));
        },
        href: "#",
        className: "screenshot-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot/4.png */ "./images/screenshot/4.png"),
        alt: "Screenshot Image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.openModal();

          _this2.handleImage(__webpack_require__(/*! ../../images/screenshot/5.png */ "./images/screenshot/5.png"));
        },
        href: "#",
        className: "screenshot-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot/5.png */ "./images/screenshot/5.png"),
        alt: "Screenshot Image"
      })))))))), modalOpen ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Modal_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        closeModal: this.closeModal,
        image: this.state.modalImage
      }) : '');
    }
  }]);

  return Screenshots;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./components/HomeOne/About.js":
/*!*************************************!*\
  !*** ./components/HomeOne/About.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
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
        src: __webpack_require__(/*! ../../images/app-about.jpg */ "./images/app-about.jpg"),
        alt: "App About Image"
      })))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/HomeOne/AppDownload.js":
/*!*******************************************!*\
  !*** ./components/HomeOne/AppDownload.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppDownload; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var AppDownload =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppDownload, _React$Component);

  function AppDownload() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppDownload);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppDownload).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppDownload, [{
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

/***/ "./components/HomeOne/Blog.js":
/*!************************************!*\
  !*** ./components/HomeOne/Blog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var Blog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Blog, _React$Component);

  function Blog() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Blog);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Blog).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Blog, [{
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
        src: __webpack_require__(/*! ../../images/blog/1.jpg */ "./images/blog/1.jpg"),
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
        src: __webpack_require__(/*! ../../images/blog/2.jpg */ "./images/blog/2.jpg"),
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
        src: __webpack_require__(/*! ../../images/blog/3.jpg */ "./images/blog/3.jpg"),
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

/***/ "./components/HomeOne/Counter.js":
/*!***************************************!*\
  !*** ./components/HomeOne/Counter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Counter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Counter, _React$Component);

  function Counter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Counter);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Counter).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Counter, [{
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

/***/ "./components/HomeOne/Features.js":
/*!****************************************!*\
  !*** ./components/HomeOne/Features.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Features; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Features =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Features, _React$Component);

  function Features() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Features);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Features).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Features, [{
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

/***/ "./components/HomeOne/HowItWorks.js":
/*!******************************************!*\
  !*** ./components/HomeOne/HowItWorks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_11__);













var HowItWorks =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HowItWorks, _React$Component);

  function HowItWorks() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HowItWorks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HowItWorks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HowItWorks, [{
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
        src: __webpack_require__(/*! ../../images/video-demo.jpg */ "./images/video-demo.jpg"),
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

/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);

/***/ }),

/***/ "./components/HomeOne/Pricing.js":
/*!***************************************!*\
  !*** ./components/HomeOne/Pricing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pricing; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_6__);








var Pricing =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pricing, _React$Component);

  function Pricing() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pricing);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pricing).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pricing, [{
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

/***/ "./components/HomeOne/Slider.js":
/*!**************************************!*\
  !*** ./components/HomeOne/Slider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel3 */ "react-owl-carousel3");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_8__);









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

var Slider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slider, _React$Component);

  function Slider() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "home",
        className: "hompage-slides-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "homepage-slides owl-carousel owl-theme"
      }, options), this.props.slideData.map(function (data, idx) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "single-slider-item gradient-bg",
          key: idx
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "slide-item-table"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "slide-item-tablecell"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "container"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "col-md-12 col-lg-7"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_8___default.a, null, function (_ref) {
          var isVisible = _ref.isVisible;
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "slider-text"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
            className: isVisible ? "animated fadeInUp slow opacityOne" : ''
          }, data.heading), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
            className: isVisible ? "animated fadeInUp slow opacityOne" : ''
          }, data.text), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "slide-button"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "#",
            className: "\n                                                                        slide-btn-white mr-10 ".concat(isVisible ? "animated fadeInDown slow opacityOne" : "", "\n                                                                    ")
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
            className: "icofont-cloud-download"
          }), "Request a demo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "#",
            className: "\n                                                                        slide-btn-bordered ".concat(isVisible ? "animated fadeInDown slow opacityOne" : "", "\n                                                                    ")
          }, "Find Out More")));
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "col-md-12 col-lg-5"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "welcome-phone"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: __webpack_require__(/*! ../../images/app-mockup-1.png */ "./images/app-mockup-1.png"),
          alt: "App Mockup image"
        }))))))));
      })));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Slider.defaultProps = {
  slideData: [{
    heading: "Manage your loan, deposits and investments with BankLingo",
    text: "BankLingo by NIDCOM Solutions is a light-weight, cloud based core banking solution that empowers financial institutions to rapidly create financial products (Lending, Savings, Transactional banking, Deposits, etc.)"
  }, {
    heading: "Awesome Jibo Mobile App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/HomeOne/Team.js":
/*!************************************!*\
  !*** ./components/HomeOne/Team.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_7__);









var Team =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Team, _React$Component);

  function Team() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Team);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Team).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Team, [{
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
        src: __webpack_require__(/*! ../../images/team/1.jpg */ "./images/team/1.jpg"),
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
        src: __webpack_require__(/*! ../../images/team/2.jpg */ "./images/team/2.jpg"),
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
        src: __webpack_require__(/*! ../../images/team/3.jpg */ "./images/team/3.jpg"),
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

/***/ "./components/HomeOne/Testimonial.js":
/*!*******************************************!*\
  !*** ./components/HomeOne/Testimonial.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonial; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel3 */ "react-owl-carousel3");
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Testimonial, _React$Component);

  function Testimonial() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Testimonial);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Testimonial).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Testimonial, [{
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
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
        src: __webpack_require__(/*! ../../images/client/1.png */ "./images/client/1.png"),
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
        src: __webpack_require__(/*! ../../images/client/2.png */ "./images/client/2.png"),
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
        src: __webpack_require__(/*! ../../images/client/3.png */ "./images/client/3.png"),
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
        src: __webpack_require__(/*! ../../images/client/4.png */ "./images/client/4.png"),
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

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _React$Component);

  function Modal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "render",
    value: function render() {
      var closeModal = this.props.closeModal;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "modal right screenshots-modal fade",
        id: "screenshot_details",
        style: {
          paddingRight: '16px',
          display: 'block'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: closeModal,
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "modal-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "screenshot-details-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.image,
        alt: "Screenshot Image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7 col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "screenshot-details-text"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Screenshots Title"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "High Resolution"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Unique Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Full Responsive"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont icofont-check"
      }), "Clean Codes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/Navigation/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var Navigation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _React$Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderMenus", function () {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
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

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Loader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Loader, _React$Component);

  function Loader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Loader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Loader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Loader, [{
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

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./images/app-about.jpg":
/*!******************************!*\
  !*** ./images/app-about.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-about-9be7cac7611d58482327d11e9eefaed2.jpg";

/***/ }),

/***/ "./images/app-mockup-1.png":
/*!*********************************!*\
  !*** ./images/app-mockup-1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-mockup-1-89b809eaab97026bde45949158de8a39.png";

/***/ }),

/***/ "./images/blog/1.jpg":
/*!***************************!*\
  !*** ./images/blog/1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-6dbbefb884fd6d8eb841f47a5eaa394e.jpg";

/***/ }),

/***/ "./images/blog/2.jpg":
/*!***************************!*\
  !*** ./images/blog/2.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-421be8962940c1b15a9917b9b8f3e3b1.jpg";

/***/ }),

/***/ "./images/blog/3.jpg":
/*!***************************!*\
  !*** ./images/blog/3.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-dfbb1bc4edae034de2f70a104d373429.jpg";

/***/ }),

/***/ "./images/client/1.png":
/*!*****************************!*\
  !*** ./images/client/1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-930e214ce600ade7b62fc010ff52a4b9.png";

/***/ }),

/***/ "./images/client/2.png":
/*!*****************************!*\
  !*** ./images/client/2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-d41b4cef93e6432b3f4dc2949aca1fae.png";

/***/ }),

/***/ "./images/client/3.png":
/*!*****************************!*\
  !*** ./images/client/3.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABaAFoDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAABgIFBwgBAwQACf/EAD8QAAEDAwIEAwQHBgQHAAAAAAECAwQABREGIQcSMUETUYFhcZGhFCIyM0KxwQgVFiPR4TQ1UvBDRWJydMLx/8QAGgEAAgMBAQAAAAAAAAAAAAAABAUCAwYBAP/EACcRAAICAQMEAQQDAAAAAAAAAAECABEDBBIhEyIxMlEFM0HwcYGx/9oADAMBAAIRAxEAPwC0xG53rGD51sxua9y12eiBnzrkvFzgWi3u3C6TG4kVrHO64cAZ6etduMVB37S9/Wp626fjO+Ght0PSV9go/ZT6Ak+tRd9guTxoXaoRXfjbpCJOTHgpnXVsoJMiMgeGD5ZUQSfShx/9oe3tPpQvTcgI2zmUOb0HLUYahZcajcxjFsYxsPq+8EdqjO9y0qfWAvkUD22z/eh1zs/iGNp0Qcy7uguI+mNZHwLbLWxNA5jEkDlcI7lJ6KHuPwozFfOuw3uVAnNSYklbbzawttxs4IIOcg+dXQ4IcQka2simpa0JusQAPgH71PZwe/uPP31er3wYNkxULHiSJg0oA4rOK8DVkpik7UvPvpIG9Zx7K9PTQOtKxtSQN62JrgnTOaa+3FiPSnThtpBWr3AZqtOpmTqm8sRFKJmTVl5fmkKO3yx/sVNHGe7C2aLkIC+VcpSWE+p3+VRfwcQzM4j6hmS1NpagoabSpZACcoHTNLddkIIURn9Pxii5j7cNBRm7SiK+vnKWwkKG3Soa4hcPIrEdyRHeKVI3wRVk9Q3O3SVBqFPjPKSCSlt1Kj8jUVa+ulrYaU1KdAz1AGT8KXq7q/bGe1XTuEq0uO9BuJZVnIO2Pkalrgdf37Dqq33RCyGVLAdSP9BOFg+7+nlQtrGJBluJnQUkIaICwVAq5SeuB2oj0dbPBYwfrZWCkj/rBHzUkH1pr1Cyg/mLDi2sR+JeBtaHWkuNqCkLAKVDoQehrPQYoO4M3g3nQMFa1Zejgx3c9cp6fLFGeNxRimxcWsu0kRaBvS8UpCaVipSM48b17vWe5rJG1RnTIb/aRU65BtjaMkJf58UDcMIF8uK9ZtaflxY8tclpKnJCCsJHhDt61LPGi2GVZ48lKchpeD7MjrUYcAL/ABoWv9b2t7lBIZlNjPYAoV/6n1pRrAeof34jvQsOkK/fM1aA4f6mg68Ei53MSmObmz4SOmN9wBjO9N/GmyJd1A7DjczcVUgB0pO4BHTPlUjae1Su6avlotcZyUzFQrn5MDnX2TzHYUH60nCZcJv7zhuxX1kpDWSDnG2/Qneh8TFnvwYa2MAVAS38O4MF1176QjlkKOUJ2AJPz6CnVdv/AHJfWIII5XoyXm0ntyupBHtGM0li4Kt0yHDuUqO+pxaUJaQ4kujPQqSDnHtrs1u407rqxx2dlpt8hxQBzsVthPzzReMvzvMEzKgA2CSxwISuBcr9ajkIQ8HEg9MHOCPQVLaEdKBNBQUMapuspIxzttI9eXP60fjAAphg9Inz+8WkYFZrCc0vFXSmN6etL60jONycCtLs6IwCp2Q2ge01AkDzJUT4nHqeEibaH46xkKQap8+qfpbjAi8xkp5VZZfZUceM2oBK0A+ewIz3Hvq1OqtaWSBDWhExt55YKUpT2OO9V94rwG7khu5wynmcSFBWM4JAOD8aU63MnUABv5/uNtDjfYbH8Qz07pm0yrku72qbcGozjglIYjvqQ0vsttxIODv57ih3X0uCLqlq32HMj7KnnyspRudwknHfz7U08JtTz4WoEtBRSiS3/NZXukuJ2Kh7SPj6UY8Q9Qw48crdtqkbZLiU5+GKCRirVGwe15H+wVi6Ttabki7BwPSzI+lTJikBHMQnASAOiUjtQppS6r1Hr+9X7630ZhCIURJ/0Befngn1pu1PxCk3A/uy3tqh21pJW6T94+oDYHHROcbf/KXw757NYmfHTyrku+K5kb4UQlP60xYit0WmyalnNKXxDeqHWFLACw0rfyKR/WpPByQKrDJuTsDW7CPEx4rSOU52xygD5ip/0FfmNQWNqShQ8Zoll9Gd0rT50Tpcl9pi7U467hCZutoHsrWitwoswSaW4jTbJUtPMvlySe3sqPuI7sPlDCI7fjqSVBWMcgHf31IE2QA04lO55FHHpUfajtypTkwr/wCGwFH2EjagNZ9sgCG6P3smV41ZJkNznVtOOLZTzAY3KiQRgVnTstyVbxBmrylxGEOY6K/Dv5bEU+64ghFwj2qM2Eha8rUR+HIGB79qYLmyGluxY4JVECUKx06gk+hJ+NIE5WaG+RNlggC13vxlgbZ5fIZ/v+dPur303C0rQkjJT0oy0Lp21akix25reOdkOZSrChjO4PpXNqjR1tsiwuNOkSmAcFDgSVY94x+VE4sGTIu8CUPqMaNtJqVmulu+j3INrGAT9b3ZqSNUQAPoqGEFKCxHQgAfP408/wABwL/fVyJMxcZjm51JSkZCB2yf6U76zt7Sp0cR1fcx2y2nzCTkH8qtyMyqLlfazcQF1/eUMTdOTudSXRHQHvcdvkR86ONJ6vd0vdY18tvjyWJoxcInISnb8aSO/sqLeLkZKXm2xzK8FHOgDrylex+dEOgZYTHt7CXsqwVjyKNs7+yiF8KRBWHsDLd6W1NaNRwkyLbKSpWMrZVstHvH60+ZqCbBGQ3dYstp1cc86R4jRxjzzUwJkTuUYfjKGNiWzv8AA00QtXcIryKoPbOS2yzLkPAnfwyP0pFzaAFxWU5BcQjB7/7xXLpf/MV/9gpzuX+Dlf8AkiqMovGZanDiQlxFDMfUDDwRzKLzbTIB3W6o4+ABKj7qApDBxOkgKU7LeVgAZ25j+v5UbcRd+I9nSd0pYfWkHoFdMj2+2mV4BNkWtOywgDmHXdZrNrNDdCF/CBxxF3cWoq5ERfATvtjG+PWnjU7Db7SwpHMR0zTbwvAHiED8P6U7Xb7XrWh0KAJtiTVOS9wahWwtnwmxhT5ws9+XuK5tRx0/xjb30fcKaLDgHQYR/f5UURAOdZ7hGxoaum/ik9QUkHy2VQv1BAFBHzCNGxLG5FuuLZIu2oZXgtksx2EMqUBnIzk49oFe0nFES6R2HdknmUg42G3KtI9cH1FSRbW2xaJCg2gKMpWTjc7ig6elKbnD5UgYlkDA7YoNchIAMMKCzJJtDy2IMUuYUecjPs7flRCi7nkT/OUNunNQx/ypg9wR+Qp2ZSnwUfVH2R2rU4+BM+45n//Z"

/***/ }),

/***/ "./images/client/4.png":
/*!*****************************!*\
  !*** ./images/client/4.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABaAFoDASIAAhEBAxEB/8QAHQAAAQUBAQEBAAAAAAAAAAAABwMEBQYIAgEACf/EADkQAAEDAwIDBQYFBAEFAAAAAAECAwQABREGEiExUQcTIkFhCBQycYGRI0KhsfAVJFLBM2Ki0eHx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAwQFAQACBv/EACYRAAICAQQCAQQDAAAAAAAAAAECABEDBBIxQRMhoRQVIlEjkeH/2gAMAwEAAhEDEQA/ADiAckZPOlUJPU0olvxHh50qG66eokAQMkn70Pde9qNr05ckWphxqTOUQFIz4WyeW48s1MdpWoV2azyu5WlC0tZyfPOcY+xrKmjHtTaz1GtqCpLrK3CVtuDcVk5zw58c86C+SrrqMYsO6ie4Vrz23aoYmmI1bLdCWMhCnNzqHT5DORtyKkNJe0HDkRVjUdllMPpAO+AguN7TzJycioyb2GXq5LCp04Np4eHGduBiobUXZUNNx/fY811TqAdwCiAvqCORpX67GO479tduBDxofX+ltYhaLJct76BlUd5Bbdx1CTzHqKtXHrX5/QjNt96IQ8piU2orZcaWUrCh5pPX5VqDsD7VHNSs/wBA1CtP9XjjwvHAMhH+RHLI8/8A7Ti5Lk58JWGAJOeZr5QPU0sBkVzt40SBiBSrqa92nrSyk4rjb/M10ydpRx+tevYbaUs+QpcI4mozVsxNu0/KmFaUbEjClckkkAE/LnWE0LhACSAIDvaRvTa2zAaUkFlvZjPEkkZNOvYasEFbN8uKtrikqbQ0o805B3fqKFeulPy0hLz7jj72VuuLGVKySePqTx+1X72QtRKsc7VsQux2o7ERh5Kns7UqClJ5DiScipzOGUk8XLHiK0q818zTN3jBhxaQMAcqE3aalHuy0uuIQMn4lAD9altC65uGrtSTbW/c7ZOU2FcYqcbPPjxOeYoJ3yNM1dra8SrmlyQYC1MxIve7WyU5xn6+hpJ8au1cCP4mfGnv2YN+0GCluSmRHWFLQrcFIVnGD1FMbJdnoVxhX6CrupsZzLoBwCRz+iv91bZ+l9Qht129WxMFo5DfiH6DAJH0odTUKt90WytO1KspPz5f+KewMK2A3UQ1KG95FAze+iL9E1PpuFeIawW5DYJHmlWOIPqDU2lNZw9lrVTkVly0SHD7sXAEhX5Sc8jWkxkjiKeRtwkjKmxqiCxk193dKkYrzBr3Bxfbxqjds8pLGnGI63UttvOkrJPMJSTj+dKvY50LPaDlWxVmhxXJDapyJKXG2QcqIxg5A8iKFnNYzGdKLyrM6yLoy+7IluIK171JwQcAFIIP86VdPZHg2u96+1Dap0ZuVFet6FlDgylYS4OY+ZFUC9goQpaQhCXCrAI4rOMeXlw/T1pTsC1U1pPtMjSX5Co8W4NKgyXFYwyFkbFH0Ckpz86RKjxmpWZyHAuv9mwLK5pOzaslwITLLEhpguOuJOENJyABgdc1nSZrWJprtIlzIK0S2XpBKmAk7sKPxZ8utGXSFg1TYbrPlQXLdKTOmgzJL6Ct1MfB292MhJweYPPJoYdsemYhlvSYdxKpaiUjuozbQHHiSEZP3NIodwtpW8YF+M3x8fA/uONS3qHqWRHUl3e25kKSeaeHnQV7VLUqDeGhgAuo74ZUAccv9VfNJx2LNCMVRW844pKlOrOVKOTk/twqm9uyJj+tLetxhSEqihLSSOWD/wC6Y0oAehJ+uylk9yS7EHyxqa2xlv8AdMzX2kvZOBtDoI/attN57sZrG/ZXp9F2jW1pjDty98CEx0ZylvBKnFkDwJHU9fStcWaQsH3B8rUUI3MuLHFaM4IV/wBaeR68D5nFLCfZkXUjiSGMmu8V6kCvcUxEzEnw8WnO4IDu07M8t2Dj9cUJdQM2hGkmJ64zT90mR/7hxadziF52qaSP894IPnwJPAYouFYAKsE4ycDmaEvaq3Bt1ncuibiiNdJeSUEjDilYyEp5pIwASOnHnQc1Vca09lto7mdtRK7nUAgSXAt5Ly21JBB4A4PLhwPDA6VXtSWtMJwS2AlxPdDeAeeFFJ/apeVFhR5MeWhlTTi1YdO4qBO7irB4jz4V3LSDbW7bMG11IfShY4kAFKk8fXJqfv2MKlcoXU3zCV7PHbqzaEs6Y1u6o28gNw7koZ7seSHPMgeSvv1omdo+rNKGG5Hs62JMl0eDYkYIPmVVixlQU8204BhJ3AY4EedETReoWoyVwJuyZAV/xIfHjZ67Vc8eldqNOALUTxpNRTU0K9hRa4rqbhNLbjiTuwPhSafRIOi9U6stMa+ITInSe+ENG/AGMKO4evl8qHEltTuWojjiWVck58qQ0tbnR2iWIIU53ipBIIUc5CScA/Sh4PTC4XUYyykwwybHJ7KdYHUNshLd09Owia00ncWOpA9DxHUZHMDJdZejTFQZcRxDrbo7xtaOIUgp5j05UFBdJtzmrgqYMmClsJEeS6tYJySSfEPl9qvekru7arWxBhWGM3GbThCWnFDAJzjxZPMnzqqtA11IjhiLPMISRXWKiIV9YWB72y5EJ5FZ3J+4qQEyKQCJLODy8YosAQZWNeahGn7E/NQUF0eFAUMgqPL6VkHWGqrtd78/PlSlOvu5BVjiEj8qRyHyH68aMHbFeLtcbpLtiX2vdoACnVNowlC1chk8Sef2rPl4YU17uWC13gK9xIzlQOcZPI4NJO3kejxK2HH4se7syXjPJBZStHeIKyPErgTt/wBZzS+oWnJrSLi2o5bbSSRxyMYP32mmmn32nWkl5YeIBHiHxKI4kDyp5YHAq1XCCogD3VaNufNJBBH2NK5VK/kOo3jcN6Pcoq5JbW9GcaSva6VIWfiT6A9PSlRKQNqkbg6FAAY4Jz5mmcpxZmvtHjvUM56/wVwFn31xZ5cAn6EDP6U/ViTN1GF7SVybfjtoUr8Tb9eVWzRMGS/2m6VVEQkrNxbPi5bd2Ff9pNCPQ7yheWkqXhK0lINaH0PNjWl4TYZQbjHaKmnFI393nAJHAgHBOM1OK1mAEtBt2nZj+pN2aCmNql9rb8Lqk4I6Eir/ABIrLVyMNQAW6gPMjHxJ5ED5H9xVFssv3i/d6tRU+slx5WPDuJyc45caImopLbOnkXuM01IdhoPFJBU2lQAURj0wfoarLVT55gQ1GIXNMcB1hJSotp8WOtUh12MHVDvMYJ/NTXVF+cg2S2Kiu71SlqdkuA8zggD5ZNUgPPvAOl8+Pxc+tdc3bGna7OagNXqK25G7udJBRKK8JIC1qUBw8RAXt4dKEM5bTkUrZUSkpUFKT8JHMjjzOcVpvXUKG7rYtOxGFtt2eRsSpsEJ4DkPKs5XBloRIyQ0gAuo4bR/kaUI9ygjWkrkaYu3pdjurbywSAQOJz/P0qc0Q8VSpDhwQYq1kH0QR+6hVfntNG9ry2ji6c+EetWzRDTffqHdo4wE/l6uVmoH8RmadrygfqDp1W+6v7gclZPDqDmmSllt5R4+I5BqyzGWRdn8NI/5j+Uf5GmU9lnej8JHn+UUyvESfky+9nGn0z3YNwT+JGcB3pSrxJWMeEkccHn9K0hbI8uJZ/6e7do8CC4jC40aOkLd9CcZPzJrPvYglKLh4EhOU8cDFaJ0s2hanHFoSpe74iMmsVADcI2ZioHUbRIj8ZShFQ4GyeGRUjGsyZJ/uEY3kBWDjI8was7CEbPgTy6V46lIAwAOKfL1ooUQBcmCW5xGy09aWl5U2wrYCeSknP8AqqYhTuwYWQMcKucVKTql4lIJ7xzmPU1BIbb2D8NPLpXgwon/2Q=="

/***/ }),

/***/ "./images/faq-img.png":
/*!****************************!*\
  !*** ./images/faq-img.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-img-7cbdc4b3f18f4b5a62155fcee93e44e8.png";

/***/ }),

/***/ "./images/screenshot/1.png":
/*!*********************************!*\
  !*** ./images/screenshot/1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-2d296922764b18001a99ab6f5c158f57.png";

/***/ }),

/***/ "./images/screenshot/2.png":
/*!*********************************!*\
  !*** ./images/screenshot/2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-af0b3152393cddc96df611f513847e55.png";

/***/ }),

/***/ "./images/screenshot/3.png":
/*!*********************************!*\
  !*** ./images/screenshot/3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-e5957a3325ef15eac645bc7a69dbde23.png";

/***/ }),

/***/ "./images/screenshot/4.png":
/*!*********************************!*\
  !*** ./images/screenshot/4.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-24817c0d40e876ac4fed4e11cb250c14.png";

/***/ }),

/***/ "./images/screenshot/5.png":
/*!*********************************!*\
  !*** ./images/screenshot/5.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-825cf02c5d6cc34c53e101aee92e74bb.png";

/***/ }),

/***/ "./images/team/1.jpg":
/*!***************************!*\
  !*** ./images/team/1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-166efd1a0990d6ac61635af1841dbf1d.jpg";

/***/ }),

/***/ "./images/team/2.jpg":
/*!***************************!*\
  !*** ./images/team/2.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-03a2a9b81dbb9b351e3fff00664740e5.jpg";

/***/ }),

/***/ "./images/team/3.jpg":
/*!***************************!*\
  !*** ./images/team/3.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-d09bb8a1569d5fea7046e10479afa7f6.jpg";

/***/ }),

/***/ "./images/video-demo.jpg":
/*!*******************************!*\
  !*** ./images/video-demo.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video-demo-358b3c42a09e512d13dbc3dd398258fe.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-preloading-screen */ "react-preloading-screen");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./components/Navigation/Navigation.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");
/* harmony import */ var _components_HomeOne_Slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HomeOne/Slider */ "./components/HomeOne/Slider.js");
/* harmony import */ var _components_HomeOne_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/HomeOne/About */ "./components/HomeOne/About.js");
/* harmony import */ var _components_HomeOne_HowItWorks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/HomeOne/HowItWorks */ "./components/HomeOne/HowItWorks.js");
/* harmony import */ var _components_HomeOne_Features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/HomeOne/Features */ "./components/HomeOne/Features.js");
/* harmony import */ var _components_HomeOne_Counter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/HomeOne/Counter */ "./components/HomeOne/Counter.js");
/* harmony import */ var _components_Common_Screenshots__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Common/Screenshots */ "./components/Common/Screenshots.js");
/* harmony import */ var _components_HomeOne_Testimonial__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/HomeOne/Testimonial */ "./components/HomeOne/Testimonial.js");
/* harmony import */ var _components_HomeOne_Pricing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/HomeOne/Pricing */ "./components/HomeOne/Pricing.js");
/* harmony import */ var _components_Common_Faq__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Common/Faq */ "./components/Common/Faq.js");
/* harmony import */ var _components_HomeOne_Team__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/HomeOne/Team */ "./components/HomeOne/Team.js");
/* harmony import */ var _components_HomeOne_AppDownload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/HomeOne/AppDownload */ "./components/HomeOne/AppDownload.js");
/* harmony import */ var _components_HomeOne_Blog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/HomeOne/Blog */ "./components/HomeOne/Blog.js");
/* harmony import */ var _components_Common_Contact__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Common/Contact */ "./components/Common/Contact.js");
/* harmony import */ var _components_Common_Footer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Common/Footer */ "./components/Common/Footer.js");
/* harmony import */ var _components_Common_GoTop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Common/GoTop */ "./components/Common/GoTop.js");


























var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_7___default.a, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_6__["Preloader"], {
        fadeDuration: 1000
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Slider__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_About__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_HowItWorks__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Features__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Counter__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_Screenshots__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Testimonial__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Pricing__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_Faq__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Team__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_AppDownload__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_HomeOne_Blog__WEBPACK_IMPORTED_MODULE_21__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_Contact__WEBPACK_IMPORTED_MODULE_22__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Common_GoTop__WEBPACK_IMPORTED_MODULE_24__["default"], {
        scrollStepInPx: "50",
        delayInMs: "16.66"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_preloading_screen__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MY PC\Documents\MyProjects\React Projects\BankLingoLandingWeb\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map