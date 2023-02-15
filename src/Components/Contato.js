import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Loja | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>falcao9913@hotmail.com</li>
          <li>(75) 99228-7558</li>
          <li>Feira de Santana - Bahia</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
