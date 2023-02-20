import React from 'react';

const Catalog = ({titles,menuId,changeMenuId}) => {

    return (
        <div className="catalog">
            <div className="catalog__container">
                <h4 className="catalog__title"> MENU</h4>
                <p className="catalog__info">We change our menu every season. Here is what we are currently dishing
                    up.</p>
                {
                    titles.map((title,i) => {
                        return (
                            <button key={i}
                                    type="button"
                                    className={menuId === i ? 'catalog__btn catalog__btn_active' : 'catalog__btn'}
                                    onClick={() => changeMenuId(i)}
                            >{title}</button>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default Catalog;
