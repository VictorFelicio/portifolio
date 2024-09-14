import profile_img from '../../assets/profile_img.jpeg';
import './style/Hero.scss';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img className="hero-img" src={profile_img} alt="" />
      </div>
      <h2>
        <span>Olá! João Victor Felicio, </span>
        Desenvolvedor Frontend, São Paulo, Brasil!
      </h2>
      <p>
        Desenvolvedor Frontend Web, com foco nas ferramentas React, Sass e
        Typescript. Com o objetivo de criar interfaces modernas, interativas e
        eficientes!
      </p>
      <div className="hero-action">
        <div className="hero-resume">
          <button
            onClick={() => {
              window.open('https://youtube.com.br', '_blank');
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
