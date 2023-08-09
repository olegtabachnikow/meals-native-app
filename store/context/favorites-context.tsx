import { ReactNode, createContext, useState } from 'react';

interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

function FavoritesContextProvider({ children }: { children: ReactNode }) {
  const [favoriteMealsIds, setFavoriteMealIds] = useState<string[]>([]);
  function addFavorite(id: string) {
    setFavoriteMealIds((state) => [...state, id]);
  }
  function removeFavorite(id: string) {
    setFavoriteMealIds((state) => state.filter((mealId) => mealId !== id));
  }
  const value = {
    ids: favoriteMealsIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
