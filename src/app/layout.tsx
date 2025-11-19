import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { ScrollNav } from '@/components/ScrollNav';
import { Footer } from '@/components/Footer';

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
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <a href="#conteudo-principal" className="skip-link">Pular para conteúdo</a>
        <ScrollNav />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
