import { FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MealItem } from './MealItem';
import Meal from '../models/meal';

function renderMealItem(itemData: any) {
  const item = itemData.item;
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    complexability: item.complexity,
    affordability: item.affordability,
    duration: item.duration,
  };
  return <MealItem {...mealItemProps} />;
}

interface MealList {
  items: Meal[];
}

export const MealList: FC<MealList> = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
});
