import { useEffect, useState } from 'react';

import './Header.scss'
import Logo from './logo-eco-friendly.svg';
import Avatar from './Avatar-icons-user.svg';

export function Header({isLoggedIn, name}){

    const [isVisibleMenu, setIsVisibleMenu] = useState(false)
    
    useEffect(()=> {
        document.addEventListener('click', handleClick)

        return ()=> {
            document.removeEventListener('click', handleClick)
        }
    },[]);

    const handleClick = (e) => {
    e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    }

const isDropdownButton = () => {}

    const LogOut = () => {
        alert('logout')
    };

    const LogIn = () => {
        alert('login')
    };

    return (
    <header className='header__container'>
        <div className='header__logo'>
            <img className='header__logo-svg'src={Logo} alt="Green  eco tree" />
        </div>

        {/* {isLoggedIn ? <div className='header__welcome'>"Welcome Eco {name}"</div> : <div></div>} */}
        {/* <div></div> */}

       {!isLoggedIn && (
           <>
            <button className={'header__button header__button-signup'}>Sign up</button>
            <button className={'header__button header__button-login'}>Log in</button>
           </>
       )}

       {isLoggedIn && (
           <>
                <div className='header__welcome'>"Welcome Eco {name}"</div>
                <div className='header__avatar' data-dropdown>
                    <img onClick={()=> setIsVisibleMenu(!isVisibleMenu)} className='header__avatar-user-svg' src={Avatar} alt="Avatar user" />
                    <div className={`header__avatar-menu ${isVisibleMenu ? 'header__avatar-menu--visible' : 'header__avatar-menu--invisible'}`}>
                        <button className={'header__button header__avatar-button data-dropdown-button'} onClick={LogIn}>Login</button>
                        <button className={'header__button header__avatar-button data-dropdown-button'} onClick={LogIn}>My Status</button>
                        <button className={'header__button header__avatar-button data-dropdown-button'} onClick={LogIn}>My Event</button>
                        <button className={'header__button header__avatar-button data-dropdown-button'} onClick={LogIn}>About me</button>
                    </div>
                </div>
           </>
       )}
        {/* <button className={'header__button header__button-signup'}>Sign up</button>
        <button className={'header__button header__button-login'}>Log in</button>
     



        <div className='header__avatar'>

            <img onClick={()=> setIsVisibleMenu(!isVisibleMenu)} className='header__avatar-user-svg' src={Avatar} alt="Avatar user" />
            <div className={`header__avatar-menu ${isVisibleMenu ? 'header__avatar-menu--visible' : 'header__avatar-menu--invisible'}`}>
                <button onClick={LogIn}>Login</button>
                <button onClick={LogIn}>My Status</button>
                <button onClick={LogIn}>My Event</button>
                <button onClick={LogIn}>About me</button>
            </div>
        
        </div> */}
        {/* <div className='header__button-container'>
            
            {isLoggedIn ?  
                <button onClick={LogOut}>Logout</button> : 
                <button onClick={LogIn}>Login</button>
            }
        </div> */}
    </header>
    )
}