'use client';
import { useEffect, useState } from 'react';

export function ScrollNav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      // mostra depois de rolar 120px
      setShow(window.scrollY > 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header ${show ? 'show' : ''}`} aria-label="Barra de navegação">
      <nav className="nav-inner" aria-label="Navegação principal">
        <a href="/" className="brand" aria-label="Início">Lucas Cruz</a>
        <ul className="nav-list">
          <li><a href="#projetos-title">Projetos</a></li>
          <li><a href="#sobre-title">Sobre</a></li>
          <li><a href="mailto:seuemail@dominio.com">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}