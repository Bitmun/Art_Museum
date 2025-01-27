import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ArtImg } from 'components/ArtImg';

jest.mock('@assets/images/notFoundImg.svg', () => 'delete-icon-mock');

describe('ArtImg', () => {
  it('renders default image when image is not loaded', () => {
    const { getByAltText } = render(
      <ArtImg title="Test Image" imgSrc="invalid-image.jpg" />,
    );

    const notFoundImage = getByAltText('Not found');

    expect(notFoundImage).toBeInTheDocument();
  });

  it('switches to loaded image when image is successfully loaded', () => {
    const { getByAltText } = render(
      <ArtImg title="Test Image" imgSrc="valid-image.jpg" />,
    );

    const imageElement = getByAltText('Test Image');

    fireEvent.load(imageElement);

    expect(imageElement).toHaveStyle({ display: 'block' });
  });
});
