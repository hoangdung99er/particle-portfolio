import styled from "styled-components";

export const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraphy {
      padding: 0.2rem 0;
    }
    .about-info {
      display: flex;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
