import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Logo à gauche */}
                <img src="/path/to/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li className="dropdown">
                        <span>Utilisateurs</span>
                        <div className="dropdown-content">
                            <Link to="/users/ajouter">Ajouter</Link>
                            <Link to="/users/gerer">Gérer</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <span>Engins</span>
                        <div className="dropdown-content">
                            <Link to="/engin/ajouter">Ajouter</Link>
                            <Link to="/engin/gerer">Gérer</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <span>Type</span>
                        <div className="dropdown-content">
                            <Link to="/type/ajouter">Ajouter</Link>
                            <Link to="/type/gerer">Gérer</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <span>Zone</span>
                        <div className="dropdown-content">
                            <Link to="/space/ajouter">Ajouter</Link>
                            <Link to="/space/gerer">Gérer</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
