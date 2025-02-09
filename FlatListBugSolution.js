// FlatListBugSolution.js
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ItemSeparator = () => (
  <View style={styles.separator} />
);

const App = () => {
  const [data, setData] = useState(DATA);

  const renderItem = ({ item }) => <Item title={item.title} />;
  
  const addItem = () => {
    setData([...data, { id: data.length, title: `Item ${data.length}` }]);
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
      />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16
  }
});

export default App;