import React, { Component } from 'react';
import { TextInput, Picker } from 'react-native';
import { View, Text } from 'react-native-web';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: 'Selecione',
      escolaridade: 'Selecione'
    }
  }
  render(){

    return(
      <View>
        <Text style={styles.titulo}>Abertura de conta</Text>
        <View style={styles.form}>
          <Text style={styles.texto}>Nome: </Text>
          <TextInput
            style={styles.input}
            onPress={(n) => this.setState({nome: n})}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>Idade: </Text>
          <TextInput
            style={styles.input}
            onPress={(i) => this.setState({idade: i})}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>Sexo: </Text>
          <Picker
            style={styles.selecao}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue) => this.setState({sexo: itemValue})}
          >
            <Picker.Item value={''} label='Selecione'/>
            <Picker.Item value={"Masculino"} label="Masculino"/>
            <Picker.Item value={"Feminino"} label="Feminino"/>
          </Picker>
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>Escolaridade: </Text>
          <Picker
            style={styles.selecao}
            selectedValue={this.state.escolaridade}
            onValueChange={(itemValue) => this.setState({escolaridade: itemValue})}
          >
            <Picker.Item value={''} label='Selecione'/>
            <Picker.Item value={"Ensino Fundamental Incompleto"} label="Ensino Fundamental Incompleto"/>
            <Picker.Item value={"Ensino Fundamental Completo"} label="Ensino Fundamental Completo"/>
            <Picker.Item value={"Ensino Médio Incompleto"} label="Ensino Médio Incompleto"/>
            <Picker.Item value={"Ensino Médio Completo"} label="Ensino Médio Completo"/>
            <Picker.Item value={"Ensino Superior Incompleto"} label="Ensino Médio Incompleto"/>
            <Picker.Item value={"Ensino Superior Completo"} label="Ensino Médio Completo"/>
          </Picker>
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>Limite: </Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
          />
        </View>

      </View>
    )
  }
}

export default App;
