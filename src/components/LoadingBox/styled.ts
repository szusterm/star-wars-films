import styled from 'styled-components';

export type ContainerProps = {
  bigger?: boolean;
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({bigger}) => (bigger ? '350px' : '160px')};
`;

export type LoaderImgProps = {
  bigger?: boolean;
};
export const LoaderImg = styled.img<LoaderImgProps>`
  width: ${({bigger}) => (bigger ? '50px' : '24px')};
`;
