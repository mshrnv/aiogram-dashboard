import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Aiogram Dashboard</a>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link active">Главная</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tables"><a className="nav-link">Таблицы</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stats"><a className="nav-link">Статистика</a></Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;