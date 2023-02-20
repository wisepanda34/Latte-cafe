import React from 'react';

const Price = ({currentMenu}) => {

    return (
        <div className="price">
            <div className="price__block">
                <h2 className="price__title">{currentMenu.title}</h2>
                <ul>
                    {
                        currentMenu && currentMenu.list.map((item,i) => {
                            return (
                                <li className='price__item' key={i}>
                                    <div className='price__item-title'>{item.title}</div>
                                    <div className='price__item-components'>{item.comp.join(', ')}</div>
                                    <div className='price__item-price'>{item.price}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Price;
