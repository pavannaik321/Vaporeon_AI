import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Features() {
  return (
    <View style={{height:hp(60)}} className=" mt-3 space-y-4">
      <Text style={{fontSize:wp(6.5)}} className="font-semibold text-gray-700 ">Features</Text>

      {/* Chatgpt */}
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
      <View className="flex-row items-center space-x-1">
        <Image source={require("../../assets/images/chatgpt-icon.png")} style={{height:hp(4),width:hp(4)}} />
        <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 pl-3">ChatGPT</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
        ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics. 
      </Text>
      </View>

      {/* DALL-E */}
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
      <View className="flex-row items-center space-x-1">
        <Image source={require("../../assets/images/DALL-E.png")} style={{height:hp(4),width:hp(4)}} />
        <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 pl-3">DALL-E</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
       DALL-E can generate imaginative and diverse images form textual description, expanding the boundries of visual creativity.
      </Text>
      </View>

      {/* Smart AI */}
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
      <View className="flex-row items-center space-x-1">
        <Image source={require("../../assets/images/Smart-AI.png")} style={{height:hp(4),width:hp(4)}} />
        <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 pl-3">Smart AI</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
      A powerful voice assistant with with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
      </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})