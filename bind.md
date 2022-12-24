# Bind

this값을 고정시킬 수 있음.

```js
function main() {
  console.log(this);
}

const mainBind = main.bind({ name: "hi" });

mainBind();
// => {name:"hi"}

// 새로운 객체에 할당을 해줘도 this는 {name:"hi"}로 고정
const object = {
  mainBind,
};
object.mainBind();
// => {name:"hi"}
```

```js
// bind 활용
const object = {
  name: "chs",
  main: function () {
    console.log(this);
  }.bind({ name: "bind 객체" }),
};

object.main();
// => {name:"bind 객체"}
```

### bind할 때 주의할 점

> 한번 bind 되면 또 bind 할순 없다.
