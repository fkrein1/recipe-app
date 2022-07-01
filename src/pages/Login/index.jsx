import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const regex = /\S+@\S+\.\S+/;
  const minPassword = 6;

  function btnSubmit() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/foods');
  }

  return (
    <div id="login-wrapper">
      <div id="logo">
        <img src={ logo } alt="logo" />
        <h1>Recipe App</h1>
      </div>
      <input
        className="input"
        id="email"
        type="text"
        placeholder="Insert your mail"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <button
        type="button"
        id="loginBtn"
        disabled={ !(regex.test(email)) }
        onClick={ btnSubmit }
      >
        Login
      </button>
    </div>

  );
}

export default Login;
