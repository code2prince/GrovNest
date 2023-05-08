import React from 'react';
import './header.css';
import IMG from '../../asserts/logo.png';

const Header = () => {
  return (
    <>
    <div className='container'>
      <div className='ima'>
        
        <img src={IMG} alt="header-img"/>
        <h3>image</h3>
        <h5>Home</h5>
        <h6>profile</h6>
      </div>
     <h2>Welcome to ...</h2> 
     
    </div>
    
    </>
  )
}

export default Header