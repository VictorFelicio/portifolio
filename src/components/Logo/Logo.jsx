import navUnderline from '../../../public/assets/nav_underline.svg';
import './style/Logo.scss';

export default function Logo() {
  return (
    <div className="logo-container">
      <span>Felício</span>
      <img src={navUnderline} alt="" />
    </div>
  );
}
