import React from 'react'
import SideBar from './SideBar'
import MainContener from './MainContener'

function Body() {
  return (
    <div className="flex">
      <SideBar />
      <MainContener/>
    </div>
  )
}

export default Body