import React  from "react";
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import Comprar from "./Comprar";

export default function Home(){

    const Separator = () => <View style={styles.separator} />;
    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Pases</Text> 
        <View style={styles.buttonContainer}>
          <Button style={[styles.container, styles.button]} 
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Activas" color={"#b8bb26"} />
          <Separator/>
          <Button title="Expiradas" color={"#9c3f3c"} />
        </View>
        <View style={styles.paseContainer}>
            <Text>Fecha Compra:</Text>
            <Text>Fecha Expiracion:</Text>
            <Text>Pases Restantes:</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={[styles.container, styles.button]} 
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Comprar" color={"#b8bb26"} />
          <Separator/>
          <Button title="Gastar" color={"#9c3f3c"} />
        </View>
      </View>
    )
        
}
/*
export default function appPages(){
    const AppStack = createNativeStackNavigator();
    return(
        <NavigationContainer independent={true}>        
            <AppStack.Navigator 
            initialRouteName="Home">
                <AppStack.Screen  name="Home" component={Home} />
                <AppStack.Screen  name="Comprar" component={Comprar} options={{title:
                "Comprar Pase"}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}*/


const styles = StyleSheet.create({
    container: {
      display: "flex",
      marginTop:"10%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paseContainer:{
      display: "flex",
      alignContent: "space-between",
      width:'85%',
      borderRadius: 20,
      padding: "10%",
      backgroundColor: "#47d08e"
    },
    buttonContainer:{
      flexDirection: "row",
      margin:"5%",
      paddingHorizontal:"10%",
      paddingVertical:"3%",
      alignItems: "stretch",
      backgroundColor:"#ebdbb2",
      borderRadius: 15
    },
    titulo:{
      marginBottom:"3%",      
      fontSize:50,
    },
    separator:{
      marginHorizontal:10,
    },
    button:{
      borderRadius:25
    }
    
  });