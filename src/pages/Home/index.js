import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import api from '../config';
import { addCategorie } from '../../store/action';
import { CategoryCard, CategoryButton, CategoryContent } from './style';

export default function({ navigation }) {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  async function apiRequest() {
    const response = await api.get('list.php?c=list');

    setCategories(response.data.drinks);
  }

  useEffect(() => {
    apiRequest();
  }, []);

  const handlePress = category => {
    dispatch(addCategorie(category));
    navigation.navigate('Drinks');
  };
  return (
    <ScrollView>
      <FlatList
        data={categories}
        keyExtractor={(category, index) => index.toString()}
        renderItem={category => (
          <CategoryButton onPress={() => handlePress(category.item)}>
            <CategoryCard>
              <CategoryContent>{category.item.strCategory}</CategoryContent>
            </CategoryCard>
          </CategoryButton>
        )}
      />
    </ScrollView>
  );
}
