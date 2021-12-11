import * as React from "react";
import {Text,View,Image,ActivityIndicator,StyleSheet} from "react-native";
import axios from "axios";
import apiParams from "../config";
import {useEffect,useState} from "react";

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row"
  },
  image:{
    height:70,
    width:50
  }
})

function Comic({resourceURI,title}){
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const {ts,apikey,hash,baseURL} = apiParams;
  useEffect(()=>{
    axios.get(resourceURI,{
      params: {ts,apikey,hash}})
      .then(r => {
        console.log(r)
        setData(r.data.data.results[0])
      })
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  },[]);

  return(
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> :
        <Image source={`${data?.thumbnail?.path}.${data?.thumbnail.extension}`} style={styles.image}/>
      }
      <Text> {title}</Text>
    </View>
  )
}
export default Comic;