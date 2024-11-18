import React from 'react'

function VideoCard({info}) {

    //const {info} = props;

    //console.log(info);

    const {snippet, statistics} = info;

    const {channelTitle, title, thumbnails} = snippet
    

  return (
    <div className='p-2 m-2 w-80 h-80 shadow-lg hover:w-100 hover:shadow-black hover:rounded-2xl'>
        <img className='rounded-lg hover:w-96 hover:h-auto' src={thumbnails.medium.url} alt="Thumbnail" />
        <ul className='p-2'>
            <li className='font-bold pb-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>Views: {statistics.viewCount}</li>
        </ul>
        
    </div>
  )
}

export default VideoCard