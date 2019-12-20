import React, { Suspense } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
// import LuxonUtils from '@date-io/luxon';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import theme from './style';


import AppRoute from './AppRoute';
import Bootstrap from './Bootstrap';

import ErrorBoundary from '../Templates/ErrorBoundary';

import {
  MAIN_PAGE_LINK,
  ABOUT_PAGE_LINK,

  DIAGNOSIS_PAGE_LINK,
  TREATMENT_PAGE_LINK,
  OBSERVATION_PAGE_LINK,

  AOAMT_PAGE_LINK,
  DOCTORS_PAGE_LINK,
  REVIEWS_PAGE_LINK,
  SIGN_IN_PAGE_LINK,
  PERSONAL_ACCOUNT_PAGE_LINK,
  SERVICES_PAGE_LINK,
  RECEPTION_PAGE_LINK,
  PRIVACY_POLICY_PAGE_LINK,
  PERSONAL_DATA_PAGE_LINK,
  CREATE_ACCOUNT_LINK,
  PASSWORD_RECOVERY,
  DESKTOP_PAGE_LINK,
  APPLICATIONS_PAGE_LINK,
  DOCUMENTS_PAGE_LINK,
  IT_SUPPORT_PAGE_LINK,
  STATISTICS_PAGE_LINK, CLINICS_PAGE_LINK
} from '../../config/pageLinks';

import {
  MAIN_PAGE_NAME,
  ABOUT_PAGE_NAME,

  DIAGNOSIS_PAGE_NAME,
  TREATMENT_PAGE_NAME,
  OBSERVATION_PAGE_NAME,

  AOAMT_PAGE_NAME,
  DOCTORS_PAGE_NAME,
  REVIEWS_PAGE_NAME,

  SIGN_IN_PAGE_NAME,
  PERSONAL_ACCOUNT_PAGE_NAME,
  SERVICES_PAGE_NAME,
  RECEPTION_PAGE_NAME,
  PRIVACY_POLICY_PAGE_NAME,
  PERSONAL_DATA_PAGE_NAME,
  CREATE_ACCOUNT_NAME,
  PASSWORD_RECOVERY_NAME,
  DESKTOP_PAGE_NAME,
  APPLICATIONS_PAGE_NAME,
  DOCUMENTS_PAGE_NAME,
  IT_SUPPORT_PAGE_NAME,
  STATISTICS_PAGE_NAME, CLINICS_PAGE_NAME
} from '../../config/pageName';

import {
  MainPage,
  AboutPage,
  
  DiagnosisPage,
  TreatmentPage,
  ObservationPage,
  
  AoamtPage,
  DoctorsPage,
  ReviewsPage,

  CreateAccountPage,
  PasswordRecoveryPage,
  SignInPage,
  PersonalAccountPage,
  DesktopPage,
  ClinicsPage,
  ApplicationsPage,
  DocumentsPage,
  ItSupportPage,
  StatisticsHealthPage,


  ServicesPage,
  ReceptionPage,
  PrivacyPolicyPage,
  PersonalDataPage,
  
  NotFoundPage
} from './PagesDinamic';

import {
  APP_PAGE_MAIN,
  
  APP_PAGE_DIAGNOSIS,
  APP_PAGE_TREATMENT,
  APP_PAGE_OBSERVATION,
  
  APP_PAGE_AOAMT,
  APP_PAGE_DOCTORS,
  APP_PAGE_REVIEWS,
  APP_PAGE_REGISTRATION,
  APP_PAGE_PERSONAL_ACCOUNT,
  APP_PAGE_SERVICES,
  APP_PAGE_RECEPTION,
  APP_PAGE_PRIVACY,
  APP_PAGE_PERSONAL_DATA,
  
  APP_PAGE_PERSONAL_SETTINGS,
  APP_PAGE_CLABABLE_LOGO,
  APP_PAGE_APPOINTMENT,
  APP_PAGE_CLIABLE_FIELD,
  APP_PAGE_MAIN_LEFT_MENU,
  APP_PAGE_MAIN_UP_MENU,
} from '../../config/roles/roles';

