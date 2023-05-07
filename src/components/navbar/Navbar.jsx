import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon  from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {

  const { dispatch } =  useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search...' />
        <SearchOutlinedIcon />
      </div>
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className='icon'/>
          English
        </div>
        
        <div className="item">
          <DarkModeOutlineIcon  className='icon darkModeOff' onClick={
            ()=>dispatch({type: "TOGGLE"})} />
            <Brightness5Icon  className='icon darkModeOn' onClick={
            ()=>dispatch({type: "TOGGLE"})} />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon  className='icon' />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon  className='icon' />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon  className='icon' />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon  className='icon' />
        </div>
        <div className="item">
          <img src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
          alt='' 
          className='avatar'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar