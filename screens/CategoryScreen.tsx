import { FC } from 'react';
import { CATEGORIES } from '../data/data';
import { FlatList } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { StackNavigationProp } from '@react-navigation/stack';

interface CategoryScreenProp {
  navigation: StackNavigationProp<any, any>;
}

export const CategoryScreen: FC<CategoryScreenProp> = ({ navigation }) => {
  function handlePress(item: any) {
    navigation.navigate('MealsOverview', {
      categoryId: item.id,
    });
  }

  function renderMealsOverview(itemData: any) {
    return (
      <CategoryGridTile
        item={itemData.item}
        onPress={() => handlePress(itemData.item)}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderMealsOverview}
      numColumns={2}
    />
  );
};
