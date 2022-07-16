import React, { Component } from 'react'

class Usergreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
  render() {
    return(
    this.state.isLoggedin &&  <div>Welcome Plaxidia</div>
)

    /*
    //ternary operator
    return(
        this.state.isLoggedin ?
        <div>Welcome Plaxidia</div>:
        <div>Welcome Guest</div>
    )
    
    -------
    let message 
    if (this.state.isLoggedin){
        message = <div>Welcome Plaxidia</div>
    }else{
        message = <div>Welcome Guest</div>
    }
    return(
        <div> {message}</div>
    )


----------
    if(this.state.isLoggedin){
        return(
            <div>
                Welcome Plaxidia
            </div>
        )
    }else{
        return(
            <div>
                Welcome guest
            </div>
        )
    }
    
    return (
        <div>
            <div>
                Welcome Plaxidia
            </div>
            <div>
                Welcome guest
            </div>
        </div>
    )*/
  }
}

export default Usergreetings