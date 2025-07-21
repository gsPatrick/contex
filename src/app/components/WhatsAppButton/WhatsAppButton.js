// components/WhatsAppButton/WhatsAppButton.js
'use client';

import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    // --- IMPORTANTE: Substitua os valores abaixo ---
    const phoneNumber = "5562996759228"; // Coloque o número de telefone com DDD, sem + ou espaços
    const message = "Olá! Gostaria de mais informações sobre o CONTOX Goiânia."; // Mensagem inicial
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a 
            href={whatsappLink}
            className={styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* O ícone SVG foi trocado por esta imagem */}
            <img 
                src="/images/whatsapp.png" 
                alt="Ícone do WhatsApp"
                className={styles.whatsappIcon}
            />
        </a>
    );
}