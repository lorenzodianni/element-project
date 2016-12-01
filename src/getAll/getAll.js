'use strict';

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
export function getAll(selector) {
  return document.querySelectorAll(selector);
}
