webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
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

/***/ })

})
//# sourceMappingURL=index.js.3d05e183d7d1eae4e50c.hot-update.js.map