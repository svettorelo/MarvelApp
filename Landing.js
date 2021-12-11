import "react-native-gesture-handler";
import React from "react";
import About from "./About";
import {Text, View, Button} from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f08f',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

function Landing({navigation}){
  return  (
    <View>
      <Text style={{fontWeight:600,marginTop:5}}>Welcome to the Marvel App</Text><br/>
      <Button title={"Enter"} onPress={()=>navigation.navigate("Home")}/><br/>
      <Button title={"About"} onPress={()=>navigation.navigate("About")}/>
    </View>)
}
export default Landing;