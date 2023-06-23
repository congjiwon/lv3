import React from "react";
import { styled } from "styled-components";

function Button({ type, medium, small }) {
  const firstBtnHandler = () => {
    return alert("버튼을 만들어보세요");
  };

  const LargeBtn = styled.button`
    border: 1px solid ${(props) => props.borderColor};
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    margin: 10px;
  `;

  const MeduimBtn = styled.button`
    background-color: white;
    border: 1px solid ${(props) => props.borderColor};
    margin: 10px;
    width: 150px;
    height: 38px;
    border-radius: 10px;
  `;
  const SmallBtn = styled.button`
    background-color: white;
    border: 1px solid ${(props) => props.borderColor};
    margin: 10px;
    width: 110px;
    height: 33px;
    border-radius: 10px;
  `;

  const secondBtnHandler = () => {
    return prompt("어렵나요?", "");
  };

  if (type === 1)
    return (
      <LargeBtn borderColor="green" onClick={firstBtnHandler}>
        Large Primary Button
      </LargeBtn>
    );
  if (type === 2)
    return (
      <LargeBtn borderColor="red" onClick={secondBtnHandler}>
        Large Primary Button
      </LargeBtn>
    );
  if (type === 3) return <MeduimBtn borderColor="blue">Medium</MeduimBtn>;
  if (type === 4) return <SmallBtn borderColor="purple">Small</SmallBtn>;
  if (type === 5) return <MeduimBtn borderColor="blue">Medium</MeduimBtn>;
  if (type === 6) return <SmallBtn borderColor="purple">Small</SmallBtn>;
}

export default Button;
