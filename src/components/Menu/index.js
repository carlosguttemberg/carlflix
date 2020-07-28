import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Cj from '../../assets/img/Cj.png';
import './menu.css';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="CJ" src={Cj} alt="CarlFlixLogo"></img>
                <img className="Logo" src={Logo} alt="CarlFlixLogo"></img>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;