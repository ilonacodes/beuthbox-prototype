import React from 'react';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import styled from 'react-emotion';
import {css} from 'emotion';

const PrivacyPolicyContainer = styled('div')`
  display: flex;
  margin-top: 80px;
  margin-left: 40px;
  margin-right: 80px;
  flex-direction: column;
  color: white;
`;

const title = css`
  font-size: 28px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const subtitle = css`
  font-size: 22px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const address = css`
  border-bottom: 1px solid white;
  line-height: 5px;
  padding-bottom: 20px;
`;

export const PrivacyPolicy = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <PrivacyPolicyContainer>
                <div className={title}><p>Datenschutzerklärung</p></div>
                <div className={subtitle}><p>Name und Anschrift des Verantwortlichen</p></div>
                <p>Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze
                der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmung ist die:</p>
                <div className={address}>
                    <p>Beuth Hochschule für Technik Berlin</p>
                    <p>Luxemburger Straße 10</p>
                    <p>13353 Berlin</p>
                    <p>Tel: +49 (30) 4504-0</p>
                    <p>www[at]beuth-hochschule.de</p>
                </div>
                <div className={subtitle}><p>Name und Anschrift des Datenschutzbeauftragten</p></div>
                <p>Der Datenschutzbeauftragte der Beuth Hochschule für Technik Berlin ist:</p>
                <div className={address}>
                    <p>Wolfgang Gally</p>
                    <p>Beuth Hochschule für Technik</p>
                    <p>Luxemburger Straße 10</p>
                    <p>13353 Berlin</p>
                    <p>Tel: +49 (30) 4504-2320</p>
                    <p>datenschutz[at]beuth-hochschule.de</p>
                    <p>https://www.beuth-hochschule.de/dsb</p>
                </div>

            </PrivacyPolicyContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};