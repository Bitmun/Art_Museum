import { DetailsDisplay } from 'components/DetailsDisplay';
import { useArtworkById } from 'hooks/artWorkHooks';
import { useParams } from 'react-router-dom';
import { MainContainer } from 'styles';

export const Details = () => {
  const { id } = useParams();

  const { response, isLoading, error } = useArtworkById(Number(id));

  if (isLoading) {
    return <MainContainer>Loading...</MainContainer>;
  }

  if (error) {
    return <MainContainer>Error: {error}</MainContainer>;
  }

  if (!response) {
    return <MainContainer>No response</MainContainer>;
  }

  const { data } = response;

  return (
    <MainContainer>
      <DetailsDisplay artWork={data} />
    </MainContainer>
  );
};
