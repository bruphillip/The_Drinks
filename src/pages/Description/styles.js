import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { thirdColor } from '../../globalStyles';

export const DescriptionContainer = styled.View``;

export const DrinkImage = styled.Image`
  width: 100%;
  height: 550px;
`;

export const IngredientsContainer = styled.View`
  margin: 10px;
`;

export const IngredientsText = styled.Text`
  margin: 10px;
  color: ${'#30336b'};
  font-size: 20px;
`;

export const IngredientsList = styled.View`
  margin: 10px;
`;

export const IngredientItem = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const IngredientItemImageDot = styled(Icon)`
  color: ${thirdColor};
`;

export const IngredientItemText = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: ${thirdColor};
`;

export const InstructionsContainer = styled.View`
  margin: 10px;
`;

export const InstructionsText = styled.Text`
  margin: 10px;
  color: ${'#30336b'};
  font-size: 20px;
`;

export const Instructions = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: ${thirdColor};
`;
