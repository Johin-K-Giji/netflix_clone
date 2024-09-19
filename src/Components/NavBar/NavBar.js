import React from 'react'
import './NavBar.css'
import '../../App.css'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        {/* <ul className='list'>
          <li className='sublist'>Home</li>
          <li className='sublist'>News</li>
          <li className='sublist'>Contact</li>
          <li className='sublist'>About</li>
        </ul> */}

        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default NavBar