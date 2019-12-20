import {
  OBJECT_STATUS_OPTIONS,
  DIAGNOSES_SAVE,
  SAVE_TOKEN,
  DOCTORS_TAB_SLIDER_DATA,
  DOCTORS_TAB_URL,
  DOCTORS_TAB_COUNT_SHOW_IMG,
  DOCTORS_TAB_DICTIONARY_NAME,
  DOCTORS_TAB_ASYNC_INPUT_VALUE,
  DOCTORS_TAB_ADDITION_COUNT_SHOW_IMG
} from '../actions/dataAction';

let initialState = {
  objectStatusOptions: [],
  diagnosesOptions: [],
  token: null,
  sliderData: null,
  skipNumber: null,
  sliderUrl: null,
  countShowImg: 0,
  dictionaryName: null,
  asyncInputValue: null,
  additionCountShowImg: 0
};

export default (state = initialState, action) => {
  let newState;
  
  if(action.type === OBJECT_STATUS_OPTIONS) {
    newState = { ...state, objectStatusOptions: [...action.objectStatusOptions] }
  }
  if(action.type === DIAGNOSES_SAVE) {
    newState = { ...state, diagnosesOptions: [...action.diagnosesOptions] }
  }
  if(action.type === SAVE_TOKEN) {
    newState = { ...state, token: action.token }
  }
  if(action.type === DOCTORS_TAB_SLIDER_DATA) {
    newState = { ...state, sliderData: action.sliderData }
  }
  if(action.type === DOCTORS_TAB_URL) {
    newState = { ...state, sliderUrl: action.sliderUrl }
  }
  if(action.type === DOCTORS_TAB_COUNT_SHOW_IMG) {
    newState = { ...state, countShowImg: action.countShowImg }
  }
  if(action.type === DOCTORS_TAB_DICTIONARY_NAME) {
    newState = { ...state, dictionaryName: action.dictionaryName }
  }
  if(action.type === DOCTORS_TAB_ASYNC_INPUT_VALUE) {
    newState = { ...state, asyncInputValue: action.asyncInputValue }
  }
  if(action.type === DOCTORS_TAB_ADDITION_COUNT_SHOW_IMG) {
    newState = { ...state, additionCountShowImg: action.additionCountShowImg }
  }

  return newState || state;
}
