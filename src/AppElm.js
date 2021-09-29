import styled from "styled-components";

export const MainContainerStyled = styled.main`
  position: relative;
  margin-left: 18rem;
  min-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    .menus-toggle {
      display: block;
    }
  }

  .light-dark-mode {
    position: absolute;
    right: 0;
    top: 20%;
    z-index: 1;
    position: fixed;
    background-color: var(--background-light-color-2);
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    z-index: -1;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

  .menus-toggle {
    position: absolute;
    right: 2%;
    top: 2%;
    cursor: pointer;
    display: none;
    z-index: 100;
    svg {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .menus-toggle {
      display: block;
    }
  }
`;
