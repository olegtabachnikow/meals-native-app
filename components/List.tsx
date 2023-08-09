import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ListProps {
  data: string[];
}

export const List: FC<ListProps> = ({ data }) => {
  return (
    <>
      {data?.map((step: string, index: number) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.itemText}>{step}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
