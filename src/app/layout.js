import './globals.css';
// Importe Playfair_Display, remova Great_Vibes
import { Playfair_Display, Montserrat } from 'next/font/google';

// Configura as fontes do Google Fonts para uso no Next.js
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Playfair Display tem esses pesos
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
      <head>
        {/* Se quiser os ícones Font Awesome, descomente e adicione o link aqui: */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-...seu-hash-aqui..." crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}