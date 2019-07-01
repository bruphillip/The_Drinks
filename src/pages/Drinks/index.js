import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import api from '../config';

import { HeaderTitle, thirdColor, secondaryColor } from '../../globalStyles';
import {
  DrinkContent,
  DrinkCard,
  DrinkImage,
  DrinkText,
  SpinnerContent,
} from './style';
import { addDrink } from '../../store/action';

function Drinks({ navigation }) {
  const [listOfDrinks, setDrink] = useState([]);

  const category = useSelector(state => state.drinkReducer.categories);
  const storeDrink = useDispatch();

  async function apiRequest() {
    const response = await api.get(`filter.php?c=${category}`);
    setDrink(response.data);
  }

  useEffect(() => {
    apiRequest();
  }, [category]);

  function handleDrinkPress(drink) {
    storeDrink(addDrink(drink));
    navigation.navigate('Description', {
      title: drink.strDrink,
    });
  }

  return (
    <View>
      {listOfDrinks.drinks ? (
        <FlatList
          data={listOfDrinks.drinks}
          keyExtractor={item => item.idDrink}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <DrinkCard onPress={() => handleDrinkPress(item)}>
                <DrinkContent>
                  <DrinkImage
                    source={{
                      uri: item.strDrinkThumb,
                    }}
                  />
                  <DrinkText numberOfLines={1}>{item.strDrink}</DrinkText>
                </DrinkContent>
              </DrinkCard>
            );
          }}
        />
      ) : (
        <FakeData />
      )}
    </View>
  );
}

function FakeData() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      keyExtractor={item => item}
      numColumns={3}
      renderItem={() => {
        return (
          <DrinkCard onPress={() => {}}>
            <DrinkContent>
              <SpinnerContent>
                <ActivityIndicator size="large" color={thirdColor} />
              </SpinnerContent>
              <DrinkText numberOfLines={1} />
            </DrinkContent>
          </DrinkCard>
        );
      }}
    />
  );
}

Drinks.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: <HeaderTitle>Drinks </HeaderTitle>,
    headerLeft: (
      <Icon
        name="arrowleft"
        style={{ marginLeft: 5 }}
        size={30}
        color={secondaryColor}
        onPress={() => navigation.pop()}
      />
    ),
  };
};

export default Drinks;
