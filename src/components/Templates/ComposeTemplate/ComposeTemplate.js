import React, {useEffect, useState} from 'react';

import useStyles from './style';
import HeaderTemplate from './HeaderTemplate';
import MenuTemplate from './MenuTemplate';
import FooterTemplate from './FooterTemplate';
import PersonalAccountPage from '../../Pages/PersonalAccountPage';
import DesktopPage from '../../Pages/PersonalAccountPage/DesktopPage';
import StatisticsHealthPage from '../../Pages/PersonalAccountPage/StatisticsHealthPage';

import {SnackbarsTemplate} from "../MedMap";
import {
  PERSONAL_ACCOUNT_PAGE_LINK,
  DESKTOP_PAGE_LINK,
  CLINICS_PAGE_LINK,
  APPLICATIONS_PAGE_LINK,
  IT_SUPPORT_PAGE_LINK,
  DOCUMENTS_PAGE_LINK,
  STATISTICS_PAGE_LINK
} from '../../../config/pageLinks';

const ComposeTemplate = props => {
  const { openSnackbar, snackbarsOpen, history } = props;
  const classes = useStyles();

  const { location: { pathname } } = history;
  
  return (
    <React.Fragment>
      {
        pathname === PERSONAL_ACCOUNT_PAGE_LINK ||
          pathname === DESKTOP_PAGE_LINK ||
          pathname === APPLICATIONS_PAGE_LINK ||
          pathname === IT_SUPPORT_PAGE_LINK ||
          pathname === DOCUMENTS_PAGE_LINK ||
          pathname === STATISTICS_PAGE_LINK ||
        pathname === CLINICS_PAGE_LINK
         ? false : (
          <HeaderTemplate {...props} />
        )
      }

      {
        pathname === DESKTOP_PAGE_LINK ||
        pathname === STATISTICS_PAGE_LINK ||
        pathname === DOCUMENTS_PAGE_LINK ||
        pathname === APPLICATIONS_PAGE_LINK ||
        pathname === IT_SUPPORT_PAGE_LINK ||
        pathname === CLINICS_PAGE_LINK
        ? (
          <PersonalAccountPage />
        ) : false
      }

      { props.children(classes) }

      {
        pathname === PERSONAL_ACCOUNT_PAGE_LINK ||
        pathname === DESKTOP_PAGE_LINK ||
        pathname === APPLICATIONS_PAGE_LINK ||
        pathname === IT_SUPPORT_PAGE_LINK ||
        pathname === DOCUMENTS_PAGE_LINK ||
        pathname === STATISTICS_PAGE_LINK ||
        pathname === CLINICS_PAGE_LINK
          ? false : (
          <React.Fragment>
            <MenuTemplate {...props} />
            <FooterTemplate />
          </React.Fragment>
        )
      }

      <SnackbarsTemplate
        message='Hello'
        variant={null}
      />
    </React.Fragment>
  )
};

export default ComposeTemplate;
