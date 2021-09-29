import styled from "styled-components";

export const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    padding-left: 20px;
    width: 50%;
    position: relative;
    span {
      position: absolute;
      top: 10px;
      left: -10px;
      width: 15px;
      height: 15px;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-grey-color);
      border-radius: 50%;
    }
    p {
      display: inline-block;
      @media screen and (max-width: 429px) {
        font-size: 0.8rem;
      }
    }
  }

  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
      @media screen and (max-width: 429px) {
        font-size: 1.2rem;
      }
    }
    h6 {
      padding-bottom: 0.4rem;
      font-size: 1.5rem;
      @media screen and (max-width: 429px) {
        font-size: 0.8rem;
      }
    }
    p {
      @media screen and (max-width: 429px) {
        font-size: 0.8rem;
      }
    }
  }
`;
