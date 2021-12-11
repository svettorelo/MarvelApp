import * as React from "react";
import {View,Text,FlatList} from "react-native";
import Card from "./Card";

function Comics({comics}){
  console.log(comics)
  return (
    <View>
     <Text> COMICS {comics?.items.length}</Text>
      <FlatList
      data={comics?.items}
      renderItem={({item,index})=><Card id={index} name={item.name} image={{uri:item.resourceURI}}/>}
      />
    </View>
  )
}
export default Comics;