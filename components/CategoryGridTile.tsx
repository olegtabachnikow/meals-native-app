import { FC } from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

interface CategoryGridTileProps {
  item: {
    id: string;
    title: string;
    color: string;
  };
  onPress: () => void;
}

export const CategoryGridTile: FC<CategoryGridTileProps> = ({
  item,
  onPress,
}) => {
  return (
    <View style={styles.categoryOuterContainer}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View
          style={[
            styles.categoryInnerContainer,
            { backgroundColor: item.color },
          ]}
        >
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryOuterContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  categoryInnerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
