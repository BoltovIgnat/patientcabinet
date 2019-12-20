import React, {useEffect, useMemo, useCallback, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import Divider from "@material-ui/core/Divider";

import List from '../MenuTemplate/List';
import {MAIN_PAGE_LINK, SIGN_IN_PAGE_LINK} from '../../../../config/pageLinks';
import { APP_PAGE_REGISTRATION } from '../../../../config/roles/roles';
import { SIGN_OUT, NODE_ENV } from '../../../../config';
import useStyles from './style';

import logo from '../../../../assets/images/logo.png';

const HeaderTemplate = props => {
  const classes = useStyles();
  const { isAuth, role, userIsAuth, userRole } = props;
  const { openSnackbar, snackbarsOpen } = props;

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const [ isDisabled, setIsDisabled ] = useState(false);
  const signOut = useCallback(() => {
    setIsDisabled(isDisabled => true);

    const fetchData = async() => {
      try {
        const newData = new FormData();

        newData.append('token', cookies.token);
        const result = await axios({
          method: 'post',
          url: SIGN_OUT,
          data: newData
        });

        await new Promise((resolve, reject) => {
          setIsDisabled(isDisabled => false);
          resolve();
        });

        console.log(result, 'headerTemplate signOuth');

        const {
          data: {
            data: {
              roles,
              success,
              error,
              userId
            },
            status
          }
        } = result;

        console.log(result, 'result header template');

        if(status === 200) {
          if(error) {
            NODE_ENV === 'development' ? removeCookie('token') : false;
            NODE_ENV === 'development' ? userIsAuth(false) : userIsAuth(true);
            NODE_ENV === 'development' ? userRole(null) : false;
          } else if(success) {
            // cookies.remove('token');
            removeCookie('token');
            userIsAuth(false);
            userRole(null);
            snackbarsOpen({ variant: 'success', message: success.successText });
          }
        } else {
          //
        }
      } catch (e) {
        setIsDisabled(isDisabled => false);
        console.error(e.message, 'fetchData headerTemplate')
      }
    };

    fetchData();
  }, [isAuth, role]);

  return (
    <div className={classes.root} id="template__header">
      <div className={classes.container}>
        <header>
          <Link className={classes.logo} to={MAIN_PAGE_LINK}>
            {/*<img src={logo} alt=""/>*/}
          </Link>
          {
            isAuth ? (
              <Link className={classes.userLogin} onClick={() => !isDisabled ? signOut() : false} to={MAIN_PAGE_LINK}>Выйти</Link>
            ) : (
              <Link className={classes.userLogin} to={SIGN_IN_PAGE_LINK}>Вход</Link>
            )
          }
        </header>
      </div>
    </div>
  )
};

export default HeaderTemplate;
