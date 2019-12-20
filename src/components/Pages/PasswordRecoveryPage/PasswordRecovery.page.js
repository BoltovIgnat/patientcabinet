import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

//Material-ui
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import useStyles from './style';
import {NODE_ENV, RESTORY_PASSWORD, CONFIRM_RESTORE_PASSWORD, SEND_SMS_CODE} from '../../../config';
import {useChangeForRequest, useForRequest, useToken, useTimer} from "../../../useHooks";
import {CREATE_ACCOUNT_LINK, PERSONAL_ACCOUNT_PAGE_LINK, SIGN_IN_PAGE_LINK} from "../../../config/pageLinks";
import {getTransformSecondsToMinutes} from "../../../helpers";
import { MaskTemplate } from '../../Templates/MedMap';
import FormControl from "@material-ui/core/FormControl";

const PasswordRecoveryPage = props => {
  const {
    // cookies,
    history,
    customClasses,
    userRole,
    userIsAuth,
    token,
    saveToken
  } = props;
  const { openSnackbar, snackbarsOpen } = props;

  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies();

  const getToken = useToken();

  const [ forRequest, setForRequest ] = useForRequest({
    phone: NODE_ENV === 'development' ? ' 9779496035' : null,
    // email: NODE_ENV === 'development' ? 'sdamegeoge@gmail.com' : null
  });

  const changeForRequest = useChangeForRequest(forRequest, setForRequest);

  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ turnConfirmWindow, setTurnConfirmWindow ] = useState(false);
  const handleSubmit = useCallback(() => {
    setIsDisabled(isDisabled => true);
    const data = new FormData();

    const fetchdata = async() => {
      try {
        const tokenResult = await getToken();

        console.log(tokenResult, 'password recovery, tokenResult');

        // I think set cookie is not necessarily
        setCookie('token', tokenResult.data.data.token);
        data.append('token', tokenResult.data.data.token);
        data.append('phone', forRequest.phone);

        const result = await axios({
          method: 'post',
          url: RESTORY_PASSWORD,
          headers: {
            'content-type': "application/json; charset=utf-8"
          },
          data
        });

        await new Promise((resolve, reject) => {
          setIsDisabled(isDisabled => false);
          resolve();
        });

        console.log(result, 'password recovery restoryPassword');

        const {
          data: {
            data: {
              error,
              success
            },
            is_check_in
          },
          status
        } = result;

        if(status === 200) {
          if(error) {
            NODE_ENV === 'development' ? setTurnConfirmWindow(true) : setTurnConfirmWindow(false) ;
            userRole(null);
            userIsAuth(false);
            snackbarsOpen({
              message: error.errorText,
              variant: 'error'
            });
          } else if(success) {
            setTurnConfirmWindow(true);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
          }

          if(is_check_in) {
            history.push(CREATE_ACCOUNT_LINK);
          } else {
            // NODE_ENV === 'development' ? history.push(CREATE_ACCOUNT_LINK) : false;
          }
        }
      } catch (e) {
        setIsDisabled(isDisabled => false);
        console.error(e.message, 'fetchData restoryPassword');
      }
    };

    fetchdata();
  }, [forRequest]);

  const [ isDisabledConfirm, setIsDisabledConfirm ] = useState(false);
  const [ timer, setTimer ] = useTimer(NODE_ENV === 'development' ? 20 : 300, 1000, turnConfirmWindow);
  const [ code, setCode ] = useState(NODE_ENV === 'development' ? 2222 : null);
  const confirmPatient = useCallback(() => {
    setIsDisabledConfirm(isDisabledConfirm => true);
    const data = new FormData();
    data.append('code', code);
    data.append('token', cookies.token);

    const fetchData = async() => {
      try {
        const result = await axios({
          method: 'post',
          url: CONFIRM_RESTORE_PASSWORD,
          data
        });

        await new Promise((resolve, reject) => {
          setIsDisabledConfirm(isDisabledConfirm => false);
          resolve();
        });

        const {
          data: {
            data: {
              roles,
              success,
              error,
              userId
            },
            status
          },
        } = result;

        console.log(result, 'password recovery confirmAddPatient');

        if(status === 200) {
          if(error) {
            // userIsAuth(false);
            // userRole(null);
            snackbarsOpen({
              message: error.errorText,
              variant: 'error'
            });

            NODE_ENV === 'development' ? history.push(PERSONAL_ACCOUNT_PAGE_LINK) : false;
            // setTimer(10);
          } else if(success) {
            // userIsAuth(true);
            // userRole(roles);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
            history.push(SIGN_IN_PAGE_LINK);
          }
        } else {
          //
        }
      } catch (e) {
        setIsDisabledConfirm(isDisabledConfirm => false);
        console.error(e.message);
      }
    };

    fetchData();
  }, [forRequest, code]);

  const sendSmsCode = useCallback(() => {
    const data = new FormData();
    data.append('token', cookies.token);

    const fetchData = async() => {
      try {
        const result = await axios({
          method: 'post',
          url: SEND_SMS_CODE,
          data
        });

        const {
          data: {
            data: {
              roles,
              success,
              error,
              userId
            },
            status
          },
        } = result;

        console.log(result, 'password recovery confirmAddPatient');

        if(status === 200) {
          if(error) {
            // userIsAuth(false);
            // userRole(null);
            snackbarsOpen({
              message: error.errorText,
              variant: 'error'
            });

          } else if(success) {
            // userIsAuth(true);
            // userRole(roles);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
            setTimer(300);
          }
        } else {
          //
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
  }, [code, forRequest]);
  
  return (
    <main className={customClasses.main}>
      {
        !turnConfirmWindow ? (
          <form
            onSubmit={event => {
              handleSubmit();
              event.preventDefault();
            }}
          >
            <div className={customClasses.userDataBox}>
              <div className={customClasses.userDataBoxHeader}>
                <Typography>Восстановление пароля</Typography>
              </div>
              <div className={customClasses.userDataBoxInput}>
                <FormControl fullWidth margin="normal">
                  <TextField
                    onChange={changeForRequest}
                    name="phone"
                    value={forRequest.phone === null ? '' : forRequest.phone}
                    required
                    type="text"
                    id="formatted-text-mask-input"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    helperText="Введите номер моб. телефона"
                    inputProps={{
                      mask: ['+', '7', ' ',  '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                    }}
                    InputProps={{
                      inputComponent: MaskTemplate,
                    }}
                  />
                </FormControl>

                {/*при ошибке: Введенное значение не является номером телефона  или адресом электронной почты*/}
              </div>
              <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
                <Button disabled={isDisabled} type="submit">Отправить</Button>
              </div>
              <div className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>
                <Button onClick={() => {
                  setForRequest(forRequest => ({
                    phone: NODE_ENV === 'development' ? '79779496036' : null,
                    // email: NODE_ENV === 'development' ? 'sdamegeoge@gmail.com' : null
                  }))
                }}>Отмена</Button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={event => {
            confirmPatient();
            event.preventDefault();
          }}>
            <div className={customClasses.userDataBox}>
              <div className={customClasses.userDataBoxHeader}>
                <Typography>Восстановление пароля</Typography>
              </div>
              <div className={customClasses.helperTextTop}>
                <Typography>
                  Код подтверждения отправлен в СМС  на {forRequest.phone}
                </Typography>
                <Typography>
                  Введите код в течение 300 секунд
                </Typography>
              </div>
              <div className={customClasses.userDataBoxInput}>
                <TextField
                  required
                  type="text"
                  onChange={event => {
                    setCode(event.target.value);
                  }}
                  value={code === null ? '' : code}
                  name="code"
                  label="Код из SMS"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    mask: [/\d/, '-',  /\d/, '-', /\d/, '-', /\d/]
                  }}
                  InputProps={{
                    inputComponent: MaskTemplate,
                  }}
                />
              </div>
              <div className={customClasses.helperTextBottom}>

                {
                  timer ? (
                    <Typography>
                      Получить код повторно: {getTransformSecondsToMinutes(timer)}
                    </Typography>
                  ) : (
                    <a
                      style={{
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontFamily: "'Roboto', 'sans-serif'",
                        fontWeight: 'normal',
                        lineHeight: '14px',
                        color: 'rgba(0, 0, 0, 0.54)',
                        display: 'block',
                        marginBottom: 10,
                      }}
                      href="#"
                      disabled={timer ? true : false}
                      onClick={event => {
                        sendSmsCode();
                        event.preventDefault();
                      }}
                    >
                      Повторный код
                    </a>
                  )
                }
              </div>
              <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
                <Button disabled={isDisabledConfirm} type="submit">Продолжить</Button>
              </div>
            </div>
          </form>
        )
      }

    </main>
  )
};

export default PasswordRecoveryPage;
