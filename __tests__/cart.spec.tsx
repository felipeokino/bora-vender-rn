
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loadCart, addItem, removeItem } from '../src/utils/manageCart';

describe('Testing cart management',  () => {
  const {getItem, setItem} = AsyncStorage;
  const mockGetter = async (callback) => {
    return getItem('items', callback);
  }
  const mockSetter = async (value: string) => {
    return setItem('items', value);
  }

  beforeEach(() => {
    AsyncStorage.clear()
  })
  it('Add item to cart', async () => {
    const item = {
      id: 1,
      name: 'Fake Item',
      cost: 10,
      description: 'Fake Item Description',
    }
    await addItem(mockGetter, mockSetter, item);
    const items = await loadCart(mockGetter);

    expect(Object.values(items.cart)).toHaveLength(1);
  });

  it('Remove item from cart', async () => {
    const item = {
      id: 1,
      name: 'Fake Item',
      cost: 10,
      description: 'Fake Item Description',
    }

    await addItem(mockGetter, mockSetter, item);
    await removeItem(mockGetter, mockSetter, item.id.toString());

    const items = await loadCart(mockGetter);

    expect(Object.values(items?.cart)).toHaveLength(0);
  })
})
