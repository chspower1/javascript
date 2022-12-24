# Arrow function

```js
// function
function addHeart(item) {
  return item + "🧡";
}
```

```js
// arrow function
const addHeart = () => {
  return item + "🧡";
};
```

```js
// implicit return
const addHeart = () => item + "🧡";
```

## Arrow function을 사용하지 말아야 할 경우

대부분의 경우 Arrow function을 사용할 수 있음.
그러나, this 키워드를 사용해야 할 경우는 제외.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script defer src="index.js" />
    <link href="css/style.css" rel="stylesheet" />
  </head>
  <body>
    <button>click me</button>
  </body>
</html>
```

```js
// funciton
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this);
  this.style.backgroundColor = "red";
});

// => 출력 <button>click me</button>,
// => 버튼 색상, 빨강으로 변경
```

```js
// arrow funciton
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(this);
  this.style.backgroundColor = "red";
});

// => error
```

Arrow function은 this를 window object로 가지고 있음.  
this를 사용하고 싶다면 function을 사용해야 함.

```js
const chs ={
    name:"chs",
    age:30,
    addYear=()=>{
        this.age++;
    }
}
chs.addYear();
console.log(chs);

// => {name:"chs",age:30}
```

age가 증가하지 않는 이유는 this가 window이기 때문

```js
const chs = {
  name: "chs",
  age: 30,
  addYear() {
    this.age++;
  },
};
chs.addYear();
console.log(chs);

// => {name:"chs",age:31}
```

일반 function으로 바꿔주면 정상적으로 age 증가
