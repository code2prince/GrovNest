import React from 'react';
import './header.css';
import IMG from '../../asserts/logo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsBellFill } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <div className='header_container'>
        <div className='container_img'>
          <img width={50} src={IMG} alt="header-img" />
        </div>
        <div >Dashboard</div>
        <nav className='nav'>
          <a href='#'><AiOutlineMail /></a>
          <a href='#'><CgProfile /></a>
          <a href='#'><BsBellFill /></a>
        </nav>

      </div>

    </>
  )
}

export default Header

