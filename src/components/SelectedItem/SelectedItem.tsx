import {ContainerButton, RemoveImg, Title} from './styled';
import CloseSrc from '../../assets/close.svg';
import React from 'react';

type SelectedItemProps = {
  children?: string | null;
  onRemoveRequest?: () => void;
};

const SelectedItem: React.FC<SelectedItemProps> = ({
  children,
  onRemoveRequest
}) => {
  return (
    <ContainerButton onClick={onRemoveRequest}>
      <Title>{children}</Title>
      <RemoveImg src={CloseSrc} alt="" />
    </ContainerButton>
  );
};

export default SelectedItem;
