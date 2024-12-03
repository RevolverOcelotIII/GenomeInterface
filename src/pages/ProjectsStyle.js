import styled from 'styled-components'

const ProjectsPageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b11c1c;
`
const ActionBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 20px;
    align-items: center;
`

const CenterActionBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProjectsContainer = styled.div`
    width: 98%;
    height: 90%;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
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
    flex-wrap: wrap;
    a, a:hover, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }

    a > div, > div {
        height: 130px;
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
        background-color: #fff;
        box-shadow: 0px 8px #1B1B1B;
        &:hover {
            transform: scale(1.1);
            transition: 200ms;
        }
        &:disabled {
            cursor: default;
        }

        > span {
            margin: 0 10px 0;
        }

        > div {
            width: 100%;
            height: 50px;
            display: flex;
            padding: 10px;
            border-radius: 8px 8px 0 0;
            margin-bottom: 20px;
            background-color: #1B1B1B;
            color: #fff;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            > div {
                display: flex;
                flex-direction: row;
            }
            >svg {
                margin-left: 5px;
                margin-right: 50px;
                transform: scale(2);
            }
        }

        &:hover button {
            pointer-events: all;
            opacity: 1;
            transition: 200ms;
        }
        
        p {
            font-size: 12px;
            margin-top: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            white-space: pre;
            svg {
                margin-left: 10px;
                transform: scale(2)
            }
        }

        button {
            background-color: #000;
            border-radius: 50%;
            border: 1px solid #fff;
            padding: 10px;
            opacity: 0;
            border: 1px solid white;
            color: #fff;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 200ms;
            pointer-events: none;
            margin-left: 5px;
            svg {
                transform: scale(1.8);
            }
            &:hover {
                background-color: #8c0808;
                transition: 200ms;
            }
        }
    }
`

const ActionButton = styled.button`
    border: 1px solid ${(props) => props.buttonColor? props.buttonColor : "#000"};
    border-radius: 25px;
    background-color: #fff;
    height: 40px;
    padding: 5px 20px 5px;
    margin: 10px;
    cursor: pointer;
    transition: 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 6px #15202B;
    &:hover {
        background-color: ${(props) => props.buttonColor? props.buttonColor : "#000"};
        outline: none;
        color: #fff;
        transition: 200ms;
    }
    svg {
        margin-right: 5px;
        transform: scale(1.2);
    }
`

export {ProjectsPageContainer, ActionBar, CenterActionBar, ProjectsContainer, InputForm, ActionButton, ProjectList}