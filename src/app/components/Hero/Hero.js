// --- START OF FILE Hero.js ---

'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  // Data do evento: 15 de março de 2025, 00:00:00 (ajustado para fuso horário local do cliente)
const eventDate = new Date('2025-07-15T00:00:00').getTime(); // Get time in milliseconds

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
        expired: true // Adicionar um flag para indicar que expirou
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Efeito Parallax no Scroll para o fundo
    const handleScroll = () => {
      if (heroRef.current && bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cronômetro: Atualiza o tempo restante a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpa os event listeners e o timer ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []); // Dependências vazias para rodar apenas uma vez na montagem

  // Prepara os componentes do timer para renderização
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (interval === 'expired') return; // Não renderizar a flag 'expired'
    timerComponents.push(
      <div key={interval} className={styles.countdownItem}>
        <span className={styles.countdownValue}>{timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]}</span>
        <span className={styles.countdownLabel}>{interval.toUpperCase()}</span>
      </div>
    );
  });

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroBackground} ref={bgRef}></div>

      <div className={styles.heroContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <h2 className={styles.topBarLogo}>CONTOX Conf.</h2>
          <span className={styles.topBarInfo}>15, 16 e 17 DE MARÇO DE 2025 | CENTRO DE CONVENÇÕES DE GOIÂNIA</span>
        </div>

        {/* Conteúdo de Texto Central */}
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>
            O Maior Evento de Harmonização Facial e Estética Avançada do Centro-Oeste!
          </h1>
          <p className={styles.heroSubtitle}>
            Três dias intensivos com os maiores nomes nacionais e internacionais da Harmonização. Networking premium,
            técnicas inovadoras e tendências exclusivas que vão transformar seu negócio e sua carreira.
          </p>

          {/* Cronômetro ou Mensagem de Evento Iniciado */}
          {timeLeft.expired ? (
            <p className={styles.eventStatusMessage}>O evento já começou!</p>
          ) : (
            <div className={styles.countdownTimer}>
              {timerComponents.length ? timerComponents : <span>Carregando cronômetro...</span>}
            </div>
          )}

          {/* Botão CTA */}
          <a href="https://link-de-vendas-contox.com.br" target="_blank" className={`${styles.ctaButton} cta-ingresso animated-glow`}>
            GARANTIR MEU INGRESSO AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
// --- END OF FILE Hero.js ---