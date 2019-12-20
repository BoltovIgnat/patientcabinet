import { RSAA } from 'redux-api-middleware';

// export const OBJECT_STATUS_OPTIONS_GET_REQUEST = 'OBJECT_STATUS_OPTIONS_GET_REQUEST';
// export const OBJECT_STATUS_OPTIONS_GET_SUCCESS = 'OBJECT_STATUS_OPTIONS_GET_SUCCESS';
// export const OBJECT_STATUS_OPTIONS_GET_FAILURE = 'OBJECT_STATUS_OPTIONS_GET_FAILURE';
//
// export const objectStatusOptionsGet = () => ({
//   [RSAA]: {
//     endpoint: OBJECT_STATUS_LYMPH_NODES_DICTIONARY_GET,
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     types: [
//       OBJECT_STATUS_OPTIONS_GET_REQUEST,
//       OBJECT_STATUS_OPTIONS_GET_SUCCESS,
//       OBJECT_STATUS_OPTIONS_GET_FAILURE
//     ]
//   }
// });

import React from 'react';

export const SAVE_TOKEN = 'SAVE_TOKEN';

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token
});

export const DOCTORS_TAB_SLIDER_DATA = 'DOCTORS_TAB_SLIDER_DATA';
export const doctorsTabSliderData = sliderData => ({
  type: DOCTORS_TAB_SLIDER_DATA,
  sliderData
});

export const DOCTORS_TAB_URL = 'DOCTORS_TAB_URL';
export const doctorsTabUrl = sliderUrl => ({
  type: DOCTORS_TAB_URL,
  sliderUrl
});

export const DOCTORS_TAB_COUNT_SHOW_IMG = 'DOCTORS_TAB_COUNT_SHOW_IMG';
export const doctorsTabCountShowImg = countShowImg => ({
  type: DOCTORS_TAB_COUNT_SHOW_IMG,
  countShowImg
});

export const DOCTORS_TAB_DICTIONARY_NAME = 'DOCTORS_TAB_DICTIONARY_NAME';
export const doctorsTabDictionaryName = dictionaryName => ({
  type: DOCTORS_TAB_DICTIONARY_NAME,
  dictionaryName
});

export const DOCTORS_TAB_ASYNC_INPUT_VALUE = 'DOCTORS_TAB_ASYNC_INPUT_VALUE';
export const doctorsTabAsyncInputValue = asyncInputValue => ({
  type: DOCTORS_TAB_ASYNC_INPUT_VALUE,
  asyncInputValue
});

export const DOCTORS_TAB_ADDITION_COUNT_SHOW_IMG = 'DOCTORS_TAB_ADDITION_COUNT_SHOW_IMG';
export const doctorsTabAdditionCountShowImg = additionCountShowImg => ({
  type: DOCTORS_TAB_ADDITION_COUNT_SHOW_IMG,
  additionCountShowImg
});