import React from 'react';
import './css/Header.css'
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={'header'}>
            <NavLink exact activeClassName={'header__active'} to={'/'} className="header__item">
                Home
            </NavLink>
            <Link exact activeClassName={'header__active'} to={'/spareParts'} className="header__item">
                Spare Parts
            </Link>
            <NavLink exact activeClassName={'header__active'} to={'/workers'} className="header__item">
                Workers
            </NavLink>

        </div>
    );
};

export default Header;