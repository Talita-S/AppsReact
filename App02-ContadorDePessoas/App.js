import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  increase(){
    this.setState({
      count: this.state.count + 1
    });
  }
  decrease(){
    if (this.state.count <= 0) {
      this.setState({
        count: this.state.count = 0
      });
    }
    else {
      this.setState({
        count: this.state.count - 1
      });
    }  
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.title}>Contador de Pessoas</Text>
      
      <Text style={styles.counter}>{this.state.count}</Text>
      
      <div style={styles.buttons}>
        <Pressable style={styles.increaseButton} onPress={() => this.increase()}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>

        <Pressable style={styles.decreaseButton} onPress={() => this.decrease()}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
      </div>
 
      </View>
    );
  }
}
 
export default App;
