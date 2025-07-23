'use client';

import styles from './DobraPatrocinadores.module.css';

const sponsorLogos = Array.from({ length: 12 }, (_, i) => `/images/icon${i + 1}.png`);

// --- MUDANÇA IMPORTANTE AQUI ---
// Aumenta a duplicação para 8 vezes a lista original de logos.
// Isso cria uma faixa de logos muito mais longa, tornando o loop mais robusto
// e prevenindo o "sumiço" ou "buracos" mesmo com pequenas imprecisões na animação.
const infiniteLogos = [
  ...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos,
  ...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos
]; // AGORA SÃO 8 CONJUNTOS DE LOGOS

export default function DobraPatrocinadores() {
  return (
    <section className={styles.patrocinadoresSection} aria-label="Nossos Patrocinadores">
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {infiniteLogos.map((logo, index) => (
              <div className={styles.logoSlot} key={index}>
                <img
                  src={logo}
                  alt={`Logo do patrocinador ${index % sponsorLogos.length + 1}`}
                  className={styles.logoImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.fade} ${styles.fadeLeft}`}></div>
        <div className={`${styles.fade} ${styles.fadeRight}`}></div>
      </div>
    </section>
  );
}