import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dia: false,
      pequeno: false
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Frases</Text>
        <View style={styles.switch}>
          <Text>Dia</Text>
          <Switch
            value={this.state.dia}
            onValueChange={ (d) => this.setState({dia: d})}
          />
        </View>

        <View style={styles.switch}>
          <Text>Pequeno</Text>
          <Switch
            value={this.state.pequeno}
            onValueChange={ (p) => this.setState({pequeno: p})}
          />
        </View>
        
        <View>
          <Text>
            "Não temos uma chance para fazer muitas coisas, então cada uma 
            tem que ser excelente. Porque isso é a nossa vida. A vida é 
            curta, e então você morre, você sabe? E todos nós escolhemos 
            o que fazer das nossas vidas. Então é melhor que seja algo 
            muito bom. É melhor que valha a pena". <br/>
            (Steve Jobs)
          </Text>
        </View>
      </View>
    )
  }
}

export default App