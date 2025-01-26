import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  max-width: 1200px;
  gap: 2rem;
  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImagePart = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    max-height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const OverwiewContainer = styled.div`
  @media (max-width: 768px) {
    p {
      text-align: left;
    }
  }
`;

export const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  padding: 10px;
`;

export const OvierWiewFieldsContainer = styled.div``;
