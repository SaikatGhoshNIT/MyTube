import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {
  const isMenuOpen = useSelector(store => store.app.menuOpen);

//early Return pattern
if(!isMenuOpen) return null

  return (
    <div className="p-5 shadow-md w-48">
    <ul>
      <li> <Link to={"/"}> Home </Link></li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>

    <hr/>

    <ul className="font-mono pt-5">
      <li>You</li>
      <li>History</li>
    </ul> 

    <hr/>
    
    <h1 className="font-bold pt-5">Subscription</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul> 

    <hr/> 

    <h1 className="font-bold  pt-5">Popular</h1>
    <ul>
      <li>Bani's Kobita</li>
      <li>NewsLaundry</li>
      <li>Mirchi Bangla</li>
      <li>Lipi's Blog</li>
      <li>Mom's Kitchen</li>
      <li>Kolkata</li>
      <li>NIT Durgapur</li>
      <li>Immortal Gaming</li>
    </ul>
    </div>
  )
}

export default SideBar