webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Skills.js":
/*!******************************!*\
  !*** ./components/Skills.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/craig/sites/portfolio-react/components/Skills.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Skills =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Skills, _React$Component);

  function Skills(props) {
    var _this;

    _classCallCheck(this, Skills);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Skills).call(this, props));
    _this.scroll = _this.scroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Skills, [{
    key: "scroll",
    value: function scroll() {
      var scrollToComponent = __webpack_require__(/*! react-scroll-to-component */ "./node_modules/react-scroll-to-component/index.js");

      console.log('scrolling', this.Skills);
      scrollToComponent(this.Skills, {
        offset: 0,
        align: 'middle',
        duration: 500,
        ease: 'inCirc'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        id: "skills",
        className: "skills",
        ref: function ref(section) {
          return _this2.Skills = section;
        },
        onClick: this.scroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "skills__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "skills__grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.skills.map(function (skill, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          className: "skill",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "skill__image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: skill.image,
          alt: skill.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "skill__name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, skill.name));
      }))));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.183e29a3bfe449fff8ff.hot-update.js.map