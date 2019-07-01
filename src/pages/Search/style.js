import styled from 'styled-components/native';

import { primaryColor, thirdColor } from '../../globalStyles';

export const CardContainer = styled.View`
  margin: 5px 5px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
  height: 60px;
  background-color: ${primaryColor};
`;

export const CardImage = styled.Image`
  border-radius: 30px;
  width: 30px;
  height: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  height: 40px;
  margin-left: 15px;
  align-items: flex-start;
`;

export const CardText = styled.Text`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

export const CardCategory = styled.Text`
  color: ${thirdColor};
`;
