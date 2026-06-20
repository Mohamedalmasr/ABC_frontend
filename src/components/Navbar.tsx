import React, { useState, useEffect } from 'react';
import { Menu, User, Settings } from 'lucide-react'; // Import icons
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from './Models/firebase'; // Ensure Firebase auth is imported
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [user, setUser] = useState<{ displayName: string | null; email: string | null } | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Handle window resize for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./images/logo2.png" alt="Logo" className="logo" />
        <span className="logo-text">Alpha Business Centre</span>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
        >
          Services
        </Link>
        <Link
          to="/pricing"
          className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
        >
          Pricing
        </Link>
        
        <Link
          to="/contact"
          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>

        {!isMobile && (
          <div className="account-menu-container">
            <button
              className="account-menu-button"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            >
              {user ? (
                <User size={24} className="account-icon" /> // User icon when logged in
              ) : (
                <img src="./images/icons8-register-64.png" alt="User" className="account-icon" />
              )}
            </button>
            {accountMenuOpen && (
              <div className="account-dropdown-menu">
                {user ? (
                  <>
                    <div className="user-info">
                      <p className="user-email">{user.email}</p>
                    </div>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="account-dropdown-link">Login</Link>
                    <Link to="/signup" className="account-dropdown-link">Sign Up</Link>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="menu-container">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
        {menuOpen && (
          <div className="dropdown-menu">
            <Link
              to="/"
              className={`dropdown-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`dropdown-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`dropdown-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`dropdown-link ${location.pathname === '/pricing' ? 'active' : ''}`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`dropdown-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>

            {isMobile && (
              <>
                {user ? (
                  <>
                    <div className="user-info">
                      <p className="user-email">{user.email}</p>
                    </div>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-link">Login</Link>
                    <Link to="/signup" className="dropdown-link">Sign Up</Link>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;