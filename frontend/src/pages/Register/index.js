import React from 'react'
import {Link} from 'react-router-dom';
import './styles.css';

import Header from '../../components/Header'

import LogoRegister from '../../assets/DevConnect2.png'

function Signin() {
  return (
    <>
      <Header/>
      <div className="main-register">
        <div className="main-register-content">
          <div className="form">
            <form>
              <img src={LogoRegister} alt="Logo Register" />
              <h1>Cadastre-se para ver fotos de outros desenvolvedores.</h1>
              <input 
                placeholder="Nome"
              />
              <input 
                placeholder="Nome de usuário"
              />
              <input 
                placeholder="E-mail"
                type="email"
              />
              <input 
                placeholder="Senha"
                type="password"
              />
            </form>
            <button className="buttonSignin">Cadastrar</button>
            <div className="buttonTextRegister">
              <p>Já tem uma conta? <Link to="/">Entrar</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
