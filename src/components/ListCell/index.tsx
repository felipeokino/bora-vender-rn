import React, {useState} from 'react';
import { CellContainer, CellContainerEmpty, CellFooter ,PriceText, ItemTitle } from './styles';
import {Item} from '../../Pages/common'
import { Text, TouchableOpacity, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { currencyFormat } from '../../utils/number';
import { addItem } from '../../utils/manageCart';

interface IListCell {
    item: Item;
    isEmpty: boolean;
}

const ListCell: React.FC<IListCell> = ({ item, isEmpty }) => {
  const {cost, name, img_url} = item;
  const {setItem, getItem} = useAsyncStorage('items');

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

              <TouchableOpacity onPress={async () => await addItem(getItem, setItem, item)}>
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
