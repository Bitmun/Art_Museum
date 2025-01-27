import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { InfoCard } from 'components/InfoCard';
import { ArtWork } from 'types';

jest.mock('hooks/useArtWorkImgSrc', () => ({
  useArtworkImgSrc: jest.fn(() => ({ imgSrc: 'test-image.jpg' })),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('InfoCard', () => {
  const mockArtWork: ArtWork = {
    id: 1,
    title: 'Test Artwork',
    artist_title: 'Test Artist',
    is_public_domain: true,
    image_id: 0,
    date_display: '',
    place_of_origin: '',
    dimensions: '',
    credit_line: '',
  };

  it('renders InfoCard correctly without image', () => {
    const { getByText } = render(<InfoCard artWork={mockArtWork} />);

    expect(getByText('Test Artwork')).toBeInTheDocument();
    expect(getByText('Test Artist')).toBeInTheDocument();
    expect(getByText('Public')).toBeInTheDocument();
  });

  it('renders InfoCard correctly with image', () => {
    const { getByAltText, getByText } = render(
      <InfoCard artWork={mockArtWork} showImg={true} />,
    );

    expect(getByAltText('Test Artwork')).toBeInTheDocument();
    expect(getByText('Test Artist')).toBeInTheDocument();
    expect(getByText('Public')).toBeInTheDocument();
  });
});
