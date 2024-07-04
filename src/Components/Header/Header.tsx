import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light ms-5" to="/pages/Home">Navbar</NavLink>
                <ul className="navbar-nav me-5 mb-2 mb-lg-0 ms-auto gap-3">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/pages/Home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/pages/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/pages/Contacts">Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/pages/Features">Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/pages/Pricing">Pricing</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
