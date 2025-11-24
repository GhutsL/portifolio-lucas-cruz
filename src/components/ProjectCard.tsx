import { Project } from '@/data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { IconTech } from './IconTech';
import React from 'react';
import Image from 'next/image';

const techIcons: Record<string, React.ReactElement> = {
  React: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="16" cy="16" r="3" />
      <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(-60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5" />
    </svg>
  ),
  'React Native': (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="16" cy="16" r="3" />
      <ellipse cx="16" cy="16" rx="12" ry="4" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4" transform="rotate(-60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <rect width="32" height="32" rx="4" fill="#F7DF1E" />
      <path fill="#000" d="M18.5 19.5c0 2.5 1.5 3.7 3.6 3.7 1.5 0 2.5-.8 3-1.8l-1.5-1c-.3.6-.7.9-1.5.9-.8 0-1.2-.5-1.2-1.8v-7h-2.4v7Zm-7.5 0c0 2.5 1.5 3.7 3.5 3.7 1.5 0 2.4-.8 2.9-1.8l-1.5-1c-.3.6-.6.9-1.4.9-.9 0-1.1-.6-1.1-1.8v-7h-2.4v7Z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path fill="#fff" d="M14.2 17.3h3.1v9.7h2.6v-9.7h3.1v-2.3h-8.8v2.3Zm9.5 9.6c1.6 0 2.9-.6 3.7-1.6l-1.7-1.6c-.5.6-1.2 1-2 .9-1.1 0-1.9-.8-1.9-2s.8-2 1.9-2c.8 0 1.5.4 2 .9l1.7-1.6c-.8-1-2.1-1.6-3.7-1.6-2.6 0-4.5 1.8-4.5 4.3 0 2.5 1.9 4.3 4.5 4.3Z" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M15.9 2 4 8.2v15.6L15.9 30 28 23.8V8.2L15.9 2Zm8.6 19.8c0 .5-.2.9-.7 1.1l-7 3.9c-.4.2-.9.2-1.3 0l-7-3.9c-.4-.2-.7-.6-.7-1.1V10c0-.5.3-.9.7-1.1l2.8-1.6c.9-.5 1 .5 1 .9v11.8c0 .4.3.8.7 1l2.5 1.4c.2.1.5.1.8 0l2.5-1.4c.4-.2.7-.6.7-1V8.3c0-.7.5-1.1 1-.9l2.8 1.6c.4.2.7.6.7 1.1v11.5Z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M6 26 8.2 6.9c.2-1.3 1.7-1.7 2.4-.6l4.1 6.7 2.2-8.2c.3-1 1.5-1.1 2-.2l6.9 12.5L20.3 26H6Z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M15.4 2.4c.3-.3.8-.3 1 .1 6.4 9.6 5.9 17.7-.3 25.3-.3.4-.9.3-1-.2-1.3-4.6-2.3-9.2-2.2-13.8.1-4.6 1-8.7 2.5-11.4Zm1.3 23.1c4.4-6.4 4.6-13.1.2-20.2-1.7 3.8-2.4 7.7-2.5 11.6 0 3.9.7 7.7 2.3 8.6Z" />
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm5.5 19.9-6-8.6v8.2h-1.6V10.1h1.5l6 8.5V10h1.6v11.9h-1.5Z" />
    </svg>
  ),
  SocketIO: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm1.9 21.6-2.8-2.8L21 13l-2.7-.6-5.3 7.8 2.7.6 5.3-7.8-2.7-.6-5.3 7.8 2.8 2.8Z" />
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      <path d="M23.6 13.5c0-3.2-2.6-4.4-5.2-4.4-2.7 0-4.6 1.4-4.6 1.4l.6 1.9s1.7-1.2 3.9-1.2c1.3 0 2.7.5 2.7 1.9 0 2.9-7.5 1.1-7.5 6.1 0 2.9 2.6 4.2 5.1 4.2 2.5 0 3.7-1.4 3.7-1.4l-.6-1.8s-1.2 1.1-3.1 1.1c-1.3 0-2.9-.5-2.9-1.9 0-3 7.5-1.2 7.5-6Z" />
    </svg>
  ),
};

function normalizeTechName(name: string) {
  return name.trim()
    .replace(/React\s*Native/i, 'React Native')
    .replace(/^Node\.?js$/i, 'Node.js')
    .replace(/^Next\.?js$/i, 'Next.js')
    .replace(/^Socket\.?io$/i, 'SocketIO')
    .replace(/^Typescript$/i, 'TypeScript')
    .replace(/^Javascript$/i, 'JavaScript');
}

export function ProjectCard({ project }: { project: any }) {
  const raw = project.stack ?? project.technologies ?? project.tech ?? [];
  const techList: string[] = Array.isArray(raw)
    ? raw.map(t => normalizeTechName(typeof t === 'string' ? t : (t?.name ?? '')))
        .filter(Boolean)
    : [];

  const projectImages = project.id === 'CERNE' ? [
    '/Cerne1.jpg',
    '/Cerne2.jpg',
    '/Cerne3.jpg',
    '/Cerne4.jpg',
  ] : project.id === 'Simpliza TCC' ? [
    '/Simpliza1.jpg',
    '/Simpliza2.jpg',
    '/Simpliza3.jpg',
    '/Simplzia4.jpg',
  ] : [];

  return (
    <article className="project-item high-contrast" aria-labelledby={`proj-${project.id}`}>
      <ProjectCarousel images={projectImages} label={project.title} />
      <div className="project-info">
        <h3 id={`proj-${project.id}`}>{project.title}</h3>
        <p>{project.description}</p>
        {techList.length > 0 && (
          <div className="project-tech-buttons">
            {techList.map(t => (
              <button key={t} type="button" className="btn tech-btn" aria-label={t}>
                <span className="tech-icon"><IconTech name={t} /></span>
                <span className="tech-text">{t}</span>
              </button>
            ))}
          </div>
        )}
        <div className="actions">
          {project.repoUrl && (
            <a className="btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  );
}