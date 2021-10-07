import React from 'react';
// import {Link} from 'react-dom';
import { Link } from 'react-router-dom';

import './nav.css';


export const Navigation = () => {
    return (
    <div className="container, footer">
        <button className="btn" color="inherit" component={Link} to="/profil">Profil</button>
        <button  className="btn" color="inherit"> 
            <Link to="/history">History</Link>
        </button>
        <button className="btn" color="inherit" component={Link} to="/eco akcje">Eco Akcje</button>
    </div>
    );
    }