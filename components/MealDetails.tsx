import { CSSProperties, FC } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface MealDetailProps {
  duration: number;
  complexability: string;
  affordability: string;
  textStyle?: TextStyle;
  style?: ViewStyle;
}

export const MealDetails: FC<MealDetailProps> = ({
  duration,
  complexability,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexability.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
