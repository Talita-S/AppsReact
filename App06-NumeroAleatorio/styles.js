import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    titulo:{
        fontFamily: "Verdana",
        fontSize: 30,
        alignSelf: 'center',
        padding: 20
    },
    img: {
        width: 300,
        height: 250,
        alignSelf: 'center'
    },
    texto: {
        padding: 15,
        fontFamily: "Verdana",
        fontSize: 20,
        alignSelf: 'center'
    },
    input: {
        borderBottomWidth: 3,
        borderColor: '#222',
        height: 50,
        width: 150,
        fontFamily: "Verdana",
        fontSize: 30,
        alignSelf: 'center',
        margin: 20
    },
    botao: {
        width: 300,
        height: 50,
        backgroundColor: 'lightgreen',
        alignSelf: 'center'
    },
    textoBotao: {
        padding: 15,
        alignSelf: 'center',
        fontSize: 18,
    },
    textoNumero: {
        padding: 15,
        fontFamily: "Verdana",
        fontSize: 30,
        alignSelf: 'center',
        color: 'green'
    }
});

export { styles }