import styled from 'styled-components/native';
import { primaryColor } from '../../globalStyles';

export const DrinkCard = styled.TouchableOpacity`
  align-items: center;
  height: 250px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${primaryColor};
  flex-grow: 1;
  flex-basis: 0;
`;

export const DrinkContent = styled.View`
  align-items: center;
  width: 100%;
`;

export const DrinkText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;

export const DrinkImage = styled.Image`
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  width: 100%;
  height: 200px;
`;

export const SpinnerContent = styled.View`
  height: 80%;
  justify-content: center;
  align-items: center;
`;
