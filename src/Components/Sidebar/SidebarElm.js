import styled from "styled-components";

export const SidebarElm = styled.div`
  width: 18rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  position: fixed;
  transition: all 0.4s ease-in-out;
  z-index: 999;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
`;
