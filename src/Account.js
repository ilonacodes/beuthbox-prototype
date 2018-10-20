import React from 'react';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import styled from 'react-emotion';
import {css} from 'emotion';

const AccountContainer = styled('div')`
  display: flex;
  margin-top: 80px;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: column;
`;

const title = css`
  font-size: 28px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const Option = styled('div')`
  display: flex;
  width: 600px;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid white;
  margin-top: 10px;
  padding-top: 10px;
  
  img {
    margin-bottom: 20px;
  }
`;

export const Account = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <AccountContainer>
                <div className={title}><p>Konto</p></div>
                <Option>
                    <p>Deine E-Mail Adresse: </p>
                    <p>s12345@beuth-hochschule.de</p>
                </Option>
                <Option>
                    <p>Dein User-Name: </p>
                    <p>KarlOtto</p>
                </Option>
                <Option>
                    <p>Dein Profilbild: </p>
                    <img src="https://via.placeholder.com/50x50?text=user" />
                </Option>
            </AccountContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};