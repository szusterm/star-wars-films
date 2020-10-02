import styled from 'styled-components';

export type ContainerButtonProps = {
  flexStart?: boolean;
};
export const ContainerButton = styled.button<ContainerButtonProps>`
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: ${({flexStart}) => (flexStart ? 'flex-start' : 'flex-end')};
  align-items: center;
  width: 100%;
  padding: 6px 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    color: #00687f;
  }
`;

export type TitleProps = {
  marked?: boolean;
};
export const Title = styled.span<TitleProps>`
  max-width: 90%;
  text-wrap: normal;
  text-align: right;
  color: ${({marked}) => (marked ? '#00687F' : 'unset')};
`;

export type DirectionsContainerProps = {
  withoutMargin?: boolean;
};
export const DirectionsContainer = styled.div<DirectionsContainerProps>`
  display: flex;
  flex-direction: column;
  width: 6px;
  margin-left: 8px;
  margin-right: ${({withoutMargin}) => (withoutMargin ? '0' : '-14px')};
`;

export type DirectionImgProps = {
  reversed?: boolean;
};
export const DirectionImg = styled.img<DirectionImgProps>`
  width: 6px;
  transform: scaleY(${({reversed}) => (reversed ? -1 : 1)});
  margin-top: ${({reversed}) => (reversed ? '0' : '1px')};
`;
