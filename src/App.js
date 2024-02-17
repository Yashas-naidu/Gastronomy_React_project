import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './proper/home';
import Blog from './blogpage/template';
import Chef from './chef/calltop'
import Login from './Intropage/signinpage'
import Signup from './Intropage/signup'
import Profile from './profilepage/profile'
import Bot from './Bot/dialogueflow'
import Allinone from './components/recipes/Allinone';
import Baigan from './items/baigan';
import India from './components/recipes/indian';
import Mexico from './components/recipes/mexican';
import France from './components/recipes/french';
import Brazil from './components/recipes/brazilian';
import Greece from './components/recipes/greek';
import Italy from './components/recipes/italian';
import China from './components/recipes/chinese';
import Japan from './components/recipes/japanese';
import VideoGrid from './tutorial/video';
import RedAntChutney from './items/redant';
import Ghevar from './items/ghevar';
import BisiBeleBaath from './items/belebath';
import RotiandSaag from './items/Makke';
import Okonomiyaki from './items/okono';
import Miso from './items/miso';
import Karaagi from './items/karara';
import Doriyaki from './items/doriya';
import Omurice from './items/omu';
import Congee from './items/congee';
import Kungpao from './items/kung';
import Pumpkin_pie from './items/pie';
import Wontonsoup from './items/wonton';
import Scallion_pancake from './items/scalion';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/chef" element={<Chef/>} />
        <Route path="/Gastronomy_React_project" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/bot" element={<Bot/>} />
        <Route path="/recipes" element={<Allinone/>} />
        <Route path="/baigan" element={<Baigan/>} />
        <Route path="/red" element={<RedAntChutney/>} />
        <Route path="/Ghevar" element={<Ghevar/>} />
        <Route path="/Bisi" element={<BisiBeleBaath/>} />
        <Route path="/Makke" element={<RotiandSaag/>} />
        <Route path="/Okonomiyaki" element={<Okonomiyaki/>} />
        <Route path="/Miso" element={<Miso/>} />
        <Route path="/karaage" element={<Karaagi/>} />
        <Route path="/Doriyakis" element={<Doriyaki/>}/>
        <Route path="/Omu" element={<Omurice/>}/>
        <Route path="/Congee" element={<Congee/>}/>
        <Route path="/Kung" element={<Kungpao/>}/>
        <Route path="/Pie" element={<Pumpkin_pie/>}/>
        <Route path="/Wonton" element={<Wontonsoup/>} />
        <Route path="/Pancakes" element={<Scallion_pancake/>} />
        <Route path="/indian" element={<India/>} />
        <Route path="/japanese" element={<Japan/>} />
        <Route path="/chinese" element={<China/>} />
        <Route path="/italian" element={<Italy/>} />
        <Route path="/brazilian" element={<Brazil/>} />
        <Route path="/french" element={<France/>} />
        <Route path="/mexican" element={<Mexico/>} />
        <Route path="/greek" element={<Greece/>} />
        <Route path="/tutorial" element={<VideoGrid/>} />
      
      </Routes>
    </Router>
  );
}

export default App;  



