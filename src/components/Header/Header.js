import React, { Component } from 'react';

import './Header.css';
import logo from '../../assets/logo.png'

class Header extends Component {
    render() {
        return (
            <header>
                <img className="logo" src={logo} />
                <div>
                    <span>Meu Perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </header>
        );
    }
}

export default Header;