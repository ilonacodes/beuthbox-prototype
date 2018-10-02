import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import logo from './img/logo.png';

const hamburgerMenu = css`
  font-size: 28px;
  padding: 10px 20px;
  flex: 1;
`;

const searchInput = css`
  padding: 10px 20px;
  flex: 1;
  text-align: right;
 
  input {
    width: 120px;
    height: 20px;
    margin-top: 5px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #222;
    
    &:focus {
      outline: 0;
    }
  }
`;

const Logo = css`
  width: 100px;
  flex: 1;
  padding-top: 10px;
`;

const NavContainer = styled('div')`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-shadow: 3px 3px 4px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 4px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 4px 4px -1px rgba(0,0,0,0.75);
`;

export const Navigation = () => {
    return (
        <NavContainer>
            <div className={hamburgerMenu}>&#9776;</div>
            <div><img className={Logo} src={logo} alt=""/></div>
            <div className={searchInput}><input type="text" placeholder="Search"/></div>
        </NavContainer>
    );
};