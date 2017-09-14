import React from 'react'
import Navbar from './navbar'

class App extends React.Component {

  render() {
    return (
      <div>
        <p> Whole App </p>
        {this.props.children}
      </div>
    )
  }

}

export default App
