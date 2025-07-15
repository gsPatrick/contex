'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './FixedCtaBar.module.css';
import { useHeroVisibility } from '../../context/HeroVisibilityContext';

// --- LÓGICA ATUALIZADA (MESMA DO HERO) ---
const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date().getTime();
    const now = new Date();
    const target = new Date(targetDate);

    if (difference > 0) {
        return {
            dias: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutos: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
            segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
            status: 'counting',
        };
    }
    
    if (
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate()
    ) {
        return { dias: '00', horas: '00', minutos: '00', segundos: '00', status: 'today' };
    }

    return { dias: '00', horas: '00', minutos: '00', segundos: '00', status: 'expired' };
};

export default function FixedCtaBar() {
  const { isHeroVisible } = useHeroVisibility();

  const eventDate = useMemo(() => new Date('2025-07-15T00:00:00').getTime(), []);
  
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(eventDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // --- CONDIÇÃO DE RENDERIZAÇÃO ATUALIZADA ---
  // Não renderiza se:
  // 1. O estado inicial for null
  // 2. O Hero estiver visível
  // 3. O evento já expirou (passou do dia)
  if (!timeLeft || isHeroVisible || timeLeft.status === 'expired') {
    return null;
  }

  const promoText = timeLeft.status === 'today' 
    ? "O evento é hoje! Compre agora:" 
    : "O lote promocional termina em:";

  return (
    <div className={styles.fixedBar}>
      <div className={styles.contentWrapper}>
        <div className={styles.promoTextContainer}>
          <span className={styles.promoText}>{promoText}</span>
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
          href="https://www.sympla.com.br/evento/contox-goiania-2025/2609704" 
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