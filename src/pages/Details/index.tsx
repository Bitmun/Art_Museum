import { DetailsDisplay } from 'components/DetailsDisplay';
import { Loader } from 'components/Loader';
import { useArtworkById } from 'hooks/artWorkHooks';
import { useParams } from 'react-router-dom';
import { MainContainer } from 'styles';

export const Details = () => {
  const { id } = useParams();

  const { response, isLoading, error } = useArtworkById(Number(id));

  if (isLoading) {
    return (
      <MainContainer>
        <Loader />
      </MainContainer>
    );
  }

  if (!response) {
    throw new Error('Art not found');
  }

  if (error) {
    throw new Error('Details fetching error.');
  }

  const { data } = response;

  return (
    <MainContainer>
      <DetailsDisplay artWork={data} />
    </MainContainer>
  );
};
