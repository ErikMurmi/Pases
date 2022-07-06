import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { ScrollView } from "react-native-web";
import Comprar from "./Comprar";



export default function Home({ navigation,route }) {
  const Separator = () => <View style={styles.separator} />;
  const logOut = ()=>{
    navigation.navigate('Login');
    route.params.logOut();
  }

  return (
    <>
       <View style={styles.salirContainer}>
          <Button title="Salir" color={"#1e1e1e"} onPress={()=>logOut()}/>
        </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Pases</Text>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.container, styles.button]}
            onPress={() => Alert.alert("Button with adjusted color pressed")}
            title="Activas"
            color={"#23a7f2"}
          />
          <Separator />
          <Button title="Expiradas" color={"#9c3f3c"} onPress={()=>navigation.navigate('Expiradas')} />
        </View>

        <View style={styles.paseContainer}>
          <Text style={styles.paseTitle}>Tipo</Text>
          <Text style={styles.paseMembers}>{route.params.user.pase.tipoPase}</Text>
          <Text style={styles.paseTitle}>Pases Restantes</Text>
          <Text style={styles.paseMembers}>{route.params.user.pase.pasesRestantes}</Text>
          <Text style={styles.paseTitle}>Fecha Compra</Text>
          <Text style={styles.paseMembers}>{route.params.user.pase.fechaCompra}</Text>
          <Text style={styles.paseTitle}>Fecha Expiracion</Text>
          <Text style={styles.paseMembers}>2022-0701</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.container, styles.button]}
            onPress={() => {
              navigation.navigate("Comprar");
            }}
            title="Comprar"
            color={"#21be5a"}
          />
          <Separator />
          <Button title="Gastar" color={"#fcba03"} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",    
    backgroundColor: "#fff",
    alignItems: "center",
  },
  paseContainer: {
    width: "85%",
    borderRadius: 20,
    padding:20,
    backgroundColor: "#ffda35",
  },
  paseMembers: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    fontSize: 19,
    fontWeight: "400",
  },
  paseTitle:{
    fontWeight:"bold",
    paddingLeft:15,
    fontSize:23
  },
  buttonContainer: {
    flexDirection: "row",
    margin: "5%",
    paddingHorizontal: "10%",
    paddingVertical: "3%",
    alignItems: "stretch",
    borderRadius: 15,
  },
  titulo: {
    marginBottom: "3%",
    fontSize: 40,
    fontWeight: "bold",
  },
  separator: {
    marginHorizontal: 10,
  },
  salirContainer: {
    alignItems:'flex-start',
    backgroundColor: "#fff",
    paddingTop: "15%",
    marginLeft: "3%"
  },
});
