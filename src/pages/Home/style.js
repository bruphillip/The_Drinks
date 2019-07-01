import styled from 'styled-components/native';
import { primaryColor } from '../../globalStyles';

export const CategoryButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const CategoryCard = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  width: 100%;
  height: 80px;
`;

export const CategoryContent = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
