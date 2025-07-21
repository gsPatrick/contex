// --- START OF FILE Dobra7Faq.js ---

'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Dobra7Faq.module.css';

export default function Dobra7Faq() {
    // Estado para controlar qual item do acordeão está aberto.
    // Começa com null para nenhum item aberto por padrão, ou 0 para o primeiro aberto.
    const [openAccordion, setOpenAccordion] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

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
            { threshold: 0.2 } // Dispara quando 20% da seção está visível
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

    // Conteúdo das Perguntas Frequentes
    const faqItems = [
        {
            question: "O que é o CONTOX Goiânia 2025?",
            answer: "O CONTOX Goiânia é o maior evento de Harmonização Facial e Estética Avançada do Centro-Oeste, reunindo os maiores nomes nacionais e internacionais da área para três dias de imersão em conhecimento, técnicas e networking."
        },
        {
            question: "Quem deve participar do CONTOX?",
            answer: "O evento é ideal para profissionais da saúde e estética que buscam aprimoramento em harmonização facial, dermatologia estética e terapias avançadas, incluindo médicos, dentistas, biomédicos, enfermeiros estetas e farmacêuticos estetas."
        },
        {
            question: "O que está incluído no ingresso?",
            answer: "Seu ingresso garante acesso a todas as palestras, workshops (sujeitos a lotação ou inscrição prévia para alguns), acesso à feira comercial exclusiva e certificado de participação. Mais detalhes sobre pacotes específicos serão divulgados em breve."
        },

        {
            question: "Como posso me tornar um patrocinador ou expositor?",
            answer: "Empresas interessadas em expor seus produtos, serviços ou se tornarem patrocinadoras do CONTOX podem entrar em contato através do nosso WhatsApp ou e-mail na seção de contato. Teremos o prazer de apresentar as oportunidades disponíveis."
        },
        {
            question: "Qual o local e datas do evento?",
            answer: "O CONTOX Goiânia 2025 acontecerá nos dias 15, 16 e 17 de Agosto de 2025, no Centro de Convenções de Goiânia."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`${styles.faqSection} scroll-section ${isVisible ? styles.isVisible : ''}`}
        >
            <div className={styles.contentContainer}>
                <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>

                <div className={styles.accordion}>
                    {faqItems.map((item, index) => (
                        <div key={index} className={styles.accordionItem}>
                            <button
                                className={`${styles.accordionHeader} ${openAccordion === index ? styles.isOpen : ''}`}
                                onClick={() => handleAccordionClick(index)}
                                aria-expanded={openAccordion === index}
                            >
                                {item.question}
                                <span className={`${styles.accordionIcon} ${openAccordion === index ? styles.isOpen : ''}`}></span>
                            </button>
                            <div className={`${styles.accordionContent} ${openAccordion === index ? styles.isOpen : ''}`}>
                                <div className={styles.accordionContentInner}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
// --- END OF FILE Dobra7Faq.js ---