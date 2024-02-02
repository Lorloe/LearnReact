import React from 'react'
import './styles.css'
import Search from '../Search/Search'
import Interact from '../Interact/Interact'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Logo/>
      <Search/>
      <Interact/>
    </div>
  )
}

export default Header
