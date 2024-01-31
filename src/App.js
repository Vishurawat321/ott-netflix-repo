import React from 'react';
import './App.css';
import Homescren from './pages/homescreen';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Logins from './pages/logins';

function App() {

  return (
    <div className="app">
      <Router>
   
        
    <Routes>
        <Route exact path='/homescreen' element={<Homescren/>}/>

        <Route/>
        <Route  exact path='/' element={<Logins />}/>
      </Routes>
      
       
      </Router>
    </div>
  );
}

export default App;
