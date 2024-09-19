import React from 'react'

function VideoCard(props) {

    const {info} = props;

    console.log(info);

    //const {snippet, statistics} = info;

    //const {channelTitle, title, thumbnails} = snippet
    

  return (
    <div className='p-2 m-2 w-80 shadow-lg rounded-lg'>
        {/*<img className='rounded-lg' src={thumbnails.medium.url} alt="Thumbnail" />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>Views: {statistics.viewCount}</li>
        </ul>*/}
    </div>
  )
}

export default VideoCard