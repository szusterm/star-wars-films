import {useWindowWidth} from '../../utils/hooks';
import {DESKTOP_SIZE} from '../../constants';
import React from 'react';

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
  const isMobileSize = windowWidth <= DESKTOP_SIZE;

  if (deviceType === DeviceType.mobile && isMobileSize) {
    return null;
  }
  if (deviceType === DeviceType.desktop && !isMobileSize) {
    return null;
  }

  return children;
};

export default Hidden;
