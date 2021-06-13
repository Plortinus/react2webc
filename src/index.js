import React, { useState } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

export default function MyCounter() {
  const [count, setCount] = useState(0);

  const styles = `
    .my-counter * {
      font-size: 200%;
    }

    .my-counter span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    .my-counter button {
      width: 64px;
      height: 64px;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }`;

  return (
    <div className="my-counter">
      <style>{styles}</style>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

customElements.define(
  "my-counter",
  reactToWebComponent(MyCounter, React, ReactDOM)
);
