import React from 'react'
import SideBar from './SideBar'
import MainContener from './MainContener'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Body