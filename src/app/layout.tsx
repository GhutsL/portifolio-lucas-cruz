import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { ScrollNav } from '@/components/ScrollNav';
import { Footer } from '@/components/Footer';
import FloatingLines from '@/components/FloatingLines';

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
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1,
          pointerEvents: 'none'
        }}>
          <FloatingLines 
            linesGradient={undefined}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[7, 7, 7]}
            lineDistance={[8, 6, 4]}
            topWavePosition={undefined}
            middleWavePosition={undefined}
            bottomWavePosition={{ x: 2.0, y: -0.7, rotate: -1 }}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
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
