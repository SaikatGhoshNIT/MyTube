import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import YoutubeSearchedForTwoToneIcon from '@mui/icons-material/YoutubeSearchedForTwoTone';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Head() {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <button><MenuRoundedIcon fontSize="large"/></button>
        <img src="https://t3.ftcdn.net/jpg/05/07/46/84/240_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg" alt="Logo" />
      </div>
      <div>
        <input type="text" />
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
