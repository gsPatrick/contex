// --- START OF FILE Dobra3Palestrantes.js ---

'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dobra3Palestrantes.module.css';

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
        threshold: 0.25, // Dispara quando 25% do elemento está visível
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

  const speakers = [
    { name: 'Dra. Ana Paula', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Dra.+Ana' },
    { name: 'Dr. João Pedro', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Dr.+Joao' },
    { name: 'Dra. Maria Luiza', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Dra.+Maria' },
    { name: 'Prof. Carlos Silva', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Prof.+Carlos' },
    { name: 'Dra. Gabriela Souza', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Dra.+Gabi' },
    { name: 'Dr. Ricardo Mendes', image: 'https://via.placeholder.com/300x300/1d012e/FF1E92?text=Dr.+Ricardo' },
    // Adicione mais palestrantes conforme necessário
  ];

  return (
    <section ref={sectionRef} className={`${styles.dobraSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>Aprenda diretamente com referências como:</h2>

        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={styles.speakerCard}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }} // Atraso para o stagger effect
            >
              <div className={styles.speakerImageContainer}>
                <img src={speaker.image} alt={speaker.name} className={styles.speakerImage} loading="lazy" />
              </div>
              <p className={styles.speakerName}>{speaker.name}</p>
            </div>
          ))}
        </div>

        <p className={styles.closingText}>E muitos outros nomes de destaque nacional e internacional!</p>
      </div>
    </section>
  );
}
// --- END OF FILE Dobra3Palestrantes.js ---