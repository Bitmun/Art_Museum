import { OverWiewFieldsProps } from './type';

import { OVERWEIW_FIELDS } from 'constants/details';

export const OverwiewFieldsList = ({ artWork }: OverWiewFieldsProps) => {
  return (
    <div>
      {OVERWEIW_FIELDS.map((field) => {
        const { key, keyToDisplay, formatter } = field;

        const fieldValue = formatter
          ? formatter(artWork[key] as string)
          : (artWork[key] as string);

        return (
          <p key={keyToDisplay}>
            <span style={{ color: '#E0A449' }}>{keyToDisplay}:</span> {fieldValue}
          </p>
        );
      })}
    </div>
  );
};
