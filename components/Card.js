import * as React from "react";
import {TouchableOpacity,View,Text,Image,StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    margin:5,
    padding:5,
    border:"1px solid black",
    borderRadius:"3px",
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"lightsteelblue"
  },
  image: {
    height:40,
    width:40,
    marginRight:5
  },
  text: {
    fontWeight:500
  }
})

function Card({name,image,id}){
  const navigation = useNavigation();

  return (
    <TouchableOpacity  onPress={() => navigation.navigate("Character",{id,name})} >
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}> {name} </Text>
      </View>
    </TouchableOpacity>
  )
}
export default Card;