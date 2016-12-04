'use strict';

import {setAttribute} from './setAttribute';

describe('El.setAttribute', () => {
  let NODE_DIV;

  beforeAll(() => {
    NODE_DIV = setAttribute(document.createElement('div'), {
      foo: 'foo value',
      bar: 'bar value',
    });
  });

  it('should set attribute `foo` and `bar`', () => {
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.attributes.length).toBe(2);
    expect(NODE_DIV.attributes.foo.value).toBe('foo value');
    expect(NODE_DIV.attributes.bar.value).toBe('bar value');
  });

  afterAll(() => {
    NODE_DIV = null;
  });
});
