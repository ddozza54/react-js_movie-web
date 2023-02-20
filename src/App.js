import styled, { keyframes } from "styled-components";

const Wrapper = styled.div``;

const roatation = keyframes`
0%{
  transform:rotate(0deg);
  border-radius: 15px;
}
50%{
  border-radius: 50%;
}
100%{
  transform:rotate(360deg);
  border-radius: 15px;
}
`;

function App() {
  const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: gold;
    animation: ${roatation} 2s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 50px;
      &:hover {
        font-size: 100px;
      }
    }
  `;

  return (
    <Wrapper>
      <Box>
        <span>🌼</span>
      </Box>
    </Wrapper>
  );
}

export default App;
