'use strict';
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
export function appendChild(element, child) {
  element.appendChild(child);
  return element;
}
