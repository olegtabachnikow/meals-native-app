import { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MealList } from '../components/MealList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/data';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';

export const FavoritesScreen: FC = () => {
  // const favoritesMealsContext = useContext(FavoritesContext);
  const favoriteMeals = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const currentFavorites = MEALS.filter((el) => favoriteMeals.includes(el.id));

  if (!currentFavorites.length) {
    return (
      <View style={styles.rootScreen}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <View style={styles.rootScreen}>
      <MealList items={currentFavorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: '90%',
    marginHorizontal: '5%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
  },
});
