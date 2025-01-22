import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 65%;
  gap: 5%;
`;

export const ImagePart = styled.div`
  position: relative;
`;

export const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 0;
  }
`;

export const FavoriteBUttonWrapper = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  padding: 10px;
`;

export const OvierWiewFieldsContainer = styled.div``;
