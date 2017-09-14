import React from 'react'


class Navbar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <button className='navbutton'> Sign Up </button>
        <button className='navbutton'> Login </button>
        <button className='navbutton'> Home </button>
        <button className='navbutton'> Away </button>
        <button className='navbutton'> Users </button>
      </div>
    )
  }

}

export default Navbar
