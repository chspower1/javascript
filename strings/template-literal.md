# Template Literal

ES6에 도입된 새로운 문자열 표기법

```js
const myName = "hosung";
console.log(`hello my name is ${myName}`);
```

# Cloning Styled-components

```js
const styled = {
  div: (css) => {
    const element = document.createElement("div");
    const styles = css[0];
    console.log(styles);
    element.style = styles;
  },
};

const redBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: red;
`;
```
