import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

//Material-ui
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';
import {grey} from "@material-ui/core/colors";



import {
  useForRequest,
  useChangeForRequest,
  useToken, useTimer,
} from '../../../useHooks';

import {
  StepperTemplate,
  CaldendarTemplate,
  DialogTemplate,
  SnackbarsTemplate,
  MaskTemplate
} from '../../Templates/MedMap';

import useStyles from './style';
import { SIGN_IN_PAGE_LINK, } from "../../../config/pageLinks";
import {
  ADD_PATIENT,
  CONFIRM_ADD_PATIENT,
  NODE_ENV,
  SEND_SMS_CODE,
  regexpText
} from '../../../config';
import { getTransformSecondsToMinutes } from '../../../helpers';
import {
  userAgreement,
  consentToTheProcessingOfPersonalData
} from '../../../config/pageText';
import FormControl from "@material-ui/core/FormControl";
import {GRAY_AVERAGE, WHITE_ALUMINUM} from "../../Templates/MedMap/variables";


const tabsArray = [
  'Данные пользователя',
  'Подтверждение мобильного телефона'
];

const initState = {
  // password for authorization
  // password: null,§§
  surname: null,
  name: null,
  patronymic: null,
  birthDate: null,
  email: null,
  mobilePhone: null,
  snils: null,
  // personal date
  consentDate: null,
  // agrement data
  agreementDateUserAgreement: null,
};

