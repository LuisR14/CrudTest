const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 50,
      color: 'blue'
  
    },
  
    textinput: {
  
      fontSize: 16,
      color: 'black',
      borderWidth: 1,
      borderColor: 'black',
      marginHorizontal: 8,
      width: 100,
      height: 40,
      borderRadius: 5
    },
    textList: {
  
      fontSize: 16,
      color: 'black',
      marginHorizontal: 20,
    },
    List: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 5,
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 5,
      justifyContent: 'space-between'
    },
    modal: {
      backgroundColor: 'lightgray',
      height: 120,
      width: 230,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 300,
      borderRadius: 5
    }
  
  
  
  })