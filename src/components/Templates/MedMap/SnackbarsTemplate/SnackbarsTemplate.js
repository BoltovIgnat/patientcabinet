import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/ReportProblemOutlined';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import HighlightOff from '@material-ui/icons/HighlightOff';

import { useStyles1, useStyles2 } from './style';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: HighlightOff,
  info: InfoIcon,
};

const  MySnackbarContent = props => {
  const { className, message, onClose, variant, ...other } = props;

  const classes = useStyles1();
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={`${classes[variant]} ${className}`}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {/*<Icon className={`${classes.icon} ${classes.iconVariant}`} />*/}
          {message}
        </span>
      }
      // action={[
      //   <IconButton
      //     key="close"
      //     aria-label="Close"
      //     color="inherit"
      //     className={classes.close}
      //     onClick={onClose}
      //   >
      //     <CloseIcon className={classes.icon} />
      //   </IconButton>,
      // ]}
      {...other}
    />
  );
};

const SnackbarsTemplate = props => {
  const { variant, message, open, setOpen, onClose } = props;
  const { openSnackbar, snackbarsOpen } = props;
  const classes = useStyles2();

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={typeof openSnackbar === 'object' ? true : false}
        autoHideDuration={3000}
        onClose={() => snackbarsOpen(false)}
      >
        <MySnackbarContent
          onClose={() => snackbarsOpen(false)}
          variant={openSnackbar.variant}
          message={openSnackbar.message}
        />
      </Snackbar>
    </div>
  );
};

export default SnackbarsTemplate;
