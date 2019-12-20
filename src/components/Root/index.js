import React from 'react';
import { connect } from 'react-redux';

import Root from './Root';
import {snackbarsOpen} from "../../model/actions/appAction";

const mapStateToProps = state => ({
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);