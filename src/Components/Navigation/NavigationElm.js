import styled from "styled-components";

export const NavigationElm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    height: 30%;
    padding: 2rem 0;
    text-align: center;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  @media screen and (max-width: 1450px) {
    .avatar {
      height: 40%;
    }
    img {
      width: 250px;
      height: 250px;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      .active {
        background-color: var(--primary-color);
      }
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--font-light-color);
          transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          z-index: -1;
          opacity: 0.21;
        }
        &:hover::before {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    text-align: center;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
    }
  }
`;
