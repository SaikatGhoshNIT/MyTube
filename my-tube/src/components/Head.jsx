import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import YoutubeSearchedForTwoToneIcon from '@mui/icons-material/YoutubeSearchedForTwoTone';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import logo from "../undraw_video_files_fu10.svg";

function Head() {
  return (
    <div className="flex flex-row items-center justify-between py-0 px-4 h-[54px] shadow-lg">
      <div className="flex items-center justify-center">
        <button className='pr-3'><MenuRoundedIcon sx={{ fontSize: 30 }}/></button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhL0D8KyXbvENy862ZywENdz7idTIu5h-ASA&usqp=CAU" alt="Logo" className="h-12"/>
        <span className="font-bold font-serif text-lg text-red-500">MyTube</span>
      </div>
      <div className=''>
        <input type="text" className="border-solid"/>
        <button><YoutubeSearchedForTwoToneIcon fontSize="small"/></button>
        <button className='p-[1px] rounded-full bg-red-200 ml-8'><KeyboardVoiceIcon sx={{ fontSize: 30 }}/></button>
      </div>
      <div className='flex justify-between pr-5'>
        <button className='pl-4'><NotificationsActiveIcon  sx={{ fontSize: 30 }}/></button>
        <button className='pl-4'><AccountCircleIcon  sx={{ fontSize: 30 }}/></button>
      </div>
    </div>
  )
}

export default Head
