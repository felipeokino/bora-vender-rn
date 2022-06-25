import { ItemList } from '../Pages/common';

export const loadCart = async (getter): Promise<ItemList> => {
  const items = await getter((err, items) => {
    if (err) {
      return {};
    }
    return items;
  })
  if (items?.length) {
    const _cart = JSON.parse(items);
    return Object.values(_cart);
  } else {
    return [];
  }
}

export const addItem = async (getter, setter, item: Item) => {
    const savedItems = await getter((err, items) => {
      if (err) {
        return {};
      }
      return items;
    });

    if (savedItems?.length) {
        const items = JSON.parse(savedItems);
        if (!items[item.id]) {
            items[item.id] = {
                quantity: 1,
                item
            };
        } else {
            items[item.id].quantity++;
        }

        await setter(JSON.stringify(items));
    } else {
        const items = {};
        await setter(JSON.stringify(items));
        addItem(getter, setter, item);
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

