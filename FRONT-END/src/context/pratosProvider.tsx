<<<<<<< HEAD
import React, { useState, type ReactNode } from 'react';
import { PratosContext } from '../context/pratosContext';
import { PratosProps } from '../interface/pratosInterface';
import { CartItemProps } from '../interface/pratoCardInterface';
=======
import React, { useCallback, useState, type ReactNode } from 'react';
import { PratosContext } from '../context/pratosContext';
import { PratosProps } from '../interface/pratosInterface';
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97

interface PratosProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
function PratosProvider({ children }: PratosProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  function addCard(newItem: PratosProps){
    const indexItem = cart.findIndex(item => item.cd_prato === newItem.cd_prato);

    if (indexItem !== -1) {
      const newCart = [...cart];

      const newAmount = newCart[indexItem].amount + 1;

      newCart[indexItem] = {
        ...newCart[indexItem],
        amount: newAmount,
        total: newAmount * newCart[indexItem].vl_preco,
      };

      setCart(newCart);
      return;
    }

    const data: CartItemProps = {
      ...newItem,
      amount: 1,
      total: newItem.vl_preco,
    };

    setCart((pratos) => [...pratos, data]);
  }

  function removeItemCard(product: CartItemProps) {
  const indexItem = cart.findIndex((item) => item.cd_prato === product.cd_prato);

  if (indexItem === -1) return;

  const newCart = [...cart];

  // Se houver mais de 1 item, apenas diminui a quantidade
  if (newCart[indexItem].amount > 1) {
    const newAmount = newCart[indexItem].amount - 1;
    newCart[indexItem] = {
      ...newCart[indexItem],
      amount: newAmount,
      total: newAmount * newCart[indexItem].vl_preco,
    };
    setCart(newCart);
    return;
  }

  // Se for apenas 1 item, remove da lista
  const filteredCart = newCart.filter((item) => item.cd_prato !== product.cd_prato);
  setCart(filteredCart);
}

  return (
    <PratosContext.Provider value={{ removeItemCard, addCard, cart, cartAmount: cart.length }}>
=======
export function PratosProvider({ children }: PratosProviderProps) {
  const [pratos, setPratos] = useState<PratosProps[]>([]);

  function savePratos(item: PratosProps){
    setPratos((prevPratos) => [...prevPratos, item]);
    
  }

  return (
    <PratosContext.Provider value={{ savePratos, pratos }}>
>>>>>>> aaa12611d36981f92415a0ebb7717e0aa2cc9c97
      {children}
    </PratosContext.Provider>
  );
}

export default PratosProvider;   
    