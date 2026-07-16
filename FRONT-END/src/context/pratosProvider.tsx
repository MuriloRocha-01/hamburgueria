import React, { useCallback, useState, type ReactNode } from 'react';
import { PratosContext } from '../context/pratosContext';
import { PratosProps } from '../interface/pratosInterface';

interface PratosProviderProps {
  children: ReactNode;
}

export function PratosProvider({ children }: PratosProviderProps) {
  const [pratos, setPratos] = useState<PratosProps[]>([]);

  function savePratos(item: PratosProps){
    setPratos((prevPratos) => [...prevPratos, item]);
    
  }

  return (
    <PratosContext.Provider value={{ savePratos, pratos }}>
      {children}
    </PratosContext.Provider>
  );
}

export default PratosProvider;   
    