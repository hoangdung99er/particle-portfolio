import styled from "styled-components";

export const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      overflow: hidden;
      display: block;
      position: relative;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;

        /* &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          height: calc(100% - 30px);
          width: calc(100% - 30px);
          background-color: white;
          opacity: 0.8;
          transform-origin: 50% 50%;
          transform: scale(1);
          transition: all 0.4s ease-in-out;
        } */
      }
      ul {
        transform: translateY(-300px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        opacity: 0;
      }

      .portfolio-image {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          transition: all 0.4s ease-in-out;
          height: 0;
          width: 0;
          transform-origin: 0;
          transform: scale(0);
        }
        &:hover {
          ul {
            transform: translateY(0);
            display: flex;
            align-items: center;
            transform: translate(-50%, -50%);
            justify-content: center;
            opacity: 1;
            li {
              background-color: var(--border-color);
              padding: 0.5rem;
              border-radius: 50%;
              transition: all 0.3s ease-in-out;
              &:hover {
                background-color: var(--primary-color);
              }
              a {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              &:not(:last-child) {
                margin-right: 1rem;
              }
            }
            li:hover {
              svg {
                color: var(--white-color);
              }
            }
            svg {
              font-size: 2rem;
            }
          }
          &::before {
            opacity: 0.8;
            transform: scale(1);
            height: calc(30vh - 30px);
            width: calc(100% - 30px);
            background-color: white;
          }
        }
      }
    }
  }
`;
