import React from 'react'
import ButtonList from './ButtonList'
import VideoContener from './VideoContener'

function MainContener() {
  return (
    <div className="px-8 mx-5 overflow-hidden">
        <ButtonList/>
        <VideoContener/>
    </div>
  )
}

export default MainContener