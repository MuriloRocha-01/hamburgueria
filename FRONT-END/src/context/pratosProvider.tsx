import React, { useCallback, useState, type ReactNode } from 'react';
import { PratosContext } from '../context/pratosContext';
import { PratosProps } from '../interface/pratosInterface';

interface CarrinhoProviderProps {
  children: ReactNode;
}

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [pratos, setPratos] = useState<PratosProps[]>([]);

  return (
    <PratosContext.Provider value={{ pratos }}>
      {children}
    </PratosContext.Provider>
  );
}

export default CarrinhoProvider;   
    