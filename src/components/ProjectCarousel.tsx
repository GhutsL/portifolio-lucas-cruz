'use client';

import { useState, useCallback, useEffect } from 'react';

interface Props {
  images: string[];
  label: string;
}

export function ProjectCarousel({ images, label }: Props) {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive(p => (p + 1) % images.length), [images.length]);
  const prev = useCallback(() => setActive(p => (p - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <div className="project-carousel" aria-label={`Slides do projeto ${label}`}>
      <div className="carousel-main">
        <img
          className="carousel-slide-main"
          src={images[active]}
          alt={`Slide ${active + 1} de ${images.length}`}
          role="img"
        />
        <button type="button" className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Slide anterior">
          ‹
        </button>
        <button type="button" className="carousel-btn carousel-btn-next" onClick={next} aria-label="Próximo slide">
          ›
        </button>
      </div>
      <div className="carousel-thumbnails" role="list" aria-label="Miniaturas de slides">
        {images.map((img, i) => (
          <button
            key={img + i}
            type="button"
            className={`thumbnail ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            style={{ backgroundImage: `url(${img})` }}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </div>
  );
}