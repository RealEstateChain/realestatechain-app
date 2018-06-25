import React, { Component } from 'react'

import logo from '../../logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>To Do</h1>
            <br/><br/>
          </div>
        
        </div>
      </main>
    )
  }
}

export default Home
