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

export type CollapsedBoxProps = {
  title?: string | null;
  onOpen?: () => void;
};

const CollapsedBox: React.FC<CollapsedBoxProps> = ({
  title,
  onOpen,
  children
}) => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const toggleIsBoxOpened = () => setIsBoxOpened(wasBoxOpened => !wasBoxOpened);

  return (
    <Container>
      <BoxOpeningButton
        onClick={() => {
          toggleIsBoxOpened();
          !isBoxOpened && onOpen && onOpen();
        }}
        isOpened={isBoxOpened}
      >
        <Title>{title}</Title>
        <ArrowImg src={isBoxOpened ? ArrowCloseSrc : ArrowOpenSrc} alt="" />
      </BoxOpeningButton>
      {isBoxOpened && <HiddenContainer>{children}</HiddenContainer>}
    </Container>
  );
};

export default CollapsedBox;
