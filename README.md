# Work in progress | Don't use it

# element
javascript library for element composition

<a name="El"></a>

## El : <code>object</code>
**Kind**: global namespace  

* [El](#El) : <code>object</code>
    * [.get(selector)](#El.get) ⇒ <code>Element</code>
    * [.getAll(selector)](#El.getAll) ⇒ <code>NodeList</code>
    * [.appendChildren(element, children)](#El.appendChildren) ⇒ <code>Element</code>
    * [.create(selector)](#El.create) ⇒ <code>Element</code>
    * [.innerHTML(element, html)](#El.innerHTML) ⇒ <code>Element</code>
    * [.setAttributes(element, attrs)](#El.setAttributes) ⇒ <code>Element</code>
    * [.style(element, styles)](#El.style) ⇒ <code>Element</code>
    * [.generate(opt)](#El.generate) ⇒ <code>Element</code>

<a name="El.get"></a>

### El.get(selector) ⇒ <code>Element</code>
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
<a name="El.appendChildren"></a>

### El.appendChildren(element, children) ⇒ <code>Element</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 
| children | <code>Array.&lt;Element&gt;</code> | 

**Example**  
```js
El.appendChildren(El.get('.parent'), [
   El.get('.target-1'),
   El.get('.target-2'),
   El.get('.target-3')
]);
```
<a name="El.create"></a>

### El.create(selector) ⇒ <code>Element</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| selector | <code>String</code> | 

**Example**  
```js
El.create('div');
```
<a name="El.innerHTML"></a>

### El.innerHTML(element, html) ⇒ <code>Element</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 
| html | <code>String</code> | 

**Example**  
```js
El.innerHTML(El.get('section'), '<div>Hello World</div>');
```
<a name="El.setAttributes"></a>

### El.setAttributes(element, attrs) ⇒ <code>Element</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 
| attrs | <code>Object</code> | 

**Example**  
```js
El.setAttributes(El.get('div'), {
   id: 'my-div',
   class: 'card card--small'
});
```
<a name="El.style"></a>

### El.style(element, styles) ⇒ <code>Element</code>
**Kind**: static method of <code>[El](#El)</code>  

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 
| styles | <code>Object</code> | 

**Example**  
```js
El.style(El.get('div'), {
   width: '100px',
   height: '100px',
   background: 'blue'
});
```
<a name="El.generate"></a>

### El.generate(opt) ⇒ <code>Element</code>
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