import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase} from '../config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from './style'

const Dashboard = () => {
  const[name,setName]=useState('')
  useEffect(()=>{
firebase.firestore().collection("users")
.doc(firebase.auth().currentUser.uid).get()
.then((snapshot)=>{
  if(snapshot.exists){
    setName(snapshot.data)
  }
    else{
      console.log('Kullanıcı bulunamadı')
    }
})

  },[])
  return(
    <SafeAreaView>
      <Text style={{fontSize:20,fontWeight:"bold"}}>
        Hello,{name.firstName}
      </Text>
      <TouchableOpacity
      onPress={()=>{firebase.auth().signOut()}}
      stlye={styles.button}
      >
        <Text style={{fontSize:20,fontWeight:"bold"}}> Çıkış Yap</Text>
       
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Dashboard

