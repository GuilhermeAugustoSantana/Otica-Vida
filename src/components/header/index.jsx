import React from 'react'
import './style.css'

export default function Header() {
  return (
    <header>
      <div className='limitar-secao topo'>
        <img src="assets/logo.png" alt="Logo da óticas vida" />
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}