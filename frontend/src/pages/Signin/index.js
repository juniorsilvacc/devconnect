import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header'

import HeroLogo from '../../assets/hero-img.png'
import Logo from '../../assets/DevConnect.png'

function Signin() {
  return (
    <>
      <Header/>
      <div className="main-signin">
        <div className="main-content">
          <img className="imagemLogo" src={HeroLogo} alt="" />
          <div className="form">
            <form>
              <img src={Logo} alt="" />
              <input 
                placeholder="Usuário"
              />
              <input 
                placeholder="Senha"
              />
            </form>
            <button className="buttonSignin">Entrar</button>
            <div className="buttonTextRegister">
              <p>Não tem uma conta? <Link>Cadastre-se</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
