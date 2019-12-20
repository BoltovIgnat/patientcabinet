import React from 'react';

import useSubmitFunc from '../../../helpers/request';
import {CHECK_AUTH, CONFIRM_RESTORE_PASSWORD, GET_AUTH, NODE_ENV, RESTORY_PASSWORD} from "../../../config";
import {
  CREATE_ACCOUNT_LINK,
  MAIN_PAGE_LINK,
  PERSONAL_ACCOUNT_PAGE_LINK,
  SIGN_IN_PAGE_LINK
} from "../../../config/pageLinks";
import axios from "axios";

const ObservationPage = props => {
  const {
    snackbarsOpen,
    userRole,
    userIsAuth,
    history
  } = props;
  const submitFunc = useSubmitFunc();

  const callbackRequest1 = result => {
    console.log(result, 'result request');

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
        history.push(PERSONAL_ACCOUNT_PAGE_LINK);
        snackbarsOpen({
          message: success.successText,
          variant: 'success'
        });
      }
    } else {
      //
    }
  };

  const obj1 = {
    password: 'Istra767!8190',
    login: 'i.gadzhiev'
  };

  const callbackRequest2 = result => {
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
        history.push(PERSONAL_ACCOUNT_PAGE_LINK);
        snackbarsOpen({
          message: success.successText,
          variant: 'success'
        });
      }
    } else {
      //
    }
  };

  const obj2 = {
    password: '2123234',
    login: '22222222222',
    isSnils: true
  };

  const callbackRequest3 = result => {
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
        // NODE_ENV === 'development' ? setTurnConfirmWindow(true) : setTurnConfirmWindow(false) ;
        userRole(null);
        userIsAuth(false);
        snackbarsOpen({
          message: error.errorText,
          variant: 'error'
        });
      } else if(success) {
        // setTurnConfirmWindow(true);
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
    } else {
      //
    }
  };

  const obj3 = {
    phone: '79779496036'
  };

  const callbackRequest4 = result => {
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
  };

  const obj4 = {
    code: '1234'
  };

  const callbackRequest5 = result => {
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
  };

  const obj5 = {
    // code: '1234'
  };

  const callbackRequest6 = result => {
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
          history.push(PERSONAL_ACCOUNT_PAGE_LINK);
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
  };

  const obj6 = {
    // code: '1234'
  };

  return (
    <div>
      <h1>ObservationPage</h1>
      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj1,
              GET_AUTH,
              callbackRequest1
            );
          }}
        >
          SignIn page with login
        </button>
      </div>

      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj2,
              GET_AUTH,
              callbackRequest2
            );
          }}
        >
          SignIn page with snils
        </button>
      </div>

      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj3,
              RESTORY_PASSWORD,
              callbackRequest3
            );
          }}
        >
          Recovery password page
        </button>
      </div>

      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj4,
              CONFIRM_RESTORE_PASSWORD,
              callbackRequest4
            );
          }}
        >
          Confirm code page
        </button>
      </div>

      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj5,
              CONFIRM_RESTORE_PASSWORD,
              callbackRequest5
            );
          }}
        >
          Send sms code page
        </button>
      </div>

      <div>
        <button
          style={{
            width: 300,
            height: 300
          }}
          onClick={() => {
            submitFunc(
              obj5,
              CHECK_AUTH,
              callbackRequest6
            );
          }}
        >
          check auth page
        </button>
      </div>
    </div>
  )
};

export default ObservationPage;