import React from 'react';
import { View, Text } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import './styles.js';
import { styles } from './styles.js';

const App = () => {
    return(
      <View style={styles.container}>
        <Text>Citação</Text>
        <FontAwesome5 name='quote-left'/>
      </View>
    )
}

export default App