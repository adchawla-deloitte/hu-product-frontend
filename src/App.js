import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.js';
import Music from './pages/Music.js';
import Movies from './pages/Movies.js';
import Search from './pages/Search.js';
import More from './pages/More';
import FolderContent from './pages/FolderContent'

const App = () => {
  return (
    <>
     <div className="App">
    <header className="App-header">
      <div className="left">
        <div className='logo'>LNMS</div>
        </div>
     <div className="right">
     <div className='rigsea'> </div> 
      </div> 
    </header>
  </div> 
  <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/search' element={<Search />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path='/more' element={<More />}/> 
          <Route path='/folder/:id' element={<FolderContent />}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
   
  );
};

export default App;