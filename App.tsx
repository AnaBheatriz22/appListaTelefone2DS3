
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contatos from './componentes/Contatos';
const contatos = [
  {id:"1",nome:"Bheatriz", tel:"(13)98867-9006"},
  {id:"1",nome:"Ana", tel:"(13)95864-5409"},
  {id:"1",nome:"Ricardo", tel:"(13)98874-5688"},
  {id:"1",nome:"Gilson", tel:"(13)97784-3346"},
  {id:"1",nome:"Alan", tel:"(13)989984-7846"},
  {id:"1",nome:"Juliana", tel:"(13)98874-9846"},
  {id:"1",nome:"Walllentina", tel:"(13)9987-5886"},
  {id:"1",nome:"Samuel", tel:"(13)9770-5446"},
]
export default function App() {
  return (
    <View style={styles.container}>

      <Text>Lista de Contatos!</Text>

      <View style={styles.lista}>

      <FlatList
      data={contatos}
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => <Contatos tel={item.tel} nome={item.nome}/>}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista:{
    height:500,
    width:'90%',
    marginLeft:'5%'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
  }
});
