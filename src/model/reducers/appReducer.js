import {
  APP_TITLE_CHANGE,
  PERSONAL_ACCOUNT_PAGE_DESKTOP_ACTIVE_NODE,
  SNACKBARS_OPEN
} from '../actions/appAction';

let initialState = {
  title: 'test-example',
  expansionPanel: null,
  arterialPressureDeleteIndex: null,
  openSnackbar: false,
  desktopActiveTab: 0
};

export default (state = initialState, action) => {
  let newState;

  if(action.type === APP_TITLE_CHANGE) {
    newState = { ...state, title: action.title }
  }
  if(action.type === SNACKBARS_OPEN) {
    newState = { ...state, openSnackbar: action.openSnackbar }
  }
  if(action.type === PERSONAL_ACCOUNT_PAGE_DESKTOP_ACTIVE_NODE) {
    newState = { ...state, desktopActiveTab: action.desktopActiveTab }
  }

  return newState || state;
}

