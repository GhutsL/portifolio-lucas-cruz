export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

export const SOCIAL_LINKS = {
  github: {
    name: 'GitHub',
    url: 'https://github.com/GhutsL',
    ariaLabel: 'Visite meu perfil no GitHub',
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucas-cruz-a937a3330/',
    ariaLabel: 'Visite meu perfil no LinkedIn',
  },
  email: {
    name: 'E-mail',
    url: 'mailto:lucasmatiasc2004@gmail.com',
    ariaLabel: 'Enviar e-mail',
  },
} as const;

export const FOOTER_TEXT = {
  copyright: (year: number) => `© ${year} Lucas Cruz. Todos os direitos reservados.`,
  socialLabel: 'Links sociais',
} as const;
