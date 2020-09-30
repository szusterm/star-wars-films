import {DESKTOP_SIZE} from '../../constants';
import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 16px 16px;

  @media (min-width: ${DESKTOP_SIZE}) {
    padding: 96px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 790px;
  background: #e0e6ee;
  border-radius: 8px;
  padding: 35px 20px 20px;

  @media (min-width: ${DESKTOP_SIZE}) {
    padding: 32px;
  }
`;

export const LogoImage = styled.img`
  height: 45px;
  margin-bottom: 16px;

  @media (min-width: ${DESKTOP_SIZE}) {
    height: 64px;
  }
`;
