import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { Item, ItemList } from '../Pages/common';

export const CartContext = createContext<{cart: any[]}>({cart: []});


export const useCartContext = (Context: React.Context<{cart: ItemList}>) => {
  const context = useContext(Context);
  const [cart, setCart] = useState<ItemList>(context.cart);

  useEffect(() => {
    context.cart = cart;
  }, [cart]);

  return {cart, setCart};
}
