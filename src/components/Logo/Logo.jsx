import navUnderline from '/assets/nav_underline.svg';
import './style/Logo.scss';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo-container">
      <span>Felício</span>
      <img src={navUnderline} alt="" />
    </Link>
  );
}
