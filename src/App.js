import { useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("render");  
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text="Hello" />
    </div>
  );
}

export default App;