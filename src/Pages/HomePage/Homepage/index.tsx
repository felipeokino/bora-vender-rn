import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import { FlatList, Text, TouchableOpacity } from 'react-native';
import ListCell from '../../../components/ListCell';
import { api } from '../../../services/api';
import { HTTPService } from '../../../services/HTTPService/HTTPService';
import { ItemList } from '../../common';

import { Container } from './styles';
import { LoadData } from './useCases/loadData';
import MCIcons from '@expo/vector-icons/MaterialIcons';

function Homepage({ navigation }) {
  const [loadedData, setLoadedData] = useState<ItemList>([])
  const columns = 2;
  const httpService = new HTTPService(api);

  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <MCIcons  name="shopping-cart" size={30} color="#6200be" />
        </TouchableOpacity>
      )
    }
    navigation.setOptions(options);
  }, []);

  const fetchData = async () => {
    const responseCase = new LoadData(httpService);
    const response = await responseCase.run()
    setLoadedData(response)
  }
  useEffect(() => {
    fetchData();
  }, [])

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);

    let lastRowElements = data.length - rows * columns;
    if (!lastRowElements) return data

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
    return data;
  }

  return (
    <Container>
      <FlatList
        style={{
          width: '100%',
          height: '100%',
        }}
        numColumns={columns}
        data={createRows(loadedData, columns)}
        renderItem={({ item, index }) => (
          <ListCell
          key={index}
            item={item}
            isEmpty={item.empty}
          />
        )}
        keyExtractor={item => item.id?.toString()}

      />
    </Container>
  );
}

export default Homepage;
