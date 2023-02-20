import React from 'react';

const Footer = () => {
    return (
        <section className="footer">
           <ul className="footer__list">
               <li className="footer_item"><a href="#" className="footer__link">Home</a></li>
               <li className="footer_item"><a href="#" className="footer__link">About</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Menu</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Info</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Contact</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Bookings</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Privacy Policy</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Style Guide</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Licenses</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Instructions</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Changelog</a></li>
               <li className="footer_item"><a href="#" className="footer__link">Password</a></li>
               <li className="footer_item"><a href="#" className="footer__link">404</a></li>
           </ul>
            <ul className="footer__info">
                <li className="footer__info-item">© Latte Cafe 2022</li>
                <li className="footer__info-item">Built by
                    Nikolai Bain</li>
                <li className="footer__info-item">Powered by
                    Webflow</li>
            </ul>

        </section>
    );
};

export default Footer;