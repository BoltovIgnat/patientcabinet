import React, {Fragment, forwardRef, useState, useEffect, createRef, useCallback, Profiler} from 'react';
import axios from 'axios';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './style';

import { SliderTemplate, AsyncSelectTemplate, AsyncSelectMedMap } from '../../../../Templates/MedMap';
import { MEDICAL_ORGS_OFFICIAL } from '../../../../../config';

import { useChangeForRequest, useForRequest } from '../../../../../useHooks';

const DoctorsTab = props => {
  const classes = useStyles();
  const {
    customClasses,
    sliderData,
    doctorsTabSliderData,
    doctorsTabUrl,
    countShowImg,
    doctorsTabCountShowImg,
    asyncInputValue,
    additionCountShowImg,

    dictionaryName,
    doctorsTabDictionaryName
  } = props;

  useEffect(() => {
    // console.log(countShowImg, 'countShowImg');
    // console.log(additionCountShowImg, 'additionCountShowImg');
    // console.log(dictionaryName, 'dictionaryName');
    // console.log(asyncInputValue, 'asyncInputValue');
  });

  const [ checkboxObject, setCheckboxObject ] = useForRequest({
    checkbox1: true,
    checkbox2: false
  });
  const {
    checkbox1,
    checkbox2
  } = checkboxObject;
  const changeForRequest = useChangeForRequest(checkboxObject, setCheckboxObject);

  useEffect(() => {
    if(!checkbox1 && !checkbox2) {
      setCheckboxObject(() => ({ checkbox1: true, checkbox2: true }));
    }

    // setDictionaryName(() => checkbox1 && checkbox2 ? 'clinics_doctors' :  checkbox1 ? 'clinics' : 'doctors');
    doctorsTabDictionaryName(checkbox1 && checkbox2 ? 'clinics_doctors' :  checkbox1 ? 'clinics' : 'doctors');
  }, [checkbox1, checkbox2, dictionaryName]);

  useEffect(() => {
    if(dictionaryName === null) return void null;
    const fetchData = async () => {
      try {
        const result = await axios({
          method: 'get',
          url: `${MEDICAL_ORGS_OFFICIAL}&keySearch=${dictionaryName}`
        });

        const { data: { data }, status, statusText } = result;

        if(status === 200) {
          doctorsTabSliderData({...data});
          console.log('request bootstrap from doctors tab')
        }
      } catch (e) {
        console.error(e.message, 'doctors tab');
      }
    };

    fetchData();
  }, [dictionaryName]);

  return (
    <Fragment>
      <div className={customClasses.pageBlock}>
        <AsyncSelectMedMap
          hasBootstrap={true}
          url={
            `${MEDICAL_ORGS_OFFICIAL}&keySearch=${dictionaryName}${asyncInputValue ? '&searchString=' + asyncInputValue : ''}`
          }
          placeholder="Врач, клиника, болезнь/симптомы, услуг"
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkbox1}
                onChange={event => {
                  // doctorsTabCountShowImg(0);

                  changeForRequest(event);
                }}
                name="checkbox1"
                color="primary"
                value="checkedA" />
            }
            label="Клиники"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={event => {
                  changeForRequest(event);
                }}
                checked={checkbox2}
                name="checkbox2"
                color="primary"
                value="checkedA" />
            }
            label="Врачи"
          />
        </FormGroup>
      </div>
      <div className={customClasses.pageBlock}>
        <div className={customClasses.pageBlockHeader}>Клиники</div>
        <SliderTemplate
          sliderData={sliderData && sliderData.clinics ? sliderData.clinics : []}
          url={`
            ${MEDICAL_ORGS_OFFICIAL}&keySearch=${dictionaryName}${asyncInputValue ? '&searchString=' + asyncInputValue : ''}
          `}
        />
      </div>
      <div className={customClasses.pageBlock}>
        <div className={customClasses.pageBlockHeader}>Врачи</div>
        <SliderTemplate
          sliderData={sliderData && sliderData.doctors ? sliderData.doctors : []}
          url={`
            ${MEDICAL_ORGS_OFFICIAL}&keySearch=${dictionaryName}${asyncInputValue ? '&searchString=' + asyncInputValue : ''}
          `}
        />
      </div>
      {/*<div className={customClasses.pageBlock}>*/}
      {/*  <div className={customClasses.pageBlockHeader}>Мои лечащие врачи</div>*/}
      {/*  <SliderTemplate*/}
      {/*    sliderData={sliderData && sliderData.doctors ? sliderData.doctors : []}*/}
      {/*  />*/}
      {/*</div>*/}
    </Fragment>
  )
};

export default DoctorsTab;
