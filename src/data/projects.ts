export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  gradients: string[];
}

export const projects: Project[] = [
  {
    id: 'CERNE',
    title: 'CERNE - Aplicativo de Notas e Desenhos',
    description: 'CERNE é um aplicativo de anotações mobile first construído com React Native e Expo. Ele se destaca por permitir a criação de notas de texto e desenhos à mão livre sincronizados em tempo real via Firebase. O design é inspirado em tons de madeira, refletindo o conceito de "cerne" (núcleo).',
    tech: ['React', 'Node.js', 'Firebase', 'TypeScript','Javascript'],
    repoUrl: 'https://github.com/igorgianeri/projeto-blocodenotas',
    demoUrl: '#',
    gradients: [
      'linear-gradient(135deg,#0fb6ff,#6b3cff)',
      'linear-gradient(135deg,#6b3cff,#5bd0a3)',
      'linear-gradient(135deg,#5bd0a3,#0fb6ff)',
      'linear-gradient(135deg,#0fb6ff,#ff6b9d)',
    ],
  },
  {
    id: 'Simpliza TCC',
    title: 'Simpliza',
    description: 'Simpliza é um aplicativo mobile desenvolvido em React Native, criado para auxiliar MEIs e pequenos empreendedores no controle das suas finanças mensais. Ele permite registrar ganhos e gastos e visualizar gráficos financeiros.',
    tech: ['Node.js', 'React', 'Firebase'],
    repoUrl: 'https://github.com/DanielAzeved0/Simpliza-TCC',
    demoUrl: '#',
    gradients: [
      'linear-gradient(135deg,#5bd0a3,#ff6b9d)',
      'linear-gradient(135deg,#0fb6ff,#5bd0a3)',
      'linear-gradient(135deg,#6b3cff,#0fb6ff)',
      'linear-gradient(135deg,#ff6b9d,#ffa500)',
    ],
  },
];