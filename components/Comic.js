import * as React from "react";
import {Text,View,Image,ActivityIndicator,StyleSheet} from "react-native";
import axios from "axios";
import apiParams from "../config";
import {useEffect,useState} from "react";

const styles = StyleSheet.create({
  containerSV:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    borderColor:"black",
    borderRadius:5,
    borderWidth:1,
    margin:3,
    paddingRight:2,
    //flexShrink:1
  },
  containerFL:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"column",
    borderColor:"black",
    borderRadius:5,
    borderWidth:1,
    margin:3,
    paddingRight:2,
    height:450,
    width:220,
    flexShrink:1
  },
  imageSV:{
    margin:2,
    height:"100%",
    width:"auto",
    padding:1
  },
  imageFL:{
    margin:2,
    height:290,
    width:190,
    padding:1
  },
  text:{
    padding:10,
    margin:10,
    // flex:1,
    // flexWrap:"wrap",
    // flexShrink:1
  }
})

function Comic({resourceURI,title}){
  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState([]);
  const {ts,apikey,hash,baseURL} = apiParams;
  useEffect(()=>{
    axios.get(resourceURI,{
      params: {ts,apikey,hash}})
      .then(r => setData(r?.data?.data?.results[0]))
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  },[]);

  return(
    <View style={styles.containerFL}>
      {isLoading ? <ActivityIndicator/> :
        <Image source={{uri:`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}} style={styles.imageFL}/>
      }
      <Text> {title}</Text>
    </View>
  )
}
export default Comic;