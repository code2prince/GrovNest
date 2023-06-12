import React from 'react'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import Contact from "./component/Contact/contact";
import SideMenu from './component/SideMenu/sideMenu';
import Body from './component/body/body'
import './App.css';
const App = () => {
  return (
    <>
      <div className='App-header'>
        <Header/>
      </div>
      <div className='ratio'>
        <SideMenu/>
        <Body/>
      </div>
      <Contact/>
      
          
        <Footer/>
    </>
  )
};

export default App

