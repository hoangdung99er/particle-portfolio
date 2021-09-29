import styled from "styled-components";

export const ProgressBarStyled = styled.div`
  h6 {
    text-transform: uppercase;
  }
  .progress-bar {
    display: flex;
    align-items: center;

    p {
      padding-right: 1.2rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    }
  }
`;
