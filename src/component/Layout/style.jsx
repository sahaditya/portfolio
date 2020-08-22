import style from "styled-components";

export const LayoutContainer = style.div`
    max-width: 1440px;
    height: 100%;
    background-color: #6c8788;
    height: 60rem;
    margin: auto;

    display: flex;
    @media (max-width: 800px){
        flex-direction: column
    }
`;

export const Left = style.div`
    width: 20%;
    height: 100%;
    background-color: #5A5D6F;
    @media (max-width: 800px){
        width: 100%;
    }
`;

export const Right = style.div`
    width: 80%;
    height: 100%;
    background-color: #226C73;
    @media (max-width: 800px){
        width: 100%;
    }
`;
