import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './style/Navbar.scss';
import { motion } from 'framer-motion';
import menu_open from '/assets/menu_open.svg';
import menu_close from '/assets/menu_close.svg';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuButton(window.innerWidth <= 768);
    };
    handleResize(); // Executa na montagem inicial.
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <Logo />

      {showMenuButton && (
        <img
          src={menu_open}
          alt="Abrir menu"
          className="nav-menu-open"
          onClick={toggleMenu}
        />
      )}

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {showMenuButton && (
          <img
            src={menu_close}
            alt="Fechar menu"
            className="nav-menu-close"
            onClick={toggleMenu}
          />
        )}
        <li>
          <Link
            className={pathname === '/' ? 'active' : ''}
            to={'/'}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/about' ? 'active' : ''}
            to={'/about'}
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/portifolio' ? 'active' : ''}
            to={'/portifolio'}
            onClick={() => setMenuOpen(false)}
          >
            Portifólio
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/contact' ? 'active' : ''}
            to={'/contact'}
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </li>
      </ul>

      <div className="nav-connect">
        <button>
          <a
            href="https://www.linkedin.com/in/joaofeliciodev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </button>
        <button>
          <a
            href="https://github.com/VictorFelicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </button>
      </div>
    </motion.nav>
  );
}
