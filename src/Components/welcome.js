
import React,{Component} from "react";

class Welcome extends Component
{
   render ()
    { 
        const {name,surname} =this.props
       
        return (
        <h1> 
            {/*Welcome{this.props.name} a.k.a{this.props.surname}*/}
            Welcome{name} a.k.a{surname}

        </h1>
        )
    }
}
export default Welcome;
