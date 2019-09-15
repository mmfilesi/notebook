import React, { useState } from 'react';
import { getAuth } from '../../core/services/auth';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const doLogin = () => {
    setError(false);
    if (!userName || !userPassword) {
      setError(true);
      setErrorMsg('Required');
      return;
    }
    getAuth(userName, userPassword).then((isUserValid) => {
      if (isUserValid) {
        props.history.push('/dashboard');
      } else {
        setError(true);
        setErrorMsg('YOU SHALL NOT PASS!')
      }
      
    });
  }

  return (
    <div>
      <h3 className="banner" role="banner" aria-level="1">Login</h3>
      {error && 
        <div data-qa="error-message" className="msg msg--error">
          {errorMsg}
        </div>
      }
      <label data-qa="auth-name-label" htmlFor="name" data-qa="auth-name-label">Name
        <input data-qa="auth-name-input" type="text" name="name" id="name" required
          value={userName}
          onChange={e => setUserName(e.target.value)}
        ></input>
        <button role="button" data-qa="auth-name-reset" 
          onClick={() => setUserName('')}>
            X
          </button>
      </label>

      <label data-qa="auth-password-label" htmlFor="pwd">password
        <input data-qa="auth-password-input" type="password" name="pwd" id="pwd" required
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
        >
        </input>
        <button role="button"  data-qa="auth-password-reset" 
          onClick={() => setUserPassword('')}>
            X
          </button>
      </label>

      <button data-qa="auth-submit"
        role="button"
        onClick={doLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;
