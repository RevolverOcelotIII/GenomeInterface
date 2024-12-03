import styled from 'styled-components'

const NavbarStyle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #BB2C3A;
    //color: #6b1414;
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;

    h6 {
        font-size: 14px;
        display: flex;
        white-space: pre-wrap;
        margin-left: 10px;
        width: 250px;
        word-wrap: break-word;
        text-align: initial;
    }

    img {
        width: 100px;
    }
`
const Options = styled.div`
    width: 300px;
    margin-left: 15px;
    a, a:hover, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }
    a {
        margin-right: 20px;
        padding: 5px;
        border-radius: 2px;
        transition: 200ms;
        &:hover {
            transition: 200ms;
            background-color: #ddd;
        }
    }
`
export { NavbarStyle, Options }