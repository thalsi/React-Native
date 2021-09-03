import React from 'react';
import List from './src/list/list';
import Home from './src/Home/Home';
import Fundamentals from './src/modules/1-Fundamentals/Fundamentals';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fundamentals" component={Fundamentals} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;