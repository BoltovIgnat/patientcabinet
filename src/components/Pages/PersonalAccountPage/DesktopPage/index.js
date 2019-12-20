import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DesktopPage from './Desktop.page';
import { personalAccountPageDesktopActiveTab } from "../../../../model/actions/appAction";

const mapStateToProps = state => ({
  desktopActiveTab: state.appReducer.desktopActiveTab
});

const mapDispatchToProps = dispatch => ({
  personalAccountPageDesktopActiveTab: desktopActiveTab => dispatch(personalAccountPageDesktopActiveTab(desktopActiveTab))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (DesktopPage));