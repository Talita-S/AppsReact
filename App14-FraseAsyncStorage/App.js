import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles.js';

const App = () => {
    return(
      <View style={styles.container}> 

        <StatusBar barStyle='light-content' />

        <View style={styles.card}>
          <Text style={styles.title}>Quote of the Day</Text>
          <FontAwesome5 name='quote-left' style={styles.quoteIcon}/>
          <Text style={styles.quote}>It is the nature of the wise to resist pleasures, but the foolish to be a slave of them.</Text>
          <FontAwesome5 name='quote-right' style={styles.quoteIconRight}/>
          <Text style={styles.authorName}>— Author Name</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.newQuote}>New quote</Text>
          </TouchableOpacity>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <FontAwesome name='volume-up' size={22} style={styles.optionIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <FontAwesome5 name='copy' size={22} style={styles.optionIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <FontAwesome name='twitter' size={22} style={styles.optionIcon}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
}

export default App