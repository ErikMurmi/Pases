import React, { Component, useState } from 'react';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';

{/*----------Importamos los colores----------*/ }
import Colors from '../src/utils/colors';

{/*---------Exportamos el componente---------*/ }

export default function Auth(props) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [nombre,setNombre] = useState('')

    /*function logInUser(){
        signInWithEmailAndPassword(auth,email,password)
        .then(response =>{
            const user = response.user;
            console.log(user.email);
            props.setLoggedIn(response);
        })
        .catch(error=>alert(error.message))
    }*/

    return (
        <View style = {styles.container}>
            <Text style={[styles.slogan, styles.titulo]}>INICIO</Text>
            <View style={styles.viewInputs}>
                
                {/* E-mail */}
                <TextInput placeholder="Nombre" placeholderTextColor={"#fff3bc"}
                onChangeText={text => setEmail(text)}
                 keyboardType="email-address" style={styles.input}/>

                {/* Password */}
                <TextInput placeholder="Contraseña"  placeholderTextColor={"#fff3bc"}
                secureTextEntry onChangeText={text => setPassword(text)}
                style={styles.input}/>

                <Pressable style={styles.btnLogin} onPress={()=>props.login(true)} >
                    <Text style={styles.txtBtnLogin}>Ingresar</Text>
                </Pressable>

                <Pressable style={[styles.btnLogin,{backgroundColor:"#ff8637"}]} >
                    <Text style={styles.txtBtnLogin}>Registrarse</Text>
                </Pressable>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop:"60%",
        marginHorizontal:"15%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    slogan:{
        textAlign:"center",
        bottom: "20%",
        fontFamily: "sans-serif-condensed",
        fontSize:20,
        color: "#fff",
        fontWeight: "bold",
        width: "133%",
    },

    titulo:{
          marginBottom:"3%", 
          marginTop:"40%",     
          fontSize:50,
          color:"#1e1e1e",
    },

    viewInputs: {
        alignItems: "center",
        width:"100%",
        bottom:"10%",
        right: "-2%"
    },

    input: {
        borderRadius:25,
        width:"100%",
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
    btnLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
    },
    txtBtnLogin:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    txtRegistrarse:{
        fontSize: 16,
        color:"#000"
    },
    viewRegistrarse:{
        fontSize: 16,
        flexDirection: "row",

    },
    iniciarPress:{
        fontWeight: "bold",
    }
});