import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import CartCell from '../../components/CartCell';
import { loadCart, removeItem } from '../../utils/manageCart';
import { currencyFormat } from '../../utils/number';
import { ItemList } from '../common';

import { Container } from './styles';


function Cart({ navigation}) {
  const [cart, setCart] = useState([] as ItemList)
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const { getItem, setItem } = useAsyncStorage('items');

  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      title: 'Meu Carrinho',
    }
    navigation.setOptions(options)
  }, [])

  const fetchData = async () => {
    const {cart, totalAmount, totalItems}: {cart: ItemList, totalAmount: number, totalItems: number} = await loadCart(getItem)
    setCart(cart)
    setTotal(totalAmount)
    setTotalItems(totalItems)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRemoveItem = async (itemId: string) => {
    await removeItem(getItem, setItem, itemId)
    fetchData()
  }


  return (
    <Container>
      <Text style={{fontSize: 20, marginHorizontal: 10, marginTop: 20}}>Produtos selecionados: {totalItems}</Text>
      <FlatList
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
        data={cart}
        renderItem={({item: {quantity, item}}) => (
          <CartCell item={item} quantity={quantity} handleRemove={handleRemoveItem} />
        )}
        keyExtractor={(item, idx) => idx.toString()}

      />
      <View
        style={{
          height: 100,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'flex-end',
          borderTopColor: '#ccc',
          borderTopWidth: 1,
        }}
      >
        <Text style={{fontSize: 30, fontWeight: '500', textAlign: 'left', width: '50%'}}>Total: </Text>
        <Text style={{fontSize: 40, fontWeight: '500'}}>{currencyFormat(total)}</Text>
      </View>
    </Container>
  );
}

export default Cart;
