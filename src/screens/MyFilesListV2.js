import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  Avatar
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

function ImageList({ imageUrls }) {
  return (
    <View>
      <FlatList
        data={imageUrls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: item }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30
  },
  subtitleStyle: {
    fontSize: 18
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  }
});

export default ImageList;
