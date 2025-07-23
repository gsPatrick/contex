'use client';

// O 'useRef' não é mais necessário, então foi removido.
import styles from './DobraPatrocinadores.module.css';

// Lista original de logos
const sponsorLogos = Array.from({ length: 12 }, (_, i) => `/images/icon${i + 1}.png`);

// Otimização: Duplicamos a lista várias vezes para garantir que a faixa de logos
// seja sempre muito maior que a largura da tela, criando um loop infinito perfeito
// e prevenindo qualquer "tarja branca" mesmo em monitores ultra-wide.
const infiniteLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

export default function DobraPatrocinadores() {
  // A lógica de navegação por clique e a referência (useRef) foram removidas
  // para evitar conflitos com a animação CSS e simplificar o componente.

  return (
    <section className={styles.patrocinadoresSection} aria-label="Nossos Patrocinadores">
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          {/* A animação agora é 100% controlada por CSS */}
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

        {/* Os fades laterais são mantidos para o efeito visual */}
        <div className={`${styles.fade} ${styles.fadeLeft}`}></div>
        <div className={`${styles.fade} ${styles.fadeRight}`}></div>

        {/* Os botões de navegação foram removidos para eliminar o bug */}
      </div>
    </section>
  );
}