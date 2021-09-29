import styled from "styled-components";

export const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 2rem;
  }

  .resume {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
  .resume-content {
    border-left: 4px solid var(--border-color);
  }
`;
