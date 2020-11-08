import React from 'react'
import { Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.util'
import './Header.scss'

const Header = ({currentUser}) => (
<div className='Header'>
  <Link to='/'>Home</Link>
  
  {
    currentUser ?
    (<span className='option' onClick={()=>auth.signOut()}>Log out</span>)
    :
    (<Link className='option' to='/login'>Log in</Link>)
  }
  
  </div>
)

export default Header;