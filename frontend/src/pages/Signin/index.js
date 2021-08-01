import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header'

import HeroLogo from '../../assets/hero03.png'
import LogoSignin from '../../assets/DevConnect2.png'

function Signin() {
  return (
    <>
      <Header/>
      <div className="main-signin">
        <div className="main-content">
          <img className="imagemLogo" src={HeroLogo} alt="Hero Logo" />
          <div className="form">
            <form>
              <img src={LogoSignin} alt="Logo Signin" />
              <input 
                placeholder="E-mail"
              />
              <input 
                placeholder="Senha"
                type="password"
              />
            </form>
            <button className="buttonSignin">Entrar</button>
            <div className="buttonTextRegister">
              <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