const Root = props => {
  const {
    openSnackbar,
    snackbarsOpen
  } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <ErrorBoundary>
        <CookiesProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <BrowserRouter>
              <Bootstrap>
                <Switch>
                  {/*<Suspense fallback={<div>Hello</div>}>*/}
                    <AppRoute
                      exact
                      path={MAIN_PAGE_LINK}
                      name={MAIN_PAGE_NAME}
                      component={MainPage}
                      // permission={APP_PAGE_MAIN}
                    />
                    <AppRoute
                      exact
                      path={DIAGNOSIS_PAGE_LINK}
                      name={DIAGNOSIS_PAGE_NAME}
                      component={DiagnosisPage}
                      // permission={APP_PAGE_DIAGNOSIS}
                    />
                    <AppRoute
                      exact
                      path={TREATMENT_PAGE_LINK}
                      name={TREATMENT_PAGE_NAME}
                      component={TreatmentPage}
                      // permission={APP_PAGE_TREATMENT}
                    />
                    <AppRoute
                      exact
                      path={OBSERVATION_PAGE_LINK}
                      name={OBSERVATION_PAGE_NAME}
                      component={ObservationPage}
                      // permission={APP_PAGE_OBSERVATION}
                    />

                    <AppRoute
                      exact
                      path={AOAMT_PAGE_LINK}
                      name={AOAMT_PAGE_NAME}
                      component={AoamtPage}
                      // permission={APP_PAGE_AOAMT}
                    />
                    <AppRoute
                      exact
                      path={DOCTORS_PAGE_LINK}
                      name={DOCTORS_PAGE_NAME}
                      component={DoctorsPage}
                      // permission={APP_PAGE_DOCTORS}
                    />
                    <AppRoute
                      exact
                      path={REVIEWS_PAGE_LINK}
                      name={REVIEWS_PAGE_NAME}
                      component={ReviewsPage}
                      // permission={APP_PAGE_REVIEWS}
                    />
                    <AppRoute
                      exact
                      path={CREATE_ACCOUNT_LINK}
                      name={CREATE_ACCOUNT_NAME}
                      component={CreateAccountPage}
                      // permission={APP_PAGE_REGISTRATION}
                    />
                    <AppRoute
                      exact
                      path={PASSWORD_RECOVERY}
                      name={PASSWORD_RECOVERY_NAME}
                      component={PasswordRecoveryPage}
                      // permission={APP_PAGE_REGISTRATION}
                    />
                    <AppRoute
                      exact
                      path={SIGN_IN_PAGE_LINK}
                      name={SIGN_IN_PAGE_NAME}
                      component={SignInPage}
                      // permission={APP_PAGE_REGISTRATION}
                    />

                    <AppRoute
                      // exact
                      path={PERSONAL_ACCOUNT_PAGE_LINK}
                      name={PERSONAL_ACCOUNT_PAGE_NAME}
                      component={PersonalAccountPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={DESKTOP_PAGE_LINK}
                      name={DESKTOP_PAGE_NAME}
                      component={DesktopPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={CLINICS_PAGE_LINK}
                      name={CLINICS_PAGE_NAME}
                      component={ClinicsPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={STATISTICS_PAGE_LINK}
                      name={STATISTICS_PAGE_NAME}
                      component={StatisticsHealthPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={DOCUMENTS_PAGE_LINK}
                      name={DOCUMENTS_PAGE_NAME}
                      component={DocumentsPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={APPLICATIONS_PAGE_LINK}
                      name={APPLICATIONS_PAGE_NAME}
                      component={ApplicationsPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />
                    <AppRoute
                      // exact
                      path={IT_SUPPORT_PAGE_LINK}
                      name={IT_SUPPORT_PAGE_NAME}
                      component={ItSupportPage}
                      // permission={APP_PAGE_PERSONAL_ACCOUNT}
                    />

                    {/*<AppRoute*/}
                    {/*  // exact*/}
                    {/*  path={DESKTOP_PAGE_LINK}*/}
                    {/*  name={DESKTOP_PAGE_NAME}*/}
                    {/*  component={DesktopPage}*/}
                    {/*  // permission={APP_PAGE_PERSONAL_ACCOUNT}*/}
                    {/*/>*/}
                    {/*<AppRoute*/}
                    {/*  // exact*/}
                    {/*  path={APPLICATIONS_PAGE_LINK}*/}
                    {/*  name={APPLICATIONS_PAGE_NAME}*/}
                    {/*  component={ApplicationsPage}*/}
                    {/*  // permission={APP_PAGE_PERSONAL_ACCOUNT}*/}
                    {/*/>*/}
                    {/*<AppRoute*/}
                    {/*  // exact*/}
                    {/*  path={DOCUMENTS_PAGE_LINK}*/}
                    {/*  name={DOCUMENTS_PAGE_NAME}*/}
                    {/*  component={DocumentsPage}*/}
                    {/*  // permission={APP_PAGE_PERSONAL_ACCOUNT}*/}
                    {/*/>*/}
                    {/*<AppRoute*/}
                    {/*  // exact*/}
                    {/*  path={IT_SUPPORT_PAGE_LINK}*/}
                    {/*  name={IT_SUPPORT_PAGE_NAME}*/}
                    {/*  component={ItSupportPage}*/}
                    {/*  // permission={APP_PAGE_PERSONAL_ACCOUNT}*/}
                    {/*/>*/}
                    {/*<AppRoute*/}
                    {/*  // exact*/}
                    {/*  path={STATISTICS_PAGE_LINK}*/}
                    {/*  name={STATISTICS_PAGE_NAME}*/}
                    {/*  component={StatisticsHealthPage}*/}
                    {/*  // permission={APP_PAGE_PERSONAL_ACCOUNT}/>*/}
                    {/*/>*/}


                    {/*<AppRoute*/}
                    {/*  exact*/}
                    {/*  path={SERVICES_PAGE_LINK}*/}
                    {/*  name={SERVICES_PAGE_NAME}*/}
                    {/*  component={ServicesPage}*/}
                    {/*  // permission={APP_PAGE_SERVICES}*/}
                    {/*/>*/}
                    {/*<AppRoute*/}
                    {/*  exact*/}
                    {/*  path={RECEPTION_PAGE_LINK}*/}
                    {/*  name={RECEPTION_PAGE_NAME}*/}
                    {/*  component={ReceptionPage}*/}
                    {/*  // permission={APP_PAGE_RECEPTION}*/}
                    {/*/>*/}
                    <AppRoute
                      exact
                      path={PRIVACY_POLICY_PAGE_LINK}
                      name={PRIVACY_POLICY_PAGE_NAME}
                      component={PrivacyPolicyPage}
                      // permission={APP_PAGE_PRIVACY}
                    />
                    <AppRoute
                      exact
                      path={PERSONAL_DATA_PAGE_LINK}
                      name={PERSONAL_DATA_PAGE_NAME}
                      component={PersonalDataPage}
                      // permission={APP_PAGE_PERSONAL_DATA}
                    />

                    <AppRoute
                      exact
                      component={NotFoundPage} />
                  {/*</Suspense>*/}

                </Switch>
              </Bootstrap>
            </BrowserRouter>

          </MuiPickersUtilsProvider>
        </CookiesProvider>
      </ErrorBoundary>
    </MuiThemeProvider>
  )
};

export default Root;
