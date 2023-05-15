import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import {firebase} from '../config'
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from './style'

const Registration = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')

    registerUser=async(email,password,firstName,lastName)=>{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp:true,
          url:'https://fir-auth-47f5a.firebaseapp.com',
        })
        .then(()=>{
          alert("Verification email sent")
        }).catch((error)=>{
          alert(error.message)
        })
        .then(()=>{
          firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            firstName,
            lastName,
            email,
          })
        })
        .catch((error)=>{
          alert(error.message)
        })
      })
      .catch((error=>{
        alert(error.message)
      }))
    }
    return(
      <View style={styles.container}>
          <Text style={{fontWeight:"bold",fontSize:23}}>
            Buradan Kayıt Olun!!
          </Text>
          <View style={{marginTop:40}}>
            <TextInput
            style={styles.TextInput}
            placeholder='İsim'
            onChangeText={(firstName)=>setFirstName(firstName)}
            autoCorrect={false}
            
           />
            <TextInput
            style={styles.TextInput}
            placeholder='Soy İsim'
            onChangeText={(lastName)=>setFirstName(lastName)}
            autoCorrect={false}
           />
            <TextInput
            style={styles.TextInput}
            placeholder='Email'
            onChangeText={(email)=>setFirstName(email)}
            autoCapitalize='none'
            autoCorrect={false}
           
           />
             <TextInput
            style={styles.TextInput}
            placeholder='Şifre'
            onChangeText={(Password)=>setFirstName(Password)}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
           />
          <TouchableOpacity
            onPress={()=>registerUser(email,password,firstName,lastName)}
            style={styles.button}
          >
            <Text style={{fontWeight:"bold",fontSize:22}}>Kayıt Ol </Text>
          </TouchableOpacity>

          </View>
      </View>
    )
}

export default Registration

