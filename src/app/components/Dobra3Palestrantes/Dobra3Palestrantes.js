// --- START OF FILE Dobra3Palestrantes.js ---

'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dobra3Palestrantes.module.css';

// DADOS ATUALIZADOS com as informações da sua captura de tela
const speakers = [
  {
    name: 'Nelson Mauricio',
    description: 'Farmacêutico Bioquímico e Coordenador de Cursos para Profissionais para a Saúde da Pele.',
    image: '/images/nelson-mauricio.png', // Substitua pelo caminho real
    country: '🇧🇷',
  },
  {
    name: 'Lucila Largura',
    description: 'Mais de 30 mil pacientes em mais de 20 anos de Clínica e Ensino em Estética. Pioneira na HOF.',
    image: '/images/lucila-largura.png',
    country: '🇧🇷',
  },
  {
    name: 'Fabio Azevedo',
    description: 'Clínico, professor e palestrante na HOF. Um dos maiores especialistas em pele do Brasil.',
    image: '/images/fabio-azevedo.png',
    country: '🇧🇷',
  },
  {
    name: 'Rafael Nunes',
    description: 'Um Médico Cirurgião Plástico que está a frente do seu tempo e quebra paradigmas.',
    image: '/images/rafael-nunes.png',
    country: '🇧🇷',
  },
  {
    name: 'Bruno Bastos',
    description: 'O showman da HOF com milhares de alunos formados no Brasil e diversos países do mundo.',
    image: '/images/bruno-bastos.png',
    country: '🇧🇷',
  },
  {
    name: 'Wanessa Westphal',
    description: 'Referência internacional em Bioestimuladores e técnicas inovadoras para Estética.',
    image: '/images/wanessa-westphal.png',
    country: '🇧🇷',
  },
  {
    name: 'Roberto Pacheco',
    description: 'Mestre em Harmonização Facial e ex-coordenador do MARC Institute, internacional e grande referência.',
    image: '/images/roberto-pacheco.png',
    country: '🇧🇷',
  },
  {
    name: 'Luciana Orsi',
    description: 'Enfermeira há 16 anos e Especialista em Estética Avançada. Auxilia na transição de carreira de outras profissionais da área.',
    image: '/images/luciana-orsi.png',
    country: '🇧🇷',
  },
  {
    name: 'Eduardo Picanço',
    description: 'A maior autoridade em gestão e otimização de clínicas de HOF, sempre com aulas incríveis.',
    image: '/images/eduardo-picanco.png',
    country: '🇧🇷',
  },
  {
    name: 'Adriano Schalins',
    description: 'Pioneiro e coordenador de especialização em Harmonização Facial no Brasil.',
    image: '/images/adriano-schalins.png',
    country: '🇧🇷',
  },
  {
    name: 'Junior Gouvea',
    description: 'Um dos maiores professores do Rio. Temido pela sua técnica de Rinomodelação. Especialista e mestre em HOF.',
    image: '/images/junior-gouvea.png',
    country: '🇧🇷',
  },
  {
    name: 'Isabela Mafissoni',
    description: 'Especialista em Harmonização Facial e professora de destaque no centro oeste do Brasil.',
    image: '/images/isabela-mafissoni.png',
    country: '🇧🇷',
  },
  // --- NOVOS PALESTRANTES ADICIONADOS ABAIXO ---
  {
    name: 'Aroldo Alves Junior',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/Aroldo.png',
    country: '🇧🇷',
  },
  {
    name: 'Vitor Natal',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/VitorNatal.png',
    country: '🇧🇷',
  },
  {
    name: 'Ricardo Amore',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/RicardoAmore.png',
    country: '🇧🇷',
  },
  {
    name: 'Wagner Noda',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/WagerNoda.png',
    country: '🇧🇷',
  },
  {
    name: 'Guilherme Manço',
    description: 'Conhecido como Dr. da Beleza, é especialista em Harmonização Facial.',
    image: '/images/GuilhermeManco.png',
    country: '🇧🇷',
  },
  {
    name: 'Vitor Pracheds',
    description: 'Especialista em Tráfego Pago e Times Comerciais para Clínicas de Harmonização Facial',
    image: '/images/VitorPracheds.png',
    country: '🇧🇷',
  },
  {
    name: 'Kenedy Kuhn',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/kenedy-kuhn.png',
    country: '🇧🇷',
  },
  {
    name: 'Cristiane Melgaço',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/CristianeMelgaco.png',
    country: '🇧🇷',
  },
  {
    name: 'Ludmilla Reis',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/LudmilaReis.png',
    country: '🇧🇷',
  },
  {
    name: 'Alessandra Kichese',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/Alessandra.png',
    country: '🇧🇷',
  },
  {
    name: 'Lorise Gonçalves',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/Lorise.png',
    country: '🇧🇷',
  },
  {
    name: 'Simone Lopes',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/SimoneLopes.png',
    country: '🇧🇷',
  },
  {
    name: 'Ana Martins',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/AnaMartins.png',
    country: '🇧🇷',
  },
  {
    name: 'Paola Farneze',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/PaolaFarneze.png',
    country: '🇧🇷',
  },
  {
    name: 'Jessica Dallila Morsoletto',
    description: 'Palestrante internacional, trazendo as últimas tendências para o CONTOX.',
    image: '/images/JessicaD.png',
    country: '🇧🇴',
  },
  {
    name: 'Andréa Barría',
    description: 'Palestrante internacional, trazendo as últimas tendências para o CONTOX.',
    image: '/images/AndreaBarria.png',
    country: '🇨🇱',
  },
  {
    name: 'Débora Preto',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/DeboraPreto.png',
    country: '🇧🇷',
  },
  {
    name: 'Isabela Bittencourt',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/Isabelaum.png',
    country: '🇧🇷',
  },
  {
    name: 'Carolina Gomes',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/CarolinaGomes.png',
    country: '🇧🇷',
  },
  {
    name: 'Gabriela Moraes',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/GabrielaMoraes.png',
    country: '🇧🇷',
  },
  {
    name: 'Ana Paula Leal',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/AnaPaula.png',
    country: '🇧🇷',
  },
  {
    name: 'Gabriel Machado',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/GabrielMachado.png',
    country: '🇧🇷',
  },
  {
    name: 'Leandro Rago',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/LeandroRago.png',
    country: '🇧🇷',
  },
  {
    name: 'Leonardo Rezende',
    description: 'Especialista em Harmonização Facial, referência em sua área de atuação.',
    image: '/images/LeonardoRezende.png',
    country: '🇧🇷',
  },
];


