import React from 'react';

const icons: Record<string, JSX.Element> = {
  React: (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="16" cy="16" r="3" />
      <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(-60 16 16)" />
      <ellipse cx="16" cy="16" rx="14" ry="5" />
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
      <path d="M6 26h14.3l5.5-8.9-2.7-4.8L6 26Z" fill="#FFC400" />
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
  // adicione outros se precisar
};

export function IconTech({ name }: { name: string }) {
  const key = normalize(name);
  return icons[key] ?? null;
}

function normalize(n: string) {
  return n.trim()
    .replace(/React\s*Native/i, 'React Native')
    .replace(/^Typescript$/i, 'TypeScript')
    .replace(/^Node\.?js$/i, 'Node.js')
    .replace(/^Next\.?js$/i, 'Next.js')
    .replace(/^Socket\.?io$/i, 'SocketIO');
}