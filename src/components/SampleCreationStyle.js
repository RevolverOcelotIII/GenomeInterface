import styled from 'styled-components'

const ImportFileForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100%;
    background-color: blue;
    max-width: 80rem;
    background-color: #fff;
`

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: start;
    vertical-align: top;
`

const CheckBoxList = styled.div`
    margin: 15px 10px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 250px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    label {
        max-height: 300px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;

        input {
            accent-color: #2374FF; /* Verde */
            margin-right: 10px; /* Aumenta o tamanho do checkbox */
            cursor: pointer;
        }

        span {
            font-size: 16px;
            color: #333;
        }

        input:checked + .checkbox-label {
            color: #4CAF50;
            font-weight: bold;
            text-decoration: line-through;
        }
    }
`

const DropFileBox = styled.div`
    border-radius: 0;
    width: 100%;
    height: 300px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {ImportFileForm, CheckBoxList, CheckBoxContainer, DropFileBox}