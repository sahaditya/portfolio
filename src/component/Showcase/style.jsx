import style from "styled-components";

export const ShowcaseContainer = style.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 1rem;
`;

export const WorkOverview = style.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    overflow-y: auto;
    height: 55rem;
`;

export const InfoContainer = style.div`
        display: flex;
        height: 4rem;
        background-color: #30B2A8;
        margin: 0.2rem;
        margin-top: 2rem;
        border-radius:1rem;
        padding: 0.2rem;
        borderRadius: 1rem;
        position:relative;
`;
export const Number = style.div`
position: absolute;
    top: -1.5rem;
    // height: 3rem;
    // width: 4rem;
    // border-top-left-radius: 0.5rem;
    // border-top-right-radius: 0.5rem;
    // border-bottom-left-radius: 50%;
    // border-bottom-right-radius: 50%;
     width: 0; 
  height: 0; 
    border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  
  border-top: 2rem solid #2e6c76;
`;

export const NumberText = style.div`
    // background: #36484b;
    // height: 1rem;
    // width: 5.5rem;
    // top: -2.13rem;
    // position: relative;
    // padding: 0.2rem;
    position:absolute;
    top: -1.5rem;
    left: 2rem;
`;
