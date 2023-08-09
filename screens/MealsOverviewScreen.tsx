import { FC, useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/data';
import { MealList } from '../components/MealList';

interface MealsOverviewProps {
  route: any;
  navigation: any;
}

export const MealsOverview: FC<MealsOverviewProps> = ({
  route,
  navigation,
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) =>
    item.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({ title: catTitle?.title });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
};
