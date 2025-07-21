'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dobra3PalestrantesAdicionais.module.css';

// DADOS ATUALIZADOS com os novos nomes de arquivo das imagens
const newSpeakers = [
  {
    name: 'Aroldo Alves Junior',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/3e748749-7252-4e3a-967f-8308c65970fa.png',
    country: '🇧🇷',
  },
  {
    name: 'Vitor Natal',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/81dadc6f-a545-45d8-b5b6-3935ca46cc9.png',
    country: '🇧🇷',
  },
  {
    name: 'Ricardo Amore',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/c944e95e-3d8d-40f3-8042-0b26cf8c65c.png',
    country: '🇧🇷',
  },
  {
    name: 'Wagner Noda',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/bc547dcf-1c3d-4711-80a7-6e4aeacdaa64.png',
    country: '🇧🇷',
  },
  {
    name: 'Guilherme Manço',
    description: 'Dr. da Beleza, especialista em estética avançada.',
    image: '/palestra/43eb3f77-d3f6-47a3-afc9-5dcacfcd0fa.png',
    country: '🇧🇷',
  },
  {
    name: 'Vitor Pracheds',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/514f8d6a-9101-4bd1-a956-508b0c50d216.png',
    country: '🇧🇷',
  },
  {
    name: 'Kenedy Kuhn',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/e7190843-e95f-4d08-a42f-e1cebec3d8c8.png',
    country: '🇧🇷',
  },
  {
    name: 'Cristiane Melgaço',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/a39399e6-f89b-497e-b308-77c8e7cfb11e.png',
    country: '🇧🇷',
  },
  {
    name: 'Ludmilla Reis',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/de9b1b50-43ab-425d-a077-aa8fddbce153.png',
    country: '🇧🇷',
  },
  {
    name: 'Alessandra Kichese',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/0a469a9b-311c-479a-9118-ff31c56c256c2.png',
    country: '🇧🇷',
  },
  {
    name: 'Lorise Gonçalves',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/7f536972-44d0-4019-ab12-3b95e395ef9f.png',
    country: '🇧🇷',
  },
  {
    name: 'Simone Lopes',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/e737756d-d1d8-4810-ab77-aa8fdddcd148.png',
    country: '🇧🇷',
  },
  {
    name: 'Ana Martins',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/e4a4becb-440a-4711-80a7-6e4aeacdaa64.png',
    country: '🇧🇷',
  },
  {
    name: 'Paola Farneze',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/PaolaFarneze.png',
    country: '🇧🇷',
  },
  {
    name: 'Jessica Dallila Morsoletto',
    description: 'Especialista internacional em HOF.',
    image: '/palestra/jessica-morsoletto.png', // NOTA: Imagem não encontrada, mantido caminho antigo.
    country: '🇧🇴',
  },
  {
    name: 'Andréa Barría',
    description: 'Referência em estética facial diretamente do Chile.',
    image: '/palestra/andrea-barria.png', // NOTA: Imagem não encontrada, mantido caminho antigo.
    country: '🇨🇱',
  },
  {
    name: 'Débora Preto',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/720c9fd5-c644-406e-9191-c718f48b5cef.png',
    country: '🇧🇷',
  },
  {
    name: 'Isabela Bittencourt',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/9455c18c-c9c4-4f09-b87b-a4e302b9b90e.png',
    country: '🇧🇷',
  },
  {
    name: 'Carolina Gomes',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/c71edc60-b77e-4e94-a912-8a9d3c8d6c5d.png',
    country: '🇧🇷',
  },
  {
    name: 'Gabriela Moraes',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/gabriela-moraes.png', // NOTA: Imagem não encontrada, mantido caminho antigo.
    country: '🇧🇷',
  },
  {
    name: 'Ana Paula Leal',
    description: 'Palestrante confirmada para o CONTOX Goiânia 2025.',
    image: '/palestra/ana-paula-leal.png', // NOTA: Imagem não encontrada, mantido caminho antigo.
    country: '🇧🇷',
  },
  {
    name: 'Gabriel Machado',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/802e01df-1f25-4205-b32a-63d67f7c966.png',
    country: '🇧🇷',
  },
  {
    name: 'Leandro Rago',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/1e82a400-f402-4ab3-aa0d-c2c085e620b5.png',
    country: '🇧🇷',
  },
  {
    name: 'Leonardo Rezende',
    description: 'Palestrante confirmado para o CONTOX Goiânia 2025.',
    image: '/palestra/c2950244-661c-4045-a190-28b0aecdf34a0.png',
    country: '🇧🇷',
  },
];


export default function Dobra3PalestrantesAdicionais() {
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
        threshold: 0.1,
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
        <h2 className={styles.sectionTitle}>E mais estes gigantes da HOF</h2>
        <p className={styles.sectionSubtitle}>
          Um line-up de peso, com ainda mais especialistas prontos para compartilhar conhecimento de ponta.
        </p>

        <div className={styles.speakersGrid}>
          {newSpeakers.map((speaker, index) => (
            <div
              key={index}
              className={styles.speakerCard}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
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
      </div>
    </section>
  );
}