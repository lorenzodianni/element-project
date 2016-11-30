# Elent | Work in progress | Don't use it

<a name="El"></a>

## El : <code>object</code>
**Kind**: global namespace  

* [El](#El) : <code>object</code>
    * [.appendChild(element, child)](#El.appendChild) ⇒ <code>HTMLElement</code>
    * [.appendChildren(element, children)](#El.appendChildren) ⇒ <code>HTMLElement</code>
    * [.create(selector)](#El.create) ⇒ <code>HTMLElement</code>
    * [.generate(opt)](#El.generate) ⇒ <code>HTMLElement</code>
    * [.get(selector)](#El.get) ⇒ <code>HTMLElement</code>
    * [.getAll(selector)](#El.getAll) ⇒ <code>NodeList</code>
    * [.innerHTML(element, html)](#El.innerHTML) ⇒ <code>HTMLElement</code>
    * [.innerText(element, text)](#El.innerText) ⇒ <code>HTMLElement</code>
    * [.setAttributes(element, attrs)](#El.setAttributes) ⇒ <code>HTMLElement</code>
    * [.style(element, styles)](#El.style) ⇒ <code>HTMLElement</code>

<a name="El.appendChild"></a>

### El.appendChild(element, child) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| child | <code>HTMLElement</code> | 

**Example**  
```js
El.appendChild(El.get('.foo'), El.create('.bar'));

// <div class="foo">
//   <div class="bar"></div>
// </div>
```
<a name="El.appendChildren"></a>

### El.appendChildren(element, children) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| children | <code>Array.&lt;HTMLElement&gt;</code> | 

**Example**  
```js
El.appendChildren(El.get('ul#foo'), [
   El.generate({selector: 'li.bar', innerText: 1}),
   El.generate({selector: 'li.baz', innerText: 2}),
   El.generate({selector: 'li.qux', innerText: 3}),
]);

// <ul id="foo">
//   <li class="bar">1</li>
//   <li class="baz">2</li>
//   <li class="qux">3</li>
// </ul>
```
<a name="El.create"></a>

### El.create(selector) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | (tag [, id, class]) |

**Example**  
```js
El.create('div');
// <div></div>

El.create('section#foo.bar.baz');
// <section id="foo" class="bar baz"></section>

El.create('#foo.bar.baz');
// <div id="foo" class="bar baz"></div>
```
<a name="El.generate"></a>

### El.generate(opt) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| opt | <code>Object</code> | 

**Example**  
```js
El.generate({
   selector: 'ul',
   attributes: {
     id: 'my-list',
     class: 'list list--vertical'
   },
   style: {
     width: '50%'
   },
   children: [
     El.generate({selector: 'li', innerHTML: 1}),
     El.generate({selector: 'li', innerHTML: 2}),
     El.generate({selector: 'li', innerHTML: 3}),
     El.generate({selector: 'li', innerHTML: 4})
   ]
})

// <ul id="my-list" class="list list--vertical" style="width: 50%;">
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
// </ul>
```
<a name="El.get"></a>

### El.get(selector) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| selector | <code>String</code> | 

**Example**  
```js
El.get('div');
// <div></div>

El.get('span#foo.bar');
// <span id="foo" class="bar"></span>
```
<a name="El.getAll"></a>

### El.getAll(selector) ⇒ <code>NodeList</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| selector | <code>String</code> | 

**Example**  
```js
El.getAll('div');
// [div, div, div, ...*]

El.getAll('span.foo');
// [span.foo, span.foo, span.foo, ...*]
```
<a name="El.innerHTML"></a>

### El.innerHTML(element, html) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| html | <code>String</code> | 

**Example**  
```js
El.innerHTML(El.get('section'), '<div>Hello World</div>');

// <section>
//   <div>Hello World<div>
// </section>
```
<a name="El.innerText"></a>

### El.innerText(element, text) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| text | <code>String</code> | 

**Example**  
```js
El.innerText(El.get('div'), 'Hello World');
// <div>Hello World<div>
```
<a name="El.setAttributes"></a>

### El.setAttributes(element, attrs) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| attrs | <code>Object</code> | 

**Example**  
```js
El.setAttributes(El.get('div'), {
   id: 'foo',
   class: 'bar baz'
});
// <div id="foo" class="bar baz"></div>
```
<a name="El.style"></a>

### El.style(element, styles) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| styles | <code>Object</code> | 

**Example**  
```js
El.style(El.get('div'), {
   width: '100px',
   height: '100px',
   background: 'blue'
});
// <div style="width: 100px; height: 100px; background: blue"></div>
```