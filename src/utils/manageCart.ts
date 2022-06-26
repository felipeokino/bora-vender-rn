import { ItemList } from '../Pages/common';
import AsyncStorage from '@react-native-async-storage/async-storage'
export const loadCart = async (getter): Promise<{cart: ItemList, totalAmount: number; totalItems: number}> => {
  const items = await getter((err, items) => {
    if (err) {
      return null;
    }
    return items;
  })


  if (items?.length) {
    const _cart = JSON.parse(items);
    const sum = Object.values(_cart).reduce((acc, {item, quantity }) => acc + (+item.cost * +quantity), 0) as number;
    const totalItems = Object.values(_cart).reduce((acc, {quantity}) => acc + +quantity, 0) as number;
    return { cart: Object.values(_cart), totalAmount: sum, totalItems };
  } else {
    return { cart: [], totalAmount: 0, totalItems: 0 };
  }
}
export const addItem = async (getter, setter, item: Item) => {
    const savedItems = await getter();

    if (savedItems?.length) {
        const items = JSON.parse(savedItems);
        if (!items[item.id]) {
            items[item.id] = {
                quantity: 1,
                item
            };
        } else
            items[item.id].quantity++;

        await setter(JSON.stringify(items));
    } else {
      await AsyncStorage.setItem('items', JSON.stringify({[item.id]:{ item, quantity: 1 }}));
    }
  }


export const removeItem = async (getter, setter, itemId: string) => {
  const items = await getter((err, items) => {
    if (err) {
      return {};
    }
    return items;
  })
  if (items?.length) {
    const _cart = JSON.parse(items);
    if (_cart[itemId].quantity > 1)
      _cart[itemId].quantity--;
    else
      delete _cart[itemId];
    await setter(JSON.stringify(_cart));
  }
}

