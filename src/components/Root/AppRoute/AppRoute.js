import React, { Suspense, useCallback, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
// import AlertTemplate from '../../Templates/AlertTemplate';

import ComposeTemplate from '../../Templates/ComposeTemplate';

import useStyles, {options} from './style';
import {MAIN_PAGE_LINK, SIGN_IN_PAGE_LINK} from "../../../config/pageLinks";

const AppRoute = props => {
  const {
    component,
    history,
    openSnackbar,
    snackbarsOpen,
  } = props;

  const classes = useStyles();
  const [cookies, setCookie] = useCookies();

  const getTemplate = PropsComponent => {
    const AppRoute = (
      <ComposeTemplate {...props}>
        {classes => {
          return (
            <Suspense
              fallback={
                <div style={{ textAlign: 'center', minHeight: 700, }} >
                  <span>Страница загружается...</span>
                  <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    className={classes.progress}
                    size={30}
                    thickness={5} />
                </div>
              }>
              <PropsComponent customClasses={classes} {...props} />
            </Suspense>
          )
        }}
      </ComposeTemplate>
    );

    return AppRoute;
  };

  // generally always check

  useEffect(() => {
    if(!cookies.token) {
      history.push(MAIN_PAGE_LINK)
    }
  }, []);
  
    return getTemplate(component)
};

export default AppRoute;
