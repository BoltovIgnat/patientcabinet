import React from 'react';
import { connect } from 'react-redux';

// import * as appActions from '../../../model/actions/appAction';
import { appTitleChange } from '../../../model/actions/appAction';
import ReceptionPage from './Reception.page';

const mapStateToProps = state => ({
  title: state.appReducer.title
});

const mapDispatchToProps = dispatch => ({
  appTitleChange: title => dispatch(appTitleChange(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceptionPage);
