import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            ROVE
        </div>
        <div className='nav-items'>
            <a href="#">GALLERY</a>
            <a className='info' href="#">INFO</a>
        </div>
      
    </div>
  )
}

export default Nav
