import React from 'react';
import Box from "@material-ui/core/Box";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'

import useStyles from './style';

const CheckMarkTemplate = props => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.userDataBoxIcon}>
        <CheckCircleOutlinedIcon/>
      </Box>
      <Box className={classes.userDataBoxHeader}>
        <Typography>Ссылка на сброс пароля отправлена вам на почтовый ящик </Typography>
      </Box>
      <Box className={`${classes.regBtn} ${classes.btnWhite}`}>
        <Button type="submit">Готово</Button>
      </Box>
    </div>
  );
};

export default CheckMarkTemplate;