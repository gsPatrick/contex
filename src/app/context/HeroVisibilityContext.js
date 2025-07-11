// app/context/HeroVisibilityContext.js
'use client';

import { createContext, useState, useContext } from 'react';

// Cria o contexto
const HeroVisibilityContext = createContext(null);

// Cria o Provedor (Provider) que vai envolver a aplicação
export function HeroVisibilityProvider({ children }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  return (
    <HeroVisibilityContext.Provider value={{ isHeroVisible, setIsHeroVisible }}>
      {children}
    </HeroVisibilityContext.Provider>
  );
}

// Cria um hook personalizado para consumir o contexto facilmente
export function useHeroVisibility() {
  const context = useContext(HeroVisibilityContext);
  if (context === null) {
    throw new Error('useHeroVisibility deve ser usado dentro de um HeroVisibilityProvider');
  }
  return context;
}