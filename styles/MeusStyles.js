import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    txt: {
      marginRight: 20,
      fontWeight: 'bold',
      fontSize: 20
    },
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    containerEntradaDeOperacoes: {
      height: 80,
      alignItems: "flex-end",
      justifyContent: "center",
      backgroundColor: "#4286f4" // azul
    },
    containerResultado: {
      height: 80,
      alignItems: "flex-end",
      justifyContent: "center",
      backgroundColor: "#b51818" // vermelho
    },
    containerOperadoresEBotoes: {
      flex: 1,
      flexDirection: 'column'
    },
    containerRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: "#ffa154" // laranja
    }
  });
  
  export { styles };

  