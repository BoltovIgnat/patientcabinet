import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import Bootstrap from './Bootstrap';

import {userIsAuth, userRole} from '../../../model/actions/userAction';
import {saveToken} from '../../../model/actions/dataAction';
import {snackbarsOpen} from "../../../model/actions/appAction";

const mapStateToProps = state => ({
  isAuth: state.userReducer.isAuth,
  role: state.userReducer.role,
  token: state.dataReducer.token,
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  userIsAuth: isAuth => dispatch(userIsAuth(isAuth)),
  userRole: role => dispatch(userRole(role)),
  saveToken: token => dispatch(saveToken(token)),
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bootstrap));

