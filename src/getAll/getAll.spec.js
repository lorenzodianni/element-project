'use strict';

import {getAll} from './getAll';

describe('El.getAll', () => {
  let HTML_STRING = `
    <ul id="getAllTest">
      <li class="foo"></li>
      <li class="foo"></li>
      <li class="foo"></li>
      <li class="bar"></li>
      <li class="bar"></li>
      <li class="bar"></li>
    </ul>
  `;

  beforeAll(() => {
    document.body.insertAdjacentHTML('beforeEnd', HTML_STRING);
  });

  it('should get all li elements', () => {
    let NODE_LIST = getAll('#getAllTest li');
    expect(NODE_LIST.length).toBe(6);
  });

  it('should get only li elements with foo class', () => {
    let NODE_LIST = getAll('#getAllTest .foo');
    expect(NODE_LIST.length).toBe(3);
  });

  it('should get only li elements with bar class', () => {
    let NODE_LIST = getAll('#getAllTest li.foo');
    expect(NODE_LIST.length).toBe(3);
  });

  afterAll(() => {
    document.querySelector('#getAllTest').remove();
  });
});
