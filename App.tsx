import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { createContext } from 'react';
import Cart from './src/Pages/Cart/Cart';
import { ItemList } from './src/Pages/common';
import Homepage from './src/Pages/HomePage/Homepage';
import ItemDesc from './src/Pages/ItemDesc/ItemDesc';

const Stack = createNativeStackNavigator();
export const CartContext = createContext<any[]>([]);

const cart = [] as ItemList;
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <CartContext.Provider value={[]}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} options={
            {

            }
          } />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ItemDesc" component={ItemDesc} />
        </Stack.Navigator>
      </CartContext.Provider>
    </NavigationContainer>
  );
}

export default App;
