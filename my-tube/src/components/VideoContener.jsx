import React, { useState } from 'react'
import { useEffect } from 'react'
import {YOUTUBE_API} from '../utils/constant.js'

function VideoContener() {

const [videos, setVideos] = useState();

useEffect(()=>{
  getVideos()
},[])

const getVideos = async () => {
  const data = await fetch(YOUTUBE_API)
  const dataJSON = await data.json()
  console.log(dataJSON);
  setVideos(data.items)
}

  return (
    <div className='p-5 m-2'>VideoContener</div>
  )
}

export default VideoContener