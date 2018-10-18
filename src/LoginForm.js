import React from 'react';
import {Navigation} from './Navigation';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import {Footer} from './Dashboard';
import {css} from 'emotion';
import {Link} from 'react-router-dom';

const userDataContainer = css`
  display: flex;
  height: auto;
  width: 100%;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  
  h2 {
   font-size: 28px;
   color: #00A5A5;
   letter-spacing: 1px;
  }
  
  button {
    margin-top: 20px;
    font-size: 16px;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    background-color: #00A5A5;
    color: white;
    width: 110px;
    align-self: center;
    height: 35px;
    outline: 0;
    
    &:hover {
      border: 1px solid white;
      cursor: pointer;
    }
  }
  
  a {
    color: white;
    margin-top: 30px;
    font-size: 14px;
    &:hover {
      color: #00A5A5;
      cursor: pointer;
    }
  }
`;

const userData = css`
  display: flex;
  justify-content: center;
 
  p {
    color: white;
    font-size: 14px;
  }
  
  .user {
    margin-right: 20px;
  }
  
  .password {
    margin-right: 55px;
  }
  
  input {
     height: 20px;
     padding-right: 50px;
     padding-left: 5px;
     align-self: center;
  }
`;

const userDataCenter = css`
  display: flex;
  width: 280px;
  justify-content: flex-start;
`;

const LoginFormContent = ({login}) => {
    return(
        <div className={userDataContainer}>
            <h2>Login</h2>
            <div className={userData}>
                <div className={userDataCenter}>
                    <p className="user">Benutzername:</p>
                    <input type="text" placeholder="KarlOtto"/>
                </div>
            </div>
            <div className={userData}>
                <div className={userDataCenter}>
                    <p className="password">Passwort:</p>
                    <input type="password" placeholder="● ● ● ● ● ● ● ●"/>
                </div>
            </div>
            <button onClick={login}>Anmelden</button>
            <a>Passwort vergessen? Hilfe!</a>
        </div>
    );
}

export const LoginForm = ({onSetSidebarOpen, login}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen} />
            <LoginFormContent login={login} />
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};