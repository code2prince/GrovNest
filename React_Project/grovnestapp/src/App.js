import React from 'react'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import Contact from "./component/Contact/contact";
import sideMenu from './component/SideMenu/sideMenu';

import './App.css';
const App = () => {
  return (
      <div className='App-header'>
        {/* <h1>App</h1> */}
        <Header/>
        <space>
          <sideMenu></sideMenu>
        </space>
        <Contact/>
        <Footer/>
      </div>
  )
};

export default App

