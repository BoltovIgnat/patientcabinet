import React, { useState, useEffect } from 'react';

import { getTransformSecondsToMinutes } from '../helpers';

const useTimer = (time, step, isBegin) => {
  const [ timer, setTimer ] = useState(time);

  useEffect(() => {
    let timerId;
    if(isBegin) {
      timerId = setTimeout(() => {
        setTimer(timer => {
          if(timer > 0) {
            return timer - 1;
          } else {
            clearTimeout(timerId);
            return 0;
          }
        });
      }, step);
    }

    return () => {
      clearTimeout(timerId);
    }
  });

  return [timer, setTimer];
};

export default useTimer;
