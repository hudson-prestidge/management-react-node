import React from 'react'
import Navbar from './navbar'


class Users extends React.Component {

  render() {
    return (
      <div classname='users'>
        <Navbar />
        <p className='centered'> Welcome to the users page. From here you can browse the list of users.  </p>
      </div>
    )
  }

}

export default Users
