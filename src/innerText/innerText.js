'use strict';

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
export function innerText(element, text) {
  element.innerText = text;
  return element;
}
