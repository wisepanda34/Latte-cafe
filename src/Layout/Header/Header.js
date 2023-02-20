import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Header = () => {
    return (
        <header className="header">
             <div className="">
                 <nav className="header__nav">
                     <h1 className="header__title">LATTE CAFE</h1>
                     <div className="header__nav-container">
                     <div className="header__burger">
                         <span/>
                         <span/>
                         <span/>
                     </div>
                     <ul className="header__list">
                         <li className="header__item"><a href="#">About</a></li>
                         <li className="header__item"><a href="#">Menu</a></li>
                         <li className="header__item"><a href="#">Info</a></li>
                         <li className="header__item"><a href="#">Booking</a></li>
                     </ul>

                     <ul className="header__list">
                         <li className="header__item header__item-icon"><HiOutlineMail/></li>
                         <li className="header__item header__item-icon"><FaFacebook/></li>
                         <li className="header__item header__item-icon"><FiInstagram/></li>
                     </ul>
                     </div>
                 </nav>
             </div>
        </header>
    );
};

export default Header;