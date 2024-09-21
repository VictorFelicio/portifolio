import { motion } from 'framer-motion';
import theme_pattern from '/assets/theme_pattern.svg';
import PortifolioCard from './components/PortifolioCard';
import './style/Portifolio.scss';
import { portifolio_data } from './portifolio_data';
import { useState } from 'react';

export default function Portifolio() {
  const [visibleItens, setVisibleItens] = useState(3);

  function loadMoreItens() {
    setVisibleItens((prev) => prev + 3);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="portifolio-container"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
        className="portifolio-title"
      >
        <h3>Portifólio</h3>
        <img src={theme_pattern} />
      </motion.div>
      <div className="portifolio-cards">
        {portifolio_data.slice(0, visibleItens).map((data, index) => {
          return (
            <PortifolioCard
              key={data.title}
              index={index}
              thumbnail={data.thumbnail}
              title={data.title}
              description={data.description}
              linkDemo={data.link_demo}
              linkRepo={data.link_repo}
            />
          );
        })}
      </div>

      {portifolio_data.length > 3 && (
        <motion.button
          onClick={loadMoreItens}
          className="ver-mais-btn"
          initial={{ opacity: 0, y: 700 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            delay: 0.5,
          }}
        >
          Ver Mais
        </motion.button>
      )}
    </motion.section>
  );
}