const CreateAccountPage = props => {
  const { history, customClasses, userRole, userIsAuth, token, saveToken } = props;
  const { openSnackbar, snackbarsOpen } = props;

  const [cookies, setCookie, removeCookie] = useCookies();

  const classes = useStyles();

  const [ forRequest, setForRequest ] = useForRequest({
    // password for authorization
    // password: null,
    surname: NODE_ENV === 'development' ? 'Gadzhiev' : null,
    name: NODE_ENV === 'development' ? 'Imran' : null,
    patronymic: NODE_ENV === 'development' ? 'Malikovich' : null,
    birthDate: NODE_ENV === 'development' ? '16.12.2014' : null,
    email: NODE_ENV === 'development' ? 'sdamegeoge@gmail.com' : null,
    mobilePhone: NODE_ENV === 'development' ? ' 9779496036' : null,
    snils: NODE_ENV === 'development' ? '36436436087' : null,
    // personal date
    consentDate: NODE_ENV === 'development' ? '16.12.2014' : null,
    // consentDate: NODE_ENV === 'development' ? null : null,
    // agrement data
    agreementDateUserAgreement: NODE_ENV === 'development' ? null : null,
    // agreementDateUserAgreement: NODE_ENV === 'development' ? null : null,
  });

  const [ code, setCode ] = React.useState(NODE_ENV === 'development' ? 1111 : '');
  const handleCodeChange = event => {
    const value = event.currentTarget.value;
    setCode(() => value);
  };

  const [ isDisabled, setIsDisabled ] = useState(false);
  const changeForRequest = useChangeForRequest(forRequest, setForRequest);
  const getToken = useToken();
  const handleSubmit = useCallback(() => {
    setIsDisabled(isDisabled => true);

    const data = new FormData();
    const { consentDate, agreementDateUserAgreement, mobilePhone } = forRequest;
    if(!consentDate) {
      snackbarsOpen({ variant: 'error', message: 'Примите пользовательское соглашение' });
      setIsDisabled(isDisabled => false);
      return;
    }
    if(!agreementDateUserAgreement) {
      snackbarsOpen({ variant: 'error', message: 'Дайте согласие на обработку персональных данных' });
      setIsDisabled(isDisabled => false);
      return;
    }

    const fetchdata = async() => {
      try {
        const tokenResult = await getToken();

        console.log(tokenResult, 'createAccountPage, tokenResult');

        setCookie('token', tokenResult.data.data.token);
        data.append('token', tokenResult.data.data.token);
        // data.append('iv', iv);
        // data.append('password', password);

        for(let key in forRequest) {
          data.append(key, forRequest[key]);
        }

        const result = await axios({
          method: 'post',
          url: ADD_PATIENT,
          headers: {
            'content-type': "application/json; charset=utf-8"
          },
          data
        });

        console.log(result, 'createAccountPage addPatient');

        await new Promise((resolve, reject) => {
          setIsDisabled(isDisabled => false);
          resolve();
        });

        const {
          data: {
            data: {
              error,
              success,
              is_active,
              userId,
              roles
            }
          },
          status
        } = result;

        if(status === 200) {
          if(error) {
            NODE_ENV === 'development' ? setActiveStep(1) : false;
            // snackbarsOpen({
            //   message: 'Выслан код подтверждения на номер телефона указанный в регистрационной форме',
            //   variant: 'success'
            // });
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

            // NODE_ENV === 'development' ?  : false;
          } else if(success) {
            setActiveStep(1);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });
          }

          if(is_active) {
            // snackbarsOpen({ variant: 'info', message: `На номер ${mobilePhone} уже был отправлен код подтверждения` });
            setActiveStep(1);
          }

          setIsDisabled(isDisabled => false);
        }

        if(is_active) {
          sendSmsCode();
          userRole(null);
          userIsAuth(false);
        }

      } catch (e) {
        setIsDisabled(isDisabled => false);
        console.error(e.message, 'fetchData createAccountPage');
      }
    };

    fetchdata();
  }, [forRequest]);


  useEffect(() => {
    return () => {
      setForRequest(() => ({ ...initState }))
    }
  }, []);

  const [openDialogs, setOpenDialogs] = useState({
    openDialogOne: false,
    openDialogTwo: false,
  });

  const validCreateAccountText = event => {
    const value = event.target.value;
    if(regexpText.test(value) && value.length < 20) {
      return void changeForRequest(event);
    }

    return false;
  };

  const formOne = (
    <form
      onSubmit={event => {
        handleSubmit();
        event.preventDefault();
      }}
      autoComplete="off"
      className={`${classes.form} ${customClasses.fixTextField}`}>
      <Grid container>
        <Grid item justify="center" container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <TextField
                className={classes.textField}
                onChange={validCreateAccountText}
                name="surname"
                value={forRequest.surname === null ? '' : forRequest.surname}
                label="Фамилия"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <TextField
                className={classes.textField}
                onChange={validCreateAccountText}
                // onChange={changeForRequest}
                name="name"
                value={forRequest.name === null ? '' : forRequest.name}
                label="Имя"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <TextField
                className={classes.textField}
                onChange={validCreateAccountText}
                // onChange={changeForRequest}
                name="patronymic"
                value={forRequest.patronymic === null ? '' : forRequest.patronymic}
                label="Отчество"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <CaldendarTemplate
                date={forRequest.birthDate}
                label="Дата рождения*"
                name="birthDate"
                setForRequest={setForRequest}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <TextField
                className={classes.textField}
                onChange={changeForRequest}
                name="email"
                value={forRequest.email === null ? '' : forRequest.email}
                type="email"
                label="Адрес электронной почты"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <TextField
                className={classes.textField}
                onChange={changeForRequest}
                name="mobilePhone"
                value={forRequest.mobilePhone === null ? '' : forRequest.mobilePhone}
                label="Мобильный телефон"
                placeholder="+7"
                margin="normal"
                variant="outlined"
                fullWidth
                required
                inputProps={{
                  mask: ['+', '7', ' ',  '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
                }}
                InputProps={{
                  inputComponent: MaskTemplate,
                }}
              />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <DialogTemplate
                forRequest={forRequest}
                setForRequest={setForRequest}
                forRequestName="consentDate"
                content={userAgreement}
                buttonName={
                  <React.Fragment>
                    {/*<Checkbox*/}
                    {/*  // disabled*/}
                    {/*  className={classes.sss}*/}
                    {/*  checked*/}
                    {/*  value="checkedE"*/}
                    {/*  inputProps={{*/}
                    {/*    'aria-label': 'disabled checked checkbox',*/}
                    {/*  }}*/}
                    {/*/>*/}
                    <div>
                      <CheckIcon
                        style={{ fontSize: 18 }}/>
                    </div>
                    <span>Я ознакомлен и согласен с условиями <br/> <u> пользовательского соглашения</u></span>
                  </React.Fragment>
                }
                name='openDialogOne'
                openDialogs={openDialogs}
                setOpenDialogs={setOpenDialogs}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <DialogTemplate
                forRequest={forRequest}
                setForRequest={setForRequest}
                forRequestName="agreementDateUserAgreement"
                content={consentToTheProcessingOfPersonalData}
                buttonName={
                  <React.Fragment>
                    <div>
                      <CheckIcon
                        style={{ fontSize: 18 }}/>
                    </div>
                    <span>Согласие на обработку <u>персональных данных</u></span>
                  </React.Fragment>
                }
                name='openDialogTwo'
                openDialogs={openDialogs}
                setOpenDialogs={setOpenDialogs}
              />
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <FormControl fullWidth margin="normal">
                <TextField
                  className={classes.textField}
                  onChange={changeForRequest}
                  name="snils"
                  value={forRequest.snils === null ? '' : forRequest.snils}
                  label="СНИЛС"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{
                    mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/ ]
                  }}
                  InputProps={{
                    inputComponent: MaskTemplate,
                  }}
                />
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <Typography style={{
                color: WHITE_ALUMINUM,
                marginBottom: 0,
              }} paragraph>*- поля обязательные для заполнения</Typography>
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
                <Button disabled={isDisabled} type="submit">
                  Зарегистрироваться
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid item container xs={12} sm={6}>
          <Grid item xs={12}>
            <div className={customClasses.textFieldBlock}>
              <div className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>
                <Button onClick={() => {
                  setForRequest(forRequest => ({
                    ...initState
                  }))
                }}>
                  Отмена
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>


      {/*<div className={classes.container}>*/}
      {/*  <div className={classes.registrContainer} >*/}
      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={validCreateAccountText}*!/*/}
      {/*    /!*        name="surname"*!/*/}
      {/*    /!*        value={forRequest.surname === null ? '' : forRequest.surname}*!/*/}
      {/*    /!*        label="Фамилия"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={validCreateAccountText}*!/*/}
      {/*    /!*        // onChange={changeForRequest}*!/*/}
      {/*    /!*        name="name"*!/*/}
      {/*    /!*        value={forRequest.name === null ? '' : forRequest.name}*!/*/}
      {/*    /!*        label="Имя"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={validCreateAccountText}*!/*/}
      {/*    /!*        // onChange={changeForRequest}*!/*/}
      {/*    /!*        name="patronymic"*!/*/}
      {/*    /!*        value={forRequest.patronymic === null ? '' : forRequest.patronymic}*!/*/}
      {/*    /!*        label="Отчество"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}

      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <CaldendarTemplate*!/*/}
      {/*    /!*        date={forRequest.birthDate}*!/*/}
      {/*    /!*        label="Дата рождения*"*!/*/}
      {/*    /!*        name="birthDate"*!/*/}
      {/*    /!*        setForRequest={setForRequest}*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={changeForRequest}*!/*/}
      {/*    /!*        name="email"*!/*/}
      {/*    /!*        value={forRequest.email === null ? '' : forRequest.email}*!/*/}
      {/*    /!*        type="email"*!/*/}
      {/*    /!*        label="Адрес электронной почты"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={changeForRequest}*!/*/}
      {/*    /!*        name="mobilePhone"*!/*/}
      {/*    /!*        value={forRequest.mobilePhone === null ? '' : forRequest.mobilePhone}*!/*/}
      {/*    /!*        label="Мобильный телефон"*!/*/}
      {/*    /!*        placeholder="+7"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*        inputProps={{*!/*/}
      {/*    /!*          mask: ['+', '7', ' ',  '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]*!/*/}
      {/*    /!*        }}*!/*/}
      {/*    /!*        InputProps={{*!/*/}
      {/*    /!*          inputComponent: MaskTemplate,*!/*/}
      {/*    /!*        }}*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}

      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <DialogTemplate*!/*/}
      {/*    /!*        forRequest={forRequest}*!/*/}
      {/*    /!*        setForRequest={setForRequest}*!/*/}
      {/*    /!*        forRequestName="consentDate"*!/*/}
      {/*    /!*        content={userAgreement}*!/*/}
      {/*    /!*        buttonName={*!/*/}
      {/*    /!*          <React.Fragment>*!/*/}
      {/*    /!*            <span>Я ознакомлен и согласен с условиями <u> пользовательского соглашения</u></span>*!/*/}
      {/*    /!*          </React.Fragment>*!/*/}
      {/*    /!*        }*!/*/}
      {/*    /!*        name='openDialogOne'*!/*/}
      {/*    /!*        openDialogs={openDialogs}*!/*/}
      {/*    /!*        setOpenDialogs={setOpenDialogs}*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <DialogTemplate*!/*/}
      {/*    /!*        forRequest={forRequest}*!/*/}
      {/*    /!*        setForRequest={setForRequest}*!/*/}
      {/*    /!*        forRequestName="agreementDateUserAgreement"*!/*/}
      {/*    /!*        content={consentToTheProcessingOfPersonalData}*!/*/}
      {/*    /!*        buttonName={*!/*/}
      {/*    /!*          <React.Fragment>*!/*/}
      {/*    /!*            <span>Согласие на обработку <u>персональных данных</u></span>*!/*/}
      {/*    /!*          </React.Fragment>*!/*/}
      {/*    /!*        }*!/*/}
      {/*    /!*        name='openDialogTwo'*!/*/}
      {/*    /!*        openDialogs={openDialogs}*!/*/}
      {/*    /!*        setOpenDialogs={setOpenDialogs}*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <FormControl fullWidth margin="normal">*!/*/}
      {/*    /!*      <TextField*!/*/}
      {/*    /!*        className={classes.textField}*!/*/}
      {/*    /!*        onChange={changeForRequest}*!/*/}
      {/*    /!*        name="snils"*!/*/}
      {/*    /!*        value={forRequest.snils === null ? '' : forRequest.snils}*!/*/}
      {/*    /!*        label="СНИЛС"*!/*/}
      {/*    /!*        margin="normal"*!/*/}
      {/*    /!*        variant="outlined"*!/*/}
      {/*    /!*        fullWidth*!/*/}
      {/*    /!*        required*!/*/}
      {/*    /!*        inputProps={{*!/*/}
      {/*    /!*          mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/ ]*!/*/}
      {/*    /!*        }}*!/*/}
      {/*    /!*        InputProps={{*!/*/}
      {/*    /!*          inputComponent: MaskTemplate,*!/*/}
      {/*    /!*        }}*!/*/}
      {/*    /!*      />*!/*/}
      {/*    /!*    </FormControl>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*  <div className={classes.registrItem}>*!/*/}
      {/*    /!*    <Typography paragraph>*- поля обязательные для заполнения</Typography>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>*!/*/}
      {/*    /!*    <Button disabled={isDisabled} type="submit">*!/*/}
      {/*    /!*      Зарегистрироваться*!/*/}
      {/*    /!*    </Button>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!*<div className={classes.registrColumn}>*!/*/}
      {/*    /!*  <div className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>*!/*/}
      {/*    /!*    <Button onClick={() => {*!/*/}
      {/*    /!*      setForRequest(forRequest => ({*!/*/}
      {/*    /!*        ...initState*!/*/}
      {/*    /!*      }))*!/*/}
      {/*    /!*    }}>*!/*/}
      {/*    /!*      Отмена*!/*/}
      {/*    /!*    </Button>*!/*/}
      {/*    /!*  </div>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
    </form>
  );

  const [activeStep, setActiveStep] = React.useState(0);
  const [ isDisabledConfirm, setIsDisabledConfirm ] = useState(false);
  const [ timer, setTimer ] = useTimer(NODE_ENV === 'development' ? 20 : 300, 1000, activeStep);
  // Warning! useCallback and useMemo remember your useState and don't change that value.
  const confirmPatient = useCallback(() => {
    setIsDisabledConfirm(isDisabledConfirm => true);
    const data = new FormData();
    data.append('code', code);
    data.append('token', cookies.token);

    const fetchData = async() => {
      try {
        const result = await axios({
          method: 'post',
          url: CONFIRM_ADD_PATIENT,
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

        console.log(result, 'createAccountPage confirmAddPatient');

        if(status === 200) {
          if(error) {
            userIsAuth(false);
            userRole(null);
            snackbarsOpen({
              message: error.errorText,
              variant: 'error'
            });

            // setTimer(10);
          } else if(success) {
            userIsAuth(true);
            userRole(roles);
            snackbarsOpen({
              message: success.successText,
              variant: 'success'
            });

            history.push(SIGN_IN_PAGE_LINK);
          }
          // setActiveStep(2);
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
            userIsAuth(false);
            userRole(null);
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

  const formTwo = (
    <Box className={classes.registrBlock}>
      {/*<Typography variant="h2">На номер телефона (телефон, указанный пользователем)  был выслан код подтверждения</Typography>*/}
      <Typography variant="h3">Введите код подтверждения из смс и нажмите "Подтвердить"</Typography>
      <Box className={classes.registrCode}>
        <TextField
          className={classes.textField}
          onChange={handleCodeChange}
          name="code"
          value={code === null ? '' : code}
          label="Код подтверждения из SMS"
          margin="normal"
          variant="outlined"
          fullWidth
          inputProps={{
            mask: [/\d/, '-',  /\d/, '-', /\d/, '-', /\d/]
          }}
          InputProps={{
            inputComponent: MaskTemplate,
          }}
        />
      </Box>
      <Box className={customClasses.helperTextBottom}>

        {
          timer ? (
            <Typography className={customClasses.helperTextTop}>
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
      </Box>
      <Box className={`${customClasses.regBtn} ${customClasses.btnBlue}`}>
        <Button
          onClick={confirmPatient}
          disabled={isDisabledConfirm}
        >
          Подтвердить
        </Button>
      </Box>
      <Box className={`${customClasses.regBtn} ${customClasses.btnWhite}`}>
        <Button onClick={() => {
          // also clear code value input's
          setActiveStep(0);
        }}>
          Отмена
        </Button>
      </Box>
    </Box>
  );

  return (
    <main className={customClasses.main}>
      {/*<h3><Link to={MAIN_PAGE_LINK}>Главная</Link></h3>*/}
      <StepperTemplate
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        tabsArray={tabsArray}
        form={activeStep === 0 ? formOne : formTwo}
      />
    </main>
  );
};

CreateAccountPage.propTypes = {

};

export default CreateAccountPage;

// export default SignInPage;
