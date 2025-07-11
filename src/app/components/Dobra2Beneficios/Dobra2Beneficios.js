// --- START OF FILE Dobra2Beneficios.js ---

'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dobra2Beneficios.module.css';

export default function Dobra2Beneficios() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

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

  const sectionDescriptionText = "Descubra os principais diferenciais que fazem do CONTOX Goiânia o evento mais aguardado do ano para profissionais que buscam excelência e inovação.";

  const accordionItems = [
    {
        title: "Acesso a Palestras e Mentores de Nível Internacional",
        content: "Tenha acesso direto a mais de 40 palestrantes renomados, incluindo especialistas internacionais que trarão as últimas tendências e inovações da área para você."
    },
    {
        title: "Domínio de Técnicas e Protocolos Inéditos",
        content: "Aprenda e pratique técnicas e protocolos inéditos no Brasil, que o colocarão na vanguarda da harmonização facial e estética avançada, com aplicabilidade imediata."
    },
    {
        title: "Feira Comercial Exclusiva e Inovadora",
        content: "Explore uma feira comercial com as maiores marcas do setor, descobrindo e experimentando as últimas tecnologias e produtos que transformarão sua prática e clínica."
    },
    {
        title: "Networking Estratégico e Parcerias Valiosas",
        content: "Conecte-se com profissionais de destaque e líderes de mercado, criando oportunidades únicas de networking estratégico, trocas de experiências e parcerias duradouras."
    },
    {
        title: "Formato Híbrido: Teoria e Prática Integradas",
        content: "Beneficie-se de um formato de evento híbrido, que combina palestras teóricas aprofundadas com experiências práticas imediatas, garantindo aprendizado e aplicação reais no seu dia a dia."
    }
  ];

  const finalCtaText = "Transforme sua carreira com o CONTOX. Garanta seu ingresso!";
  const finalCtaLink = "https://link-de-vendas-contox.com.br";

  return (
    <section ref={sectionRef} className={`${styles.benefitsSection} ${isVisible ? styles.isVisible : ''}`}>
      {/* Coluna da Esquerda: Vídeo */}
      <div className={styles.videoColumn}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoElement}
          src="/videos/contox-hero-video.mp4"
          // poster="/images/contox-benefits-poster.jpg"
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      {/* Coluna da Direita: Conteúdo de Benefícios com estilo da Dobra 4 */}
      <div className={styles.contentColumn}>
        <h2 className={styles.sectionTitle}>Por que você não pode perder o CONTOX Goiânia:</h2>

        <p className={styles.sectionDescription}>{sectionDescriptionText}</p>

        <div className={styles.accordion}>
          {accordionItems.map((item, index) => (
            <div
                key={index}
                className={styles.accordionItem}
                // Aplica um delay para cada item do acordeão aparecer em stagger
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
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
    </section>
  );
}
// --- END OF FILE Dobra2Beneficios.js ---