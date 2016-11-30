'use strict';

const El = (function() {

  return class El {

    static get(selector) {
      return document.querySelector(selector);
    }

    static getAll(selector) {
      return document.querySelectorAll(selector);
    }

    static appendChildren(el, children) {
      children.forEach(child => el.appendChild(child))
      return el;
    }

    static create(selector) {
      return document.createElement(selector);
    }

    static innerHTML(el, stringHTML) {
      el.innerHTML = stringHTML;
      return el;
    }

    static setAttributes(el, attrs) {
      for (let prop in attrs) {
        el.setAttribute(prop, attrs[prop]);
      }
      return el;
    }

    static style(el, styles) {
      for (let prop in styles) {
        el.style[prop] = styles[prop];
      }
      return el;
    }

    static generate(opt) {
      let _el = El.create(opt.selector);
      _el = opt.attributes ? El.setAttributes(_el, opt.attributes) : _el;
      _el = opt.children ? El.appendChildren(_el, opt.children) : _el;
      _el = opt.style ? El.style(_el, opt.style) : _el;
      _el = opt.innerHTML ? El.innerHTML(_el, opt.innerHTML) : _el;
      return _el;
    }

  }

})();
