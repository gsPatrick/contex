'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { useHeroVisibility } from '../../context/HeroVisibilityContext'; // Importa o hook do contexto

export default function Hero() {
  const heroRef = useRef(null); // Ref para a seção <section>
  const bgRef = useRef(null);
  const { setIsHeroVisible } = useHeroVisibility(); // Acessa a função para atualizar o contexto

  // Data do evento: 15 de JULHO de 2025, 00:00:00
  const eventDate = new Date('2025-07-15T00:00:00').getTime();

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
        expired: true
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Efeito Parallax
    const handleScroll = () => {
      if (heroRef.current && bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cronômetro
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Intersection Observer para controlar a visibilidade
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualiza o estado global com base na visibilidade do Hero
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ativa quando 10% do Hero está visível/invisível
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setIsHeroVisible]); // Adiciona setIsHeroVisible como dependência

  // Prepara os componentes do timer para renderização
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (interval === 'expired') return;
    timerComponents.push(
      <div key={interval} className={styles.countdownItem}>
        <span className={styles.countdownValue}>{timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]}</span>
        <span className={styles.countdownLabel}>{interval.toUpperCase()}</span>
      </div>
    );
  });

  return (
    // O ref é adicionado aqui na tag <section>
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroBackground} ref={bgRef}></div>

      <div className={styles.heroContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <h2 className={styles.topBarLogo}>CONTOX Conf.</h2>
          <span className={styles.topBarInfo}>15, 16 e 17 DE JULHO DE 2025 | CENTRO DE CONVENÇÕES DE GOIÂNIA</span>
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