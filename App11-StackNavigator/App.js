import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormConta from './FormConta/index.js';
import Dados from './dados';

const Stack = createStackNavigator();

export default function App() {
  <FormConta/>
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dados" component={Dados}/>
      </Stack.Navigator> 
    </NavigationContainer>
  )
}