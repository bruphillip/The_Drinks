import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/AntDesign';

import { addDrink } from '../../store/action';
import api from '../config';
import {
  CardContainer,
  CardText,
  CardImage,
  CardContent,
  CardCategory,
} from './style';

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#000',
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

async function apiRequest(value, updateList) {
  const response = await api.get(`search.php?s=${value}`);
  updateList(response.data.drinks);
}

function renderListOfDrinks(item, onClick) {
  return (
    <TouchableOpacity onPress={() => onClick(item)}>
      <CardContainer key={item.idDrink}>
        <CardImage
          source={{
            uri: item.strDrinkThumb,
          }}
        />
        <CardContent>
          <CardText>{item.strDrink}</CardText>
          <CardCategory>{item.strCategory}</CardCategory>
        </CardContent>
      </CardContainer>
    </TouchableOpacity>
  );
}

const debounceText = debounce(apiRequest, 200);

function Search({ navigation }) {
  const [searchBar, setSearchBar] = useState('');
  const [list, setList] = useState([]);
  const storeDrink = useDispatch();

  function onClickCard(drink) {
    storeDrink(addDrink(drink));
    navigation.navigate('Description', {
      title: drink.strDrink,
    });
  }

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        placeholderTextColor="#000"
        inputContainerStyle={styles.inputContainerStyle}
        underlineColorAndroid="#fff"
        selectionColor="#fff"
        searchIcon={
          <Icon name="arrowleft" onPress={() => navigation.pop()} size={20} />
        }
        inputStyle={styles.inputStyle}
        value={searchBar}
        onChangeText={text => {
          setSearchBar(text);
          debounceText(text, setList);
        }}
        containerStyle={styles.containerStyle}
      />
      <FlatList
        keyExtractor={item => item.idDrink}
        data={list}
        renderItem={({ item }) => renderListOfDrinks(item, onClickCard)}
      />
    </View>
  );
}

Search.navigationOptions = {
  header: null,
};

export default Search;
