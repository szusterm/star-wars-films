import AppLogoSrc from '../../assets/logo.svg';
import React from 'react';
import {
  ContentContainer,
  ContentSection,
  CopyrightInfo,
  RootContainer,
  LogoImage
} from './styled';

const AppContainer: React.FC & {Section: typeof ContentSection} = ({
  children
}) => {
  return (
    <RootContainer>
      <ContentContainer>
        <LogoImage src={AppLogoSrc} alt="Frontent - Recruitment Task" />
        {children}
        <CopyrightInfo>COPYRIGHT © 2019 MIRUMEE SOFTWARE</CopyrightInfo>
      </ContentContainer>
    </RootContainer>
  );
};

AppContainer.Section = ContentSection;

export default AppContainer;
