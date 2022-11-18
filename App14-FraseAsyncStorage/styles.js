import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: '1', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor: '#4c94b5'
    },
    card: {
        width: '50%',
        backgroundColor: '#fff',
        shadowColor: '#333837',
        shadowOffset: {width: 10, height: 15},
        shadowOpacity: 0.2,
        borderRadius: '20px',
        padding: '20px'
    },
    title: {
        textAlign: 'center',
        fontSize: '22px',
        fontWeight: '500',
        color: '#333837',
        marginBottom: '20px'
    },
    quote: {
        fontSize: '16px',
        lineHeight: '26px',
        fontWeight: '400',
        textAlign: 'center',
        color: '#000',
        marginBottom: '10px',
        paddingHorizontal: '30px'
    },
    authorName: {
        textAlign: 'right',
        fontWeight: '300',
        fontStyle: 'italic',
        fontSiize: '16px',
        color: '#000'
    },
    button: {
        backgroundColor: '#4c94b5',
        padding: '20px',
        borderRadius: '30px',
        marginVertical: '20px'
    },
    newQuote: {
        color: '#fff',
        fontSize: '18px',
        textAlign: 'center'
    },
    quoteIcon: {
        fontSize: '20px',
        marginBottom: '-12px',
        color: '#000'
    },
    quoteIconRight: {
        fontSize: '20px',
        color: '#000',
        textAlign: 'right',
        marginTop: '-20px',
        marginBottom: '20px'
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    optionIcon: {
        color: '#4c94b5'
    },
    optionButton: {
        borderWidth: '2px', 
        borderColor: '#4c94b5',
        borderRadius: '50px',
        padding: '10px'
    }
});

export { styles }