import React, {useContext} from 'react';
// import {Link} from 'react-dom';
import { Link } from 'react-router-dom';
import './nav.css';


export const Navigation = () => {
    return (
    <div className="container, footer">
        <button className="btn" color="inherit" component={Link} to="/profil">Profil</button>
        <button  className="btn" color="inherit"> 
            <Link className={'navigation-link'} to="/history">History</Link>
        </button>
        <button className="btn" color="inherit" component={Link} to="/eco akcje">
            <Link className={'navigation-link'} to="/eco-actions">Eco Actions</Link>
        </button>
    </div>
    );
    }