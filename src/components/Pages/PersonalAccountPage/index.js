import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {withCookies} from "react-cookie";

import {appTitleChange, personalAccountPageDesktopActiveTab, snackbarsOpen} from '../../../model/actions/appAction';
import PersonalAccountPage from './PersonalAccount.page';
import {userIsAuth, userRole} from "../../../model/actions/userAction";

const mapStateToProps = state => ({
  title: state.appReducer.title,
  isAuth: state.userReducer.isAuth,
  role: state.userReducer.role,
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  userRole: role => dispatch(userRole(role)),
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar)),
  appTitleChange: title => dispatch(appTitleChange(title)),
  personalAccountPageDesktopActiveTab: desktopActiveTab => dispatch(personalAccountPageDesktopActiveTab(desktopActiveTab))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalAccountPage));
