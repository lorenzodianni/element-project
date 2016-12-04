'use strict';

import {get} from './get';

describe('El.get', () => {
  let HTML_STRING = '<div id="foo" class="bar baz">Hello World</div>';

  beforeAll(() => {
    document.body.insertAdjacentHTML('beforeEnd', HTML_STRING);
  });

  it('should get HTMLDivNode', () => {
    let NODE_DIV = get('div');
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.localName).toBe('div');
  });

  it('should get HTMLDivNode by id', () => {
    let NODE_DIV = get('div#foo');
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.outerHTML).toBe(HTML_STRING);
  });

  it('should get HTMLDivNode by class', () => {
    let NODE_DIV = get('div.bar');
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.outerHTML).toBe(HTML_STRING);
  });

  it('should get HTMLElement only by id or class', () => {
    expect(get('#foo').outerHTML).toBeHtmlString();
    expect(get('.bar').outerHTML).toBeHtmlString();
    expect(get('#foo.bar.baz').outerHTML).toBeHtmlString();
  });

  afterAll(() => {
    document.querySelector('#foo').remove();
  });
});
