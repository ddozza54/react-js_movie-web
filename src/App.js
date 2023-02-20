import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: gold;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border: none;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Circle bgColor="tomato"></Circle>
      <Btn></Btn>
      <Btn as="input"></Btn>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}

export default App;
