import {useEffect, useState} from 'react';

const RESIZE_EVENT_NAME = 'resize';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener(RESIZE_EVENT_NAME, handleResize);
    return () => window.removeEventListener(RESIZE_EVENT_NAME, handleResize);
  }, []);

  return windowWidth || 0;
};

export default useWindowWidth;
