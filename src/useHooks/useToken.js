import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { GET_TOKEN } from '../config';

const useToken = () => {
  const [ encryptedId, setEncryptedId ] = useState(() => `${Math.round(Math.random() * 100000)}_react`);

  const getToken = useCallback(setSalt => {
    const data = new FormData();
    data.append('encryptedId', encryptedId);

    const result = axios({
      method: 'post',
      url: GET_TOKEN,
      data
    });

    return result;
  }, []);

  return getToken;
};

export default useToken;
