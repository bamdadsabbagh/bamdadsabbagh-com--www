import {useEffect, useState} from 'react';

/**
 * Hook to check if we waited enough time to perform an action
 */
export function useWaited(delay = 0) {
  const [waited, setWaited] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWaited(true);
    }, delay);
  }, [delay]);

  return {
    waited,
  };
}
