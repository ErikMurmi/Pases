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
        <Text style={styles.titulo}>Comprar Pases</Text>

        <View style={styles.containerSelect}>
          <Text style={styles.subtitulo}>Tipo</Text>

          <SelectDropdown
            data={tipos}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <View style={styles.containerCantidad}>
          <Text style={styles.subtitulo}>Cantidad</Text>
          <TextInput
            placeholder="Cantidad"
            keyboardType="numeric"
            placeholderTextColor={"#fff3bc"}
            style={styles.input}
          />
        </View>

        <Pressable style={[styles.btnLogin]}>
          <Text style={styles.txtBtnLogin}>Comprar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerSelect: {
    padding: 50,
    borderColor: "#E2DCD6",
    borderWidth: 1,
    margin: 10,
    marginBottom: 50,
  },
  containerCantidad: {
    padding: 50,
    borderColor: "#E2DCD6",
    borderWidth: 1,
    margin: 10,
    marginBottom: 50,
  },
  titulo: {
    marginTop: "15%",
    marginBottom: "15%",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 25,
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
