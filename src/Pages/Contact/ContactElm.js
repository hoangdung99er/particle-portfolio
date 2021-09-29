import styled from "styled-components";

export const ContactStyled = styled.div`
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 2rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -23px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
        }

        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 60px;
          padding: 10px 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          color: inherit;
          border: 1px solid var(--border-color);
          outline: none;
          width: 100%;
          padding: 8px;
          resize: none;
        }
      }
    }
  }
`;
