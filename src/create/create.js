'use strict';

import {TAG_NAME_DIV, SYMBOL_CLASS, SYMBOL_ID} from '../_constants/constants';

/**
 * @static
 * @memberof El
 * @param {String} selector - (tag [, id, class])
 * @return {HTMLElement}
 *
 * @example
 * El.create('div');
 * // <div></div>
 *
 * El.create('section#foo.bar.baz');
 * // <section id="foo" class="bar baz"></section>
 *
 * El.create('#foo.bar.baz');
 * // <div id="foo" class="bar baz"></div>
 */
export function create(selector = TAG_NAME_DIV) {
  if(!selector.includes(SYMBOL_CLASS) && !selector.includes(SYMBOL_ID)) {
    return document.createElement(selector);
  }
  let _HTMLElement = null;
  let _pointer = 0;
  for(let i = 0; i <= selector.length; i++) {
    let _char = selector.charAt(i);
    if(_char === SYMBOL_CLASS || _char === SYMBOL_ID || i === selector.length) {
      let _symbol = selector.charAt(_pointer - 1);
      let _word = selector.slice(_pointer, i);
      _symbol === SYMBOL_CLASS ? _HTMLElement.classList.add(_word)
        : _symbol === SYMBOL_ID ? _HTMLElement.id = _word
        : _HTMLElement = document.createElement(_word || TAG_NAME_DIV);
      _pointer = i + 1;
    }
  }
  return _HTMLElement;
}
