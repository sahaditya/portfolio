import style from "styled-components";

export const ProfileContainer = style.div`
display: flex;
flex-direction: column;
color: #ffffff
`;

export const Picture = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfilePic = style.img`
    width: 90%;
    margin-top:1rem;;
    border: 2px #0b5b65 solid;
`;

export const HorizontalLine = style.div`
    height:2px;
    background-color: #0b5b65;
`;

export const Bio = style.div`
    display: flex;
    flex-direction: column;
`;
