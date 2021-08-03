import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import './styles.css';

import HeaderOff from '../../components/HeaderOff';

import HeroLogo from '../../assets/hero03.png';
import LogoSignin from '../../assets/DevConnect2.png';

import api from '../../services/api';

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function loginHandler(e) {
    e.preventDefault();
    
    try {

      const response = await api.post('signin', {
        email,
        password
      })

      const {data} = response;
      const userId = data.data._id;
      const username = data.data.email;

      localStorage.setItem('devUserId', userId);
      localStorage.setItem('devUsername', username);

      history.push('/feed');
    } catch (error) {
      alert('Erro ao cadastrar usuário, tente novamente!');
    }

  }


  return (
    <>
      <HeaderOff/>
      <div className="main-signin">
        <div className="main-content">
          <img className="imagemLogo" src={HeroLogo} alt="Hero Logo" />
          <div className="form">
            <form>
              <img src={LogoSignin} alt="Logo Signin" />
              <input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <input 
                placeholder="Senha"
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </form>
            <button 
              className="buttonSignin" 
              onClick={loginHandler}
            >Entrar</button>
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
