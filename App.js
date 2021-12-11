import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import About from "./About";
import Home from "./Home";
import Landing from "./Landing";
import Character from "./Character";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Marvel App"} component={Landing}/>
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen name={"About"} component={About}/>
        <Stack.Screen name={"Character"} component={Character}
                      options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;