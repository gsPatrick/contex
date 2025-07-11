'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './FixedCtaBar.module.css';
import { useHeroVisibility } from '../../context/HeroVisibilityContext'; // Importa o hook do contexto

// Função para calcular o tempo restante.
const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - new Date().getTime();
  
  if (difference > 0) {
    return {
      dias: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutos: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }
  return null; // Retorna null se o tempo já expirou
};

export default function FixedCtaBar() {
  const { isHeroVisible } = useHeroVisibility(); // Acessa o estado de visibilidade do Hero

  // A data do evento, a mesma do Hero.
  const eventDate = useMemo(() => new Date('2025-07-15T00:00:00').getTime(), []);
  
  // Estado para o contador
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // Define o valor inicial assim que o componente é montado no cliente
    setTimeLeft(calculateTimeLeft(eventDate));

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(eventDate);
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // CONDIÇÃO DE RENDERIZAÇÃO ATUALIZADA:
  // Não renderiza a barra se:
  // 1. O contador ainda não foi calculado (timeLeft é null)
  // 2. O Hero está visível na tela
  if (!timeLeft || isHeroVisible) {
    return null;
  }

  return (
    <div className={styles.fixedBar}>
      <div className={styles.contentWrapper}>
        <div className={styles.promoTextContainer}>
          <span className={styles.promoText}>O evento começa em:</span>
        </div>

        <div className={styles.countdown}>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.dias}</span>
            <span className={styles.countdownLabel}>Dias</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.horas}</span>
            <span className={styles.countdownLabel}>Hrs</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.minutos}</span>
            <span className={styles.countdownLabel}>Min</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.segundos}</span>
            <span className={styles.countdownLabel}>Seg</span>
          </div>
        </div>
        
        <a 
          href="https://link-de-vendas-contox.com.br" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.ctaButton}
        >
          Comprar Ingresso
        </a>
      </div>
    </div>
  );
}