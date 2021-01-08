webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
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
          }), "Download"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            href: "#",
            className: "\n                                                                        slide-btn-bordered ".concat(isVisible ? "animated fadeInDown slow opacityOne" : "", "\n                                                                    ")
          }, "Learn More")));
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

/***/ })

})
//# sourceMappingURL=index.js.6db9a39be45dad9e364c.hot-update.js.map