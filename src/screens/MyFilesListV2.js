import { StyleSheet, FlatList, View, Image } from "react-native";

import { ListItem, Avatar,List } from "@react-native-material/core";

function ImageList({ imageUrls }) {
  return (
    <View>
      <FlatList
        data={imageUrls}
        keyE  xtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            style={{ width: 400, height: 400, margin: 10 }}
            source={{ uri: item }}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
  },
  subtitleStyle: {
    fontSize: 18,
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16,
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: "italic",
  },
});

export default ImageList;
