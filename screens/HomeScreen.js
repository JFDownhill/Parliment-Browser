import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Välkommen till Ålands lagting</Text>
      <Button title="Visa ledamöter" onPress={() => navigation.navigate("Members")} />
    </View>
  );
}
