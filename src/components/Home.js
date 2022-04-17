import React from 'react'
import { useSelector } from 'react-redux'
import Mycart from './Mycart'
function Home() {
  let userName = useSelector(state => state.user)
  return (
    <h1>

      <Mycart/>
    </h1>
  )
}

export default Home
