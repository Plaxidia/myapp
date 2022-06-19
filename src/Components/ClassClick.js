import React, { Component } from 'react'

export class ClassClick extends Component {
 clickHandler() {
        console.log('Click the button')
    }
  render() {
    return (
      <div>
        <button onClick ={ this.clickHandler}> Click Here</button>
      </div>
    )
  }
}

export default ClassClick
//rce to create class component