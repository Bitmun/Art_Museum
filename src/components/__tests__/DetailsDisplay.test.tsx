import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { DetailsDisplay } from 'components/DetailsDisplay';
import { ArtWork } from 'types';

jest.mock('assets/images/notFoundImg.svg', () => 'delete-icon-mock');

describe('DetailsDisplay', () => {
  const mockArtWork: ArtWork = {
    id: 1,
    title: 'Artwork Title',
    artist_title: 'Artist Name',
    image_id: 0,
    is_public_domain: true,
    date_display: '',
    place_of_origin: '',
    dimensions: '',
    credit_line: '',
  };

  test('renders details display correctly', () => {
    const { getByText, getByAltText } = render(<DetailsDisplay artWork={mockArtWork} />);

    expect(getByText('Artwork Title')).toBeInTheDocument();
    expect(getByText('Artist Name')).toBeInTheDocument();
    expect(getByAltText('Artwork Title')).toBeInTheDocument();
    expect(getByText('Public')).toBeInTheDocument();
  });

  test('displays private if artwork is not public domain', () => {
    const updatedArtWork = { ...mockArtWork, is_public_domain: false };
    const { getByText } = render(<DetailsDisplay artWork={updatedArtWork} />);

    expect(getByText('Private')).toBeInTheDocument();
  });
});
