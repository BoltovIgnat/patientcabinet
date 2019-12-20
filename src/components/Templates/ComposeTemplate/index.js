import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ComposeTemplate from './ComposeTemplate';
import {snackbarsOpen} from "../../../model/actions/appAction";

const mapStateToProps = state => ({
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComposeTemplate));