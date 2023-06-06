import React from 'react'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import Contact from "./component/Contact/contact";
import SideMenu from './component/SideMenu/sideMenu';

import './App.css';
const App = () => {
  return (
    <>
      <div className='App-header'>
        <Header/>
      </div>
      
      <SideMenu/>
      <Contact/>
          
        <Footer/>
    </>
  )
};

export default App

