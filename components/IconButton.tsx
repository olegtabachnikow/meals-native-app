import { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  onPress: () => void;
  icon: any;
  color: string;
}

export const IconButton: FC<IconButtonProps> = ({ onPress, icon, color }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.buttonPressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
