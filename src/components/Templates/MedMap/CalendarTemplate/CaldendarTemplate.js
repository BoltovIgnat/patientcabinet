import React, { useState, useEffect } from 'react';
import { KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import moment from 'moment';

import { whatsBrowser, isNumber } from '../../../../helpers';
import useStyles from './style';
import {regexpDate, regexpText} from "../../../../config";

const CaldendarTemplate = props => {
  const { date, name, label, setForRequest } = props;
  const { openSnackbar, snackbarsOpen } = props;
  const classes = useStyles();

  const [ internalDate, setInternalDate ] = useState(null);

  function handleDateChange(date, value) {
    // if(date && date.getTime() > new Date().getTime()) {
    //   snackbarsOpen({ variant: 'error', message: 'введите корректный возраст' });
    //   setForRequest(forRequest => ({...forRequest, [name]: null }));
    //   return;
    // }

    // console.log(value, 'value');
    // console.log(date, 'date');
    //
    // if(value === null) {
    //   console.log('test')
    //   document.querySelector('#datePicker').value = '';
    //   return;
    //   // document.querySelector('#datePicker').value = '';
    // }


    setInternalDate(() => date);
    const transformDate = moment(date).format("DD.MM.YYYY");
    setForRequest(forRequest => ({...forRequest, [name]: transformDate }));
  }

  useEffect(() => {
    if(date === null) {
      setInternalDate(null)
    }
  }, [date]);

  useEffect(() => {
    if(date) {
      const arr = date.split('.'); // or split with '/'
      const browser = whatsBrowser();
      const [ day, month, year ] = arr;

      setInternalDate(browser[0] === 'F' ? new Date(`${year}/${month}/${day}`) : new Date(`${year}/${month}/${day}`));
    }
  }, []);

  useEffect(() => {
    if(document.querySelector("#datePicker")) {
      document.querySelector("#datePicker").addEventListener('keyup', () => {
        const value = isNumber(document.querySelector("#datePicker").value[0]);
        if(!value) {
          document.querySelector("#datePicker").value = '';
        }
      });
    }

  }, []);

  return (
    <KeyboardDatePicker

      id="datePicker"
      // minDate
      // onKeyUp={validDatePicker}
      maxDate={new Date()}
      invalidDateMessage="Неверный формат даты"
      minDateMessage="Дата не должна быть меньше минимального значения"
      maxDateMessage="Дата не должна быть больше максимального значения"
      format="dd.MM.yyyy"
      autoOk
      label={label}
      value={internalDate}
      inputVariant="outlined"
      InputAdornmentProps={{ position: "end" }}
      onChange={handleDateChange}
    />
  )
};

export default CaldendarTemplate;
