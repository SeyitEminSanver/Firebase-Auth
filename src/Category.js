import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase} from '../config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from './style'
import { useNavigation } from '@react-navigation/native';

const Category = () => {
   
    return(
       <View>
        <Text> KAtegorilendin</Text>
       </View>
    )
}
    
export default Category

