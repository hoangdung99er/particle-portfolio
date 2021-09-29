import styled from "styled-components";

export const ServicesSectionElm = styled.section`
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    margin-top: 5rem;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1.5rem;
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 1.5rem;
    }
  }
`;
