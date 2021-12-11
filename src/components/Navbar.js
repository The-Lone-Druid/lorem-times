import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div>
            <nav className='nav-wrapper grey darken-4'>
                <div className='container'>
                    <a href='/' className='brand-logo'>Lorem'Times</a>
                    <ul className='right'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
