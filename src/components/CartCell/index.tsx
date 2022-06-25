import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Text } from 'react-native';
import { Item } from '../../Pages/common';
import { removeItem } from '../../utils/manageCart';
import { CartCellContainer, DescContainer, ItemTitle, RemoveItemButton, RightContainer } from './styles';

interface IcartCell {
  item: Item;
  quantity: number;
  handleRemove: (args1: string) => void
}
const CartCell: React.FC<IcartCell> = ({ item, quantity, handleRemove }) => {
  return (
    <CartCellContainer>
      <Image source={{uri: item.img_url}} style={{width: 100, height: 100}} />
      <DescContainer>
        <ItemTitle>{item.name}</ItemTitle>
        <Text>{item.cost}</Text>
        <Text>Quantidade: {quantity}</Text>
      </DescContainer>

      <RightContainer>
        <RemoveItemButton onPress={() => handleRemove(item.id.toString())}>
          <Text style={{color: '#FFF'}}>Remover</Text>
        </RemoveItemButton>
      </RightContainer>
    </CartCellContainer>
  )
}

export default CartCell;
