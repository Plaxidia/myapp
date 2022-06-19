import React from "react";
//create a function that returns what appers to be html but it is jsx

/*const Hello =()=>
{
    return (
        <div>
            <h1>
                It's me again
            </h1>
        </div>
    )
}*/
//Re-write the components without using jsx

const Hello =()=>
{
    return React.createElement(
        'div',//first parameter is a string with an html tag which specifies which tag to be renderd
        {id :'hello', className: ' dummyClass'},//second parameter pass any optional properties
         React.createElement('h1',null,' its mee again '));//third parameter is the child of the html parameter this method accepts at least 3 parameters

}
export default Hello;