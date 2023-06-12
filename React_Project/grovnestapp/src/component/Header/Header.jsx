import React from 'react';
import './header.css';
import IMG from '../../asserts/grovnest logo.jpg';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineBell } from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <div className='header_container'>
          <div className='container_img'>
            <div>
              <img width={50} src={IMG} alt="header-img" />
            </div>
            <div className='header_item'>
                <div>
                  <a href='#'><button type='button' className='home-btn'>Home</button></a>
                </div>
                <div>
                  <select className='project' id="project">
                  <option value="project">Project</option>
                  <option value="Select1">Select1</option>
                  <option value="Select2">Select2</option>
                  <option value="Select3">Select3</option>
                  </select>
                </div>
                <div className='analysis'>Analysis</div>
            </div>
          </div>
        {/* <div >Dashboard GrovNest</div> */}
        <nav className='nav'>
          <a href='#'><AiOutlineQuestionCircle /></a>
          <a href='#'><AiOutlineBell /></a>
          <a href='#'><CgProfile /></a>
          
        </nav>

      </div>

    </>
  )
}

export default Header

