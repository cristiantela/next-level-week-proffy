import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/6540136?s=460&u=885c907981dfd2687599c1137794e2400509bfb2&v=4" alt="Matheus Cristian"/>
        <div>
          <strong>Matheus Cristian</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Apaixonado por JavaScript.
        <br/><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus pariatur enim, quaerat similique eius tempore nihil iste laboriosam rerum tempora, facere nesciunt, voluptatum porro blanditiis modi. Error, debitis obcaecati!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;