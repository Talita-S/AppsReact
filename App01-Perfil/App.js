import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './styles';
 
class App extends Component{
  render(){

    let img = 'https://i.pinimg.com/originals/8d/3f/4c/8d3f4cc09b4bab9ed73894a8c76fee8d.gif';

    return(
      <View style={styles.main}>
        <Text style={{color: '#5b34eb', fontSize: 25, margin: 15, fontFamily: 'Impact', textAlign: 'center'}}>
          Meu Perfil
        </Text>
 
        <Image
          source={{ uri: img}}
          style={{ width: 300, height: 300, alignSelf: 'center' }}
        />

        <Text style={styles.title}> Dados Pessoais: </Text>
        <Text style={styles.text}> Talita da Silva Santos <b>|</b> 23 anos  </Text>
        <Text style={styles.title}> Formação: </Text>
        <Text style={styles.text}> Técnica em Informática - ETECPG (2017-2018) <b>|</b> Formanda em Análise e Desenvolvimento de Sistemas - FATEC (2021-2023) </Text>
        <Text style={styles.title}> Experiência: </Text>
        <Text style={styles.text}> - Professora de Lógica de Programação para Crianças e adolescentes</Text>
        <Text style={styles.subtitle}> Tynkers 02/2021 - 08/2021</Text>
        <Text style={styles.textBold}> - Estagiária Associates </Text>
        <Text style={styles.subtitle}> IBM 08/2021 - 06/2022 </Text>
        <Text style={styles.textBold}> - Dev Junior </Text>
        <Text style={styles.subtitle}> IBM 06/2022 - agora </Text>
        <Text style={styles.title}> Projetos: </Text>
        <Text style={styles.textBold}><a href='https://github.com/Talita-S?tab=repositories'>Meu GitHub</a></Text>

      </View>
    )
  }
}
 
export default App;