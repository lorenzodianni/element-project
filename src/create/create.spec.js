'use strict';

import {create} from './create';

describe('El.create', () => {
  let NODE_SPAN;
  let NODE_P;

  beforeAll(() => {
    NODE_SPAN = create('span.foo#bar');
    NODE_P = create('p.foo.bar#quux.baz');
  });

  it('should create HTMLNode', () => {
    expect(create('div').outerHTML).toBeHtmlString();
  });

  it('should create a default div tag', () => {
    expect(create().outerHTML).toBe('<div></div>');
  });

  it('should create a div tag with class `foo`', () => {
    expect(create('div.foo').classList).toContain('foo');
    expect(create('.foo').outerHTML).toBe('<div class="foo"></div>');
  });

  it('should create a div tag with id `bar`', () => {
    expect(create('div#bar').id).toBe('bar');
    expect(create('#bar').outerHTML).toBe('<div id="bar"></div>');
  });

  it('should create a span tag with class `foo` and id `bar`', () => {
    // expect(NODE_SPAN.id).toBe('bar');
    // expect(NODE_SPAN.classList).toContain('foo');
    // expect(NODE_SPAN.localName).toBe('span');
  });

  it('should create a p tag with class `foo bar baz` and id `quux`', () => {
    // expect(NODE_P.id).toBe('quux');
    // expect(NODE_P.className).toBe('foo bar baz');
    // expect(NODE_P.localName).toBe('p');
  });

  afterAll(() => {
    NODE_SPAN = NODE_P = null;
  });
});
