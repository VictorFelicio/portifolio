import Logo from '../Logo/Logo';
import './style/Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />

      <ul className="nav-menu">
        <li>Home</li>
        <li>Sobre</li>
        <li>Portifólio</li>
        <li>Contato</li>
      </ul>

      <div className="nav-connect">
        <button>
          <a href="">Linkedin</a>
        </button>
        <button>
          <a href="">Github</a>
        </button>
      </div>
    </nav>
  );
}
