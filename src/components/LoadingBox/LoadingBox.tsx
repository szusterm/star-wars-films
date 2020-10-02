import LoaderSrc from '../../assets/loader.svg';
import {Container, LoaderImg} from './styled';
import React from 'react';

export type LoadingBoxProps = {
  bigger?: boolean;
};

const LoadingBox: React.FC<LoadingBoxProps> = ({bigger}) => {
  return (
    <Container bigger={bigger}>
      <LoaderImg src={LoaderSrc} bigger={bigger} />
    </Container>
  );
};

export default LoadingBox;
