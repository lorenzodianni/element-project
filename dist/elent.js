(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.El = global.El || {})));
}(this, (function (exports) { 'use strict';

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {HTMLElement} child
 * @return {HTMLElement}
 *
 * @example
 * El.appendChild(El.get('.foo'), El.create('.bar'));
 *
 * // <div class="foo">
 * //   <div class="bar"></div>
 * // </div>
 */

function appendChild(element, child) {
  element.appendChild(child);
  return element;
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {Array.<HTMLElement>} children
 * @return {HTMLElement}
 *
 * @example
 * El.appendChildren(El.get('ul#foo'), [
 *    El.generate('li.bar', {innerText: 1}),
 *    El.generate('li.baz', {innerText: 2}),
 *    El.generate('li.qux', {innerText: 3}),
 * ]);
 *
 * // <ul id="foo">
 * //   <li class="bar">1</li>
 * //   <li class="baz">2</li>
 * //   <li class="qux">3</li>
 * // </ul>
 */

function appendChildren(element, children) {
  for (var child = 0; child < children.length; child++) {
    element.appendChild(children[child]);
  }
  return element;
}

var SYMBOL_ID = '#';
var SYMBOL_CLASS = '.';
var TAG_NAME_DIV = 'div';

/**
 * @static
 * @memberof El
 * @param {String} selector - (tag [, id, class])
 * @return {HTMLElement}
 *
 * @example
 * El.create('div');
 * // <div></div>
 *
 * El.create('section#foo.bar.baz');
 * // <section id="foo" class="bar baz"></section>
 *
 * El.create('#foo.bar.baz');
 * // <div id="foo" class="bar baz"></div>
 */
function create() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TAG_NAME_DIV;

  if (!selector.includes(SYMBOL_CLASS) && !selector.includes(SYMBOL_ID)) {
    return document.createElement(selector);
  }
  var _HTMLElement = null;
  var _pointer = 0;
  for (var i = 0; i <= selector.length; i++) {
    var _char = selector.charAt(i);
    if (_char === SYMBOL_CLASS || _char === SYMBOL_ID || i === selector.length) {
      var _symbol = selector.charAt(_pointer - 1);
      var _word = selector.slice(_pointer, i);
      _symbol === SYMBOL_CLASS ? _HTMLElement.classList.add(_word) : _symbol === SYMBOL_ID ? _HTMLElement.id = _word : _HTMLElement = document.createElement(_word || TAG_NAME_DIV);
      _pointer = i + 1;
    }
  }
  return _HTMLElement;
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {Object} attrs
 * @return {HTMLElement}
 *
 * @example
 * El.setAttribute(El.get('div'), {
 *    id: 'foo',
 *    class: 'bar baz'
 * });
 * // <div id="foo" class="bar baz"></div>
 */

function setAttribute(element, attrs) {
  for (var prop in attrs) {
    if (attrs.hasOwnProperty(prop)) {
      element.setAttribute(prop, attrs[prop]);
    }
  }
  return element;
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {Object} styles
 * @return {HTMLElement}
 *
 * @example
 * El.style(El.get('div'), {
 *    width: '100px',
 *    height: '100px',
 *    background: 'blue'
 * });
 * // <div style="width: 100px; height: 100px; background: blue"></div>
 */

function style(element, styles) {
  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      element.style[prop] = styles[prop];
    }
  }
  return element;
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {String} html
 * @return {HTMLElement}
 *
 * @example
 * El.innerHTML(El.get('section'), '<div>Hello World</div>');
 *
 * // <section>
 * //   <div>Hello World<div>
 * // </section>
 */

function innerHTML(element, html) {
  element.innerHTML = html;
  return element;
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {String} text
 * @return {HTMLElement}
 *
 * @example
 * El.innerText(El.get('div'), 'Hello World');
 * // <div>Hello World<div>
 */

function innerText(element, text) {
  element.innerText = text;
  return element;
}

/**
 * @static
 * @memberof El
 * @param {String} selector
 * @param {Object} options
 * @return {HTMLElement}
 *
 * @example
 * El.generate('ul', {
 *    attribute: {
 *      id: 'foo',
 *      class: 'bar baz'
 *    },
 *    style: {
 *      width: '50%'
 *    },
 *    children: [
 *      El.generate('li', {innerHTML: 1}),
 *      El.generate('li', {innerHTML: 2}),
 *      El.generate('li', {innerHTML: 3}),
 *      El.generate('li', {innerHTML: 4})
 *    ]
 * });
 *
 * // <ul id="foo" class="bar baz" style="width: 50%;">
 * //   <li>1</li>
 * //   <li>2</li>
 * //   <li>3</li>
 * //   <li>4</li>
 * // </ul>
 */
function generate(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _el = create(selector);
  _el = options.attribute ? setAttribute(_el, options.attribute) : _el;
  _el = options.children ? appendChildren(_el, options.children) : _el;
  _el = options.style ? style(_el, options.style) : _el;
  _el = options.innerHTML ? innerHTML(_el, options.innerHTML) : _el;
  _el = options.innerText ? innerText(_el, options.innerText) : _el;
  return _el;
}

/**
 * @static
 * @memberof El
 * @param {String} selector
 * @return {HTMLElement}
 *
 * @example
 * El.get('div');
 * // <div></div>
 *
 * El.get('span#foo.bar');
 * // <span id="foo" class="bar"></span>
 */

function get(selector) {
  return document.querySelector(selector);
}

/**
 * @static
 * @memberof El
 * @param {String} selector
 * @return {NodeList}
 *
 * @example
 * El.getAll('div');
 * // [div, div, div, ...*]
 *
 * El.getAll('span.foo');
 * // [span.foo, span.foo, span.foo, ...*]
 */

function getAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {String} position - beforeBegin|afterBegin|beforeEnd|afterEnd
 * @param {String} html
 * @return {HTMLElement}
 *
 * @example
 * // <div id="test">
 * //   <span>World</span>
 * // </div>
 *
 * El.insertAdjacentHTML(El.get('#test'), 'beforeBegin', '<span>Hello</span>');
 * // <span>Hello</span>
 * // <div id="test">
 * //   <span>World</span>
 * // </div>
 *
 * El.insertAdjacentHTML(El.get('#test'), 'afterBegin', '<span>Hello</span>');
 * // <div id="test">
 * //   <span>Hello</span>
 * //   <span>World</span>
 * // </div>
 *
 * El.insertAdjacentHTML(El.get('#test'), 'beforeEnd', '<span>Hello</span>');
 * // <div id="test">
 * //   <span>World</span>
 * //   <span>Hello</span>
 * // </div>
 *
 * El.insertAdjacentHTML(El.get('#test'), 'afterEnd', '<span>Hello</span>');
 * // <div id="test">
 * //   <span>World</span>
 * // </div>
 * // <span>Hello</span>
 */

function insertAdjacentHTML(element, position, html) {
  element.insertAdjacentHTML(position, html);
  return element;
}

/**
 * @namespace El
 */

exports.appendChild = appendChild;
exports.appendChildren = appendChildren;
exports.create = create;
exports.generate = generate;
exports.get = get;
exports.getAll = getAll;
exports.innerHTML = innerHTML;
exports.innerText = innerText;
exports.insertAdjacentHTML = insertAdjacentHTML;
exports.setAttribute = setAttribute;
exports.style = style;

Object.defineProperty(exports, '__esModule', { value: true });

})));
