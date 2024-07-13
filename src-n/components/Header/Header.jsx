import React from 'react'
import Logo from '../Logo'
import NavList from './NavList'

const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <NavList/>
    </div>
  )
}

export default Header