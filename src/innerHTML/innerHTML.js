'use strict';

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
export function innerHTML(element, html) {
  element.innerHTML = html;
  return element;
}
