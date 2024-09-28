
import { useState, useEffect } from 'react';

type DeviceSize = 'mobile' | 'tablet' | 'desktop';

const useDeviceSize = (): DeviceSize => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>('desktop'); // Default to 'desktop'

  useEffect(() => {
     if (typeof window === undefined) return;
     function getDeviceSize(): DeviceSize {
        const width = window.innerWidth;
      if (width >= 1200) {
        return 'desktop';
      } else if (width >= 768) {
        return 'tablet';
      } else {
        return 'mobile';
      }
    }

    const handleResize = () => {
      const newSize = getDeviceSize();
      setDeviceSize(newSize);
    };

    handleResize(); // Initialize the device size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceSize;
};

export default useDeviceSize;
