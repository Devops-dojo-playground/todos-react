import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/about"} className="nav-link" aria-current="page">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Settings
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"/contact"}>Help/Contact</NavLink></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>
                    </ul>
                    {props.searchBar ? 
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    : ""}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Todos",
    searchBar: true
}
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}