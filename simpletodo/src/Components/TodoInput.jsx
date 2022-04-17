import { useState } from "react";

export const TodoInput = ({ props }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => props(text)}>+</button>
    </div>
  );
};
