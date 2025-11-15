"use client";

import Image from "next/image";
import { useState } from "react";

function ProjectCarousel({ slides }: { slides: string[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-main">
        <div 
          className="carousel-slide-main"
          style={{background: slides[activeSlide]}}
        />
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>‹</button>
        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>›</button>
      </div>
      <div className="carousel-thumbnails">
        {slides.map((slide: string, idx: number) => (
          <button
            key={idx}
            className={`thumbnail ${idx === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(idx)}
            style={{background: slide}}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="container">
        <header className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Olá, sou <span className="name animate">Lucas</span>
              </h1>
              <div className="subtitle">
                Desenvolvedor Fullstack
                <br />
                Criador de Sistemas
                <br />
                Apaixonado por Tecnologia
              </div>
            </div>

            <div className="avatar glow" role="img" aria-label="Foto do Lucas">
              {/* Espaço para foto circular. Para usar uma imagem, substitua esta div por
                  <Image src="/avatar.jpg" width={160} height={160} className="avatar-img" alt="Lucas Matias" />
                  e coloque `public/avatar.jpg` no projeto. */}
            </div>
          </div>
        </header>

        <section>
          <h2 className="section-title">Projetos</h2>
          
          {/* Projeto 1 */}
          <div className="project-item">
            <ProjectCarousel slides={[
              'linear-gradient(135deg, #0fb6ff, #6b3cff)',
              'linear-gradient(135deg, #6b3cff, #5bd0a3)',
              'linear-gradient(135deg, #5bd0a3, #0fb6ff)',
              'linear-gradient(135deg, #0fb6ff, #ff6b9d)'
            ]} />
            <div className="project-info">
              <h3>App de Tarefas</h3>
              <p>Gerenciador de tarefas com interface simples e moderna, desenvolvido com React e Node.js. Permite criar, editar, deletar e organizar tarefas por prioridade e categoria.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="actions">
                <a className="btn" href="#">Ver código</a>
                <a className="btn primary glow" href="#">Visualizar projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="project-item">
            <ProjectCarousel slides={[
              'linear-gradient(135deg, #ff6b9d, #0fb6ff)',
              'linear-gradient(135deg, #ffa500, #ff6b9d)',
              'linear-gradient(135deg, #6b3cff, #ffa500)',
              'linear-gradient(135deg, #5bd0a3, #6b3cff)'
            ]} />
            <div className="project-info">
              <h3>E-commerce</h3>
              <p>Plataforma de comércio eletrônico completa com várias funcionalidades. Inclui carrinho de compras, sistema de pagamento, gestão de produtos e painel administrativo.</p>
              <div className="tech-stack">
                <span>Next.js</span>
                <span>Stripe</span>
                <span>PostgreSQL</span>
              </div>
              <div className="actions">
                <a className="btn" href="#">Ver código</a>
                <a className="btn primary glow" href="#">Visualizar projeto</a>
              </div>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="project-item">
            <ProjectCarousel slides={[
              'linear-gradient(135deg, #5bd0a3, #ff6b9d)',
              'linear-gradient(135deg, #0fb6ff, #5bd0a3)',
              'linear-gradient(135deg, #6b3cff, #0fb6ff)',
              'linear-gradient(135deg, #ff6b9d, #ffa500)'
            ]} />
            <div className="project-info">
              <h3>Chat Aplicativo</h3>
              <p>Aplicativo de chat em tempo real com suporte a múltiplos usuários. Inclui notificações em tempo real, salas de chat, compartilhamento de arquivos e interface responsiva.</p>
              <div className="tech-stack">
                <span>Socket.io</span>
                <span>React</span>
                <span>Firebase</span>
              </div>
              <div className="actions">
                <a className="btn" href="#">Ver código</a>
                <a className="btn primary glow" href="#">Visualizar projeto</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <h2 className="section-title">Sobre mim</h2>
          <div className="code-block">
{`{
  "nome": "Lucas Matias",
  "stack": [
    "Node.js", "React", "MongoDB"
  ],
  foco: "Soluções inteligentes para empresas"
}`}
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="footer-text" style={{display: 'block', marginBottom: '12px', fontSize: '22px', fontWeight: '600'}}>
            Fale comigo
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/lucas-cruz-a937a3330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/GhutsL" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:lucas@example.com" aria-label="Email" title="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-10 5L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
