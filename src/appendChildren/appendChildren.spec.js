'use strict';

import {appendChildren} from './appendChildren';

describe('El.appendChildren', () => {
  let NODE_UL;
  let NODE_LI;

  beforeEach(() => {
    NODE_UL = document.createElement('ul');
    NODE_LI = document.createElement('li');
  });

  it('should append a child HTMLNode to a ul element', () => {
    expect(appendChildren(NODE_UL, [NODE_LI]).outerHTML).toBe('<ul><li></li></ul>');
  });

  it('should append just one children element', () => {
    expect(appendChildren(NODE_UL, [NODE_LI]).children.length).toBe(1);
  });

  it('should append 3 children elements', () => {
    let _NODE_LI_A = document.createElement('li');
    let _NODE_LI_B = document.createElement('li');
    expect(appendChildren(NODE_UL, [NODE_LI, _NODE_LI_A, _NODE_LI_B]).children.length).toBe(3);
  });

  afterEach(() => {
    NODE_UL = NODE_LI= null;
  });
});
