import styled from "styled-components";

const AboutContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b11c1c;
    padding: 10px 16% 10px;
    > div {
        width: 100%;
        border-radius: 5px;
        padding: 0 20px 10px;
        display: flex;
        flex-direction: column;
        background-color: #f8f8f8;
        overflow-y: auto;
        > img {
            width: 300px;
            margin: auto;
        }
    }
    h1 {
        width: 100%;
        text-align: start;
        padding: 10px;
    }
    p {
        text-align: justify;
        width: 100%;
        
    }
`
const Developer = styled.p`
    display: flex;
    align-items: center;
    > img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-left: 10px;
            margin-right: 10px;
        }
`

export {AboutContainer, Developer}