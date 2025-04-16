import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Button } from "react-native";
import { SearchBar, ListItem, Avatar } from "react-native-elements";

export default function MembersScreen({ navigation }) {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  useEffect(() => {
    fetch("https://api.lagtinget.ax/api/persons.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setFilteredMembers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    filterMembers(search);
  }, [search, showActiveOnly]);

  const filterMembers = (searchText) => {
    let filtered = members;
    if (showActiveOnly) {
      filtered = filtered.filter((m) => m.state === "1");
    }
    if (searchText) {
      filtered = filtered.filter(
        (m) =>
          m.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
          m.last_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredMembers(filtered);
  };

  const toggleFilter = () => {
    setShowActiveOnly(!showActiveOnly);
  };

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate("MemberDetail", { member: item })}>
      <Avatar
        source={item.image ? { uri: item.image.url } : require("../assets/avatar-placeholder.png")}
        rounded
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title>{item.first_name} {item.last_name}</ListItem.Title>
        <ListItem.Subtitle>{item.city}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeholder="Sök ledamot..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        lightTheme
        round
      />
      <Button
        title={showActiveOnly ? "Visa alla ledamöter" : "Visa endast aktiva"}
        onPress={toggleFilter}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredMembers}
        renderItem={renderItem}
      />
    </View>
  );
}