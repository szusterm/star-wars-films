import {ContentContainer, LogoImage, RootContainer} from './styled';
import AppLogoSrc from '../../assets/logo.svg';
import React from 'react';

type AppContainerProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppContainer: React.FC<AppContainerProps> = ({children}) => {
  return (
    <RootContainer>
      <ContentContainer>
        <LogoImage src={AppLogoSrc} alt="Application Logo" />
        {children}
      </ContentContainer>
    </RootContainer>
  );
};

export default AppContainer;
