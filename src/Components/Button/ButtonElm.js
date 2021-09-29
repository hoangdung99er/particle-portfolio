import styled from "styled-components";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: inherit;
  color: var(--white-color);
  transition: all 0.3s ease-in-out;
  margin-bottom: 1.2rem;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.5rem auto;
`;
