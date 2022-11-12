import {Text} from 'react-native';

import Component from 'react';

class Dados extends Component {
    mostrarDados();
    render() {
        return(
            <View>
                <Text>{this.state.dados}</Text> 
            </View> 
        )
    }
}

export default Dados;