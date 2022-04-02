import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';
import IntroScreen from './components/IntroScreen';
import ScoutsList from './components/ScoutsList';
import TitanList from './components/TitanList';
import Header from './components/Header';
import TitanCard from './components/TitanCard';
import Body from './components/Body';
import ScoutSignUp from './components/ScoutSignUp';
import RewardPage from './components/RewardPage';

import YouDare from './components/YouDare'
import Level2 from './components/Level2';



const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);



root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
          <Route path="home" element={<App />}>
            <Route path='scouts' element={<ScoutsList />} />
            <Route path='sign-up' element={<ScoutSignUp />} />
            <Route path='titans' element={<TitanList />} />
            <Route path='about' element={<Body />} />
          </Route>
          <Route path='level1' element={<YouDare />} />
          <Route path='level2' element={<Level2/>} />
          <Route path='rewardPage' element={<RewardPage/>} />
      </Routes>
    </Router>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
