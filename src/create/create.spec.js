'use strict';

import {create} from './create';

describe('El.create', () => {
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
    expect(create('span.foo#bar').id).toBe('bar');
    expect(create('span.foo#bar').classList).toContain('foo');
    expect(create('span.foo#bar').outerHTML)
      .toBe('<span class="foo" id="bar"></span>');
  });

  it('should create an element with class `foo bar baz` and id `quux`', () => {
    expect(create('.foo.bar#quux.baz').id).toBe('quux');
    expect(create('.foo.bar#quux.baz').className).toBe('foo bar baz');
    expect(create('p.foo.bar#quux.baz').outerHTML)
      .toBe('<p class="foo bar baz" id="quux"></p>');
  });
});
