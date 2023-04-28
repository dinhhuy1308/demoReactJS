import React, { Component } from 'react'

export default class Event extends Component {
    handleShowMessage = (message) => {
        alert(message)
    }

  render() {
    let message = 'Huy đẹp trai 123'

    return (
      <div className='container'>
        {/* <button className="btn btn-success" onClick={this.handleShowMessage}>Show Message</button> */}
        <button className="btn btn-success" onClick={() => this.handleShowMessage(message) }>Show Message</button>
      </div>
    )
  }
}
