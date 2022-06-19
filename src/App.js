import React ,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
//import {Greet }from './Components/Greet'
import Welcome from './Components/welcome';
import Hello from './Components/hello';
function App() {
  
  return (
    <div className="App">
     <Greet name = "Hove" surname = "xove">
      <p1> this is children props</p1>
      </Greet>
          <Greet name = "Pee" surname = "xove">
            <button>Action</button>

          </Greet>
     <Greet name = " A.Hove" surname = "xove">

     </Greet>
     <Welcome name =" ednah" surname =" maama"></Welcome>
     <Welcome name =" Neldah" surname =" Mbhena"></Welcome>
    </div>
  );
  
}

export default App;
