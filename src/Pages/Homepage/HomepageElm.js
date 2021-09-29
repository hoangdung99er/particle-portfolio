import styled from "styled-components";

export const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .particles {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .typography {
    @media screen and (max-width: 608px) {
      h1 {
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
