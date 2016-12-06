'use strict';

import {insertAdjacentHTML} from './insertAdjacentHTML';

describe('El.insertAdjacentHTML', () => {
  let NODE_DIV;
  let HTML_STRING;

  beforeEach(() => {
    HTML_STRING = '<span id="hello">Hello</span>';
    NODE_DIV = document.createElement('div');
    NODE_DIV.setAttribute('id', 'test');
    NODE_DIV.insertAdjacentHTML('afterBegin', '<span>World</span>');
    document.body.appendChild(NODE_DIV);
  });

  it('should insert html content before parent tag', () => {
    insertAdjacentHTML(NODE_DIV, 'beforeBegin', HTML_STRING);
    expect(NODE_DIV.previousElementSibling.outerHTML).toBeHtmlString();
    expect(NODE_DIV.previousElementSibling.outerHTML).toBe(HTML_STRING);
  });

  it('should insert html content as first child', () => {
    insertAdjacentHTML(NODE_DIV, 'afterBegin', HTML_STRING);
    expect(NODE_DIV.firstChild.outerHTML).toBeHtmlString();
    expect(NODE_DIV.firstChild.outerHTML).toBe(HTML_STRING);
  });

  it('should insert html content as last child', () => {
    insertAdjacentHTML(NODE_DIV, 'beforeEnd', HTML_STRING);
    expect(NODE_DIV.lastChild.outerHTML).toBeHtmlString();
    expect(NODE_DIV.lastChild.outerHTML).toBe(HTML_STRING);
  });

  it('should insert html content after parent tag', () => {
    insertAdjacentHTML(NODE_DIV, 'afterEnd', HTML_STRING);
    expect(NODE_DIV.nextElementSibling.outerHTML).toBeHtmlString();
    expect(NODE_DIV.nextElementSibling.outerHTML).toBe(HTML_STRING);
  });

  afterEach(() => {
    let NODE_HELLO = document.querySelector('#hello');
    NODE_DIV.remove();
    NODE_HELLO ? NODE_HELLO.remove() : null;
  });
});
