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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-component");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-on-screen");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Header.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var linkStyle = {
  marginRight: 15
};

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("header", {
        className: "site-header"
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, external_react_default.a.createElement("h1", {
        className: "site-intro"
      }, this.props.intro), external_react_default.a.createElement("p", {
        className: "site-tagline"
      }, this.props.tagline), this.props.children));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/About.js


function About_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { About_typeof = function _typeof(obj) { return typeof obj; }; } else { About_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return About_typeof(obj); }

function About_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function About_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function About_createClass(Constructor, protoProps, staticProps) { if (protoProps) About_defineProperties(Constructor.prototype, protoProps); if (staticProps) About_defineProperties(Constructor, staticProps); return Constructor; }

function About_possibleConstructorReturn(self, call) { if (call && (About_typeof(call) === "object" || typeof call === "function")) { return call; } return About_assertThisInitialized(self); }

function About_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function About_getPrototypeOf(o) { About_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return About_getPrototypeOf(o); }

function About_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) About_setPrototypeOf(subClass, superClass); }

function About_setPrototypeOf(o, p) { About_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return About_setPrototypeOf(o, p); }

var About_About =
/*#__PURE__*/
function (_React$Component) {
  About_inherits(About, _React$Component);

  function About(props) {
    var _this;

    About_classCallCheck(this, About);

    _this = About_possibleConstructorReturn(this, About_getPrototypeOf(About).call(this, props));
    _this.ref = external_react_default.a.createRef();
    return _this;
  }

  About_createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      console.dir(this.ref.current);
      this.props.offsets.push({
        id: id,
        offset: this.ref.current.offsetTop
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: this.props.id,
        className: "about",
        ref: this.ref
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, external_react_default.a.createElement("h3", {
        className: "about__header"
      }, this.props.title), external_react_default.a.createElement("p", {
        className: "about__desc"
      }, this.props.description)));
    }
  }]);

  return About;
}(external_react_default.a.Component);

/* harmony default export */ var components_About = (About_About);
// CONCATENATED MODULE: ./components/Skills.js


function Skills_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Skills_typeof = function _typeof(obj) { return typeof obj; }; } else { Skills_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Skills_typeof(obj); }

function Skills_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Skills_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Skills_createClass(Constructor, protoProps, staticProps) { if (protoProps) Skills_defineProperties(Constructor.prototype, protoProps); if (staticProps) Skills_defineProperties(Constructor, staticProps); return Constructor; }

function Skills_possibleConstructorReturn(self, call) { if (call && (Skills_typeof(call) === "object" || typeof call === "function")) { return call; } return Skills_assertThisInitialized(self); }

function Skills_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Skills_getPrototypeOf(o) { Skills_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Skills_getPrototypeOf(o); }

function Skills_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Skills_setPrototypeOf(subClass, superClass); }

function Skills_setPrototypeOf(o, p) { Skills_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Skills_setPrototypeOf(o, p); }

var Skills_Skills =
/*#__PURE__*/
function (_React$Component) {
  Skills_inherits(Skills, _React$Component);

  function Skills(props) {
    var _this;

    Skills_classCallCheck(this, Skills);

    _this = Skills_possibleConstructorReturn(this, Skills_getPrototypeOf(Skills).call(this, props));
    _this.ref = external_react_default.a.createRef();
    return _this;
  }

  Skills_createClass(Skills, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      this.props.offsets.push({
        id: id,
        offset: this.ref.current.offsetTop
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: this.props.id,
        className: "skills",
        ref: this.ref
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, external_react_default.a.createElement("h3", {
        className: "skills__header"
      }, this.props.title), external_react_default.a.createElement("ul", {
        className: "skills__grid"
      }, this.props.skills.map(function (skill, i) {
        return external_react_default.a.createElement("li", {
          key: i,
          className: "skill"
        }, external_react_default.a.createElement("div", {
          className: "skill__image"
        }, external_react_default.a.createElement("img", {
          src: skill.image,
          alt: skill.name
        })), external_react_default.a.createElement("p", {
          className: "skill__name"
        }, skill.name));
      }))));
    }
  }]);

  return Skills;
}(external_react_default.a.Component);

