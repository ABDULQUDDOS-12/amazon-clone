import React, { useState } from 'react';
import amazonLogo from './images/amazonlogo.svg';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
        if(auth){
          navigate('/');
        }
      })
      .catch((error) => {
        // Error occurred during sign in
        console.error('Error signing in:', error);
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // User registered and signed in successfully
        const user = userCredential.user;
        console.log('User registered and signed in:', user);
        if(auth){
          navigate('/');
        }
      })
      .catch((error) => {
        // Error occurred during registration
        console.error('Error registering user:', error);
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={amazonLogo} alt="" className="login_logo" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login_signInButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Privacy Notice, Our cookies Notice and our
          interest-Based Ads Notice
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
