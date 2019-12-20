import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
import {MEDICAL_ORGS_OFFICIAL} from "../../../../config";
import {
  doctorsTabAdditionCountShowImg,
  doctorsTabAsyncInputValue,
  doctorsTabCountShowImg,
  doctorsTabDictionaryName,
  doctorsTabSliderData,
  doctorsTabUrl
} from "../../../../model/actions/dataAction";

const AsyncSelectMedMap = props => {
  const {
    // from redux
    sliderData,
    sliderUrl,
    countShowImg,
    dictionaryName,
    asyncInputValue,
    additionCountShowImg,

    doctorsTabSliderData,
    doctorsTabUrl,
    doctorsTabCountShowImg,
    doctorsTabDictionaryName,
    doctorsTabAsyncInputValue,
    doctorsTabAdditionCountShowImg,

    // from parent component
    inputValue,
    setInputValue,
    url,
    placeholder,
    hasBootstrap,
    setHasBootstrap
  } = props;
  const classes = useStyles();

  const getData = useCallback(() => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `${url}`,
        headers: {
          'content-type': 'application/json',
          // 'x-auth-token': 'TOKEN',
        }
      }).then(response => {
        const { status, data: { data } } = response;

        if(status === 200) {
          doctorsTabSliderData({ ...data });
          doctorsTabCountShowImg(0);
          console.log('request from async select med map')
        }
        // resolve();
      }).catch(e => {
        // reject();
        console.error(e.message, 'async select');
      })
    })
  }, [asyncInputValue]);

  const [ flag, setFlag ] = useState(hasBootstrap);
  useEffect(() => {
    if(flag) {
      // doctorsTabCountShowImg(0);
    }
  }, [flag])

  useEffect(() => {
    if(asyncInputValue === null) return void null;
    if(!flag) return void null;

    getData();
  }, [asyncInputValue]);

  useEffect(() => {
    const element = document.querySelector('#scroll_wrapper');
    console.log(element, 'element')
    if(element) {
      element.scrollTo(0, 0)
    }

  }, [asyncInputValue]);

  return (
    <div className={classes.async}>
      <input
        className={classes.asyncInput}
        onChange={event => {
          // event.persist();
          doctorsTabAsyncInputValue(event.target.value);
          if(event.target.value === '') {
            // action of anythings
          }
          if(!hasBootstrap) {
            setFlag(true);
          }
        }}
        type="text"
        value={asyncInputValue === null ? '' : asyncInputValue}
        placeholder={placeholder}
      />
      <SearchIcon className={classes.asyncIconSearch}/>
    </div>
  )
};

export default AsyncSelectMedMap;