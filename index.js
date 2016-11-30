'use strict';

/**
 * @namespace El
 */
const El = (function() {

  return class El {

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.get('div');
     *
     * @param {String} selector
     * @returns {Element}
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
     * El.appendChildren(El.get('.parent'), [
     *    El.get('.target-1'),
     *    El.get('.target-2'),
     *    El.get('.target-3')
     * ]);
     *
     * @param {Element} element
     * @param {Array.<Element>} children
     * @returns {Element}
     */
    static appendChildren(element, children) {
      children.forEach(child => element.appendChild(child))
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.create('div');
     *
     * @param {String} selector
     * @returns {Element}
     */
    static create(selector) {
      return document.createElement(selector);
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.innerHTML(El.get('section'), '<div>Hello World</div>');
     *
     * @param {Element} element
     * @param {String} html
     * @returns {Element}
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
     * El.setAttributes(El.get('div'), {
     *    id: 'my-div',
     *    class: 'card card--small'
     * });
     *
     * @param {Element} element
     * @param {Object} attrs
     * @returns {Element}
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
     *
     * @param {Element} element
     * @param {Object} styles
     * @returns {Element}
     */
    static style(element, styles) {
      for (let prop in styles) {
        element.style[prop] = styles[prop];
      }
      return element;
    }

    /*------------------------------------------------------------------------*/

    /**
     * @static
     * @memberof El
     *
     * @example
     * El.generate({
     *    selector: 'ul',
     *    attributes: {
     *      id: 'my-list',
     *      class: 'list list--vertical'
     *    },
     *    style: {
     *      width: '50%'
     *    },
     *    children: [
     *      El.generate({selector: 'li', innerHTML: '1'}),
     *      El.generate({selector: 'li', innerHTML: '2'}),
     *      El.generate({selector: 'li', innerHTML: '3'}),
     *      El.generate({selector: 'li', innerHTML: '4'})
     *    ]
     * })
     *
     * @param {Object} opt
     * @returns {Element}
     */
    static generate(opt) {
      let _el = El.create(opt.selector);
      _el = opt.attributes ? El.setAttributes(_el, opt.attributes) : _el;
      _el = opt.children ? El.appendChildren(_el, opt.children) : _el;
      _el = opt.style ? El.style(_el, opt.style) : _el;
      _el = opt.innerHTML ? El.innerHTML(_el, opt.innerHTML) : _el;
      return _el;
    }

  }

})();
