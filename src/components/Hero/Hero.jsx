import { motion } from 'framer-motion';
import profile_img from '/assets/profile_img.jpeg';
import cv_pdf from '/assets/pdf/JoãoVictorFelicio_Curriculo.pdf';
import './style/Hero.scss';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="hero"
    >
      <motion.div
        className="hero-img-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <img
          className="hero-img"
          src={profile_img}
          alt="foto de perfil do criador do conteúdo"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
      >
        <span>Olá! João Victor Felicio, </span>
        Desenvolvedor Frontend, São Paulo, Brasil!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
      >
        Desenvolvedor Frontend Web, com foco nas ferramentas React, Typescript,
        Redux e Sass. Com o objetivo de criar interfaces modernas, interativas e
        eficientes!
      </motion.p>
      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
      >
        <div className="hero-resume">
          <button
            onClick={() => {
              window.open(cv_pdf, '_blank');
            }}
          >
            Visualizar CV
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
