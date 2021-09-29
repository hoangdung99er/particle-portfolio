import styled from "styled-components";

export const ResumeStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2.5rem;
    @media screen and (max-width: 744px) {
      font-size: 1.5rem;
    }
  }
`;
