import './App.css';
import React,{useState, useEffect} from 'react'
import Header from './components/Header';
import Body from './components/Body';


import { Link, Outlet } from 'react-router-dom';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RewardPage from './components/RewardPage';





function App() {
  const [searchTerm, setSearchTerm]=useState("")

  return (
    
    <div className="App">
      <Header />
      <Outlet context={[searchTerm, setSearchTerm]} />
     
    </div>
  );
}

export default App;

    