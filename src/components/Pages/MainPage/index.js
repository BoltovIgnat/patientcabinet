import { connect } from 'react-redux';

import MainPage from './Main.page';

import {
  objectStatusOptionsSave,
  diagnosesSave
} from '../../../model/actions/dataAction';

const mapStateToProps = state => ({
  objectStatusOptions: state.dataReducer.objectStatusOptions,
  diagnosesOptions: state.dataReducer.diagnosesOptions
});

const mapDispatchToProps = dispatch => ({
  // resetDataBase: () => dispatch(resetDataBase()),
  diagnosesSave: diagnosesOptions => dispatch(diagnosesSave(diagnosesOptions)),
  objectStatusOptionsSave: objectStatusOptions => dispatch(objectStatusOptionsSave(objectStatusOptions))
});

export default connect(mapStateToProps, mapDispatchToProps) (MainPage);
