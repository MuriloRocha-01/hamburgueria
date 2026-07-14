import { createContext } from 'react';
import { PratosProps } from '../interface/pratosInterface';

export type PratosContextData  = {
  pratos: PratosProps[];
}



export const PratosContext = createContext({} as PratosContextData );