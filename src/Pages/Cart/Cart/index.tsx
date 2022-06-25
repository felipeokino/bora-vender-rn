import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import CartCell from '../../../components/CartCell';
import { loadCart } from '../../../utils/manageCart';
import { ItemList } from '../../common';

import { Container } from './styles';


function Cart({ navigation}) {
  const [cart, setCart] = useState([] as ItemList)
  const { getItem } = useAsyncStorage('items')
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      title: 'Meu Carrinho',
    }
    navigation.setOptions(options)
  }, [])

  const fetchData = async () => {
    const response: ItemList = await loadCart(getItem)
    setCart(response)
  }
  useEffect(() => {
    fetchData()
  }, [getItem])

  return (
    <Container>
      <FlatList
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
        data={cart}
        renderItem={({item: {quantity, item}}) => (
          <CartCell item={item} quantity={quantity} />
        )}
        keyExtractor={(item, idx) => idx.toString()}

      />
    </Container>
  );
}

export default Cart;
