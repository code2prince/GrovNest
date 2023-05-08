import React from 'react'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import Contact from "./component/Contact/contact";

import './App.css';
const App = () => {
  return (
      <div className='App-header'>
        {/* <h1>App</h1> */}
        <Header/>
        <Contact/>
        <Footer/>
      </div>
  )
};

export default App

