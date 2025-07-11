// --- START OF FILE Footer.js ---

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
        {/* Bloco Superior - CRIADO POR / Logo / Introdução */}
        <p className={styles.createdBy}>CRIADO POR</p>
        <div className={styles.logoContainer}>
          {/*
            IMPORTANTE: Substitua o 'src' da imagem pelo caminho real do seu logo.
            Se for um SVG inline, substitua a tag <img> pelo seu SVG.
          */}
          <img src="/images/facialacademy_logo.svg" alt="Facial Academy Logo" className={styles.facialAcademyLogo} />
        </div>
        <h3 className={styles.mainHeadline}>A maior escola de HOF do Brasil e uma das maiores do mundo.</h3>
        <p className={styles.statistic}>+45 mil alunos em 30 países.</p>

        {/* Bloco de Contato / Endereço */}
        <div className={styles.contactBlock}>
          <p className={styles.contactText}>
            Especialistas em formação de profissionais para atuação segura, técnica e com alto padrão estético.
          </p>
          <p className={styles.contactText}>
            Facial Academy Cursos Online | CNPJ 34.348.093/0001-61
          </p>
          <p className={styles.contactText}>
            Rua Castro Alves 2444 – Centro Cascavel, PR – <a href="mailto:contato@facialacademy.com.br" className={styles.emailLink}>contato@facialacademy.com.br</a>
          </p>
        </div>

        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Aviso Legal */}
        <div className={styles.legalNotice}>
          <p className={styles.legalTitle}>AVISO LEGAL</p>
          <p className={styles.legalText}>
            "Este produto é um curso livre para capacitação profissional que tem como papel e função primordiais a preparação técnica
            e intelectual do indivíduo, portanto NÂO CONFERE HABILITAÇÃO profissional em Conselho de Classe, tampouco permite ou
            licencia o profissional e/ou estudante a exercer tais procedimentos no mercado de trabalho. O exercício de atividades
            regidas pelos conselhos profissionais de áreas da saúde sem a devida habilitação constitui uma atividade ilegal."
          </p>
        </div>

        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Equipe Facial Academy */}
        <div className={styles.teamInfo}>
          <p className={styles.teamTitle}>A equipe Facial Academy é composta por:</p>
          <p className={styles.teamMember}>Dra. Camila Dias CRO PR 24954</p>
          <p className={styles.teamMember}>Dr. Wagner Baseggio CRO PR 16109</p>
        </div>

        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Termos e Condições */}
        <p className={styles.termsText}>
          Ao clicar no botão, você concorda com nossos Termos de Uso e Política de Privacidade, incluindo o
          uso de cookies e o envio de comunicações.
        </p>
      </div>
    </footer>
  );
}
// --- END OF FILE Footer.js ---