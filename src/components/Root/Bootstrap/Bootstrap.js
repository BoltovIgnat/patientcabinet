import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import { CHECK_AUTH, NODE_ENV } from '../../../config';
import {
  PERSONAL_ACCOUNT_PAGE_LINK,
  SIGN_IN_PAGE_LINK,
  MAIN_PAGE_LINK,
  DESKTOP_PAGE_LINK
} from '../../../config/pageLinks';

const Bootstrap = props => {
  // checkout on identification user
  const {
    // cookies,
    history,
    isAuth,
    userIsAuth,
    userRole,
    role,
    token,
    saveToken
  } = props;
  const { openSnackbar, snackbarsOpen } = props;
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    const token = cookies.token || false;
    const newData = new FormData();
    newData.append('token', token);

    if (token) {
      const fetchdata = async() => {
        try {
          const result = await axios({
            method: 'POST',
            url: CHECK_AUTH,
            data: newData
          });

          console.log(result, 'bootstrap checkAuth');

          const {
            data: {
              data: {
                token,
                userId,
                success,
                error,
                roles
              },
              status
            },
          } = result;

          console.log(result, 'bootstrap checkAuth');

          if(status === 200) {
            if(error) {
              userRole(null);
              userIsAuth(false);
              snackbarsOpen({
                message: error.errorText,
                variant: 'error'
              });
  
              NODE_ENV === 'development' ? false : history.push(MAIN_PAGE_LINK);
              // history.push(MAIN_PAGE_LINK);
            } else if(success) {
              if(userId !== 0) {
                userIsAuth(true);
                userRole(roles);
                history.push(DESKTOP_PAGE_LINK);
                snackbarsOpen({
                  message: success.successText,
                  variant: 'success'
                });
              } else {
                userIsAuth(false);
                userRole(null);
                NODE_ENV === 'development' ? false : history.push(MAIN_PAGE_LINK);
                // history.push(MAIN_PAGE_LINK);
                snackbarsOpen({
                  message: error.errorText,
                  variant: 'error'
                });
              }
            }
          }
        } catch (e) {
          console.error(e.message, 'fetchData bootstrap');
        }
      };

      fetchdata();
    } else {
      // history.push(MAIN_PAGE_LINK);
    }
  }, []);

  return props.children;
};

export default Bootstrap;
