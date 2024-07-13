import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({path , txtLink}) => {
  return (
    <li className='item_link'>
      <NavLink to={path}>{txtLink}</NavLink>
    </li>
  )
}

export default NavItem