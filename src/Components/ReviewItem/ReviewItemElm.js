import styled from "styled-components";

export const ReviewItemStyled = styled.div`
  height: fit-content;
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-grey-color);
  position: relative;
  width: 100%;
  &:not(:first-child) {
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey-color) transparent transparent
      var(--background-dark-grey-color);
  }
  p {
    padding: 1rem 0;
  }
`;
