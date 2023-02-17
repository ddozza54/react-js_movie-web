import { useEffect, useState } from "react";
function hifn() {
  console.log("hi :-)");
  return () => console.log("bye :( ");
}
function Hello() {
  useEffect(hifn, []);
  return <h1>Hello!</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Showing"}</button>
    </div>
  );
}

export default App;
