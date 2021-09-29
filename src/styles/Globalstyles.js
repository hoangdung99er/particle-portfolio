import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    /* :root{
        --primary-color : #007bff;
        --secondary-color : #6c757d;
        --background-dark-color : #10121A;
        --background-dark-grey-color : #191D2B;
        --border-color : #2e344e;
        --background-light-color : #F1F1F1;
        --background-light-color-2: rgba(3,127,255,0.3);
        --background-light-color-3: #191d2b;
        --white-color : #FFF;
        --font-light-color : #a4acc4;
        --font-dark-color : #313131;
        --font-dark-color-2 : #151515;
        --sidebar-dark-color : #191D2B;
        --scrollbar-bg-color : #383838;
        --scrollbar-thumb-color : #6b6b6b;
        --scrollbar-track-color : #383838;
    } */

    *{
        padding : 0;
        margin : 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size : 1.2rem;
    }

    body{
        background-color : var(--background-dark-color);
        color : var(--font-light-color);
    }

    .nav-toggle {
        transform: translateX(0);
    }

    .dark-theme {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121a;
    --background-dark-grey-color: #191d2b;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --background-light-color-2: rgba(3, 127, 255, 0.3);
    --background-light-color-3: #191d2b;
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191d2b;
    --scrollbar-bg-color: #383838;
    --scrollbar-thumb-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }

  .light-theme {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #f1f1f1;
    --background-dark-grey-color: #7F96FF;
    --border-color: #cbced8;
    --background-light-color: #f1f1f1;
    --background-light-color-2: rgba(3, 127, 255, 0.3);
    --background-light-color-3: #191d2b;
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #e4e4e4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thumb-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }

    body::-webkit-scrollbar{
        width : 10px;
        background-color : #383838;
    }

    body::-webkit-scrollbar-thumb{
        border-radius : 10px;
        background-color : #6b6b6b;
        &:hover{
        background-color : var(--secondary-color);
        }
    }

    body::-webkit-scrollbar-track{
        border-radius : 10px;
        background-color : #383838;
    }

    a{
        font-family:inherit;
        color : inherit;
        font-size : inherit;
    }

    h1{
        font-size : 3rem;
        color : var(--white-color);
        span{
            font-size : 3rem;
        }
    }

    span{
        color : var(--primary-color)
    }

    
`;

export default GlobalStyled;
