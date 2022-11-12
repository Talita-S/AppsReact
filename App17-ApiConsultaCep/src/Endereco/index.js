import React, { Component } from 'react';
import { View } from 'react-native-web';

import { Text } from '@react-native-material/core';

class Endereco extends Component() {
    render() {
        const {cep, logradouro, bairro, cidade, estado} = this.props.data;
        
        return(
            <View>
                <Text variant='h3'>CEP X Endereço</Text>
            </View>
        )
    }
}

export default Endereco