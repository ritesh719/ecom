import React from 'react'
import { Platform, ScrollView, StatusBar, Text, View } from 'react-native'
import WebView from 'react-native-webview'
import TopHeader from '../components/TopHeader'

export default function Financiers({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TopHeader navigation={navigation} />
        <WebView source={{uri: 'https://qasstly.com/api/all_banks_app.php'}} style={{width: '100%'}} />
    </View>
  )
}
