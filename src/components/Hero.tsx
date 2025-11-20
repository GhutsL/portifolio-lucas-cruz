'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero-full">
      <div className="hero-inner">
        <div className="hero-text">
          <h1><span className="name animate"> Lucas Cruz </span></h1>
          <p className="subtitle">
            Desenvolvedor Fullstack<br />
            Desenvolvedor de app Mobile<br />
            
          </p>
        </div>
        <div className="avatar-glow">
          <Image
            src="/avatar.jpg"
            width={190}
            height={190}
            alt="Foto de perfil"
            className="avatar-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}