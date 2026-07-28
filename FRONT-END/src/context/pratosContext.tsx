import { createContext } from 'react';
<<<<<<< HEAD
import { CartItemProps } from '../interface/pratoCardInterface';
import { PratosProps } from '../interface/pratosInterface';

export type PratosContextData  = {
  cart: CartItemProps[];
  addCard: (item: PratosProps) => void;
  cartAmount: number;
  removeItemCard: (item: CartItemProps) => void;
}

=======
import { PratosProps } from '../interface/pratosInterface';

export type PratosContextData  = {
  pratos: PratosProps[];
  savePratos: (item: PratosProps) => void;
}



>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
export const PratosContext = createContext({} as PratosContextData );