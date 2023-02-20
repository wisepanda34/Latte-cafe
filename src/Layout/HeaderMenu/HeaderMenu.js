import React from 'react';
import "./headerMenu.scss";
const HeaderMenu = ({header,items,active, setActive}) => {
    return (
        <div className="headerMenu">

            <div className="headerMenu__content">
                <div className="headerMenu__header">{header}</div>
                <ul className="headerMenu__list">
                    {items.map(item=>
                        <li>
                            <a href={item.href}> {item.value} </a>
                        </li>
                    )}
                </ul>
            </div>


        </div>
    );
};

export default HeaderMenu;