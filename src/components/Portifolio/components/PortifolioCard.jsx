import portifolio from '/assets/img/portifolio.webp';
export default function PortifolioCard() {
  return (
    <div className="portifolio-card-container">
      <div className="thumbnail-container">
        <img src={portifolio} alt="" />
      </div>
      <div className="description-container">
        <h1>Portifolio</h1>
        <span>
          Nesse projeto desenvolvi meu portifolio para centralizar os itens
          desenvolvidos ao longo dos estudos
        </span>
      </div>
      <div className="links-container">
        <a
          href="https://github.com/VictorFelicio/portifolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        <a
          href="https://portifolio-joao-victor-felicio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
