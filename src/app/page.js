
import Hero from './components/Hero/Hero';
import DobraPatrocinadores from './components/DobraPatrocinadores/DobraPatrocinadores'; // 1. IMPORTAR O CARROSSEL
import Dobra2Beneficios from './components/Dobra2Beneficios/Dobra2Beneficios';
import Dobra3Palestrantes from './components/Dobra3Palestrantes/Dobra3Palestrantes';
import Dobra4FeiraNetworking from './components/Dobra4FeiraNetworking/Dobra4FeiraNetworking';
import Dobra5LotesUrgecia from './components/Dobra5LotesUrgecia/Dobra5LotesUrgecia';
import Dobra6CtaFinal from './components/Dobra6CtaFinal/Dobra6CtaFinal';
import Dobra7Faq from './components/Dobra7Faq/Dobra7Faq'; // Importa a nova dobra
import Footer from './components/Footer/Footer';
import DobraLotesPreview from './components/DobraLotesPreview/DobraLotesPreview'; // <-- IMPORTE O NOVO COMPONENTE

export default function Home() {
  return (
    <main>
      <Hero />
      <DobraPatrocinadores /> {/* 2. ADICIONAR O COMPONENTE AQUI */}
      <Dobra2Beneficios />
      <Dobra3Palestrantes />
      <Dobra4FeiraNetworking />
      <Dobra5LotesUrgecia />
            <DobraLotesPreview /> {/* <-- ADICIONE O NOVO COMPONENTE AQUI */}

      <Dobra6CtaFinal />
      <Dobra7Faq /> {/* Adiciona a nova dobra aqui */}
      < Footer />
      {/* O rodapé e o contador regressivo virão em seguida */}
    </main>
  );
}