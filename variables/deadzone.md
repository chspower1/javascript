# DeadZone

## hoisting

- 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다. - 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
  - 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킨다.
  - 유효 범위: 함수 블록 {} 안에서 유효
- 즉, 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.
  - 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.
  - 실제 메모리에서는 변화가 없다.
- 호이스팅의 대상
  - var 변수 선언과 함수선언문에서만 호이스팅이 일어난다.
  - var 변수/함수의 선언만 위로 끌어 올려지며, 할당은 끌어 올려지지 않는다.
  - let/const 변수 선언과 함수표현식에서는 호이스팅이 발생하지 않는다.

출처 - https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

변수 스코프의 맨 위에서 변수의 초기화 완료 시점까지의 변수는 "시간상 사각지대"(Temporal Dead Zone, TDZ)에 들어간 변수라고 표현합니다.

## var의 예시

```js
console.log(myName);
var myName = "chs";

// => undefined
```

은 아래의 코드와 같다.

```js
var myName;
console.log(myName);
myName = "chs";

// => undefined
```

## let의 예시

```js
console.log(myName);
let myName = "chs";

// => error
```
