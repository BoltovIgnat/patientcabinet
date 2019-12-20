import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';
import Box from "@material-ui/core/Box";

export default function StepperTemplate(props) {
  const { setActiveStep, activeStep, tabsArray, form } = props;
  const classes = useStyles();

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {tabsArray.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === tabsArray.length ? (
            <Box className={classes.registrBlock}>
                <Typography variant="h2">
                    Ваша учетная запись успешно создана и активна Через N секунд вы будете перенаправлены на портал
                </Typography>
                <Typography variant="h3">Откройте письмо и перейдите по ней, чтобы продолжить процесс</Typography>
                <Box className={`${classes.regBtn} ${classes.btnWhite}`}>
                    <Button onClick={handleReset}>
                        В начало
                    </Button>
                </Box>
            </Box>
        ) : (
          <div className={classes.instructions}>{form}</div>
        )}
      </div>
    </div>
  );
}
