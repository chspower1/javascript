# Javascript의 this

this는 함수를 호출한 객체이다.

```js
// 전역 this
console.log(this);

// => window 객체
```

```js
// 함수의 this
function main() {
  console.log(this);
}
main(); //window.main() 과 같다.

// => window 객체 ( main은 window객체의 함수이다. )
```

```js
// use strict모드에서의 this
"use strict";
function main() {
  console.log(this);
}

// => undefined ( window객체를 부르고 싶다면 window.main()이라고 써야함 )
```

```js
// 객체의 this
const object = {
  name: "chs",
  main: function () {
    console.log(this);
  },
};

object.main();

// => {name:'chs',main:f}

const main2 = object.main;
main2();

// => window
```

중요한 점!  
this는 함수가 정의된 위치나 방법에 영향을 받지 않음.

```js
function main() {
  console.log(this);
}

const object = {
  name: "chs",
  main,
};

object.main();

// => {name:'chs',main:f}
```

```js
// this는 함수를 호출한 객체!
function main() {
  console.log(this);
}

const object = {
  name: "chs",
  smallObject={
    name:"small chs",
    main,
  }
};

object.smallObject.main();

// => {name:'small chs',main:f}
```

## 전통적인 함수와 화살표 함수의 차이

### 전통적인 함수 문법

```js
function main() {
  console.log(this);
}
```

- 호출방법에 따른 this 변화
- this를 고정하기위해 bind() 사용

### 화살표 함수 문법

```js
const main = () => {
  console.log(this);
};
```

- 더 간결한 함수 선언 문법
- this가 호출에 따라 바뀌지 않음
- this를 외부에서 가져옴( 그 함수를 감싸는 scope의 this를 그대로 가져옴 )
