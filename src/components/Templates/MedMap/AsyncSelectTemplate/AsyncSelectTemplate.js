import React, {useCallback, useEffect, useState} from 'react';
import Async from 'react-select/async';
import {components} from "react-select";
import axios from 'axios';
import Search from '@material-ui/icons/Search';

import {GRAY} from "../variables";
import {
  AsyncStyles,
  DARK_GALLERY,
  WILD_SAND,
  LYNCH,
  useStyles
} from './style';

import {doctorsTabUrl} from "../../../../model/actions/dataAction";

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Search
        style={{
          color: GRAY
        }}
      />
    </components.DropdownIndicator>
  );
};

export const IndicatorsContainer = (props) => {
  return (
      <components.IndicatorsContainer {...props}/>
  );
};

const AsyncSelectTemplate = props => {
  const {
    url,
    sliderUrl,
    doctorsTabUrl,
    countShowImg,
    doctorsTabCountShowImg,
    sliderData,
    doctorsTabSliderData,
    asyncInputValue,
    setAsyncInputValue,

    doctorsTabAsyncInputValue,
    doctorsTabAdditionCountShowImg
  } = props;

  const classes = useStyles();

  const handleInputChange = newValue => {
    console.log(newValue, 'newValue');
    if(newValue === '') {
      setAsyncInputValue(null);
    } else {
      setAsyncInputValue(newValue);
    }
  };

  const [ message, setMessage ] = useState('Начните ввод');

  const getData = useCallback(isClear => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        headers: {
          'content-type': 'application/json',
          // 'x-auth-token': 'TOKEN',
        }
      }).then(response => {
        const { status, data: { data } } = response;

        if(status === 200) {
          doctorsTabSliderData({ ...data });
        }
        // resolve();
      }).catch(e => {
        setMessage(message => 'Не найдено');
        // reject();
        console.error(e.message, 'async select');
      })
    })
  });

  const [ hiddenBlock, setHiddenBlock ] = useState(false);

  return (
    <React.Fragment>
      <div className={classes.asyncInputTitle}>
        {
          !hiddenBlock ? asyncInputValue : ''
        }
      </div>
      <Async
        onFocus={() => setHiddenBlock(true)}
        backspaceRemovesValue={false}
        id="async"
        onBlur={event => {
          setHiddenBlock(false);
          doctorsTabAsyncInputValue(event.target.value || event.target.value !== '' ? event.target.value : null);
          // doctorsTabAdditionCountShowImg(countShowImg);
        }}
        loadOptions={() => getData(false)}
        onInputChange={handleInputChange}
        onMenuOpen={() => {
          setMessage(message => 'Начните ввод')
        }}
        loadingMessage={() => 'Идет загрузка'}
        noOptionsMessage={() => {
          return message;
        }}
        styles={AsyncStyles}
        components={{ DropdownIndicator }}
        placeholder={ !hiddenBlock ? asyncInputValue : "Врач, клиника, болезнь/симптомы, услуг" }
        menuIsOpen={false}
      />
    </React.Fragment>
  )
};

export default AsyncSelectTemplate;