import React from "react";
import './style.css'

export default function SectionAbout() {
  return (
    <section id="sobre" className="secao-sobre">
      <div className="limitar-secao">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

        <div className="box-card">
          <img src="assets/loja.png" alt="loja" />
          <div>
            <h3>Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div>
            <h3>Atendimento flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <img src="assets/atendimento.png" alt="atendimento" />
        </div>
      </div>
    </section>
  );
}