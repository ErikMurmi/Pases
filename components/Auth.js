import React, { Component, useState, useEffect } from 'react';
import { Pressable, StyleSheet, TextInput, Text, View, Alert} from 'react-native';


{/*----------Importamos los colores----------*/ }
import Colors from '../src/utils/colors';

{/*---------Exportamos el componente---------*/ }


<<<<<<< HEAD
export function contenido({setLogged}){
=======
export function Contenido(props){
>>>>>>> ce5abe6bae8b3ab0d7ea76faff31f44f2a43f758
    const [password,setPassword] = useState('');
    const [nombre,setNombre] = useState('');
    let usuarios = [
        {nombre:'EstefiR',clave:'estefi123',pase:{fechaCompra:'2022-03-01',tipoPase:'semestral',pasesRestantes:44,cupo:'10'}},
        {nombre:'FrancisR',clave:'francis123',pase:{fechaCompra:'2022-03-03',tipoPase:'mensual',pasesRestantes:22,cupo:'20'}},
        {nombre:'GustavoL',clave:'gustavo123',pase:{fechaCompra:'2022-04-01',tipoPase:'anual',pasesRestantes:61,cupo:'12'}},
    ];

    function logIn(nombre,clave){
        const usuario = usuarios.find(u=> u.nombre == nombre && u.clave == clave);
        if(usuario==null){
            Alert.alert("Usuario no encontrado");
        }else{
            props.logUsuario(usuario);
            //props.setLogged(true);
        }
    }

    return(
        <>
            <View style = {styles.container}>
            <Text style={[styles.slogan, styles.titulo]}>INICIO</Text>
            <View style={styles.viewInputs}>
                
                {/* E-mail */}
                <TextInput placeholder="Nombre" placeholderTextColor={"#fff3bc"}
                onChangeText={text => setNombre(text)}
                 keyboardType="email-address" style={styles.input}/>

                {/* Password */}
                <TextInput name="cr" placeholder="Contraseña"  placeholderTextColor={"#fff3bc"}
                 onChangeText={text => setPassword(text)}
                style={styles.input}/>

                <Pressable style={styles.btnLogin} onPress={()=>logIn(nombre,password)} >
                    <Text style={styles.txtBtnLogin}>Ingresar</Text>
                </Pressable>

                <Pressable style={[styles.btnLogin,{backgroundColor:"#ff8637"}]} >
                    <Text style={styles.txtBtnLogin}>Registrarse</Text>
                </Pressable>                
            </View>
        </View>
        </>
    );

}

export default function Auth({navigation}) {

    const [logged,setLogged] = useState(false);
    const [usuario,setUsuario] = useState(null);
    useEffect(()=>{
        if(usuario!= null ){
            setLogged(true);
        }else{
            setLogged(false);
        }
    });
    function logOut(){
        setLogged(false);
        setUsuario(null); 
    }

    return (
        <>
<<<<<<< HEAD
            {logged? navigation.navigate('Home',{login:setLogged}) : contenido({setL:setLogged})}
=======
            {logged? navigation.navigate('Home',{logOut:logOut,user:usuario}) : <Contenido logUsuario ={setUsuario}></Contenido>}
>>>>>>> ce5abe6bae8b3ab0d7ea76faff31f44f2a43f758
        </>
        
    )
}

/*
display: "flex",
        marginTop:"60%",
        marginHorizontal:"15%",
*/

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:60
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