import React from 'react';
import './css/Header.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={'header'}>
            <Link to={'/'} className="header__item">
                Home
            </Link>
            <Link to={'/spareParts'} className="header__item">
                Spare Parts
            </Link>
            <Link className="header__item">
                Workers
            </Link>

        </div>
    );
};

export default Header;