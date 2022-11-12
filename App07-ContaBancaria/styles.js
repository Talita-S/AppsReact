import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        flexDirection:'row'
    },
    titulo: {
        paddingTop: 20,
        paddingBottom: 5,
        fontSize: 20,
        fontFamily: "Verdana",
        alignSelf: 'center',
    },
    texto: {
        paddingTop: 5,
        paddingLeft: 30,
        paddingBottom: 15,
        fontSize: 15,
        fontFamily: "Verdana",
    },
    input:{
        height: 20,
        width: 320,
        borderBottomWidth: 2,
        borderBottomColor: '#222',
        fontSize: 20,
        fontFamily: "Verdana",
        alignSelf: 'center',
    },
    selecao: {
        height: 25,
        fontSize: 15,
        fontFamily: "Verdana",
    }
});

export { styles }