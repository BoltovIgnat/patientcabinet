import { connect } from 'react-redux';

import SnackbarsTemplate from './SnackbarsTemplate';
import {snackbarsOpen} from "../../../../model/actions/appAction";

const mapStateToProps = state => ({
  openSnackbar: state.appReducer.openSnackbar
});

const mapDispatchToProps = dispatch => ({
  snackbarsOpen: openSnackbar => dispatch(snackbarsOpen(openSnackbar))
});


export default connect(mapStateToProps, mapDispatchToProps)(SnackbarsTemplate);