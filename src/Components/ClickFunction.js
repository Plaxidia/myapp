import React from 'react'

function ClickFunction() {
    function clickHandler()
    {
        console.log('Button clicked')
    }


    return (
         <div>
             <button onClick = {clickHandler}>Click</button>
         </div>
  )
}
export default ClickFunction
//rfce to create function  component