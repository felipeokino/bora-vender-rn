import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Text } from 'react-native';
import { Item } from '../../Pages/common';
import { removeItem } from '../../utils/manageCart';
import { CartCellContainer, DescContainer, ItemTitle, RemoveItemButton, RightContainer } from './styles';

interface IcartCell {
  item: Item;
  quantity: number;
}
const CartCell: React.FC<IcartCell> = ({ item, quantity }) => {
  const {getItem, setItem} = useAsyncStorage('items');

  return (
    <CartCellContainer>
      <Image source={{uri: item.img_url}} style={{width: 100, height: 100}} />
      <DescContainer>
        <ItemTitle>{item.name}</ItemTitle>
        <Text>{item.cost}</Text>
      <Text>Quantidade: {quantity}</Text>
      </DescContainer>

      <RightContainer>
        <RemoveItemButton onPress={async () => await removeItem(getItem, setItem, item.id.toString())}>
          <Text style={{color: '#FFF'}}>Remover</Text>
        </RemoveItemButton>
      </RightContainer>
    </CartCellContainer>
  )
}

export default CartCell;
