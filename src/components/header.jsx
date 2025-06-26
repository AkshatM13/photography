import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="/">
                    <i className="fas fa-camera text-primary me-2"></i>
                    Frame Theory by Akshat
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;