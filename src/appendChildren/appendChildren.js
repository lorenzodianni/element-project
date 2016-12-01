'use strict';
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
export function appendChildren(element, children) {
  for (let child = 0; child < children.length; child++) {
    element.appendChild(children[child]);
  }
  return element;
}
