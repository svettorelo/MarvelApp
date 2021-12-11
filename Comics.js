import * as React from "react";
import {View,Text,ScrollView} from "react-native";
import Comic from "./components/Comic";

function Comics({comics}){
  console.log(comics)
  return (
    <View>
      <Text>{comics?.items[0].name}</Text>
      <ScrollView>
      {comics?.items.map((item,index) =>
        <Comic key={index} title={item?.name} resourceURI={item?.resourceURI}/>
      )}
      </ScrollView>
    </View>
  )
}
export default Comics;