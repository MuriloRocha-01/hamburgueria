import { createContext } from 'react';
import { CartItemProps } from '../interface/pratoCardInterface';
import { PratosProps } from '../interface/pratosInterface';

export type PratosContextData  = {
  cart: CartItemProps[];
  addCard: (item: PratosProps) => void;
  cartAmount: number;
  removeItemCard: (item: CartItemProps) => void;
}

export const PratosContext = createContext({} as PratosContextData );