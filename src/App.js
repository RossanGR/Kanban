import React from 'react';
import './App.css';
import logo from "./kanban.png";
import Navbar from './components/Navbar';
import Cards from './components/Cards';


function App() {

  return (
    <>
      <Navbar logo={logo}/>
      <Cards/>    
    </>
  );
}

export default App;
