'use strict';

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
export function get(selector) {
  return document.querySelector(selector);
}
