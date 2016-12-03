'use strict';

import {appendChild} from './appendChild';

describe('El.appendChild', () => {
  let NODE_DIV;
  let NODE_SPAN;

  beforeEach(() => {
    NODE_DIV = document.createElement('div');
    NODE_SPAN = document.createElement('span');
  });

  it('should append a child HTMLNode to a div element', () => {
    expect(appendChild(NODE_DIV, NODE_SPAN).outerHTML).toBe('<div><span></span></div>');
  });

  it('should append just one child element', () => {
    expect(appendChild(NODE_DIV, NODE_SPAN).children.length).toBe(1);
  });

  afterEach(() => {
    NODE_DIV = NODE_SPAN= null;
  });
});
