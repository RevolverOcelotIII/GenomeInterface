/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */

import styled from "styled-components";

const FileSelectorContainer = styled.div`
    width: 100%;
    height: 300px;
    display: ${(props) => (props.filesSelected? 'none' : 'flex')};
    border: 2px dashed #ccc;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    input {
        display: none;
    }
`

const FileListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    p {
        margin: 10px;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 400px;
        padding: 0;
        border-radius: 8px;
    }

    li {
        position: relative;
        padding: 15px 20px;
        font-size: 14px;
        color: #333;
        border: 1px solid #ddd;
        border-radius: 8px;
        display: flex;
        margin: 5px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    button {
        border: 1px solid #000;
        border-radius: 25px;
        background-color: #fff;
        width: 120px;
        height: 40px;
        padding: 5px;
        margin: 10px;
        cursor: pointer;
        margin-top: 20px;
        &:hover {
            background-color: #ccc;
        }
        &:disabled {
            border: 1px solid #eff;
            cursor: default;
            &:hover{
                background-color: #fff;
            }
        }
    }

`

export { FileSelectorContainer, FileListContainer }