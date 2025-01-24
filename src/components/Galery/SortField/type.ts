import { Dispatch, SetStateAction } from 'react';

import { SortFields } from 'constants/sorting';

export interface SortFieldProps {
  currentSort: SortFields;
  setCurrentSort: Dispatch<SetStateAction<SortFields>>;
}
