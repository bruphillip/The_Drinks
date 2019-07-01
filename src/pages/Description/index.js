import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { HeaderTitle, primaryColor } from '../../globalStyles';
import {
  DrinkImage,
  DescriptionContainer,
  IngredientsContainer,
  IngredientsText,
  IngredientsList,
  IngredientItem,
  IngredientItemText,
  IngredientItemImageDot,
  InstructionsContainer,
  InstructionsText,
  Instructions,
} from './styles';

import api from '../config';

class Description extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: true,
      headerStyle: { height: 50 },
      headerTitle: (
        <HeaderTitle style={{ width: 200, color: primaryColor }}>
          {navigation.getParam('title')}
        </HeaderTitle>
      ),
      headerLeft: (
        <Icon
          name="arrowleft"
          style={{ marginLeft: 5 }}
          size={30}
          color={primaryColor}
          onPress={() => navigation.pop()}
        />
      ),
    };
  };

  state = { description: {} };

  componentDidMount() {
    this.apiRequest();
  }

  apiRequest = async () => {
    const { idDrink } = this.props;
    const response = await api.get(`lookup.php?i=${idDrink}`);
    this.setState({ description: response.data.drinks[0] });
  };

  renderListOfIngredient = () => {
    const { description } = this.state;
    const ingredients = [];

    if (description.idDrink) {
      for (let i = 1; i <= 15; i += +1) {
        const ingredientId = `strIngredient${i}`;
        const ingredientName = description[ingredientId];
        if (ingredientName) {
          ingredients.push(
            <IngredientItem key={i}>
              <IngredientItemImageDot name="dot-single" />
              <IngredientItemText>{ingredientName}</IngredientItemText>
            </IngredientItem>,
          );
        }
      }
      return ingredients;
    }
    return <View />;
  };

  render() {
    const { strDrinkThumb } = this.props;
    const { description } = this.state;
    return (
      <DescriptionContainer>
        <ScrollView>
          <DrinkImage
            source={{
              uri: strDrinkThumb,
            }}
          />
          <IngredientsContainer>
            <IngredientsText>Ingredients</IngredientsText>
            {this.renderListOfIngredient()}
            <IngredientsList />
          </IngredientsContainer>

          <InstructionsContainer>
            <InstructionsText>Instructions</InstructionsText>
            <Instructions>{description.strInstructions}</Instructions>
          </InstructionsContainer>

          <Text>{description.strVideo}</Text>
        </ScrollView>
      </DescriptionContainer>
    );
  }
}

const mapStatetoProps = state => {
  return state.drinkReducer.drink;
};

export default connect(mapStatetoProps)(Description);
