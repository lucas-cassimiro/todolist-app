import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-display: swap;
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/josefin-sans-400.woff2') format('woff2');
    }

    @font-face {
        font-display: swap;
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/josefin-sans-700.woff2') format('woff2');
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        min-height: 100vh;
        width: 100%;

        background: ${({ theme }) => `url(${theme.backgroundImage}) no-repeat`};
        background-size: cover;
        background-color: ${({ theme }) => theme.background};

        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    ul, ol {
        list-style: none;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit
    }

    button {
        background-color: transparent;
        border: none;
    }
`

export const Container = styled.div`
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 1.8rem;
`