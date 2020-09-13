(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./helpers/constants.js");

var _RenderBg = _interopRequireDefault(require("./render-sections/RenderBg.js"));

var _RenderHero = _interopRequireDefault(require("./render-sections/RenderHero.js"));

var _RenderSkills = _interopRequireDefault(require("./render-sections/RenderSkills.js"));

var _RenderExp = _interopRequireDefault(require("./render-sections/RenderExp.js"));

var _RenderCodepens = _interopRequireDefault(require("./render-sections/RenderCodepens.js"));

var _RenderContact = _interopRequireDefault(require("./render-sections/RenderContact.js"));

var _RenderOldBrowserMsg = _interopRequireDefault(require("./render-sections/RenderOldBrowserMsg.js"));

var _rotatingBG = _interopRequireDefault(require("./helpers/rotatingBG.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MZsite = function MZsite() {
  var init = function init() {
    if (!self.fetch) {
      (0, _RenderOldBrowserMsg["default"])();
    } else {
      _renderSections();
    }
  };

  var _fetchData = function _fetchData(jsonFile) {
    return fetch(jsonFile).then(function (response) {
      return response.json();
    });
  };

  var _renderSections = function _renderSections() {
    _fetchData('./data.json').then(function (dataObj) {
      var hero = dataObj.hero,
          skills = dataObj.skills,
          exp = dataObj.exp,
          codepens = dataObj.codepens,
          contact = dataObj.contact;
      (0, _RenderBg["default"])();
      (0, _RenderHero["default"])(hero);
      (0, _RenderSkills["default"])(skills);
      (0, _RenderExp["default"])(exp);
      (0, _RenderCodepens["default"])(codepens);
      (0, _RenderContact["default"])(contact);

      _constants.BODY.classList.add('data-loaded');

      if (_isIE()) {
        _constants.BODY.classList.add('ie');

        return;
      }

      var bgSquare = document.querySelector('.bg-square');

      _handleBgRotation(bgSquare);
    });
  };

  var _handleBgRotation = function _handleBgRotation(elem) {
    var rotateBG = function rotateBG() {
      return (0, _rotatingBG["default"])(elem);
    };

    rotateBG();
    window.addEventListener('resize', rotateBG);
  };

  var _isIE = function _isIE() {
    var isIE = !!document.documentMode || !isIE && !!window.StyleMedia;
    return isIE;
  };

  return {
    init: init
  };
};

var _default = MZsite;
exports["default"] = _default;

},{"./helpers/constants.js":2,"./helpers/rotatingBG.js":3,"./render-sections/RenderBg.js":6,"./render-sections/RenderCodepens.js":7,"./render-sections/RenderContact.js":8,"./render-sections/RenderExp.js":9,"./render-sections/RenderHero.js":10,"./render-sections/RenderOldBrowserMsg.js":11,"./render-sections/RenderSkills.js":12}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAIN_WRAP = exports.BODY = void 0;
var BODY = document.querySelector('body');
exports.BODY = BODY;
var MAIN_WRAP = 'main';
exports.MAIN_WRAP = MAIN_WRAP;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var rotatingBG = function rotatingBG(elem) {
  var windowH = window.innerHeight;
  var windowW = window.innerWidth;
  var largerAxis = Math.max(windowH, windowW);
  var squareSpecs = {
    hypotenuse: function hypotenuse() {
      return Math.hypot(windowH, windowW);
    },
    dimensions: function dimensions() {
      return largerAxis + (hypotenuse() - largerAxis);
    },
    position: function position() {
      return {
        top: windowH / 2 - dimensions() / 2,
        left: windowW / 2 - dimensions() / 2
      };
    }
  };
  var hypotenuse = squareSpecs.hypotenuse,
      dimensions = squareSpecs.dimensions,
      position = squareSpecs.position;
  elem.style.cssText = "\n\t\twidth: ".concat(dimensions(), "px;\n\t\theight: ").concat(dimensions(), "px;\n\t\ttop: ").concat(position().top, "px;\n\t\tleft: ").concat(position().left, "px;\n\t");
  var foregroundClass = 'site-not-on-foreground';
  window.addEventListener('blur', function () {
    _constants.BODY.classList.add(foregroundClass);
  });
  window.addEventListener('focus', function () {
    _constants.BODY.classList.remove(foregroundClass);
  });
};

var _default = rotatingBG;
exports["default"] = _default;

},{"./constants":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toDOM = function toDOM(props) {
  var parent = props.parent,
      child = props.child;
  var dataAttr = 'data-current-elem';
  var parentElems = [];

  if (_typeof(parent) == 'object') {
    parentElems = Object.keys(parent).length ? _toConsumableArray(parent) : [parent];
  } else {
    parentElems = _toConsumableArray(document.querySelectorAll(parent));
  }

  parentElems.forEach(function (parentEl) {
    if (child) {
      child.forEach(function (childEl) {
        var newElem = {};

        if (childEl.elem) {
          newElem = document.createElement(childEl.elem);
        } else {
          newElem = document.createElement('div');
        }

        newElem.setAttribute(dataAttr, '');

        if (childEl["class"]) {
          newElem.setAttribute('class', childEl["class"]);
        }

        if (childEl.id) {
          newElem.id = childEl.id;
        }

        if (childEl.text) {
          newElem.innerHTML = childEl.text;
        }

        for (var attrKey in childEl.attrs) {
          newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
        }

        parentEl.appendChild(newElem);
        parentEl.removeAttribute(dataAttr);

        if (childEl['child'] && _typeof(childEl['child']) === 'object') {
          toDOM({
            parent: "[".concat(dataAttr, "]"),
            child: childEl['child']
          });
        } else {
          newElem.removeAttribute(dataAttr);
        }
      });
    }
  });
};

var _default = toDOM;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

var _MZsite = _interopRequireDefault(require("./MZsite.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _MZsite["default"])().init();

},{"./MZsite.js":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../helpers/constants.js");

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderBg = function RenderBg() {
  var heroData = {
    parent: _constants.MAIN_WRAP,
    child: [{
      "class": 'bg-wrap',
      child: [{
        "class": 'bg-square'
      }]
    }]
  };
  (0, _toDOM["default"])(heroData);
};

var _default = RenderBg;
exports["default"] = _default;

},{"../helpers/constants.js":2,"../helpers/toDOM":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

var _sectionWrap = _interopRequireDefault(require("../site-modules/section-wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderSkills = function RenderSkills(dataObj) {
  var title = dataObj.title,
      pens = dataObj.pens;
  var pensList = [];

  for (var key in pens) {
    pensList.push({
      elem: 'li',
      "class": 'pen',
      child: [{
        elem: 'a',
        attrs: {
          "class": 'pen-title',
          target: '_blank',
          href: "https://codepen.io/miguelzuleta/pen/".concat(key)
        }
      }, {
        elem: 'iframe',
        attrs: {
          src: "https://codepen.io/miguelzuleta/embed/preview/".concat(key, "/?theme-id=dark&default-tab=result&embed-version=2"),
          "class": "pen-frame pen-".concat(key),
          title: pens[key],
          scrolling: 'no',
          frameborder: 'no',
          allowtransparency: 'true',
          allowfullscreen: 'true'
        }
      }]
    });
  }

  var pensData = (0, _sectionWrap["default"])('codepens', title, pensList);
  (0, _toDOM["default"])(pensData);
};

var _default = RenderSkills;
exports["default"] = _default;

},{"../helpers/toDOM":4,"../site-modules/section-wrap":13}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

var _sectionWrap = _interopRequireDefault(require("../site-modules/section-wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderContact = function RenderContact(dataObj) {
  var title = dataObj.title,
      info = dataObj.info;
  var contactList = [];

  for (var key in info) {
    contactList.push({
      elem: 'li',
      child: [{
        elem: 'a',
        attrs: {
          "class": 'bar-list contact-list-item',
          target: '_blank',
          href: info[key]
        },
        text: key
      }]
    });
  }

  var contactData = (0, _sectionWrap["default"])('contact', title, contactList);
  (0, _toDOM["default"])(contactData);
};

var _default = RenderContact;
exports["default"] = _default;

},{"../helpers/toDOM":4,"../site-modules/section-wrap":13}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

var _sectionWrap = _interopRequireDefault(require("../site-modules/section-wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderExp = function RenderExp(dataObj) {
  var title = dataObj.title;
  var expList = [];

  for (var key in dataObj) {
    var _dataObj$key = dataObj[key],
        company = _dataObj$key.company,
        duration = _dataObj$key.duration,
        _title = _dataObj$key.title,
        description = _dataObj$key.description;
    var companyInfo = {
      elem: 'h4',
      "class": 'company'
    };

    if (company) {
      if (company.match(/\*\*/)) {
        var companyDetails = company.split('**');
        companyInfo['text'] = companyDetails[0];
        companyInfo['child'] = [{
          elem: 'em',
          text: companyDetails[1]
        }];
      } else {
        companyInfo['text'] = company;
      }
    }

    if (key !== 'title') {
      expList.push({
        elem: 'li',
        "class": "job ".concat(key),
        child: [{
          elem: 'small',
          "class": 'duration',
          text: "".concat(duration.from, " - ").concat(duration.to)
        }, companyInfo, {
          elem: 'h5',
          "class": 'title',
          text: _title
        }, {
          elem: 'p',
          "class": 'description',
          text: description
        }]
      });
    }
  }

  var expData = (0, _sectionWrap["default"])('exp', title, expList);
  (0, _toDOM["default"])(expData);
};

var _default = RenderExp;
exports["default"] = _default;

},{"../helpers/toDOM":4,"../site-modules/section-wrap":13}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../helpers/constants.js");

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderHero = function RenderHero(dataObj) {
  var headline = dataObj.headline,
      intro = dataObj.intro;
  var heroData = {
    parent: _constants.MAIN_WRAP,
    child: [{
      elem: 'header',
      "class": 'hero-msg-wrap',
      child: [{
        "class": 'hero-msg',
        child: [{
          elem: 'h1',
          text: headline
        }, {
          elem: 'p',
          text: intro
        }]
      }]
    }]
  };
  (0, _toDOM["default"])(heroData);
};

var _default = RenderHero;
exports["default"] = _default;

},{"../helpers/constants.js":2,"../helpers/toDOM":4}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../helpers/constants");

var RenderOldBrowserMsg = function RenderOldBrowserMsg() {
  _constants.BODY.classList.add('old-browser');

  var oldBrowserMsg = "\n\t\t<div class=\"msg\">\n\t\t\t<p>Oh hi! This is Miguel.</p>\n\t\t\t<p>This page didn't load because your browser is too old. :(</p>\n\t\t\t<p>Have you tried <a href=\"https://www.google.com/chrome/\">Chrome</a> or <a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a>? They're awesome.</p>\n\t\t</div>\n\t";
  document.querySelector(_constants.MAIN_WRAP).innerHTML = oldBrowserMsg;
};

var _default = RenderOldBrowserMsg;
exports["default"] = _default;

},{"../helpers/constants":2}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toDOM = _interopRequireDefault(require("../helpers/toDOM"));

var _sectionWrap = _interopRequireDefault(require("../site-modules/section-wrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderSkills = function RenderSkills(dataObj) {
  var title = dataObj.title,
      list = dataObj.list;
  var skillList = [];

  for (var key in list) {
    skillList.push({
      elem: 'li',
      child: [{
        elem: 'span',
        attrs: {
          "class": 'bar-list skills-list-item',
          'data-score': list[key],
          style: "width: ".concat(list[key], "%;")
        },
        text: key
      }]
    });
  }

  var skillsData = (0, _sectionWrap["default"])('skills', title, skillList);
  (0, _toDOM["default"])(skillsData);
};

var _default = RenderSkills;
exports["default"] = _default;

},{"../helpers/toDOM":4,"../site-modules/section-wrap":13}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../helpers/constants.js");

var sectionWrap = function sectionWrap(sectionClass, sectionTitle, sectionList) {
  return {
    parent: _constants.MAIN_WRAP,
    child: [{
      elem: 'section',
      "class": "".concat(sectionClass, " info"),
      child: [{
        "class": 'info-wrap',
        child: [{
          elem: 'h4',
          "class": 'info-title',
          text: sectionTitle
        }, {
          elem: 'ul',
          "class": "".concat(sectionClass, "-list"),
          child: sectionList
        }]
      }]
    }]
  };
};

var _default = sectionWrap;
exports["default"] = _default;

},{"../helpers/constants.js":2}]},{},[5]);
