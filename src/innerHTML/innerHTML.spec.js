'use strict';

import {innerHTML} from './innerHTML';

describe('El.innerHTML', () => {
  let NODE_DIV;
  let HTML_STRING;

  beforeAll(() => {
    HTML_STRING = '<span>Hello World</span>';
    NODE_DIV = innerHTML(document.createElement('div'), HTML_STRING);
  });

  it('should add html content inside HTMLElement', () => {
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.children.length).toBe(1);
    expect(NODE_DIV.innerHTML).toBe('<span>Hello World</span>');
    expect(NODE_DIV.children[0].outerHTML).toBeHtmlString();
    expect(NODE_DIV.children[0].innerText).toBe('Hello World');
    expect(NODE_DIV.children[0].innerText).toBe('Hello World');
  });

  afterAll(() => {
    NODE_DIV = HTML_STRING = null;
  });
});
