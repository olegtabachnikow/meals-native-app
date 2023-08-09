import { StatusBar } from 'expo-status-bar';
import { CategoryScreen } from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverview } from './screens/MealsOverviewScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { RootStackParamList } from './types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoryScreen}
        options={{
          title: 'All categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='list' />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='star' />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.rootScreen}>
      <StatusBar style='light' />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name='DrawerScreen'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverview}
              // options={({
              //   route,
              //   navigation,
              // }: {
              //   route: any;
              //   navigation: any;
              // }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{ title: 'About the meal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
