// --- START OF FILE Dobra5LotesUrgecia.js ---

'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Dobra5LotesUrgecia.module.css';

export default function Dobra5LotesUrgecia() {
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
        threshold: 0.3, // Dispara quando 30% do elemento está visível
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

  // Título da seção (chamada de urgência - sem emoji)
  const sectionIntro = {
    title: "Últimos Ingressos: Não perca sua chance no CONTOX Goiânia!",
    description: "Sua oportunidade de fazer parte do maior evento de Harmonização Facial e Estética Avançada do Centro-Oeste está se esgotando. Garanta seu lugar com condições especiais."
  };

  // Modificado: preço dividido em currencySymbol e amount para estilização
  const lots = [
    { id: 1, status: 'ESGOTADO', label: 'Pré-lote', currencySymbol: 'R$', amount: '650,00', highlight: false, soldOut: true, ctaLink: '' },
    { id: 2, status: 'APROVEITE!', label: '1º Lote (até 25/07)', currencySymbol: 'R$', amount: '750,00', highlight: true, soldOut: false, ctaLink: 'https://link-de-vendas-contox.com.br' },
    { id: 3, status: '', label: '2º Lote', currencySymbol: 'R$', amount: '850,00', highlight: false, soldOut: false, ctaLink: '' },
  ];

  const highlightedLot = lots.find(lot => lot.highlight);
  const secondaryLots = lots.filter(lot => !lot.highlight);

  const closingMessage = "Não perca a chance de garantir seu ingresso com condições especiais!";

  return (
    <section
      ref={sectionRef}
      className={`${styles.lotesSection} scroll-section ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.contentContainer}>
        {/* Título e Subtítulo da Seção */}
        <div className={styles.sectionIntro}>
            <h2 className={styles.sectionTitle}>{sectionIntro.title}</h2>
            <p className={styles.sectionDescription}>{sectionIntro.description}</p>
        </div>

        {/* Card Grande do Lote Principal */}
        {highlightedLot && (
            <div
                className={`${styles.lotCard} ${styles.highlightedLotCard} ${highlightedLot.soldOut ? styles.soldOut : ''}`}
                style={{ transitionDelay: `0.4s` }} // Atraso específico para o card principal
            >
                {highlightedLot.status && <span className={styles.lotStatus}>{highlightedLot.status}</span>}
                <p className={styles.lotLabel}>{highlightedLot.label}</p>
                <p className={styles.lotPrice}>
                    <span className={styles.currencySymbol}>{highlightedLot.currencySymbol}</span>
                    {highlightedLot.amount}
                </p>

                {!highlightedLot.soldOut && (
                    <a href={highlightedLot.ctaLink} target="_blank" rel="noopener noreferrer" className={styles.buyButton}>
                        Garanta o Seu Agora!
                    </a>
                )}
                {highlightedLot.soldOut && <div className={styles.soldOutOverlay}></div>}
            </div>
        )}

        {/* Cards dos Outros Lotes (Secundários) */}
        <div className={styles.secondaryLotsContainer}>
            {secondaryLots.map((lot, index) => (
                <div
                    key={lot.id}
                    className={`${styles.lotCard} ${styles.secondaryLotCard} ${lot.soldOut ? styles.soldOut : ''}`}
                    style={{ transitionDelay: `${0.6 + index * 0.15}s` }} // Atraso para os secundários
                >
                    {lot.status && <span className={styles.lotStatus}>{lot.status}</span>}
                    <p className={styles.lotLabel}>{lot.label}</p>
                    <p className={styles.lotPrice}>
                        <span className={styles.currencySymbol}>{lot.currencySymbol}</span>
                        {lot.amount}
                    </p>
                    {lot.soldOut && <div className={styles.soldOutOverlay}></div>}
                </div>
            ))}
        </div>

        <p className={styles.closingMessage} style={{ transitionDelay: `${0.8 + secondaryLots.length * 0.15}s` }}>
          {closingMessage}
        </p>
      </div>
    </section>
  );
}
// --- END OF FILE Dobra5LotesUrgecia.js ---