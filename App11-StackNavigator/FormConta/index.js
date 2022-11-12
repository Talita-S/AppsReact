import { Text, TextInput, View, Picker, Switch, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

class FormConta extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: '',
        idade: 0,
        sexo: 'Selecione',
        escolaridade: 'Selecione',
        limite: 0,
        brasileiro: false,
        nacionalidade: '',
        dados: ''
      }
      this.mostrarDados = this.mostrarDados.bind(this);
      this.statusNacionalidade = this.statusNacionalidade.bind(this);
    }
  
    mostrarDados() {
      this.setState({
        dados:
          `Dados informados: \n` +
          `Nome: ${this.state.nome} \n` +
          `Idade: ${this.state.idade} \n` +
          `Sexo: ${this.state.sexo} \n` +
          `Escolaridade: ${this.state.escolaridade} \n` +
          `Nacionalidade: ${this.state.nacionalidade} \n` +
          `Limite: ${this.state.limite}` 
      })
    }
  
    statusNacionalidade() {
      if(this.state.brasileiro == true) {
        this.setState({ nacionalidade: "Brasileiro" })
      } else {
        this.setState({ nacionalidade: "Estrangeiro" })
      }
    }
  
    render() {
      return (
        <View>
          <div>
            <Text>Abertura de Conta</Text>
  
            <div>
              <Text>Nome:</Text>
              <TextInput
                onValueChange={(n) => this.setState({nome: n})}
                value={this.state.nome}
              />
            </div>
  
            <div>
              <Text>Idade:</Text>
              <TextInput
                onValueChange={(i) => this.setState({idade: i})}
              />
            </div>
  
            <div>
              <Text>Sexo:</Text>
              <Picker
                selectedValue={this.state.sexo}
                onValueChange={(itemValue) => this.setState({sexo: itemValue})}
              >
                <Picker.Item value={''} label='Selecione'/>
                <Picker.Item value={"Masculino"} label="Masculino"/>
                <Picker.Item value={"Feminino"} label="Feminino"/>
              </Picker>
            </div>
  
            <div>
              <Text>Escolaridade:</Text>
              <Picker
                selectedValue={this.state.escolaridade}
                onValueChange={(itemValue) => this.setState({escolaridade: itemValue})}
              >
                <Picker.Item value={''} label='Selecione'/>
                <Picker.Item value={"Ensino Fundamental"} label="Ensino Fundamental"/>
                <Picker.Item value={"Ensino Médio"} label="Ensino Médio"/>
                <Picker.Item value={"Graduação"} label="Graduação"/>
              </Picker>
            </div>
  
            <div>
              <Text>Limite:</Text>
              <Slider
                minimumValue={0}
                maximumValue={2000}
                onValueChange={ (l) => this.setState({limite: l})}
                value={this.state.limite}
              />
  
              <Text>
                R$ {this.state.limite.toFixed(0)}
              </Text>
  
            <div>
              <Text>Brasileiro?</Text>
              <Text>{this.state.brasileiro ? ' Sim' : ' Não'}</Text>
              <Switch
                value={this.state.brasileiro}
                onValueChange={ (b) => this.setState({brasileiro: b})}
              />
            </div>
  
            <Pressable>
              <Text
                onPress={this.mostrarDados}
              >Confirmar</Text>
            </Pressable>
  
            
            <Text>{this.state.dados}</Text>
  
            </div>
          </div>
          
        </View>
      )
    }
  }
  
  export default FormConta;