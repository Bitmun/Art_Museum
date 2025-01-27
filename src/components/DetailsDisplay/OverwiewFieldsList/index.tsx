import { OverwiewFieldContainer, OverwiewFieldsListContainer } from './styled';
import { OverWiewFieldsProps } from './type';

import { OVERWEIW_FIELDS } from 'constants/details';

export const OverwiewFieldsList = ({ artWork }: OverWiewFieldsProps) => {
  return (
    <OverwiewFieldsListContainer>
      {OVERWEIW_FIELDS.map((field) => {
        const { key, keyToDisplay, formatter } = field;
        const fieldValue = formatter
          ? formatter(artWork[key] as string)
          : (artWork[key] as string);

        return (
          <OverwiewFieldContainer key={keyToDisplay}>
            <span style={{ color: 'var(--subTextSecondary-color)' }}>
              {keyToDisplay}:
            </span>
            {fieldValue || 'Unknown'}
          </OverwiewFieldContainer>
        );
      })}
    </OverwiewFieldsListContainer>
  );
};
