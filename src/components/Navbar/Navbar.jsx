import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './style/Navbar.scss';
import { motion } from 'framer-motion';

export default function Navbar() {
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
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          {' '}
          <Link to={'/about'}>Sobre</Link>
        </li>
        <li>
          {' '}
          <Link to={'/portifolio'}>Portifólio</Link>
        </li>
        <li>
          {' '}
          <Link to={'/contact'}>Contato</Link>
        </li>
      </ul>

      <div className="nav-connect">
        <button>
          <a href="">Linkedin</a>
        </button>
        <button>
          <a href="">Github</a>
        </button>
      </div>
    </motion.nav>
  );
}
