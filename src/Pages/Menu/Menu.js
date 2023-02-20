import React, { useMemo, useState } from 'react';
import Catalog from "../Catalog/Catalog";
import Price from "../Price/Price";
import "./menu.scss";

const Menu = () => {
    const menuList = [
        {
            title: 'FoodMenu',
            list: [
                {
                    title: 'PASTA',
                    price: '$30',
                    comp: ["Hendrick’s Neptunia Gin", "Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed", "Champagne"]
                },
                {
                    title: 'PIZZA',
                    price: '$25',
                    comp: ["Hendrick’s Neptunia Gin", "Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed", "Champagne"]
                },
                {
                    title: 'BURGER',
                    price: '$15',
                    comp: ["Hendrick’s Neptunia Gin", "Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed", "Champagne"]
                }
            ]
        },
        {
            title: 'DrinksMenu',
            list: [
                {
                    title: 'MARMORIS',
                    price: '$20',
                    comp: ["Hendrick’s Neptunia Gin", "Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed", "Champagne"]
                },
                {
                    title: 'PRUINA',
                    price: '$12',
                    comp: ["Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed"]
                },
                {
                    title: 'NOELANI',
                    price: '10',
                    comp: ["Hendrick’s Neptunia Gin", "Floral Wine", "Akashi-Tai Umeshu Plum", "Sloe", "Seaweed", "Champagne"]
                }
            ]
        },
        {
            title: 'Takeaway Menu',
            list: [
                {
                    title: 'Fish & Cheeps',
                    price: '$12',
                    comp: ["Fish", "Pepper", "Soul", "Potato"]
                },
                {
                    title: 'Burger & Free',
                    price: '$11',
                    comp: ["Burger", "Tomato", "Salad", "Meat", "Potato"]
                },
                {
                    title: 'Beefshtacks',
                    price: '$15',
                    comp: ["Beef", "Pepper", "Onion", "Green", "Mashrooms"]
                }
            ]
        },
    ]


    const [menuId, setMenuId] = useState(0)


    const currentMenu = useMemo(() => {
        return menuList[menuId]
    }, [menuId, menuList])

    const menuTitles = useMemo(() => {
        return menuList.map(({ title }) => title)

    }, [])

    const changeMenuId = (id) => {
        setMenuId(id)
    }


    return (
        <section className="menu">
            <div className="container">
                <div className="menu__wrapper">
                    <Catalog menuId={menuId} titles={menuTitles} changeMenuId={changeMenuId} />
                    <Price currentMenu={currentMenu} />
                </div>
            </div>
        </section>
    );
};

export default Menu;
