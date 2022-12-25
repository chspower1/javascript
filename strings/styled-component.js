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
