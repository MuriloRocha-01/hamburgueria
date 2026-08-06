import React, { useState, type ReactNode } from 'react';
import { PratosProps } from '../../interface/pratosInterface';
import { CartItemProps } from '../../interface/pratoCardInterface';
import { PratosContext } from './pratosContext'; // Garanta que o caminho do context está correto

interface PratosProviderProps {
  children: ReactNode;
}

function PratosProvider({ children }: PratosProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  
  function clearCart(){

  }


  function addCart(item: PratosProps) {
    const indexItem = cart.findIndex(item => item.cd_prato === item.cd_prato);

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
      ...item,
      amount: 1,
      total: item.vl_preco,
    };

    setCart((prevCart) => [...prevCart, data]);
  }

  
  function removeItemCart(product: CartItemProps) {
    const indexItem = cart.findIndex((item) => item.cd_prato === product.cd_prato);

    if (indexItem === -1) return;

    const newCart = [...cart];

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
    
    const filteredCart = newCart.filter((item) => item.cd_prato !== product.cd_prato);
    setCart(filteredCart);
  }


  const cartAmount = cart.length;

  return (
    <PratosContext.Provider
      value={{
        cart,
        addCart,
        cartAmount,
        removeItemCart,
        clearCart
      }}
    >
      {children}
    </PratosContext.Provider>
  );
}

export default PratosProvider;