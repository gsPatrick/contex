// --- START OF FILE layout.js ---

import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import FixedCtaBar from './components/FixedCtaBar/FixedCtaBar';
import { HeroVisibilityProvider } from './context/HeroVisibilityContext'; // 1. IMPORTAR O PROVIDER

// ... (configuração das fontes)

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'CONTOX Goiânia 2025',
  description: 'O Maior Evento de Harmonização Facial e Estética Avançada do Centro-Oeste!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>{/* ... */}</head>
      <body>
        {/* 2. ENVOLVER TUDO COM O PROVIDER */}
        <HeroVisibilityProvider>
          {children}
          <FixedCtaBar />
        </HeroVisibilityProvider>
      </body>
    </html>
  );
}