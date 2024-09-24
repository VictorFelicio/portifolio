import { motion } from 'framer-motion';
import theme_pattern from '/assets/theme_pattern.svg';
import email_icon from '/assets/mail_icon.svg';
import phone_icon from '/assets/call_icon.svg';
import location_icon from '/assets/location_icon.svg';
import './style/Contact.scss';

export default function Contact() {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log(formData);
    e.target.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="contact-container"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
        className="contact-title"
      >
        <h3>Contato</h3>
        <img src={theme_pattern} />
      </motion.div>

      <motion.div className="contact-methods">
        <motion.div
          className="icons-methods"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
        >
          <div className="methods-title">
            <h1>Vamos conversar !</h1>
            <p>
              Atualmente, estou disponível para novos trabalhos, voluntariados,
              estágios e freelances!
            </p>
          </div>
          <div className="icon-detail">
            <img src={email_icon} alt="" /> <p>victorfelicio4@gmail.com</p>
          </div>
          <div className="icon-detail">
            <img src={phone_icon} alt="" /> <p>19996397317</p>
          </div>
          <div className="icon-detail">
            <img src={location_icon} alt="" /> <p>São Paulo, São Paulo, BR</p>
          </div>
        </motion.div>
        <motion.div
          className="emails-methods"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
        >
          <form className="email-contact-form" onSubmit={onSubmitForm}>
            <label htmlFor="">Seu Nome</label>
            <input type="text" name="name" placeholder="Seu nome" />
            <label htmlFor="">Seu Email</label>
            <input type="email" name="email" placeholder="Seu email" />
            <label htmlFor="">Escreve sua mensagem</label>
            <textarea name="content" placeholder="Escreva sua mensagem" />
            <button className="btn-submit" type="submit">
              Enviar
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
