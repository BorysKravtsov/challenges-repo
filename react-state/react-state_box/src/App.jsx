import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
