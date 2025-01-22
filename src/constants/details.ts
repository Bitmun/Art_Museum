import { ArtWork } from 'types';
import { getSheetValue } from 'utils/formatters';

type OverWiewField = {
  key: keyof ArtWork;
  keyToDisplay: string;
  formatter?: (input: string) => string;
};

export const OVERWEIW_FIELDS: OverWiewField[] = [
  {
    key: 'place_of_origin',
    keyToDisplay: 'Artist nationality',
  },
  {
    key: 'dimensions',
    keyToDisplay: 'Dimensions: Sheet',
    formatter: getSheetValue,
  },
  {
    key: 'credit_line',
    keyToDisplay: 'Credit line',
  },
  {
    key: 'place_of_origin',
    keyToDisplay: 'Repository',
  },
];
