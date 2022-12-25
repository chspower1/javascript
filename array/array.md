# Array

## Array.of()

Array.of() 메서드는 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만듭니다.

> `Array.of(element0[, element1[, ...[, elementN]]])`

```js
const friends = ["hosung", "haneul"];
const friends2 = Array.of("hosung", "hanael");
// 위 두 코드는 같은 값을 가짐
```

<br/>

## Array.from()

Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.

> `Array.from(arrayLike[, mapFn[, thisArg]])`

```js
// 요소가 100개가 있는 새로운 array를 만들고 싶으면?
const arr = Array.from({ length: 100 }, (_, index) => index);
console.log(arr);

// => [0,1,2,3,...,99] , length가 100개인 array 생성
```

<br/>

## Array.prototype.fill()

fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

> `arr.fill(value[, start[, end]])`

```js
const arr = [0, 1, 2, 3];
console.log(arr.fill(0, 0, 4));

// => [0,0,0,0]
```
