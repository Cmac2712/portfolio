webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App.js */ "./components/App.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/craig/sites/portfolio-react/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      meta: {
        title: "Craig MacIntyre | Web Developer"
      },
      navigation: {
        links: [{
          name: 'About',
          href: '#about'
        }, {
          name: 'Skills',
          href: '#skills'
        }, {
          name: 'Experience',
          href: '#experience'
        }]
      },
      sectionHeader: {
        intro: 'Hi I\'m Craig &',
        tagline: 'I build websites.'
      },
      sectionSkills: {
        id: 'skills',
        title: 'Skills',
        skills: [{
          name: 'HTML5',
          image: './static/images/html5.png'
        }, {
          name: 'CSS3',
          image: './static/images/css3.png'
        }, {
          name: 'JavaScript',
          image: './static/images/javascript.png'
        }, {
          name: 'React',
          image: './static/images/react.png'
        }, {
          name: 'PHP',
          image: './static/images/php.png'
        }, {
          name: 'Magento',
          image: './static/images/magento.png'
        }]
      },
      sectionAbout: {
        id: 'about',
        title: 'About',
        description: 'I\'m a Magento Certified Front-End Developer. Along with JavaScript and am currently dabbling in React. I like to challange myself and am always eager to add to my skill-set with the aim of producing  high quality, efficiant code and clean UIs'
      },
      sectionExperience: {
        id: 'experience',
        title: 'Experience',
        expTitle: 'INDEZ Ltd – Front End Developer',
        duration: 'April \'14 – Present',
        description: 'Web Development Agency Based in Glasgow. Role included both back end and front end tasks: creation of bespoke Magento themes based off PSD/Sketch designs; fixing bugs/creating new features per client\'s request; creation of Magento modules to add features/fix bugs with Magento extensions',
        downloadLink: './static/files/craig-macintyre-developer.pdf',
        downloadLinkText: 'Download My Cv '
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.93b7f744ccffa1be5401.hot-update.js.map