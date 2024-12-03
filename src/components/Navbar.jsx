import React, { useState } from 'react'
import { NavbarStyle, Options } from './NavbarStyle'
import { Link } from 'react-router-dom'

function Navbar() {
  const [selectedTab, setSelectedTab] = useState('home')
  return (
    <NavbarStyle>
      <img src={'vampire-logo.png'} alt='a'/>
      <h6>{"Variant Analyzer by Mutation Profile In Red blood cell Epitopes"}</h6>
      <Options>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT THE PROJECT</Link>
      </Options>
    </NavbarStyle>
  )
}

export default Navbar