'use strict';

import {innerText} from './innerText';

describe('El.innerText', () => {
  let NODE_DIV;
  let STRING;

  beforeAll(() => {
    STRING = 'Hello World';
    NODE_DIV = innerText(document.createElement('div'), STRING);
  });

  it('should add text content inside HTMLDivNode', () => {
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.innerText).toBe(STRING);
  });

  afterAll(() => {
    NODE_DIV = STRING = null;
  });
});
