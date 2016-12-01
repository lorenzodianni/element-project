'use strict';

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
export function setAttribute(element, attrs) {
  for (let prop in attrs) {
    if (attrs.hasOwnProperty(prop)) {
      element.setAttribute(prop, attrs[prop]);
    }
  }
  return element;
}
