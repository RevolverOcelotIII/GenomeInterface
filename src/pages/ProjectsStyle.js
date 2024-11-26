import styled from 'styled-components'
const ProjectsPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ActionBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 20px;
    align-items: center;
`

const ProjectsContainer = styled.div`
    width: 98%;
    height: 80%;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    > h3 {
        width: 100%;
        text-align: start;
        margin: 10px;
    }
`

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    width: 300px;

    label {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #333;
    }

    input {
        padding: 12px 15px;
        font-size: 16px;
        border: 1px solid #000;
        border-radius: 8px;
        width: 100%;
        box-sizing: border-box; /* Para garantir que padding não afete a largura */
        transition: border-color 0.3s, box-shadow 0.3s;

        &::placeholder {
            color: #aaa;
        }
    }
`

const ProjectList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    a, a:hover, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }

    a > div, > div {
        height: 100px;
        width: 220px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #222;
        color: #222;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
        transition: 200ms;
        &:hover {
            transition: 200ms;
            background-color: #eee;
        }
        > div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }
    }
`

const ActionButton = styled.button`
    border: 1px solid #000;
    border-radius: 25px;
    background-color: #fff;
    height: 40px;
    padding: 5px 20px 5px;
    margin: 10px;
    cursor: pointer;
    transition: 200ms;
    &:hover {
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
        outline: none;
        color: #4CAF50;
        transition: 200ms;
    }
`

export {ProjectsPageContainer, ActionBar, ProjectsContainer, InputForm, ActionButton, ProjectList}