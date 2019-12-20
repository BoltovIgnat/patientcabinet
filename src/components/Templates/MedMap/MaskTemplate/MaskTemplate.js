import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import { useChangeForRequest } from '../../../../useHooks';
import useStyles from './style';


export default function MaskTemplate(props) {
  const { inputRef, mask, dispatch, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholderChar={"\u2000"}
      // showMask
    />
  );
}

// MaskTemplate.propTypes = {
//   inputRef: PropTypes.func.isRequired,
// };

// function NumberFormatCustom(props) {
//   const { inputRef, onChange, ...other } = props;
//
//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={inputRef}
//       onValueChange={values => {
//         onChange({
//           target: {
//             value: values.value,
//           },
//         });
//       }}
//       thousandSeparator
//       prefix="$"
//     />
//   );
// }

// NumberFormatCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

/* export function MaskTemplate() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange('textmask')}
          id="formatted-text-mask-input"
          inputComponent={MaskTemplate}
        />
      </FormControl>
      <TextField
        className={classes.formControl}
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange('numberformat')}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: MaskTemplate,
        }}
      />
    </div>
  );
}*/
