import { createContext } from 'react';
import { PratosProps } from '../interface/pratosInterface';

export type PratosContextData  = {
  pratos: PratosProps[];
  savePratos: (item: PratosProps) => void;
}



export const PratosContext = createContext({} as PratosContextData );