export default function Dobra3Palestrantes() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // ----- CORREÇÃO APLICADA AQUI -----
        // Alterado de 0.1 para 0.
        // Isso garante que a animação dispare assim que o primeiro pixel
        // da seção entrar na tela, resolvendo o problema em dispositivos móveis.
        threshold: 0, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section ref={sectionRef} className={`${styles.dobraSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>Um time de palestrantes de peso</h2>
        <p className={styles.sectionSubtitle}>
          Aprenda diretamente com as maiores autoridades e referências que estão moldando o futuro da estética avançada no Brasil e no mundo.
        </p>

        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={styles.speakerCard}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }} // Atraso para o stagger effect
            >
              <div className={styles.imageContainer}>
                <div className={styles.blobBackground}></div>
                <img src={speaker.image} alt={`Foto de ${speaker.name}`} className={styles.speakerImage} loading="lazy" />
              </div>

              <div className={styles.textContainer}>
                <h3 className={styles.speakerName}>
                  {speaker.name}
                  {speaker.country && <span className={styles.countryFlag}>{speaker.country}</span>}
                </h3>
                <p className={styles.speakerDescription}>{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.closingText}>E muitos outros nomes de destaque nacional e internacional!</p>
      </div>
    </section>
  );
}
// --- END OF FILE Dobra3Palestrantes.js ---