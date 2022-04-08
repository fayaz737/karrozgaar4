import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.searchbar}>
      {/* <Icon name="airplay" size={30} color="red" /> */}
      <TextInput style={styles.searchinput} placeholder="search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#dee1e9',
    height: 55,
    width: 300,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    marginVertical: 15,
  },
  searchicon: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  searchinput: {
    fontSize: 20,
    marginTop:5,
    flex: 1,
  },
});
