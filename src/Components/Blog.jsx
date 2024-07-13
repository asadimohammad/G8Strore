import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'


const Blog = () => {

  const ULStyled = styled.ul`
    background-color: #1e1e2e;
    font-size: 18px;
    color: #fff;
    padding: 15px;
  `


  return (
    <div>
        <div className="header">
            <ULStyled className='d-flex gap-6'>
                <li>
                  <NavLink to='/blog/it-news'>IT News</NavLink></li>
                <li><NavLink to='/blog/ai-news'>AI News</NavLink></li>
            </ULStyled>
        </div>
        <Outlet/>
    </div>
  )
}

export default Blog