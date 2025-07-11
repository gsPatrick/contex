'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dobra5LotesUrgencia.module.css';

// Componente para o ícone de check verde, como na imagem
const CheckIcon = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#22C55E" />
    <path d="M8 12.5L11 15.5L16.5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Dados dos benefícios replicados da imagem
const benefits = [
  { title: 'Certificado Oficial', description: 'Emitido pela renomada São Leopoldo Mandic.' },
  { title: 'Acesso total aos 2 dias de evento', description: null },
  { title: '130+ conteúdos disponíveis', description: 'Uma imersão em temas atuais, tendências e práticas do universo odontológico.' },
  { title: 'Condições exclusivas de compra com os patrocinadores', description: 'Vantagem que só participantes tem acesso.' },
  { title: 'Acesso prioritário à experiência "Hands On"', description: 'Interaja com as atividades e experiências práticas do evento.' },
  { title: 'Aplicativo oficial do evento', description: 'Conecte-se, monte sua agenda, interaja e aproveite cada detalhe com praticidade.' },
  { title: 'Acesso ao Food Park', description: null },
];

export default function Dobra5LotesUrgencia() {
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

        {/* --- COLUNA ESQUERDA --- */}
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <h2 className={styles.title}>Lote 01 liberado</h2>
            <div className={styles.urgencyBar}>
              <span>70% dos Ingressos vendidos. Não fique de fora!</span>
            </div>
          </div>

          <div className={styles.benefitsList}>
            {benefits.map((item, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitText}>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  {item.description && <p className={styles.benefitDescription}>{item.description}</p>}
                </div>
                <CheckIcon />
              </div>
            ))}
          </div>
        </div>

        {/* --- COLUNA DIREITA --- */}
        <div className={styles.rightColumn}>
          <div className={styles.pricingCard}>
            <div className={styles.cardHeader}>
              <h3>Contex Ingresso</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.priceInfo}>
                <p className={styles.noInterest}>Compre sem juros</p>
              
                <p className={styles.currentPrice}>R$ 750,00</p>
                
              </div>
              <a href="#" className={styles.buyButton}>
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footerNote}>
        Todas as experiências estão sujeitas a lotações. Participantes com acesso prioritário têm acesso às salas antes de participantes com acesso comum.
      </p>
    </section>
  );
}