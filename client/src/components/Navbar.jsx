import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {Navbar} from "flowbite-react";
import logo from '../favicon.svg';
import {routes} from '../routes/index'

const MyNavbar = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    return (
        <Navbar fluid={true}>
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Aiogram Dashboard Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Aiogram Dashboard
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    routes.map((route) => (
                        <Navbar.Link active={currentPath === route.path} key={route.path}>
                            <Link to={route.path} onClick={() => {setCurrentPath(route.path)}}>
                                {route.name}
                            </Link>
                        </Navbar.Link>
                    ))
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;