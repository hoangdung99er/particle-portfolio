import styled from "styled-components";

export const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey-color);
  display: flex;
  align-items: center;
  @media screen and (max-width: 365px) {
    width: 100%;
  }
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    @media screen and (max-width: 365px) {
      padding: 0.8rem;
    }
    svg {
      font-size: 2rem !important;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.4rem;
      padding-bottom: 0.4rem;
      @media screen and (max-width: 365px) {
        font-size: 1rem;
      }
    }
    p {
      padding: 0.1rem 0;
      @media screen and (max-width: 365px) {
        font-size: 1rem;
      }
    }
  }
`;
