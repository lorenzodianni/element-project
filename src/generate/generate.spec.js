'use strict';

import {generate} from './generate';

describe('El.generate', () => {
  it('should generate HTMLDivNode', () => {
    let NODE_DIV = generate('div');
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.localName).toBe('div');
  });

  it('should generate HTMLDivNode with attribute `foo` and `bar`', () => {
    let NODE_DIV = generate('div', {
      attribute: {
        foo: 'foo value',
        bar: 'bar value',
      },
    });
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.attributes.length).toBe(2);
    expect(NODE_DIV.attributes.foo.value).toBe('foo value');
    expect(NODE_DIV.attributes.bar.value).toBe('bar value');
  });

  it('should generate HTMLDivNode with child `span`', () => {
    let NODE_DIV = generate('div', {
      children: [
        document.createElement('span'),
      ],
    });
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.children.length).toBe(1);
  });

  it('should generate HTMLDivNode with style attribute', () => {
    let NODE_DIV = generate('div', {
      style: {
        width: '50%',
        height: '10px',
        backgroundColor: 'blue',
      },
    });
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.attributes.length).toBe(1);
    expect(NODE_DIV.attributes.style.value)
      .toBe('width: 50%; height: 10px; background-color: blue;');
    expect(NODE_DIV.style.width).toBe('50%');
    expect(NODE_DIV.style.height).toBe('10px');
    expect(NODE_DIV.style.backgroundColor).toBe('blue');
  });

  it('should generate HTMLDivNode with text content', () => {
    let NODE_DIV = generate('div', {
      innerText: 'Hello World',
    });
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.innerText).toBe('Hello World');
  });

  it('should generate HTMLDivNode with html content', () => {
    let NODE_DIV = generate('div', {
      innerHTML: '<span>Hello World</span>',
    });
    expect(NODE_DIV.outerHTML).toBeHtmlString();
    expect(NODE_DIV.children.length).toBe(1);
    expect(NODE_DIV.innerHTML).toBe('<span>Hello World</span>');
    expect(NODE_DIV.children[0].outerHTML).toBeHtmlString();
    expect(NODE_DIV.children[0].innerText).toBe('Hello World');
    expect(NODE_DIV.children[0].innerText).toBe('Hello World');
  });
});
