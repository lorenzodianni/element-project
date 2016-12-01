'use strict';

import {create} from './../create/create';
import {setAttribute} from './../setAttribute/setAttribute';
import {appendChildren} from './../appendChildren/appendChildren';
import {style} from './../style/style';
import {innerHTML} from './../innerHTML/innerHTML';
import {innerText} from './../innerText/innerText';

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
export function generate(selector, options = {}) {
  let _el = create(selector);
  _el = options.attribute ? setAttribute(_el, options.attribute) : _el;
  _el = options.children ? appendChildren(_el, options.children) : _el;
  _el = options.style ? style(_el, options.style) : _el;
  _el = options.innerHTML ? innerHTML(_el, options.innerHTML) : _el;
  _el = options.innerText ? innerText(_el, options.innerText) : _el;
  return _el;
}
