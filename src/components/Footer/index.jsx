import "./index.css";

import {Routes, Route, Link} from "react-router-dom";


const Footer = () => {
    return <footer className="footer">
        <div className="footer__navBlock">
            <h2>DogFood</h2>
            <p>Сделано Андреем Жмако</p>
            <p>Мой <a href="https://github.com/Andrew478">Github</a></p>
            <p>©2023 All rights reserved</p>
        </div>
        <div className="footer__navBlock">
            <h2>Авторство</h2>
            <p>Фото и материалы взяты с сайта <a href="https://stockmann.ru/">Стокманн</a></p>
            <p>Дизайн вдохновлён сайтом <a href="https://stockmann.ru/">Стокманн</a></p>
        </div>
        <div className="footer__navBlock">
            <p><Link to="/auth">Войти</Link></p>
            <p><Link to="/content/Delivery">Доставка</Link></p>
            <p><Link to="/content/About">О нас</Link></p>
        </div>
    </footer>
}

export default Footer;