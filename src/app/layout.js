// --- START OF FILE layout.js ---

import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import FixedCtaBar from './components/FixedCtaBar/FixedCtaBar';
import { HeroVisibilityProvider } from './context/HeroVisibilityContext';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'; // 1. IMPORTAR O BOTÃO

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
      <head>{/* Next.js gerencia as tags <head> principais aqui */}</head>
      <body>
        <HeroVisibilityProvider>
          {children}
          <FixedCtaBar />
          <WhatsAppButton /> {/* 2. ADICIONAR O COMPONENTE DO BOTÃO AQUI */}
        </HeroVisibilityProvider>
      </body>
    </html>
  );
}