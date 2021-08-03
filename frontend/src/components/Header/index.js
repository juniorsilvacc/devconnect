import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {BsBoxArrowRight} from 'react-icons/bs';
import {AiOutlineCamera} from 'react-icons/ai';

import './styles.css'

import LogoHeader from '../../assets/DevConnect.png';

function Header() {

  const history = useHistory();

  function loggoutHandler(){
    localStorage.clear();
    history.push("/")
  }

  return (
    <header className="main-header">
      <div className="header-content">
        <>
          <Link to="/feed">
            <img src={LogoHeader} alt="DevConnect" />
          </Link>
          <div className="headerIcon">
            <Link to="/post">
              <AiOutlineCamera size={25} />
            </Link>
            <Link onClick={loggoutHandler}>
              <BsBoxArrowRight size={25} />
            </Link>
          </div>
        </>
      </div>
    </header>
  )
}

export default Header
