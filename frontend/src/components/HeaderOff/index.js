import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'

import LogoHeader from '../../assets/DevConnect.png';

function HeaderOff() {
  return (
    <header className="main-header">
      <div className="header-content">
        <>
          <Link to="/">
            <img src={LogoHeader} alt="DevConnect" />
          </Link>
        </>
      </div>
    </header>
  )
}

export default HeaderOff
