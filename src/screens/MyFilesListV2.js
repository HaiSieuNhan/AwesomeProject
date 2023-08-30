import { FlatList, StyleSheet, Text, View, Button, Alert } from "react-native";
import { ListItem, Divider } from 'react-native-elements';
export default function MyFilesList({ files }) {
  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
  return (
    <FlatList
      data={files}
      renderItem={({ item, index }) => {
        return (
          <ListItem
            containerStyle={styles2.listItem}
            title={item.name}
            subtitle={`Category: ${item.name}`}
            titleStyle={styles2.titleStyle}
            subtitleStyle={styles2.subtitleStyle}
            leftAvatar={{
              size: 'large',
              rounded: false,
              source: item.image && { uri: item.image }
            }}
          />
        );
      }
      }
      keyExtractor={(item) => item.name}
    />
  );
}


const styles2 = StyleSheet.create({
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