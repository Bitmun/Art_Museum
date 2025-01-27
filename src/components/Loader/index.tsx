import { LoaderIcon, LoaderWrapper } from './styles';

import loadingIcon from 'assets/images/loading-icon.svg';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderIcon src={loadingIcon} alt="loader-icon"></LoaderIcon>
    </LoaderWrapper>
  );
};
