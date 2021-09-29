import styled from "styled-components";

export const BlogPageStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey-color);
      padding: 2rem 1rem;
      overflow: hidden;
    }
    .image {
      width: 100%;
      padding-bottom: 2rem;
      img {
        width: 100%;
        object-fit: cover;
        transition: all 0.25s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(1deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        transition: all 0.25s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;
