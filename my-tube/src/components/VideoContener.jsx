import React from 'react'
import { useEffect } from 'react'
import {YOUTUBE_API} from '../utils/constant.js'

function VideoContener() {

useEffect(()=>{
  getVideos()
},[])

const getVideos = async () => {
  const data = await fetch(YOUTUBE_API)
  const dataJSON = await data.json()
  console.log(dataJSON);
}

  return (
    <div>VideoContener</div>
  )
}

export default VideoContener