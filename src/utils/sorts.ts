import { SortFields } from 'constants/sorting';
import { ArtWork } from 'types';

export const artSort = (data: ArtWork[], sortField: SortFields) => {
  data.sort((a, b) => {
    const fieldA = a[sortField] ?? '';
    const fieldB = b[sortField] ?? '';

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return fieldA.localeCompare(fieldB);
    }
    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return fieldA - fieldB;
    }
    return 0;
  });
};
