import React from 'react';
import { CellContainer, CellContainerEmpty, CellFooter ,PriceText, ItemTitle } from './styles';
import {Item} from '../../Pages/common'
import { Text, TouchableOpacity, Image } from 'react-native';
import { currencyFormat } from '../../utils/number';
import { CartContext, useCartContext } from '../../providers/useContext';

interface IListCell {
    item: Item;
    isEmpty: boolean;
}

const ListCell: React.FC<IListCell> = ({ item, isEmpty }) => {
  const {cost, name, img_url} = item;
    const {cart, setCart} = useCartContext(CartContext)

    const addToCart = () => {
      setCart([...cart, item])
    }

    return (
      <>
        {
          isEmpty ? (
              <CellContainerEmpty></CellContainerEmpty>
          ) : (
            <CellContainer
            style={{
              shadowOpacity: 0.6,
              // elevation: 2,
              shadowRadius: 3,
              shadowColor: '#3f3f3f',
              shadowOffset: { height: 2, width: -2 },
            }}>
            <Image
              style={{width: 150, height: 150,resizeMode: 'stretch',}}
              source={{uri: img_url}}
            />
            <ItemTitle>{name}</ItemTitle>
            <CellFooter>

              <TouchableOpacity onPress={addToCart}>
                  <Text>Add</Text>
              </TouchableOpacity>
              <PriceText>{currencyFormat(cost)}</PriceText>
            </CellFooter>
            </CellContainer>
          )}
      </>
    );
}

export default ListCell;
