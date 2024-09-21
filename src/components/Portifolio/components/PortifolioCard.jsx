/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
export default function PortifolioCard({
  thumbnail,
  title,
  description,
  linkRepo,
  linkDemo,
  index,
}) {
  const delay = 1 + index * 0.1;
  return (
    <motion.div
      className="portifolio-card-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: 'easeOut',
        delay: delay,
      }}
    >
      <div className="thumbnail-container">
        <img src={thumbnail} alt="" />
      </div>
      <div className="description-container">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className="links-container">
        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
          Repo
        </a>
        <a href={linkDemo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </motion.div>
  );
}
