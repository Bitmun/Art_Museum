import { FavoritesDisplay } from 'components/FavoritesDisplay';
import { Loader } from 'components/Loader';
import { ArtWorksProvider } from 'contexts/favoritesContext';
import { useArtworksById } from 'hooks/artWorkHooks';
import { useGetFavorites } from 'hooks/useFavorites';
import { MainContainer } from 'styles';

export const Favorites = () => {
  const { storedFavorites } = useGetFavorites();

  const { response, isLoading, error } = useArtworksById(storedFavorites);

  if (isLoading) {
    return (
      <MainContainer>
        <Loader />
      </MainContainer>
    );
  }

  if (!response) {
    throw new Error('No response');
  }

  if (error) {
    throw new Error('Favorites fetching error');
  }

  const { data } = response;

  return (
    <ArtWorksProvider artWorksProp={data}>
      <MainContainer>
        <FavoritesDisplay />
      </MainContainer>
    </ArtWorksProvider>
  );
};
