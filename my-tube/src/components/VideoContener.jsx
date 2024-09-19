import React, { useState } from 'react'
import { useEffect } from 'react'
import {YOUTUBE_API} from '../utils/constant.js'
import VideoCard from './VideoCard.jsx';

function VideoContener() {

const [videos, setVideos] = useState();

useEffect(()=>{
  getVideos()
},[])

const getVideos = async () => {
  const data = await fetch(YOUTUBE_API)
  const dataJSON = await data.json()
  console.log(dataJSON);
  //setVideos(dataJSON.items)
}

  return (
    <div className='p-5 m-2 flex flex-wrap'>
      {/*videos.map(video =><VideoCard key={video.id} info={video}/>)*/}  
      <VideoCard info={videos[0]}/>
    </div>
  )
}

export default VideoContener