import styled from 'styled-components'

const navHeight = '60px'

const Navbar = styled.div`
    display: flex;
    width: 100%;
    height: ${navHeight};
    background-color: #ccc;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;
`

const Page = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    padding-top: ${navHeight};
    background-size: cover;
`

export {Navbar, Page}
