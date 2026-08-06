import { createContext } from 'react';
import { CartItemProps } from '../../interface/pratoCardInterface';
import { PratosProps } from '../../interface/pratosInterface';

export type PratosContextData  = {
  cart: CartItemProps[];
  addCart: (item: PratosProps) => void;
  cartAmount: number;
  removeItemCart: (item: CartItemProps) => void;
  clearCart: () => void;
}





export const PratosContext = createContext({} as PratosContextData );