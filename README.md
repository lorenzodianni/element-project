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
El.appendChild(El.get('.foo'), El.get('.bar'));
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
El.appendChildren(El.get('.parent'), [
   El.get('.target-1'),
   El.get('.target-2'),
   El.get('.target-3')
]);
```
<a name="El.create"></a>

### El.create(selector) ⇒ <code>HTMLElement</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | tagName[, id, class] |

**Example**  
```js
El.create('div');
// => <div></div>

El.create('section#foo.bar.baz');
// => <section id="foo" class="bar baz"></section>

El.create('#foo.bar.baz');
// => <div id="foo" class="bar baz"></div>
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
     El.generate({selector: 'li', innerHTML: '1'}),
     El.generate({selector: 'li', innerHTML: '2'}),
     El.generate({selector: 'li', innerHTML: '3'}),
     El.generate({selector: 'li', innerHTML: '4'})
   ]
})
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
El.innerText(El.get('.foo'), 'Hello World');
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
   id: 'my-div',
   class: 'card card--small'
});
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
```