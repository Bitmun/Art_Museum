import { SupportTextContainer } from './styled';
import { SupportTextProps } from './type';

export const SupportText = ({ mainText, subText }: SupportTextProps) => {
  return (
    <SupportTextContainer>
      <p>{subText}</p>
      <h2>{mainText}</h2>
    </SupportTextContainer>
  );
};
