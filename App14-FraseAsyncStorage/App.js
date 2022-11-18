import React from 'react';
import { View, Text } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Citação</Text>
        <FontAwesome5 name='quote-left'/>
      </View>
    )
}

export default App