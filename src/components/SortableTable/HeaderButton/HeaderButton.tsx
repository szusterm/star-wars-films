import ActiveArrowSrc from '../../../assets/direction-arrow-active.svg';
import ArrowSrc from '../../../assets/direction-arrow.svg';
import React from 'react';
import {
  DirectionsContainer,
  ContainerButton,
  DirectionImg,
  Title
} from './styled';

export type HeaderButtonProps = {
  title: string;
  isSorted?: boolean;
  isAscending?: boolean;
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  title,
  isSorted,
  isAscending,
  onClick,
  isFirst,
  isLast
}) => {
  return (
    <ContainerButton onClick={onClick} flexStart={isFirst}>
      <Title marked={isFirst}>{title}</Title>
      <DirectionsContainer withoutMargin={isLast}>
        <DirectionImg
          src={isSorted && isAscending ? ActiveArrowSrc : ArrowSrc}
          reversed
          alt=""
        />
        <DirectionImg
          src={isSorted && !isAscending ? ActiveArrowSrc : ArrowSrc}
          alt=""
        />
      </DirectionsContainer>
    </ContainerButton>
  );
};

export default HeaderButton;
