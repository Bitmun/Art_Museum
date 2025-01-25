import { FavoritesDisplay } from 'components/FavoritesDisplay';
import { Loader } from 'components/Loader';
import { ArtWorksProvider } from 'contexts/favoritesContext';
import { useArtworksById } from 'hooks/artWorkHooks';
import { useGetFavorites } from 'hooks/useFavorites';
import { MainContainer } from 'styles';

export const Favorites = () => {
  const { storedFavorites } = useGetFavorites();

  const { response, isLoading } = useArtworksById(storedFavorites);

  if (isLoading) {
    return (
      <MainContainer>
        <Loader />
      </MainContainer>
    );
  }

  if (!response) {
    return <div>No response</div>;
  }

  const { data } = response;

  return (
    <ArtWorksProvider artWorksProp={data}>
      <MainContainer>
        <FavoritesDisplay favorites={data} />
      </MainContainer>
    </ArtWorksProvider>
  );
};
