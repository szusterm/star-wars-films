import {useWindowWidth} from '../../utils/hooks';
import React from 'react';
import {DESKTOP} from '../../constants';

export enum DeviceType {
  mobile = 'mobile',
  desktop = 'desktop'
}

export type HiddenProps = {
  on: keyof typeof DeviceType;
  children: React.ReactElement;
};

const Hidden = ({on: deviceType, children}: HiddenProps) => {
  const windowWidth = useWindowWidth();
  const isMobileSize = windowWidth <= DESKTOP;

  if (deviceType === DeviceType.mobile && isMobileSize) {
    return null;
  }
  if (deviceType === DeviceType.desktop && !isMobileSize) {
    return null;
  }

  return children;
};

export default Hidden;
