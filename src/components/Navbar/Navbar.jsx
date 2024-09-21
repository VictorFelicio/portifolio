import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './style/Navbar.scss';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <Logo />

      <ul className="nav-menu">
        <li>
          <Link className={pathname === '/' ? 'active' : ''} to={'/'}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link className={pathname === '/about' ? 'active' : ''} to={'/about'}>
            Sobre
          </Link>
        </li>
        <li>
          {' '}
          <Link
            className={pathname === '/portifolio' ? 'active' : ''}
            to={'/portifolio'}
          >
            Portifólio
          </Link>
        </li>
        <li>
          {' '}
          <Link
            className={pathname === '/contact' ? 'active' : ''}
            to={'/contact'}
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
