import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <Link className='navbutton' to={`/`}> Sign Up </Link>
        <Link className='navbutton' to={`/`}> Login </Link>
        <Link className='navbutton' to={`/`}> Home </Link>
        <Link className='navbutton' to={`/`}> Away </Link>
        <Link className='navbutton' to={`/users`}> Users </Link>
      </div>
    )
  }

}

export default Navbar
