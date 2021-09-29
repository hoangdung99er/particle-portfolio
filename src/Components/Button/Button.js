import React from "react";
import { ButtonStyled, ButtonContainer } from "./ButtonElm";

function Button({ filter, button }) {
  return (
    <ButtonContainer>
      {button.map((button, index) => (
        <ButtonStyled key={index} onClick={() => filter(button)}>
          {button}
        </ButtonStyled>
      ))}
    </ButtonContainer>
  );
}

export default Button;
