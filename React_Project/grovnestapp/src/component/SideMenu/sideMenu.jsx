import React from 'react';
import {MdOutlineDashboardCustomize} from 'react-icons/md';
import {AiOutlineCompass} from 'react-icons/ai';
import {TbClipboardText} from 'react-icons/tb';
import {VscGraph} from 'react-icons/vsc';
import {SlEnergy} from 'react-icons/sl';
import {BsPeople} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BsPerson} from 'react-icons/bs';
import './sideMenu.css';

const sideMenu = () => {
  return (
    <>
    <div className='grid-twenty-eighty'>
    
        <div className='counseling'>
            <div><BsPerson/></div> 
            <div>
              <h4>Counseling</h4>
              <div>Category</div>
            </div>
        </div>

        <div><a href="#"><MdOutlineDashboardCustomize/> Board</a></div>
        <div><a href="#"><TbClipboardText/> Backlog</a></div>
        <div><a href="#"><AiOutlineCompass/> Roadmap</a></div>
        <div><a href="#"><VscGraph/> Report</a></div>
        <div><a href="#"><SlEnergy/> Releases</a></div>
        <hr/>
        <div><a href="#"><BsPeople/> Connection</a></div>
        <div><a href="#"><FiSettings/> Project Setting</a></div>

    </div>
    </>
  )
}

export default sideMenu;
