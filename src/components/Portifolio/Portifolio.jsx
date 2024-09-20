import { motion } from 'framer-motion';
import theme_pattern from '/assets/theme_pattern.svg';
import './style/Portifolio.scss';
import PortifolioCard from './components/PortifolioCard';
export default function Portifolio() {
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
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
      </div>
    </motion.section>
  );
}
