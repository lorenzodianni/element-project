'use strict';

/**
 * @static
 * @memberof El
 * @param {HTMLElement} element
 * @param {String} position - beforeBegin/afterBegin/beforeEnd/afterEnd
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
export function insertAdjacentHTML(element, position, html) {
  element.insertAdjacentHTML(position, html);
  return element;
}
