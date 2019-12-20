import React from 'react';
import { connect } from 'react-redux';
import {withCookies} from "react-cookie";

import {appTitleChange, snackbarsOpen} from '../../../model/actions/appAction';
import {userIsAuth, userRole} from '../../../model/actions/userAction';
import {saveToken} from '../../../model/actions/dataAction';

import CreateAccountPage from './CreateAccount.page';


const mapStateToProps = state => ({
  title: state.appReducer.title,
  role: state.userReducer.role,
  token: state.dataReducer.token,
  openSnackbar: state.appReducer.openSnackbar,
});

const mapDispatchToProps = dispatch => ({
  appTitleChange: title => dispatch(appTitleChange(title)),
  userRole: role => dispatch(userRole(role)),
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  saveToken: token => dispatch(saveToken(token)),
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateAccountPage);
