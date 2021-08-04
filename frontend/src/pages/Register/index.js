import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './styles.css';

import HeaderOff from '../../components/HeaderOff'

import LogoRegister from '../../assets/DevConnect2.png'

import api from '../../services/api';

function Signin() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function registrationHandler(e){
    e.preventDefault();

    try {

      const response = await api.post('users', {
        name,
        username,
        email,
        password
      })

      alert('Usuário cadastrado com sucesso!');
      const {data} = response;

      const userId = data.data._id;
      const userEmail = data.data.email;

      localStorage.setItem('devUserId', userId);
      localStorage.setItem('devUsername', userEmail);

      history.push('/feed')

    } catch (error) {

      alert('Erro ao cadastrar usuário, tente novamente!');

    }

  }

  return (
    <>
      <HeaderOff/>
      <div className="main-register">
        <div className="main-register-content">
          <div className="form">
            <form>
              <img src={LogoRegister} alt="Logo Register" />
              <h1>Cadastre-se para ver fotos de outros desenvolvedores.</h1>
              <input 
                placeholder="Nome"
                value={name}
                onChange={e=>setName(e.target.value)}
              />
              <input 
                placeholder="Nome de usuário"
                value={username}
                onChange={e=>setUsername(e.target.value)}
              />
              <input 
                placeholder="E-mail"
                type="email"
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
              onClick={registrationHandler}
            >Cadastrar</button>
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
