import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles.js';

const App = () => {

  const [Quote, setQuote] = useState("Loading...");
  const [Author, setAuthor] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return(
    <View style={styles.container}> 

      <StatusBar barStyle='light-content' />

      <View style={styles.card}>
        <Text style={styles.title}>Quote of the Day</Text>
        <FontAwesome5 name='quote-left' style={styles.quoteIcon}/>
        <Text style={styles.quote}>{Quote}</Text>
        <FontAwesome5 name='quote-right' style={styles.quoteIconRight}/>
        <Text style={styles.authorName}>— {Author}</Text>
        <TouchableOpacity style={isLoading ? styles.buttonLoading : styles.button}>
          <Text style={styles.newQuote} onPress={randomQuote}>{isLoading ? 'Loading...' : 'New quote'}</Text>
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