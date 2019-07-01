import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import {
  HeaderTitle,
  primaryColor,
  secondaryColor,
  inputColor,
  HeaderContainer,
} from './globalStyles';

import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Description from './pages/Description';
import Search from './pages/Search';

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      Drinks,
      Description,
      Search,
    },
    {
      initialRouteName: 'Home',

      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTintColor: inputColor,
          headerTitle: (
            <HeaderContainer>
              <Icon
                name="drink"
                style={{ marginLeft: 20 }}
                size={24}
                color={secondaryColor}
              />
              <HeaderTitle>Categories </HeaderTitle>
            </HeaderContainer>
          ),
          headerRight: (
            <IconFeather
              name="search"
              color={secondaryColor}
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('Search')}
            />
          ),
        };
      },
      cardStyle: {
        backgroundColor: secondaryColor,
      },
      mode: 'modal',
    },
  ),
);
