import * as React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

const styles = StyleSheet.create({
  image:{
    height:200,
    width:200,
    borderStyle:"solid",
    borderColor:"black",
    borderWidth:1,
    marginLeft:"22.5%",
    marginVertical:5
  },
  description: {
    fontSize:18,
    margin:5
  }
})

function Detail({image,description}){
  return (
    <View>
      <Image source={{uri: image}} style={styles.image}/>
      <Text style={styles.description}> {description?description:'Sorry, no description available.'} </Text>
    </View>
  )
}
export default Detail;