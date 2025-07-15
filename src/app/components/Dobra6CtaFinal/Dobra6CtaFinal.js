'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Dobra6CtaFinal.module.css';

export default function Dobra6CtaFinal() {
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
        threshold: 0.3,
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

  const locationTitle = "Local do Evento:";
  const locationName = "Centro de Convenções de Goiânia";
  const finalPhrase = "Seu crescimento profissional começa aqui.";
  const ctaLink = "https://www.sympla.com.br/evento/contox-goiania-2025/2609704";
  const ctaText = "GARANTIR MEU INGRESSO AGORA";

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.ctaFinalSection} scroll-section ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.contentContainer}>
        {/* Título do Local */}
        <h3 className={styles.locationTitle}>{locationTitle}</h3>
        <p className={styles.locationName}>{locationName}</p>
        
        {/* Container do Google Maps */}
        <div 
          className={styles.mapContainer}
          style={{ transitionDelay: '0.7s' }}
        >
          <iframe
            title="Local do Evento - Centro de Convenções de Goiânia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4465081825514!2d-49.2640993!3d-16.6762754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef13ee1d3fcbf%3A0x546c87f7f0ac442e!2sCentro%20de%20Conven%C3%A7%C3%B5es%20de%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1720693586943!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={styles.mapOverlayText}>
            R. 4, 1400 - St. Central, Goiânia - GO
          </div>
        </div>

        {/* Frase Final e CTA */}
        <p className={styles.finalPhrase} style={{ transitionDelay: '1.0s' }}>
          {finalPhrase}
        </p>

        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.ctaButton} cta-ingresso animated-glow`}
          style={{ transitionDelay: '1.2s' }}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
  