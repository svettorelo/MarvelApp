import * as React from "react";
import Comics from "./Comics";
import Detail from "./components/Detail";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useEffect, useState} from "react";
import axios from "axios";
import apiParams from "./config";
import {ActivityIndicator} from "react-native";

const Tab = createBottomTabNavigator();

function Character({route}){
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const {ts,baseURL,apikey,hash} = apiParams;

  useEffect(()=>{
    axios.get(`${baseURL}/v1/public/characters/${route.params.id}`,{
      params: {ts,apikey,hash}})
      .then(r => setData(r.data.data.results[0]))
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  },[]);

  return (
      <Tab.Navigator initialRouteName={"Detail"} screenOptions={{
        tabBarActiveTintColor: "darkblue",
        tabBarStyle: [
          {display: "flex"},
          null
        ]
      }}>
        <Tab.Screen name={"Detail"}
                    options={{ headerShown:false,
                      tabBarIcon: ({size,color}) => (
                        <MaterialCommunityIcons name="badge-account-horizontal" size={25} color={color}/>
                      )
                    }}>
          {props => isLoading ?
            <ActivityIndicator style={{flex: 1, alignItems: "center"}} size="large"/>
            :
            <Detail {...props} image={`${data?.thumbnail?.path}.${data?.thumbnail.extension}`}
                               description={data.description}/>
          }
        </Tab.Screen>
        <Tab.Screen name={"Comics"}
                    options={{ headerShown:false,
                      tabBarIcon: ({size,color}) => (
                        <MaterialCommunityIcons name="bookshelf" size={25} color={color}/>
                      )
                    }}>
          {props => !isLoading && <Comics {...props} comics={data?.comics}/>}
        </Tab.Screen>
      </Tab.Navigator>
  )
}
export default Character;