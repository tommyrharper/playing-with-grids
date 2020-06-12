// THIS IS FOR REACT NATIVE

import React from 'react';
import{
  StyleSheet,
  Text,
  FlatList
} from 'react-native'

class GridList extends React.Component {
  render() {
    return(
      <>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={this.props.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          console.log(item);
          return <Text style={StyleSheet.item}>{item}</Text>
        }}
      />
      <Text>Ingredients</Text>
      </>
    )
  }
}

var styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    margin: 5,
    width: 90,
    padding: 8,
    color: 'white'
  },
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: 'center'
  }
})

export default GridList;