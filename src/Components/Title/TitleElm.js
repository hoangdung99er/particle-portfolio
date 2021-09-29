import styled from "styled-components";

export const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.8rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    @media screen and (max-width: 700px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 438px) {
      font-size: 2rem;
    }
    &::before {
      content: "";
      width: 7.4rem;
      position: absolute;
      bottom: 0;
      height: 0.33rem;
      border-radius: 15px;
      background-color: var(--background-light-color-2);
      left: 0;
    }
    &::after {
      content: "";
      width: 3.5rem;
      position: absolute;
      bottom: 0;
      height: 0.33rem;
      border-radius: 15px;
      background-color: var(--primary-color);
      left: 0;
    }
    span {
      font-weight: 600;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 35%;
      z-index: -1;
      @media screen and (max-width: 700px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 540px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 430px) {
        font-size: 2.1rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 2rem;
      }
    }
  }
`;
