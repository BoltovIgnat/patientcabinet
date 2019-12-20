import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
// const CryptoJS = require("crypto-js");
import CryptoJS from 'crypto-js';
//Material-ui
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';


import { TabTemplate, MaskTemplate } from '../../Templates/MedMap';

import {
  useForRequest,
  useChangeForRequest,
  useToken,
} from '../../../useHooks';
import { useStyles, style } from './style';
import { GET_AUTH, NODE_ENV } from '../../../config';
import {CREATE_ACCOUNT_LINK, PASSWORD_RECOVERY, PERSONAL_ACCOUNT_PAGE_LINK, DESKTOP_PAGE_LINK} from '../../../config/pageLinks';
import { makeid } from '../../../helpers';

const SignInPage = props => {
  const { history, customClasses, userRole, userIsAuth, token, saveToken } = props;
  const [cookies, setCookie] = useCookies();
  const { openSnackbar, snackbarsOpen } = props;
  const [ value, setValue ] = useState(0);

  const classes = useStyles();

  const [ forRequest, setForRequest ] = useForRequest({
    login: NODE_ENV === 'development' ? 'i.gadzhiev@aoamt.ru' : null,
    password: NODE_ENV === 'development' ? 'Istra767!8190' : null,
  });

  const changeForRequest = useChangeForRequest(forRequest, setForRequest);

  const [ isDisabled, setIsDisabled ] = useState(false);
  const getToken = useToken();
  const handleSubmit = useCallback(event => {
    event.preventDefault();
    setIsDisabled(isDisabled => true);
    const { password } = forRequest;

    const data = new FormData();
    const fetchData = async () => {
      try {
        const tokenResult = await getToken();
        console.log(tokenResult, 'signin tokenResult');
        setCookie('token', tokenResult.data.data.token);

        const random = makeid(tokenResult.data.data.token.length);
        const key = CryptoJS.enc.Hex.parse(tokenResult.data.data.token);
        const iv = CryptoJS.enc.Hex.parse(random);
        let cryptPassword = CryptoJS.AES.encrypt(password, key, { iv: iv });
        cryptPassword = cryptPassword.ciphertext.toString(CryptoJS.enc.Base64);

        // console.log(tokenResult.data.data.token, 'token');
        // console.log(random, 'random');
        // console.log(cryptPassword, 'cryptPassword');

        // delete forRequest.password;

        data.append('login', forRequest.login);
        data.append('password', cryptPassword);
        data.append('token', tokenResult.data.data.token);
        data.append('iv', iv);

        const result = await axios({
          method: 'post',
          url: GET_AUTH,
          headers: {
            'content-type': "application/json; charset=utf-8"
          },
          data
        });

        await new Promise((resolve, reject) => {
          setIsDisabled(isDisabled => false);
          resolve()
        });

        const {
          data: {
            data: {
              error,
              success,
              userId,
              roles
            }
          },
          status
        } = result;

        if(status === 200) {
          // setIsDisabled(isDisabled => false);
          if(error) {
            userRole(null);
            userIsAuth(false);
            if(Array.isArray(error.errorText)) {
              for(let elem of error.errorText) {
                const { message, name } = elem;
                snackbarsOpen({ variant: 'error', message });
              }
            } else {
              snackbarsOpen({
                message: error.errorText,
                variant: 'error'
              });
            }
          } else if(success) {
            userIsAuth(true);
            userRole(roles);
            history.push(DESKTOP_PAGE_LINK);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
          }
        } else {
          // setIsDisabled(isDisabled => false);
          //
        }
      } catch (e) {
        setIsDisabled(isDisabled => false);
        console.error(e.message, 'fetchData ')
      }
    };

    fetchData();
  }, [forRequest]);

  const tabOne = (
    <form
      onSubmit={handleSubmit}
    >
      <div className={customClasses.userDataBox}>
        <FormControl fullWidth margin="normal">
          <div className={customClasses.userDataBoxInput}>
            <TextField
              required
              type="text"
              className={classes.textField}
              onChange={changeForRequest}
              name="login"
              value={forRequest.login === null ? '' : forRequest.login}
              label="Логин"
              variant="outlined"
              fullWidth
              helperText="Введите номер моб. телефона или email"
            />
          </div>
        </FormControl>
        <div className={customClasses.userDataBoxInput}>
          <FormControl fullWidth margin="normal">
            <TextField
              required
              type="password"
              className={classes.textField}
              onChange={changeForRequest}
              name="password"
              value={forRequest.password === null ? '' : forRequest.password}
              label="Пароль"
              variant="outlined"
              fullWidth
            />
          </FormControl>
        </div>
        <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
          <Button disabled={isDisabled} type="submit">Войти</Button>
        </div>
        <div className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>
          <Button><Link className={classes.linkBtn} to={CREATE_ACCOUNT_LINK}>Зарегистрироваться</Link></Button>
        </div>
        <Typography align="center"><Link to={PASSWORD_RECOVERY}>Забыли пароль?</Link></Typography>
      </div>
    </form>
  );

  const [ forRequestSnils, setForRequestSnils ] = useForRequest({
    login: NODE_ENV === 'development' ? '33361404743' : null,
    password: NODE_ENV === 'development' ? 'HelloMotoPassword' : null,
  });

  const [ isDisabledSnils, setIsDisabledSnils ] = useState(false)
  const changeForRequestSnils = useChangeForRequest(forRequestSnils, setForRequestSnils);
  const handleSubmitSnils = useCallback(event => {
    event.preventDefault();
    setIsDisabledSnils(isDisabledSnils => true);
    const { password } = forRequestSnils;

    const data = new FormData();
    const fetchData = async () => {
      try {
        const tokenResult = await getToken();
        console.log(tokenResult, 'signin snils tokenResult');
        setCookie('token', tokenResult.data.data.token);

        const random = makeid(tokenResult.data.data.token.length);
        const key = CryptoJS.enc.Hex.parse(tokenResult.data.data.token);
        const iv = CryptoJS.enc.Hex.parse(random);
        let cryptPassword = CryptoJS.AES.encrypt(password, key, { iv: iv });
        cryptPassword = cryptPassword.ciphertext.toString(CryptoJS.enc.Base64);

        // console.log(tokenResult.data.data.token, 'token');
        // console.log(random, 'random');
        // console.log(cryptPassword, 'cryptPassword');

        // delete forRequest.password;

        data.append('login', forRequestSnils.login);
        data.append('isSnils', true);
        data.append('password', cryptPassword);
        data.append('token', tokenResult.data.data.token);
        data.append('iv', iv);

        const result = await axios({
          method: 'post',
          url: GET_AUTH,
          headers: {
            'content-type': "application/json; charset=utf-8"
          },
          data
        });

        await new Promise((resolve, reject) => {
          setIsDisabledSnils(isDisabledSnils => false);
          resolve()
        });

        const {
          data: {
            data: {
              error,
              success,
              userId,
              roles
            }
          },
          status
        } = result;

        if(status === 200) {
          if(error) {
            userRole(null);
            userIsAuth(false);
            if(Array.isArray(error.errorText)) {
              for(let elem of error.errorText) {
                const { message, name } = elem;
                snackbarsOpen({ variant: 'error', message });
              }
            } else {
              snackbarsOpen({
                message: error.errorText,
                variant: 'error'
              });
            }
          } else if(success) {
            userIsAuth(true);
            userRole(roles);
            history.push(DESKTOP_PAGE_LINK);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
          }
        } else {
          //
        }
      } catch (e) {
        setIsDisabledSnils(isDisabledSnils => false);
        console.error(e.message, 'fetchData ')
      }
    };

    fetchData();
  }, [forRequestSnils]);

  const tabTwo = (
    <form
      onSubmit={handleSubmitSnils}
    >
      <div className={customClasses.userDataBox}>
        <div className={customClasses.userDataBoxInput}>
          <FormControl fullWidth margin="normal">
            <TextField
              required
              type="text"
              className={classes.textField}
              onChange={changeForRequestSnils}
              name="login"
              value={forRequestSnils.login === null ? '' : forRequestSnils.login}
              label="СНИЛС"
              variant="outlined"
              fullWidth
              helperText="Введите СНИЛС"
              inputProps={{
                mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/ ]
              }}
              InputProps={{
                inputComponent: MaskTemplate,
              }}
            />
          </FormControl>
        </div>
        <div className={customClasses.userDataBoxInput}>
          <FormControl fullWidth margin="normal">
            <TextField
              required
              type="password"
              className={classes.textField}
              onChange={changeForRequestSnils}
              name="password"
              value={forRequestSnils.password === null ? '' : forRequestSnils.password}
              label="Пароль"
              variant="outlined"
              fullWidth
            />
          </FormControl>
        </div>
        <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
          <Button disabled={isDisabledSnils} type="submit">Войти</Button>
        </div>
        <div className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>
          <Button><Link className={classes.linkBtn} to={CREATE_ACCOUNT_LINK}>Зарегистрироваться</Link></Button>
        </div>
        <Typography align="center"><Link to={PASSWORD_RECOVERY}>Забыли пароль?</Link></Typography>
      </div>
    </form>
  );

  return (
    <main className={customClasses.main}>
      <TabTemplate
        value={value}
        setValue={setValue}
        style={style}
        titleArr={[
          { id: 0, tabLabel: 'Телефон, Почта' },
          { id: 1, tabLabel: 'СНИЛС' }
        ]}
        contentArr={[
          { id: 0, tabContent: tabOne },
          { id: 1, tabContent: tabTwo }
        ]}
      />
    </main>
  )
};

export default SignInPage;