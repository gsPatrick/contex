'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './DobraLotesPreview.module.css';

export default function DobraLotesPreview() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.dobraSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Garanta sua vaga com antecedência</h2>
        <p className={styles.sectionSubtitle}>
          Os lotes são limitados e os preços sobem a cada virada. Planeje-se e garanta o melhor valor.
        </p>

        <div className={styles.cardGrid}>
          {/* Card 1: Pré-Lote ESGOTADO */}
          <div className={`${styles.card} ${styles.isSoldOut}`}>
            <div className={styles.statusLabel}>PRÉ-LOTE</div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>A oportunidade para os mais rápidos já passou.</p>
              <h3 className={styles.cardPrice}>R$ 650,00</h3>
              <div className={`${styles.actionButton} ${styles.soldOutButton}`}>
                ESGOTADO
              </div>
            </div>
          </div>

          {/* Card 2: 2º Lote EM BREVE */}
          <div className={`${styles.card} ${styles.isUpcoming}`}>
            <div className={styles.statusLabel}>2º LOTE</div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>Prepare-se para a próxima abertura de vendas.</p>
              <h3 className={styles.cardPrice}>R$ 850,00</h3>
              <div className={`${styles.actionButton} ${styles.soonButton}`}>
                EM BREVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}