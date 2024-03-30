import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-evenly bg-white">
      <View className="space-y-2">
        <Text style={{fontSize:wp(9)}} className="text-center font-bold text-gray-700">
          Vaporeon
        </Text>
        <Text style={{fontSize:wp(4)}} className="text-center tracking-widest text-gray-600 font-semibold">
          The Future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
      <Image
  source={require("../../assets/images/logo.png")}
  style={{ width:wp(72),height:wp(72), resizeMode: 'contain' }}
/>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-cyan-600 mx-5 p-4 rounded-2xl" >
        <Text style={{fontSize:wp(6)}} className="text-center font-bold text-white text-2xl">Get Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})