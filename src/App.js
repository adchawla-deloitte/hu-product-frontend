import React from 'react';
import {useState} from 'react';
import './App.css';
import Navibar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Music from './pages/Music';
import More from './pages/More';

function App() {
  const [inactive, setInactive] = useState(false);
  return (
   
    <>
      <Router>
        <Navibar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' component={Movie} />
          <Route path='/music' component={Music} />
           <Route path='/more' component={More}/> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
