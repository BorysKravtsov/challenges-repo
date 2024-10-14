import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";

export default function Counter() {
  const [value, setValue] = useState(0);
  const incrementButton = () => {
    setValue(value + 1);
    console.log(value);
  };
  const decrementButton = () => {
    setValue(value - 1);
    console.log(value);
  };
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          onClick={incrementButton}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={decrementButton}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
