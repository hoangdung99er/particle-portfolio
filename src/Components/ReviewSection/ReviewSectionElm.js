import styled from "styled-components";

export const ReviewSectionStyled = styled.div`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.5rem;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 2rem;
    }
  }
`;