/* harmony default export */ var components_Skills = (Skills_Skills);
// CONCATENATED MODULE: ./components/Experience.js


function Experience_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Experience_typeof = function _typeof(obj) { return typeof obj; }; } else { Experience_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Experience_typeof(obj); }

function Experience_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Experience_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Experience_createClass(Constructor, protoProps, staticProps) { if (protoProps) Experience_defineProperties(Constructor.prototype, protoProps); if (staticProps) Experience_defineProperties(Constructor, staticProps); return Constructor; }

function Experience_possibleConstructorReturn(self, call) { if (call && (Experience_typeof(call) === "object" || typeof call === "function")) { return call; } return Experience_assertThisInitialized(self); }

function Experience_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Experience_getPrototypeOf(o) { Experience_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Experience_getPrototypeOf(o); }

function Experience_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Experience_setPrototypeOf(subClass, superClass); }

function Experience_setPrototypeOf(o, p) { Experience_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Experience_setPrototypeOf(o, p); }

var Experience_Experience =
/*#__PURE__*/
function (_React$Component) {
  Experience_inherits(Experience, _React$Component);

  function Experience(props) {
    var _this;

    Experience_classCallCheck(this, Experience);

    _this = Experience_possibleConstructorReturn(this, Experience_getPrototypeOf(Experience).call(this, props));
    _this.ref = external_react_default.a.createRef();
    return _this;
  }

  Experience_createClass(Experience, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      this.props.offsets.push({
        id: id,
        offset: this.ref.current.offsetTop - this.ref.current.height
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: this.props.id,
        className: "experience",
        ref: this.ref
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, external_react_default.a.createElement("h3", {
        className: "exp__header"
      }, this.props.title), external_react_default.a.createElement("span", {
        className: "exp_duration"
      }, this.props.duration), external_react_default.a.createElement("div", {
        className: "role"
      }, external_react_default.a.createElement("h4", {
        className: "role__header"
      }, this.props.expTitle), external_react_default.a.createElement("p", {
        className: "role__desc"
      }, this.props.description)), external_react_default.a.createElement("a", {
        href: "../static/downloads/craig-macintyre-developer.pdf",
        className: "download"
      }, this.props.downloadLinkText)));
    }
  }]);

  return Experience;
}(external_react_default.a.Component);

/* harmony default export */ var components_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./components/Footer.js


function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }

var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Footer_classCallCheck(this, Footer);

    _this = Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).call(this, props));
    _this.state = {
      year: new Date().getFullYear()
    };
    return _this;
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "site-footer"
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, external_react_default.a.createElement("div", {
        className: "copyright copyright__footer"
      }, "\xA9 Craig MacIntyre ", this.state.year)));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__(1);
var external_react_pose_default = /*#__PURE__*/__webpack_require__.n(external_react_pose_);

// CONCATENATED MODULE: ./components/Nav.js


function Nav_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Nav_typeof = function _typeof(obj) { return typeof obj; }; } else { Nav_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Nav_typeof(obj); }

function Nav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Nav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Nav_createClass(Constructor, protoProps, staticProps) { if (protoProps) Nav_defineProperties(Constructor.prototype, protoProps); if (staticProps) Nav_defineProperties(Constructor, staticProps); return Constructor; }

function Nav_possibleConstructorReturn(self, call) { if (call && (Nav_typeof(call) === "object" || typeof call === "function")) { return call; } return Nav_assertThisInitialized(self); }

function Nav_getPrototypeOf(o) { Nav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Nav_getPrototypeOf(o); }

function Nav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Nav_setPrototypeOf(subClass, superClass); }

function Nav_setPrototypeOf(o, p) { Nav_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Nav_setPrototypeOf(o, p); }

function Nav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var NavPosed = external_react_pose_default.a.nav({
  active: {
    applyAtStart: {
      opacity: 0
    },
    opacity: 1
  },
  inactive: {
    applyAtStart: {
      opacity: 0
    },
    opacity: 1
  }
});

