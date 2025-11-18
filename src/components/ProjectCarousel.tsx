'use client';

import { useState, useCallback, useEffect } from 'react';

interface Props {
  gradients: string[];
  label: string;
}

export function ProjectCarousel({ gradients, label }: Props) {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive(p => (p + 1) % gradients.length), [gradients.length]);
  const prev = useCallback(() => setActive(p => (p - 1 + gradients.length) % gradients.length), [gradients.length]);

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
        <div
          className="carousel-slide-main"
          style={{ background: gradients[active] }}
          role="img"
          aria-label={`Slide ${active + 1} de ${gradients.length}`}
        />
        <button type="button" className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Slide anterior">
          ‹
        </button>
        <button type="button" className="carousel-btn carousel-btn-next" onClick={next} aria-label="Próximo slide">
          ›
        </button>
      </div>
      <div className="carousel-thumbnails" role="list" aria-label="Miniaturas de slides">
        {gradients.map((g, i) => (
          <button
            key={g + i}
            type="button"
            className={`thumbnail ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
            style={{ background: g }}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === active}
          />
        ))}
      </div>
    </div>
  );
}