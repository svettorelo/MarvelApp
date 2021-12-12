import "react-native-gesture-handler";
import React from "react";
import About from "./About";
import {Text,View,TouchableOpacity,StyleSheet,Button} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f51b5de',
    justifyContent: 'center',
  },
  title:{
    fontWeight:'600',
    marginTop:5
  },
  button:{
    marginVertical:15,
    height:80,
    backgroundColor:"red",
  },
  buttonText:{
    color:"white",
    textTransform:"uppercase",
    fontWeight:"bold",
    marginTop:15,
    textAlign:"center",
    fontSize:30
  }
});

function Landing({navigation}){
  return  (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Welcome to the Marvel App</Text>*/}
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Button title={"About"} onPress={()=>navigation.navigate("About")}/>
    </View>)
}
export default Landing;