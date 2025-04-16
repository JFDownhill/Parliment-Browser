import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MembersScreen from "./screens/MembersScreen";
import MemberDetailScreen from "./screens/MemberDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Members" component={MembersScreen} />
        <Stack.Screen name="MemberDetail" component={MemberDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}