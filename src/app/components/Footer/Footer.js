'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef(null);
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
        threshold: 0.1, // Dispara quando 10% do footer está visível
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={`${styles.footerSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.contentContainer}>
        {/* Bloco Superior - REALIZAÇÃO / Logo / Slogan */}
        <p className={styles.createdBy}>REALIZAÇÃO</p>
        <div className={styles.logoContainer}>
          {/*
            IMPORTANTE: O logo da Facial Academy foi mantido como realizadora do evento.
            Se houver um logo específico para o CONTOX, substitua o 'src' abaixo.
          */}
          <img src="/images/logo.png" alt="Realização Facial Academy" className={styles.facialAcademyLogo} />
        </div>
        <h3 className={styles.mainHeadline}>CONTOX Goiânia 2025: O Maior Evento de Harmonização Facial e Estética Avançada do Centro-Oeste!</h3>
        <p className={styles.statistic}>Mais de 40 palestrantes. 3 dias de imersão total.</p>

        {/* Bloco de Contato / Endereço */}
        <div className={styles.contactBlock}>
          <p className={styles.contactText}>
            Dúvidas sobre o evento, parcerias ou necessidade de informações adicionais:
          </p>
          <p className={styles.contactText}>
            MS BUSINESS EVENTOS LTDA | CNPJ: 59.649.559/0001-90
          </p>
          <p className={styles.contactText}>
            Local: Centro de Convenções de Goiânia - R. 4, 1400 - St. Central, Goiânia - GO
          </p>
           <p className={styles.contactText}>
            Telefone:  62 99675 9228 | Email: <a href="mailto:contato@contox.com.br" className={styles.emailLink}>contato@contox.com.br</a>
          </p>
        </div>


        {/* Comissão Organizadora */}
 
        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Termos e Condições */}
        <p className={styles.termsText}>
          Ao se inscrever no CONTOX Goiânia 2025 ou navegar neste site, você concorda com nossos Termos de Uso e Política de Privacidade. Isto inclui o uso de cookies para melhorar sua experiência e o recebimento de comunicações sobre o evento e futuras oportunidades.
        </p>
      </div>
    </footer>
  );
}