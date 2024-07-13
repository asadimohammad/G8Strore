import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'

const Home = () => {
  let navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('access-token')
    if(!token) {
      navigate('/login')
    }
  } , [])

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home