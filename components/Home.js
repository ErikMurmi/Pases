import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { ScrollView } from "react-native-web";
import Comprar from "./Comprar";

export default function Home({ navigation }) {
  const Separator = () => <View style={styles.separator} />;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Pases</Text>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.container, styles.button]}
            onPress={() => Alert.alert("Button with adjusted color pressed")}
            title="Activas"
            color={"#b8bb26"}
          />
          <Separator />
          <Button title="Expiradas" color={"#9c3f3c"} />
        </View>

        <View style={styles.paseContainer}>
          <Text style={styles.paseMembers}>Tipo De Pase: Semestral</Text>
          <Text style={styles.paseMembers}>Cupo Restante: 576</Text>
          <Text style={styles.paseMembers}>Valor por pase: 0.087</Text>

          <Text style={styles.paseMembers}>Fecha Compra: 01/03/2022</Text>
          <Text style={styles.paseMembers}>Fecha Expiracion:</Text>
          <Text style={styles.paseMembers}>Pases Restantes:</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.container, styles.button]}
            onPress={() => {
              navigation.navigate("Comprar");
            }}
            title="Comprar"
            color={"#b8bb26"}
          />
          <Separator />
          <Button title="Gastar" color={"#9c3f3c"} />
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
    backgroundColor: "#ebdbb2",
  },
  paseMembers: {
    backgroundColor: "#E3BC99",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    fontSize: 19,
    fontWeight: "400",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: "5%",
    paddingHorizontal: "10%",
    paddingVertical: "3%",
    alignItems: "stretch",
    backgroundColor: "#ebdbb2",
    borderRadius: 15,
  },
  titulo: {
    marginTop: "15%",
    marginBottom: "3%",
    fontSize: 40,
    fontWeight: "bold",
  },
  separator: {
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 25,
  },
});
