import { FC, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/Subtitle';
import { List } from '../components/List';
import { IconButton } from '../components/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/redux/store';
import { addFavorite, removeFavorite } from '../store/redux/favorite-slice';
// import { FavoritesContext } from '../store/context/favorites-context';

interface MealDetailScreenProps {
  route: any;
  navigation: any;
}

export const MealDetailScreen: FC<MealDetailScreenProps> = ({
  route,
  navigation,
}) => {
  // const favoritesMealsContext = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // const mealIsFavorite = favoritesMealsContext.ids.includes(mealId);
  const mealsFavorites = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  );
  const mealIsFavorite = mealsFavorites.includes(mealId);
  const dispatch = useDispatch();

  // function toggleFavoriteStatus() {
  //   mealIsFavorite
  //     ? favoritesMealsContext.removeFavorite(mealId)
  //     : favoritesMealsContext.addFavorite(mealId);
  // }
  function toggleFavoriteStatus() {
    mealIsFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color='white'
          onPress={toggleFavoriteStatus}
        />
      ),
    });
  }, [navigation, toggleFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexability={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <Subtitle text='Ingridients' />
        <List data={selectedMeal?.ingredients} />
        <Subtitle text='Steps' />
        <List data={selectedMeal?.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  listContainer: {
    width: '80%',
    marginHorizontal: '10%',
  },
});
