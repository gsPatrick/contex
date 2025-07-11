// --- START OF FILE Dobra4FeiraNetworking.js ---

'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Dobra4FeiraNetworking.module.css';

export default function Dobra4FeiraNetworking() {
    const [openAccordion, setOpenAccordion] = useState(0); // Abrir o primeiro item por padrão
    const sectionRef = useRef(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.isVisible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25 } // Dispara quando 25% da seção está visível
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            // Note: A cleanup function should unobserve the target if it's still being observed.
            // If the observer is already unobserved in the callback, this might not be strictly necessary,
            // but it's good practice for component unmounting.
            // Make sure 'entry.target' is available if needed here, or use sectionRef.current.
            // A safer cleanup might just disconnect the observer if needed.
            // Using sectionRef.current is safer if observer.unobserve(entry.target) already happened.
             if (sectionRef.current && observer) {
                 observer.unobserve(sectionRef.current);
             }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // Conteúdo da Dobra 4
    const title = "Explore as Maiores Novidades do Mercado:";
    const description = "Na feira comercial exclusiva do CONTOX Goiânia, você terá acesso direto às inovações que estão moldando o futuro da harmonização facial e estética avançada.";

    const accordionItems = [
        {
            title: "Networking com Líderes do Setor",
            content: "Conecte-se diretamente com mais de 40 empresas líderes, distribuidores e profissionais que estão na vanguarda da estética. Oportunidade única para parcerias e troca de conhecimento."
        },
        {
            title: "Acesso a Últimas Tecnologias",
            content: "Descubra e experimente em primeira mão os produtos e equipamentos mais inovadores do mercado. Mantenha-se à frente das tendências e leve o que há de mais moderno para sua prática."
        },
        {
            title: "Workshops Práticos e Aplicáveis",
            content: "Participe de workshops e demonstrações ao vivo que oferecem aplicação imediata no seu negócio. Transforme seu conhecimento em resultados reais e tangíveis."
        }
    ];

    const finalCtaText = "Transforme seu conhecimento em resultados reais. Garanta seu ingresso!";
    const finalCtaLink = "https://link-de-vendas-contox.com.br"; // Link de CTA para garantir ingresso

    // **VERIFIQUE O CAMINHO E NOME DA IMAGEM!**
    const imageSrc = "/images/contox-event-details-main.jpg"; // Salve a imagem na pasta public/images

    return (
        <section ref={sectionRef} className={`${styles.dobraSection} scroll-section`}>
            {/* Lado Esquerdo: Conteúdo e Acordeão */}
            <div className={styles.textSide}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <p className={styles.sectionDescription}>{description}</p>

                <div className={styles.accordion}>
                    {accordionItems.map((item, index) => (
                        <div key={index} className={styles.accordionItem}>
                            <button
                                className={`${styles.accordionHeader} ${openAccordion === index ? styles.isOpen : ''}`}
                                onClick={() => handleAccordionClick(index)}
                                aria-expanded={openAccordion === index}
                            >
                                {item.title}
                                <span className={`${styles.accordionIcon} ${openAccordion === index ? styles.isOpen : ''}`}></span>
                            </button>
                            <div className={`${styles.accordionContent} ${openAccordion === index ? styles.isOpen : ''}`}>
                                <div className={styles.accordionContentInner}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <a href={finalCtaLink} target="_blank" rel="noopener noreferrer" className={styles.finalCtaLink}>
                    {finalCtaText}
                    <span>→</span>
                </a>
            </div>

            {/* Lado Direito: Imagem */}
            <div className={styles.mediaSide}>
                <img
                    src={imageSrc}
                    alt="Feira Comercial e Networking no CONTOX Goiânia"
                    className={styles.productImage}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
// --- END OF FILE Dobra4FeiraNetworking.js ---