import { useState, useEffect } from 'react';

export function useSmpteTimecode() {
  const [timecode, setTimecode] = useState('TC 01:24:18:04');

  useEffect(() => {
    let h = 1;
    let m = 24;
    let s = 18;
    let f = 4;

    const interval = setInterval(() => {
      f++;
      if (f >= 24) {
        f = 0;
        s++;
        if (s >= 60) {
          s = 0;
          m++;
          if (m >= 60) {
            m = 0;
            h++;
          }
        }
      }
      const hh = String(h).padStart(2, '0');
      const mm = String(m).padStart(2, '0');
      const ss = String(s).padStart(2, '0');
      const ff = String(f).padStart(2, '0');
      setTimecode(`TC ${hh}:${mm}:${ss}:${ff}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  return timecode;
}
