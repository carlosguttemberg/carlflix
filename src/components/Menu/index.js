import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Cj from '../../assets/img/Cj.png';
import './menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="CJ" src={Cj} alt="CarlFlixLogo"></img>
                <img className="Logo" src={Logo} alt="CarlFlixLogo"></img>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;