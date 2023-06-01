import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase} from '../config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from './style'
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation=useNavigation()
  const[name,setName]=useState('')
  
  //change password


  const changePassword=()=>{
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(()=>{
      alert("Şifre sıfırlama mail yollandı")
    }).catch((error)=>{
      alert(error)
    })
  }
  //forget password 
  const forgetPasword=()=>{
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(()=>{
      alert("Şifre sıfırlama mail yollandı")
    }).catch((error)=>{
      alert(error)
    })
  }
  useEffect(() => {
    firebase.firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('Kullanıcı bulunamadı');
        }
      })
      .catch((error) => {
        console.log('Hata:', error);
      });
  }, []);
  return( 
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>
        Hello,{name.firstName}
      </Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Category')}
     
      >
        <Text style={{fontSize:20,fontWeight:"bold"}} >Kategorileri Listele</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{firebase.auth().signOut()}}
      style={styles.button}
      >
        <Text style={{fontSize:20,fontWeight:"bold"}}> Çıkış Yap</Text>
       
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
          changePassword();
        
        }}
        style={styles.button}
       
      >
        <Text style={{fontSize:20,fontWeight:"bold"}}> Şifre Degiştir</Text>
       
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard

