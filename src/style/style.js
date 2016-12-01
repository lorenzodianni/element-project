'use strict';

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
export function style(element, styles) {
  for (let prop in styles) {
    if(styles.hasOwnProperty(prop)) {
      element.style[prop] = styles[prop];
    }
  }
  return element;
}
