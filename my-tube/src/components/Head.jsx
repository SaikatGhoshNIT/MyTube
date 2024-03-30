import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import YoutubeSearchedForTwoToneIcon from '@mui/icons-material/YoutubeSearchedForTwoTone';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import logo from "../undraw_video_files_fu10.svg";

function Head() {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <button><MenuRoundedIcon fontSize="large"/></button>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <input type="text" className="border-solid"/>
        <button><YoutubeSearchedForTwoToneIcon fontSize="small"/></button>
        <button><KeyboardVoiceIcon fontSize="large"/></button>
      </div>
      <div>
        <button><NotificationsActiveIcon fontSize="large"/></button>
        <button><AccountCircleIcon fontSize="large"/></button>
      </div>
    </div>
  )
}

export default Head
