import * as React from "react";
import {View,Text,ActivityIndicator,FlatList,StyleSheet} from "react-native";
import Card from "./components/Card";
import apiParams from "./config";
import axios from "axios";
import {useEffect, useState} from "react";
import {Searchbar} from "react-native-paper";

const styles = StyleSheet.create({
  loading:{
    display:"flex",
    alignItems:"center",
    marginTop:"75%"
  }
})

function Home(){
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);
  const [search, setSearch] = useState('');
  const {ts,apikey,hash,baseURL} = apiParams;

  function searchCharacters(){
    if(search) {
      setIsLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {ts,apikey,hash,nameStartsWith:search}})
        .then(r => setDataSearch(r.data.data))
        .catch(e => console.error(e))
        .finally(() => setIsLoading(false));
    }
  }

  useEffect(()=>{
    axios.get(`${baseURL}/v1/public/characters`,{params:{ts,apikey,hash}})
      .then(r => setData(r.data.data))
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  },[]);

  return (
    <View style={{backgroundColor:"lightgray"}}>
      <Searchbar value={search} placeholder="Search for a character..."
                 onChangeText={i => {
                   setSearch(i);
                   setDataSearch([]);
                 }}
                 onIconPress={searchCharacters}
                 onSubmitEditing={searchCharacters}
      />
      {isLoading ?
        <ActivityIndicator style={styles.loading} size="large"/>
        :
        <FlatList data={search&&(dataSearch?.results) ? (dataSearch?.results) : (data?.results)}
                  renderItem={({item}) =>
                    <Card image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} name={item.name} id={item.id}/>}
                  keyExtractor={({ id }) => id.toString()}/>}

    </View>)
}
export default Home;