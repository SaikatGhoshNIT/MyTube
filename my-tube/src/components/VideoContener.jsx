import React, { useState } from 'react'
import { useEffect } from 'react'
import {YOUTUBE_API} from '../utils/constant.js'
import VideoCard from './VideoCard.jsx';

function VideoContener() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const dataJSON = await data.json();
    
    console.log(dataJSON.items[0]);  // This will log the first item from the API
    setVideos(dataJSON.items);       // This sets the state asynchronously
  };

 // Log videos after the state has updated
//  useEffect(() => {
//   console.log(videos);  // This will log when `videos` is updated
// }, [videos]);  // Runs this effect whenever `videos` changes

  return (
    <div className='p-5 m-2 flex flex-wrap'>
      {/*videos.map(video =><VideoCard key={video.id} info={video}/>)*/}
      {/*<VideoCard info={videos[0]}/>*/} 
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))
      ) : (
        <div className="relative w-full h-48">
      <div className={`bg-gray-300 animate-shimmer ${shimmer ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-gray-200 h-10 w-full mb-4"></div>
        <div className="bg-gray-200 h-2 w-3/4"></div>
      </div>
    </div>  // Fallback when videos are still being fetched
      )}
    </div>
  )
}

export default VideoContener