import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import Cart from './src/Pages/Cart/Cart';
import Homepage from './src/Pages/HomePage/Homepage';
import ItemDesc from './src/Pages/ItemDesc/ItemDesc';
import { CartContext } from './src/providers/useContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <CartContext.Provider value={{cart: []}}>
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
