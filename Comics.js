import * as React from "react";
import {View,Text,ScrollView,FlatList} from "react-native";
import Comic from "./components/Comic";

function Comics({comics}){
  return (
    <View>
      {/*<ScrollView>*/}
      {/*{comics?.items.length>0 ?*/}
      {/*  comics?.items.map((item,index) =>*/}
      {/*  <Comic key={index} title={item?.name} resourceURI={item?.resourceURI}/>) :*/}
      {/*  <Text style={{fontSize:18,margin:5}}>No comics available.</Text>*/}
      {/*}*/}
      {/*</ScrollView>*/}
      {comics?.items.length>0 ?
      <FlatList data={comics?.items} horizontal
                keyExtractor={(comics) => comics?.name}
                renderItem={({item}) => <Comic key={item.id} title={item?.name} resourceURI={item?.resourceURI}/>}
                contentContainerStyle={{alignItems: 'center'}}/>:
      <Text style={{fontSize:18,margin:5}}>No comics available.</Text>
      }
    </View>
  )
}
export default Comics;