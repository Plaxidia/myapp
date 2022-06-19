import React from "react";
/*function Greet()
{
    return<h1> Hello its Plaxidia</h1>
}
*/

//export const Greet =()=>  return<h1> Hello ,its Plaxidia</h1>
const Greet =(props)=>
{
    
    console.log(props);
    return(
        <div>
    <h1> Hello {props.name} a.k.a {props.surname}</h1>
    {props.children}
    
    </div>
    )
}
export default Greet;