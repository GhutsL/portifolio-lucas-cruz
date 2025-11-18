import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { ScrollNav } from '@/components/ScrollNav';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' });
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfólio — Lucas Matias',
  description: 'Portfólio pessoal — Desenvolvedor Fullstack',
  openGraph: {
    title: 'Portfólio — Lucas Matias',
    description: 'Projetos e experiência como desenvolvedor Fullstack.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-dominio.com',
    siteName: 'Portfólio Lucas Matias',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio — Lucas Matias',
    description: 'Conheça meus projetos e stack.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#07090b',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const year = new Date().getFullYear();
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <a href="#conteudo-principal" className="skip-link">Pular para conteúdo</a>
        <ScrollNav />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="social" aria-label="Links sociais">
              <a href="https://github.com/GhutsL" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.15c0 4.47 2.86 8.26 6.83 9.62.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.15C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/lucas-cruz-a937a3330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.82v2.13h.05c.53-1 1.83-2.13 3.76-2.13 4.02 0 4.77 2.64 4.77 6.07V23h-4v-8.03c0-1.44-.03-3.29-2-3.29-2 0-2.31 1.56-2.31 3.18V23h-4V8Z" />
                </svg>
              </a>
              <a href="mailto:seuemail@dominio.com" aria-label="Enviar e-mail">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
              </a>
            </div>
            <small>&copy; {year} Lucas Matias. Todos os direitos reservados.</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
