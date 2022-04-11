import './App.css';
import { useState } from 'react';
import { Container } from '@mui/material';
import jsCookie from 'js-cookie';
import Login from './components/Login';

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from './components/Router';

function App() {

  const [loginError, setLoginErorr] = useState(null);
  const [isLogin, setIsLogin] = useState(jsCookie.get('login') === 'true')
  const handleLogin = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
      jsCookie.set('login', true);
      setIsLogin(true);
      setLoginErorr(null)
    } else {
      setIsLogin(false);
      setLoginErorr('Please enter correct username and password');
    }
  }

 
  return (
    <Container>
      <BrowserRouter>
      {!isLogin
        ? <>
        <Link to="/post">posts</Link>
        <Login isOpen={true} onLogin={handleLogin} error={loginError} />
        </>
        : <>
        <Link to="/post">posts</Link>
        <Router/>
        </>
      }
      </BrowserRouter>
     
    </Container>

  );
}

export default App;
