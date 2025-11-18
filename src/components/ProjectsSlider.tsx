'use client';
import { useState, useCallback } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  const current = projects[index];

  return (
    <div className="projects-slider" aria-label="Carrossel de projetos">
      <div className="projects-slider-inner">
        <ProjectCard project={current} />
      </div>
      <div className="projects-slider-nav">
        <button type="button" onClick={prev} aria-label="Projeto anterior" className="projects-slider-btn">
          ‹
        </button>
        <span className="projects-slider-status">
          {index + 1} / {total}
        </span>
        <button type="button" onClick={next} aria-label="Próximo projeto" className="projects-slider-btn">
          ›
        </button>
      </div>
      <div className="projects-slider-dots" role="tablist" aria-label="Selecionar projeto">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`dot ${i === index ? 'active' : ''}`}
            aria-label={`Ir para ${p.title}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}