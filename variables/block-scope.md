# Block-scope

scope는 기본적으로 버블이다.
이 버블은 variable들이 접근가능한지 아닌지를 감지해준다.

```js
// const,let의 block scope 예시
if (true) {
  const hello = "hi";
}
console.log(hello);
// => error
```

```js
// var의 block scope 예시
if (true) {
  var hello = "hi";
}
console.log(hello);
// => hi
```

const,let은 block scope가 있지만 var는 없음.
var는 function scope를 가집

> function scope는 var가 function 안에서 접근할 수 있다는 뜻.

```js
function a() {
  var hello = "hi";
}
console.log(hello);

// => error
```
