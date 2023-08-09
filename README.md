# Meals App

Description:
The Meals App is a mobile application developed using React Native, which provides users with a platform to explore various meal categories, view recipes, and save their favorite meals. The app utilizes the power of React Redux for state management, and React Navigation for seamless navigation between screens.

Features:

Category Selection:
Users can choose from a variety of meal categories. The app displays a list of available categories, allowing users to select the category they're interested in.

Meal List:
Upon selecting a category, the app presents users with a list of meals within that category. Each meal is accompanied by an image and a brief description.

Meal Details:
Tapping on a meal from the list takes the user to a detailed view of the meal. Here, users can see the complete recipe along with ingredients, preparation instructions, and other relevant details.

Favorite Meals:
Users can mark meals as favorites by clicking a heart icon on the meal details page. These favorite meals are stored locally and can be accessed later for quick reference.

Favorites Screen:
The app provides a dedicated screen where users can view their favorite meals. This screen displays a list of all the meals they've marked as favorites.

Navigation:
React Navigation is used to enable smooth navigation between different screens of the app. This ensures a seamless user experience as they move between categories, meal lists, and meal details.

Technology Stack:

React Native: For building the mobile app using JavaScript/TypeScript.
Redux: For global state management, allowing efficient communication between different components.
Context API: For managing certain local states or UI-specific data that doesn't need to be stored globally.
React Navigation: For creating a structured and navigable user experience.
