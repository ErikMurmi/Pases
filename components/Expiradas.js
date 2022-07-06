import react from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import SelectDropdown from "react-native-select-dropdown";
var tipos = ["Semestral", "Anual", "Mensual"];

export default function Comprar() {
  const Separator = () => <View style={styles.separator} />;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/*<Text style={styles.titulo}>Suscripción de pases</Text>*/}

        <View style={styles.containerCantidad}>
            <Text style={styles.subtitulo}>Usuario</Text>
            <Text style={styles.subText}>Estefi R</Text>
            <Text style={styles.subtitulo}>Tipo De Pase</Text>
            <Text style={styles.subText}>Semestral</Text>
            <Text style={styles.subtitulo}>Fecha De Compra</Text>
            <Text style={styles.subText}>01/03/2022</Text>
        </View>

        <View style={styles.containerCantidad}>
            <Text style={styles.subtitulo}>Fecha Expiración</Text>
            <Text style={styles.subText}>01/09/2022</Text>
            <Text style={styles.subtitulo}>Pases Comprados</Text>
            <Text style={styles.subText}>45</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop:40,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  subText:{
    backgroundColor:"#E2DCD6",
    height:50,
    textAlignVertical:"center",
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10
  },
  containerCantidad: {
    padding: 50,
    borderColor: "#ffd869",
    borderWidth: 1,
    margin: 10,
    marginBottom: 50,
    borderRadius: 25,
  },
  titulo: {
    marginTop: "15%",
    marginBottom: "15%",
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    borderRadius: 25,
  },
  input: {
    borderRadius: 25,
    width: 200,
    textAlign:"center",
    height: 50,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 40,
    color: "#fff3bc",
    paddingHorizontal: 20,
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
    backgroundColor: "#ff8637",
    marginBottom:50,
    
  },
  txtBtnLogin:{
    fontSize:20,
    fontWeight:"bold"
  }
});
