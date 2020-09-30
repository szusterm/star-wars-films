import ArrowCloseSrc from '../../assets/arrow-close.svg';
import ArrowOpenSrc from '../../assets/arrow-open.svg';
import React, {useState} from 'react';
import {
  BoxOpeningButton,
  HiddenContainer,
  Container,
  ArrowImg,
  Title
} from './styled';

type CollapsedBoxProps = {
  title?: string | null;
};

const CollapsedBox: React.FC<CollapsedBoxProps> = ({title, children}) => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const toggleIsBoxOpened = () => setIsBoxOpened(wasBoxOpened => !wasBoxOpened);

  return (
    <Container>
      <BoxOpeningButton onClick={toggleIsBoxOpened} isOpened={isBoxOpened}>
        <Title>{title}</Title>
        <ArrowImg src={isBoxOpened ? ArrowCloseSrc : ArrowOpenSrc} alt="" />
      </BoxOpeningButton>
      {isBoxOpened && <HiddenContainer>{children}</HiddenContainer>}
    </Container>
  );
};

export default CollapsedBox;
