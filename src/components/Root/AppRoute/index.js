import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

import { snackbarsOpen } from '../../../model/actions/appAction'

import AppRoute from './AppRoute';

const mapStateToProps = state => ({
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRoute))
