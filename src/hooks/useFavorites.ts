import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favorites';

export const useFavorites = () => {
  const [favoritesVersion, setFavoritesVersion] = useState(0);

  const localItem = localStorage.getItem(FAVORITES_KEY) || '[]';

  const storedFavorites: number[] = JSON.parse(localItem);

  const addFavorite = (id: number) => {
    const updatedFavorites = [...storedFavorites, id];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    triggerChange();
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = storedFavorites.filter((favId) => favId !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    triggerChange();
  };

  const isFavorite = (id: number): boolean => {
    return storedFavorites.includes(id);
  };

  const triggerChange = () => {
    setFavoritesVersion((prevVersion) => prevVersion + 1);
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setFavoritesVersion((prevVersion) => prevVersion + 1);
    };

    window.addEventListener('favoritesUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('favoritesUpdated', handleStorageChange);
    };
  }, []);

  return {
    storedFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    favoritesVersion,
  };
};
