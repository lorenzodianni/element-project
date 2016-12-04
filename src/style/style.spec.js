'use strict';

import {style} from './style';

describe('El.style', () => {
  let NODE_DIV;

  beforeAll(() => {
    NODE_DIV = style(document.createElement('div'), {
      width: '50%',
      height: '10px',
      backgroundColor: 'blue',
    });
  });

  it('should set style attribute `foo` and `bar`', () => {
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.attributes.length).toBe(1);
    expect(NODE_DIV.attributes.style.value)
      .toBe('width: 50%; height: 10px; background-color: blue;');
    expect(NODE_DIV.style.width).toBe('50%');
    expect(NODE_DIV.style.height).toBe('10px');
    expect(NODE_DIV.style.backgroundColor).toBe('blue');
  });

  afterAll(() => {
    NODE_DIV = null;
  });
});
