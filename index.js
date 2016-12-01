'use strict';

/**
 * @namespace El
 */
const El = (function() {

  const SYMBOL_ID = '#';
  const SYMBOL_CLASS = '.';
  const TAG_NAME_DIV = 'div';

  return class El {

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.appendChild(El.get('.foo'), El.create('.bar'));
     *
     * // <div class="foo">
     * //   <div class="bar"></div>
     * // </div>
     *
     * @param {HTMLElement} element
     * @param {HTMLElement} child
     * @returns {HTMLElement}
     */
    static appendChild(element, child) {
      element.appendChild(child);
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
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
     *
     * @param {HTMLElement} element
     * @param {Array.<HTMLElement>} children
     * @returns {HTMLElement}
     */
    static appendChildren(element, children) {
      for(let child of children) {
        element.appendChild(child)
      }
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
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
     *
     * @param {String} selector - (tag [, id, class])
     * @returns {HTMLElement}
     */
    static create(selector = TAG_NAME_DIV) {
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

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.generate('ul', {
     *    attributes: {
     *      id: 'foo',
     *      class: 'bar baz'
     *    },
     *    style: {
     *      width: '50%'
     *    },
     *    children: [
     *      El.generate('li', {innerHTML: 1}),
     *      El.generate('li', {innerHTML: 2}),
     *      El.generate('li', {innerHTML: 3}),
     *      El.generate('li', {innerHTML: 4})
     *    ]
     * })
     *
     * // <ul id="foo" class="bar baz" style="width: 50%;">
     * //   <li>1</li>
     * //   <li>2</li>
     * //   <li>3</li>
     * //   <li>4</li>
     * // </ul>
     *
     * @param {String} selector
     * @param {Object} options
     * @returns {HTMLElement}
     */
    static generate(selector, options) {
      let _el = El.create(selector);
      _el = options.attributes ? El.setAttributes(_el, options.attributes) : _el;
      _el = options.children ? El.appendChildren(_el, options.children) : _el;
      _el = options.style ? El.style(_el, options.style) : _el;
      _el = options.innerHTML ? El.innerHTML(_el, options.innerHTML) : _el;
      _el = options.innerText ? El.innerText(_el, options.innerText) : _el;
      return _el;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.get('div');
     * // <div></div>
     *
     * El.get('span#foo.bar');
     * // <span id="foo" class="bar"></span>
     *
     * @param {String} selector
     * @returns {HTMLElement}
     */
    static get(selector) {
      return document.querySelector(selector);
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.getAll('div');
     * // [div, div, div, ...*]
     *
     * El.getAll('span.foo');
     * // [span.foo, span.foo, span.foo, ...*]
     *
     * @param {String} selector
     * @returns {NodeList}
     */
    static getAll(selector) {
      return document.querySelectorAll(selector);
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.innerHTML(El.get('section'), '<div>Hello World</div>');
     *
     * // <section>
     * //   <div>Hello World<div>
     * // </section>
     *
     * @param {HTMLElement} element
     * @param {String} html
     * @returns {HTMLElement}
     */
    static innerHTML(element, html) {
      element.innerHTML = html;
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.innerText(El.get('div'), 'Hello World');
     * // <div>Hello World<div>
     *
     * @param {HTMLElement} element
     * @param {String} text
     * @returns {HTMLElement}
     */
    static innerText(element, text) {
      element.innerText = text;
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.setAttributes(El.get('div'), {
     *    id: 'foo',
     *    class: 'bar baz'
     * });
     * // <div id="foo" class="bar baz"></div>
     *
     * @param {HTMLElement} element
     * @param {Object} attrs
     * @returns {HTMLElement}
     */
    static setAttributes(element, attrs) {
      for (let prop in attrs) {
        element.setAttribute(prop, attrs[prop]);
      }
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.style(El.get('div'), {
     *    width: '100px',
     *    height: '100px',
     *    background: 'blue'
     * });
     * // <div style="width: 100px; height: 100px; background: blue"></div>
     *
     * @param {HTMLElement} element
     * @param {Object} styles
     * @returns {HTMLElement}
     */
    static style(element, styles) {
      for (let prop in styles) {
        element.style[prop] = styles[prop];
      }
      return element;
    }

  }

})();
