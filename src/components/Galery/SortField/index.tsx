import { SortFieldContainer } from './styled';
import { SortFieldProps } from './type';

import { SortFields, sortFields } from 'constants/sorting';

export const SortField = ({ currentSort, setCurrentSort }: SortFieldProps) => {
  return (
    <SortFieldContainer>
      <p>Sort by:</p>
      <select
        value={currentSort}
        onChange={(e) => setCurrentSort(e.target.value as SortFields)}
      >
        {sortFields.map((field) => {
          const { label, value } = field;
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </SortFieldContainer>
  );
};
