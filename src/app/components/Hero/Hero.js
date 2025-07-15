'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { useHeroVisibility } from '../../context/HeroVisibilityContext';

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const { setIsHeroVisible } = useHeroVisibility();

  // --- DATA ATUALIZADA PARA 15 DE AGOSTO DE 2025 ---
  const eventDate = new Date('2025-08-15T00:00:00').getTime();

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date().getTime();
    const now = new Date();
    const target = new Date(eventDate);

    // Se ainda há tempo
    if (difference > 0) {
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
        status: 'counting',
      };
    }

    // Se a diferença é negativa, checar se é o mesmo dia
    if (
        now.getFullYear() === target.getFullYear() &&
        now.getMonth() === target.getMonth() &&
        now.getDate() === target.getDate()
    ) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0, status: 'today' };
    }

    // Se já passou o dia do evento
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, status: 'expired' };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setIsHeroVisible]);

  // Prepara os componentes do timer para renderização
  const renderTimer = () => {
    return ['dias', 'horas', 'minutos', 'segundos'].map((interval) => (
      <div key={interval} className={styles.countdownItem}>
        <span className={styles.countdownValue}>
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className={styles.countdownLabel}>{interval.toUpperCase()}</span>
      </div>
    ));
  };


  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroBackground} ref={bgRef}></div>

      <div className={styles.heroContent}>
        <div className={styles.topBar}>
          <h2 className={styles.topBarLogo}>CONTOX Conf.</h2>
          {/* Você pode querer atualizar a data aqui também se for o caso */}
          <span className={styles.topBarInfo}>15, 16 e 17 DE AGOSTO DE 2025 | CENTRO DE CONVENÇÕES DE GOIÂNIA</span>
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>
            O Maior Evento de Harmonização Facial e Estética Avançada do Centro-Oeste!
          </h1>
          <p className={styles.heroSubtitle}>
            Três dias intensivos com os maiores nomes nacionais e internacionais da Harmonização. Networking premium,
            técnicas inovadoras e tendências exclusivas que vão transformar seu negócio e sua carreira.
          </p>

          {timeLeft.status === 'counting' && (
            <div className={styles.countdownTimer}>
              {renderTimer()}
            </div>
          )}

          {timeLeft.status === 'today' && (
            <>
              <p className={styles.eventStatusMessage}>O evento é hoje! Ainda dá tempo de garantir sua vaga!</p>
              <div className={styles.countdownTimer}>
                {renderTimer()}
              </div>
            </>
          )}

          {timeLeft.status === 'expired' && (
             <p className={styles.eventStatusMessage}>O evento já foi encerrado. Nos vemos na próxima edição!</p>
          )}

          {timeLeft.status !== 'expired' && (
            <a href="https://link-de-vendas-contox.com.br" target="_blank" className={`${styles.ctaButton} cta-ingresso animated-glow`}>
              GARANTIR MEU INGRESSO AGORA
            </a>
          )}
        </div>
      </div>
    </section>
  );
}