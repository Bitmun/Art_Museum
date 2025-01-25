import { ErrorDisplayWrapper } from './styled';
import { ErrorDisplayProps } from './type';

export const ErrorDisplay = ({ errorText }: ErrorDisplayProps) => {
  return <ErrorDisplayWrapper>{errorText.toString()}</ErrorDisplayWrapper>;
};
