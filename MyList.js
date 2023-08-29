import { FlatList, StyleSheet, Text, View, Button, Alert } from "react-native";

export default function MyFilesList({ files }) {
  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
  return (
    <FlatList
      data={files}
      renderItem={({ item }) => <Item name={item.name} />}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
    item: {
      padding:8,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
  });