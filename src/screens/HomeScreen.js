import { StyleSheet, TextInput, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
import { GptCall } from '../api/GemniAI';

// import Voice from '@react-native-community/voice';


export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState("")


  
  const pushText = async() => {
    const new_message = {
      role: 'user',
      content: input,
    };

    const newMessages = [...messages, new_message];
    setMessages(newMessages);

    const gpt_response = await GptCall(input);
    console.log(gpt_response)
    setInput('');
 
    const formatted_response = {
      role: 'assistant',
      content: gpt_response, 
    };
    setMessages(prevMessages => [...prevMessages, formatted_response]);

}

  
  



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 flex mx-5 pt-5">
          <View className="flex-row justify-center ">
            <Image source={require("../../assets/images/logo.png")} style={{ width: wp(25), height: wp(25), resizeMode: 'contain' }} />
          </View>

          {/* Features || messages */}

          {messages.length > 0 ? (
            <View className=" mt-3 space-y-2 flex1">
              <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-semibold ml-1">
                Assistant
              </Text>
              <View style={{ height: hp(60) }} className="bg-neutral-200 rounded-3xl p-4">
                <ScrollView bounces={false} className="space-y-4" showsVerticalScrollIndicator={false} >
                  { 
                     messages.map((message, index) => {
                      
                      if (message && message.role == 'assistant') {
                          // text response
                          return (

                            <View key={index} style={{ width: wp(70) }} className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                              <Text>{message?.content}</Text>
                            </View>

                          )
                        }
                       else {
                        // user input
                        return (
                          <View key={index} className="flex-row justify-end">
                            <View style={{ width: wp(70) }} className="bg-white rounded-xl p-2 rounded-tr-none">
                              <Text>{message?.content}</Text>
                            </View>
                          </View>
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
              {/* Input Text */}
              <TextInput
                style={[styles.input, { width: wp(90), height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }]}
                value={input}
                onChangeText={setInput}
                placeholder="Search"
                placeholderTextColor="#999"
                className="bg-neutral-200"
              />
              <View className="mt-3 flex flex-row items-center justify-around">
                <TouchableOpacity onPress={pushText} className="bg-cyan-400 px-6 py-4 rounded">
                  <Text className="text-white text-base font-semibold">Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMessages([])} className="bg-red-400 px-6 py-4 rounded">
                  <Text className="text-white text-base font-semibold">Clear</Text>
                </TouchableOpacity>
              </View>
            </View>

          ) : (
            <Features />
          )}


        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 15,
    marginLeft: 4,
    borderWidth: 1,
    padding: 10,
  },

})

