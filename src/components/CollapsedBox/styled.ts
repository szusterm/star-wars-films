import {DESKTOP_SIZE} from '../../constants';
import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 16px;
`;

export type BoxOpeningButtonProps = {
  isOpened?: boolean;
};
const SHADOW_WITH_CLOSED = '0 2px 1px rgba(196, 196, 196, 0.2)';
const SHADOW_WITH_OPENED = '0 4px 12px rgba(224, 230, 238, 0.5);';
export const BoxOpeningButton = styled.button<BoxOpeningButtonProps>`
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
  border: 0;
  background: white;
  border-radius: 4px;
  padding: 14px 10px;
  cursor: pointer;
  box-shadow: ${({isOpened}) =>
    isOpened ? SHADOW_WITH_OPENED : SHADOW_WITH_CLOSED};

  &:hover {
    filter: brightness(96%);
  }

  @media (min-width: ${DESKTOP_SIZE}px) {
    padding: 14px 15px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.33em;
  font-weight: 700;
  color: #00687f;
`;

export const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0 2px 1px rgba(196, 196, 196, 0.2);
  margin-top: -8px;
  padding: ${14 + 8}px 0 14px;

  @media (min-width: ${DESKTOP_SIZE}px) {
    padding: ${30 + 8}px 16px 30px;
  }
`;

export const ArrowImg = styled.img`
  height: 18px;
`;
