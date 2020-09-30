import {
  ContentContainer,
  CopyrightInfo,
  LogoImage,
  RootContainer
} from './styled';
import AppLogoSrc from '../../assets/logo.svg';
import React from 'react';

const AppContainer: React.FC = ({children}) => {
  return (
    <RootContainer>
      <ContentContainer>
        <LogoImage src={AppLogoSrc} alt="Application Logo" />
        {children}
        <CopyrightInfo>COPYRIGHT © 2019 MIRUMEE SOFTWARE</CopyrightInfo>
      </ContentContainer>
    </RootContainer>
  );
};

export default AppContainer;
