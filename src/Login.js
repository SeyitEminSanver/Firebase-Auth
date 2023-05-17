import { TouchableOpacity, Text, View,TextInput,StyleSheet } from 'react-native'
import React,{useState}from 'react'
import {useNavigation} from '@react-navigation/native'
import {firebase} from '../config'
import { styles } from './style'

const Login = () => {
    const navigation=useNavigation()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    loginUser = async (email, password) => {
       
        try {
          await firebase.auth().signInWithEmailAndPassword(email.trim(), password);
          
        } catch (error) {
          alert(error.message);
        }
      };
    

    return(
        <View style={StyleSheet.container}>
            <Text style={{fontWeight:"bold",fontSize:26}}>
                Giriş
            </Text>
            <View style={{marginTop:40}}>
            <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email)=>setEmail(email)}
            autoCapitalize='none'
            autoCorrect={false}
            />
            <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password)=>setPassword(password)}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            />

            </View>
            <TouchableOpacity
            onPress={()=>loginUser(email,password)}
            style={styles.button}
            >
            <Text style={{fontWeight:"bold"}}>Giriş</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Registration')}
            style={{marginTop:20}}
            >
            <Text style={{fontWeight:"bold"}}>Kayit degil misiniz? KAyitOl</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Login

