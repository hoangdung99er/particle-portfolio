import styled from "styled-components";

export const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    transition: all 0.4s ease-in-out;
    position: absolute;
    height: 0.3rem;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }

  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
