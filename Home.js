import * as React from "react";
import {View,ActivityIndicator,FlatList,StyleSheet} from "react-native";
import Card from "./components/Card";
import apiParams from "./config";
import axios from "axios";
import {useEffect, useState} from "react";

const styles = StyleSheet.create({
  loading:{
    display:"flex",
    alignItems:"center",
    marginTop:"75%"
  }
})

// function SearchBar(){
//   const [text,setText] = useState('');
//   return (<View>
//     <TextInput placeholder="write here, please" defaultValue={text} onChangeText={val=>setText(val)}/>
//     <StatusBar style="auto" />
//     <Text>{text}</Text>
//     </View>)
// }

function Home(){
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const {ts,apikey,hash,baseURL} = apiParams;

  useEffect(()=>{
    axios.get(`${baseURL}/v1/public/characters`,{params:{ts,apikey,hash}})
      .then(r => setData(r.data.data))
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  },[]);
  console.log(data);
  return (
    <View>
      {isLoading ?
        <ActivityIndicator style={styles.loading} size="large"/>
        :
        <FlatList data={data?.results}
                  renderItem={({item}) =>
                    <Card image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} name={item.name} id={item.id}/>}
                  keyExtractor={({ id }) => id.toString()}/>}
    </View>)
}
export default Home;