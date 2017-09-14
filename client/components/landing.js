import React from 'react'
import Navbar from './navbar'


class Landing extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <p className='centered'> Welcome to the landing page. From here you can navigate to the various parts of the app.  </p>
      </div>
    )
  }

}

export default Landing
