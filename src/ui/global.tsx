import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`;

export const PageContainer = styled.section`
    width: 100%;
    height: auto;
    min-height: 100vh;
    max-height: max-content;
`;
