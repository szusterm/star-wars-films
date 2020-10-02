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
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 860px;
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

export const CopyrightInfo = styled.footer`
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 8px;
  color: #999999;

  @media (min-width: ${DESKTOP_SIZE}) {
    padding-top: 20px;
  }
`;
