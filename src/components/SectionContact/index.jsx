import React from "react";
import './style.css'

export default function SectionContact() {
  return (
    <section id="contato" className="secao-contato">
      <div className="limitar-secao">
        <h2>Fale conosco</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className="box-contato">
          <div>
            <h3>Contato</h3>
            <figure>
              <img src="assets/local.png" alt="logo local" />
              <figcaption>Nova Iguaçu, RJ</figcaption>
            </figure>
            <figure>
              <img src="assets/telefone.png" alt="logo telefone" />
              <figcaption>(21) 9999-9999</figcaption>
            </figure>
            <figure>
              <img src="assets/email.png" alt="logo email" />
              <figcaption>contato@oticavida.com</figcaption>
            </figure>
          </div>
          <div>
            <h3>Nossas Redes Sociais</h3>
            <figure>
              <img src="assets/fb.png" alt="logo facebook" />
              <figcaption>/OticaVida</figcaption>
            </figure>
            <figure>
              <img src="assets/ig.png" alt="logo instagram" />
              <figcaption>@oticavidarj</figcaption>
            </figure>
            <figure>
              <img src="assets/tt.png" alt="logo twiter" />
              <figcaption>@oticavidarj</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}