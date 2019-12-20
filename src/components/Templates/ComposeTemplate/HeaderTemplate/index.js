import React from 'react';
import { connect } from 'react-redux';

import HeaderTemplate from './HeaderTemplate';
import {userIsAuth, userRole} from "../../../../model/actions/userAction";
import {snackbarsOpen} from "../../../../model/actions/appAction";

const mapStateToProps = state => ({
  isAuth: state.userReducer.isAuth,
  role: state.userReducer.role,
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  userRole: role => dispatch(userRole(role)),
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTemplate);
