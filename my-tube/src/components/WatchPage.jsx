import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/menu';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
   const [searchParams] = useSearchParams();
   //const params = useParams();
   console.log(searchParams.get("v"));
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='py-6 pl-20 m-2'>
    <iframe className='rounded-xl' width="1080" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage