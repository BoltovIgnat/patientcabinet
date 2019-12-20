import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import useStyles from './style';

const FooterTemplate = props => {
  const classes = useStyles();
  return (
    <div id="footer__template" className={classes.root}>
      <div className={classes.container}>
        <p>2018-2019 "АО АМТ"</p>
      </div>
    </div>
  )
};

export default FooterTemplate;
