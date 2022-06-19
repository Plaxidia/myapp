import React from "react";
/*function Greet()
{
    return<h1> Hello its Plaxidia</h1>
}
*/

//export const Greet =()=>  return<h1> Hello ,its Plaxidia</h1>
//const Greet =(props)=>
//const Greet =({name,surname})=>// first way to destructure 
const Greet =(props)=>
{
    const{name,surname} = props// second way to descructure
    
    //console.log(props);
    return(
        <div>
            <h1> 
                {/*Hello {props.name} a.k.a {props.surname}*/}
                Hello {name} :{surname}

            </h1>
             {/*props.children*/}
        </div>
    )
}
export default Greet;