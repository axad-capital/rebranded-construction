import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';

const NavComp = () => {

    const location = useLocation()

    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'>Rebranded Construction</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/roofing' className={location.pathname === '/roofing' ? 'nav-link active' : 'nav-link'}>Roofing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/windows' className={location.pathname === '/windows' ? 'nav-link active' : 'nav-link'}>Windows</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/plumbing' className={location.pathname === '/plumbing' ? 'nav-link active' : 'nav-link'}>Plumbing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/HVAC' className={location.pathname === '/HVAC' ? 'nav-link active' : 'nav-link'}>HVAC</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/solar' className={location.pathname === '/solar' ? 'nav-link active' : 'nav-link'}>Solar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/lawn-care' className={location.pathname === '/lawn-care' ? 'nav-link active' : 'nav-link'}>Lawn Care</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp