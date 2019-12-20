import React, {useCallback, useState} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import { makeid } from "./index";
import {GET_TOKEN} from "../config";

const useSubmitFunc = () => {
  const [ encryptedId, setEncryptedId ] = useState(() => `${Math.round(Math.random() * 100000)}_react`);

  const submitFunc = useCallback((dataObject, url, actionPerform) => {
    const data = new FormData();
    data.append('encryptedId', encryptedId);

    const fetchData = async() => {
      try {
        const tokenResult = await axios({
          method: 'post',
          url: GET_TOKEN,
          data
        });

        document.cookie = `token=${tokenResult.data.data.token}`;
        data.append('token', tokenResult.data.data.token);

        let cryptPassword;

        if(dataObject.password) {
          const { password } = dataObject;
          const random = makeid(tokenResult.data.data.token.length);
          const key = CryptoJS.enc.Hex.parse(tokenResult.data.data.token);
          const iv = CryptoJS.enc.Hex.parse(random);
          cryptPassword = CryptoJS.AES.encrypt(password, key, { iv: iv });
          cryptPassword = cryptPassword.ciphertext.toString(CryptoJS.enc.Base64);

          data.append('password', cryptPassword);
          data.append('iv', iv);
          delete dataObject.password;
        }

        for(let key in dataObject) {
          data.append(key, dataObject[key]);
        }

        const result = await axios({
          method: 'post',
          url: url,
          headers: {
            'content-type': "application/json; charset=utf-8"
          },
          data
        });

        actionPerform(result);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
  });

  return submitFunc;
};

export default useSubmitFunc;