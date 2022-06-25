import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { Item, ItemList } from '../Pages/common';



export const useCartContext = (Context: React.Context<ItemList>) => {
  let context = useContext(Context);
  const [cart, setCart] = useState<ItemList>(context);

  const addToContext = async (newArray: ItemList) => {
    context = newArray
  }

  const addToCart = async (item: Item) => {
    setCart([...cart, item]);
    addToContext([...cart, item]);
  }

  return {cart, addToCart};
}
