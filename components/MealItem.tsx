import { FC } from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MealDetails } from './MealDetails';

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexability: string;
  affordability: string;
}

type MealDetailScreenProp = StackNavigationProp<
  RootStackParamList,
  'MealDetail'
>;

export const MealItem: FC<MealItemProps> = ({
  id,
  title,
  imageUrl,
  duration,
  complexability,
  affordability,
}) => {
  const navigation = useNavigation<MealDetailScreenProp>();

  function handleNavigation() {
    const mealId = id;
    navigation.navigate('MealDetail', { mealId });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handleNavigation}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>
          pressed && Platform.OS === 'ios' ? styles.buttonPressed : null
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.imageTitle}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexability={complexability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
