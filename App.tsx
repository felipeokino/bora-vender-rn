import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import Cart from './src/Pages/Cart';
import Homepage from './src/Pages/HomePage/Homepage';
import ItemDesc from './src/Pages/ItemDesc/ItemDesc';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ItemDesc" component={ItemDesc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
