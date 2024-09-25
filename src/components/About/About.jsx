import Tech from '../Tech/Tech';
import theme_pattern from '/assets/theme_pattern.svg';
import profile_img_2 from '/assets/profile_img_2.jpeg';
import { techs } from './techs';
import { motion } from 'framer-motion';
import './style/About.scss';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="about-container"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
        className="about-title"
      >
        <h1>Sobre</h1>
        <img src={theme_pattern} />
      </motion.div>
      <div className="about-sections">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
          className="about-picture"
        >
          <img src={profile_img_2} alt="foto do criador do conteudo" />
        </motion.div>
        <div className="about-description">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
          >
            Graduando em <span>Análise e Desenvolvimento de Sistemas</span> pelo{' '}
            <span>Centro Universitário Adventista de São Paulo</span>. Possuo
            experiência com{' '}
            <span>JavaScript, React, TypeScript, Redux, Sass</span> e mais
            algumas ferramentas como <span>Git, GitHub e Jenkins</span>.
            Utilização de metodologias ágeis como <span>Scrum e Kanban</span>,
            para manter o fluxo de trabalho organizado e produtivo.
            Conhecimentos em inglês e espanhol técnico para desenvolvimento,
            leitura e produção de documentações. Atualmente aprimorando as
            habilidades em frontend estudando as tecnologias já utilizadas por
            mim, focando também em backend com <span>Java</span> e{' '}
            <span>Node.Js</span>. Certificado <span>AWS Practitioner</span> em
            parceria com a Escola da Nuvem.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
            className="about-techs-title"
          >
            Tecnologias utilizadas
          </motion.h2>
          <div className="about-techs">
            {techs.map((tech, index) => {
              const delay = 1 + index * 0.1;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                    delay: delay,
                  }}
                >
                  <Tech src={tech.src} name={tech.name} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
