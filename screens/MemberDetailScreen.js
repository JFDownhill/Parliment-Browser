import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MemberDetailScreen({ route }) {
  const { member } = route.params;

  return (
    <View style={styles.container}>
      {member.image && (
        <Image source={{ uri: member.image.url }} style={styles.image} />
      )}
      <Text style={styles.title}>{member.first_name} {member.last_name}</Text>
      <Text style={styles.subtitle}>Född: {member.birthday || "Okänt"}</Text>
      <Text style={styles.subtitle}>Adress: {member.address || "Okänt"}</Text>
      <Text style={styles.subtitle}>Stad: {member.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});