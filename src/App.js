import React ,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
//import {Greet }from './Components/Greet'
import Welcome from './Components/welcome';

function App() {
  
  return (
    <div className="App">
     <Greet></Greet>
     
      <Welcome> </Welcome>
    </div>
  );
  
}

export default App;
