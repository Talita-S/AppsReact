import React, { Component } from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numero: ''
    };

    this.numeroAleatorio = this.numeroAleatorio.bind(this);

  }

  numeroAleatorio(){
    let aleatorio = Math.floor(Math.random() * 10);
    this.setState({numero: aleatorio});
  }

  render(){

    let img = 'https://thumbs.gfycat.com/LargeGiddyKoi-max-1mb.gif';

    return(
      <View>
        <Text style={styles.titulo}>Jogo do n° aleatório</Text>

        <Image
        source={{uri: img}}
        style={styles.img}
        />

        <Text style={styles.texto}>Pense em um n° de 0 a 10:</Text>
        
        <TextInput 
        style={styles.input}
        onPress={(n) => this.setState({numero: n})}
        />
        
        <Pressable style={styles.botao} onPress={ this.numeroAleatorio }>
          <Text style={styles.textoBotao}>Descobrir</Text>
        </Pressable>

        <Text style={styles.textoNumero}>{this.state.numero}</Text>

      </View>
    )
  }
}
 
export default App;