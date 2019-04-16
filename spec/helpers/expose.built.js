(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const emphasis = text => {
  let matchEm = text.match(/\*(.*?)\*/g);

  if (matchEm) {
    let breakSentence = text.split('*');
    let textWithEmphasis = '';
    matchEm = matchEm.map(str => str.replace(/\*/g, ''));
    breakSentence.forEach(el => {
      if (matchEm.includes(el)) {
        textWithEmphasis += `<em>${el}</em>`;
      } else {
        textWithEmphasis += el;
      }
    });
    return textWithEmphasis;
  }

  return text;
};

var _default = emphasis;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emphasis = _interopRequireDefault(require("./emphasis.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const toDOM = props => {
  let {
    parent,
    child
  } = props;
  let dataAttr = 'data-current-elem';
  let parentElems = document.querySelectorAll(parent);
  let targetElements = Object.keys(parentElems).map(elem => parentElems[elem]);
  targetElements.forEach(parentEl => {
    if (child) {
      child.forEach(childEl => {
        let newElem = document.createElement(childEl.elem);
        newElem.setAttribute(dataAttr, '');

        if (childEl.text) {
          newElem.innerHTML = (0, _emphasis.default)(childEl.text);
        }

        for (let attrKey in childEl.attrs) {
          newElem.setAttribute(attrKey, childEl.attrs[attrKey]);
        }

        parentEl.appendChild(newElem);
        parentEl.removeAttribute(dataAttr);

        if (childEl['child']) {
          toDOM({
            parent: `[${dataAttr}]`,
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
exports.default = _default;

},{"./emphasis.js":1}],3:[function(require,module,exports){
window.exposedModule = {
	'emphasis': require('../../components/js/helpers/emphasis.js'),
	'toDOM': require('../../components/js/helpers/toDOM.js')
}

window.emphasis = window.exposedModule.emphasis
window.toDOM = window.exposedModule.toDOM

// window.$ = document.querySelector;
// window.$$ = document.querySelectorAll;

},{"../../components/js/helpers/emphasis.js":1,"../../components/js/helpers/toDOM.js":2}]},{},[3]);