var Nav_Nav =
/*#__PURE__*/
function (_React$Component) {
  Nav_inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    Nav_classCallCheck(this, Nav);

    _this = Nav_possibleConstructorReturn(this, Nav_getPrototypeOf(Nav).call(this, props));
    _this.handleClick = _this.handleClick.bind(Nav_assertThisInitialized(Nav_assertThisInitialized(_this)));
    return _this;
  }

  Nav_createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollTo = __webpack_require__(2);
    }
  }, {
    key: "handleClick",
    value: function handleClick(link) {
      this.props.changeSection(link.href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "nav-container"
      }, external_react_default.a.createElement(NavPosed, {
        pose: this.props.isVisible ? 'inactive' : 'active'
      }, external_react_default.a.createElement("nav", {
        className: this.props.isVisible ? "main-nav" : "main-nav main-nav--fixed"
      }, external_react_default.a.createElement("div", {
        className: "wrap"
      }, this.props.links.map(function (link, i) {
        return external_react_default.a.createElement("a", {
          className: _this2.props.currentSection === link.name.toLowerCase() ? "main-nav__link active" : "main-nav__link",
          key: i,
          href: link.href,
          onClick: function onClick(event) {
            event.preventDefault();

            _this2.handleClick(link);
          }
        }, link.name);
      })))));
    }
  }]);

  return Nav;
}(external_react_default.a.Component);

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-on-screen"
var external_react_on_screen_ = __webpack_require__(4);
var external_react_on_screen_default = /*#__PURE__*/__webpack_require__.n(external_react_on_screen_);

// CONCATENATED MODULE: ./components/App.js


function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App(props) {
    var _this;

    App_classCallCheck(this, App);

    _this = App_possibleConstructorReturn(this, App_getPrototypeOf(App).call(this, props));
    _this.state = {
      currentSection: 'top',
      offsets: [{
        id: "header",
        offset: 0
      }]
    };
    _this.changeSection = _this.changeSection.bind(App_assertThisInitialized(App_assertThisInitialized(_this)));
    _this.handleScroll = _this.handleScroll.bind(App_assertThisInitialized(App_assertThisInitialized(_this)));
    return _this;
  }

  App_createClass(App, [{
    key: "handleScroll",
    value: function handleScroll() {
      var _this2 = this;

      var pos = window.scrollY;
      var adjust = 300;
      var atBottom = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (atBottom) {
        this.setState({
          currentSection: this.state.offsets[this.state.offsets.length - 1].id
        });
        return;
      }

      this.state.offsets.forEach(function (section) {
        if (pos > section.offset - adjust && _this2.state.currentSection !== section.id) {
          _this2.setState({
            currentSection: section.id
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToComponent = __webpack_require__(2).bind(this);
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll');
    }
  }, {
    key: "changeSection",
    value: function changeSection(href) {
      var _this3 = this;

      href = href.substr(1);
      console.log(href);
      this.setState({
        currentSection: href
      }, function () {
        _this3.scrollToComponent(_this3[href + "Ref"], {
          offset: 0,
          align: 'middle',
          duration: 500,
          ease: 'inCirc'
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, this.props.meta.title), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway:300,400,600,700",
        rel: "stylesheet"
      })), external_react_default.a.createElement(components_Header, _extends({}, this.props.sectionHeader, {
        ref: function ref(section) {
          _this4.headerRef = section;
        }
      }), external_react_default.a.createElement(external_react_on_screen_default.a, null, external_react_default.a.createElement(components_Nav, _extends({}, this.props.navigation, this.state, {
        changeSection: this.changeSection
      })))), external_react_default.a.createElement(components_About, _extends({}, this.props.sectionAbout, this.state, {
        ref: function ref(section) {
          _this4.aboutRef = section;
        }
      })), external_react_default.a.createElement(components_Skills, _extends({}, this.props.sectionSkills, this.state, {
        ref: function ref(section) {
          _this4.skillsRef = section;
        }
      })), external_react_default.a.createElement(components_Experience, _extends({}, this.props.sectionExperience, this.state, {
        ref: function ref(section) {
          _this4.experienceRef = section;
        }
      })), external_react_default.a.createElement(components_Footer, null));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: ./scss/styles.scss
var styles = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/index.js


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }




var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
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

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(components_App, this.state);
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);