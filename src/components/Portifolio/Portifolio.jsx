import { motion } from 'framer-motion';
import theme_pattern from '/assets/theme_pattern.svg';
import PortifolioCard from './components/PortifolioCard';
import { portifolio_data } from './portifolio_data';
import { useState } from 'react';
import './style/Portifolio.scss';

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
        <h1>Portifólio</h1>
        <img src={theme_pattern} />
      </motion.div>
      <div className="portifolio-cards">
        {portifolio_data.slice(0, visibleItens).map((data, index) => {
          return (
            <PortifolioCard
              key={index}
              index={index}
              thumbnail={data.thumbnail}
              title={data.title}
              description={data.description}
              linkDemo={data.link_demo}
              linkRepo={data.link_repo}
              tags={data.tags}
            />
          );
        })}
      </div>
      {portifolio_data.length > 3 && (
        <motion.button
          onClick={loadMoreItens}
          className="ver-mais-btn"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07 }}
          transition={{
            opacity: { duration: 1.5, delay: 2 },
            y: { duration: 1.5, ease: 'easeOut', delay: 2 },
          }}
        >
          Ver Mais
        </motion.button>
      )}
    </motion.section>
  );
}
