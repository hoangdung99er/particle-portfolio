import styled from "styled-components";

export const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey-color);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);

  -webkit-box-shadow: -1px 3px 15px 3px rgba(0, 0, 0, 0.4);
  box-shadow: -1px 3px 15px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.04);
    border-top: 8px solid var(--primary-color);
  }
  .container {
    padding: 1.2rem;
    img {
      width: 150px;
      height: 150px;
    }
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }

    p {
      padding: 0.8rem 0;
    }
  }
`;
