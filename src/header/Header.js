import { useState } from 'react';

import './Header.scss'
import Logo from './Logo-treeicon.svg';
import Avatar from './Avatar-icons-user.svg';

export function Header({isLoggedIn, name}){

    const LogOut = () => {
        alert('logout')
    };

    const LogIn = () => {
        alert('login')
    };

    return <header className='header__container'>
        <div className='header__logo'>
            <img className='header__logo-svg'src={Logo} alt="Green  eco tree" />
        </div>
        {isLoggedIn ? <div className='header__welcome'>"Welcome Eco {name}"</div> : <div></div>}
        <div className='header__avatar'>
            <img className='header__avatar-user-svg'src={Avatar} alt="Avatar user" />
        </div>
        <div className='header__button-container'>
            
            {isLoggedIn ?  
                <button onClick={LogOut}>Logout</button> : 
                <button onClick={LogIn}>Login</button>
            }
        </div>
    </header>
}