import React from 'react'
import NavItem from './NavItem'

const NavList = () => {
  let listLinks = [
    {path: '/contact' , txt: 'Contact us'},
    {path: '/About' , txt: 'About us'},
    {path: '/Blog' , txt: 'Blog'},
  ]
  return (
    <ul>
      {
        listLinks.map((item , index) => <NavItem key={index} path={item.path} txtLink={item.txt}/>)
      }
    </ul>
  )
}

export default NavList