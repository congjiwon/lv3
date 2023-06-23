import React, { useState } from "react";

function Input() {
  const [price, setPrice] = useState(0);

  const changeEnteredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <div>
      <h1>Input</h1>
      이름<input></input>
      가격
      <input
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
          changeEnteredNum(event);
        }}
      ></input>
      <button> 저장 </button>
    </div>
  );
}

export default Input;
