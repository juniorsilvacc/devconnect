import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'

import {isLogged} from '../../helpers/AuthHandler'

import Logo from '../../assets/DevConnect.png';
import Camera from '../../assets/camera.svg';

function Header() {

  let logged = isLogged();

  return (
    <header className="main-header">
      <div className="header-content">
        {!logged &&
          <>
            <Link to="/">
              <img src={Logo} alt="DevConnect" />
            </Link>
          </>
        }
        {logged &&
          <>
            <Link to="/">
              <img src={Logo} alt="DevConnect" />
            </Link>
            <Link to="/post">
              <img src={Camera} alt="Postar publicação" />
            </Link>
          </>
        }
      </div>
    </header>
  )
}

export default Header
