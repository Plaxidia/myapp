import React, { Component } from 'react'

class Counter extends Component {

    constructor(props)
    {
        super()
        {
            this.state ={
                count :0
            }
        }
    }
    increment()
    {
        //changing the state of the component direcly
        //this.state.count=this.state.count + 1
        //console.log(this.state.count)

        /*this.setState(
            {
            count: this.state.count +1//set the state value
            },
            ()=>{
                    console.log('Callback value',this.state.count)
                 })
                 */
                this.setState((prevState) => ({
                    count:prevState.count + 1
                    //render the ui based on the state
                }))
        console.log(this.state.count)
    }
    incrementfive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
        <div>
             <div>Count - {this.state.count}</div>
             <button onClick={()=> this.incrementfive()}>Increment</button>
        </div>

    )
  }
}

export default Counter
//rce and create a class components