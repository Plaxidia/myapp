import React ,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
//import {Greet }from './Components/Greet'
import Welcome from './Components/welcome';
import Hello from './Components/hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClickFunction from './Components/ClickFunction';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Childcomponent from './Components/Childcomponent';

function App() {
  
  return (
    <div className="App">

      <ParentComponent/>
      {/*<EventBind/>
      

      <ClickFunction/>
      <ClassClick/> 
      <Counter>

      </Counter>
      
      <Message/>
  
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
     <Hello/>

  */}
  
    </div>
  );
  
}

export default App;
