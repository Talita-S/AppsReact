import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 80,
    },
    title:{
      fontSize: 50,
      textAlign: 'center',
      color: 'gray',
      fontFamily: 'Cambria',
    },
    counter:{
      alignSelf: 'center',
      color: 'red',
      fontSize: 80,
      margin: 50
    },
    buttons: {
      alignItems: 'center',
    },
    increaseButton:{
      width: 200,
      height: 50,
      margin: 50,
      backgroundColor: 'green'
    },
    decreaseButton:{
      width: 200,
      height: 50,
      margin: 50,
      backgroundColor: 'red'
    },
    textButton:{
      alignSelf: 'center',
      paddingTop: 5,
      fontSize: 24,
    },
    buttons: {
      alignSelf: 'center',
    }
  })

export {styles}