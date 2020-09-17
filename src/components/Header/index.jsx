import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Logo from '../../assets/v-logo.png';

const sponsors = [
    'João',
    'Maria',
    'Ricardo',
    'Pedro',
    'Lucas'
];

const Header = () => {
    const [sponsor, setSponsor] = useState(0);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(changeSponsor, 3000);
        return () => clearInterval(interval);

        function changeSponsor() {
            if (sponsor === sponsors.length - 1) return setSponsor(0);
            setSponsor(sponsor + 1);
        }
    }, [sponsor]);

    return (
        <nav className="navbar header-nav">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img className="logo" src={Logo} alt="Ow!Scan" />
                </Link>
                <div className={'navbar-burger burger header-burger' + (isActive ? ' is-active' : '')} onClick={() => setActive(!isActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={'navbar-menu' + (isActive ? ' is-active' : '')}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/mangas">Mangás</Link>
                    <Link className="navbar-item" to="/parceria">Parceria</Link>
                    <Link className="navbar-item" to="/recrutamento">Recrutamento</Link>
                    <Link className="navbar-item" to="/equipe">Equipe</Link>
                    <Link className="navbar-item" to="/contato">Contato</Link>
                    <Link className="navbar-item" to="/doar">Doar</Link>
                </div>
                <div className="navbar-end tagger">
                    <span className="navbar-item tag is-primary is-large sponsor">Obrigado {sponsors[sponsor]}!</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;